import "server-only";
import type { GithubActivityResponse, ContributionDay } from "@/types/github";
import { levelForCount } from "@/lib/utils";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ""; // server-only, never exposed to the client

interface GraphQLDay {
  date: string;
  contributionCount: number;
}
interface GraphQLWeek {
  contributionDays: GraphQLDay[];
}

/**
 * Fetches real GitHub activity for the configured user:
 *  - profile stats via the public REST API (no token required)
 *  - the contribution calendar via the GraphQL API (requires a token,
 *    since GitHub does not expose contribution history over REST)
 *
 * Never fabricates data — if the username isn't configured, or a fetch
 * fails, the response says so explicitly instead of inventing numbers.
 */
export async function getGithubActivity(): Promise<GithubActivityResponse> {
  if (!GITHUB_USERNAME) {
    return {
      configured: false,
      profile: null,
      totalContributions: null,
      days: [],
      calendarAvailable: false,
      error: "GITHUB_USERNAME is not set.",
    };
  }

  let profile: GithubActivityResponse["profile"] = null;
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // cache for an hour
    });
    if (!res.ok) throw new Error(`GitHub REST API responded ${res.status}`);
    const data = await res.json();
    profile = {
      login: data.login,
      htmlUrl: data.html_url,
      avatarUrl: data.avatar_url,
      publicRepos: data.public_repos,
    };
  } catch (err) {
    return {
      configured: true,
      profile: null,
      totalContributions: null,
      days: [],
      calendarAvailable: false,
      error: err instanceof Error ? err.message : "Failed to reach GitHub.",
    };
  }

  // Contribution calendar needs the GraphQL API + a token. If no token is
  // configured, we still return real profile stats, just without the
  // day-by-day calendar (calendarAvailable: false triggers the UI fallback).
  if (!GITHUB_TOKEN) {
    return {
      configured: true,
      profile,
      totalContributions: null,
      days: [],
      calendarAvailable: false,
      error: "GITHUB_TOKEN not set — contribution calendar unavailable.",
    };
  }

  try {
    const query = `
      query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;
    const gqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
      next: { revalidate: 3600 },
    });
    if (!gqlRes.ok) throw new Error(`GitHub GraphQL API responded ${gqlRes.status}`);
    const gqlJson = await gqlRes.json();
    const calendar = gqlJson?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) throw new Error("Contribution calendar missing from response.");

    const weeks: GraphQLWeek[] = calendar.weeks;
    const allDays: ContributionDay[] = weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: 0,
      }))
    );

    // Filter to activity from January 1, 2026 onward
    const days2026 = allDays.filter((d) => d.date >= "2026-01-01");
    const total2026Contributions = days2026.reduce((sum, d) => sum + d.count, 0);
    const max = Math.max(0, ...days2026.map((d) => d.count));

    days2026.forEach((d) => {
      d.level = levelForCount(d.count, max);
    });

    return {
      configured: true,
      profile,
      totalContributions: total2026Contributions,
      days: days2026,
      calendarAvailable: true,
    };
  } catch (err) {
    return {
      configured: true,
      profile,
      totalContributions: null,
      days: [],
      calendarAvailable: false,
      error: err instanceof Error ? err.message : "Failed to load contribution calendar.",
    };
  }
}

import "server-only";
import type { LeetcodeActivityResponse } from "@/types/leetcode";

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || "";

// LeetCode has no official public REST API. This uses a widely-used
// community-maintained stats endpoint. It is treated as unreliable by
// design: any failure falls back to an honest "unavailable" state rather
// than showing fabricated numbers.
const STATS_ENDPOINT = "https://leetcode-stats-api.herokuapp.com";

interface CommunityStatsResponse {
  status: string;
  totalSolved?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  ranking?: number;
  submissionCalendar?: Record<string, number>; // unix timestamp (seconds) -> count
}

export async function getLeetcodeActivity(): Promise<LeetcodeActivityResponse> {
  if (!LEETCODE_USERNAME) {
    return {
      configured: false,
      available: false,
      totalSolved: null,
      easySolved: null,
      mediumSolved: null,
      hardSolved: null,
      ranking: null,
      days: [],
      profileUrl: null,
      error: "LEETCODE_USERNAME is not set.",
    };
  }

  const profileUrl = `https://leetcode.com/${LEETCODE_USERNAME}/`;

  try {
    const res = await fetch(`${STATS_ENDPOINT}/${LEETCODE_USERNAME}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`LeetCode stats source responded ${res.status}`);
    const data: CommunityStatsResponse = await res.json();
    if (data.status !== "success") throw new Error("Unexpected response from stats source.");

    const counts = Object.values(data.submissionCalendar || {});
    const max = Math.max(0, ...counts);
    const days = Object.entries(data.submissionCalendar || {}).map(([ts, count]) => {
      const date = new Date(Number(ts) * 1000).toISOString().slice(0, 10);
      const level =
        count <= 0 ? 0 : max <= 0 ? 1 : count / max > 0.75 ? 4 : count / max > 0.5 ? 3 : count / max > 0.2 ? 2 : 1;
      return { date, count, level: level as 0 | 1 | 2 | 3 | 4 };
    });

    return {
      configured: true,
      available: true,
      totalSolved: data.totalSolved ?? null,
      easySolved: data.easySolved ?? null,
      mediumSolved: data.mediumSolved ?? null,
      hardSolved: data.hardSolved ?? null,
      ranking: data.ranking ?? null,
      days,
      profileUrl,
    };
  } catch (err) {
    return {
      configured: true,
      available: false,
      totalSolved: null,
      easySolved: null,
      mediumSolved: null,
      hardSolved: null,
      ranking: null,
      days: [],
      profileUrl,
      error: err instanceof Error ? err.message : "Failed to reach LeetCode stats source.",
    };
  }
}

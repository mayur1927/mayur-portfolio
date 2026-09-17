import { getGithubActivity } from "@/lib/github";
import SectionHeading from "@/components/ui/SectionHeading";
import ContributionGrid from "./ContributionGrid";

export default async function GitHubActivity() {
  const data = await getGithubActivity();

  return (
    <section id="github" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <SectionHeading kicker="GITHUB ACTIVITY" title="Live from GitHub." />
          {data.profile && (
            <div className="flex flex-wrap gap-8 font-mono">
              <Stat label="PUBLIC REPOS" value={data.profile.publicRepos} />
              <Stat label="FOLLOWERS" value={data.profile.followers} />
              <Stat label="FOLLOWING" value={data.profile.following} />
            </div>
          )}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-line bg-panel p-6">
          {data.calendarAvailable ? (
            <div className="min-w-[640px]">
              <ContributionGrid days={data.days} />
              {data.totalContributions !== null && (
                <p className="mt-4 font-mono text-xs text-fg-faint">
                  {data.totalContributions} contributions in the last year
                </p>
              )}
            </div>
          ) : (
            <p className="font-mono text-[0.78rem] leading-relaxed text-fg-faint">
              {!data.configured
                ? "Set GITHUB_USERNAME (and optionally GITHUB_TOKEN, for the full contribution calendar) in your environment variables to activate this section."
                : !data.profile
                ? `Could not load GitHub data for "${process.env.GITHUB_USERNAME}". ${data.error ?? ""}`
                : "Profile stats loaded, but the contribution calendar needs a GITHUB_TOKEN (GitHub only exposes contribution history through its authenticated GraphQL API)."}
            </p>
          )}
        </div>

        {data.profile && (
          <p className="mt-4">
            <a
              href={data.profile.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="inline-flex items-center gap-2 border-b border-fg-faint pb-1 font-mono text-[0.78rem] tracking-wide hover:border-accent hover:text-accent"
            >
              VIEW PROFILE ON GITHUB <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold">{value}</div>
      <div className="font-mono text-[0.68rem] tracking-wide text-fg-faint">{label}</div>
    </div>
  );
}

import { getLeetcodeActivity } from "@/lib/leetcode";
import SectionHeading from "@/components/ui/SectionHeading";
import ActivityHeatmap from "./ActivityHeatmap";

export default async function LeetCodeActivity() {
  const data = await getLeetcodeActivity();

  return (
    <section id="leetcode" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <SectionHeading kicker="LEETCODE ACTIVITY" title="Problem-solving log." />
          {data.available && (
            <div className="flex flex-wrap gap-8 font-mono">
              <Stat label="SOLVED" value={data.totalSolved} />
              <Stat label="RANKING" value={data.ranking ? `#${data.ranking}` : "—"} />
            </div>
          )}
        </div>

        {data.available && (
          <div className="mb-6 flex flex-wrap gap-5 font-mono text-[0.78rem]">
            <span className="text-[#3ddc84]">EASY {data.easySolved}</span>
            <span className="text-[#ffb703]">MEDIUM {data.mediumSolved}</span>
            <span className="text-[#ff5c5c]">HARD {data.hardSolved}</span>
          </div>
        )}

        <div className="overflow-x-auto rounded-2xl border border-line bg-panel p-6">
          <div className="min-w-[640px]">
            <ActivityHeatmap days={data.days} />
          </div>
        </div>

        <p className="mt-4 font-mono text-[0.78rem] leading-relaxed text-fg-faint">
          {!data.configured
            ? "Set LEETCODE_USERNAME in your environment variables to activate this section."
            : !data.available
            ? "Activity temporarily unavailable — LeetCode doesn't expose a stable public API, so this reflects a fetch failure rather than an absence of activity."
            : "Live from LeetCode."}
        </p>

        {data.profileUrl && (
          <p className="mt-2">
            <a
              href={data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="inline-flex items-center gap-2 border-b border-fg-faint pb-1 font-mono text-[0.78rem] tracking-wide hover:border-accent hover:text-accent"
            >
              VIEW PROFILE ON LEETCODE <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string | null }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold">{value ?? "—"}</div>
      <div className="font-mono text-[0.68rem] tracking-wide text-fg-faint">{label}</div>
    </div>
  );
}

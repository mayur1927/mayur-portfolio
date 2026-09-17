import type { LeetcodeSubmissionDay } from "@/types/leetcode";
import { formatDateLabel } from "@/lib/utils";

export default function ActivityHeatmap({ days }: { days: LeetcodeSubmissionDay[] }) {
  // Always render a fixed-size grid so the layout never jumps: pad with
  // empty (no-data) cells if there isn't a full year of real data yet.
  const CELL_COUNT = 130;
  const padded = [...days].slice(-CELL_COUNT);
  const placeholders = Math.max(0, CELL_COUNT - padded.length);

  return (
    <div className="grid grid-cols-[repeat(26,1fr)] gap-1" role="img" aria-label="LeetCode submission activity">
      {Array.from({ length: placeholders }).map((_, i) => (
        <div key={`ph-${i}`} className="heat-cell leet" data-level="0" title="No data" />
      ))}
      {padded.map((day) => (
        <div
          key={day.date}
          className="heat-cell leet"
          data-level={day.level}
          title={`${day.count} submission${day.count === 1 ? "" : "s"}\n${formatDateLabel(day.date)}`}
        />
      ))}
    </div>
  );
}

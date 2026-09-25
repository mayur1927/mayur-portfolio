import type { ContributionDay } from "@/types/github";
import { formatDateLabel } from "@/lib/utils";

export default function ContributionGrid({ days }: { days: ContributionDay[] }) {
  return (
    <div className="grid grid-cols-[repeat(26,1fr)] gap-1" role="img" aria-label="GitHub contribution activity since January 1, 2026">
      {days.map((day) => (
        <div
          key={day.date}
          className="heat-cell"
          data-level={day.level}
          title={`${day.count} contribution${day.count === 1 ? "" : "s"}\n${formatDateLabel(day.date)}`}
        />
      ))}
    </div>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";

export default function EducationTimeline() {
  return (
    <section id="education" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHeading kicker="EDUCATION" title="Where it started." />
        <div className="relative pl-8">
          <div className="absolute left-[6px] top-1 bottom-1 w-px bg-line" />
          {EDUCATION.map((item) => (
            <div key={item.title} className="relative pb-11 last:pb-0">
              <div className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-bg" />
              <p className="font-mono text-xs text-fg-faint">{item.period}</p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-fg-dim">{item.place}</p>
              <p className="mt-1.5 font-mono text-sm text-accent">{item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

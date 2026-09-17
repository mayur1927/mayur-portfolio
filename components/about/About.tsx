import AnimatedText from "@/components/animations/AnimatedText";

const TAGS = ["FULL-STACK", "AI / NLP", "ANDROID", "PROBLEM SOLVING"];

export default function About() {
  return (
    <section id="about" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <AnimatedText
          as="p"
          text="I LIKE BUILDING THINGS."
          className="font-display text-[clamp(2.6rem,8vw,5.6rem)] font-bold leading-[1] tracking-tight"
        />
        <div className="mt-9 flex flex-wrap gap-3.5 font-mono text-xs text-fg-dim">
          {TAGS.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3.5 py-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

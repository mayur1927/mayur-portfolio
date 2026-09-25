import SectionHeading from "@/components/ui/SectionHeading";

const HIGHLIGHT_TAGS = [
  "FULL-STACK WEB",
  "ANDROID (KOTLIN & COMPOSE)",
  "PYTHON & FASTAPI",
  "REACT.JS & POSTGRESQL",
  "AI / NLP",
];

export default function About() {
  return (
    <section id="about" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHeading kicker="ABOUT ME" title="Turning ideas into working software." />

        <div className="max-w-3xl space-y-6 text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed text-fg-dim">
          <p>
            I am a Computer Engineering student at Ajeenkya D. Y. Patil School of Engineering, Pune.
            I focus on building full-stack web applications, native Android apps, and software powered by AI and NLP.
          </p>
          <p>
            My work revolves around translating real-world requirements into clean, practical software.
            I&apos;ve engineered systems like <strong className="font-semibold text-fg">SkyLens</strong> (a native Android weather app built with Jetpack Compose),
            <strong className="font-semibold text-fg"> Atelier</strong> (a full-stack e-commerce platform using FastAPI, React.js, and PostgreSQL), and
            <strong className="font-semibold text-fg"> AI Resume Analyzer</strong> (an NLP pipeline built with spaCy and Streamlit to evaluate ATS skill compatibility).
          </p>
          <p>
            Whether I&apos;m developing REST APIs, designing responsive user interfaces, or modeling database schemas,
            I am driven by continuous learning, problem-solving, and sharpening my engineering fundamentals.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3.5 font-mono text-xs text-fg-dim">
          {HIGHLIGHT_TAGS.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3.5 py-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

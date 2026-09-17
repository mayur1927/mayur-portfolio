"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  "RESUME.PDF",
  "TEXT EXTRACTION",
  "NLP PROCESSING (spaCy)",
  "SKILL DETECTION",
  "JOB MATCHING",
  "MISSING SKILLS",
  "ATS SCORE",
];
const SKILLS = ["Python", "FastAPI", "spaCy", "PostgreSQL", "Streamlit", "NLP"];

/** AI Resume Analyzer: an animated pipeline + a counting "demo" ATS score card. */
export default function ResumeAnalyzerVisual() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const atsCardRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pipelineRef.current,
        start: "top 70%",
        end: "bottom 60%",
        scrub: 1,
        onUpdate: (self) => {
          if (lineRef.current) lineRef.current.style.height = `${self.progress * 100}%`;
          const activeCount = Math.floor(self.progress * STEPS.length);
          stepRefs.current.forEach((el, i) => el?.classList.toggle("text-fg", i < activeCount));
        },
      });

      ScrollTrigger.create({
        trigger: atsCardRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          const counter = { v: 0 };
          gsap.to(counter, {
            v: 87,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              if (scoreRef.current) scoreRef.current.textContent = `${Math.round(counter.v)}%`;
            },
          });
          if (skillsRef.current) {
            gsap.to(skillsRef.current.children, { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 });
          }
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="grid gap-9 md:grid-cols-2">
      <div ref={pipelineRef} className="relative pl-7">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />
        <div ref={lineRef} className="absolute left-[5px] top-1.5 h-0 w-px bg-accent-2 transition-[height] duration-500" />
        {STEPS.map((s, i) => (
          <div
            key={s}
            ref={(el) => {
              if (el) stepRefs.current[i] = el;
            }}
            className="relative py-3 font-mono text-[0.82rem] text-fg-dim before:absolute before:-left-[25px] before:top-[18px] before:h-[9px] before:w-[9px] before:rounded-full before:border before:border-fg-faint before:bg-bg before:content-['']"
          >
            {s}
          </div>
        ))}
      </div>

      <div ref={atsCardRef} className="rounded-2xl border border-line bg-panel p-7">
        <p className="font-mono text-xs tracking-wide text-fg-dim">ATS SCORE (DEMO)</p>
        <p ref={scoreRef} className="mt-2 font-display text-[clamp(3rem,7vw,4.6rem)] font-bold text-accent-2">
          0%
        </p>
        <p className="mt-5 font-mono text-xs tracking-wide text-fg-dim">DETECTED SKILLS</p>
        <div ref={skillsRef} className="mt-2.5 flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="translate-y-1.5 rounded-md bg-accent-2/10 px-2.5 py-1.5 font-mono text-[0.68rem] text-[#cdc7ff] opacity-0"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

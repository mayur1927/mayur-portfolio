"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import RoleCycler from "./RoleCycler";
import { SITE_CONFIG } from "@/lib/constants";

const FLOAT_KEYWORDS = ["REST API", "KOTLIN", "FASTAPI", "spaCy", "POSTGRESQL", "REACT", "NLP", "ANDROID"];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      gsap.to(".hero-name-line span", {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".hero-fade-in", {
        opacity: 0,
        y: 16,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.5,
      });

      if (!prefersReduced) {
        gsap.utils.toArray<HTMLElement>(".float-kw").forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? 22 : -22,
            duration: 6 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 md:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-55 [mask-image:radial-gradient(ellipse_at_50%_30%,#000_10%,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(#1e2427 1px, transparent 1px), linear-gradient(90deg, #1e2427 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-[10%] left-1/2 z-0 h-[60vw] w-[60vw] max-w-[800px] max-h-[800px] -translate-x-1/2 rounded-full blur-md"
        style={{ background: "radial-gradient(circle, rgba(70,224,196,.14), transparent 65%)" }}
      />
      {FLOAT_KEYWORDS.map((kw, i) => (
        <span
          key={kw}
          aria-hidden="true"
          className="float-kw pointer-events-none absolute z-0 select-none font-mono text-xs text-fg-faint tracking-wide"
          style={{ left: `${8 + ((i * 11) % 84)}%`, top: `${14 + ((i * 17) % 64)}%` }}
        >
          {kw}
        </span>
      ))}

      <div className="wrap relative z-10 !mx-0 !max-w-none !px-0">
        <p className="hero-fade-in mb-5 flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_theme(colors.accent)]" />
          {SITE_CONFIG.location.toUpperCase()} — AVAILABLE FOR OPPORTUNITIES
        </p>
        <h1 className="font-display text-[clamp(3.2rem,10vw,8rem)] font-bold leading-[0.94] tracking-tight">
          <span className="hero-name-line block overflow-hidden">
            <span className="inline-block translate-y-full">MAYUR</span>
          </span>
          <span className="hero-name-line block overflow-hidden">
            <span className="inline-block translate-y-full">CHAUDHARI</span>
          </span>
        </h1>
        <p className="hero-fade-in mt-6 h-8 font-mono text-[clamp(0.95rem,1.6vw,1.25rem)] text-fg-dim">
          <RoleCycler />
        </p>
        <p className="hero-fade-in mt-7 max-w-[540px] text-[clamp(1rem,1.6vw,1.15rem)] text-fg-dim">
          I build digital systems, products and experiments — from Android weather apps to NLP resume pipelines.
        </p>
        <div className="hero-fade-in mt-11 flex flex-wrap gap-6 font-mono text-xs text-fg-faint">
          <span><strong className="font-medium text-fg">B.E.</strong> Computer Engineering</span>
          <span><strong className="font-medium text-fg">CGPA</strong> 8.67/10</span>
          <span><strong className="font-medium text-fg">Focus</strong> Full-Stack · AI/NLP · Android</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-5 z-10 flex items-center gap-2.5 font-mono text-xs tracking-wide text-fg-faint md:left-16" aria-hidden="true">
        <span className="h-7 w-px animate-scrollcue bg-gradient-to-b from-accent to-transparent" />
        SCROLL
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  as?: "p" | "h2" | "h3";
  className?: string;
  wordClassName?: string;
}

/**
 * Splits text into words and fades each one in as the section scrolls
 * into view (scrubbed to scroll position, not a one-shot entrance).
 * Used for the intro statement and the "I like building things" line.
 */
export default function AnimatedText({ text, as: Component = "p", className, wordClassName }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;
    const words = ref.current.querySelectorAll<HTMLElement>(".reveal-word");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(words, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(words, {
        opacity: 1,
        stagger: 0.04,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "bottom 65%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const words = text.split(" ");

  return (
    <Component ref={ref as React.Ref<HTMLParagraphElement & HTMLHeadingElement>} className={className}>
      {words.map((w, i) => (
        <span key={i} className={cn("reveal-word", wordClassName)}>
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Component>
  );
}

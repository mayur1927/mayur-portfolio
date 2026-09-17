"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ROLES } from "@/lib/constants";

export default function RoleCycler() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        opacity: 0,
        y: -8,
        duration: 0.35,
        onComplete: () => {
          setIndex((i) => (i + 1) % ROLES.length);
          gsap.fromTo(ref.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 });
        },
      });
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <span ref={ref} className="text-accent">
      {ROLES[index]}
    </span>
  );
}

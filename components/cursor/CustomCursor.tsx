"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Premium custom cursor: a small dot that expands into a text label
 * ("VIEW", "OPEN ↗") when hovering interactive elements. Disabled
 * entirely on touch devices via CSS (see .cursor-dot in globals.css)
 * and never required to operate the site — every element underneath
 * remains a normal focusable link/button.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${e.clientX}px`;
        labelRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest<HTMLElement>("[data-cursor]");
      if (trigger) setLabel(trigger.dataset.cursor || "");
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) setLabel("");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference transition-[width,height] duration-200"
        style={{ width: label ? 0 : 10, height: label ? 0 : 10 }}
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className={`cursor-label pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-bg transition-transform duration-200 ${
          label ? "scale-100" : "scale-0"
        }`}
      >
        {label}
      </div>
    </>
  );
}

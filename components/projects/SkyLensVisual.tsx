"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CLOUDS = [
  { size: 90, left: "8%", top: "10%" },
  { size: 130, left: "45%", top: "6%" },
  { size: 70, left: "70%", top: "20%" },
  { size: 110, left: "20%", top: "30%" },
  { size: 80, left: "60%", top: "34%" },
];

/** SkyLens: an atmosphere-themed panel with a phone mockup and drifting clouds. */
export default function SkyLensVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.utils.toArray<HTMLElement>(".sky-cloud").forEach((cloud, i) => {
          gsap.to(cloud, {
            x: 40 + (i % 3) * 20,
            duration: 14 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
      gsap.fromTo(
        phoneRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: phoneRef.current, start: "top 85%" } }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative h-[460px] overflow-hidden rounded-2xl border border-line"
      style={{ background: "linear-gradient(180deg, #0d1e2b, #0a1218)" }}
    >
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="sky-cloud absolute rounded-full bg-white/5 blur-[1px]"
          style={{ width: c.size, height: c.size * 0.55, left: c.left, top: c.top }}
        />
      ))}
      <div
        ref={phoneRef}
        className="absolute bottom-6 left-1/2 w-[180px] -translate-x-1/2 rounded-[26px] border-2 border-[#202a30] p-2.5"
        style={{ background: "#0b0f12", boxShadow: "0 30px 60px -20px rgba(0,0,0,.6)" }}
      >
        <div
          className="rounded-[18px] px-4 py-5 font-mono text-[#dff5ee]"
          style={{ background: "linear-gradient(160deg, #123146, #0a1a24)" }}
        >
          <div className="text-[0.7rem] tracking-wide text-[#9fd8c8]">PUNE, IN</div>
          <div className="mt-2.5 font-display text-[2.6rem] font-semibold">27°</div>
          <div className="mt-1 text-[0.7rem] text-[#8fb6ad]">Partly cloudy</div>
          <div className="mt-6 flex flex-col gap-2">
            {[["Humidity", "58%"], ["Wind", "11 km/h"], ["Forecast", "5-day"]].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-dashed border-[#9fd8c826] pb-1.5 text-[0.62rem] text-[#9fd8c8]">
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

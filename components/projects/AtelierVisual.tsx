"use client";

const PRODUCTS = [
  { name: "Product A", tag: "IN STOCK" },
  { name: "Product B", tag: "IN STOCK" },
  { name: "Product C", tag: "LOW STOCK" },
  { name: "Product D", tag: "IN STOCK" },
];

/** Atelier: horizontally-scrolling product cards, luxury-commerce styling. */
export default function AtelierVisual() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
      {PRODUCTS.map((p) => (
        <div
          key={p.name}
          className="flex h-[260px] w-[200px] flex-shrink-0 flex-col justify-end rounded-2xl border border-line p-4 transition-transform duration-300 hover:-translate-y-2 hover:border-accent-2"
          style={{ background: "linear-gradient(155deg, #171018, #0d0a10)", scrollSnapAlign: "start" }}
        >
          <div
            className="mb-3.5 flex-1 rounded-[10px]"
            style={{ background: "linear-gradient(135deg, rgba(139,127,255,.22), rgba(139,127,255,.02))" }}
          />
          <div className="font-display text-base font-semibold">{p.name}</div>
          <div className="mt-1 font-mono text-[0.65rem] text-fg-faint">{p.tag}</div>
        </div>
      ))}
    </div>
  );
}

export function AtelierFlow() {
  const steps = ["PRODUCT", "AUTH", "CART", "ORDER"];
  return (
    <div className="mb-7 flex flex-wrap items-center gap-2.5 font-mono text-xs tracking-wide text-fg-dim">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2.5">
          <span className="rounded-full border border-line px-3.5 py-2">{s}</span>
          {i < steps.length - 1 && <span className="text-accent-2">→</span>}
        </span>
      ))}
    </div>
  );
}

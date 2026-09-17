"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { TOOLKIT } from "@/lib/constants";

/**
 * Hovering (or focusing) a linked skill toggles `.toolkit-highlight` on any
 * `.project-card` whose `data-skills` list includes that skill id. The
 * project cards live in a separate server-rendered component tree, so this
 * reaches them via plain DOM queries rather than React state/context —
 * simple, and there's nothing else that needs to react to the hover.
 */
function activate(skillId: string) {
  document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
    const skills = (card.dataset.skills || "").split(",");
    card.classList.toggle("toolkit-highlight", skills.includes(skillId));
  });
}
function deactivate() {
  document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
    card.classList.remove("toolkit-highlight");
  });
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHeading
          kicker="TOOLKIT"
          title="Hover a skill, see it in action."
          description="Skills tied to a project below light it up — the rest are just tools I reach for often."
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-9">
          {TOOLKIT.map((cat) => (
            <div key={cat.category}>
              <h3 className="mb-3.5 font-mono text-xs tracking-[0.1em] text-fg-faint">{cat.category}</h3>
              <ul className="flex flex-col gap-0.5">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    tabIndex={item.skillId ? 0 : undefined}
                    onMouseEnter={item.skillId ? () => activate(item.skillId!) : undefined}
                    onMouseLeave={item.skillId ? deactivate : undefined}
                    onFocus={item.skillId ? () => activate(item.skillId!) : undefined}
                    onBlur={item.skillId ? deactivate : undefined}
                    className={`inline-block py-1 font-display text-[1.15rem] transition-[color,transform] duration-200 ${
                      item.skillId
                        ? "cursor-pointer text-fg-dim hover:translate-x-1.5 hover:text-accent focus-visible:translate-x-1.5 focus-visible:text-accent"
                        : "text-fg-dim"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

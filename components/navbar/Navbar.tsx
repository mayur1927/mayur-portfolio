"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[500] flex items-center justify-between px-5 py-5 font-mono text-[0.78rem] tracking-wide transition-[background,padding,border-color] duration-300 md:px-16",
          scrolled && "border-b border-line bg-bg/80 py-3.5 backdrop-blur-md"
        )}
      >
        <a href="/#top" className="font-display text-base font-semibold">
          MAYUR.C
        </a>
        <nav className="hidden gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-fg-dim transition-colors hover:text-fg"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          className="rounded border border-line px-3 py-2 font-mono text-sm md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          MENU
        </button>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[600] flex flex-col justify-center gap-6 bg-bg px-8 transition-transform duration-500",
          menuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <button
          className="absolute right-6 top-6 font-mono text-sm"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          CLOSE ✕
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl text-fg"
          >
            {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
          </a>
        ))}
      </div>
    </>
  );
}

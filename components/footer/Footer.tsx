import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-display text-lg font-semibold">{SITE_CONFIG.name.toUpperCase()}</p>
            <p className="mt-1 font-mono text-xs text-fg-faint">{SITE_CONFIG.location.toUpperCase()}</p>
          </div>
          <div className="flex gap-5 font-mono text-sm text-fg-dim">
            {SOCIAL_LINKS.github && (
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                GITHUB ↗
              </a>
            )}
            {SOCIAL_LINKS.linkedin && (
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                LINKEDIN ↗
              </a>
            )}
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-accent">
              EMAIL ↗
            </a>
          </div>
          <a href="/#top" className="font-mono text-xs text-fg-faint hover:text-accent">
            BACK TO TOP ↑
          </a>
        </div>
        <p className="mt-7 font-mono text-[0.68rem] text-fg-faint">© 2026 {SITE_CONFIG.name.toUpperCase()}</p>
      </div>
    </footer>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { getGmailComposeUrl } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const contactEmail = SOCIAL_LINKS.email || "mayurchaudhari1927@gmail.com";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Opening Gmail...");
    const subject = `Portfolio Contact — ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    const gmailUrl = getGmailComposeUrl(contactEmail, subject, body);

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <p className="mb-4 font-mono text-xs tracking-[0.1em] text-accent">CONTACT</p>
        <h2 className="font-display text-[clamp(2.4rem,8vw,6rem)] font-bold leading-[1.05] tracking-tight">
          LET&apos;S BUILD
          <br />
          SOMETHING.
        </h2>

        <div className="mt-8 flex flex-wrap gap-7 font-mono text-sm">
          <a
            href={getGmailComposeUrl(contactEmail)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN ↗"
            className="border-b border-fg-faint pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            {contactEmail}
          </a>
          {SOCIAL_LINKS.github ? (
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="border-b border-fg-faint pb-1 transition-colors hover:border-accent hover:text-accent"
            >
              GITHUB ↗
            </a>
          ) : null}
          {SOCIAL_LINKS.linkedin ? (
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="border-b border-fg-faint pb-1 transition-colors hover:border-accent hover:text-accent"
            >
              LINKEDIN ↗
            </a>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="mt-12 flex max-w-[520px] flex-col gap-4">
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            aria-label="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (status) setStatus(null);
            }}
            className="border-b border-line bg-transparent px-0.5 py-3 text-fg outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status) setStatus(null);
            }}
            className="border-b border-line bg-transparent px-0.5 py-3 text-fg outline-none focus:border-accent"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What are you building?"
            aria-label="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (status) setStatus(null);
            }}
            className="border-b border-line bg-transparent px-0.5 py-3 text-fg outline-none focus:border-accent"
          />
          <MagneticButton
            type="submit"
            className="mt-2.5 self-start rounded-full border border-fg px-6 py-3 font-mono text-xs transition-colors hover:bg-fg hover:text-bg"
          >
            SEND MESSAGE
          </MagneticButton>
        </form>

        {status && <p className="mt-3 font-mono text-xs text-accent">{status}</p>}

        <p className="mt-3 font-mono text-xs text-fg-faint">
          Opens Gmail in a new tab with your message pre-filled.
        </p>
      </div>
    </section>
  );
}

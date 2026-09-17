"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  type?: "button" | "submit";
  href?: string;
  target?: string;
  rel?: string;
  cursorLabel?: string;
}

/** A button/link that subtly pulls toward the cursor on hover. */
export default function MagneticButton({
  children,
  className,
  onClick,
  as = "button",
  type = "button",
  href,
  target,
  rel,
  cursorLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, { x: x * 0.25, y: y * 0.35, duration: 0.4, ease: "power2.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    className: cn("inline-block will-change-transform", className),
    "data-cursor": cursorLabel,
  };

  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
      </a>
    );
  }

  return <button type={type} {...sharedProps}>{children}</button>;
}

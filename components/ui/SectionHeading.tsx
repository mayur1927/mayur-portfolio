interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="pb-10 md:pb-16">
      <p className="mb-3.5 font-mono text-xs tracking-[0.1em] text-accent">{kicker}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">{title}</h2>
      {description && <p className="mt-2.5 max-w-xl text-fg-dim">{description}</p>}
    </div>
  );
}

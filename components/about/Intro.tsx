import AnimatedText from "@/components/animations/AnimatedText";

export default function Intro() {
  return (
    <section className="py-[clamp(70px,14vw,150px)]">
      <div className="wrap">
        <AnimatedText
          as="p"
          text="Computer Engineering student building full-stack, AI and mobile applications."
          className="max-w-4xl font-display text-[clamp(1.6rem,4.6vw,3.1rem)] font-medium leading-[1.3]"
        />
      </div>
    </section>
  );
}

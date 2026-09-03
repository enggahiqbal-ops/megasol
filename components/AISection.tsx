import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function AISection() {
  return (
    <section className="py-20 sm:py-28 lg:py-[7.5rem]">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow">The future of creative work</p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.15rem,4.8vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Beyond AI-powered. <span className="italic-accent">Built around AI.</span>
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-7 text-ink-soft">
            Human creative judgment meets intelligent production workflows to deliver
            stronger ideas, faster execution and consistent quality.
          </p>
          <div className="mt-8">
            <Button href="/about#process" variant="secondary">
              Explore Our Process
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="media-frame grain relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/4] lg:aspect-[5/4.2]">
            <MediaImage
              src="/images/services/ai-desk.jpg"
              alt="Creative producer reviewing AI-assisted cuts on a dual-monitor desk"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

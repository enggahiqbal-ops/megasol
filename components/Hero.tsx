import { Play } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-10 sm:pt-14 lg:pt-16">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">The future of creative production</p>
          <h1 className="mt-5 max-w-[14ch] text-[clamp(2.7rem,8.4vw,7.35rem)] font-medium leading-[0.92] tracking-[-0.055em] text-ink">
            Your creative team, powered by{" "}
            <span className="italic-accent">humans and AI.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.08} className="mt-7 max-w-[36rem]">
          <p className="text-[1.05rem] leading-7 text-ink-soft sm:text-[1.125rem] sm:leading-8">
            Scale your content production with expert editors, designers and AI-powered
            workflows built for speed, quality and consistency.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button openCall>Book a Free Call</Button>
            <Button href="/work" variant="secondary">
              See Our Work
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="site-shell mt-12 sm:mt-16">
        <div className="media-frame grain relative aspect-[16/10] w-full rounded-[22px] sm:aspect-[16/8.4] sm:rounded-[28px] lg:rounded-[32px]">
          <MediaImage
            src="/images/hero/studio.jpg"
            alt="Editors and motion designers working in a VAYRO STUDIOS production suite"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <p className="max-w-[18rem] text-sm text-white/85 sm:text-base">
              Production montage · YouTube, launch films, short-form and motion
            </p>
            <button
              type="button"
              className="focus-ring inline-flex size-14 items-center justify-center rounded-full bg-canvas text-primary shadow-lg sm:size-16"
              aria-label="Play production montage"
            >
              <Play className="ml-0.5 size-5 fill-current" aria-hidden />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

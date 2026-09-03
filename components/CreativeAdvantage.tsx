import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function CreativeAdvantage() {
  return (
    <section className="pb-8 sm:pb-12">
      <div className="site-shell">
        <div className="overflow-hidden rounded-[28px] bg-ink text-white lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-20">
            <p className="eyebrow text-white/55">Your creative advantage</p>
            <h2 className="mt-5 max-w-[13ch] text-[clamp(2.1rem,4.2vw,4.1rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              The creative partner your team has been looking for.
            </h2>
            <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-7 text-white/70">
              VAYRO STUDIOS sits beside your in-house team — editors, motion artists and
              strategists who can absorb volume without turning your brand into a template.
            </p>
            <div className="mt-8">
              <Button openCall variant="light">
                Book a Free Call
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative min-h-[280px] lg:min-h-full">
            <div className="media-frame relative h-full min-h-[320px] lg:min-h-[560px]">
              <MediaImage
                src="/images/hero/montage.jpg"
                alt="On-set camera and lighting for a branded film production"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

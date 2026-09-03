import { workflowSteps } from "@/lib/site";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function CreativePlatform() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="site-shell">
        <Reveal className="max-w-[40rem]">
          <p className="eyebrow">Easy & hassle-free</p>
          <h2 className="mt-5 text-[clamp(2.1rem,4.6vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            One workflow for your entire <span className="italic-accent">creative process.</span>
          </h2>
          <p className="mt-6 text-[1.05rem] leading-7 text-ink-soft">
            Brief once. Review in one place. Receive files that are actually ready to publish.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="media-frame grain relative aspect-[16/9] overflow-hidden rounded-[28px] sm:aspect-[16/7.5]">
            <MediaImage
              src="/images/services/edit-suite.jpg"
              alt="Creative workspace mockup showing a VAYRO production timeline"
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/10 to-transparent" />
            <div className="absolute left-6 top-6 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-sm sm:left-8 sm:top-8">
              <p className="text-xs uppercase tracking-[0.14em] text-white/70">Workspace</p>
              <p className="mt-1 text-lg font-medium">Northline · Weekly Episode 48</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((step, i) => (
            <Reveal key={step.name} delay={i * 0.06}>
              <article className="h-full rounded-[20px] border border-line bg-white/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">{step.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

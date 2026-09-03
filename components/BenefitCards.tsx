import { Clapperboard, Globe2, Sparkles } from "lucide-react";
import { benefits } from "@/lib/site";
import Reveal from "@/components/Reveal";

const icons = [Clapperboard, Globe2, Sparkles];

export default function BenefitCards() {
  return (
    <section className="py-20 sm:py-24">
      <div className="site-shell">
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-[24px] border border-line bg-white/60 p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8">
                  <span className="mb-8 inline-flex size-11 items-center justify-center rounded-2xl bg-canvas-2 text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h3 className="mt-3 text-[1.45rem] font-medium leading-[1.15] tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-7 text-ink-soft">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

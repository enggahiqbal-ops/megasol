import { differentiators } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Differentiators() {
  return (
    <section className="py-20 sm:py-28">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">Our difference</p>
          <h2 className="mt-5 max-w-[16ch] text-[clamp(2.1rem,4.6vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Built for brands that refuse to compromise.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {differentiators.map((item, i) => (
            <Reveal key={item.kicker} delay={i * 0.07} className="border-t border-line pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">{item.kicker}</p>
              <h3 className="mt-5 text-[1.45rem] font-medium leading-[1.15] tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-ink-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

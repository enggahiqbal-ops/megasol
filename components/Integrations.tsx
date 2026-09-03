import { integrations } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Integrations() {
  return (
    <section className="py-12 sm:py-16">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">Integrates with your workflow</p>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(1.8rem,3.4vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Keep work in the tools your team already uses.
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {integrations.map((name) => (
            <span
              key={name}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium tracking-[-0.02em] text-ink-soft"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

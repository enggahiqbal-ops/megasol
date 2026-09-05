"use client";

import { useState } from "react";
import { comparisonCategories, comparisonOptions } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Comparison() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">VAYRO vs. traditional alternatives</p>
          <h2 className="mt-5 max-w-[14ch] text-[clamp(2.1rem,4.6vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Why settle for <span className="italic-accent">slow production?</span>
          </h2>
        </Reveal>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Comparison categories">
          {comparisonCategories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === i ? "bg-primary text-canvas" : "bg-white text-ink-soft hover:text-ink"
              }`}
              onClick={() => setActive(i)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {comparisonOptions.map((option) => (
            <article
              key={option.name}
              className={`rounded-[24px] p-6 transition-colors ${
                option.highlight ? "bg-primary text-canvas" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-medium tracking-[-0.03em]">{option.name}</h3>
              <p className={`mt-3 min-h-[4.5rem] text-sm leading-6 ${option.highlight ? "text-canvas/70" : "text-ink-soft"}`}>
                {option.summary}
              </p>
              <p className={`mt-6 text-xs uppercase tracking-[0.14em] ${option.highlight ? "text-accent" : "text-muted"}`}>
                {comparisonCategories[active]}
              </p>
              <div className="mt-3 flex gap-1.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < option.scores[active]
                        ? option.highlight
                          ? "bg-accent"
                          : "bg-primary"
                        : option.highlight
                          ? "bg-canvas/15"
                          : "bg-canvas-2"
                    }`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

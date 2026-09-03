"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { stats } from "@/lib/site";

function Count({
  value,
  decimals = 0,
  start,
}: {
  value: number;
  decimals?: number;
  start: boolean;
}) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start || reduce) return;
    const duration = 900;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, reduce]);

  const shown = start && reduce ? value : n;
  return <>{decimals ? shown.toFixed(decimals) : Math.round(shown).toLocaleString()}</>;
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className="site-shell">
        <p className="eyebrow">Success in numbers</p>
        <h2 className="mt-5 max-w-[16ch] text-[clamp(2.2rem,4.8vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          More creative output. <span className="italic-accent">Less production friction.</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <p className="text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-none tracking-[-0.06em]">
                <Count value={stat.value} decimals={stat.decimals} start={inView} />
                {stat.suffix}
              </p>
              <p className="mt-3 text-[15px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

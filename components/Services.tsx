"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { serviceGroups } from "@/lib/site";
import MediaImage from "@/components/MediaImage";
import Reveal from "@/components/Reveal";

export default function Services() {
  const all = useMemo(() => serviceGroups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.title }))), []);
  const [active, setActive] = useState(all[0].name);
  const current = all.find((i) => i.name === active) ?? all[0];

  return (
    <section className="py-20 sm:py-28">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">Our services</p>
          <h2 className="mt-5 max-w-[18ch] text-[clamp(2.1rem,4.6vw,4.35rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Everything you need to create content that <span className="italic-accent">performs.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
          <div className="grid gap-10">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-sm font-semibold tracking-[-0.02em]">{group.title}</p>
                <ul>
                  {group.items.map((item) => {
                    const isActive = item.name === active;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onMouseEnter={() => setActive(item.name)}
                          onFocus={() => setActive(item.name)}
                          className={`focus-ring group flex items-center justify-between border-b border-line py-3.5 text-[1.15rem] tracking-[-0.02em] transition-all duration-300 ${
                            isActive ? "translate-x-1 text-ink" : "text-ink-soft hover:translate-x-1 hover:text-ink"
                          }`}
                        >
                          <span>{item.name}</span>
                          <ArrowRight
                            className={`size-4 transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="sticky top-24 hidden lg:block">
            <div className="media-frame grain relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <MediaImage
                src={current.image}
                alt={`Preview for ${current.name}`}
                fill
                sizes="45vw"
                className="transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="eyebrow text-white/70">{current.group}</p>
                <p className="mt-2 text-2xl font-medium tracking-[-0.03em]">{current.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

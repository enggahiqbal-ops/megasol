"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/lib/site";
import MediaImage from "@/components/MediaImage";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const startX = useRef<number | null>(null);
  const item = testimonials[index];

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(next, 7000);
    return () => window.clearInterval(id);
  }, [paused, reduce, next]);

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="site-shell">
        <p className="eyebrow">Don&apos;t just take it from us</p>
        <div className="mt-4 flex items-end justify-between gap-6">
          <h2 className="max-w-[14ch] text-[clamp(2.1rem,4.4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Creative wins, <span className="italic-accent">told by our clients.</span>
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button type="button" className="focus-ring flex size-11 items-center justify-center rounded-full border border-line bg-white" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="size-4" />
            </button>
            <button type="button" className="focus-ring flex size-11 items-center justify-center rounded-full border border-line bg-white" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[28px] bg-white p-7 sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={(e) => {
            startX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (startX.current == null) return;
            const dx = e.clientX - startX.current;
            if (dx > 50) prev();
            if (dx < -50) next();
            startX.current = null;
          }}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={item.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="max-w-[22ch] text-[clamp(1.45rem,3vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.035em]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <div className="relative size-12 overflow-hidden rounded-full bg-canvas-2">
                  <MediaImage src={item.avatar} alt={`${item.name} portrait`} fill sizes="48px" />
                </div>
                <div>
                  <p className="font-medium tracking-[-0.02em]">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.title}, {item.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-ink" : "w-2.5 bg-canvas-3"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:hidden">
            <button type="button" className="focus-ring flex size-11 items-center justify-center rounded-full border border-line bg-white" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="size-4" />
            </button>
            <button type="button" className="focus-ring flex size-11 items-center justify-center rounded-full border border-line bg-white" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

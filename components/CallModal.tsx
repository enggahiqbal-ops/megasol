"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Ctx = { open: () => void; close: () => void };
const CallModalContext = createContext<Ctx | null>(null);

export function useCallModal() {
  const ctx = useContext(CallModalContext);
  if (!ctx) {
    throw new Error("useCallModal must be used within CallModalProvider");
  }
  return ctx;
}

export function CallModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <CallModalContext.Provider value={{ open, close }}>
      {children}
      <CallModal isOpen={isOpen} close={close} />
    </CallModalContext.Provider>
  );
}

function CallModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const firstRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close dialog overlay"
            className="absolute inset-0 bg-ink/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-[34rem] rounded-t-3xl bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:rounded-3xl sm:p-9"
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={close}
              className="focus-ring absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            {submitted ? (
              <div className="py-6">
                <p className="eyebrow mb-4">We&apos;ll be in touch</p>
                <h2 id={titleId} className="text-3xl font-medium tracking-[-0.04em]">
                  Request received.
                </h2>
                <p className="mt-4 text-ink-soft">
                  A producer will follow up to schedule your free call and learn what you&apos;re trying to ship.
                </p>
              </div>
            ) : (
              <>
                <p className="eyebrow mb-3">Book a free call</p>
                <h2 id={titleId} className="max-w-[16ch] text-[2rem] font-medium leading-[1.05] tracking-[-0.04em]">
                  Tell us what you want to make.
                </h2>
                <form
                  className="mt-7 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <label className="grid gap-1.5 text-sm">
                    <span className="text-muted">Work email</span>
                    <input
                      ref={firstRef}
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="h-12 rounded-xl border border-ink/12 bg-canvas px-4 text-[15px] outline-none transition focus:border-ink"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm">
                    <span className="text-muted">Full name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="h-12 rounded-xl border border-ink/12 bg-canvas px-4 text-[15px] outline-none transition focus:border-ink"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm">
                    <span className="text-muted">Company</span>
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      className="h-12 rounded-xl border border-ink/12 bg-canvas px-4 text-[15px] outline-none transition focus:border-ink"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm">
                    <span className="text-muted">What do you need?</span>
                    <select
                      name="need"
                      className="h-12 rounded-xl border border-ink/12 bg-canvas px-4 text-[15px] outline-none transition focus:border-ink"
                      defaultValue="YouTube editing"
                    >
                      <option>YouTube editing</option>
                      <option>AI video production</option>
                      <option>Short-form</option>
                      <option>Full content engine</option>
                    </select>
                  </label>
                  <button
                    type="submit"
                    className="focus-ring mt-2 inline-flex h-12 items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white transition hover:bg-black"
                  >
                    Book a Free Call
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

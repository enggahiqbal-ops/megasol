"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { serviceGroups } from "@/lib/site";
import Button from "@/components/Button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-canvas"
          initial={reduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="site-shell flex h-[72px] items-center justify-between">
            <Link href="/" className="text-[15px] font-semibold tracking-[-0.04em]" onClick={onClose}>
              VAYRO STUDIOS
            </Link>
            <button
              ref={closeRef}
              type="button"
              className="focus-ring flex size-11 items-center justify-center rounded-full border border-ink/10"
              aria-label="Close menu"
              onClick={onClose}
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="site-shell flex-1 overflow-y-auto pb-10" aria-label="Mobile">
            <p className="eyebrow mb-4 mt-4">Services</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-sm font-semibold">{group.title}</p>
                  <ul className="grid gap-1">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="focus-ring block rounded-lg py-1.5 text-[15px] text-ink-soft"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-2 border-t border-line pt-6 text-[1.35rem] font-medium tracking-[-0.03em]">
              <Link href="/work" onClick={onClose} className="focus-ring rounded-lg py-1">
                Work
              </Link>
              <Link href="/about" onClick={onClose} className="focus-ring rounded-lg py-1">
                About
              </Link>
              <Link href="/resources" onClick={onClose} className="focus-ring rounded-lg py-1">
                Resources
              </Link>
              <Link href="/pricing" onClick={onClose} className="focus-ring rounded-lg py-1">
                Pricing
              </Link>
            </div>
            <div className="mt-8">
              <Button openCall className="w-full" onClick={onClose}>
                Book a Free Call
              </Button>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

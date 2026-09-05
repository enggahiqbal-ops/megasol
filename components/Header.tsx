"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { serviceGroups } from "@/lib/site";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const menuId = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const openSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-line bg-canvas/92 backdrop-blur-md" : "border-transparent bg-canvas"
        }`}
      >
        <div className="site-shell flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="focus-ring shrink-0 text-[15px] font-semibold tracking-[-0.04em] text-primary">
            VAYRO STUDIOS
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div
              ref={wrapRef}
              className="relative"
              onMouseEnter={openSoon}
              onMouseLeave={closeSoon}
            >
              <button
                type="button"
                className="focus-ring inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-[14px] font-medium text-ink-soft hover:text-ink"
                aria-expanded={servicesOpen}
                aria-controls={menuId}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown className={`size-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen ? (
                  <motion.div
                    id={menuId}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-[calc(100%+12px)] z-50 w-[min(860px,70vw)] -translate-x-1/2 rounded-3xl border border-line bg-white p-6 shadow-[0_24px_80px_rgba(7,26,20,0.14)]"
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {serviceGroups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                            {group.title}
                          </p>
                          <ul className="grid gap-1">
                            {group.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="focus-ring block rounded-lg px-2 py-1.5 text-[14px] text-ink-soft hover:bg-canvas hover:text-ink"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <Link href="/work" className="focus-ring rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft hover:text-ink">
              Work
            </Link>
            <Link href="/about" className="focus-ring rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft hover:text-ink">
              About
            </Link>
            <Link href="/resources" className="focus-ring rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft hover:text-ink">
              Resources
            </Link>
            <Link href="/pricing" className="focus-ring rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft hover:text-ink">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button openCall className="h-11 px-5 text-[14px]">
                Book a Free Call
              </Button>
            </div>
            <button
              type="button"
              className="focus-ring flex size-11 items-center justify-center rounded-full border border-ink/10 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

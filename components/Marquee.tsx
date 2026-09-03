"use client";

import { useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Marquee({ children, className = "" }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-4 ${className}`}>{children}</div>;
  }

  return (
    <div className={`marquee-wrap overflow-hidden ${className}`}>
      <div className="marquee-track">
        <div className="flex items-center gap-[4.5rem] pr-[4.5rem]">{children}</div>
        <div className="flex items-center gap-[4.5rem] pr-[4.5rem]" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCallModal } from "@/components/CallModal";

type Variant = "primary" | "secondary" | "ghost" | "light";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
  showArrow?: boolean;
  openCall?: boolean;
  ariaLabel?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-canvas hover:bg-primary-hover hover:translate-y-[-1px]",
  secondary:
    "bg-transparent text-ink border border-primary/15 hover:border-primary/40 hover:bg-primary/[0.03]",
  ghost: "bg-transparent text-ink hover:bg-primary/[0.04]",
  light:
    "bg-canvas text-primary hover:bg-accent hover:text-accent-ink",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  showArrow = true,
  openCall = false,
  ariaLabel,
}: Props) {
  const { open } = useCallModal();
  const classes = `group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-ring ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className="size-[16px] transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (openCall) {
    return (
      <button
        type="button"
        className={classes}
        onClick={() => {
          onClick?.();
          open();
        }}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    );
  }

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

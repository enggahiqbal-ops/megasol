import Link from "next/link";
import { footerColumns } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line pt-16 pb-8">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <p className="text-lg font-semibold tracking-[-0.04em]">VAYRO STUDIOS</p>
            <p className="mt-4 max-w-[22rem] text-[15px] leading-7 text-ink-soft">
              AI-powered video, YouTube, creative production and digital content for ambitious brands.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold">{col.title}</p>
                <ul className="mt-4 grid gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring text-[14px] text-ink-soft hover:text-ink"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VAYRO STUDIOS. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="focus-ring hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring hover:text-ink">
              Terms
            </Link>
            <Link href="/contact" className="focus-ring hover:text-ink">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

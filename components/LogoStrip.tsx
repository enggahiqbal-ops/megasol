import { brands } from "@/lib/site";
import Marquee from "@/components/Marquee";

export default function LogoStrip() {
  return (
    <section className="border-y border-line bg-canvas-2 py-10 sm:py-12" aria-label="Trusted brands">
      <div className="site-shell">
        <p className="mb-8 text-center text-[15px] text-muted">
          Trusted by ambitious brands and creators
        </p>
        <Marquee>
          {brands.map((brand) => (
            <span
              key={brand}
              className="whitespace-nowrap text-[1.35rem] font-medium tracking-[-0.04em] text-ink/45 sm:text-[1.55rem]"
            >
              {brand}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

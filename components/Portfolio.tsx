import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/lib/site";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function Portfolio() {
  return (
    <section className="py-10 sm:py-16" id="work">
      <div className="site-shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow">Our work</p>
            <h2 className="mt-5 max-w-[14ch] text-[clamp(2.1rem,4.6vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              See what our creative team can make.
            </h2>
          </Reveal>
          <Button href="/work" variant="secondary">
            Explore all work
          </Button>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {portfolioItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
              <Link href="/work" className="group block overflow-hidden rounded-[22px]">
                <div
                  className={`media-frame relative overflow-hidden ${
                    item.span === "tall"
                      ? "aspect-[3/4]"
                      : item.span === "wide"
                        ? "aspect-[16/10]"
                        : "aspect-[4/5]"
                  }`}
                >
                  <MediaImage
                    src={item.image}
                    alt={`${item.title} for ${item.client}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/70">{item.category}</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="text-lg font-medium tracking-[-0.03em]">{item.title}</p>
                      <ArrowUpRight className="size-5" />
                    </div>
                    <p className="text-sm text-white/75">{item.client}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

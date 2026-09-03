import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { stories } from "@/lib/site";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

export default function CustomerStories() {
  return (
    <section className="py-10 sm:py-16">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">Customer stories</p>
          <h2 className="mt-5 max-w-[16ch] text-[clamp(2.1rem,4.4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Creative partnerships that <span className="italic-accent">change the cadence.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-[24px] bg-white">
                <Link href={`/work/${story.slug}`} className="focus-ring block h-full">
                  <div className="media-frame relative aspect-[16/11] overflow-hidden">
                    <MediaImage
                      src={story.image}
                      alt={`${story.client} case study still for ${story.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span className="absolute bottom-4 left-4 inline-flex size-11 items-center justify-center rounded-full bg-white text-ink">
                      <Play className="ml-0.5 size-4 fill-current" aria-hidden />
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="eyebrow">{story.category}</p>
                    <h3 className="mt-3 text-[1.35rem] font-medium leading-[1.15] tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-0.5">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-6 text-ink-soft">{story.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-3 text-sm">
                      <span className="text-muted">{story.client}</span>
                      <span className="font-medium">{story.result}</span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium">
                      Read case study
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

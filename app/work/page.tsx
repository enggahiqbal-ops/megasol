import type { Metadata } from "next";
import { portfolioItems } from "@/lib/site";
import PageIntro from "@/components/PageIntro";
import MediaImage from "@/components/MediaImage";
import Link from "next/link";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title={<>Selected films, channels and systems.</>}
        body="A sample of original VAYRO STUDIOS productions for ambitious brands and creators. Every project here is a placeholder case — built to show how we present craft, not to impersonate another studio."
      />
      <div className="site-shell grid gap-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Link key={item.title} href="/work" className="group overflow-hidden rounded-[22px]">
            <div className="media-frame relative aspect-[4/5]">
              <MediaImage src={item.image} alt={`${item.title} for ${item.client}`} fill sizes="33vw" className="transition-transform duration-700 group-hover:scale-[1.05]" />
            </div>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">{item.category}</p>
              <h2 className="mt-1 text-lg font-medium tracking-[-0.03em]">{item.title}</h2>
              <p className="text-sm text-muted">{item.client}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

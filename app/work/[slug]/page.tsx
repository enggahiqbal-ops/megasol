import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stories } from "@/lib/site";
import PageIntro from "@/components/PageIntro";
import MediaImage from "@/components/MediaImage";
import Button from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  return { title: story?.title ?? "Case study" };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <>
      <PageIntro eyebrow={story.category} title={story.title} body={story.description} />
      <div className="site-shell pb-24">
        <div className="media-frame relative aspect-[16/8] overflow-hidden rounded-[28px]">
          <MediaImage src={story.image} alt={`${story.client} production still`} fill sizes="100vw" priority />
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <p className="max-w-[40rem] text-[1.05rem] leading-8 text-ink-soft">
            {story.client} came to VAYRO STUDIOS with a backlog and an inconsistent publishing rhythm.
            We built a production system around one brief, one review surface and a repeatable edit —
            then used AI only where it shortened the path without flattening the voice.
          </p>
          <aside className="rounded-[24px] border border-line bg-white p-6">
            <p className="text-sm text-muted">Result</p>
            <p className="mt-2 text-2xl font-medium tracking-[-0.03em]">{story.result}</p>
            <div className="mt-6">
              <Button openCall>Book a Free Call</Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

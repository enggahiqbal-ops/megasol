import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Resources" };

const posts = [
  { id: "guides", title: "A briefing guide for YouTube that editors actually use", tag: "Guides" },
  { id: "youtube", title: "How to keep a weekly show from collapsing under revisions", tag: "YouTube Tips" },
  { id: "ai", title: "Where AI should (and should not) touch a brand film", tag: "AI Creative" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title={<>Notes from the edit bay.</>}
        body="Original writing from VAYRO STUDIOS on production systems, YouTube craft and using AI without losing taste."
      />
      <div className="site-shell grid gap-4 pb-24">
        {posts.map((post) => (
          <article key={post.id} id={post.id} className="rounded-[24px] border border-line bg-white p-7">
            <p className="eyebrow">{post.tag}</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">{post.title}</h2>
            <p className="mt-3 max-w-[40rem] text-ink-soft">
              Practical thinking for teams who need to publish more without turning every week into a rescue mission.
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

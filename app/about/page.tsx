import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import TalentSection from "@/components/TalentSection";
import CreativePlatform from "@/components/CreativePlatform";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={<>A production studio built for the way content actually ships.</>}
        body="VAYRO STUDIOS is an original creative company. We combine editors, designers and AI workflows so ambitious brands can publish more without lowering the bar."
      />
      <div className="site-shell grid gap-6 pb-8 lg:grid-cols-3">
        {[
          ["Craft first", "Taste is not a plugin. Humans still direct pacing, story and brand."],
          ["Systems second", "A repeatable workflow is how quality survives volume."],
          ["AI as leverage", "We automate the busywork so specialists spend time on the cut that matters."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-[24px] border border-line bg-white p-7">
            <h2 className="text-xl font-medium tracking-[-0.03em]">{t}</h2>
            <p className="mt-3 text-ink-soft">{b}</p>
          </article>
        ))}
      </div>
      <CreativePlatform />
      <TalentSection />
      <div className="site-shell pb-20">
        <Button openCall>Book a Free Call</Button>
      </div>
    </>
  );
}

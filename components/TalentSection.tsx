import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";

const tiles = [
  { src: "/images/team/t1.jpg", alt: "Editors collaborating around a production desk", className: "aspect-[4/5]" },
  { src: "/images/team/t2.jpg", alt: "Creative lead reviewing a cut in a studio", className: "aspect-square mt-8" },
  { src: "/images/team/t3.jpg", alt: "Strategy session with printed storyboards", className: "aspect-[5/6]" },
  { src: "/images/team/t4.jpg", alt: "Motion designer working on a timeline", className: "aspect-[4/5] mt-10" },
];

export default function TalentSection() {
  return (
    <section id="team" className="py-10 sm:py-16">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Work with the best</p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.1rem,4.6vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Creative talent built for <span className="italic-accent">modern content.</span>
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-7 text-ink-soft">
            Work with experienced editors, motion designers, thumbnail artists, strategists and AI
            creatives who understand how content needs to perform.
          </p>
          <div className="mt-8">
            <Button href="/about#team">Meet Our Team</Button>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.src} delay={i * 0.06}>
              <div className={`media-frame relative overflow-hidden rounded-[22px] ${tile.className}`}>
                <MediaImage src={tile.src} alt={tile.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

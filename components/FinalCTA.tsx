import Button from "@/components/Button";
import MediaImage from "@/components/MediaImage";

export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-16">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[28px] min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]">
          <div className="media-frame absolute inset-0">
            <MediaImage
              src="/images/cta/finale.jpg"
              alt="Dim studio lighting over mixing consoles and cameras"
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/65" />
          </div>
          <div className="relative flex min-h-[420px] flex-col items-start justify-end px-7 py-12 sm:min-h-[520px] sm:px-12 lg:px-16 lg:py-16">
            <h2 className="max-w-[14ch] text-[clamp(2.3rem,5.4vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white">
              Ready to make more <span className="italic-accent">great content?</span>
            </h2>
            <p className="mt-5 max-w-[32rem] text-[1.05rem] leading-7 text-white/75">
              Build a faster creative production engine with VAYRO STUDIOS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button openCall variant="light">
                Book a Free Call
              </Button>
              <Button href="/work" variant="secondary" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

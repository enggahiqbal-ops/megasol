import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "Pricing" };

const plans = [
  {
    name: "Channel",
    price: "From $4,800 / mo",
    body: "A dedicated weekly cadence for YouTube, short-form and packaging.",
    points: ["Long-form + shorts pipeline", "Thumbnails included", "Shared review workspace"],
  },
  {
    name: "Studio",
    price: "From $9,500 / mo",
    body: "Multi-format production for brands that ship across channels.",
    points: ["Video, motion and social", "AI-assisted first cuts", "Priority turnaround"],
  },
  {
    name: "Engine",
    price: "Custom",
    body: "A full creative production system with strategy and always-on capacity.",
    points: ["Embedded creative lead", "Launch films + always-on", "Workflow + brand memory"],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title={<>Capacity you can actually plan around.</>}
        body="Simple retainers, scoped to output. We’ll map the right mix on a free call — no surprise rate cards mid-project."
      />
      <div className="site-shell grid gap-4 pb-24 lg:grid-cols-3">
        {plans.map((plan) => {
          const featured = plan.name === "Studio";
          return (
            <article
              key={plan.name}
              className={`flex flex-col rounded-[24px] border p-8 ${
                featured ? "border-accent bg-primary text-canvas" : "border-line bg-white"
              }`}
            >
              <h2 className="text-2xl font-medium tracking-[-0.03em]">{plan.name}</h2>
              <p className={`mt-2 text-lg ${featured ? "text-accent" : "text-muted"}`}>{plan.price}</p>
              <p className={`mt-4 ${featured ? "text-canvas/70" : "text-ink-soft"}`}>{plan.body}</p>
              <ul className={`mt-6 grid gap-2 text-sm ${featured ? "text-canvas/70" : "text-ink-soft"}`}>
                {plan.points.map((p) => (
                  <li key={p}>— {p}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button openCall variant={featured ? "light" : "primary"}>
                  Book a Free Call
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

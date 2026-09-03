import type { Metadata } from "next";
import { serviceGroups } from "@/lib/site";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={<>Video, design, AI creative and the strategy that holds it together.</>}
        body="Pick a lane or run the full engine. Every service is built to publish — not to sit in a folder."
      />
      <div className="site-shell grid gap-10 pb-24 lg:grid-cols-2">
        {serviceGroups.map((group) => (
          <section key={group.title} id={group.title.toLowerCase().replace(/[^a-z]+/g, "-")}>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">{group.title}</h2>
            <ul className="mt-4 grid gap-2">
              {group.items.map((item) => (
                <li key={item.name} id={item.href.split("#")[1]} className="rounded-2xl border border-line bg-white px-5 py-4">
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="site-shell pb-20">
        <Button openCall>Book a Free Call</Button>
      </div>
    </>
  );
}

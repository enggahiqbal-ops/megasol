import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={<>Tell us what you want to ship.</>}
        body="Email hello@vayro.studios or book a free call. We typically reply within one business day."
      />
      <div className="site-shell pb-24">
        <Button openCall>Book a Free Call</Button>
      </div>
    </>
  );
}

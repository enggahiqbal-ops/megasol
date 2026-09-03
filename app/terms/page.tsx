import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Terms"
        body="Use of this website is provided as-is for informational purposes. Project work is governed by a separate agreement."
      />
      <div className="site-shell max-w-3xl pb-24 text-ink-soft leading-8">
        <p>
          These placeholder terms describe the VAYRO STUDIOS website only. Production retainers, licensing and
          delivery schedules are documented in a statement of work once we begin.
        </p>
      </div>
    </>
  );
}

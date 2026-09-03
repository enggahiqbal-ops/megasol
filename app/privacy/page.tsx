import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        body="VAYRO STUDIOS only collects the information you submit through our forms so we can respond to your enquiry. We do not sell personal data."
      />
      <div className="site-shell max-w-3xl pb-24 text-ink-soft leading-8">
        <p>
          This is a placeholder policy for the VAYRO STUDIOS marketing site. Replace it with counsel-reviewed
          language before launch. Form submissions are used solely to schedule conversations about creative
          production work.
        </p>
      </div>
    </>
  );
}

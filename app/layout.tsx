import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import { CallModalProvider } from "@/components/CallModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vayro.studios"),
  title: {
    default: "VAYRO STUDIOS — AI-Powered Video & Creative Production",
    template: "%s · VAYRO STUDIOS",
  },
  description:
    "VAYRO STUDIOS helps brands, creators and businesses produce high-quality video, YouTube content, AI creative and digital assets faster.",
  openGraph: {
    title: "VAYRO STUDIOS — AI-Powered Video & Creative Production",
    description:
      "VAYRO STUDIOS helps brands, creators and businesses produce high-quality video, YouTube content, AI creative and digital assets faster.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero/studio.jpg",
        width: 1920,
        height: 1080,
        alt: "VAYRO STUDIOS production studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAYRO STUDIOS — AI-Powered Video & Creative Production",
    description:
      "VAYRO STUDIOS helps brands, creators and businesses produce high-quality video, YouTube content, AI creative and digital assets faster.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrument.variable} h-full antialiased`}>
      <body className={`${interTight.className} min-h-full text-ink`}>
        <CallModalProvider>
          <a
            href="#main"
            className="absolute left-4 top-4 z-[90] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm text-canvas transition focus:translate-y-0"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CallModalProvider>
      </body>
    </html>
  );
}

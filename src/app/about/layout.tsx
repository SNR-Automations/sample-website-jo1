import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Visionary Leadership & AI Automation Excellence",
  description:
    "Meet Miss S.N. Rathnadevi, Founder & CEO of SNR AUTOMATIONS. Discover our mission to transform businesses through AI-powered automation and intelligent dashboard systems for Fortune 500 executives.",
  keywords: [
    "About SNR AUTOMATIONS",
    "Founder S.N. Rathnadevi",
    "AI Automation Company",
    "Enterprise Automation Leadership",
    "Business Intelligence Company",
  ],
  openGraph: {
    title: "About SNR AUTOMATIONS — Visionary Leadership in AI Automation",
    description:
      "Learn about SNR AUTOMATIONS' mission, vision, and the leadership team driving enterprise automation innovation for Fortune 500 companies.",
    url: "https://snr-automations.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SNR AUTOMATIONS — Visionary Leadership in AI Automation",
    description:
      "Discover how SNR AUTOMATIONS transforms businesses through AI-powered automation and intelligent dashboard systems.",
  },
  alternates: {
    canonical: "https://snr-automations.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


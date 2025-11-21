import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Schedule Your Executive Demo",
  description:
    "Contact SNR AUTOMATIONS to schedule your personalized executive demo. Get a custom walkthrough of our AI-powered CEO Dashboard systems tailored to your industry and business needs.",
  keywords: [
    "Contact SNR AUTOMATIONS",
    "Schedule Demo",
    "Executive Dashboard Demo",
    "AI Automation Consultation",
    "Business Intelligence Demo",
  ],
  openGraph: {
    title: "Contact SNR AUTOMATIONS — Schedule Your Executive Demo",
    description:
      "Ready to transform your business? Schedule a personalized demo of SNR AUTOMATIONS' AI-powered CEO Dashboard systems designed for Fortune 500 executives.",
    url: "https://snr-automations.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SNR AUTOMATIONS — Schedule Your Executive Demo",
    description:
      "Get a personalized walkthrough of our AI-powered CEO Dashboard systems. Contact us today.",
  },
  alternates: {
    canonical: "https://snr-automations.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI Automation & All-in-One SaaS Solutions",
  description:
    "SNR AUTOMATIONS offers two powerful solutions: AI-powered task automation and comprehensive all-in-one SaaS platforms. Transform your business operations with intelligent automation systems.",
  keywords: [
    "AI Automation Services",
    "Task Automation",
    "All-in-One SaaS",
    "Business Automation Solutions",
    "Workflow Automation",
    "Enterprise SaaS Platform",
    "AI-Powered Automation",
  ],
  openGraph: {
    title: "Services — AI Automation & All-in-One SaaS Solutions | SNR AUTOMATIONS",
    description:
      "Discover SNR AUTOMATIONS' comprehensive automation services: AI-powered task automation and all-in-one SaaS platforms designed for enterprise excellence.",
    url: "https://snr-automations.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — AI Automation & All-in-One SaaS Solutions",
    description:
      "Transform your business with SNR AUTOMATIONS' AI-powered automation and comprehensive SaaS solutions.",
  },
  alternates: {
    canonical: "https://snr-automations.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snrautomations.com"),

  title: {
    default:
      "SNR AUTOMATIONS — AI-Powered CEO Dashboard Systems | Enterprise Automation",
    template: "%s | SNR AUTOMATIONS",
  },

  description:
    "SNR AUTOMATIONS delivers executive-ready dashboards with real-time analytics, predictive intelligence, and AI automation for Fortune 500 leaders.",

  keywords: [
    "SNR AUTOMATIONS",
    "CEO Dashboard",
    "AI Automation",
    "Enterprise Automation",
    "Business Intelligence",
    "AI Solutions",
    "Predictive Analytics",
    "SaaS Automation",
    "Executive Dashboard",
    "Workflow Automation",
  ],

  authors: [{ name: "SNR AUTOMATIONS" }],
  creator: "SNR AUTOMATIONS",
  publisher: "SNR AUTOMATIONS",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 🔥 Correct favicon config using your generated icons
  icons: {
    icon: [
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  // --- OpenGraph ---
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snrautomations.com",
    siteName: "SNR AUTOMATIONS",
    title: "SNR AUTOMATIONS — AI-Powered CEO Dashboard Systems",
    description:
      "Executive dashboards, predictive analytics, and enterprise automation built for Fortune 500 leadership.",
    images: [
      {
        url: "/favicon-512.png",
        width: 1200,
        height: 630,
        alt: "SNR Automations",
      },
    ],
  },

  // --- Twitter cards ---
  twitter: {
    card: "summary_large_image",
    title: "SNR AUTOMATIONS — AI-Powered CEO Dashboard Systems",
    description:
      "Intelligent dashboards, predictive analytics, and enterprise automation for global businesses.",
    images: ["/favicon-512.png"],
    creator: "@snrautomations",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://snrautomations.com",
  },

  category: "Technology",
};

// --- Schema.org Organization Data ---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SNR AUTOMATIONS",
  url: "https://snrautomations.com",
  logo: "https://snrautomations.com/favicon-512.png",
  description:
    "AI-powered CEO dashboard systems and enterprise automation solutions for global businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "snrautomations3@gmail.com",
    contactType: "Customer Service",
    areaServed: "Worldwide",
  },
  sameAs: [
    "https://www.instagram.com/rathnadevisn",
    "https://www.linkedin.com/in/rathnadevisn",
  ],
  founder: {
    "@type": "Person",
    name: "Miss S.N. Rathnadevi",
    jobTitle: "Founder & CEO",
  },
  serviceType: [
    "AI Automation",
    "CEO Dashboard Systems",
    "Business Intelligence",
    "Automation SaaS",
  ],
};

// --- Website Schema ---
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SNR AUTOMATIONS",
  url: "https://snrautomations.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://snrautomations.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

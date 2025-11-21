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
  metadataBase: new URL("https://snr-automations.com"),
  title: {
    default: "SNR AUTOMATIONS — AI-Powered CEO Dashboard Systems | Enterprise Automation",
    template: "%s | SNR AUTOMATIONS",
  },
  description:
    "SNR AUTOMATIONS delivers executive-ready dashboards that combine real-time analytics, predictive intelligence, and automated decisioning for Fortune 500 leaders. Transform your business with AI-powered automation.",
  keywords: [
    "SNR AUTOMATIONS",
    "CEO Dashboard",
    "AI Automation",
    "Business Intelligence",
    "Executive Analytics",
    "Fortune 500",
    "Automation Partner",
    "Enterprise Automation",
    "AI-Powered Solutions",
    "Business Automation",
    "Executive Dashboard",
    "Predictive Analytics",
    "Real-time Analytics",
    "SaaS Solutions",
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
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snr-automations.com",
    siteName: "SNR AUTOMATIONS",
    title: "SNR AUTOMATIONS — AI-Powered CEO Dashboard Systems",
    description:
      "Experience executive dashboards engineered by SNR AUTOMATIONS for decisive, data-driven leadership. Trusted by Fortune 500 executives.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "SNR AUTOMATIONS - AI-Powered CEO Dashboard Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNR AUTOMATIONS — AI-Powered CEO Dashboard Systems",
    description:
      "Intelligent dashboards, predictive analytics, and executive automation from SNR AUTOMATIONS.",
    images: ["/images/logo.jpg"],
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://snr-automations.com",
  },
  category: "Technology",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SNR AUTOMATIONS",
  url: "https://snr-automations.com",
  logo: "https://snr-automations.com/images/logo.jpg",
  description: "SNR AUTOMATIONS delivers AI-powered CEO Dashboard systems and enterprise automation solutions for Fortune 500 executives.",
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
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  serviceType: [
    "AI Automation",
    "CEO Dashboard Systems",
    "Business Intelligence",
    "Enterprise Automation",
    "SaaS Solutions",
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SNR AUTOMATIONS",
  url: "https://snr-automations.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://snr-automations.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

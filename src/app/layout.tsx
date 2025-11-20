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
  title: "SNR Automations - AI-Powered CEO Dashboard Systems",
  description: "Transform your business with intelligent CEO Dashboard systems designed for Fortune 500 executives. Real-time analytics, predictive insights, and automated decision-making.",
  keywords: "CEO Dashboard, AI Automation, Business Intelligence, Executive Analytics, Fortune 500, SNR Academy",
  authors: [{ name: "SNR Automations" }],
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: "SNR Automations - AI-Powered CEO Dashboard Systems",
    description: "Transform your business with intelligent CEO Dashboard systems designed for Fortune 500 executives.",
    url: "https://snr-automations.com",
    siteName: "SNR Automations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SNR Automations - AI-Powered CEO Dashboard Systems",
    description: "Transform your business with intelligent CEO Dashboard systems designed for Fortune 500 executives.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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

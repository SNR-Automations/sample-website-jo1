"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    icon: <Database className="w-5 h-5" />,
    content: [
      {
        subtitle: "Personal Information",
        text: "When you use our services, we may collect personal information such as your name, email address, company name, job title, phone number, and business information. This information is collected when you fill out forms, request demos, subscribe to our newsletter, or communicate with us.",
      },
      {
        subtitle: "Automatic Information",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and time spent on our site. We use cookies and similar technologies to collect this data.",
      },
      {
        subtitle: "Business Information",
        text: "For enterprise clients, we may collect business data, usage metrics, and performance analytics to provide and improve our services. This data is used solely for service delivery and optimization.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    icon: <Eye className="w-5 h-5" />,
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to provide, maintain, and improve our AI automation and SaaS services, including customizing solutions to your business needs, processing transactions, and providing customer support.",
      },
      {
        subtitle: "Communications",
        text: "We may use your contact information to send you service updates, technical notices, security alerts, promotional materials (with your consent), and respond to your inquiries.",
      },
      {
        subtitle: "Analytics & Improvement",
        text: "We analyze usage patterns and feedback to improve our services, develop new features, and enhance user experience. This helps us create better automation solutions for all our clients.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests, and to protect our rights, privacy, safety, or property.",
      },
    ],
  },
  {
    title: "Data Security",
    icon: <Lock className="w-5 h-5" />,
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-leading security measures to protect your data, including end-to-end encryption, secure data centers, regular security audits, and SOC 2 Type II compliance. All data is encrypted both at rest and in transit.",
      },
      {
        subtitle: "Access Controls",
        text: "We maintain strict access controls to ensure that only authorized personnel can access your data. All access is logged and monitored for security purposes.",
      },
      {
        subtitle: "Data Backup",
        text: "We regularly backup your data across multiple secure locations to prevent data loss. Our disaster recovery systems ensure business continuity even in rare failure scenarios.",
      },
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    icon: <UserCheck className="w-5 h-5" />,
    content: [
      {
        subtitle: "Third-Party Services",
        text: "We may share your information with trusted third-party service providers who assist us in operating our business, such as cloud hosting providers, payment processors, and analytics services. These providers are contractually obligated to protect your data.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you of any such change and give you the opportunity to opt out.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information when required by law, court order, or governmental regulation, or when we believe disclosure is necessary to protect our rights or the rights of others.",
      },
      {
        subtitle: "No Sale of Data",
        text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your data is yours, and we respect that.",
      },
    ],
  },
  {
    title: "Your Rights & Choices",
    icon: <Shield className="w-5 h-5" />,
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access, update, or correct your personal information at any time. Contact us to request access to your data or make corrections.",
      },
      {
        subtitle: "Data Deletion",
        text: "You may request deletion of your personal information, subject to certain legal obligations to retain data. We will promptly delete your data upon verified request.",
      },
      {
        subtitle: "Opt-Out",
        text: "You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. You can also manage your cookie preferences through your browser settings.",
      },
      {
        subtitle: "Data Portability",
        text: "You have the right to receive a copy of your data in a structured, commonly used, and machine-readable format, and to transmit that data to another service provider.",
      },
      {
        subtitle: "GDPR & CCPA Rights",
        text: "If you are in the EU or California, you have additional rights under GDPR and CCPA, including the right to know what data we collect, the right to deletion, and the right to non-discrimination.",
      },
    ],
  },
  {
    title: "Cookies & Tracking",
    icon: <Eye className="w-5 h-5" />,
    content: [
      {
        subtitle: "Cookie Usage",
        text: "We use cookies and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. Cookies help us remember your preferences and provide personalized content.",
      },
      {
        subtitle: "Types of Cookies",
        text: "We use essential cookies (required for site functionality), performance cookies (to analyze site usage), and marketing cookies (to deliver relevant ads). You can control cookie preferences through your browser settings.",
      },
      {
        subtitle: "Third-Party Analytics",
        text: "We use third-party analytics services like Google Analytics to understand how visitors use our site. These services may use cookies to collect information anonymously.",
      },
    ],
  },
  {
    title: "Data Retention",
    icon: <Database className="w-5 h-5" />,
    content: [
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.",
      },
      {
        subtitle: "Business Records",
        text: "Business and financial records may be retained for longer periods as required by law or for legitimate business purposes such as tax compliance and accounting.",
      },
    ],
  },
  {
    title: "International Data Transfers",
    icon: <Database className="w-5 h-5" />,
    content: [
      {
        subtitle: "Global Operations",
        text: "SNR AUTOMATIONS operates globally, and your information may be transferred to and processed in countries other than your own. We ensure that all international transfers comply with applicable data protection laws and use appropriate safeguards.",
      },
      {
        subtitle: "Data Protection Standards",
        text: "We implement standard contractual clauses and other approved mechanisms to ensure your data receives adequate protection regardless of where it is processed.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    icon: <Shield className="w-5 h-5" />,
    content: [
      {
        subtitle: "Age Restriction",
        text: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will promptly delete it.",
      },
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    icon: <Eye className="w-5 h-5" />,
    content: [
      {
        subtitle: "Policy Updates",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the 'Last Updated' date.",
      },
      {
        subtitle: "Continued Use",
        text: "Your continued use of our services after any changes to this policy constitutes your acceptance of the updated terms.",
      },
    ],
  },
];

const privacyPolicyStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - SNR AUTOMATIONS",
  description:
    "Privacy Policy for SNR AUTOMATIONS. Learn how we collect, use, and protect your personal information.",
  publisher: {
    "@type": "Organization",
    name: "SNR AUTOMATIONS",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicyStructuredData),
        }}
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-background to-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                <span className="text-lg font-bold">Privacy Policy</span>
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Privacy is{" "}
                <span className="gold-gradient-text">Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                At SNR AUTOMATIONS, we are committed to protecting your
                personal information and your right to privacy.
              </p>
              <p className="text-sm text-muted-foreground">
                Last Updated: November 25, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    This Privacy Policy explains how SNR AUTOMATIONS
                    (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                    collects, uses, discloses, and protects information about
                    you when you use our website, products, and services
                    (collectively, the &quot;Services&quot;).
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    By accessing or using our Services, you agree to this
                    Privacy Policy. If you do not agree with this policy, please
                    do not use our Services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* Section Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      {section.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6">
                    {section.content.map((item, index) => (
                      <Card
                        key={index}
                        className="glass-card hover:border-primary/30 transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-3">
                            {item.subtitle}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Questions About Privacy?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our data practices, please contact
                    us:
                  </p>
                  <div className="space-y-2 mb-8">
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> snrautomations3@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Location:</strong> Chennai, Tamil Nadu, India
                    </p>
                  </div>
                  <Link href="/contact">
                    <Button size="lg" className="gold-gradient px-8 py-6">
                      Contact Us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

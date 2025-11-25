"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Acceptance of Terms",
    icon: <CheckCircle className="w-5 h-5" />,
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing or using SNR AUTOMATIONS&apos; website, products, and services (collectively, the &apos;Services&apos;), you agree to be bound by these Terms of Service (&apos;Terms&apos;). If you do not agree to these Terms, you may not access or use our Services.",
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &apos;Last Updated&apos; date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.",
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.",
      },
    ],
  },
  {
    title: "Services Description",
    icon: <FileText className="w-5 h-5" />,
    content: [
      {
        subtitle: "AI Automation Services",
        text: "SNR AUTOMATIONS provides AI-powered automation solutions, including workflow automation, CEO dashboard systems, business intelligence tools, and custom SaaS platform development. Services are provided &apos;as is&apos; and may be modified, updated, or discontinued at our discretion.",
      },
      {
        subtitle: "Service Level Agreement",
        text: "We strive to maintain 99.9% uptime for our Services. However, we do not guarantee uninterrupted access and are not liable for any downtime due to maintenance, updates, or circumstances beyond our control.",
      },
      {
        subtitle: "Custom Development",
        text: "Custom automation and SaaS projects are subject to separate project agreements that outline specific deliverables, timelines, and payment terms. These project agreements supplement and incorporate these Terms by reference.",
      },
    ],
  },
  {
    title: "User Responsibilities",
    icon: <Shield className="w-5 h-5" />,
    content: [
      {
        subtitle: "Account Security",
        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use or security breach.",
      },
      {
        subtitle: "Acceptable Use",
        text: "You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not use our Services to engage in illegal activities, violate intellectual property rights, transmit malicious code, or interfere with the Services&apos; operation.",
      },
      {
        subtitle: "Data Accuracy",
        text: "You are responsible for the accuracy and legality of any data you provide to our Services. You warrant that you have the right to use and share any data you input into our systems.",
      },
      {
        subtitle: "Compliance",
        text: "You agree to comply with all applicable laws and regulations in your use of our Services, including data protection laws, export control laws, and industry-specific regulations.",
      },
    ],
  },
  {
    title: "Intellectual Property Rights",
    icon: <Scale className="w-5 h-5" />,
    content: [
      {
        subtitle: "Our Intellectual Property",
        text: "All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and trademarks, are owned by SNR AUTOMATIONS or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer our Services without our express written permission.",
      },
      {
        subtitle: "Your Data",
        text: "You retain all rights to the data you provide to our Services. By using our Services, you grant us a limited license to use, store, and process your data solely for the purpose of providing and improving our Services.",
      },
      {
        subtitle: "Custom Solutions",
        text: "For custom development projects, intellectual property ownership will be specified in the project agreement. Typically, you will own the final deliverables, while we retain ownership of our underlying technology and methodologies.",
      },
      {
        subtitle: "Feedback",
        text: "If you provide us with feedback, suggestions, or ideas about our Services, you grant us a perpetual, irrevocable, worldwide license to use and incorporate such feedback without compensation or attribution.",
      },
    ],
  },
  {
    title: "Payment Terms",
    icon: <FileText className="w-5 h-5" />,
    content: [
      {
        subtitle: "Fees",
        text: "Fees for our Services are specified in your project agreement or subscription plan. All fees are in USD unless otherwise stated and are non-refundable except as required by law or specified in our refund policy.",
      },
      {
        subtitle: "Payment Schedule",
        text: "Payment terms will be outlined in your agreement. For subscription services, payments are typically due monthly or annually in advance. For project-based work, payments are usually milestone-based.",
      },
      {
        subtitle: "Late Payment",
        text: "Late payments may incur interest charges of 1.5% per month or the maximum permitted by law, whichever is lower. We reserve the right to suspend Services for non-payment.",
      },
      {
        subtitle: "Taxes",
        text: "You are responsible for all applicable taxes, duties, and government fees (excluding taxes based on our income). If we are required to collect or pay taxes, we will invoice you for such amounts.",
      },
    ],
  },
  {
    title: "Warranties and Disclaimers",
    icon: <AlertTriangle className="w-5 h-5" />,
    content: [
      {
        subtitle: "Limited Warranty",
        text: "We warrant that our Services will perform substantially in accordance with our documentation and specifications. This warranty is subject to the limitations and exclusions set forth in your agreement.",
      },
      {
        subtitle: "Disclaimer of Warranties",
        text: "EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED &apos;AS IS&apos; AND &apos;AS AVAILABLE&apos; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
      },
      {
        subtitle: "No Guarantee of Results",
        text: "While we strive to provide effective automation solutions, we do not guarantee specific business outcomes, cost savings, or performance improvements. Results may vary based on your implementation and business environment.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    icon: <Shield className="w-5 h-5" />,
    content: [
      {
        subtitle: "Liability Cap",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SNR AUTOMATIONS&apos; TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.",
      },
      {
        subtitle: "Exclusion of Damages",
        text: "IN NO EVENT SHALL SNR AUTOMATIONS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      },
      {
        subtitle: "Exceptions",
        text: "Nothing in these Terms shall exclude or limit our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded or limited by law.",
      },
    ],
  },
  {
    title: "Indemnification",
    icon: <Scale className="w-5 h-5" />,
    content: [
      {
        subtitle: "Your Indemnification",
        text: "You agree to indemnify, defend, and hold harmless SNR AUTOMATIONS, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services, your violation of these Terms, or your violation of any rights of another party.",
      },
      {
        subtitle: "Our Indemnification",
        text: "We will indemnify you against third-party claims that our Services infringe their intellectual property rights, subject to certain conditions and limitations specified in your agreement.",
      },
    ],
  },
  {
    title: "Confidentiality",
    icon: <Shield className="w-5 h-5" />,
    content: [
      {
        subtitle: "Confidential Information",
        text: "Both parties may have access to confidential information of the other party. Each party agrees to protect such information using at least the same degree of care it uses for its own confidential information, but no less than reasonable care.",
      },
      {
        subtitle: "Exclusions",
        text: "Confidential information does not include information that is publicly available, independently developed, or rightfully received from a third party without confidentiality obligations.",
      },
      {
        subtitle: "Data Security",
        text: "We maintain appropriate technical and organizational measures to protect your confidential information and data. For more details, see our Privacy Policy.",
      },
    ],
  },
  {
    title: "Term and Termination",
    icon: <FileText className="w-5 h-5" />,
    content: [
      {
        subtitle: "Term",
        text: "These Terms remain in effect as long as you use our Services. Subscription services continue until canceled by either party according to the terms of your subscription agreement.",
      },
      {
        subtitle: "Termination by You",
        text: "You may terminate your subscription or stop using our Services at any time. Termination does not relieve you of any payment obligations for Services already provided.",
      },
      {
        subtitle: "Termination by Us",
        text: "We may suspend or terminate your access to the Services if you violate these Terms, fail to pay fees, or engage in conduct that we believe is harmful to our business or other users.",
      },
      {
        subtitle: "Effect of Termination",
        text: "Upon termination, your right to use the Services immediately ceases. We will provide you with a reasonable opportunity to export your data. Provisions that by their nature should survive termination (such as intellectual property, confidentiality, and limitation of liability) shall remain in effect.",
      },
    ],
  },
  {
    title: "Dispute Resolution",
    icon: <Scale className="w-5 h-5" />,
    content: [
      {
        subtitle: "Negotiation",
        text: "In the event of any dispute arising from these Terms, the parties agree to first attempt to resolve the dispute through good-faith negotiation.",
      },
      {
        subtitle: "Arbitration",
        text: "If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the arbitration association agreed upon by both parties, unless otherwise specified in your project agreement.",
      },
      {
        subtitle: "Governing Law",
        text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      },
      {
        subtitle: "Class Action Waiver",
        text: "You agree that disputes will be resolved on an individual basis only, and you waive any right to participate in class actions or class-wide arbitration.",
      },
    ],
  },
  {
    title: "Miscellaneous",
    icon: <FileText className="w-5 h-5" />,
    content: [
      {
        subtitle: "Entire Agreement",
        text: "These Terms, together with your project agreement and our Privacy Policy, constitute the entire agreement between you and SNR AUTOMATIONS regarding the Services and supersede all prior agreements.",
      },
      {
        subtitle: "Severability",
        text: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and effect.",
      },
      {
        subtitle: "Waiver",
        text: "No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.",
      },
      {
        subtitle: "Assignment",
        text: "You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign these Terms without restriction.",
      },
      {
        subtitle: "Force Majeure",
        text: "Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including natural disasters, war, terrorism, labor disputes, or governmental actions.",
      },
    ],
  },
];

const termsPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service - SNR AUTOMATIONS",
  description:
    "Terms of Service for SNR AUTOMATIONS. Legal terms and conditions for using our AI automation and SaaS services.",
  publisher: {
    "@type": "Organization",
    name: "SNR AUTOMATIONS",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsPageStructuredData),
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
                <Scale className="w-5 h-5 mr-2 text-primary" />
                <span className="text-lg font-bold">Terms of Service</span>
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Legal{" "}
                <span className="gold-gradient-text">Terms & Conditions</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Please read these terms carefully before using SNR AUTOMATIONS&apos;
                services.
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
                    These Terms of Service (&quot;Terms&quot;) govern your
                    access to and use of SNR AUTOMATIONS&apos; website, products,
                    and services. By using our Services, you agree to be bound
                    by these Terms.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    These Terms constitute a legally binding agreement between
                    you and SNR AUTOMATIONS. If you do not agree to these Terms,
                    please do not use our Services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
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
                    Questions About These Terms?
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6">
                    If you have any questions or concerns about these Terms of
                    Service, please contact our legal team:
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
                      Contact Legal Team
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

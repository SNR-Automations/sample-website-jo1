"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Settings,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    category: "General",
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "What is SNR AUTOMATIONS?",
        answer:
          "SNR AUTOMATIONS is a leading AI-powered automation and SaaS company specializing in creating intelligent CEO Dashboard systems and custom business automation solutions for enterprises worldwide. We help businesses eliminate repetitive tasks and make data-driven decisions through our cutting-edge technology.",
      },
      {
        question: "Who are your typical clients?",
        answer:
          "We work with Fortune 500 companies, mid-size enterprises, and growing startups across 10+ industries including Financial Services, Healthcare, Real Estate, E-commerce, SaaS, Legal, Marketing Agencies, and more. Our solutions scale to fit businesses of any size.",
      },
      {
        question: "What makes SNR AUTOMATIONS different?",
        answer:
          "We focus on AI-first, fully customized workflows instead of generic templates. Every automation is engineered around your exact business processes, ensuring accuracy, scalability, and measurable results. We combine executive-level consulting with world-class technical implementation.",
      },
    ],
  },
  {
    category: "Services & Implementation",
    icon: <Settings className="w-5 h-5" />,
    questions: [
      {
        question: "How long does it take to implement a solution?",
        answer:
          "Most automation projects take 1–2 weeks from discovery to deployment. Complex multi-system workflows may take 3–4 weeks. For full SaaS platforms, typical timelines are 4–8 weeks depending on scope. We follow an agile methodology with regular demos and feedback sessions.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes. We integrate with CRM platforms, marketing tools, payment gateways, communication apps, and almost any software with an API. Popular integrations include Salesforce, HubSpot, Stripe, Slack, Microsoft 365, Google Workspace, and hundreds more.",
      },
      {
        question: "Do we need technical knowledge to use your systems?",
        answer:
          "No. Everything we build is zero-technical-effort for the client. You get clean dashboards, simple controls, and complete onboarding support. If you can operate email, you can operate our systems. We provide comprehensive training and documentation.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer 24/7 technical support, continuous monitoring, regular updates and improvements, and dedicated account management. Every client receives comprehensive training, detailed documentation, and ongoing optimization services.",
      },
    ],
  },
  {
    category: "Pricing & Investment",
    icon: <DollarSign className="w-5 h-5" />,
    questions: [
      {
        question: "How much do your services cost?",
        answer:
          "Pricing varies based on project scope, complexity, and requirements. Automation projects typically start at $5,000, while full SaaS platforms start at $25,000. We provide transparent, detailed proposals with no hidden costs. Contact us for a custom quote tailored to your needs.",
      },
      {
        question: "What is the ROI of automation?",
        answer:
          "Our clients typically see 80% reduction in manual task time, 50% cost savings through efficiency gains, and 3x faster response times. Most investments pay for themselves within 3–6 months through time savings, reduced errors, and improved customer satisfaction.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment structures including milestone-based payments, monthly subscriptions for ongoing services, and custom payment plans for enterprise clients. We work with your budget and financial requirements.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        question: "How secure is your platform?",
        answer:
          "We implement bank-level security with SOC 2 Type II compliance standards, end-to-end encryption, advanced access controls, and regular security audits. All data is encrypted at rest and in transit. We follow GDPR, CCPA, and other international data protection regulations.",
      },
      {
        question: "Where is our data stored?",
        answer:
          "Data is stored in enterprise-grade cloud infrastructure (AWS, Google Cloud, or Azure) with redundancy across multiple regions. You maintain full ownership of your data, and we provide regular backups and disaster recovery options.",
      },
      {
        question: "Are you GDPR and CCPA compliant?",
        answer:
          "Yes, all our solutions are built with GDPR, CCPA, and international data privacy regulations in mind. We implement proper data handling, user consent management, data portability, and right-to-deletion features as required.",
      },
    ],
  },
  {
    category: "Performance & Scalability",
    icon: <Zap className="w-5 h-5" />,
    questions: [
      {
        question: "How reliable is your platform?",
        answer:
          "We guarantee 99.9% uptime with sub-second response times. Our infrastructure includes automated monitoring, instant failover systems, and 24/7 performance optimization. We use global CDN networks for optimal performance worldwide.",
      },
      {
        question: "Can your solutions scale with our growth?",
        answer:
          "Absolutely. Our systems are built on modern, scalable architecture using cloud-native technologies. Whether you&apos;re processing 100 or 100 million transactions, our infrastructure automatically scales to meet demand without performance degradation.",
      },
      {
        question: "What happens if something breaks?",
        answer:
          "We provide 24/7 monitoring and immediate incident response. Our team proactively identifies and resolves issues before they impact your business. In rare cases of downtime, we have automated failover systems and a dedicated emergency response team.",
      },
    ],
  },
  {
    category: "Getting Started",
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        question: "How do we get started?",
        answer:
          "Schedule a free consultation call where we&apos;ll discuss your needs, challenges, and goals. We&apos;ll then provide a detailed proposal with timeline and pricing. Once approved, we begin with a discovery phase to map your requirements before development starts.",
      },
      {
        question: "What information do you need from us?",
        answer:
          "We&apos;ll need to understand your current processes, pain points, desired outcomes, existing tech stack, and any specific requirements. During discovery, we&apos;ll conduct stakeholder interviews and process mapping sessions to ensure we capture everything.",
      },
      {
        question: "Can we see a demo before committing?",
        answer:
          "Yes! We offer personalized demos tailored to your industry and use case. We can also provide case studies and references from similar clients. Schedule an executive demo to see our platform in action with your specific requirements.",
      },
    ],
  },
];

const faqsPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }))
  ),
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqsPageStructuredData),
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
                <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                <span className="text-lg font-bold">
                  Frequently Asked Questions
                </span>
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Got Questions?{" "}
                <span className="gold-gradient-text">
                  We&apos;ve Got Answers
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about SNR AUTOMATIONS, our
                services, and how we can transform your business operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{category.category}</h2>
                  </div>

                  {/* Questions */}
                  <div className="space-y-6">
                    {category.questions.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + index * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Card className="glass-card hover:border-primary/50 transition-all duration-300">
                          <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                              {item.question}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Still Have Questions?
              </h2>

              <p className="text-xl text-muted-foreground">
                Our team is here to help. Schedule a free consultation to
                discuss your specific needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button size="lg" className="gold-gradient px-8 py-6 text-lg">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Typical response time: 4 hours during business days</span>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Executive Starter",
    price: "15,000",
    period: "per month",
    description: "Perfect for growing companies ready to scale with intelligent dashboards",
    features: [
      "Real-time Executive Dashboard",
      "Up to 5 department integrations",
      "Basic AI insights & alerts",
      "Mobile executive app",
      "Email & chat support",
    ],
    limitations: ["Up to 50 users", "Standard reporting"],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Fortune 500",
    price: "45,000",
    period: "per month",
    description: "Comprehensive solution for large enterprises with complex needs",
    features: [
      "Everything in Executive Starter",
      "Unlimited department integrations",
      "Advanced AI & predictive analytics",
      "Custom industry modules",
      "Dedicated customer success manager",
    ],
    limitations: ["Unlimited users", "Enterprise integrations"],
    popular: true,
    cta: "Request a Demo",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="mb-4 border border-amber-600 text-amber-400">Pricing Plans</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Choose a plan built for growth</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Flexible pricing for teams of all sizes — start with a trial or schedule a demo.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`p-6 ${plan.popular ? "border-amber-700" : "border-border"}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-3xl font-extrabold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start"><Check className="w-4 h-4 mr-2 text-primary mt-1" /><span>{f}</span></li>
                      ))}
                    </ul>

                    <div className="mb-4 space-y-1 text-xs text-muted-foreground">
                      {plan.limitations.map((it) => (<div key={it}>• {it}</div>))}
                    </div>

                    <div>
                      <Link href="/contact"> 
                        <Button className={`w-full ${plan.popular ? "gold-gradient" : ""}`}>{plan.cta}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Star,
  Shield,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Executive Starter",
    price: "15,000",
    period: "per month",
    description: "Perfect for growing companies ready to scale with intelligent dashboards",
    features: [
      "Real-time Executive Dashboard",
      "Up to 5 department integrations",
      "Basic AI insights & alerts",
      "Mobile executive app",
      "Email & chat support",
    ],
    limitations: ["Up to 50 users", "Standard reporting"],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Fortune 500",
    price: "45,000",
    period: "per month",
    description: "Comprehensive solution for large enterprises with complex needs",
    features: [
      "Everything in Executive Starter",
      "Unlimited department integrations",
      "Advanced AI & predictive analytics",
      "Custom industry modules",
      "Dedicated customer success manager",
    ],
    limitations: ["Unlimited users", "Enterprise integrations"],
    popular: true,
    cta: "Request a Demo",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 border border-amber-600 text-amber-400">Pricing Plans</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Choose a plan built for growth</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing for teams of all sizes — start with a trial or schedule a demo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan) => (
              <motion.div
 
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground flex-1">
                    <li>• All-in-one Business OS</li>
                    <li>• AI-Powered Automation</li>
                    <li>• Global-Ready SaaS Platform</li>
                    <li>• Cut costs, scale smarter</li>
                  </ul>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="w-full border border-amber-600 text-amber-300 hover:bg-amber-900/20 px-6 py-3 flex items-center justify-center" variant="outline">
                        Build Your Platform
                        <ArrowRight className="ml-3 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Industries We <span className="gold-gradient-text">Serve</span></h2>
          <p className="text-muted-foreground mb-8">We design automation systems tailored for:</p>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <div key={i} className="px-4 py-2 border border-amber-800 text-sm rounded-full text-muted-foreground">{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="gold-gradient-text">launch yours?</span></h2>
            <p className="text-muted-foreground mb-6">JOIN WITH SNR AUTOMATIONS<br/>Smarter work, Bigger Impact.</p>
            <Link href="/contact">
              <Button className="gold-gradient px-6 py-3">Let's LAUNCH</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ArrowRight, 
  Star,
  Shield,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Executive Starter",
    price: "15,000",
    period: "per month",
    "use client";

    import { motion } from "framer-motion";
    import Link from "next/link";
    import { Button } from "@/components/ui/button";
    import { Card, CardContent } from "@/components/ui/card";
    import { Badge } from "@/components/ui/badge";
    import { Zap, Layers, ArrowRight } from "lucide-react";

    const industries = [
      "Financial Advisors & Investment Firms",
      "Real Estate Agencies",
      "Healthcare & Wellness Clinics",
      "Legal & Compliance Services",
      "Marketing & Advertising Agencies",
      "Luxury Travel Hospitality",
      "E-commerce Brands",
      "SaaS & IT Companies",
      "Coaching & Online Education",
      "Recruitment & HR Tech",
    ];

    export default function PricingPage() {
      return (
        <div className="min-h-screen bg-background pt-20">
          {/* Hero */}
          <section className="pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Badge className="mb-4 border border-amber-600 text-amber-400">Our Services</Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Transformative <span className="gold-gradient-text">Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Two powerful offerings designed to revolutionize how you work
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main service cards */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-amber-800 rounded-lg p-6 bg-card/20">
                    <CardContent className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded bg-amber-900/30 mr-4">
                          <Zap className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">AUTOMATE TASKS</h3>
                          <p className="text-sm text-muted-foreground">AI-powered automation that removes/eliminates repetitive work and saves you back valuable time.</p>
                        </div>
                      </div>

                      <ul className="mb-6 space-y-2 text-sm text-muted-foreground flex-1">
                        <li>• Lead Capture & Qualification</li>
                        <li>• Client Onboarding</li>
                        <li>• Appointment Scheduling</li>
                        <li>• 24/7 Customer Support</li>
                      </ul>

                      <div className="pt-4">
                        <Link href="/contact">
                          <Button className="w-full gold-gradient px-6 py-3 flex items-center justify-center">
                            Explore Automation
                            <ArrowRight className="ml-3 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-amber-800 rounded-lg p-6 bg-card/20">
                    <CardContent className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded bg-amber-900/30 mr-4">
                          <Layers className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">ALL-IN-ONE SAAS</h3>
                          <p className="text-sm text-muted-foreground">A single smart dashboard to manage, streamline, and scale businesses.</p>
                        </div>
                      </div>

                      <ul className="mb-6 space-y-2 text-sm text-muted-foreground flex-1">
                        <li>• All-in-one Business OS</li>
                        <li>• AI-Powered Automation</li>
                        <li>• Global-Ready SaaS Platform</li>
                        <li>• Cut costs, scale smarter</li>
                      </ul>

                      <div className="pt-4">
                        <Link href="/contact">
                          <Button className="w-full border border-amber-600 text-amber-300 hover:bg-amber-900/20 px-6 py-3 flex items-center justify-center" variant="outline">
                            Build Your Platform
                            <ArrowRight className="ml-3 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Industries We <span className="gold-gradient-text">Serve</span></h2>
              <p className="text-muted-foreground mb-8">We design automation systems tailored for:</p>

              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((i) => (
                  <div key={i} className="px-4 py-2 border border-amber-800 text-sm rounded-full text-muted-foreground">{i}</div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-card/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="gold-gradient-text">launch yours?</span></h2>
                <p className="text-muted-foreground mb-6">JOIN WITH SNR AUTOMATIONS<br/>Smarter work, Bigger Impact.</p>
                <Link href="/contact">
                  <Button className="gold-gradient px-6 py-3">Let's LAUNCH</Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      );
    }
                  viewport={{ once: true }}

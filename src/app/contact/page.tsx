"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  // Mail re-added because user requested an email entry in the contact info block
  Mail,
  MapPin,
  Calendar,
  Clock,
  Globe,
  Shield,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";

const contactPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "SNR AUTOMATIONS",
    contactPoint: {
      "@type": "ContactPoint",
      email: "snrautomations3@gmail.com",
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    industry: "",
    companySize: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          title: formData.title,
          phone: formData.phone,
          industry: formData.industry,
          companySize: formData.companySize,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        setErrorMessage(errorData.error || 'There was an error submitting your form.');
        return;
      }

      // Reset form and show confirmation
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        title: "",
        phone: "",
        industry: "",
        companySize: "",
        message: "",
      });
      setShowConfirmation(true);

      // Hide confirmation after 5 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage('There was an unexpected error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageStructuredData) }}
      />
      <div className="min-h-screen bg-background pt-20">
      {/* Confirmation Popup */}
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowConfirmation(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-8 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Demo Request Submitted!</h3>
              <p className="text-muted-foreground mb-6">
                Our executive team will contact you within 24 hours to schedule your personalized demo.
              </p>
              <Button
                onClick={() => setShowConfirmation(false)}
                className="w-full"
              >
                Got it!
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Your Executive Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to{" "}
              <span className="gold-gradient-text">Transform</span>{" "}
              Your Business?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of business leaders who have revolutionized their decision-making with SNR AUTOMATIONS.
              Schedule your personalized demo today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Executive Demo</CardTitle>
                  <p className="text-muted-foreground">
                    Get a personalized walkthrough of our CEO Dashboard systems tailored to your industry and needs.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="mt-1"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        className="mt-1"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.smith@company.com"
                      className="mt-1"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="mt-1"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      placeholder="CEO, CTO, VP of Operations"
                      className="mt-1"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <select
                      id="industry"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.industry}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your industry</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Financial Services</option>
                      <option value="technology">Technology</option>
                      <option value="retail">Retail</option>
                      <option value="energy">Energy</option>
                      <option value="logistics">Logistics</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="companySize">Company Size</Label>
                    <select
                      id="companySize"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.companySize}
                      onChange={handleInputChange}
                    >
                      <option value="">Select company size</option>
                      <option value="startup">Startup (1-50 employees)</option>
                      <option value="small">Small (51-200 employees)</option>
                      <option value="medium">Medium (201-1000 employees)</option>
                      <option value="large">Large (1001-5000 employees)</option>
                      <option value="enterprise">Enterprise (5000+ employees)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your current challenges</Label>
                    <Textarea
                      id="message"
                      placeholder="What business intelligence challenges are you facing? What metrics matter most to your executive team?"
                      className="mt-1 min-h-24"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gold-gradient text-lg py-3"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Schedule My Executive Demo"}
                  </Button>

                  {errorMessage && (
                    <div className="text-sm text-red-400 text-center mt-2">{errorMessage}</div>
                  )}

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We typically respond within 4 hours during business days.
                  </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Our executive team is ready to discuss your business intelligence needs.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">


                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Office Address</div>
                      <div className="text-muted-foreground">Chennai, Tamil Nadu, India</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Office Hours</div>
                      <div className="text-muted-foreground">Mon-Fri 9am to 6pm</div>
                    </div>
                  </div>

                  {/* Add single email address here (user requested a single email entry) */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">snrautomations3@gmail.com</div>
                      <div className="text-xs text-primary">Response within 24 hours</div>
                    </div>
                  </div>

                  {/* Phone and Email (top pair) removed per request — keeping office address and hours above */}
                </CardContent>
              </Card>

              {/* Demo Benefits */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">What You&apos;ll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Personalized Analysis</div>
                      <div className="text-sm text-muted-foreground">Custom dashboard design based on your industry and KPIs</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Live Data Integration</div>
                      <div className="text-sm text-muted-foreground">See how your real data would look in our system</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">ROI Calculation</div>
                      <div className="text-sm text-muted-foreground">Detailed cost-benefit analysis for your organization</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Implementation Roadmap</div>
                      <div className="text-sm text-muted-foreground">Step-by-step plan for seamless deployment</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions from executives considering SNR AUTOMATIONS
            </p>
          </motion.div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What makes SNR AUTOMATIONS different from other automation companies?</h3>
                <p className="text-muted-foreground">
                  We focus on AI-first, fully customized workflows instead of generic templates. Every automation is engineered around your exact business processes, ensuring accuracy, scalability, and measurable results — not &ldquo;one-size-fits-all&rdquo; solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">How long does it take to automate a business workflow?</h3>
                <p className="text-muted-foreground">
                  Most automation projects take 1–2 weeks from discovery to deployment. Complex multi-system workflows may take 3–4 weeks. We move fast, but without compromising quality or reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Do I need technical knowledge to use your automation or SaaS systems?</h3>
                <p className="text-muted-foreground">
                  No. Everything we build is zero-technical-effort for the client. You get clean dashboards, simple controls, and complete onboarding support. If you can operate email, you can operate our systems.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Can SNR AUTOMATIONS integrate with the tools my business already uses?</h3>
                <p className="text-muted-foreground">
                  Yes. We integrate with CRM platforms, marketing tools, payment gateways, communication apps, and almost any software with an API. If your tool supports data exchange, we&apos;ll make it talk to your system — seamlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

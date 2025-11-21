"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export function Footer() {
  // Footer links removed per request (Solutions / Industries / Resources)
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
        return;
      }

      setSubmitStatus({ type: "success", message: "Successfully subscribed!" });
      setEmail("");
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubmitStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-6">
                <div className="text-2xl font-bold gold-gradient-text logo-glow">
                  SNR AUTOMATIONS
                </div>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 max-w-md">
                Transforming businesses with AI-powered CEO Dashboard systems for intelligent automation 
                and data-driven decision making.
              </p>
              
              {/* Contact Info (email & phone removed as requested) */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links removed per user request */}

          {/* Newsletter */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest insights on AI automation and business intelligence.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-card border-border/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  className="w-full gold-gradient group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  {!isSubmitting && (
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  )}
                </Button>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm flex items-center space-x-2 ${
                      submitStatus.type === "success" 
                        ? "text-green-400" 
                        : "text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" && (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="gold-gradient">
                Schedule Your Demo Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-card border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-sm text-muted-foreground">
            <span>© 2025 SNR AUTOMATIONS. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

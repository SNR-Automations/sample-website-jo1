"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from "lucide-react";

export function Footer() {
  // Footer links removed per request (Solutions / Industries / Resources)

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/snrautomations" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/snr-automations" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@snrautomations" },
  ];

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
                Transforming businesses with AI-powered CEO Dashboard systems. 
                Trusted by Fortune 500 executives for intelligent automation 
                and data-driven decision making.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>snrautomations3@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 8946084672</span>
                </div>
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
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-card border-border/40"
                />
                <Button className="w-full gold-gradient group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links & CTA */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            
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
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-6">
              <span>© 2025 SNR Automations. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Enterprise AI Solutions</span>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-primary font-medium">
                Trusted by Fortune 500 Executives
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

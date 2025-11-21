"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  MapPin,
  Target,
  Eye,
  Award,
  Building2,
  Heart,
  Scale,
  ShoppingBag,
  GraduationCap,
  DollarSign,
  Megaphone,
  Plane,
  Server,
  UserCheck,
  ArrowRight,
  Star,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const industries = [
  { name: "Real Estate Agencies", icon: <Building2 className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
  { name: "Healthcare & Wellness Clinics", icon: <Heart className="w-8 h-8" />, color: "from-red-500 to-pink-500" },
  { name: "Legal & Compliance Services", icon: <Scale className="w-8 h-8" />, color: "from-purple-500 to-indigo-500" },
  { name: "E-Commerce Brands", icon: <ShoppingBag className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
  { name: "Coaching & Online Education", icon: <GraduationCap className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" },
  { name: "Financial Advisors & Investment Firms", icon: <DollarSign className="w-8 h-8" />, color: "from-emerald-500 to-teal-500" },
  { name: "Marketing & Advertising Agencies", icon: <Megaphone className="w-8 h-8" />, color: "from-pink-500 to-rose-500" },
  { name: "Luxury Travel & Hospitality", icon: <Plane className="w-8 h-8" />, color: "from-indigo-500 to-purple-500" },
  { name: "SaaS & IT Product Companies", icon: <Server className="w-8 h-8" />, color: "from-cyan-500 to-blue-500" },
  { name: "Recruitment & HR Tech Platforms", icon: <UserCheck className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
];

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "SNR AUTOMATIONS",
    founder: {
      "@type": "Person",
      name: "Miss S.N. Rathnadevi",
      jobTitle: "Founder & CEO",
      worksFor: {
        "@type": "Organization",
        name: "SNR AUTOMATIONS",
      },
      sameAs: [
        "https://www.instagram.com/rathnadevisn",
        "https://www.linkedin.com/in/rathnadevisn",
      ],
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageStructuredData) }}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Star className="w-4 h-4 mr-2 text-primary" />
              About SNR AUTOMATIONS
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Empowering Business{" "}
              <span className="gold-gradient-text">Leaders</span>{" "}
              with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded by visionary leader Miss S.N. Rathnadevi, SNR AUTOMATIONS is dedicated to
              transforming businesses through intelligent automation and AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gradient-to-br from-card/50 via-background to-background relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 to-transparent blur-3xl opacity-60"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1 space-y-6">
              <Badge variant="outline" className="px-4 py-2 w-fit">
                Founder Spotlight
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Meet Our <span className="gold-gradient-text">Founder</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Miss S.N. Rathnadevi leads SNR AUTOMATIONS with a relentless focus on precision,
                integrity, and executive-level outcomes. Her experience architecting automation
                programs for enterprise teams helps clients convert messy data into decisive intelligence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border/40 bg-card/40 p-4">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Impact</p>
                  <p className="text-2xl font-bold">120+</p>
                  <p className="text-sm text-muted-foreground">automation workflows delivered</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-card/40 p-4">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Experience</p>
                  <p className="text-2xl font-bold">10+ yrs</p>
                  <p className="text-sm text-muted-foreground">scaling enterprise operations</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-card/40 p-4">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Recognition</p>
                  <p className="text-2xl font-bold">Global</p>
                  <p className="text-sm text-muted-foreground">advisor, mentor, keynote voice</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Connect
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.instagram.com/rathnadevisn"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Connect with Miss S.N. Rathnadevi on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rathnadevisn"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Connect with Miss S.N. Rathnadevi on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>Chennai, India</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Automation Strategist</span>
                </span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-lg mx-auto">
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-primary/40 to-transparent blur-2xl opacity-70" />
                <div className="relative rounded-[32px] border border-border/60 bg-card/60 overflow-hidden">
                  <Image
                    src="/images/founder.jpg"
                    alt="Portrait of Miss S.N. Rathnadevi, Founder & CEO of SNR AUTOMATIONS"
                    width={640}
                    height={760}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5 mb-4">
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Building an all-in-one AI platform that replaces chaos with clarity for business 
                    leaders worldwide. We believe that every business, regardless of size, should have 
                    access to powerful automation tools that can transform their operations and 
                    accelerate their growth.
                  </p>
                </div>
                
                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 mb-4">
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create a future where AI and automation empower every student, founder and 
                    business to scale without limits. We envision a world where technology serves 
                    humanity, making complex processes simple and enabling everyone to achieve 
                    their full potential.
                  </p>
                </div>
                
                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We{" "}
              <span className="gold-gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions tailored for diverse industries and business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-card hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} p-0.5 mx-auto mb-4`}>
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}

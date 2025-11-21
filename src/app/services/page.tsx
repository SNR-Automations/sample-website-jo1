"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Layers, 
  ArrowRight,
  DollarSign,
  Building2,
  Heart,
  Scale,
  Megaphone,
  Plane,
  ShoppingBag,
  Server,
  GraduationCap,
  UserCheck
} from "lucide-react";

const industries = [
  { 
    name: "Financial Advisors & Investment Firms", 
    icon: <DollarSign className="w-8 h-8" />, 
    gradient: "from-emerald-500 to-teal-500" 
  },
  { 
    name: "Real Estate Agencies", 
    icon: <Building2 className="w-8 h-8" />, 
    gradient: "from-blue-500 to-cyan-500" 
  },
  { 
    name: "Healthcare & Wellness Clinics", 
    icon: <Heart className="w-8 h-8" />, 
    gradient: "from-red-500 to-pink-500" 
  },
  { 
    name: "Legal & Compliance Services", 
    icon: <Scale className="w-8 h-8" />, 
    gradient: "from-purple-500 to-indigo-500" 
  },
  { 
    name: "Marketing & Advertising Agencies", 
    icon: <Megaphone className="w-8 h-8" />, 
    gradient: "from-pink-500 to-rose-500" 
  },
  { 
    name: "Luxury Travel Hospitality", 
    icon: <Plane className="w-8 h-8" />, 
    gradient: "from-indigo-500 to-purple-500" 
  },
  { 
    name: "E-commerce Brands", 
    icon: <ShoppingBag className="w-8 h-8" />, 
    gradient: "from-green-500 to-emerald-500" 
  },
  { 
    name: "SaaS & IT Companies", 
    icon: <Server className="w-8 h-8" />, 
    gradient: "from-cyan-500 to-blue-500" 
  },
  { 
    name: "Coaching & Online Education", 
    icon: <GraduationCap className="w-8 h-8" />, 
    gradient: "from-yellow-500 to-orange-500" 
  },
  { 
    name: "Recruitment & HR Tech", 
    icon: <UserCheck className="w-8 h-8" />, 
    gradient: "from-orange-500 to-red-500" 
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="mb-4 border border-amber-600 text-amber-400">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Transformative <span className="gold-gradient-text">Solutions</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Two powerful offerings designed to revolutionize how you work</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.035 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="border border-amber-800 rounded-lg p-6 bg-card/20 overflow-hidden">
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
                      <Button className="w-full gold-gradient px-6 py-3 flex items-center justify-center">Explore Automation <ArrowRight className="ml-3 w-4 h-4" /></Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.035 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="border border-amber-800 rounded-lg p-6 bg-card/20 overflow-hidden">
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
                      <Button className="w-full border border-amber-600 text-amber-300 hover:bg-amber-900/20 px-6 py-3 flex items-center justify-center" variant="outline">Build Your Platform <ArrowRight className="ml-3 w-4 h-4" /></Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We <span className="gold-gradient-text">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We design automation systems tailored for diverse industries and business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const isSecondLast = index === industries.length - 2;
              const isLast = index === industries.length - 1;
              
              return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group w-full ${
                  isSecondLast ? "xl:col-start-2" : isLast ? "xl:col-start-3" : ""
                }`}
              >
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.gradient} p-0.5 mx-auto mb-4`}>
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="gold-gradient-text">launch yours?</span></h2>
            <p className="text-muted-foreground mb-6">JOIN WITH SNR AUTOMATIONS<br/>Smarter work, Bigger Impact.</p>
            <Link href="/contact">
              <Button className="gold-gradient px-6 py-3">Let&apos;s LAUNCH</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

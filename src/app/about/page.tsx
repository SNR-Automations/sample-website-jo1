"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { 
  MapPin, 
  Phone, 
  Mail, 
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
  Star
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

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechnoVision Solutions",
    content: "SNR Automations transformed our business operations completely. The AI dashboard gave us insights we never had before.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Founder, HealthCare Plus",
    content: "The automation tools helped us scale from a small clinic to a multi-location healthcare provider in just 18 months.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Director, Real Estate Ventures",
    content: "Miss S.N. Rathnadevi's vision for AI automation has revolutionized how we manage our property portfolio.",
    rating: 5,
  },
];

export default function AboutPage() {
  return (
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
              About SNR Automations
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Empowering Business{" "}
              <span className="gold-gradient-text">Leaders</span>{" "}
              with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded by visionary leader Miss S.N. Rathnadevi, SNR Automations is dedicated to 
              transforming businesses through intelligent automation and AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-card border-2 border-primary/20 overflow-hidden">
                    <Image
                      src="/images/founder.jpg"
                      alt="Miss S.N. Rathnadevi - Founder & CEO"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative accents */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/70 rounded-full shadow-lg"></div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center lg:text-left">
                  Meet Our{" "}
                  <span className="gold-gradient-text">Founder</span>
                </h2>
                
                {/* Founder Info */}
                <div className="space-y-6 text-center lg:text-left">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-foreground">
                      Miss S.N. RATHNADEVI
                    </h3>
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                      <p className="text-lg font-semibold text-primary">
                        FOUNDER & CEO
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto lg:mx-0"></div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A visionary entrepreneur with a passion for leveraging AI and automation 
                    to solve complex business challenges. Under her leadership, SNR Automations 
                    has become a trusted partner for businesses seeking digital transformation.
                  </p>
                  
                  <div className="pt-4">
                    <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>Chennai, India</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Automation Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card p-8">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Building an all-in-one AI platform that replaces chaos with clarity for business 
                    leaders worldwide. We believe that every business, regardless of size, should have 
                    access to powerful automation tools that can transform their operations and 
                    accelerate their growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card p-8">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create a future where AI and automation empower every student, founder and 
                    business to scale without limits. We envision a world where technology serves 
                    humanity, making complex processes simple and enabling everyone to achieve 
                    their full potential.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="gold-gradient-text">Clients</span>{" "}
              Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <span className="text-primary font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In{" "}
              <span className="gold-gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? Contact us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit us</h3>
                  <p className="text-muted-foreground mb-2">Office Address:</p>
                  <p className="font-medium">Chennai, Tamil Nadu, India</p>
                  <p className="text-sm text-muted-foreground mt-2">Office Hours:</p>
                  <p className="text-sm">Mon-Fri 9am to 6pm</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call us</h3>
                  <p className="text-muted-foreground mb-2">Phone Number:</p>
                  <p className="font-medium">+91 8946084672</p>
                  <p className="text-sm text-muted-foreground mt-2">Available:</p>
                  <p className="text-sm">24/7 for urgent matters</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Support desk</h3>
                  <p className="text-muted-foreground mb-2">Email Address:</p>
                  <p className="font-medium">snrautomations3@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Response Time:</p>
                  <p className="text-sm">Within 24 hours</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <ShimmerButton className="px-8 py-4 text-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

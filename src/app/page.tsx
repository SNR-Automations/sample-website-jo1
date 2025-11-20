"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Target, 
  Users, 
  Shield, 
  Zap,
  Award,
  CheckCircle,
  Star,
  PlayCircle,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const typewriterWords = [
  { text: "AI-Powered" },
  { text: "CEO" },
  { text: "Dashboard" },
  { text: "Systems" },
];

const heroDescription = "Transform your business with intelligent CEO Dashboard systems designed for Fortune 500 executives. Real-time analytics, predictive insights, and automated decision-making in one powerful platform.";

const stats = [
  { value: "500+", label: "Fortune 500 Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "10", label: "Industry Solutions" },
  { value: "45%", label: "Average ROI Increase" },
];

const features = [
  {
    title: "Real-time Executive Dashboard",
    description: "Live KPI monitoring with predictive analytics and automated alerts for critical business metrics.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI-Powered Decision Intelligence",
    description: "Machine learning algorithms that provide strategic recommendations based on market data and company performance.",
    icon: <Brain className="w-6 h-6 text-primary" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Industry-Specific Solutions",
    description: "Customized dashboard systems for 10+ industries including manufacturing, healthcare, finance, and technology.",
    icon: <Target className="w-6 h-6 text-primary" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Team Performance Analytics",
    description: "Comprehensive workforce analytics with productivity tracking and resource optimization insights.",
    icon: <Users className="w-6 h-6 text-primary" />,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 Type II compliance, end-to-end encryption, and advanced access controls.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Lightning-Fast Performance",
    description: "Sub-second response times with 99.9% uptime guarantee and global CDN infrastructure.",
    icon: <Zap className="w-6 h-6 text-primary" />,
    gradient: "from-yellow-500 to-orange-500",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechnoVision Solutions",
    company: "Leading IT Services Company",
    content: "SNR&apos;s CEO Dashboard transformed how we make strategic decisions. The AI insights have increased our operational efficiency by 40% in just 6 months.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Chief Operating Officer",
    company: "Global Healthcare Leader",
    content: "The real-time analytics and predictive capabilities are game-changing. We&apos;ve reduced costs by ₹2.3 Crore annually while improving decision-making speed.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "CEO, FinanceFirst Advisors",
    company: "Investment Management Firm",
    content: "SNR Automations' with their dashboard system gave our executive team the tools to navigate complex financial markets with confidence.                  ",
    rating: 5,
  },
];

const industries = [
  { name: "Real Estate Agencies", clients: "150+", icon: "🏠" },
  { name: "Healthcare & Wellness Clinics", clients: "95+", icon: "🏥" },
  { name: "Legal & Compliance Services", clients: "120+", icon: "⚖️" },
  { name: "E-Commerce Brands", clients: "200+", icon: "�" },
  { name: "Coaching & Online Education", clients: "85+", icon: "📚" },
  { name: "Financial Advisors & Investment Firms", clients: "65+", icon: "�" },
  { name: "Marketing & Advertising Agencies", clients: "75+", icon: "📢" },
  { name: "Luxury Travel & Hospitality", clients: "45+", icon: "✈️" },
  { name: "SaaS & IT Product Companies", clients: "110+", icon: "💻" },
  { name: "Recruitment & HR Tech Platforms", clients: "55+", icon: "👥" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <Spotlight />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20 bg-primary/10">
                <Star className="w-4 h-4 mr-2 text-primary" />
                Trusted by Fortune 500 Executives
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Transform Your Business</span>
                <span className="block text-foreground">with</span>
                <div className="mt-2">
                  <TypewriterEffect words={typewriterWords} className="gold-gradient-text" />
                </div>
              </h1>
              
              <div className="max-w-3xl mx-auto">
                <TextGenerateEffect
                  words={heroDescription}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact">
                <ShimmerButton className="px-8 py-4 text-lg gold-gradient">
                  Schedule Executive Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </ShimmerButton>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/10 group"
              >
                <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-muted-foreground rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Enterprise Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Powerful AI Features</span>{" "}
              for Modern Executives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our CEO Dashboard systems combine cutting-edge AI with intuitive design 
              to deliver insights that drive strategic decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry-Specific{" "}
              <span className="gold-gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized dashboard systems tailored for your industry&apos;s unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MagicCard className="p-6 h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground mb-4">{industry.clients} Active Clients</p>
                    <Button variant="ghost" className="group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What{" "}
              <span className="gold-gradient-text">Executives</span>{" "}
              Say About Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="text-xs text-primary">
                          {testimonial.company}
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to{" "}
              <span className="gold-gradient-text">
                Transform
              </span>{" "}
              Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of Fortune 500 executives who trust SNR Automations 
              for their mission-critical business intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <ShimmerButton className="px-8 py-4 text-lg gold-gradient">
                  Schedule Your Executive Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </ShimmerButton>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground">
                <CheckCircle className="inline w-4 h-4 mr-2 text-primary" />
                No setup fees • 30-day free trial • Enterprise support included
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

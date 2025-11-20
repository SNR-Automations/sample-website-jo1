"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Star,
  ArrowRight,
  Play,
  Calendar,
  Brain,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "98%", label: "Success Rate" },
  { number: "4.9", label: "Course Rating" },
  { number: "Fortune 100", label: "Companies" }
];

export default function AcademyPage() {
  return (
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
            <Badge variant="outline" className="mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              SNR Education Division
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SNR{" "}
              <span className="gold-gradient-text">Academy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Master AI-powered business intelligence for Fortune 500 leadership. 
              Our signature program transforms you into a data-driven leader.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="px-8 py-4 text-lg gold-gradient">
                  <Calendar className="mr-2 w-5 h-5" />
                  Enroll Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/10 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Preview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Course - AI MASTERY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient-text">AI MASTERY</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The definitive program for AI-powered business intelligence. 
              Transform yourself with data-driven leadership and AI tool mastery.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl mb-4">AI MASTERY for Executives</CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive 40-hour program designed for AI excellence.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Course Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">40 Hours</h3>
                      <p className="text-sm text-muted-foreground">Intensive training</p>
                    </div>
                    <div className="text-center p-4">
                      <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Small Cohorts</h3>
                      <p className="text-sm text-muted-foreground">Max 15 participants per session</p>
                    </div>
                    <div className="text-center p-4">
                      <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Personalized</h3>
                      <p className="text-sm text-muted-foreground">Industry-specific scenarios</p>
                    </div>
                  </div>

                  {/* Key Learning Outcomes */}
                  <div className="bg-card/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">What You&apos;ll Master:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">AI-powered dashboard implementation</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">Predictive analytics for decision-making</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">Data-driven leadership strategies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">ROI optimization frameworks</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">Real-time performance monitoring</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">Crisis management with AI insights</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-6">
                    <Link href="/contact">
                      <Button className="px-12 py-4 text-lg gold-gradient">
                        Apply for AI MASTERY Program
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-4">
                      Next cohort starts March 2025 • Limited to 15 participants
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of Fortune 500 participants who have mastered AI-powered business intelligence 
              through our flagship AI MASTERY program.
            </p>
            <Link href="/contact">
              <Button className="px-8 py-4 text-lg gold-gradient">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
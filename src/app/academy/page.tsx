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

import { redirect } from "next/navigation";

export default function AcademyRedirect() {
  redirect('/services');
}

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
                import { redirect } from "next/navigation";
              >
                export default function AcademyRedirect() {
                  redirect('/services');
                }
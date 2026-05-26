"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const REASONS = [
  "End-to-end workforce management",
  "Reduced operational burden",
  "Compliance-driven processes",
  "Scalable workforce solutions",
  "Faster hiring turnaround",
  "Technology-enabled operations"
];

export const ServiceWhyChoose = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Advantage</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight mb-8">
              Why Choose Our <span className="text-secondary">Outsourcing Services</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REASONS.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors duration-300"
                >
                  <CheckCircle2 className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-sm lg:text-base font-bold text-secondary uppercase tracking-tight">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 hidden lg:block relative">
            <div className="w-[400px] h-[400px] bg-secondary/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl -z-10" />
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <div className="h-48 rounded-[32px] bg-primary/10 animate-pulse" />
                  <div className="h-64 rounded-[32px] bg-secondary/10" />
               </div>
               <div className="space-y-4">
                  <div className="h-64 rounded-[32px] bg-secondary/10" />
                  <div className="h-48 rounded-[32px] bg-primary/10 animate-pulse" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

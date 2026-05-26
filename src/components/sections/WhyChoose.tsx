"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, ShieldCheck, TrendingUp } from "lucide-react";

const REASONS = [
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Deep domain knowledge across diverse sectors ensuring we find candidates who truly understand your business."
  },
  {
    icon: Zap,
    title: "Faster Hiring Turnaround",
    description: "Our tech-driven sourcing and pre-vetted talent pools reduce time-to-hire by up to 40%."
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First Approach",
    description: "100% adherence to statutory regulations and labor laws, mitigating all administrative risks for your firm."
  },
  {
    icon: TrendingUp,
    title: "Scalable Workforce Solutions",
    description: "Flexible staffing models that grow with your business, from niche hiring to large-scale manpower outsourcing."
  }
];

export const WhyChoose = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">The Value Proposition</h2>
          <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 tracking-tight uppercase">WHY CHOOSE <br className="lg:hidden" /> <span className="text-secondary">HR TALENT SOLUTIONS</span></h3>
          <p className="text-base lg:text-lg text-text-sub max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            We bridge the gap between business goals and human potential through a commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[40px] bg-white border border-primary/5 hover:border-secondary/20 shadow-sm hover:shadow-premium-hover transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-700 border border-primary/10 group-hover:shadow-[0_20px_40px_rgba(249,159,28,0.3)]">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg lg:text-xl font-black text-secondary mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {reason.title}
                </h4>
                <p className="text-text-sub text-base leading-relaxed font-medium opacity-90">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

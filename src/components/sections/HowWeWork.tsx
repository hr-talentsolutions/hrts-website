"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Zap, BarChart } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Insightful Discovery",
    description: "We begin by understanding your unique challenges, organizational culture, and long-term objectives to ensure a perfect alignment of talent and strategy.",
    number: "01"
  },
  {
    icon: PenTool,
    title: "Tailored Strategy",
    description: "Our experts design a bespoke HR and staffing roadmap, leveraging our technological ecosystem to address your specific pain points and growth targets.",
    number: "02"
  },
  {
    icon: Zap,
    title: "Precision Execution",
    description: "We deploy our solutions rapidly, from executive search to managed services, ensuring high-quality outcomes with minimal disruption to your daily operations.",
    number: "03"
  },
  {
    icon: BarChart,
    title: "Continuous Optimization",
    description: "We don't just deliver and depart; we continuously monitor, gather feedback, and optimize our processes to drive sustained value for your organization.",
    number: "04"
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">The Process</h2>
          <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 tracking-tight uppercase leading-[1.1]">How We Drive Success</h3>
          <p className="text-base lg:text-lg text-text-sub max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            Our systematic approach ensures that every engagement is handled with the highest level of expertise and technological precision.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line - Blue */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/10 hidden lg:block -translate-x-1/2" />

          <div className="space-y-20 lg:space-y-40">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-8xl font-display font-black text-secondary/5 mb-[-40px] select-none">
                      {step.number}
                    </span>
                    <h4 className="text-xl lg:text-2xl font-display font-bold text-primary mb-6 relative z-10 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-sm lg:text-base text-text-sub leading-relaxed max-w-lg opacity-80">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node - Orange */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 relative z-20">
                    <step.icon size={28} />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-primary/20 animate-pulse z-10" />
                </div>

                {/* Visual / Empty Space side for layout balance */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

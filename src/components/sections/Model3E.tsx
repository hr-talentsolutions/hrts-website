"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Laptop, ArrowRight } from "lucide-react";

const STAGES = [
  {
    id: "employment",
    title: "Employment",
    desc: "Streamlined recruitment and staffing solutions connecting top talent with industry leaders.",
    icon: Users,
    color: "bg-orange-50",
    iconColor: "text-primary",
  },
  {
    id: "employability",
    title: "Employability",
    desc: "Industry-aligned skill development and vocational training programs for the digital age.",
    icon: GraduationCap,
    color: "bg-white",
    iconColor: "text-secondary",
  },
  {
    id: "eworkforce",
    title: "E-Workforce",
    desc: "Seamless digital platforms for payroll, compliance, and human capital management.",
    icon: Laptop,
    color: "bg-orange-50",
    iconColor: "text-accent",
  },
];

export const Model3E = () => {
  return (
    <section id="solutions" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Red Blur (~3% weight) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Blue for section tag (~10% weight) */}
          <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">The 3E Framework</h2>
          <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 tracking-tight uppercase leading-[1.1]">Our Integrated Model</h3>
          <p className="text-base lg:text-lg text-text-sub max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            A comprehensive ecosystem designed to address the end-to-end needs of the modern workforce through three strategic pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STAGES.map((stage, i) => (
            <div
              key={stage.id}
              className={`p-10 rounded-[40px] border border-primary/10 hover:border-primary/30 transition-all group shadow-premium hover:shadow-premium-hover ${stage.color}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform bg-white`}>
                <stage.icon className={stage.iconColor} size={32} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{stage.title}</h4>
              <p className="text-text-sub mb-8 leading-relaxed">
                {stage.desc}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors underline decoration-primary/20 underline-offset-8">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building, GraduationCap, Gavel, Cpu, Search, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    title: "General Staffing",
    desc: "Scale your workforce with high-quality talent across manufacturing, logistics, and retail.",
    icon: Briefcase,
  },
  {
    title: "IT & Digital Hiring",
    desc: "Specialized recruitment for tech roles, from software engineering to data science.",
    icon: Cpu,
  },
  {
    title: "EdTech & Training",
    desc: "Skill architecture and corporate training programs built for future-ready teams.",
    icon: GraduationCap,
  },
  {
    title: "Compliance & Legal",
    desc: "Tech-driven solutions for managing labor laws, payroll, and regulatory compliance.",
    icon: Gavel,
  },
];

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#FFFAF3]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="lg:w-1/3">
            {/* Blue for section tag (~10% weight) */}
            <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">Our Services</h2>
            <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-8 leading-[1.1] tracking-tight uppercase">
              A Complete <br /> <span className="text-secondary">Talent Infrastructure</span>
            </h3>
            <p className="text-base lg:text-lg text-text-sub max-w-xl leading-relaxed font-medium opacity-80 mb-10">
              We provide the building blocks for modern enterprises to attract, train, and manage their workforce at scale.
            </p>
            <div className="space-y-4">
              {["20+ Years Experience", "Pan-India Presence", "Tech-First Approach"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold text-primary italic text-sm">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="p-10 rounded-[40px] bg-white border border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={26} />
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-primary mb-3 tracking-tight">{service.title}</h4>
                <p className="text-sm lg:text-base text-text-sub leading-relaxed opacity-80">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

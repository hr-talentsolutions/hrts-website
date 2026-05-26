"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  History, 
  UserPlus, 
  Trophy, 
  Users, 
  Cpu, 
  Layers 
} from "lucide-react";

const STRENGTHS = [
  {
    icon: History,
    title: "Extensive Experience of 14+ Years in Recruitment",
    desc: "Proven expertise in delivering high-quality talent solutions across industries."
  },
  {
    icon: UserPlus,
    title: "Proven Track Record in CXO, Senior & Mid-Level Hiring",
    desc: "Strong experience in hiring leadership and critical roles."
  },
  {
    icon: Trophy,
    title: "10,000+ Successful Placements Across 100+ Companies",
    desc: "Demonstrated success in large-scale and niche hiring requirements."
  },
  {
    icon: Users,
    title: "Specialized Subject Matter Expert Teams",
    desc: "Dedicated recruiters for domain-specific hiring needs."
  },
  {
    icon: Cpu,
    title: "Dedicated IT & Non-IT Hiring Teams",
    desc: "Focused teams ensuring quality hiring across technical and non-technical roles."
  },
  {
    icon: Layers,
    title: "Integrated Recruitment Process Outsourcing Support",
    desc: "Flexible hiring models aligned with business needs and scalability."
  }
];

export const TaCapabilities = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Our Talent Acquisition <span className="text-secondary">Strengths</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STRENGTHS.map((strength, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                  <strength.icon size={28} className="group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-text-sub font-medium leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

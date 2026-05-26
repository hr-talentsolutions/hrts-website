"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  UserCheck, 
  Layers, 
  DollarSign, 
  Cpu, 
  Award 
} from "lucide-react";

const REASONS = [
  { icon: Clock, label: "Reduced time-to-hire" },
  { icon: UserCheck, label: "Improved candidate quality" },
  { icon: Layers, label: "Scalable hiring models" },
  { icon: DollarSign, label: "Cost-effective recruitment" },
  { icon: Cpu, label: "Technology-driven approach" },
  { icon: Award, label: "Strong employer branding" }
];

export const RpoWhyChoose = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Advantage</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Why Choose Our <span className="text-secondary">RPO Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[40px] bg-orange-50/50 border border-primary/10 group hover:bg-white hover:shadow-premium transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <reason.icon size={32} />
              </div>
              <h4 className="text-base lg:text-lg font-bold text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                {reason.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

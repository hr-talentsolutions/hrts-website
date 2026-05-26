"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  Briefcase, 
  Scaling, 
  Coins, 
  Headphones 
} from "lucide-react";

const REASONS = [
  { icon: Users, label: "Access to a large and diverse talent pool" },
  { icon: Clock, label: "Faster hiring turnaround time" },
  { icon: Briefcase, label: "Industry-specific expertise" },
  { icon: Scaling, label: "Flexible and scalable workforce solutions" },
  { icon: Coins, label: "Reduced hiring and operational costs" },
  { icon: Headphones, label: "End-to-end staffing support" }
];

export const StaffingWhyChoose = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Advantage</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Why Choose Our <span className="text-secondary">Staffing Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-8 rounded-[40px] bg-secondary/5 border border-secondary/10 group hover:bg-secondary hover:text-white transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <reason.icon size={32} />
              </div>
              <h4 className="text-sm lg:text-base font-bold text-secondary uppercase tracking-tight group-hover:text-white transition-colors">
                {reason.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Globe, Briefcase, Settings2 } from "lucide-react";

const REASONS = [
  { icon: Zap, title: "Fast Hiring Turnaround", desc: "Efficient processes to fulfill your requirements quickly." },
  { icon: Globe, title: "Pan-India Presence", desc: "Serving clients across the nation with a strong local network." },
  { icon: Briefcase, title: "Industry Expertise", desc: "Deep knowledge across multiple sectors and domains." },
  { icon: Settings2, title: "Customized HR Solutions", desc: "Tailored strategies designed for your unique business needs." }
];

export const AboutWhyChoose = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Advantage</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-secondary uppercase tracking-tight">
            Why Choose <span className="text-primary">HR Talent Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon size={32} />
              </div>
              <h4 className="text-lg font-display font-black text-secondary mb-2 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-sm text-text-sub font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

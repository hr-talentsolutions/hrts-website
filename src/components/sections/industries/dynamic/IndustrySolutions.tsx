"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface IndustrySolutionsProps {
  name: string;
  solutions: string[];
}

export const IndustrySolutions = ({ name, solutions }: IndustrySolutionsProps) => {
  return (
    <section className="py-24 bg-secondary text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Approach</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black uppercase tracking-tight">
            Our <span className="text-primary">{name} Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-base lg:text-lg font-bold tracking-tight uppercase">
                {solution}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

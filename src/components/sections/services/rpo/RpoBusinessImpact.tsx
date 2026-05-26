"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Timer, 
  TrendingUp, 
  Settings, 
  BadgeDollarSign, 
  BarChart 
} from "lucide-react";

const IMPACTS = [
  { icon: Timer, title: "Faster Hiring Cycles", desc: "Drastic reduction in lead time for filling key positions." },
  { icon: TrendingUp, title: "Workforce Planning", desc: "Better visibility into future talent needs and gaps." },
  { icon: Settings, title: "Hiring Efficiency", desc: "Streamlined processes that minimize friction and drop-offs." },
  { icon: BadgeDollarSign, title: "Reduced Costs", desc: "Optimizing recruitment spend through structured models." },
  { icon: BarChart, title: "Data-Driven Decisions", desc: "Using analytics to refine and improve hiring strategies." }
];

export const RpoBusinessImpact = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Result</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Business <span className="text-secondary">Impact</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {IMPACTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-orange-50/50 p-10 rounded-[40px] border border-primary/5 hover:bg-white hover:shadow-premium transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 group-hover:bg-secondary transition-colors duration-500 shadow-lg shadow-primary/20 group-hover:shadow-secondary/20">
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-display font-black text-secondary mb-3 uppercase tracking-tight">
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

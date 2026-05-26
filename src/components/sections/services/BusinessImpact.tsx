"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, DollarSign, Settings2, ShieldAlert, Heart } from "lucide-react";

const IMPACTS = [
  { icon: Zap, title: "Operational Efficiency", desc: "Improved throughput and faster decision making." },
  { icon: DollarSign, title: "Cost Optimization", desc: "Significant reduction in overheads and hiring costs." },
  { icon: Settings2, title: "Workforce Control", desc: "Better visibility and strategic management models." },
  { icon: ShieldAlert, title: "Reduced Risk", desc: "Minimizing legal and statutory compliance pitfalls." },
  { icon: Heart, title: "Employee Experience", desc: "Enhanced engagement through structured life-cycle mgmt." }
];

export const BusinessImpact = () => {
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-orange-50/50 p-10 rounded-[40px] border border-primary/5 hover:bg-white hover:shadow-premium transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
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

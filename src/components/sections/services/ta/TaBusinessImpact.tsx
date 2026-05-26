"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Timer, 
  Settings2, 
  UserSquare, 
  TrendingUp 
} from "lucide-react";

const IMPACTS = [
  { icon: CheckCircle2, title: "Improved quality of hires", desc: "Access to top-tier talent that perfectly aligns with your culture." },
  { icon: Timer, title: "Reduced time-to-hire", desc: "Streamlined sourcing and vetting cycles for critical roles." },
  { icon: Settings2, title: "Better workforce planning", desc: "Strategic talent pipelines for long-term organizational success." },
  { icon: UserSquare, title: "Increased employee retention", desc: "Hiring right the first time leads to higher employee longevity." },
  { icon: TrendingUp, title: "Enhanced hiring efficiency", desc: "Data-driven optimization of the entire recruitment funnel." }
];

export const TaBusinessImpact = () => {
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-primary/5 p-10 rounded-[40px] border border-primary/10 hover:bg-white hover:shadow-premium transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-8 group-hover:bg-secondary transition-colors duration-500">
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

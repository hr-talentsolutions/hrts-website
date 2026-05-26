"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Smile, 
  ShieldAlert, 
  Timer, 
  Wallet 
} from "lucide-react";

const IMPACTS = [
  { icon: AlertTriangle, title: "Reduced payroll errors", desc: "Technology-driven processing ensures 100% accuracy in salary calculations." },
  { icon: Smile, title: "Improved employee satisfaction", desc: "Timely and accurate payments boost workforce morale and trust." },
  { icon: ShieldAlert, title: "Compliance risk mitigation", desc: "Staying ahead of regulatory changes to avoid penalties and legal issues." },
  { icon: Timer, title: "Faster payroll cycles", desc: "Streamlined workflows reduce processing time and administrative overhead." },
  { icon: Wallet, title: "Better financial control", desc: "Detailed reporting and variance audits for enhanced fiscal oversight." }
];

export const PayrollBusinessImpact = () => {
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

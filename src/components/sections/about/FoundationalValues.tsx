"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Scale, 
  Zap, 
  Layers, 
  Cpu, 
  UserCheck, 
  Eye, 
  Lightbulb 
} from "lucide-react";

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honesty and strong moral principles in every interaction." },
  { icon: Scale, title: "Compliance", desc: "Strict adherence to legal and regulatory standards." },
  { icon: Zap, title: "Reliability", desc: "Consistent performance you can depend on every time." },
  { icon: Layers, title: "Scalability", desc: "Flexible solutions that grow with your business needs." },
  { icon: Cpu, title: "Technology-Driven", desc: "Leveraging cutting-edge tools for HR efficiency." },
  { icon: UserCheck, title: "Client-Centric", desc: "Your goals are the heartbeat of our strategy." },
  { icon: Eye, title: "Transparency", desc: "Open communication and clear processes at all levels." },
  { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving to provide smarter HR solutions." }
];

export const FoundationalValues = () => {
  return (
    <section className="py-24 bg-orange-50/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our DNA</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Vision & <span className="text-secondary">Core Values</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <value.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-text-sub leading-relaxed font-medium">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

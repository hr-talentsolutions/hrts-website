"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Gavel, 
  Handshake, 
  TrendingUp, 
  Cpu, 
  Heart, 
  Eye, 
  Lightbulb 
} from "lucide-react";

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", desc: "Upholding the highest moral and ethical standards." },
  { icon: Gavel, title: "Compliance", desc: "Strict adherence to all regulatory and legal frameworks." },
  { icon: Handshake, title: "Reliability", desc: "Consistent performance you can depend on." },
  { icon: TrendingUp, title: "Scalability", desc: "Solutions that grow with your business needs." },
  { icon: Cpu, title: "Technology-Driven", desc: "Leveraging innovation for efficient workforce management." },
  { icon: Heart, title: "Client-Centric", desc: "Putting our clients' success at the heart of everything." },
  { icon: Eye, title: "Transparency", desc: "Open and honest communication in all our partnerships." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our practices to stay ahead." }
];

export const AboutValues = () => {
  return (
    <section className="py-24 bg-[#FFF8EC] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Core Principles</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-secondary uppercase tracking-tight">
            Our Vision & <span className="text-primary">Values</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-[40px] border border-secondary/10 group hover:bg-secondary transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <value.icon size={28} />
              </div>
              <h4 className="text-xl font-display font-black text-secondary mb-2 uppercase tracking-tight group-hover:text-white transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-text-sub font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

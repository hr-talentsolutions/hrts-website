"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  History, 
  ShieldCheck, 
  Users2, 
  Timer, 
  Scaling 
} from "lucide-react";

const REASONS = [
  { icon: History, title: "Deep industry expertise", desc: "Years of experience supporting major BFSI institutions." },
  { icon: ShieldCheck, title: "Strong compliance framework", desc: "Rigorous adherence to statutory and regulatory standards." },
  { icon: Users2, title: "Large and diverse talent pool", desc: "Access to a vast network of pre-vetted financial professionals." },
  { icon: Timer, title: "Faster hiring turnaround", desc: "Agile recruitment processes to meet urgent business needs." },
  { icon: Scaling, title: "Scalable workforce solutions", desc: "Flexible staffing that grows with your organization." }
];

export const BfsiWhyChoose = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Why Us</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Why <span className="text-secondary">HR Talent Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-5 p-10 rounded-[40px] bg-secondary/5 border border-secondary/10 group hover:bg-secondary transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-display font-black text-secondary mb-2 uppercase tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-text-sub font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

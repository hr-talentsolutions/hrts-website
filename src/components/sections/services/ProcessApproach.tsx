"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Requirement Analysis", desc: "In-depth study of your workforce needs." },
  { title: "Sourcing & Screening", desc: "Rigorous vetting of top-tier talent." },
  { title: "Selection & Onboarding", desc: "Seamless integration into your teams." },
  { title: "Workforce Management", desc: "Day-to-day operations and lifecycle mgmt." },
  { title: "Payroll & Compliance", desc: "100% accurate and legal processing." },
  { title: "Continuous Support", desc: "Ongoing optimization and feedback loops." }
];

export const ProcessApproach = () => {
  return (
    <section className="py-24 bg-secondary text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Methodology</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black uppercase tracking-tight">
            Our <span className="text-primary">Approach</span>
          </h3>
        </div>

        <div className="relative mt-20">
          {/* Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-white/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-16 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Connector Point */}
                <div className="hidden lg:block absolute -top-2 left-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(249,159,28,0.5)] group-hover:scale-150 transition-transform" />
                
                <div className="pt-8 lg:pt-10">
                  <span className="text-3xl lg:text-4xl text-primary font-black opacity-20 block mb-4 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <h4 className="text-base lg:text-lg font-bold mb-3 uppercase tracking-tight group-hover:text-primary transition-colors min-h-[3rem] lg:min-h-0">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Connector */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-0 bottom-[-30px] w-0.5 h-10 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

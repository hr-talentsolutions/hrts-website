"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Data Collection & Validation", desc: "Gathering and verifying attendance and salary inputs." },
  { title: "Pre-Salary Checks", desc: "Rigorous validation of all variables before processing." },
  { title: "Payroll Processing", desc: "Executing complex calculations with precision." },
  { title: "Approval Workflow", desc: "Multi-level verification and sign-off process." },
  { title: "Salary Disbursement", desc: "Generating bank files and ensuring timely payment." },
  { title: "Reporting & Compliance", desc: "Full statutory reporting and regulatory filings." }
];

export const PayrollProcess = () => {
  return (
    <section className="py-24 bg-secondary text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Methodology</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black uppercase tracking-tight">
            Our Payroll <span className="text-primary">Approach</span>
          </h3>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[40px] left-0 h-0.5 bg-primary/30 z-0" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-16 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-secondary border-2 border-white/10 flex items-center justify-center text-primary font-display font-black text-2xl lg:text-3xl mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-xl group-hover:shadow-primary/20 relative z-10">
                  {i + 1}
                </div>
                
                <h4 className="text-base lg:text-lg font-bold mb-3 uppercase tracking-tight group-hover:text-primary transition-colors min-h-[3rem] lg:min-h-0">
                  {step.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed font-medium">
                  {step.desc}
                </p>

                {/* Mobile Connector */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden w-0.5 h-10 bg-primary/20 my-4 lg:ml-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

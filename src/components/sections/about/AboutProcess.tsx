"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Consultation", desc: "Understanding your requirements and organizational culture." },
  { title: "Strategy", desc: "Developing a tailored recruitment and talent management plan." },
  { title: "Execution", desc: "Sourcing, vetting, and deploying the right talent efficiently." },
  { title: "Delivery", desc: "Ensuring seamless integration and measurable business impact." }
];

export const AboutProcess = () => {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Model</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-secondary uppercase tracking-tight">
            Client Engagement <span className="text-primary">Journey</span>
          </h3>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-0.5 bg-secondary/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-secondary/10 flex items-center justify-center text-secondary font-display font-black text-3xl mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-secondary/20 relative z-10">
                  {i + 1}
                </div>
                
                <h4 className="text-xl font-display font-black text-secondary mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-text-sub font-medium leading-relaxed">
                  {step.desc}
                </p>

                {/* Mobile Connector */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-secondary/10 my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

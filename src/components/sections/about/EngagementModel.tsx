"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Settings, Play, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    title: "Consultation",
    desc: "Understanding your unique business challenges and talent requirements.",
    icon: MessageSquare,
    color: "bg-orange-500"
  },
  {
    title: "Strategy",
    desc: "Developing a tailored HR roadmap with clear objectives and timelines.",
    icon: Settings,
    color: "bg-secondary"
  },
  {
    title: "Execution",
    desc: "Deploying our expertise and resources to fulfill the defined strategy.",
    icon: Play,
    color: "bg-accent"
  },
  {
    title: "Delivery",
    desc: "Ensuring successful outcomes with measurable business impact.",
    icon: CheckCircle2,
    color: "bg-primary"
  }
];

export const EngagementModel = () => {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">How We Partner</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Client Engagement <span className="text-secondary">Model</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary/10 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white ${step.color} shadow-lg mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  <step.icon size={32} />
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-secondary shadow-md flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>

                <h4 className="text-xl font-display font-black text-secondary mb-3 uppercase tracking-tight">
                  {step.title}
                </h4>
                <p className="text-base text-text-sub font-medium leading-relaxed max-w-xs">
                  {step.desc}
                </p>

                {/* Mobile Connector */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-secondary/10 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

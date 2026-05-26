"use client";

import React from "react";
import { motion } from "framer-motion";

const CLIENT_NAMES = [
  "Novartis", "HSBC", "Tata Projects", "Sandoz", "Adani", "Inox Solar", 
  "Vishakha Renewables", "Buildcast", "Luminous", "Future Solar", 
  "Fermionics", "RenewSys", "Kaira (The Natural Today)", "Robert Walters", 
  "Swathi (Pre-Engineered Buildings)", "Goldi Solar", 
  "NCBS (National Centre for Biological Sciences)", "Granules", 
  "Gland Pharma Limited", "Ratnadeep", "PwC (PricewaterhouseCoopers)", 
  "Pfizer", "Gandour", "Paradise", "Blue Star", "Midwest Limited"
];

export const ClientStrip = () => {
  // Triple the list to ensure seamless infinite scroll
  const items = [...CLIENT_NAMES, ...CLIENT_NAMES, ...CLIENT_NAMES];
  
  // Animation duration based on total length for steady speed
  const duration = CLIENT_NAMES.length * 2.5;

  return (
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16 bg-white border-y border-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-[0.2em] uppercase mb-4 opacity-70">
          Trusted by Growing Businesses & Global Enterprises
        </h2>
        <div className="w-16 h-0.5 bg-primary/20 mx-auto rounded-full" />
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
          className="flex flex-nowrap gap-12 lg:gap-24 items-center whitespace-nowrap"
        >
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-12 lg:gap-24"
            >
              <span className="text-xl lg:text-2xl font-display font-semibold text-primary/40 hover:text-secondary hover:scale-105 transition-all duration-500 cursor-default select-none tracking-tight">
                {name}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent/20" />
            </div>
          ))}
        </motion.div>
        
        {/* Gradients for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

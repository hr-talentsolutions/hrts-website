"use client";

import React from "react";
import { motion } from "framer-motion";
import { ICON_MAP } from "@/lib/icon-mapper";

interface IndustryHeroProps {
  name: string;
  description: string;
  iconName: string;
}

export const IndustryHero = ({ name, description, iconName }: IndustryHeroProps) => {
  const Icon = ICON_MAP[iconName as keyof typeof ICON_MAP];
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.03] -skew-x-12 translate-x-1/4 -z-10" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-black text-secondary mb-6 leading-tight tracking-tight uppercase">
              {name} <br />
              <span className="text-primary">Industry Solutions</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-text-sub font-bold leading-relaxed mb-8 border-l-4 border-primary pl-6 uppercase tracking-tight">
              Specialized workforce solutions tailored for the {name} sector.
            </p>
            
            <div className="space-y-6 text-base text-text-sub font-medium leading-relaxed opacity-90">
              <p>{description}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[48px] aspect-[4/3] bg-primary/5 border-2 border-primary/10 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Icon size={160} className="text-primary opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
              
              {/* Abstract elements */}
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-secondary/20 rounded-[40px] rotate-12" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

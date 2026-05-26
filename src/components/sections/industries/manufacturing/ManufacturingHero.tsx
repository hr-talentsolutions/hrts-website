"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Settings } from "lucide-react";

export const ManufacturingHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.03] -skew-x-12 translate-x-1/4 -z-10" />
      
      {/* Industrial Motion Graphics */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-10 text-primary/10 -z-10"
      >
        <Settings size={120} />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-80 left-24 text-secondary/5 -z-10"
      >
        <Settings size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-black text-secondary mb-6 leading-tight tracking-tight uppercase">
              Manufacturing <br />
              <span className="text-primary">Industry Solutions</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-text-sub font-bold leading-relaxed mb-8 border-l-4 border-primary pl-6 uppercase tracking-tight">
              Driving operational excellence in manufacturing with skilled workforce solutions and scalable support.
            </p>
            
            <div className="space-y-6 text-base text-text-sub font-medium leading-relaxed opacity-90">
              <p>
                The manufacturing industry operates in a highly dynamic and efficiency-driven environment where productivity, precision, and workforce reliability are critical. HR Talent Solutions provides end-to-end workforce solutions tailored to manufacturing organizations, helping them optimize operations, manage large-scale manpower, and maintain consistent productivity across facilities.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-2 border-primary/10">
              <Image 
                src="/images/industries/manufacturing.png" 
                alt="Manufacturing Industry Solutions" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-[60px] rotate-12 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

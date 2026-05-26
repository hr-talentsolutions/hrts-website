"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const BfsiHero = () => {
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
              BFSI Industry <br />
              <span className="text-primary">Solutions</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-text-sub font-bold leading-relaxed mb-8 border-l-4 border-primary pl-6 uppercase tracking-tight">
              Empowering the BFSI sector with scalable, compliant, and high-performance workforce solutions.
            </p>
            
            <div className="space-y-6 text-base text-text-sub font-medium leading-relaxed opacity-90">
              <p>
                The BFSI sector demands precision, compliance, and agility. HR Talent Solutions delivers specialized workforce solutions tailored to banking, financial services, and insurance organizations—ensuring regulatory adherence, operational efficiency, and access to high-quality talent.
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
                src="/images/industries/bfsi.png" 
                alt="BFSI Industry Solutions" 
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

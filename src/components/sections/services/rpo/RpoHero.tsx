"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const RpoHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/[0.03] skew-x-12 -translate-x-1/4 -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-black text-secondary mb-6 leading-tight tracking-tight uppercase">
              Recruitment Process <br />
              <span className="text-primary">Outsourcing (RPO)</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-text-sub font-bold leading-relaxed mb-8 border-l-4 border-primary pl-6 uppercase tracking-tight">
              A strategic hiring solution delegate part or all of your recruitment processes to expert partners.
            </p>
            
            <div className="space-y-6 text-base text-text-sub font-medium leading-relaxed opacity-90">
              <p>
                Recruitment Process Outsourcing (RPO) is a strategic hiring solution where organizations delegate part or all of their recruitment processes to expert partners. At HR Talent Solutions, we deliver scalable, data-driven hiring solutions that enhance talent quality and reduce time-to-hire.
              </p>
              <p>
                Our RPO model integrates seamlessly with your organization, acting as an extension of your HR team. From sourcing and screening to onboarding and analytics, we bring structured processes and advanced technology to build a high-performing workforce.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-orange-50">
               <Image 
                src="/hr-illustration-final.png" 
                alt="RPO Services" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-[60px] -rotate-12 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

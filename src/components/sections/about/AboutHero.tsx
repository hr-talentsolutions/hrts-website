"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-[#FFF8EC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-black text-secondary mb-8 leading-tight tracking-tight uppercase">
              Innovating with a <br />
              <span className="text-primary italic">Positive Mindset</span>
            </h1>
            
            <div className="space-y-6 text-base lg:text-lg text-text-sub font-medium leading-relaxed">
              <p>
                <span className="text-secondary font-bold">HR Talent Solutions</span> is a rapidly growing Recruitment Solutions and Talent Management company, serving a diverse clientele ranging from Fortune 500 corporations to small and mid-sized businesses across India and globally.
              </p>
              <p>
                Headquartered in Hyderabad, India, with a strong service presence nationwide, we are driven by our core philosophy: <span className="text-secondary font-bold">"Making a mark wherever we serve."</span> Our goal is to be recognized as a trusted and outstanding service provider by transforming knowledge into measurable value—for our clients, our people, and the business ecosystem as a whole.
              </p>
              <p>
                We function as an extension of our clients' teams, partnering closely at every stage to deliver impactful results. Our approach is defined by transparency, integrity, simplicity, and strong professional expertise—enabling faster execution and consistent delivery that exceeds expectations.
              </p>
              <p>
                We are committed to long-term partnerships and continuously evolving our practices to stay ahead of industry trends, ensuring our clients realize their full potential.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-2 border-secondary/10">
              <Image 
                src="/images/about/hero.png" 
                alt="About HR Talent Solutions" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/5 rounded-[60px] rotate-12 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

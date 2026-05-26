"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[64px] bg-secondary p-12 lg:p-24 text-center">
          {/* Background with Brand Colors */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px] animate-pulse delay-1000" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-4xl font-display font-black text-white mb-6 leading-tight tracking-tight uppercase">
                Ready to Scale Your <br />
                <span className="text-primary italic">Workforce with Confidence?</span>
              </h2>
              
              <p className="text-base lg:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Partner with the industry leaders in HR solutions. From talent sourcing to statutory compliance, we provide the foundation for your business success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-full text-base shadow-xl shadow-primary/40 group transition-all duration-300 hover:scale-105 active:scale-95">
                  Hire Talent
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 h-12 px-8 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95">
                  Talk to Experts
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


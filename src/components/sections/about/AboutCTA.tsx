"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[64px] bg-secondary p-12 lg:p-24 text-center">
          {/* Background patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] animate-pulse delay-1000" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-display font-black text-white mb-10 leading-tight tracking-tight uppercase"
            >
              Ready to build a <br />
              <span className="text-primary italic">high-performing workforce?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full text-base shadow-xl shadow-primary/40 group transition-all duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 h-14 px-10 rounded-full text-base font-bold transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

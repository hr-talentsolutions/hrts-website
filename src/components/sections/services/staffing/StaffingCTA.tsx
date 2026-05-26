"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const StaffingCTA = () => {
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
              <h2 className="text-2xl lg:text-4xl font-display font-black text-white mb-10 leading-tight tracking-tight uppercase">
                Looking to build a flexible and <br />
                <span className="text-primary italic">high-performing workforce?</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-full text-base shadow-xl shadow-primary/40 group transition-all duration-300 hover:scale-105 active:scale-95">
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 h-12 px-8 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

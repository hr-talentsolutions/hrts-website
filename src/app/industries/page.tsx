"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/data/industries";
import { ChevronRight } from "lucide-react";
import { ICON_MAP } from "@/lib/icon-mapper";

export default function IndustriesListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Market Expertise</h2>
            <h1 className="text-4xl lg:text-6xl font-display font-black text-secondary uppercase tracking-tight mb-6">
              Industries <span className="text-primary">We Support</span>
            </h1>
            <p className="text-lg text-text-sub max-w-2xl mx-auto font-medium">
              We provide specialized workforce solutions across a wide range of sectors, ensuring compliance, quality, and operational excellence in every industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry, i) => {
              const Icon = ICON_MAP[industry.iconName as keyof typeof ICON_MAP];
              
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="h-full bg-white p-10 rounded-[48px] border border-primary/10 shadow-premium group-hover:border-primary/30 group-hover:shadow-premium-hover transition-all duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {Icon && <Icon size={32} />}
                      </div>
                    
                    <h3 className="text-2xl font-display font-black text-secondary mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    
                    <p className="text-sm text-text-sub font-medium leading-relaxed mb-8">
                      {industry.shortDesc}
                    </p>
                    
                    <div className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                      View Solutions
                      <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

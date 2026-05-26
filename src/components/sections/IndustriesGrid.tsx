"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Cpu, 
  Stethoscope, 
  ShoppingBag, 
  Plane, 
  Truck, 
  Globe, 
  Smartphone,
  ChevronRight
} from "lucide-react";

const INDUSTRIES = [
  { icon: Building2, name: "BFSI", desc: "Banking, Financial Services & Insurance" },
  { icon: Smartphone, name: "Technology", desc: "SaaS, IT & Digital Infrastructure" },
  { icon: Stethoscope, name: "Healthcare", desc: "Pharma, Biotech & Medical Services" },
  { icon: Cpu, name: "Manufacturing", desc: "Automotive, Industrial & Engineering" },
  { icon: ShoppingBag, name: "E-commerce", desc: "Retail, Marketplace & Consumer Tech" },
  { icon: Truck, name: "Logistics", desc: "Supply Chain, Warehousing & Cargo" },
  { icon: Smartphone, name: "Telecom", desc: "5G, Networking & Communication" },
  { icon: Globe, name: "FMCG", desc: "Consumer Goods & Distribution" }
];

export const IndustriesGrid = () => {
  return (
    <section id="industries" className="py-24 bg-[#FFFAF3] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Specialization</h2>
          <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 tracking-tight uppercase">Industries We <span className="text-secondary">Power with Talent</span></h3>
          <p className="text-base lg:text-lg text-text-sub max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            Delivering niche-specific staffing and workforce management across India's fastest-growing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(46, 49, 146, 0.1)",
                }}
                className="group p-8 rounded-[32px] bg-white border border-primary/5 hover:border-secondary/20 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col items-center text-center shadow-sm"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-secondary/5 rounded-full group-hover:scale-[3] transition-transform duration-700" />
                
                <div className="w-16 h-16 rounded-[24px] bg-primary/5 flex items-center justify-center text-primary mb-6 transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_20px_40px_rgba(249,159,28,0.4)] relative z-10 border border-primary/10">
                  <Icon size={32} />
                </div>
                
                <h4 className="text-base font-black text-secondary mb-1.5 relative z-10 group-hover:text-primary transition-colors tracking-tight">
                  {industry.name}
                </h4>
                
                <p className="text-text-sub text-base relative z-10 mb-6 h-12 group-hover:text-text-main transition-colors font-medium opacity-90 leading-tight">
                  {industry.desc}
                </p>
                
                <div className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 relative z-10">
                  Hire Now <ChevronRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

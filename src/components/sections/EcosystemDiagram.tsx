"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, UserCheck, GraduationCap, Gavel, Globe } from "lucide-react";

const NODES = [
  { id: "job", icon: Search, label: "Job Portal", x: 20, y: 20 },
  { id: "employer", icon: UserCheck, label: "Employer Portal", x: 80, y: 20 },
  { id: "edtech", icon: GraduationCap, label: "EdTech Platform", x: 20, y: 80 },
  { id: "regtech", icon: Gavel, label: "RegTech Platform", x: 80, y: 80 },
];

export const EcosystemDiagram = () => {
  return (
    <section id="platforms" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Blue for section tag (~10% weight) */}
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Technology</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">Platforms Ecosystem</h3>
          <p className="text-text-sub max-w-2xl mx-auto text-lg leading-relaxed">
            A fully integrated technology stack that connects job seekers, employers, and educational institutions in one seamless environment.
          </p>
        </div>

        <div className="relative h-[500px] md:h-[600px] max-w-4xl mx-auto border border-primary/10 rounded-[40px] bg-background shadow-inner flex items-center justify-center p-8">
          {/* SVG Connections Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Center to Nodes - Primary Orange */}
            <motion.line 
              x1="50" y1="50" x2="20" y2="20" 
              stroke="currentColor" strokeWidth="0.5" className="text-primary" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} 
            />
            <motion.line 
              x1="50" y1="50" x2="80" y2="20" 
              stroke="currentColor" strokeWidth="0.5" className="text-primary" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.1 }} 
            />
            <motion.line 
              x1="50" y1="50" x2="20" y2="80" 
              stroke="currentColor" strokeWidth="0.5" className="text-primary" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} 
            />
            <motion.line 
              x1="50" y1="50" x2="80" y2="80" 
              stroke="currentColor" strokeWidth="0.5" className="text-primary" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} 
            />
            
            {/* Circumference connections - Secondary Blue (~10% weight) */}
            <motion.path 
              d="M 20 20 L 80 20 L 80 80 L 20 80 Z" 
              fill="none" stroke="currentColor" strokeWidth="0.3" className="text-secondary" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} 
            />
          </svg>

          {/* Central Core Node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute z-20 w-32 h-32 md:w-40 md:h-40 glass rounded-full flex flex-col items-center justify-center shadow-2xl border-2 border-primary/20"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-2 shadow-lg shadow-primary/30">
              <Globe className="rotate-12" size={32} />
            </div>
            <span className="text-[10px] md:text-sm font-bold text-primary uppercase tracking-tighter">Core Ecosystem</span>
          </motion.div>

          {/* Platform Nodes */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: `${node.x}%`, y: `${node.y}%` }}
              transition={{ delay: i * 0.1 + 0.5, type: "spring", stiffness: 50 }}
              style={{
                left: `calc(${node.x}% - 60px)`,
                top: `calc(${node.y}% - 60px)`,
                position: "absolute",
              }}
              className="z-20 w-24 h-24 md:w-32 md:h-32 glass rounded-3xl p-4 flex flex-col items-center justify-center text-center shadow-premium hover:shadow-premium-hover border border-primary/5 hover:border-accent/40 transition-all cursor-pointer group"
            >
              {/* Red Micro-dot (~3% weight) */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                <node.icon size={28} />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-primary leading-tight px-1">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

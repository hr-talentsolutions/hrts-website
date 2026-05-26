"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { label: "Branches", value: 5, suffix: "+" },
  { label: "Operating Locations", value: 80, suffix: "+" },
  { label: "Direct Employees", value: 70, suffix: "+" },
  { label: "Associates", value: 2000, suffix: "+" },
  { label: "Placements", value: 100000, suffix: "+", format: true }
];

const Counter = ({ value, suffix, format }: { value: number; suffix: string; format?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formattedValue = format ? count.toLocaleString('en-IN') : count;

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-display font-black text-white">
      {formattedValue}{suffix}
    </span>
  );
};

export const AboutStats = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Motion lines background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5
            }}
            className="absolute h-px w-full bg-white"
            style={{ top: `${(i + 1) * 15}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Company Snapshot</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black uppercase tracking-tight">
            Our <span className="text-primary">Reach & Impact</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <Counter value={stat.value} suffix={stat.suffix} format={stat.format} />
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-primary/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

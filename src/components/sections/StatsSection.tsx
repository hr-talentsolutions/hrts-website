"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, Briefcase, Building2, Heart } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const displayValue = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const STATS = [
  {
    icon: Briefcase,
    value: 18,
    suffix: "+",
    label: "Years Industry Expertise",
    description: "Nearly two decades of excellence in recruitment and HR solutions."
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Companies Served",
    description: "Empowering businesses across India with elite workforce strategies."
  },
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Candidates Placed",
    description: "Successfully connected professionals with leading enterprises."
  }
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-[20px] bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm border border-primary/10 group-hover:shadow-[0_20px_40px_rgba(249,159,28,0.3)]">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-display font-black text-secondary mb-2 leading-none tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                
                <p className="text-sm lg:text-base font-bold text-text-main mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {stat.label}
                </p>
                
                <div className="w-8 h-0.5 bg-primary/30 rounded-full mb-3 group-hover:w-12 transition-all duration-700" />
                
                <p className="text-text-sub text-xs leading-relaxed max-w-[200px] font-medium opacity-85">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

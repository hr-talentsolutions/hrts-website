"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { MapPin, Building, Users2, UserPlus, Trophy } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => {
    const val = Math.floor(current);
    if (val >= 1000) {
      return (val / 1000).toFixed(val >= 100000 ? 1 : 0) + "k";
    }
    return val.toLocaleString();
  });

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
    icon: Building,
    value: 5,
    suffix: "+",
    label: "Branches",
  },
  {
    icon: MapPin,
    value: 80,
    suffix: "+",
    label: "Operating Locations",
  },
  {
    icon: Users2,
    value: 70,
    suffix: "+",
    label: "Direct Employees",
  },
  {
    icon: UserPlus,
    value: 2000,
    suffix: "+",
    label: "Associates",
  },
  {
    icon: Trophy,
    value: 100000,
    suffix: "+",
    label: "Placements",
  }
];

export const CompanySnapshot = () => {
  return (
    <section className="py-24 bg-secondary text-white overflow-hidden relative">
      {/* Decorative pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Scale</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black uppercase tracking-tight">
            Company <span className="text-primary">Snapshot</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <stat.icon size={24} />
              </div>
              
              <h4 className="text-3xl lg:text-4xl font-display font-black text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>
              
              <p className="text-xs lg:text-sm font-bold text-primary/80 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

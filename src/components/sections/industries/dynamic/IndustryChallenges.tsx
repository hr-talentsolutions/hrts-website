"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertTriangle, Zap, Target, Search, Users } from "lucide-react";

interface Challenge {
  title: string;
  desc: string;
}

interface IndustryChallengesProps {
  name: string;
  challenges: Challenge[];
}

const ICONS = [ShieldAlert, AlertTriangle, Zap, Target, Search, Users];

export const IndustryChallenges = ({ name, challenges }: IndustryChallengesProps) => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Landscape</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Key Challenges in <span className="text-secondary">{name}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-premium hover:border-secondary/20 hover:shadow-premium-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon size={28} className="group-hover:rotate-6 transition-transform" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {challenge.title}
                </h4>
                <p className="text-sm text-text-sub font-medium leading-relaxed">
                  {challenge.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

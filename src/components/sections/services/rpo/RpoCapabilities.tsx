"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users2, 
  Search, 
  Share2, 
  Globe, 
  BrainCircuit, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Users2,
    title: "HR Team Extension",
    desc: "We integrate directly into your HR function, ensuring alignment with your culture and goals."
  },
  {
    icon: Search,
    title: "Comprehensive TA",
    desc: "End-to-end recruitment covering sourcing, screening, interviewing, and onboarding."
  },
  {
    icon: Share2,
    title: "Multi-Channel Sourcing",
    desc: "Leveraging job portals, social platforms, and databases to attract top talent."
  },
  {
    icon: Globe,
    title: "Pan-India & Global Reach",
    desc: "Access to diverse talent pools across regions and international markets."
  },
  {
    icon: BrainCircuit,
    title: "Candidate Intelligence",
    desc: "Data-driven insights for better hiring decisions and talent mapping."
  },
  {
    icon: Zap,
    title: "Real-Time Insights",
    desc: "Advanced analytics and reporting for transparency and faster decision-making."
  },
  {
    icon: ShieldCheck,
    title: "Governance & Compliance",
    desc: "Ensuring all hiring practices meet legal, regulatory, and organizational standards."
  }
];

export const RpoCapabilities = () => {
  return (
    <section className="py-24 bg-orange-50/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Core RPO <span className="text-secondary">Capabilities</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CAPABILITIES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-sub leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

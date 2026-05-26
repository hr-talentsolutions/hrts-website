"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Settings, BarChart3 } from "lucide-react";

const MISSION_ITEMS = [
  { icon: Target, text: "Making a mark wherever we serve" },
  { icon: Users, text: "Talent development initiatives" },
  { icon: Settings, text: "Customized solutions tailored to client needs" },
  { icon: BarChart3, text: "Delivering measurable business impact" }
];

export const AboutTeamVision = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Team</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-black text-secondary uppercase tracking-tight mb-6">
              Rich and Diverse <span className="text-primary">Experience</span>
            </h3>
            <p className="text-lg text-text-sub font-medium leading-relaxed">
              HR Talent Solutions brings together a team with rich and diverse experience across multiple industries. With a combined experience of over 150+ years, our expertise spans India, the USA, UK/Europe, and the Asia-Pacific region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-[#FFF8EC] p-10 lg:p-12 rounded-[48px] border border-primary/20 relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-6">Vision</h2>
              <p className="text-2xl lg:text-3xl font-display font-black text-secondary italic leading-tight">
                "What we do alone is work, but what we do together is an achievement."
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Mission</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-black text-secondary uppercase tracking-tight">
              Our <span className="text-primary">Purpose</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSION_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[32px] border border-secondary/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FFF8EC] flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <item.icon size={32} />
                </div>
                <p className="text-base font-bold text-secondary uppercase tracking-tight leading-snug">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

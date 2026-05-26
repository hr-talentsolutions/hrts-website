"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users, HeartHandshake } from "lucide-react";

const MISSION_POINTS = [
  {
    icon: Target,
    title: "Making a Mark",
    description: "Striving to make a significant impact wherever we serve through excellence."
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Nurturing skills and capabilities through dedicated development initiatives."
  },
  {
    icon: HeartHandshake,
    title: "Customized Solutions",
    description: "Tailoring our HR services to meet the specific and unique needs of every client."
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Focusing on delivering tangible, data-driven business resultados consistently."
  }
];

export const AboutVisionMission = () => {
  return (
    <section className="py-24 bg-orange-50/50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Team Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Team</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-black text-primary mb-6 uppercase tracking-tight">
              A Legacy of <span className="text-secondary">Expertise</span>
            </h3>
            <p className="text-lg text-text-sub font-medium leading-relaxed">
              HR Talent Solutions brings together a team with rich and diverse experience across multiple industries. With a combined experience of over 150+ years, our expertise spans India, the USA, UK/Europe, and the Asia-Pacific region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 lg:p-16 rounded-[40px] shadow-premium relative overflow-hidden group border border-primary/5"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] transition-all group-hover:scale-110" />
            <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-6">Our Vision</h4>
            <blockquote className="text-2xl lg:text-3xl font-display font-bold text-secondary italic leading-tight">
              "What we do alone is work, but what we do together is an achievement."
            </blockquote>
          </motion.div>
        </div>

        {/* Mission Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Mission</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Our Core <span className="text-secondary">Commitments</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MISSION_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[32px] shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-primary/5 group"
            >
              <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <point.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {point.title}
              </h4>
              <p className="text-sm text-text-sub leading-relaxed font-medium">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

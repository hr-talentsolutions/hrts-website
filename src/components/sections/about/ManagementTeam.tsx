"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const MANAGEMENT = [
  {
    name: "Narendra Kotti",
    designation: "CEO",
    image: "/images/ceo.jpg", // Placeholder path
    linkedin: "https://linkedin.com"
  },
  {
    name: "KVS Rajani Kant",
    designation: "AVP HR Operations",
    image: "/images/avp.jpg", // Placeholder path
    linkedin: "https://linkedin.com"
  }
];

export const ManagementTeam = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Leadership</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Meet Our <span className="text-secondary">Management</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {MANAGEMENT.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-[40px] p-8 text-center border border-primary/5 shadow-premium hover:shadow-premium-hover transition-all duration-500 group"
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  {/* Using a placeholder if image doesn't exist */}
                  <div className="w-full h-full bg-secondary/5 flex items-center justify-center text-secondary font-display font-black text-4xl">
                    {member.name.charAt(0)}
                  </div>
                  {/* <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  /> */}
                </div>
              </div>

              <h4 className="text-2xl font-display font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h4>
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-6">
                {member.designation}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

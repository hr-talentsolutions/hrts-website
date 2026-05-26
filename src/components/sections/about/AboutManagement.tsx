"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const MANAGEMENT = [
  {
    name: "Narendra Kotti",
    designation: "CEO",
    image: "/images/about/narendra.jpg",
    linkedin: "https://www.linkedin.com/in/narendra-kotti/"
  },
  {
    name: "KVS Rajani Kant",
    designation: "AVP HR Operations",
    image: "/images/about/rajani.jpg",
    linkedin: "https://www.linkedin.com/in/rajani-kant/"
  }
];

export const AboutManagement = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Leadership</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-secondary uppercase tracking-tight">
            Meet Our <span className="text-primary">Management</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {MANAGEMENT.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -15 }}
              className="flex flex-col items-center group w-full sm:w-[320px]"
            >
              <div className="relative mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 p-2 bg-white shadow-premium group-hover:shadow-premium-hover transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image 
                      src={person.image} 
                      alt={person.name} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <motion.a 
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors duration-300 border-2 border-white"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-display font-black text-secondary mb-2 uppercase tracking-tight">
                  {person.name}
                </h4>
                <p className="text-sm font-bold text-text-sub uppercase tracking-widest">
                  {person.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

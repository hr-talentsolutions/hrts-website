"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  Smartphone, 
  CalendarCheck, 
  ShieldCheck, 
  Network 
} from "lucide-react";

const STRENGTHS = [
  {
    icon: Users,
    title: "Payroll Processed for 10,000+ Employees",
    desc: "Proven capability in managing large-scale payroll operations with compliance accuracy."
  },
  {
    icon: UserCheck,
    title: "50+ Satisfied Clients",
    desc: "Strong track record of delivering reliable compliance solutions across industries."
  },
  {
    icon: Smartphone,
    title: "On-the-Go ESS via Mobile Application",
    desc: "Employee self-service platform for easy access to payroll and compliance data."
  },
  {
    icon: CalendarCheck,
    title: "Leave & Attendance Management",
    desc: "Structured systems to manage workforce attendance and leave policies."
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Workforce Compliance Management",
    desc: "Covering sourcing, training, deployment, record maintenance, and statutory adherence."
  },
  {
    icon: Network,
    title: "Mass Recruitment Compliance Support",
    desc: "Ensuring legal and process compliance in large-scale hiring initiatives."
  }
];

export const ComplianceCapabilities = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Strengths</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Our Compliance <span className="text-secondary">Capabilities</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STRENGTHS.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-premium hover:border-secondary/20 hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                  <service.icon size={28} className="group-hover:rotate-6 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-text-sub font-medium leading-relaxed">
                    {service.desc}
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

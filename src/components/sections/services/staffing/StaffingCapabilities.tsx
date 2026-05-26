"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users2, 
  Workflow, 
  Search, 
  Briefcase, 
  CreditCard, 
  Scale,
  Layout,
  Globe
} from "lucide-react";

const SERVICES = [
  {
    icon: Users2,
    title: "Permanent & Temporary Staffing (IT & Non-IT)",
    desc: "Flexible hiring solutions for both long-term roles and short-term workforce needs."
  },
  {
    icon: Layout,
    title: "Administrative, Back-Office & HR Staffing",
    desc: "Skilled professionals for smooth business operations and support functions."
  },
  {
    icon: CreditCard,
    title: "Finance, Accounting & Compliance Staffing",
    desc: "Specialized hiring for financial roles ensuring accuracy and compliance."
  },
  {
    icon: Globe,
    title: "Sales, Marketing & Customer Support Staffing",
    desc: "Talent to drive business growth and enhance customer experience."
  },
  {
    icon: Workflow,
    title: "Software Developers & IT Support Staffing",
    desc: "Technical talent across development, support, and infrastructure roles."
  },
  {
    icon: Briefcase,
    title: "Manufacturing, Production & Supply Chain Staffing",
    desc: "Workforce solutions for operational efficiency in industrial sectors."
  },
  {
    icon: Search,
    title: "Hospitality, Retail, Healthcare & Pharma Staffing",
    desc: "Industry-specific staffing for customer-facing and specialized roles."
  },
  {
    icon: Scale,
    title: "Field Executives, Supervisors & Operations Staffing",
    desc: "On-ground workforce support for operational execution and supervision."
  }
];

export const StaffingCapabilities = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Our Staffing <span className="text-secondary">Capabilities</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
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

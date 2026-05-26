"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  UserPlus, 
  LogOut, 
  BarChart3, 
  Banknote, 
  Receipt, 
  Calculator, 
  CreditCard, 
  Wallet, 
  UserCircle, 
  Briefcase, 
  ShieldCheck 
} from "lucide-react";

const SERVICES = [
  { icon: UserPlus, title: "Recruitment", desc: "End-to-end hiring and talent acquisition strategies." },
  { icon: LogOut, title: "Exit Management", desc: "Smooth and compliant employee offboarding processes." },
  { icon: BarChart3, title: "Performance Appraisal", desc: "Structured evaluation systems to drive productivity." },
  { icon: Banknote, title: "Loan Management", desc: "Digital employee loan tracking and processing support." },
  { icon: Receipt, title: "Reimbursement", desc: "Simplified expense management and claims processing." },
  { icon: Calculator, title: "Income Tax", desc: "Expert tax calculation and compliance advisory support." },
  { icon: CreditCard, title: "Disbursement", desc: "Ensuring timely salary and benefit payouts every time." },
  { icon: Wallet, title: "Payroll", desc: "Accurate payroll processing with detailed reporting." },
  { icon: UserCircle, title: "Orientation Programming", desc: "Structured introduction programs for new culture fit." },
  { icon: Briefcase, title: "Induction & Onboarding", desc: "Seamless integration of new hires into the workforce." },
  { icon: ShieldCheck, title: "Digital KYC", desc: "Secure and compliant digital employee verification." }
];

export const CoreServicesGrid = () => {
  return (
    <section className="py-24 bg-orange-50/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">What We Offer</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Our Core <span className="text-secondary">Services</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <service.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-text-sub leading-relaxed font-medium">
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

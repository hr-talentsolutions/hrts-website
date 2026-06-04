"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users2, 
  Workflow, 
  Search, 
  Briefcase, 
  CreditCard, 
  Scale,
  ArrowRight,
  Cpu
} from "lucide-react";
import { Button } from "../ui/Button";

const SERVICES = [
  {
    icon: Search,
    title: "Talent Acquisition",
    description: "Multi-channel sourcing strategies to secure high-impact professionals across lateral, executive, and campus segments.",
    tags: ["Lateral Hiring", "Executive Search", "Campus Hiring"],
    href: "/services/talent-acquisition"
  },
  {
    icon: Workflow,
    title: "RPO (Recruitment Process Outsourcing)",
    description: "Scalable, SLA-driven recruitment outsourcing to streamline candidate experience and reduce overall cost-per-hire.",
    tags: ["Process Audits", "SLA Based", "Volume Hiring"],
    href: "/services/rpo"
  },
  {
    icon: Briefcase,
    title: "Staffing Solutions",
    description: "Agile contractual and temporary staffing models to support dynamic project demands and seasonal workforce requirements.",
    tags: ["Temp-to-Hire", "General Staffing", "Niche Staffing"],
    href: "/services/staffing"
  },
  {
    icon: Cpu,
    title: "Tech Staffing Solutions",
    description: "Elite IT & digital hiring solutions connecting you with top software developers, cloud engineers, and product experts.",
    tags: ["Software Engineers", "Cloud & DevOps", "Product Managers"],
    href: "/services/tech-staffing"
  },
  {
    icon: CreditCard,
    title: "Payroll Management",
    description: "End-to-end payroll administration ensuring 100% accuracy, timely disbursements, and error-free tax calculations.",
    tags: ["Salary Disbursement", "TDS/Taxation", "Reimbursements"],
    href: "/services/payroll"
  },
  {
    icon: Scale,
    title: "Compliance & Legal Services",
    description: "Expert statutory audit and risk management services covering PF, ESI, Labor Laws, and regulatory filings.",
    tags: ["Statutory Audits", "Labor Law", "Legal Filing"],
    href: "/services/compliance"
  },
  {
    icon: Users2,
    title: "Workforce Management",
    description: "Strategic on-field resource management focused on productivity optimization, attendance tracking, and welfare audits.",
    tags: ["On-site Mgmt", "Productivity Audit", "Employee Welfare"],
    href: "/services/manpower-outsourcing"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-xs lg:text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Expertise</h2>
            <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 leading-tight tracking-tight uppercase">
              Comprehensive HR Solutions for <br className="hidden lg:block" /> <span className="text-secondary">Every Business Need</span>
            </h3>
            <p className="text-base lg:text-lg text-text-sub leading-relaxed font-medium opacity-80">
              Tailored workforce strategies designed to solve complex recruitment, payroll, and compliance challenges for growing enterprises.
            </p>
          </div>
          <Link href="/services/talent-acquisition">
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5 self-center lg:self-auto rounded-full font-bold px-8">
              View All Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 lg:p-10 rounded-[40px] bg-white border border-primary/10 hover:border-secondary/20 hover:shadow-premium-hover transition-all duration-500 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-110" />
                
                <div className="w-14 h-14 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500 border border-secondary/10">
                  <Icon size={28} />
                </div>
                
                <h4 className="text-lg lg:text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-text-sub mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-secondary font-bold group/btn hover:gap-4 transition-all duration-300"
                >
                  Learn more <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

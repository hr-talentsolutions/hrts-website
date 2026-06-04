"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Cloud, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Smartphone, 
  Layout
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Code,
    title: "Software Engineering",
    desc: "Frontend, Backend, and Full Stack engineers fluent in React, Node.js, Python, Java, Go, and Rust."
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    desc: "Experts in cloud architecture (AWS, Azure, GCP), Kubernetes, Docker, and automated CI/CD pipelines."
  },
  {
    icon: Cpu,
    title: "AI, Machine Learning & Data Science",
    desc: "Data scientists, ML engineers, and NLP specialists to build intelligent systems and advanced analytics models."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native iOS (Swift), Android (Kotlin), and cross-platform (Flutter, React Native) developers."
  },
  {
    icon: Database,
    title: "Data Engineering & Databases",
    desc: "Big Data specialists (Spark, Kafka, Hadoop) and Database Administrators (PostgreSQL, MongoDB, Oracle)."
  },
  {
    icon: Layout,
    title: "Product & UI/UX Design",
    desc: "Seasoned Product Managers, Product Owners, and UI/UX designers utilizing Figma, Sketch, and user research."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & DevSecOps",
    desc: "Information security analysts, penetration testers, and compliance experts protecting your core systems."
  },
  {
    icon: Terminal,
    title: "QA & Test Automation",
    desc: "Automation QA engineers skilled in Selenium, Cypress, Playwright, and manual test architects."
  }
];

export const TechStaffingCapabilities = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Technical Focus</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Our Tech Staffing <span className="text-secondary">Capabilities</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CAPABILITIES.map((capability, i) => (
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
                  <capability.icon size={28} className="group-hover:rotate-6 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h4>
                  <p className="text-sm text-text-sub font-medium leading-relaxed">
                    {capability.desc}
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

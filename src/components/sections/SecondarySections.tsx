"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Newspaper, Lightbulb, ExternalLink, TrendingUp, DollarSign, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

const INSIGHTS = [
  { title: "Future of Work Report 2025", category: "Report", icon: FileText },
  { title: "Scaling Staffing in the Digital Age", category: "Case Study", icon: Lightbulb },
  { title: "Compliance Trends in Indian Labor Laws", category: "Insight", icon: Newspaper },
];

export const Insights = () => (
  <section id="resources" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          {/* Blue for section tag (~10% weight) */}
          <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">Latest Thinking</h2>
          <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-2 tracking-tight uppercase leading-[1.1]">Knowledge Hub</h3>
        </div>
        <Button variant="outline" className="hidden md:flex text-primary border-primary hover:bg-primary/5">Browse All Insights</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INSIGHTS.map((item, i) => (
          <div
            key={item.title}
            className="p-8 rounded-3xl bg-background border border-primary/20 hover:border-secondary transition-all cursor-pointer group"
          >
            <div className="text-secondary mb-6"><item.icon size={24} /></div>
            {/* Red for micro-accent (~3% weight) */}
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2 block">{item.category}</span>
            <h4 className="text-xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors line-clamp-2">
              {item.title}
            </h4>
            <div className="flex items-center gap-2 text-sm font-bold text-primary/60 group-hover:text-primary transition-colors">
              Read More <ExternalLink size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Careers = () => (
  <section id="careers" className="py-24 px-6 bg-primary overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        {/* Red for micro-accent (~3% weight) */}
        <h2 className="text-[10px] lg:text-xs font-bold text-accent tracking-widest uppercase mb-4 opacity-100">Join Our Team</h2>
        <h3 className="text-2xl lg:text-4xl font-display font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
          Crafting the Future <br /> of India's Workforce
        </h3>
        <p className="text-white/80 text-base lg:text-lg mb-10 leading-relaxed font-medium">
          Be part of an ecosystem that impacts millions of lives. We're looking for visionaries, problem solvers, and leaders to help us scale.
        </p>
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-white font-bold mb-2">Impact First</h4>
            <p className="text-white/60 text-sm">We build solutions that solve real-world problems.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Growth Culture</h4>
            <p className="text-white/60 text-sm">Every member is empowered to lead and innovate.</p>
          </div>
        </div>
        {/* Secondary Blue for button (~10% weight) */}
        <Button variant="secondary" size="lg" className="shadow-xl shadow-secondary/20 hover:bg-secondary">View Open Positions</Button>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
          <div
            className="w-2/3 h-2/3 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center"
          >
            <div className="w-1/2 h-1/2 bg-secondary/30 rounded-full blur-2xl" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white block">2.4k+</span>
              <span className="text-accent font-bold uppercase tracking-widest">Employees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Investors = () => (
  <section id="investors" className="py-24 px-6 bg-background">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">Financials</h2>
      <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-12 tracking-tight uppercase leading-[1.1]">Investor Relations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: "Annual Revenue", value: "₹2,500 Cr+", icon: DollarSign },
          { label: "Market Growth", value: "24% YoY", icon: TrendingUp },
          { label: "Stock Rating", value: "AAA Stability", icon: Award },
        ].map((stat, i) => (
          <div key={i} className="glass p-10 rounded-3xl bg-white border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center text-primary mb-6">
              <stat.icon size={24} />
            </div>
            <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-text-sub font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
      <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">Financial Reports & Filings</Button>
    </div>
  </section>
);

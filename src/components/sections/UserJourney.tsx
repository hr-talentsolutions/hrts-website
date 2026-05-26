"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, UserCheck, Briefcase, GraduationCap, Building2, Users, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const JOURNEYS = [
  {
    id: "seekers",
    label: "Job Seekers",
    icon: Search,
    steps: [
      { title: "Skill Assessment", desc: "Identify your strengths and gaps with our AI tools.", icon: Search },
      { title: "Upskilling", desc: "Access targeted learning modules for desired roles.", icon: GraduationCap },
      { title: "Application", desc: "Match with top employers using our smart filters.", icon: FileText },
      { title: "Placement", desc: "Get hired and start your professional journey.", icon: Briefcase },
    ],
  },
  {
    id: "employers",
    label: "Employers",
    icon: Building2,
    steps: [
      { title: "Requirement", desc: "Define your workforce needs and skill profiles.", icon: Building2 },
      { title: "Sourcing", desc: "Automated candidate matching from our talent pool.", icon: Users },
      { title: "Onboarding", desc: "Streamlined digital onboarding and payroll setup.", icon: UserCheck },
      { title: "Compliance", desc: "Manage labor laws and documentation effortlessly.", icon: ShieldCheck },
    ],
  },
];

export const UserJourney = () => {
  const [activeTab, setActiveTab] = useState("seekers");
  const currentJourney = JOURNEYS.find((j) => j.id === activeTab) || JOURNEYS[0];

  return (
    <section className="py-24 px-6 bg-[#FFFAF3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Blue for section tag (~10% weight) */}
          <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">The Experience</h2>
          <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 tracking-tight uppercase leading-[1.1]">Your Journey With Us</h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-primary/10 rounded-full border border-primary/20">
            {JOURNEYS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center gap-2 px-8 py-3 rounded-full text-[10px] lg:text-xs font-bold transition-all duration-300 uppercase tracking-wider",
                  activeTab === item.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-text-sub hover:text-primary hover:bg-white/50"
                )}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {currentJourney.steps.map((step, i) => (
              <div
                key={`${activeTab}-${i}`}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  {/* Hover uses Secondary Blue (~10% weight) */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white shadow-premium border border-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 rotate-45 group-hover:rotate-0">
                    <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <step.icon size={28} />
                    </div>
                  </div>
                  {/* Red Badge (~3% weight) */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center border-4 border-[#FFFAF3]">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-primary mb-3 tracking-tight">{step.title}</h4>
                <p className="text-sm lg:text-base text-text-sub max-w-[200px] leading-relaxed opacity-80">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

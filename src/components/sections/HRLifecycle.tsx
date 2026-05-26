"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, UserCheck, Users, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";

const STAGES = [
  {
    id: "sourcing",
    icon: Search,
    title: "Talent Sourcing",
    description: "Multi-channel recruitment strategy to attract top-tier candidates across diverse skill sets and industries.",
    details: ["Global Talent Pools", "Active Sourcing", "Referral Management", "Niche Job Boards"]
  },
  {
    id: "screening",
    icon: Filter,
    title: "Screening & Evaluation",
    description: "Rigorous technical assessments and cultural-fit interviews to ensure high-quality placement outcomes.",
    details: ["Skill Assessments", "Psychometric Profiling", "Background Verification", "Pre-interviews"]
  },
  {
    id: "hiring",
    icon: UserCheck,
    title: "Hiring & Onboarding",
    description: "Seamless hiring experience with digital document management and structured onboarding programs.",
    details: ["Contract Management", "Digital KYC", "Induction Training", "Asset Allocation"]
  },
  {
    id: "management",
    icon: Users,
    title: "Workforce Management",
    description: "End-to-end management of your personnel, focusing on productivity, engagement, and retention.",
    details: ["Attendance Tracking", "Performance Metrics", "Employee Support", "Resource Planning"]
  },
  {
    id: "payroll",
    icon: CreditCard,
    title: "Payroll Processing",
    description: "Error-free payroll administration with guaranteed accuracy and timely salary disbursements.",
    details: ["Tax Compliance", "TDS Filing", "Expense Management", "Payslip Generation"]
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance & Risk Mgmt",
    description: "Strict adherence to statutory requirements and labor laws to mitigate administrative and legal risks.",
    details: ["PF/ESI Compliance", "Audit Support", "Regulatory Filings", "Contractual Safety"]
  }
];

export const HRLifecycle = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-10 lg:py-14 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold text-secondary tracking-widest uppercase mb-2">Our End-to-End HR Process</h2>
          <h3 className="text-xl lg:text-3xl font-display font-black text-primary mb-3 tracking-tight uppercase">
            Streamlined <span className="text-secondary">Workforce Lifecycle</span>
          </h3>
          <p className="text-sm lg:text-base text-text-sub max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            We handle the complexities of hiring, staffing, and compliance so you can focus on building your core business.
          </p>
        </div>

        {/* Tabs Row */}
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-0.5 bg-primary/10 hidden lg:block" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-4 relative z-10">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = activeStage === i;
              return (
                <motion.div
                  key={stage.id}
                  onMouseEnter={() => setActiveStage(i)}
                  className={`cursor-pointer transition-all duration-300 ${isActive ? "scale-105" : "opacity-60 hover:opacity-90"}`}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${isActive ? "bg-secondary text-white shadow-md" : "bg-primary/5 text-primary"} flex items-center justify-center mb-2 transition-all duration-300 relative border border-primary/10`}>
                      <Icon size={18} className="lg:hidden" />
                      <Icon size={20} className="hidden lg:block" />
                      {i < STAGES.length - 1 && (
                        <ArrowRight className="absolute -right-3 lg:-right-5 text-primary/30 hidden md:block" size={14} />
                      )}
                    </div>
                    <h4 className={`text-xs lg:text-sm font-black text-center px-1 h-8 flex items-center justify-center leading-tight tracking-tight ${isActive ? "text-secondary" : "text-text-main"}`}>
                      {stage.title}
                    </h4>
                    <div className={`w-2 h-2 rounded-full border-2 border-white mt-1 ${isActive ? "bg-primary scale-125 shadow-[0_0_8px_rgba(249,159,28,0.5)]" : "bg-primary/20"} transition-all duration-300`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel — compact, always visible */}
        <AnimatePresence mode="wait">
          {(() => {
            const ActiveIcon = STAGES[activeStage].icon;
            return (
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="mt-4 p-5 lg:p-8 rounded-3xl bg-[#FFFAF3] border border-primary/5 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center shadow-md"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3 uppercase tracking-widest">
                    Stage 0{activeStage + 1}
                  </div>
                  <h4 className="text-xl lg:text-2xl font-display font-bold text-secondary mb-3">{STAGES[activeStage].title}</h4>
                  <p className="text-sm lg:text-base text-text-sub mb-5 leading-relaxed font-medium">
                    {STAGES[activeStage].description}
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                    {STAGES[activeStage].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-text-main font-semibold text-sm group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group text-sm">
                    Hire Talent <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg flex items-center justify-center group border border-primary/5 p-8 h-40 lg:h-52">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <ActiveIcon size={80} className="text-primary/10 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-500 relative z-10" />
                  <div className="absolute inset-x-4 bottom-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-primary/10 shadow-lg translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5 italic">Process Goal</p>
                    <p className="text-text-main font-bold text-xs">Actionable {STAGES[activeStage].title.toLowerCase()} for enterprise growth.</p>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
};

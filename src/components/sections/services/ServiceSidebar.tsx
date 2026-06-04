"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Users, 
  Workflow, 
  Search, 
  Briefcase, 
  CreditCard, 
  Scale,
  ChevronRight,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { name: "Manpower Outsourcing", href: "/services/manpower-outsourcing", icon: Users },
  { name: "RPO", href: "/services/rpo", icon: Workflow },
  { name: "Talent Acquisition", href: "/services/talent-acquisition", icon: Search },
  { name: "Staffing Solutions", href: "/services/staffing", icon: Briefcase },
  { name: "Tech Staffing", href: "/services/tech-staffing", icon: Cpu },
  { name: "Payroll Management", href: "/services/payroll", icon: CreditCard },
  { name: "Compliance & Legal", href: "/services/compliance", icon: Scale },
];

export const ServiceSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-32 space-y-8">
      <div className="bg-white rounded-[32px] p-8 border border-primary/10 shadow-premium">
        <h4 className="text-xl font-display font-black text-secondary mb-6 uppercase tracking-tight">
          Our <span className="text-primary">Services</span>
        </h4>
        
        <div className="space-y-3">
          {SERVICES.map((service) => {
            const isActive = pathname === service.href;
            const Icon = service.icon;
            
            return (
              <Link
                key={service.name}
                href={service.href}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group",
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-primary/5 text-text-sub hover:bg-primary/10"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={cn(isActive ? "text-white" : "text-primary")} />
                  <span className="text-sm font-bold uppercase tracking-tight">
                    {service.name}
                  </span>
                </div>
                <ChevronRight 
                  size={16} 
                  className={cn(
                    "transition-transform duration-300",
                    isActive ? "translate-x-0" : "group-hover:translate-x-1"
                  )} 
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-secondary rounded-[32px] p-8 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110" />
        <div className="relative z-10">
          <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tight">
            Need <span className="text-primary">Help?</span>
          </h4>
          <p className="text-sm text-white/70 mb-6 font-medium leading-relaxed">
            Not sure which solution is right for your business? Our experts are here to guide you.
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            Contact Us <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </aside>
  );
};

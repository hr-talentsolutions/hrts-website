"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Cpu, 
  Stethoscope, 
  ShoppingBag, 
  Factory, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  { name: "BFSI", href: "/industries/bfsi", icon: Building2 },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
  { name: "Technology & IT", href: "/industries/technology-it", icon: Cpu },
  { name: "Healthcare & Pharma", href: "/industries/healthcare-pharma", icon: Stethoscope },
  { name: "Telecom", href: "/industries/telecom", icon: Smartphone },
  { name: "E-Commerce", href: "/industries/e-commerce", icon: ShoppingBag },
  { name: "Education", href: "/industries/education", icon: GraduationCap },
  { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain", icon: Truck },
  { name: "Media & Entertainment", href: "/industries/media-entertainment", icon: Film },
  { name: "FMCG / FMCD / Retail", href: "/industries/fmcg-fmcd-retail", icon: Store },
];

export const IndustrySidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-[40px] border border-primary/10 p-8 shadow-premium sticky top-32">
      <h3 className="text-xl font-display font-black text-secondary mb-8 uppercase tracking-tight">
        Other <span className="text-primary">Industries</span>
      </h3>
      
      <div className="flex flex-col gap-3">
        {INDUSTRIES.map((industry) => {
          const isActive = pathname === industry.href;
          
          return (
            <Link
              key={industry.name}
              href={industry.href}
              className={cn(
                "group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border border-transparent",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/30" 
                  : "bg-primary/5 text-secondary hover:bg-white hover:border-primary/20 hover:shadow-md"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                  isActive ? "bg-white/20" : "bg-white"
                )}>
                  <industry.icon size={20} className={isActive ? "text-white" : "text-primary"} />
                </div>
                <span className="font-bold text-sm tracking-tight uppercase">
                  {industry.name}
                </span>
              </div>
              <ChevronRight 
                size={18} 
                className={cn(
                  "transition-transform",
                  isActive ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                )} 
              />
            </Link>
          );
        })}
      </div>

      <div className="mt-10 p-6 rounded-[32px] bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl -z-0" />
        <p className="relative z-10 text-sm font-medium leading-relaxed opacity-90 mb-6">
          Need a custom solution for your specific industry?
        </p>
        <Link 
          href="/#contact"
          className="relative z-10 inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest hover:text-white transition-colors group"
        >
          Talk to us
          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

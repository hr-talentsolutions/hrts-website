import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Shield,
  FileText,
  ChevronRight,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Relations | HRTS Powering Workforce Solutions",
  description: "HRTS is a technology-enabled workforce and staffing solutions company in India. Access corporate policies, statutory documents, and reports.",
};

const INVESTOR_CARDS = [
  {
    id: "card-annual-reports",
    title: "Annual Reports",
    description: "View and download our audited annual reports from FY 2020–21 through FY 2024–25.",
    icon: BookOpen,
    href: "/investors/overview?tab=annual-reports",
    btnText: "View Annual Reports",
    type: "blue",
  },
  {
    id: "card-annual-returns",
    title: "Annual Returns",
    description: "Access our filed annual returns from FY 2020–21 through FY 2024–25.",
    icon: ClipboardCheck,
    href: "/investors/overview?tab=annual-returns",
    btnText: "View Annual Returns",
    type: "orange",
  },
  {
    id: "card-policies",
    title: "Corporate Policies",
    description: "Access our code of conduct, whistleblower policy, POSH guidelines, and other governance frameworks.",
    icon: Shield,
    href: "/investors/overview?tab=policies",
    btnText: "View Policies",
    type: "blue",
  },
  {
    id: "card-documents",
    title: "Statutory Documents",
    description: "Access our key corporate documents and statutory information including MOA, AOA, and COI.",
    icon: FileText,
    href: "/investors/overview?tab=documents",
    btnText: "View Documents",
    type: "orange",
  },
];

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#002f6c] to-[#0b1b3d] text-white overflow-hidden mb-16">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10 -translate-x-1/4 translate-y-1/4" />

          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-white/10 text-primary border border-white/10">
              Investor Relations
            </span>
            <h1 className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tight mb-6">
              Powering <span className="text-primary">Workforce</span> Solutions
            </h1>
            <p className="max-w-2xl mx-auto text-base lg:text-lg text-white/80 font-medium leading-relaxed">
              HRTS is a technology-enabled workforce and staffing solutions company in India. 
              Access corporate policies, statutory documents, and reports.
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INVESTOR_CARDS.map((card) => {
              const Icon = card.icon;
              const isOrange = card.type === "orange";
              
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className={`group relative bg-white rounded-[32px] p-10 flex flex-col justify-between border border-slate-100 shadow-premium hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden border-t-4 ${
                    isOrange ? "hover:border-t-primary" : "hover:border-t-secondary"
                  }`}
                >
                  <div className="mb-8">
                    {/* Icon wrapper */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        isOrange ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl text-text-main mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-sub font-medium leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    href={card.href}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-between border ${
                      isOrange
                        ? "border-slate-200 text-primary hover:bg-primary hover:border-primary hover:text-white"
                        : "border-slate-200 text-secondary hover:bg-secondary hover:border-secondary hover:text-white"
                    }`}
                  >
                    <span>{card.btnText}</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

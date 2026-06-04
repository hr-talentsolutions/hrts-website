"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { 
    name: "Services", 
    href: "#services",
      dropdown: [
        { name: "Manpower Outsourcing", href: "/services/manpower-outsourcing" },
        { name: "RPO", href: "/services/rpo" },
        { name: "Talent Acquisition", href: "/services/talent-acquisition" },
        { name: "Staffing", href: "/services/staffing" },
        { name: "Tech Staffing", href: "/services/tech-staffing" },
        { name: "Payroll", href: "/services/payroll" },
        { name: "Compliance", href: "/services/compliance" },
      ]
  },
  { 
    name: "Industries", 
    href: "#industries",
    dropdown: [
      { name: "BFSI", href: "/industries/bfsi" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Technology & IT", href: "/industries/technology-it" },
      { name: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
      { name: "Telecom", href: "/industries/telecom" },
      { name: "E-Commerce", href: "/industries/e-commerce" },
      { name: "Education", href: "/industries/education" },
      { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
      { name: "Media & Entertainment", href: "/industries/media-entertainment" },
      { name: "FMCG / FMCD / Retail", href: "/industries/fmcg-fmcd-retail" },
    ]
  },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-2 lg:py-2" : "py-3 lg:py-5"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-lg rounded-full px-8 py-2 lg:py-2.5 shadow-premium border border-primary/5" : "px-0"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="HR Talent Solutions"
            width={240}
            height={70}
            className="h-10 lg:h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-bold text-text-sub hover:text-primary transition-colors duration-200"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-premium border border-primary/5 p-4 z-50"
                    >
                      <div className="grid gap-2">
                        {link.dropdown.map((item) => {
                          const isItemActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                "text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200",
                                isItemActive 
                                  ? "text-primary bg-primary/10" 
                                  : "text-text-sub hover:text-primary hover:bg-primary/5"
                              )}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Jobs */}
          <a
            href="/jobs"
            className="relative overflow-hidden inline-flex items-center px-5 h-11 rounded-full border-2 border-primary text-primary font-bold text-sm hover:text-white group"
          >
            <span className="relative z-10">Jobs</span>
            <span className="absolute inset-0 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
            <span className="absolute top-0 left-[-60%] w-1/3 h-full bg-white/30 skew-x-[-20deg] group-hover:left-[140%] transition-all duration-700 ease-out delay-100" />
          </a>

          {/* Hire Talent — identical style to Jobs */}
          <a
            href="#contact"
            className="relative overflow-hidden inline-flex items-center px-5 h-11 rounded-full border-2 border-primary text-primary font-bold text-sm hover:text-white group"
          >
            <span className="relative z-10">Hire Talent</span>
            <span className="absolute inset-0 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
            <span className="absolute top-0 left-[-60%] w-1/3 h-full bg-white/30 skew-x-[-20deg] group-hover:left-[140%] transition-all duration-700 ease-out delay-100" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white rounded-3xl p-8 lg:hidden shadow-2xl border border-primary/5"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-text-main flex items-center justify-between"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-primary/10">
                      {link.dropdown.map((item) => {
                        const isItemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "text-sm font-medium transition-colors",
                              isItemActive ? "text-primary font-bold" : "text-text-sub"
                            )}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <hr className="border-primary/10" />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                Hire Talent
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


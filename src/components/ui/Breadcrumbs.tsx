"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-xs lg:text-sm font-medium text-text-sub/60 mb-8">
      <Link 
        href="/" 
        className="hover:text-primary transition-colors flex items-center gap-1"
      >
        <Home size={14} />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="text-primary/40" />
          {index === items.length - 1 ? (
            <span className="text-secondary font-bold">{item.label}</span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

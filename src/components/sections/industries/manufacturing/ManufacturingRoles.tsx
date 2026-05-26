"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  ClipboardCheck, 
  Users, 
  Truck, 
  LifeBuoy 
} from "lucide-react";

const ROLES = [
  { icon: Wrench, title: "Production Operators" },
  { icon: Settings, title: "Machine Technicians" },
  { icon: ClipboardCheck, title: "Quality Control Inspectors" },
  { icon: Users, title: "Supervisors & Line Managers" },
  { icon: Truck, title: "Warehouse & Logistics Staff" },
  { icon: LifeBuoy, title: "Maintenance & Support Staff" }
];

export const ManufacturingRoles = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Talent Support</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-black text-primary uppercase tracking-tight">
            Key Roles <span className="text-secondary">We Hire For</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-primary/5 p-8 rounded-[40px] border border-primary/10 flex flex-col items-center text-center group hover:bg-white hover:shadow-premium transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-6 group-hover:bg-secondary transition-colors duration-500">
                <role.icon size={32} />
              </div>
              <h4 className="text-xl font-display font-black text-secondary uppercase tracking-tight">
                {role.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

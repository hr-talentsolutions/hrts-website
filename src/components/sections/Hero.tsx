"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [
  { src: "/images/hero/recruitment-v2.jpg", alt: "Recruitment" },
  { src: "/images/hero/executive.png",       alt: "Executive Search" },
  { src: "/images/hero/consulting.png",      alt: "HR Consulting" },
  { src: "/images/hero/it-staffing.png",     alt: "IT Staffing" },
  { src: "/images/hero/payroll.png",         alt: "Payroll Management" },
  { src: "/images/hero/training.png",        alt: "Training & Development" },
];

const INTERVAL = 3500;

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-12 px-6 overflow-hidden bg-white">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Text ── */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Accelerating Workforce Excellence
          </div>

          <h1 className="text-3xl lg:text-5xl font-display font-black text-secondary leading-[1.2] mb-6 tracking-tight">
            India's Most <span className="text-primary italic">Reliable</span> <br />
            HR &amp; Workforce <br />
            Solutions Partner
          </h1>

          <p className="text-base lg:text-lg text-text-sub leading-relaxed mb-10 max-w-xl font-medium opacity-80">
            From talent acquisition to compliance and payroll — we help businesses scale faster with the right workforce strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-full shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 text-base"
            >
              Find Talent Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-secondary/20 text-secondary hover:bg-secondary/5 h-12 px-8 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 text-base"
            >
              Jobs
            </Button>
          </div>
        </div>

        {/* ── Right: Auto Carousel ── */}
        <div className="flex flex-col items-center gap-5">
          {/* Card */}
          <div className="relative w-full rounded-[28px] overflow-hidden shadow-2xl bg-[#f0f4ff]"
               style={{ aspectRatio: "4/3" }}>

            {/* Decorative accent — top-right corner like the reference */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/20 rounded-bl-[40px] z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={HERO_IMAGES[current].src}
                  alt={HERO_IMAGES[current].alt}
                  fill
                  className="object-cover"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators — exactly like the reference */}
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-6 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

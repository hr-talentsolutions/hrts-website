"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Executive Search & Leadership Hiring",
    description: "Connecting world-class organizations with visionary leaders who drive transformation and sustainable growth.",
    image: "/images/hero/executive.png",
    tag: "Premium Recruitment"
  },
  {
    id: 2,
    title: "Strategic Talent Acquisition & Recruitment",
    description: "Expert recruitment solutions using data-driven insights to find the perfect match for your organization's unique culture and goals.",
    image: "/images/hero/recruitment-v2.jpg",
    tag: "Talent Solutions"
  },
  {
    id: 3,
    title: "Global Payroll & Statutory Compliance",
    description: "Streamlining your workforce management with precision, transparency, and 100% regulatory compliance.",
    image: "/images/hero/payroll.png",
    tag: "Managed Services"
  },
  {
    id: 4,
    title: "Corporate Training & Skill Development",
    description: "Empowering your employees with modern skillsets through tailored learning pathways and workshops.",
    image: "/images/hero/training.png",
    tag: "Learning & Growth"
  },
  {
    id: 5,
    title: "Strategic HR Consulting Services",
    description: "Optimizing your human capital strategy with data-driven insights and industry-leading HR practices.",
    image: "/images/hero/consulting.png",
    tag: "Strategic Partnership"
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-center"
        >
          {/* Text content - Always clean white background half */}
          <div className="relative z-10 px-6 lg:px-20 flex flex-col items-start justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6"
            >
              {SLIDES[current].tag}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-display font-bold text-primary leading-[1.1] mb-6"
            >
              {SLIDES[current].title.split(" & ").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <br className="hidden lg:block" />}
                  {i < arr.length - 1 && <span className="text-secondary"> & </span>}
                </span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-text-sub leading-relaxed mb-10 max-w-xl"
            >
              {SLIDES[current].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="secondary" size="lg" className="group">
                Find Talent Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5">
                Looking For A Job?
              </Button>
            </motion.div>
          </div>

          {/* Image side - Slanted or split view */}
          <div className="relative h-full hidden lg:block overflow-hidden">
            <motion.div
              initial={{ scale: 1.1, x: 50 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={SLIDES[current].image}
                alt={SLIDES[current].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-6 lg:left-20 z-20 flex items-center gap-6">
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === current ? "w-10 bg-secondary" : "w-2 bg-secondary/20 hover:bg-secondary/40"
              }`}
            />
          ))}
        </div>
        
        <div className="flex gap-2 ml-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

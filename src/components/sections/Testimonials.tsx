"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    content: "HR Talent Solutions has been instrumental in our rapid scaling. Their RPO model is highly efficient.",
    author: "Arjun Mehta",
    role: "Director",
    company: "Adani Solar",
    rating: 4
  },
  {
    content: "he payroll compliance services provided by HRTS are seamless and accurate. Highly recommended.",
    author: "Ananya Deshmukh",
    role: "HR Manager",
    company: "Tata Projects",
    rating: 5
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Success Stories</h2>
            <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 leading-tight tracking-tight uppercase">
              Trusted by India's <br />
              <span className="text-secondary">Enterprise Leaders</span>
            </h3>
            <p className="text-lg text-text-sub mb-12 max-w-md">
              Don't just take our word for it. Hear from the HR leaders and entrepreneurs who have transformed their workforce with our solutions.
            </p>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -left-12 text-primary/10">
              <Quote size={160} />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white p-10 lg:p-16 rounded-[48px] shadow-premium-hover border border-primary/5 min-h-[400px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-8">
                      {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-base lg:text-lg font-medium text-text-main italic leading-relaxed mb-8">
                      "{TESTIMONIALS[current].content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary font-bold text-2xl border border-secondary/10">
                      {TESTIMONIALS[current].author[0]}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary">{TESTIMONIALS[current].author}</h4>
                      <p className="text-primary font-bold text-sm uppercase tracking-wider">
                        {TESTIMONIALS[current].role} <span className="text-text-sub opacity-50 px-2">|</span> {TESTIMONIALS[current].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EC] pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid min-w-0 grid-cols-1 gap-y-8 sm:gap-y-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-12 lg:gap-y-8 xl:gap-x-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <h1 className="font-display text-3xl font-black uppercase leading-[1.08] tracking-tight text-secondary sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Innovating with a <br className="hidden sm:block" />
              <span className="text-primary italic"> Positive Mindset</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center"
          >
            <div className="relative z-10 aspect-square overflow-hidden rounded-3xl border-2 border-secondary/10 shadow-2xl sm:rounded-[40px]">
              <Image
                src="/images/about/hero.png"
                alt="HR professionals collaborating around a global workforce network"
                width={800}
                height={800}
                priority
                sizes="(max-width: 1023px) calc(100vw - 32px), (max-width: 1279px) 42vw, 520px"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Background elements */}
            <div className="absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl sm:-right-10 sm:-top-10 sm:h-40 sm:w-40" />
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rotate-12 rounded-[40px] bg-secondary/5 sm:-bottom-10 sm:-left-10 sm:h-48 sm:w-48 sm:rounded-[60px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="min-w-0 space-y-4 text-[15px] font-medium leading-7 text-text-sub sm:space-y-5 sm:text-base sm:leading-8 lg:col-start-1 lg:row-start-2 xl:text-lg"
          >
            <p>
              <span className="font-bold text-secondary">HR Talent Solutions</span> is a rapidly growing Recruitment Solutions and Talent Management company, serving a diverse clientele ranging from Fortune 500 corporations to small and mid-sized businesses across India and globally.
            </p>
            <p>
              Headquartered in Hyderabad, India, with a strong service presence nationwide, we are driven by our core philosophy: <span className="font-bold text-secondary">"Making a mark wherever we serve."</span> Our goal is to be recognized as a trusted and outstanding service provider by transforming knowledge into measurable value—for our clients, our people, and the business ecosystem as a whole.
            </p>
            <p>
              We function as an extension of our clients' teams, partnering closely at every stage to deliver impactful results. Our approach is defined by transparency, integrity, simplicity, and strong professional expertise—enabling faster execution and consistent delivery that exceeds expectations.
            </p>
            <p>
              We are committed to long-term partnerships and continuously evolving our practices to stay ahead of industry trends, ensuring our clients realize their full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

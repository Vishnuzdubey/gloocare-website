"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Smartphone, CheckCircle2 } from "lucide-react";

const beats = [
  {
    id: 1,
    icon: <Clock className="w-7 h-7" />,
    time: "9:15 AM",
    title: "Wait — and Wait More",
    description: "You reach the salon. No idea how long the wait is. Chair is busy. You sit and wait... 20 minutes, then 40 minutes. No one tells you anything.",
    visual: {
      accent: "text-red-400",
      stat: "47 min avg wait",
    },
  },
  {
    id: 2,
    icon: <Smartphone className="w-7 h-7" />,
    time: "9:16 AM",
    title: "Open GlooCare App",
    description: "App shows: 2 people ahead, just 12 minutes wait. Or book a slot at 10:30 and come exactly at that time. Your choice — no tension.",
    visual: {
      accent: "text-brand-gold",
      stat: "Live queue shown in app",
    },
  },
  {
    id: 3,
    icon: <CheckCircle2 className="w-7 h-7" />,
    time: "10:30 AM",
    title: "Come, Sit, Done.",
    description: "You arrive at your booked time. Stylist is ready and waiting for you. No wait, no confusion. Haircut done in 25 minutes. Time saved.",
    visual: {
      accent: "text-brand-green",
      stat: "0 min wait",
    },
  },
];

export default function StoryStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#3D2B1F] via-[#5A3D28] to-[#3D2B1F] border-y border-white/5 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-bold text-brand-gold uppercase tracking-wider mb-4">
            A Day Without GlooCare vs. With It
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#F7F2E9] tracking-tight">
            Your Morning, Reimagined
          </h2>
        </motion.div>

        {/* 3-Column Responsive Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beats.map((beat, i) => (
            <motion.div
              key={beat.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#5A3D28] border border-white/10 rounded-[32px] p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 ${beat.visual.accent}`}>
                    {beat.icon}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90">
                    {beat.time}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-heading font-extrabold text-white">
                    {beat.title}
                  </h3>
                  <p className="text-sm text-[#F7F2E9]/70 leading-relaxed">
                    {beat.description}
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <div className={`inline-block px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-heading font-bold uppercase tracking-wider ${beat.visual.accent}`}>
                  {beat.visual.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

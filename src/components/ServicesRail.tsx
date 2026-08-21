"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Scissors, Droplet, Smile, Users, Sparkles, Flame } from "lucide-react";

const services = [
  {
    name: "Classic Haircut",
    tag: "From ₹250",
    icon: <Scissors className="w-6 h-6" />,
    gradient: "from-[#6E4F2E] to-[#5A3D28]",
  },
  {
    name: "Beard Styling",
    tag: "From ₹150",
    icon: <Smile className="w-6 h-6" />,
    gradient: "from-[#5A3D28] to-[#6E4F2E]",
  },
  {
    name: "Hair Spa",
    tag: "From ₹600",
    icon: <Droplet className="w-6 h-6" />,
    gradient: "from-[#6E4F2E] to-[#8B6944]",
  },
  {
    name: "Groom Package",
    tag: "From ₹800",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-[#8B6944] to-[#6E4F2E]",
  },
  {
    name: "Hair Coloring",
    tag: "From ₹500",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-[#5A3D28] to-[#8B6944]",
  },
  {
    name: "Head Massage",
    tag: "From ₹300",
    icon: <Flame className="w-6 h-6" />,
    gradient: "from-[#6E4F2E] to-[#5A3D28]",
  },
];

export default function ServicesRail() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#5A3D28] via-[#4E3828] to-[#3D2B1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Style Your Way — Salon or Home
            </h2>
            <p className="text-sm sm:text-base text-[#F7F2E9]/80 max-w-md leading-relaxed mt-4">
              Haircut, beard, spa, or home visit — book the service you want, when you want it.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-bold text-[#F7F2E9] hover:text-brand-gold transition-colors underline underline-offset-4 whitespace-nowrap"
          >
            See All Services →
          </Link>
        </div>
      </div>

      {/* Horizontal scroll-snap rail */}
      <div
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="snap-start shrink-0 w-[280px] sm:w-[320px]"
          >
            <Link href="/services" className="block group">
              <div
                className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 h-[220px] flex flex-col justify-between relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">
                    {service.tag}
                  </p>
                  <h3 className="text-xl font-heading font-extrabold text-white mt-1">
                    {service.name}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

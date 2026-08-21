"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

export default function PartnerSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-brand-cream border-t border-brand-brown/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-brand-brown rounded-[40px] overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Subtle gold grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#8B6944_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

          {/* Ambient background stats numbers */}
          <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
            <div className="absolute top-6 right-10 text-[140px] sm:text-[200px] font-heading font-extrabold text-brand-gold/[0.02] leading-none">
              24
            </div>
            <div className="absolute bottom-4 left-6 text-[90px] sm:text-[140px] font-heading font-extrabold text-brand-gold/[0.015] leading-none">
              ₹8.4K
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 p-6 sm:p-14 lg:p-20 items-center">
            
            {/* Left — Narrative Editorial */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-bold text-brand-gold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Partner Spotlight
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-extrabold text-[#F7F2E9] leading-[1.1] tracking-tight">
                &ldquo;My chairs haven&apos;t been empty since we joined GlooCare.&rdquo;
              </h2>

              <p className="text-sm sm:text-base text-[#F7F2E9]/80/90 leading-relaxed max-w-xl">
                Rajesh runs The Groom Room on Gorakhpur Main Road. Saturdays used to be complete chaos—he regularly lost customers who got tired of sitting in the waiting area for 40 minutes. With GlooCare, clients track exactly when to show up, the styling chairs stay continuously filled, and business has grown steadily.
              </p>

              <div className="flex items-center gap-4 pt-2">
                {/* Custom Vector Barber Profile Silhouette */}
                <div className="w-11 h-11 rounded-full border border-brand-gold/30 bg-[#3A2E25] flex items-center justify-center overflow-hidden">
                  <svg className="w-7 h-7 text-brand-gold mt-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-heading font-bold text-white tracking-wide">Rajesh Kumar</p>
                  <p className="text-xs text-[#F7F2E9]/80">Founder, The Groom Room Gorakhpur</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/for-partners"
                  className="inline-flex items-center gap-2 bg-brand-gradient text-white px-8 py-4 rounded-full font-heading font-bold text-sm shadow-xl hover:scale-[1.03] transition-transform"
                >
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — Clean Dashboard Widgets */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { label: "Daily Bookings", value: "24", change: "+18%", up: true },
                { label: "Monthly Revenue", value: "₹2.5L", change: "+32%", up: true },
                { label: "Commission Rate", value: "10%", change: "Flat Rate", up: false },
                { label: "Customer Rating", value: "4.9★", change: "Top Rated", up: false },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 25 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between bg-[#5A3D28] border border-brand-gold/15 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 shadow-lg backdrop-blur-sm transition-all hover:bg-[#5A3F27]"
                >
                  <div>
                    <p className="text-[10px] text-[#F7F2E9]/80 font-bold uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-heading font-extrabold text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#1B1712]/50 ${
                      stat.up ? "text-brand-green border border-brand-green/20" : "text-brand-gold border border-brand-gold/20"
                    }`}
                  >
                    {stat.up && <TrendingUp className="w-3.5 h-3.5" />}
                    {stat.change}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

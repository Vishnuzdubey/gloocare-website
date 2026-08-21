"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// Homepage hero section. Centered layout with the primary headline,
// two CTAs, and a social proof strip at the bottom.
//
// The video background (/hero-video.mp4) is optional — it degrades
// gracefully if the file is missing. The radial overlays ensure
// text legibility regardless of video content.
//
// TODO: Replace /hero-video.mp4 with the actual brand video file
//       once it is ready. Drop the MP4 into /public/hero-video.mp4.
export default function QueueHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] overflow-hidden py-20 lg:py-0">
      {/* Background video — fails silently if file is not present */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay ensures readable text over any video */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F] via-transparent to-[#3D2B1F]/85" />
      </div>

      {/* Ambient backdrop glow nodes */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-8">

            {/* Launch badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-bold text-brand-gold tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              GlooCare — Live Queue Now Active
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-heading font-black text-[#F7F2E9] leading-[1.05] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
              >
                Skip the Line.<br />
                <span className="text-brand-gradient bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                  Book in Seconds.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-[#F7F2E9] font-semibold max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
              >
                See live wait time at any salon. Book your slot from home. Or get a stylist at your door. No more waiting, no tension.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <Link
                href="#download"
                className="relative overflow-hidden group px-8 py-4 rounded-full bg-brand-gradient hover:opacity-95 text-[#F7F2E9] font-heading font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
                <span className="relative z-20 flex items-center gap-2">
                  Get the App <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/services"
                className="relative overflow-hidden group px-8 py-4 rounded-full border border-brand-gold/40 bg-brand-brown/40 backdrop-blur-sm font-heading font-bold text-sm text-brand-gold hover:bg-brand-gold/10 transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-brand-brown/10 to-transparent z-10 pointer-events-none" />
                <span className="relative z-20">Explore Services</span>
              </Link>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/20 mt-6"
            >
              <div className="flex -space-x-3">
                {["RK", "SS", "AP", "+5k"].map((initial, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-[#3D2B1F] bg-brand-brown flex items-center justify-center text-[9px] font-bold text-white shadow-md"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                <p className="text-xs font-black text-[#F7F2E9]">5,000+ happy customers trust GlooCare</p>
                <p className="text-[10px] font-bold text-brand-gold mt-0.5">★★★★★ 4.9/5 rating in Gorakhpur</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

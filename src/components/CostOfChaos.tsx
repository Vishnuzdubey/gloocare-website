"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "@/components/CountUp";

// Renders the "Cost of Chaos" section on the homepage.
// Shows key stats about wait time at salons and a visual clock dial
// that becomes interactive on hover to dramatize the time-loss problem.
export default function CostOfChaos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  // Clock tick marks — 60 total, major ticks every 5 minutes
  const tickMarks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 6 * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const outerRadius = 105;
    const innerRadius = outerRadius - (isMajor ? 12 : 6);
    return {
      x1: 150 + Math.cos(angle) * outerRadius,
      y1: 150 + Math.sin(angle) * outerRadius,
      x2: 150 + Math.cos(angle) * innerRadius,
      y2: 150 + Math.sin(angle) * innerRadius,
      isMajor,
    };
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] overflow-hidden border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Stat block — left column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/15 text-xs font-bold text-red-500 uppercase tracking-widest">
              The Cost of Chaos
            </span>

            <div className="space-y-6">
              <div>
                <p className="text-6xl sm:text-7xl lg:text-[5.5rem] font-heading font-extrabold text-[#F7F2E9] leading-none tracking-tight">
                  <CountUp end={47} suffix=" min" />
                </p>
                <p className="text-lg sm:text-xl text-[#F7F2E9]/70 mt-4 font-semibold">
                  Average walk-in wait during wedding season
                </p>
              </div>

              <div className="h-[2px] bg-brand-gold/25 w-24" />

              <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-6 sm:gap-8 pt-2">
                <div>
                  <p className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-gold tracking-tight">
                    <CountUp end={3} suffix=" in 10" />
                  </p>
                  <p className="text-xs sm:text-sm text-[#F7F2E9]/70 mt-2 leading-relaxed">
                    Customers leave without service due to long queues
                  </p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-gold tracking-tight">
                    <CountUp end={68} suffix="%" />
                  </p>
                  <p className="text-xs sm:text-sm text-[#F7F2E9]/70 mt-2 leading-relaxed">
                    Prefer booking ahead if the option exists
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#F7F2E9]/80 leading-relaxed max-w-xl">
              Whether it is the festive wedding season or a typical busy weekend morning, waiting at a local salon has always felt like a gamble. We built GlooCare to solve this exact headache. Instead of watching frustrated clients walk out the door, you can keep your schedules full and your lounge clear.
            </p>
          </motion.div>

          {/* Interactive clock visualizer — right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-sm bg-glass backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Dot grid texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#8B6944_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none rounded-3xl" />
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

              {/* Hover particles — floating time-loss labels */}
              <AnimatePresence>
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                    <motion.span
                      initial={{ opacity: 0, y: 150, x: 150, scale: 0.8 }}
                      animate={{ opacity: [0, 1, 0], y: [150, 40], x: [150, 100], scale: [0.8, 1.2, 0.9] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.1 }}
                      className="absolute text-red-400 font-heading font-black text-xs drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]"
                    >
                      -15m
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 150, x: 150, scale: 0.8 }}
                      animate={{ opacity: [0, 1, 0], y: [150, 20], x: [150, 200], scale: [0.8, 1.3, 0.9] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2.0, repeat: Infinity, delay: 0.3, repeatDelay: 0.2 }}
                      className="absolute text-red-400 font-heading font-black text-xs drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]"
                    >
                      -30m
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 150, x: 150, scale: 0.8 }}
                      animate={{ opacity: [0, 1, 0], y: [150, 60], x: [150, 70], scale: [0.8, 1.1, 0.9] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: 0.6, repeatDelay: 0.15 }}
                      className="absolute text-red-400 font-heading font-black text-xs drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]"
                    >
                      -47m
                    </motion.span>
                  </div>
                )}
              </AnimatePresence>

              <div className="relative w-full flex flex-col items-center justify-center">
                <svg
                  viewBox="0 0 300 300"
                  className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B6944" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#6E4F2E" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F7F2E9" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8B6944" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Outer rings */}
                  <circle cx="150" cy="150" r="125" fill="none" stroke="#8B6944" strokeWidth="1" strokeOpacity="0.15" />
                  <circle cx="150" cy="150" r="115" fill="none" stroke="#6E4F2E" strokeWidth="1" strokeOpacity="0.1" />
                  <circle cx="150" cy="150" r="105" fill="rgba(61, 43, 31, 0.4)" stroke="#8B6944" strokeWidth="1.5" strokeOpacity="0.2" />

                  {/* Red arc — peak "chaos" zone */}
                  <path
                    d="M 150 45 A 105 105 0 0 1 241 202"
                    fill="none"
                    stroke="url(#redGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="opacity-90"
                  />

                  {/* Minute tick marks */}
                  {tickMarks.map((tick, i) => (
                    <line
                      key={i}
                      x1={tick.x1}
                      y1={tick.y1}
                      x2={tick.x2}
                      y2={tick.y2}
                      stroke={tick.isMajor ? "#F7F2E9" : "#8B6944"}
                      strokeWidth={tick.isMajor ? "1.5" : "1"}
                      strokeOpacity={tick.isMajor ? "0.6" : "0.3"}
                    />
                  ))}

                  {/*
                   * Radar sweep overlay.
                   * Note: the invisible bounding circle is intentional — it fixes a Framer Motion
                   * SVG transform origin bug where groups without a symmetric bounding box
                   * rotate off-center. The circle forces the group center to (150, 150).
                   */}
                  <motion.g
                    style={{ transformOrigin: "150px 150px" }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: isHovered ? 1.5 : 8, ease: "linear" }}
                    className="origin-center"
                  >
                    <circle cx="150" cy="150" r="105" fill="none" opacity="0" pointerEvents="none" />
                    <path
                      d="M 150 150 L 150 45 A 105 105 0 0 1 224.2 75.8 Z"
                      fill="url(#centerGlow)"
                      opacity="0.25"
                    />
                  </motion.g>

                  {/* Center ambient glow */}
                  <circle cx="150" cy="150" r="30" fill="url(#centerGlow)" pointerEvents="none" />

                  {/* Hour hand — stuck in the red zone, nervously wiggles when hovered */}
                  <motion.g
                    style={{ transformOrigin: "150px 150px" }}
                    animate={isHovered ? { rotate: [75, 83, 68, 80, 75] } : { rotate: 75 }}
                    transition={
                      isHovered
                        ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                        : { type: "spring", stiffness: 60, damping: 15 }
                    }
                    className="origin-center"
                  >
                    {/* Bounding circle — see note on radar sweep above */}
                    <circle cx="150" cy="150" r="100" fill="none" opacity="0" pointerEvents="none" />
                    <line x1="150" y1="150" x2="150" y2="95" stroke="#8B6944" strokeWidth="5" strokeLinecap="round" />
                  </motion.g>

                  {/* Minute hand — speeds up when hovered */}
                  <motion.g
                    style={{ transformOrigin: "150px 150px" }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: isHovered ? 10 : 60, ease: "linear" }}
                    className="origin-center"
                  >
                    <circle cx="150" cy="150" r="100" fill="none" opacity="0" pointerEvents="none" />
                    <line x1="150" y1="150" x2="150" y2="65" stroke="#F7F2E9" strokeWidth="3.5" strokeLinecap="round" />
                  </motion.g>

                  {/* Second sweep hand */}
                  <motion.g
                    style={{ transformOrigin: "150px 150px" }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: isHovered ? 1.5 : 10, ease: "linear" }}
                    className="origin-center"
                  >
                    <circle cx="150" cy="150" r="100" fill="none" opacity="0" pointerEvents="none" />
                    <line x1="150" y1="150" x2="150" y2="50" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.g>

                  {/* Center cap — person avatar with a status dot */}
                  <g transform="translate(150, 150)">
                    <circle cx="0" cy="0" r="18" fill="#3D2B1F" stroke="#8B6944" strokeWidth="2.5" />
                    <circle cx="0" cy="0" r="15" fill="#5A3D28" />
                    {/* Person silhouette */}
                    <path
                      d="M -6 6 A 6 6 0 0 1 6 6 M -3.5 -2 A 3.5 3.5 0 1 1 3.5 -2"
                      fill="none"
                      stroke="#F7F2E9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Status dot — pulses faster on hover */}
                    <circle cx="9" cy="-9" r={isHovered ? 3.5 : 3} fill="#EF4444" className={isHovered ? "animate-pulse" : ""} />
                  </g>
                </svg>

                {/* Label below the clock */}
                <div className="absolute text-center mt-[14.5rem] flex flex-col items-center">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[9px] font-heading font-black text-red-400 uppercase tracking-widest animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.2)] transition-transform duration-300 ${
                      isHovered ? "scale-110" : ""
                    }`}
                  >
                    Chaos Zone
                  </span>
                  <p className="text-xs font-heading font-extrabold text-[#F7F2E9] mt-2">Peak Rush Hours</p>
                  <p className="text-[10px] text-[#F7F2E9]/50 font-semibold mt-0.5">Avg. Wait Time: 47 mins</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

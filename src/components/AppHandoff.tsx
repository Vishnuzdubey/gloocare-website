"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// App download section — the final CTA on the homepage.
// Shows store badges and a decorative phone mockup with a live-looking UI.
//
// TODO: Replace the # href on both store badge links with the real
//       App Store and Google Play URLs once the app is published.
// TODO: The QR code below is decorative. Replace SVG with a real
//       scannable QR code once the app listing URLs are live.
const MAIN_USER_APP_URL = "https://play.google.com/store/apps/details?id=app.gloocare_salon_app";

export default function AppHandoff() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="download" className="py-24 bg-[#5A3D28] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative flow lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#8B6944" stopOpacity="0" />
              <stop offset="40%" stopColor="#8B6944" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#8B6944" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 300 Q 360 180, 720 300 T 1440 300" fill="none" stroke="url(#flowGrad)" strokeWidth="1.5" />
          <path d="M 0 320 Q 400 420, 720 320 T 1440 260" fill="none" stroke="url(#flowGrad)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Copy and store badges — left column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#F7F2E9] leading-tight tracking-tight">
                Your Queue Ends Here.<br />
                <span className="text-brand-gradient bg-clip-text">The App Begins.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#F7F2E9]/80 max-w-lg leading-relaxed">
                Everything you just saw — live queues, slot booking, home service, partner tools — is one download away. Available on iOS and Android.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start sm:items-center">
              <div className="flex flex-wrap gap-4">
                <Link
                  href={MAIN_USER_APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 w-48 bg-[#3A2E25] border border-brand-gold/15 hover:border-brand-gold/35 rounded-2xl flex items-center justify-center gap-3.5 transition-all hover:scale-[1.02] group shadow-lg"
                >
                  <svg className="w-5 h-5 text-[#F7F2E9] group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.25 3.003c-.225 0-.441.066-.628.188l11.458 11.459 2.502-2.502L5.25 3.003zM4.168 3.816A1.084 1.084 0 004 4.5v15c0 .252.063.483.168.684l8.332-8.332-8.332-8.036zm12.18 11.83l-3.348-3.348-8.332 8.332c.187.122.403.188.628.188h13.332c.225 0 .441-.066.628-.188l-2.908-2.984zm3.013-3.014c.264-.264.409-.607.409-.966s-.145-.702-.409-.966l-2.023-2.023-4.322 4.322 4.322 4.322 2.023-2.023-.332-.666z" />
                  </svg>
                  <div className="text-left leading-none">
                    <p className="text-[9px] uppercase text-[#F7F2E9]/80 font-bold tracking-wider">Get it on</p>
                    <p className="text-sm font-heading font-extrabold text-white mt-1">Google Play</p>
                  </div>
                </Link>
              </div>

            
            </div>
          </motion.div>

          {/* Phone mockup — right column */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-[290px] h-[580px] bg-[#1B1712] rounded-[52px] border-[10px] border-[#4E3828] relative shadow-2xl flex flex-col justify-between overflow-hidden p-3.5 ring-1 ring-white/10 mx-auto">
              <div className="w-full h-full bg-[#211B15] rounded-[38px] overflow-hidden flex flex-col justify-between p-5 relative border border-white/5">

                {/* Status bar */}
                <div className="flex justify-between items-center px-2 pt-1 text-[10px] text-[#F7F2E9]/80 font-bold relative z-20">
                  <span>9:41</span>
                  <div className="w-20 h-5 bg-[#1B1712] rounded-full absolute left-1/2 -translate-x-1/2 top-0.5 flex items-center justify-center border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-950/70 absolute right-3" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-5 h-2.5 bg-brand-gray/30 rounded-sm relative flex items-center px-0.5">
                      <div className="w-3.5 h-1.5 bg-brand-gray rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App content */}
                <div className="flex-grow flex flex-col justify-between pt-6">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-brand-gradient rounded-2xl flex items-center justify-center font-heading font-extrabold text-white text-2xl mx-auto shadow-xl">
                      G
                    </div>
                    <div className="space-y-1 text-center">
                      <h4 className="font-heading font-extrabold text-base text-white tracking-wide">GlooCare</h4>
                      <p className="text-[11px] text-[#F7F2E9]/80 leading-relaxed">
                        Live queue tracking is online for Gorakhpur. 50+ verified salons available.
                      </p>
                    </div>
                  </div>

                  {/* Live widget preview */}
                  <div className="w-full bg-[#2A221A] border border-brand-gold/15 p-4 rounded-[20px] text-left shadow-lg">
                    <p className="text-[8px] text-brand-gold font-bold uppercase tracking-widest">Nearest Partner</p>
                    <p className="text-xs font-bold text-white mt-1">Classic Barber Lounge</p>
                    <p className="text-[10px] text-[#3FA85E] font-semibold mt-1.5 flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FA85E] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3FA85E]" />
                      </span>
                      3 mins wait • 1.2 km away
                    </p>
                  </div>

                  <div className="w-full bg-brand-gradient py-3.5 rounded-2xl text-center text-xs font-heading font-extrabold text-white shadow-xl hover:opacity-95 transition-opacity cursor-pointer">
                    Skip Queue Now
                  </div>
                </div>

                {/* Home indicator */}
                <div className="w-24 h-1 bg-[#4E3828]/60 rounded-full mx-auto mt-4 shrink-0" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

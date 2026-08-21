"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CalendarCheck, Home as HomeIcon, Briefcase, ChevronRight } from "lucide-react";

// Feature definitions for the interactive tab selector.
// Each entry maps to a tab on the left and a phone screen preview on the right.
const capabilities = [
  {
    id: "queue",
    label: "Live Queue",
    icon: <Clock className="w-5 h-5" />,
    title: "See Live Wait Time at Any Salon",
    description:
      "Check how many people are waiting at any salon near you — right now. No need to go and check. Just open the app and know.",
    screen: {
      header: "Classic Barber Lounge",
      subtitle: "Gorakhpur Main Road",
      stats: [
        { label: "Wait Time", value: "12 mins", accent: true },
        { label: "Ahead of You", value: "3 people", accent: false },
        { label: "Stylists Working", value: "4", accent: false },
      ],
      cta: "Join Queue",
    },
  },
  {
    id: "slots",
    label: "Slot Booking",
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "Book Your Time in Advance",
    description:
      "Choose your stylist and a time that works for you. Your seat is confirmed — just come at that time, no waiting needed.",
    screen: {
      header: "Book a Slot",
      subtitle: "Tomorrow, July 12",
      stats: [
        { label: "10:00 AM", value: "Available", accent: true },
        { label: "11:30 AM", value: "Available", accent: true },
        { label: "2:00 PM", value: "Booked", accent: false },
      ],
      cta: "Confirm Booking",
    },
  },
  {
    id: "home",
    label: "Home Service",
    icon: <HomeIcon className="w-5 h-5" />,
    title: "Stylist Comes to Your Home",
    description:
      "Book a haircut, beard trim, or spa at home. A verified stylist will come to you at your chosen time — no need to go anywhere.",
    screen: {
      header: "Home Service",
      subtitle: "Your Location",
      stats: [
        { label: "Stylist", value: "Rahul S.", accent: false },
        { label: "Will Arrive In", value: "25 mins", accent: true },
        { label: "Service", value: "Groom Pack", accent: false },
      ],
      cta: "Book Home Visit",
    },
  },
  {
    id: "partner",
    label: "Partner Tools",
    icon: <Briefcase className="w-5 h-5" />,
    title: "Manage Your Salon Easily",
    description:
      "Get a digital queue, slot booking system, and daily earnings summary. Transparent pricing — no hidden charges.",
    screen: {
      header: "Partner Dashboard",
      subtitle: "The Groom Room",
      stats: [
        { label: "Today's Bookings", value: "24", accent: true },
        { label: "Earnings Today", value: "₹8,450", accent: true },
        { label: "Commission", value: "10% only", accent: false },
      ],
      cta: "View Details",
    },
  },
];

export default function CapabilityShowcase() {
  const [activeId, setActiveId] = useState("queue");

  const current = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <section className="py-20 bg-[#5A3D28] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Feature selector — left column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white uppercase tracking-wider mb-2">
              What GlooCare Does
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#F7F2E9] mb-8 tracking-tight">
              One App. Every Way to Skip the Wait.
            </h2>

            <div className="space-y-3">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveId(cap.id)}
                  className={`w-full text-left px-6 py-5 rounded-[20px] transition-all duration-300 flex items-center gap-5 border relative overflow-hidden group ${
                    activeId === cap.id
                      ? "bg-[#6E4F2E] shadow-xl border-white/20 scale-[1.01]"
                      : "bg-white/[0.03] hover:bg-white/[0.08] border-white/5"
                  }`}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/25 to-transparent z-10 pointer-events-none" />
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors relative z-20 ${
                      activeId === cap.id ? "bg-brand-brown text-white" : "bg-white/5 text-white/50"
                    }`}
                  >
                    {cap.icon}
                  </div>
                  <div className="flex-grow relative z-20">
                    <p
                      className={`font-heading font-bold text-sm sm:text-base transition-colors ${
                        activeId === cap.id ? "text-white" : "text-white/70"
                      }`}
                    >
                      {cap.label}
                    </p>
                    {activeId === cap.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed"
                      >
                        {cap.description}
                      </motion.p>
                    )}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-all relative z-20 ${
                      activeId === cap.id ? "text-white translate-x-1" : "text-white/20"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Phone mockup preview — right column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="w-full relative z-10"
                >
                  {/* Phone chassis */}
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

                      {/* App screen content */}
                      <div className="flex-grow flex flex-col justify-between pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">
                              GlooCare App
                            </p>
                            <p className="text-lg font-heading font-extrabold text-white mt-1">
                              {current.screen.header}
                            </p>
                            <p className="text-xs text-[#F7F2E9]/80 mt-0.5">{current.screen.subtitle}</p>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse mt-1" />
                        </div>

                        <div className="space-y-2.5">
                          {current.screen.stats.map((stat, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between bg-[#2B231B]/80 border border-brand-gold/15 rounded-xl px-4 py-3.5 transition-all hover:bg-[#342A21]"
                            >
                              <span className="text-xs text-[#F7F2E9]/80 font-semibold">{stat.label}</span>
                              <span
                                className={`text-xs font-heading font-bold ${
                                  stat.accent ? "text-brand-gold" : "text-white"
                                }`}
                              >
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="w-full bg-brand-gradient py-3 rounded-xl text-xs font-heading font-bold text-white shadow-xl transition-transform hover:scale-[1.01] active:scale-95">
                          {current.screen.cta}
                        </button>
                      </div>

                      {/* Home indicator */}
                      <div className="w-24 h-1 bg-[#4E3828]/60 rounded-full mx-auto mt-4 shrink-0" />
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
}

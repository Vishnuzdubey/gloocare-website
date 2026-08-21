"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Store,
  MapPin,
  Clock,
  CalendarCheck,
  Laptop,
  TrendingUp,
  Table,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface Step {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function ProcessCard({ step, index, activeTrack }: { step: Step; index: number; activeTrack: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });

    // Cap tilt angle for sleek professional feel
    const rX = -(y - rect.height / 2) / rect.height * 15;
    const rY = (x - rect.width / 2) / rect.width * 15;
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      key={`${activeTrack}-${index}`}
      initial={{ opacity: 0, y: 50, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s, rotateX 0.5s" : "none",
      }}
      className="bg-[#5A3D28] border border-white/10 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-shadow group cursor-pointer"
    >
      {/* Dynamic Cursor tracking glow halo */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(180px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(139, 105, 68, 0.25), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

      {/* 3D layer for content using translateZ */}
      <div className="relative z-20" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
            {step.icon}
          </div>
          <span className="font-heading font-extrabold text-4xl text-brand-gold/20 select-none group-hover:text-brand-gold/45 transition-colors duration-300">
            {step.num}
          </span>
        </div>
        <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-tight">
          {step.title}
        </h3>
        <p className="text-xs text-[#F7F2E9]/75 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const [activeTrack, setActiveTrack] = useState<"customer" | "partner">("customer");

  const customerSteps = [
    {
      num: "01",
      icon: <MapPin className="w-5 h-5 text-brand-gold" />,
      title: "Find Salons Near You",
      desc: "Open the GlooCare app. It shows all salons and barber shops near you in Gorakhpur. Tap any one to see details."
    },
    {
      num: "02",
      icon: <Clock className="w-5 h-5 text-brand-gold" />,
      title: "Check Live Wait Time",
      desc: "See exactly how many people are waiting right now. Book a slot or join the queue — no need to guess or go and check yourself."
    },
    {
      num: "03",
      icon: <CalendarCheck className="w-5 h-5 text-brand-gold" />,
      title: "Book & Come",
      desc: "Confirm your booking in the app. Come at your time — the stylist will be ready and waiting. No sitting and waiting."
    }
  ];

  const partnerSteps = [
    {
      num: "01",
      icon: <Laptop className="w-5 h-5 text-brand-gold" />,
      title: "Register Your Salon",
      desc: "Fill the partner form. Our team will visit your salon, set everything up, and give you a GlooCare tablet to manage bookings."
    },
    {
      num: "02",
      icon: <Table className="w-5 h-5 text-brand-gold" />,
      title: "Manage Customers Easily",
      desc: "See all bookings on the tablet. Assign staff, manage walk-in customers, and keep the queue organized — all in one place."
    },
    {
      num: "03",
      icon: <TrendingUp className="w-5 h-5 text-brand-gold" />,
      title: "See Daily Earnings",
      desc: "Track how much you earn every day. Only 10% commission — no other charges. Money directly credited to your account."
    }
  ];

  const activeSteps = activeTrack === "customer" ? customerSteps : partnerSteps;

  return (
    <div className="py-24 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] min-h-screen relative overflow-hidden">

      {/* Premium background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-bold text-brand-gold uppercase tracking-wider shadow-[0_0_15px_rgba(139,105,68,0.25)] animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
            Process Guide
          </span>
          <h1 className="text-5xl sm:text-6xl font-heading font-black text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            GlooCare Step-by-Step
          </h1>
          <p className="text-base text-[#F7F2E9] font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            See how GlooCare simplifies grooming bookings for customers and empowers salon owners to eliminate wait times.
          </p>
        </div>

        {/* Track selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#5A3D28]/60 border border-white/10 p-1.5 rounded-full flex items-center shadow-sm">
            <button
              onClick={() => setActiveTrack("customer")}
              className={`relative overflow-hidden group flex items-center gap-2 px-8 py-3 rounded-full text-xs font-heading font-bold transition-all ${activeTrack === "customer"
                  ? "bg-brand-brown text-white shadow-md"
                  : "text-[#F7F2E9]/80 hover:text-white hover:bg-white/5"
                }`}
            >
              {activeTrack === "customer" ? (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
              ) : (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-brand-brown/10 to-transparent z-10 pointer-events-none" />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <User className="w-4 h-4" />
                For Customers
              </span>
            </button>
            <button
              onClick={() => setActiveTrack("partner")}
              className={`relative overflow-hidden group flex items-center gap-2 px-8 py-3 rounded-full text-xs font-heading font-bold transition-all ${activeTrack === "partner"
                  ? "bg-brand-brown text-white shadow-md"
                  : "text-[#F7F2E9]/80 hover:text-white hover:bg-white/5"
                }`}
            >
              {activeTrack === "partner" ? (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
              ) : (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-brand-brown/10 to-transparent z-10 pointer-events-none" />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Store className="w-4 h-4" />
                For Salon Partners
              </span>
            </button>
          </div>
        </div>

        {/* Steps display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative z-10">
          {/* Animated Connecting Line (Desktop) */}
          <div className="absolute top-[35%] left-20 right-20 h-[1.5px] bg-gradient-to-r from-brand-gold/5 via-brand-gold/30 to-brand-gold/5 hidden lg:block z-0 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"
            />
          </div>

          <AnimatePresence mode="popLayout">
            {activeSteps.map((step, i) => (
              <ProcessCard
                key={`${activeTrack}-${i}`}
                step={step}
                index={i}
                activeTrack={activeTrack}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Dual Track Call to Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#5A3D28] text-white rounded-3xl p-8 flex flex-col justify-between items-start space-y-6 relative overflow-hidden group">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
            <div className="relative z-20">
              <h3 className="font-heading font-extrabold text-xl text-[#F7F2E9]">
                Ready to Skip the Wait?
              </h3>
              <p className="text-xs text-[#F7F2E9]/70 mt-2 leading-relaxed">
                Download the app, locate premium salons in Gorakhpur, and book your next haircut queue-free.
              </p>
            </div>
            <Link
              href="/#download"
              className="relative overflow-hidden group bg-brand-gradient text-white px-8 py-3 rounded-full font-heading font-bold text-xs shadow-md flex items-center gap-1.5 hover:scale-102 transition-transform z-20"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
              <span className="relative z-20 flex items-center gap-1.5">
                Get Customer App <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="bg-[#5A3D28] border border-white/10 text-white rounded-3xl p-8 flex flex-col justify-between items-start space-y-6 relative overflow-hidden group">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
            <div className="relative z-20">
              <h3 className="font-heading font-extrabold text-xl text-white">
                Earn More. Eliminate Chaos.
              </h3>
              <p className="text-xs text-[#F7F2E9]/70 mt-2 leading-relaxed">
                Register your salon shop. Get setup with our queue coordinator tablet and start accepting bookings today.
              </p>
            </div>
            <Link
              href="/for-partners"
              className="relative overflow-hidden group bg-brand-gradient text-white px-8 py-3 rounded-full font-heading font-bold text-xs shadow-md flex items-center gap-1.5 z-20"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
              <span className="relative z-20 flex items-center gap-1.5">
                Apply as Partner <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

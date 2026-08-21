"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sparkles, ShieldCheck } from "lucide-react";

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
    const rX = -(y - rect.height / 2) / rect.height * 10;
    const rY = (x - rect.width / 2) / rect.width * 10;
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s" : "none",
      }}
      className="bg-[#5A3D28] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(150px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(139, 105, 68, 0.2), transparent 80%)`
        }}
      />
      
      <div className="space-y-4 z-10 relative" style={{ transform: "translateZ(10px)" }}>
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
          {icon}
        </div>
        <div>
          <h4 className="font-heading font-bold text-base text-white">{title}</h4>
          <p className="text-xs text-[#F7F2E9]/70 mt-1 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="py-24 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] min-h-screen relative overflow-hidden text-[#F7F2E9]">

      {/* Premium background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-bold text-brand-gold uppercase tracking-wider shadow-[0_0_15px_rgba(139,105,68,0.25)] animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
            Our Story
          </span>
          <h1 className="text-5xl sm:text-6xl font-heading font-black text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            About GlooCare
          </h1>
          <p className="text-base text-[#F7F2E9] font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            We started in Gorakhpur to solve one simple problem — long waiting at salons. Our app helps customers save time and helps salon owners get more bookings.
          </p>
        </motion.div>        {/* Why We Built GlooCare - Luxury Grid Cards */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-heading font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Why We Built GlooCare
            </h2>
            <div className="h-1 w-20 bg-brand-gradient mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#5A3D28]/45 border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden group shadow-lg backdrop-blur-sm"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
              <div className="relative z-20 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <span className="font-heading font-extrabold text-sm">!</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">The Waiting Room Chaos</h3>
                <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
                  Every day, thousands of people go to salons and wait for 30 minutes to 1 hour — sometimes even more. There was no easy way to know the wait time or book a slot in advance, causing weekend frustrations.
                </p>
              </div>
            </motion.div>

            {/* Card 2: The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#5A3D28]/45 border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden group shadow-lg backdrop-blur-sm"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
              <div className="relative z-20 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">The GlooCare Solution</h3>
                <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
                  GlooCare solves this. Customers can see live wait times, book a slot, or request a stylist at home — all from one simple app. Salon owners get more bookings and can manage their shop queue easily.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Luxury Standalone Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-gold/5 via-brand-gold/15 to-brand-gold/5 border border-brand-gold/20 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-sm"
          >
            <span className="text-brand-gold font-heading text-6xl block mb-2 leading-none select-none opacity-50">&ldquo;</span>
            <p className="text-xl sm:text-2xl font-heading font-black text-white leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              We believed that getting a haircut shouldn&apos;t require losing half your weekend morning.
            </p>
            <div className="h-0.5 w-16 bg-brand-gold/30 mx-auto mt-6" />
          </motion.div>
        </div>

        {/* 3 Pillars Grid - Hover Glow 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MapPin className="w-5 h-5 text-brand-gold" />}
            title="Starting Local"
            desc="Started in Gorakhpur, UP. Built for local salons and barber shops here first."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Sparkles className="w-5 h-5 text-brand-gold" />}
            title="Simple & Smart"
            desc="Live wait time updates go directly from the salon tablet to the customer app."
            delay={0.2}
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-5 h-5 text-brand-gold" />}
            title="No Hidden Charges"
            desc="Only 10% commission for salon partners. No extra fees, no hidden costs."
            delay={0.3}
          />
        </div>

        {/* Local Call to Action Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#5A3D28] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
          <div className="relative z-20 space-y-6 flex flex-col items-center w-full">
            <h2 className="text-3xl font-heading font-black text-[#F7F2E9]">
              Come, Join GlooCare
            </h2>

            <p className="text-sm text-[#F7F2E9]/80 max-w-xl mx-auto leading-relaxed font-semibold">
              Are you a customer who wants a better salon experience? Or a salon owner who wants more bookings? Join GlooCare today — it is free and simple.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2 w-full">
              <Link
                href="/#download"
                className="relative overflow-hidden group bg-brand-gradient text-white px-8 py-3.5 rounded-full font-heading font-bold text-xs shadow-lg hover:scale-102 transition-transform"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
                <span className="relative z-20">Get Customer App</span>
              </Link>
              <Link
                href="/for-partners"
                className="relative overflow-hidden group px-8 py-3.5 rounded-full border border-brand-gold/30 bg-brand-brown/30 font-heading font-bold text-xs text-brand-gold hover:bg-brand-gold/10 transition-colors shadow-lg"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-brand-brown/10 to-transparent z-10 pointer-events-none" />
                <span className="relative z-20">Become a Partner</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

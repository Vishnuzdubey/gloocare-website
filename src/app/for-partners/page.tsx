"use client";

import React, { useState } from "react";
import LeadForm from "@/components/LeadForm";
import PartnerDashboardPreview from "@/components/PartnerDashboardPreview";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Wrench, 
  Clock, 
  Calendar, 
  Users,
  Sparkles
} from "lucide-react";

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
      className="bg-[#5A3D28] border border-white/10 p-6 rounded-2xl flex gap-4 hover:shadow-xl transition-shadow relative overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(150px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(139, 105, 68, 0.2), transparent 80%)`
        }}
      />
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 z-10 relative">
        {icon}
      </div>
      <div className="z-10 relative" style={{ transform: "translateZ(10px)" }}>
        <h4 className="font-heading font-bold text-sm text-white">{title}</h4>
        <p className="text-xs text-[#F7F2E9]/70 mt-1 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function ForPartners() {
  return (
    <div className="py-24 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] min-h-screen relative overflow-hidden">

      {/* Premium background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-bold text-brand-gold uppercase tracking-wider shadow-[0_0_15px_rgba(139,105,68,0.25)] animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
              Partner Hub
            </span>
            <h1 className="text-5xl sm:text-6xl font-heading font-black text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Grow Your Salon with GlooCare
            </h1>
            <p className="text-base text-[#F7F2E9] font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Connect your salon to GlooCare. Get more customers, manage walk-ins easily, and track your daily earnings — all from one simple tablet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <FeatureCard 
                icon={<Clock className="w-5 h-5 text-brand-gold" />}
                title="Live Queue Tracking"
                desc="Show real-time wait times to customers automatically. Let them join from home and arrive just in time."
                delay={0.1}
              />
              <FeatureCard 
                icon={<Wrench className="w-5 h-5 text-brand-gold" />}
                title="Full Onboarding Setup"
                desc="We handle your digital storefront setup, technical configuration, and provide dedicated partner support."
                delay={0.2}
              />
              <FeatureCard 
                icon={<Calendar className="w-5 h-5 text-brand-gold" />}
                title="Slots & Home Bookings"
                desc="Let customers book specific salon slots in advance or request premium home grooming services directly through the app."
                delay={0.3}
              />
              <FeatureCard 
                icon={<Users className="w-5 h-5 text-brand-gold" />}
                title="Staff Reports"
                desc="See which staff member is doing well based on customer ratings and number of services done."
                delay={0.4}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-[#5A3D28] rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
              <PartnerDashboardPreview />
            </div>
          </motion.div>
        </div>

        {/* Lead capture split layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="join" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[#5A3D28] rounded-3xl p-4 sm:p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-brand-gradient opacity-[0.01] -z-10" />
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-heading font-black text-white">
              Ready to grow your revenue?
            </h2>
            <p className="text-sm text-[#F7F2E9]/70 leading-relaxed font-semibold">
              Complete the partner application form. Our regional onboarding coordinator in Gorakhpur will review your details, call you back, and schedule a physical demo to set up your tablet.
            </p>
            
            <div className="space-y-4 pt-4">
              <h4 className="font-heading font-bold text-sm text-brand-gold uppercase tracking-wider">
                What Happens Next:
              </h4>
              <ul className="space-y-3 text-xs text-[#F7F2E9]/80 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 animate-pulse" /> 1. Submit application form
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 animate-pulse" /> 2. Onboarding team call within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 animate-pulse" /> 3. Tablet configuration & staff setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 animate-pulse" /> 4. Go Live in the GlooCare app catalog
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center w-full relative z-20">
            <div className="w-full bg-[#3D2B1F]/40 p-4 sm:p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
              <LeadForm />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

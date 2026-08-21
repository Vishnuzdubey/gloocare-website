"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TrendingUp, Users, Calendar, Award, ShieldCheck } from "lucide-react";

export default function PartnerDashboardPreview() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Create motion values for cursor tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform motion values to rotate coordinates
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate distance from center of the card
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center py-6">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-lg bg-glass-dark text-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative border border-brand-gold/20"
      >
        {/* Glow behind the dashboard */}
        <div className="absolute -inset-0.5 bg-brand-gradient opacity-10 rounded-3xl blur" />
        
        {/* Header */}
        <div className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:justify-between min-[400px]:items-center mb-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Partner Preview</span>
            <h3 className="text-xl font-heading font-extrabold text-[#F7F2E9]">
              The Groom Room
            </h3>
            <p className="text-xs text-[#F7F2E9]/80 mt-0.5">Gorakhpur Main Branch</p>
          </div>
          <div className="self-start min-[400px]:self-auto flex items-center gap-1.5 bg-brand-green/20 text-brand-green border border-brand-green/30 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" /> Live Queue Active
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 mb-6 relative z-10" style={{ transform: "translateZ(40px)" }}>
          <div className="bg-[#3A2E25] border border-brand-gold/10 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-[#F7F2E9]/80 mb-1.5">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-medium">Today&apos;s Bookings</span>
            </div>

            <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-baseline gap-1 min-[480px]:gap-2">
              <span className="text-2xl font-bold font-heading">24</span>
              <span className="text-[10px] text-brand-green font-bold flex items-center gap-0.5 whitespace-nowrap">
                <TrendingUp className="w-3 h-3" /> +18%
              </span>
            </div>
          </div>

          <div className="bg-[#3A2E25] border border-brand-gold/10 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-[#F7F2E9]/80 mb-1.5">
              <Users className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-medium">Queue Status</span>
            </div>
            <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-baseline gap-1 min-[480px]:gap-2">
              <span className="text-2xl font-bold font-heading">3 waiting</span>
              <span className="text-[10px] text-[#F7F2E9]/80 font-medium whitespace-nowrap">Est. 45 mins</span>
            </div>
          </div>
        </div>

        {/* Big Highlight Area */}
        <div className="bg-brand-gradient/10 border border-brand-gold/20 p-5 rounded-2xl mb-6 relative z-10" style={{ transform: "translateZ(50px)" }}>
          <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:justify-between min-[400px]:items-center mb-1">
            <span className="text-xs text-[#F7F2E9]/80">Estimated Payout Today</span>
            <span className="self-start min-[400px]:self-auto text-[10px] bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full font-bold whitespace-nowrap">In-Hand Setup</span>
          </div>
          <div className="text-3xl font-heading font-extrabold text-white">
            ₹8,450.00
          </div>
          <div className="mt-3 pt-3 border-t border-brand-gold/10 flex flex-col gap-1.5 min-[400px]:flex-row min-[400px]:justify-between text-[11px] text-[#F7F2E9]/80">
            <span>Commission Model: 10% Flat</span>
            <span className="text-brand-green font-bold flex items-center gap-1 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct to Account
            </span>
          </div>
        </div>

        {/* Live Active Staff Preview */}
        <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between text-xs text-[#F7F2E9]/80 relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-gold" />
            <span>Active Stylists: <strong className="text-white">4 Online</strong></span>
          </div>
          <span className="underline cursor-pointer hover:text-brand-gold transition-colors self-start min-[400px]:self-auto">Manage Staff</span>
        </div>
      </motion.div>
    </div>
  );
}

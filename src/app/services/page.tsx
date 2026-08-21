"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scissors, 
  Smile, 
  Droplet, 
  Users, 
  Heart, 
  Sparkles, 
  Flame, 
  MapPin, 
  Home as HomeIcon,
  ArrowRight,
  Info
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: "salon" | "home" | "both";
  description: string;
  icon: React.ReactNode;
  image: string;
  popular?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: "haircut",
    name: "Haircut & Styling",
    category: "both",
    description: "Clean cut as per your face and style. Includes shampoo, conditioning, and styling. Comes out looking fresh and sharp.",
    icon: <Scissors className="w-5 h-5 text-brand-gold" />,
    image: "/services/haircut.jpg",
    popular: true,
  },
  {
    id: "beard",
    name: "Beard Trim & Styling",
    category: "both",
    description: "Beard trim, clean shape, razor line, hot towel, and beard oil. Gives a neat and confident look.",
    icon: <Smile className="w-5 h-5 text-brand-gold" />,
    image: "/services/beard.jpg",
    popular: true,
  },
  {
    id: "hair-spa",
    name: "Hair Spa Treatment",
    category: "both",
    description: "Hot oil scalp massage, deep conditioning, and hair treatment to reduce dryness and hair fall. Good for hair health.",
    icon: <Droplet className="w-5 h-5 text-brand-gold" />,
    image: "/services/hair_spa.jpg",
  },
  {
    id: "grooming-pack",
    name: "Full Grooming Package",
    category: "both",
    description: "Haircut + beard shaping + face clean-up + massage. Best value combo for a complete fresh look.",
    icon: <Users className="w-5 h-5 text-brand-gold" />,
    image: "/services/grooming_pack.jpg",
    popular: true,
  },
  {
    id: "hair-color",
    name: "Hair Coloring",
    category: "salon",
    description: "Full color, highlights, or grey coverage using good-quality color that does not damage hair. Looks natural and long-lasting.",
    icon: <Sparkles className="w-5 h-5 text-brand-gold" />,
    image: "/services/hair_color.jpg",
  },
  {
    id: "facial-spa",
    name: "Face Clean-Up & Massage",
    category: "both",
    description: "Scrub, clean pores, charcoal pack, and face massage. Removes dirt and makes skin look fresh and glowing.",
    icon: <Heart className="w-5 h-5 text-brand-gold" />,
    image: "/services/facial_spa.jpg",
  },
  {
    id: "head-massage",
    name: "Head Massage at Home",
    category: "home",
    description: "Relaxing hot oil head massage at your home. Reduces stress, improves sleep, and feels very refreshing.",
    icon: <Flame className="w-5 h-5 text-brand-gold" />,
    image: "/services/head_massage.jpg",
  },
  {
    id: "wedding-groom",
    name: "Wedding Groom Special",
    category: "both",
    description: "Full makeover for grooms — haircut, face glow treatment, body massage, and hair set. Perfect for your wedding day look.",
    icon: <Sparkles className="w-5 h-5 text-brand-gold" />,
    image: "/services/wedding_groom.jpg",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "salon" | "home">("all");

  const filteredServices = servicesData.filter(
    (service) =>
      activeTab === "all" ||
      service.category === activeTab ||
      service.category === "both"
  );

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
            Service Catalog
          </span>
          <h1 className="text-5xl sm:text-6xl font-heading font-black text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Grooming Made Custom
          </h1>
          <p className="text-base text-[#F7F2E9] font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            From classic styles to luxury spa packages, discover the best styling options. Choose where you want it — book slots in verified partner salons or request premium stylists directly at home.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex justify-center mb-12 max-w-full">
          <div className="bg-[#5A3D28]/60 border border-white/10 p-1.5 rounded-full flex items-center shadow-sm overflow-x-auto no-scrollbar max-w-full whitespace-nowrap scroll-smooth">
            {[
              { id: "all", name: "All Services", icon: <Sparkles className="w-4 h-4" /> },
              { id: "salon", name: "Salon Visit", icon: <MapPin className="w-4 h-4" /> },
              { id: "home", name: "Home Service", icon: <HomeIcon className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | "salon" | "home")}
                className={`relative overflow-hidden group flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-heading font-bold transition-all shrink-0 ${
                  activeTab === tab.id
                    ? "bg-brand-brown text-white shadow-md"
                    : "text-[#F7F2E9]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeTab === tab.id ? (
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
                ) : (
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-brand-brown/10 to-transparent z-10 pointer-events-none" />
                )}
                <span className="relative z-20 flex items-center gap-1.5">
                  {tab.icon}
                  {tab.name}
                </span>
              </button>
            ))}

          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="bg-[#5A3D28] border border-white/10 rounded-3xl overflow-hidden hover:shadow-xl transition-all relative group flex flex-col justify-between"
              >
                {/* Soft Blurred Image Header Blending with BG Theme */}
                <div className="relative h-48 w-full overflow-hidden bg-[#3D2B1F]/30">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-70 filter blur-[2px] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:blur-none"
                  />
                  {/* Soft vignetting gradients to merge image seamlessly with card container */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3D28] via-[#5A3D28]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#5A3D28]/40 via-transparent to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#5A3D28] to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#5A3D28] to-transparent" />
                  
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-brand-gradient text-white text-[9px] font-heading font-extrabold uppercase px-3 py-1.5 rounded-full shadow-md tracking-wider z-20">
                      Popular
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-gold block">
                      {service.category === "both" 
                        ? "Salon & Home Service" 
                        : service.category === "home" 
                          ? "Home Service Only" 
                          : "Salon Visit Only"}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center scale-90">
                        {service.icon}
                      </span>
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#F7F2E9]/75 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#F7F2E9]/60">
                      Book nearby salon or home service
                    </span>
                    <Link
                      href="/#download"
                      className="flex items-center gap-1 text-xs font-heading font-bold text-brand-gold hover:text-white transition-colors group-hover:translate-x-0.5"
                    >
                      Download App <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pricing notice info */}
        <div className="bg-[#5A3D28] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
          <div className="flex items-start gap-4 relative z-20">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-1">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#F7F2E9]">
                Live Estimates & Exclusive Discounts in App
              </h4>
              <p className="text-xs text-[#F7F2E9]/80 mt-1 max-w-xl leading-relaxed">
                Service prices vary slightly based on the specific salon brand, stylist seniority level, and current festive discounts. Download the GlooCare app to track active slots and lock exact pricing.
              </p>
            </div>
          </div>
          <Link
            href="/#download"
            className="relative overflow-hidden group bg-brand-gradient text-[#F7F2E9] px-8 py-3 w-full md:w-auto text-center rounded-full font-heading font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform z-20"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
            <span className="relative z-20">Download App</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

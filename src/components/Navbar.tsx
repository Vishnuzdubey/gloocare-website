"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "For Partners", href: "/for-partners" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#3D2B1F]/95 backdrop-blur-md py-3 shadow-md border-b border-white/10" : "bg-[#3D2B1F]/60 backdrop-blur-sm py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group z-50">
              <Image
                src="/logo.png"
                alt="GlooCare Logo"
                width={36}
                height={36}
                className="object-contain rounded-lg"
                priority
              />
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#F7F2E9]">
                Gloo<span className="text-brand-gold">Care</span>
              </span>
            </Link>

            {/* Right Action + Bespoke Hamburger */}
            <div className="flex items-center gap-3 sm:gap-6 z-50">
              {/* Primary CTA (Always Visible) */}
              <Link
                href="/#download"
                className="relative overflow-hidden group px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-brand-gradient text-white font-heading font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
                <span className="relative z-20">Get the App</span>
              </Link>

              {/* Bespoke Hamburg Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex flex-col items-end justify-center gap-1.5 focus:outline-none group"
                aria-label="Toggle Menu"
              >
                {/* Asymmetric / tapered bar treatment matching G mark geometry */}
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6, width: "24px" } : { rotate: 0, y: 0, width: "28px" }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="h-[3px] bg-[#F7F2E9] rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1, width: "20px" }}
                  transition={{ duration: 0.2 }}
                  className="h-[3px] bg-[#F7F2E9] rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="h-[3px] bg-[#F7F2E9] rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Premium Matte Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#3D2B1F] flex flex-col justify-center px-6 sm:px-12 md:px-24"
          >
            {/* Matte textured pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(#F7F2E9_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

            <nav className="flex flex-col gap-6 max-w-lg">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative inline-flex items-center text-3xl sm:text-5xl font-heading font-extrabold text-[#F7F2E9] hover:text-brand-gold transition-colors py-2"
                    >
                      {link.name}
                      {/* Quiet gold underline that draws in on hover or active */}
                      <span className={`absolute bottom-0 left-0 h-[3px] bg-brand-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

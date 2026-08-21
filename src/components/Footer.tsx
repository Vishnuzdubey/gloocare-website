"use client";

import React from "react";
import Link from "next/link";
import { Send } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#F7F2E9]/80 pt-16 pb-8 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-brown rounded-xl flex items-center justify-center font-heading font-bold text-white text-lg border border-brand-gold/20">
                G
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                Gloo<span className="text-brand-gold">Care</span>
              </span>
            </Link>
            <p className="text-sm text-[#F7F2E9]/70 leading-relaxed mb-6">
              Skip the queue. Book your barber instantly. Experience seamless salon and barber booking at your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-gold transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner & Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">
              For Partners
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/for-partners" className="hover:text-brand-gold transition-colors">
                  Join as Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact form preview */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-[#F7F2E9]/70 mb-4">
              Subscribe to get grooming updates and early partner offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full bg-[#3A2E25] border border-brand-gold/10 rounded-full pl-4 pr-12 py-2.5 text-sm text-[#F7F2E9] placeholder-[#F7F2E9]/40 focus:outline-none focus:border-brand-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center text-white hover:scale-105 transition-transform"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3A2E25] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F7F2E9]/50">
          <div>
            <p>&copy; {new Date().getFullYear()} GlooCare. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#F7F2E9] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F7F2E9] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

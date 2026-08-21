"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    salonName: "",
    ownerName: "",
    phone: "",
    city: "Gorakhpur",
    type: "both",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full max-w-lg bg-[#3D2B1F] rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/10 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="lead-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="salonName" className="block text-xs font-heading font-bold text-[#F7F2E9] uppercase tracking-wider mb-1">
                Salon / Barber Shop Name
              </label>
              <input
                type="text"
                id="salonName"
                value={formData.salonName}
                onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                placeholder="e.g. The Grooming Lounge"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30"
                required
              />
            </div>

            <div>
              <label htmlFor="ownerName" className="block text-xs font-heading font-bold text-[#F7F2E9] uppercase tracking-wider mb-1">
                Contact Person Name
              </label>
              <input
                type="text"
                id="ownerName"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="e.g. Rahul Srivastava"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs font-heading font-bold text-[#F7F2E9] uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-xs font-heading font-bold text-[#F7F2E9] uppercase tracking-wider mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Gorakhpur"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-bold text-[#F7F2E9] uppercase tracking-wider mb-1">
                Type of Service Offered
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {["salon", "home", "both"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: t })}
                    className={`py-2.5 px-3 text-xs font-bold rounded-lg border capitalize transition-all ${
                      formData.type === t
                        ? "bg-brand-brown border-brand-brown text-white shadow-md"
                        : "bg-transparent border-white/10 text-white/85 hover:bg-white/5"
                    }`}
                  >
                    {t === "both" ? "Salon & Home" : t === "home" ? "Home Service" : "Salon Visit"}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden group py-3.5 rounded-xl font-heading font-bold text-sm text-white shadow-lg shadow-brand-brown/10 transition-all duration-300 mt-4"
            >
              <span className="absolute inset-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-105" />
              <span className="relative flex items-center justify-center gap-1.5 z-10">
                {loading ? "Submitting Application..." : "Submit Application"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10"
          >
            <div className="w-16 h-16 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-white mb-2">
              Application Received!
            </h3>
            <p className="text-sm text-[#F7F2E9]/80 leading-relaxed max-w-sm">
              Thank you for applying. A GlooCare onboarding specialist will contact you at <strong className="text-brand-gold">{formData.phone}</strong> within 24 hours to set up your tablet and dashboard.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-xs font-bold text-brand-gold hover:text-white transition-colors underline"
            >
              Submit another response
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

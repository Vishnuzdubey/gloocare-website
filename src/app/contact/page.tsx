"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="py-24 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] min-h-screen relative overflow-hidden text-[#F7F2E9]">

      {/* Premium background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-bold text-brand-gold uppercase tracking-wider shadow-[0_0_15px_rgba(139,105,68,0.25)] animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl font-heading font-black text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            We are here to help
          </h1>
          <p className="text-base text-[#F7F2E9] font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Have questions about the app, need partner integration support, or want to suggest a local salon in your sector? Reach out and we will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#5A3D28]/45 border border-white/10 p-4 sm:p-6 md:p-8 rounded-3xl space-y-6 relative overflow-hidden group shadow-lg backdrop-blur-sm">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
              <div className="relative z-20 space-y-6">
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-brand-gold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#F7F2E9]/60 uppercase font-bold tracking-wider">Email Support</p>
                      <a href="mailto:support@gloocare.in" className="text-sm font-semibold text-white hover:text-brand-gold transition-colors hover:underline">
                        support@gloocare.in
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-brand-gold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#F7F2E9]/60 uppercase font-bold tracking-wider">Call Coordinator</p>
                      <a href="tel:+919876543210" className="text-sm font-semibold text-white hover:text-brand-gold transition-colors hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-brand-gold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#F7F2E9]/60 uppercase font-bold tracking-wider">Corporate Office</p>
                      <p className="text-sm font-semibold text-white leading-relaxed">
                        Sector 4, Near Golghar, Gorakhpur, Uttar Pradesh - 273001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#5A3D28]/45 border border-white/10 text-white p-4 sm:p-6 md:p-8 rounded-3xl relative overflow-hidden group shadow-lg backdrop-blur-sm">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
              <div className="relative z-20">
                <h4 className="font-heading font-bold text-sm text-[#F7F2E9] uppercase tracking-wider mb-2">
                  Launch City Focus
                </h4>
                <p className="text-xs text-[#F7F2E9]/80 leading-relaxed font-semibold">
                  GlooCare is expanding rapidly. If you are a barber shop or spa owner outside of Gorakhpur interested in our booking platform, apply to get early waitlist updates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#5A3D28]/45 border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden group backdrop-blur-sm">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shine-once bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 relative z-20"
                  >
                    <h3 className="font-heading font-extrabold text-xl text-white mb-6">
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-heading font-bold text-[#F7F2E9]/70 uppercase tracking-wider mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aditi Roy"
                          className="w-full bg-[#3D2B1F]/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white placeholder-white/30 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[10px] font-heading font-bold text-[#F7F2E9]/70 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. aditi@gmail.com"
                          className="w-full bg-[#3D2B1F]/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white placeholder-white/30 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[10px] font-heading font-bold text-[#F7F2E9]/70 uppercase tracking-wider mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#3D2B1F] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white transition-colors"
                      >
                        <option value="support">Customer Support / Refund</option>
                        <option value="partner">Partner Tablet setup</option>
                        <option value="press">Press / Marketing Inquiry</option>
                        <option value="other">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-heading font-bold text-[#F7F2E9]/70 uppercase tracking-wider mb-1">
                        Message details
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your question or request here..."
                        className="w-full bg-[#3D2B1F]/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white placeholder-white/30 transition-colors"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full relative overflow-hidden group py-3.5 rounded-xl font-heading font-bold text-sm text-white shadow-lg shadow-brand-brown/10 transition-all duration-300 mt-4 cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-105" />
                      <span className="relative flex items-center justify-center gap-1.5 z-10">
                        {loading ? "Sending Message..." : "Send Message"}
                        {!loading && <Send className="w-4 h-4" />}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-msg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-[#F7F2E9]/80 leading-relaxed max-w-sm">
                      We have received your message. A coordinator will email you at <strong className="text-brand-gold">{formData.email}</strong> as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-xs font-bold text-brand-gold hover:text-white transition-colors underline"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

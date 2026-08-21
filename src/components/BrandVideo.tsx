"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function BrandVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => console.log("Video play interrupted", err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section ref={ref} className="py-24 bg-brand-cream overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-bold text-brand-gold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Brand Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#F7F2E9] tracking-tight">
            Crafting The Perfect Experience
          </h2>
          <p className="text-sm sm:text-base text-[#F7F2E9]/80 max-w-xl mx-auto leading-relaxed">
            Take a look behind the scenes at how GlooCare premium partners deliver flawless grooming sessions while keeping operations smooth and queue-free.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-brand-brown/10 shadow-2xl bg-[#1B1712] aspect-video group"
        >
          <video
            ref={videoRef}
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c022f73b3018a1a36e90e7435f347dfc&profile_id=139&oauth2_token_id=57447761"
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            onClick={togglePlay}
          />

          {/* Hover Control Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-20 h-20 rounded-full bg-white/95 text-[#F7F2E9] flex items-center justify-center shadow-2xl pointer-events-auto transform hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>
          </div>

          {/* Bottom Custom Control Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-black/80 transition-all flex items-center gap-2 text-xs font-bold shadow-md"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" /> Play Preview
                </>
              )}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-black/80 transition-all flex items-center justify-center shadow-md"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Initial Play Overlay (visible when not playing) */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer z-10" onClick={togglePlay}>
              <div className="w-16 h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-xl animate-pulse">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}

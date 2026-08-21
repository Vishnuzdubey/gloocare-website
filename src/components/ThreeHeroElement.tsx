"use client";

import React, { useEffect, useRef } from "react";

export default function ThreeHeroElement() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.008;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      // Floating orbs with matte brown/cream colors
      const orbs = [
        { x: w * 0.5, y: h * 0.45, r: 90, phase: 0, color1: "#6E4F2E", color2: "#8B6944" },
        { x: w * 0.35, y: h * 0.55, r: 55, phase: 1.2, color1: "#6E4F2E", color2: "#5A3D28" },
        { x: w * 0.65, y: h * 0.4, r: 45, phase: 2.4, color1: "#8B6944", color2: "#6E4F2E" },
        { x: w * 0.45, y: h * 0.3, r: 35, phase: 3.6, color1: "#5A3D28", color2: "#6E4F2E" },
        { x: w * 0.6, y: h * 0.65, r: 40, phase: 4.8, color1: "#6E4F2E", color2: "#8B6944" },
      ];

      // Draw ambient blurred orbs
      orbs.forEach((orb) => {
        const ox = orb.x + Math.sin(time + orb.phase) * 30;
        const oy = orb.y + Math.cos(time * 0.7 + orb.phase) * 20;
        const or = orb.r + Math.sin(time * 1.2 + orb.phase) * 10;

        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
        gradient.addColorStop(0, orb.color1 + "20");
        gradient.addColorStop(0.5, orb.color2 + "10");
        gradient.addColorStop(1, orb.color1 + "00");

        ctx.beginPath();
        ctx.arc(ox, oy, or, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Central torus-knot inspired shape using parametric curves
      ctx.save();
      ctx.translate(w * 0.5, h * 0.48);

      const scale = Math.min(w, h) * 0.28;
      const segments = 200;

      // Draw the main flowing ribbon
      for (let pass = 0; pass < 3; pass++) {
        ctx.beginPath();
        const offset = pass * 0.15;
        const alpha = [0.6, 0.35, 0.15][pass];

        for (let i = 0; i <= segments; i++) {
          const t = (i / segments) * Math.PI * 4;
          const r1 = 1 + 0.4 * Math.cos(t * 1.5 + time * 2 + offset);
          const px = r1 * Math.cos(t + time * 0.5) * scale * (0.7 + pass * 0.1);
          const py = r1 * Math.sin(t + time * 0.5) * scale * 0.45 + 
                     Math.sin(t * 2 + time) * scale * 0.15;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }

        const gradient = ctx.createLinearGradient(-scale, 0, scale, 0);
        gradient.addColorStop(0, "#6E4F2E");
        gradient.addColorStop(0.5, "#8B6944");
        gradient.addColorStop(1, "#5A3D28");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 - pass;
        ctx.globalAlpha = alpha;
        ctx.stroke();
      }

      // Draw floating dots along the curve
      ctx.globalAlpha = 1;
      for (let i = 0; i < 20; i++) {
        const t = (i / 20) * Math.PI * 4 + time * 0.8;
        const r1 = 1 + 0.4 * Math.cos(t * 1.5 + time * 2);
        const px = r1 * Math.cos(t + time * 0.5) * scale * 0.7;
        const py = r1 * Math.sin(t + time * 0.5) * scale * 0.45 + 
                   Math.sin(t * 2 + time) * scale * 0.15;
        
        const dotAlpha = 0.3 + 0.7 * Math.abs(Math.sin(t + time));
        const dotSize = 2 + Math.sin(t * 3 + time) * 1.5;

        ctx.beginPath();
        ctx.arc(px, py, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 79, 46, ${dotAlpha})`;
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full h-[350px] md:h-[450px] relative">
      {/* Ambient glowing background under the canvas */}
      <div className="absolute inset-0 bg-brand-brown/5 rounded-full blur-[100px] max-w-md mx-auto h-[300px] top-1/2 -translate-y-1/2" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}

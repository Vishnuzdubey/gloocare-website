"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import heavy client components
const QueueHero = dynamic(() => import("@/components/QueueHero"), { ssr: false });
const StoryStrip = dynamic(() => import("@/components/StoryStrip"), { ssr: false });
const CostOfChaos = dynamic(() => import("@/components/CostOfChaos"), { ssr: false });
const CapabilityShowcase = dynamic(() => import("@/components/CapabilityShowcase"), { ssr: false });
const ServicesRail = dynamic(() => import("@/components/ServicesRail"), { ssr: false });
const PartnerSpotlight = dynamic(() => import("@/components/PartnerSpotlight"), { ssr: false });
const AppHandoff = dynamic(() => import("@/components/AppHandoff"), { ssr: false });

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Living Queue Hero */}
      <QueueHero />

      {/* 2. Pinned Scroll Story Strip */}
      <StoryStrip />

      {/* 3. The Cost of Chaos */}
      <CostOfChaos />

      {/* 4. Interactive Capability Showcase */}
      <CapabilityShowcase />

      {/* 5. Services Scroll-Snap Rail */}
      <ServicesRail />

      {/* 6. Partner Spotlight Narrative */}
      <PartnerSpotlight />

      {/* 7. App Handoff */}
      <AppHandoff />
    </div>
  );
}

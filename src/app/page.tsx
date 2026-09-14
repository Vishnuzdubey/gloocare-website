"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Star } from "lucide-react";

interface Salon {
  id: string;
  name: string;
  image?: string | null;
  images?: string[];
  rating?: number | null;
  reviews?: number | null;
  distance?: number | null;
  address?: string | null;
  services?: string[];
  tags?: string[];
  priceRange?: string | null;
}

interface ApiResponse {
  success: boolean;
  data?: {
    salons?: Salon[];
    pagination?: {
      page: number;
      limit: number;
      total: number;
    };
  };
}

// Dynamically import heavy client components
const QueueHero = dynamic(() => import("@/components/QueueHero"), { ssr: false });
const StoryStrip = dynamic(() => import("@/components/StoryStrip"), { ssr: false });
const CostOfChaos = dynamic(() => import("@/components/CostOfChaos"), { ssr: false });
const CapabilityShowcase = dynamic(() => import("@/components/CapabilityShowcase"), { ssr: false });
const ServicesRail = dynamic(() => import("@/components/ServicesRail"), { ssr: false });
const PartnerSpotlight = dynamic(() => import("@/components/PartnerSpotlight"), { ssr: false });
const AppHandoff = dynamic(() => import("@/components/AppHandoff"), { ssr: false });

const SALON_PAGE_LIMIT = 6;

export default function Home() {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchSalons = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.gloocare.com/api/v1/user/salons?page=${page}&limit=${SALON_PAGE_LIMIT}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load salons");
        }

        const payload = (await response.json()) as ApiResponse;
        const items = payload?.data?.salons ?? [];
        const total = payload?.data?.pagination?.total ?? items.length;

        setSalons(items);
        setTotalPages(Math.max(1, Math.ceil(total / SALON_PAGE_LIMIT)));
      } catch (fetchError) {
        if ((fetchError as Error).name !== "AbortError") {
          setError("Unable to load salons right now. Please try again later.");
          setSalons([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchSalons();

    return () => controller.abort();
  }, [page]);

  const visibleServices = (salon: Salon) => {
    const services = salon.services?.filter(Boolean) ?? [];
    return services.length ? services.slice(0, 3) : ["Salon", "Barber", "Luxury Grooming"];
  };

  return (
    <div className="relative overflow-hidden">
      <QueueHero />
      <StoryStrip />
      <CostOfChaos />
      <CapabilityShowcase />
      <ServicesRail />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(216,176,122,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold shadow-[0_0_15px_rgba(216,176,122,0.15)]">
                <Sparkles className="h-3.5 w-3.5" />
                Featured salons
              </span>
              <h2 className="mt-4 font-heading text-4xl font-black tracking-tight text-white sm:text-5xl">
                Premium salons near you
              </h2>
            </div>

            <Link
              href="/#download"
              className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-xs font-heading font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Book your next visit
            </Link>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: SALON_PAGE_LIMIT }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse overflow-hidden rounded-[28px] border border-white/10 bg-[#5A3D28]/80"
                >
                  <div className="h-52 bg-white/10" />
                  <div className="space-y-3 p-5">
                    <div className="h-4 w-2/3 rounded bg-white/10" />
                    <div className="h-3 w-1/2 rounded bg-white/10" />
                    <div className="h-3 w-full rounded bg-white/10" />
                    <div className="h-3 w-5/6 rounded bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="rounded-[28px] border border-red-400/25 bg-[#3D2B1F] p-8 text-center text-sm text-[#F7F2E9]/80">
              {error}
            </div>
          ) : salons.length === 0 ? (
            <div className="rounded-[28px] border border-white/10 bg-[#5A3D28]/80 p-8 text-center text-sm text-[#F7F2E9]/80">
              No salons available right now. Please check back soon.
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {salons.map((salon) => {
                  const primaryImage = salon.image || salon.images?.[0] || "";
                  const initials = salon.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")
                    .toUpperCase();

                  return (
                    <motion.article
                      key={salon.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45 }}
                      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#5A3D28]/80 shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
                    >
                      <div className="relative h-52 overflow-hidden">
                        {primaryImage ? (
                          <img
                            src={primaryImage}
                            alt={salon.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#D8B07A] via-[#8B6944] to-[#3D2B1F] text-4xl font-heading font-black text-white">
                            {initials || "GS"}
                          </div>
                        )}

                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1B1712]/90 to-transparent" />

                        <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#1B1712]/40 px-2.5 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
                          <Star className="h-3 w-3 fill-[#D8B07A] text-[#D8B07A]" />
                          {salon.rating ? Number(salon.rating).toFixed(1) : "New"}
                          <span className="text-white/70">({salon.reviews ?? 0})</span>
                        </div>
                      </div>

                      <div className="space-y-4 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-heading text-xl font-black text-white">{salon.name}</h3>
                            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#F7F2E9]/70">
                              <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                              <span>{salon.address || "Location soon available"}</span>
                            </div>
                          </div>

                          {salon.distance !== null && salon.distance !== undefined ? (
                            <span className="rounded-full border border-brand-gold/20 bg-brand-gold/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-gold">
                              {salon.distance} km
                            </span>
                          ) : null}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {visibleServices(salon).map((service) => (
                            <span
                              key={`${salon.id}-${service}`}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F7F2E9]/75"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-white/10 pt-4">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#F7F2E9]/55">Price range</p>
                            <p className="mt-1 text-sm font-bold text-white">{salon.priceRange || "From ₹499"}</p>
                          </div>

                          <Link
                            href="/#download"
                            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-gold transition-colors hover:bg-brand-gold/20"
                          >
                            View salon
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPage((current) => Math.max(current - 1, 1))}
                    disabled={page === 1}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#5A3D28]/80 px-4 py-2 text-xs font-bold text-[#F7F2E9] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setPage(pageNumber)}
                      className={`h-10 w-10 rounded-full text-sm font-bold transition-colors ${
                        pageNumber === page
                          ? "bg-brand-gradient text-white shadow-lg"
                          : "border border-white/10 bg-[#5A3D28]/80 text-[#F7F2E9]/80 hover:text-white"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setPage((current) => Math.min(current + 1, totalPages))}
                    disabled={page === totalPages}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#5A3D28]/80 px-4 py-2 text-xs font-bold text-[#F7F2E9] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <PartnerSpotlight />
      <AppHandoff />
    </div>
  );
}

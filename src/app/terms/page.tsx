import React from "react";

export default function TermsOfService() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#5A3D28] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
        <h1 className="text-3xl font-heading font-extrabold text-[#F7F2E9] border-b border-brand-brown/10 pb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-[#F7F2E9]/80">Last updated: July 11, 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">1. Acceptance of Terms</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            By accessing this website or installing the GlooCare app, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">2. Description of Service</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            GlooCare is an intermediary platform connecting users (customers) with verified third-party salon and barber shops (partners). On-site bookings, schedule management, and payouts are conducted exclusively through the GlooCare mobile application.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">3. Partner Accounts</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            Salons must submit verified identification, business certificates, and details to register as partners. Commission charges are flat 10% on payments settled through the application. Partners must use the provided queue tablets responsibly and maintain accurate queue lengths.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">4. Limitation of Liability</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            GlooCare is not liable for service quality issues, no-shows, or physical incidents occurring on salon premises. Any booking disputes must be coordinated through our support team at <a href="mailto:support@gloocare.in" className="text-[#F7F2E9] underline">support@gloocare.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

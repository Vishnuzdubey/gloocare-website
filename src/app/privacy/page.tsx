import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#3D2B1F] via-[#4E3828] to-[#3D2B1F] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#5A3D28] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
        <h1 className="text-3xl font-heading font-extrabold text-[#F7F2E9] border-b border-brand-brown/10 pb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#F7F2E9]/80">Last updated: July 11, 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">1. Information We Collect</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            We collect information when you download our app, visit our website, register as a partner, or fill out our contact and partner forms. This may include your name, business details, phone number, email address, and approximate location coordinates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">2. How We Use Your Information</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            We use the information collected to:
          </p>
          <ul className="list-disc pl-5 text-sm text-[#F7F2E9]/80 space-y-1.5">
            <li>Process and coordinate your application to join our partner network.</li>
            <li>Connect customers with nearby partner salons through the GlooCare app.</li>
            <li>Provide real-time queue status notifications and updates.</li>
            <li>Respond to support tickets, inquiries, and customer feedback.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">3. Data Security</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            We implement standard encryption techniques to protect your data. GlooCare does not share your sensitive personal details with third-party advertising companies. Your details are shared only to facilitate grooming bookings on the GlooCare platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#F7F2E9]">4. Contact Us</h2>
          <p className="text-sm text-[#F7F2E9]/80 leading-relaxed">
            If you have questions about this Privacy Policy, contact us at: <a href="mailto:support@gloocare.in" className="text-[#F7F2E9] underline">support@gloocare.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

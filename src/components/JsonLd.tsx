export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.gloocare.com/#organization",
        name: "GlooCare",
        url: "https://www.gloocare.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.gloocare.com/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "GlooCare is a smart salon and barber booking platform offering live queue tracking, slot booking, and home grooming services.",
        sameAs: [
          "https://instagram.com/gloocare",
          "https://twitter.com/gloocare",
          "https://facebook.com/gloocare",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX",
          contactType: "Customer Support",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.gloocare.com/#website",
        url: "https://www.gloocare.com",
        name: "GlooCare — Skip the Queue. Book Your Barber Instantly.",
        publisher: {
          "@id": "https://www.gloocare.com/#organization",
        },
      },
      {
        "@type": "MobileApplication",
        name: "GlooCare",
        operatingSystem: "Android, iOS",
        applicationCategory: "LifestyleApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        description:
          "Skip the queue and book your barber instantly with live queue tracking, slot booking, and home grooming services.",
      },
      ...[
        {
          name: "Haircut",
          description:
            "Professional haircuts including classic cuts, fades, textured styles, and trendy transformations.",
        },
        {
          name: "Beard Styling",
          description:
            "Precision beard shaping, trimming, and grooming with hot towel and styling finishes.",
        },
        {
          name: "Hair Spa",
          description:
            "Deep conditioning hair spa treatments for damage repair, hydration, and scalp rejuvenation.",
        },
        {
          name: "Hair Coloring",
          description:
            "Professional coloring services including global color, highlights, and fashion shades.",
        },
        {
          name: "Head Massage",
          description:
            "Relaxing head and scalp massage with premium oils for stress relief and hair health.",
        },
        {
          name: "Home Service",
          description:
            "Premium grooming services delivered to your doorstep by verified stylists.",
        },
      ].map((service) => ({
        "@type": "Service",
        provider: {
          "@id": "https://www.gloocare.com/#organization",
        },
        name: service.name,
        description: service.description,
        areaServed: {
          "@type": "City",
          name: "Gorakhpur",
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

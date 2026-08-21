import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GlooCare - Skip the Queue, Book Instantly",
  description: "Smart salon & barber booking platform with live queue tracking, slot bookings, and home services. Skip the queue and experience premium grooming.",
  metadataBase: new URL("https://www.gloocare.com"),
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "GlooCare - Skip the Queue, Book Instantly",
    description: "Smart salon & barber booking platform with live queue tracking, slot bookings, and home services.",
    url: "https://www.gloocare.com",

    siteName: "GlooCare",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlooCare - Skip the Queue, Book Instantly",
    description: "Smart salon & barber booking platform with live queue tracking, slot bookings, and home services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans bg-[#3D2B1F] text-[#F7F2E9] antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

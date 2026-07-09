import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TopEventsSection } from "@/components/TopEventsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Ayushman Events",
  description: "Explore our portfolio of upcoming and past high-stakes events, from luxury weddings to enterprise summits.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto px-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-contrast tracking-tighter mb-6 uppercase">Our Operations</h1>
            <p className="text-lg text-contrast/60 font-medium">
                Explore our portfolio of upcoming and past high-stakes events, from luxury weddings to enterprise summits.
            </p>
        </div>
        
        <TopEventsSection />
        
      </main>
      <Footer />
    </div>
  );
}

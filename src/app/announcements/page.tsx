import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-contrast tracking-tighter mb-6 uppercase">Announcements</h1>
            <p className="text-lg text-contrast/60 font-medium">
                Stay updated with the latest news, press releases, and executive announcements from Ayushman Events.
            </p>
            <div className="mt-12 p-12 bg-white rounded-3xl border border-black/5 shadow-xl">
                <p className="text-contrast/40 font-bold uppercase tracking-widest text-sm">Coming Soon</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

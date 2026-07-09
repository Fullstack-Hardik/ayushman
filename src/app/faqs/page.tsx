import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-contrast tracking-tighter mb-6 uppercase">FAQs</h1>
            <p className="text-lg text-contrast/60 font-medium">
                Common inquiries regarding our luxury concierge and event production services.
            </p>
            <div className="mt-12 text-left space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Frequently Asked Question {i}?</h3>
                        <p className="text-contrast/60 text-sm">Our team is currently compiling the most relevant information to assist you better. Please check back later.</p>
                    </div>
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

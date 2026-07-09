import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGallery } from '@/components/ui/image-gallery';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Ayushman Events",
  description: "Explore our visual portfolio of impactful brand activations, events, and architectural milestones.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}

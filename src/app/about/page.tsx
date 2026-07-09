import React, { Suspense } from "react";
import GenerativeMountainScene from "@/components/ui/mountain-scene";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

import { AnimatedContainer } from '@/components/ui/animated-container';
import { FeatureCard, FeatureType } from '@/components/ui/grid-feature-cards';
import { Volume2, Megaphone, Palette, Monitor, Smartphone, PartyPopper } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | Ayushman Events",
  description: "Learn more about Ayushman Events, a premier luxury concierge and event production house dedicated to engineering bespoke experiences.",
};

// Capabilities / Services Grid
const SERVICES: FeatureType[] = [
	{
		title: 'Event Production',
		icon: Monitor,
		description: 'High-fidelity audio, dynamic lighting, and custom stage fabrication.',
	},
	{
		title: 'Brand Activations',
		icon: Megaphone,
		description: 'Connecting brands with audiences through immersive, live experiences.',
	},
	{
		title: 'Corporate Galas',
		icon: PartyPopper,
		description: 'Execution of high-stakes corporate networking events and awards.',
	},
    {
		title: 'Manpower Services',
		icon: Smartphone,
		description: 'Providing elite security, ushering, and specialized operational staff.',
	},
	{
		title: 'Digital Amplification',
		icon: Volume2,
		description: 'Event-specific social campaigns and digital footprint expansion.',
	},
	{
		title: 'Visual & Creative Design',
		icon: Palette,
		description: 'Powerful identity creation and scroll-stopping event visuals.',
	},
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full">
        {/* Mountain Scene Hero */}
        <section className="relative w-full h-[80vh] bg-surface overflow-hidden flex items-center justify-center">
          <Suspense fallback={<div className="w-full h-full bg-surface" />}>
            <GenerativeMountainScene />
          </Suspense>
          
          <div className="relative z-10 text-center max-w-4xl px-4 pointer-events-none mt-20">
              <h1 className="text-5xl md:text-7xl font-black text-contrast tracking-tighter mb-6 animate-in slide-in-from-bottom duration-1000 slide-in-from-bottom-8">
                  Architecting The Extraordinary
              </h1>
              <p className="text-xl md:text-2xl text-contrast/80 font-medium animate-in slide-in-from-bottom duration-1000 delay-300 slide-in-from-bottom-8 fill-mode-both">
                  We are Ayushman Events
              </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 bg-white text-contrast">
          <div className="container mx-auto px-6 max-w-[1200px]">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Who We Are</h2>
                      <div className="h-1 w-20 bg-accent mb-8"></div>
                      <p className="text-contrast/70 text-lg mb-6 leading-relaxed font-medium">
                          Ayushman Events is a premier luxury concierge and event production house dedicated to engineering bespoke experiences. We transcend traditional event planning by merging architectural design with high-fidelity curation.
                      </p>
                      <p className="text-contrast/70 text-lg mb-8 leading-relaxed font-medium">
                          From orchestrating exclusive milestone weddings and corporate galas to deploying large-scale brand activations, our methodology guarantees absolute exclusivity, unyielding precision, and white-glove service at every touchpoint.
                      </p>
                      <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-contrast px-8 text-sm font-bold tracking-widest uppercase text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                          Partner With Us
                      </Link>
                  </div>
                  <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-black/5 blur-2xl rounded-[3rem]"></div>
                      <img 
                          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" 
                          alt="Ayushman Events Execution" 
                          className="relative rounded-[2rem] shadow-2xl border border-black/5"
                          loading="lazy"
                      />
                  </div>
              </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 md:py-32 text-contrast relative z-20 bg-surface">
          <div className="mx-auto w-full max-w-6xl space-y-12 px-6 relative z-10">
              <AnimatedContainer className="max-w-3xl text-center mx-auto">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Capabilities</span>
                  <h2 className="text-4xl font-black tracking-tighter text-contrast md:text-6xl">
                      Architecting <span className="text-contrast/50">Dominance</span>
                  </h2>
                  <p className="text-contrast/70 mt-6 text-lg tracking-wide max-w-2xl mx-auto font-medium">
                      We dismantle standard industry limits to deliver bespoke experiences that command attention.
                  </p>
              </AnimatedContainer>

              <AnimatedContainer
                  delay={0.3}
                  className="grid grid-cols-1 divide-black/10 divide-y md:divide-x border border-black/10 rounded-[2rem] overflow-hidden sm:grid-cols-2 lg:grid-cols-3 bg-white/40 backdrop-blur-xl"
              >
                  {SERVICES.map((feature, i) => (
                      <FeatureCard key={i} feature={feature} />
                  ))}
              </AnimatedContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface border-t border-black/5">
          <div className="container mx-auto px-6 max-w-[1200px]">
              <div className="text-center mb-16">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Endorsements</span>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">Client Verification</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-10 rounded-[2rem] bg-white border border-black/5 hover:border-black/10 hover:shadow-xl transition-all">
                      <p className="text-lg text-contrast/70 font-medium mb-8 leading-relaxed">
                          "The precision and attention to detail at our annual summit were unprecedented. Ayushman Events didn't just organize an event; they architected a flawless brand experience."
                      </p>
                      <div className="flex items-center gap-4">
                          <div className="flex-1">
                              <h4 className="font-bold text-contrast tracking-tight">Executive Board</h4>
                              <p className="text-sm text-contrast/50 font-medium">Global Finance Summit</p>
                          </div>
                      </div>
                  </div>
                  <div className="p-10 rounded-[2rem] bg-white border border-black/5 hover:border-black/10 hover:shadow-xl transition-all">
                      <p className="text-lg text-contrast/70 font-medium mb-8 leading-relaxed">
                          "From the architectural floral design to the seamless hospitality, our luxury wedding was handled with absolute grace and exclusivity. A true masterclass."
                      </p>
                      <div className="flex items-center gap-4">
                          <div className="flex-1">
                              <h4 className="font-bold text-contrast tracking-tight">The Singh Family</h4>
                              <p className="text-sm text-contrast/50 font-medium">Private Royal Wedding</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

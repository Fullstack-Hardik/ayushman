"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import Aurora from '@/components/Aurora';
import Marquee from '@/components/Marquee';
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid';
import { FeatureCard, FeatureType } from '@/components/ui/grid-feature-cards';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { AnimatedContainer } from '@/components/ui/animated-container';
import { TopEventsSection } from '@/components/TopEventsSection';

import { 
    CalendarHeart, 
    Crown, 
    Sparkles, 
    Volume2, 
    Megaphone, 
    Palette,
    Monitor,
    Smartphone,
    PartyPopper
} from 'lucide-react';

import BlurText from '@/components/ui/BlurText';

// ... other imports remain unchanged ...

const HERO_BG_IMAGES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
];

// Methodology Bento Grid
const BENTO_FEATURES = [
  {
    name: "Luxury Weddings",
    description: "End-to-end curation of milestone experiences, tailored with absolute exclusivity.",
    href: "/services",
    cta: "Discover",
    Icon: CalendarHeart,
    className: "md:col-span-2 min-h-[400px] border border-black/5 bg-white/10 backdrop-blur-md",
    background: (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>
        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s] opacity-50 blur-sm group-hover:blur-0 group-hover:opacity-80" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" alt="Luxury Weddings" />
      </>
    )
  },
  {
    name: "Architectural Decor",
    description: "Immersive floral & structural styling.",
    href: "/services",
    cta: "Discover",
    Icon: Sparkles,
    className: "md:col-span-1 min-h-[400px] border border-black/5 bg-white/10 backdrop-blur-md",
    background: (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>
        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s] opacity-50 blur-sm group-hover:blur-0 group-hover:opacity-80" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" alt="Architectural Decor" />
      </>
    )
  },
  {
    name: "Elite Hospitality",
    description: "Uncompromising guest management and white-glove service standards.",
    href: "/services",
    cta: "Discover",
    Icon: Crown,
    className: "md:col-span-3 min-h-[300px] border border-black/5 bg-white/10 backdrop-blur-md",
    background: (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>
        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s] opacity-50 blur-[2px] group-hover:blur-0 group-hover:opacity-80" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80" alt="Elite Hospitality" />
      </>
    )
  }
];

// We removed SERVICES from here because it's being shifted to the About page.

const PROJECTS = [
  {
    quote: "Successfully architected and produced our annual summit with incredible precision and scale.",
    name: "Global Tech Summit",
    designation: "Enterprise Event",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
  },
  {
    quote: "The hospitality and stage setup was unlike anything we have seen. A true masterclass in luxury.",
    name: "The Royal Gala",
    designation: "Exclusive Dinner",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
  },
  {
    quote: "Managed a full-scale brand activation reaching millions across multiple cities.",
    name: "Urban Connect",
    designation: "Brand Activation",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-surface">
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-6 md:px-10 pt-40 pb-32 z-10 min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={HERO_BG_IMAGES[bgIndex]}
                alt="Luxury Event Background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="relative z-20 text-center max-w-[1000px] mx-auto mt-10">
          <BlurText 
            text="Ayushman Events"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-[12vw] sm:text-6xl md:text-[7rem] font-black tracking-tighter text-contrast leading-[0.95] drop-shadow-md mb-6 justify-center"
          />
          <BlurText 
            text="Architecting The Extraordinary."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-3xl font-medium leading-relaxed text-contrast/90 justify-center max-w-2xl mx-auto drop-shadow-sm"
          />
        </div>
      </section>

      <Marquee />

      {/* Methodology Section (Bento Grid) */}
      <section className="py-32 px-6 md:px-10 relative z-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Aurora 
            colorStops={["#4ADE80", "#A855F7", "#FBBF24"]} 
            blend={0.8} 
            amplitude={1.5} 
            speed={0.5} 
          />
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="mb-20 text-center">
            <AnimatedContainer>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-contrast">
                THE METHODOLOGY
                </h2>
                <p className="text-lg text-contrast/60 max-w-2xl mx-auto font-medium">
                Bespoke services engineered with unyielding precision.
                </p>
            </AnimatedContainer>
          </div>

          <AnimatedContainer delay={0.3}>
              <BentoGrid className="mx-auto">
                {BENTO_FEATURES.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
              </BentoGrid>
          </AnimatedContainer>
        </div>
      </section>

      {/* Top Events Section */}
      <TopEventsSection />

      {/* Testimonials / Projects Showcase */}
      <section className="py-24 md:py-32 relative bg-contrast text-surface z-20 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-20">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Verification</span>
                <h2 className="text-4xl font-black md:text-6xl tracking-tighter leading-tight uppercase">Industry Leaders <br/> <span className="text-surface/50">Calibrated</span></h2>
            </div>
            
            <AnimatedContainer delay={0.5} className="flex justify-center">
                <CircularTestimonials 
                    testimonials={PROJECTS} 
                    autoplay={true}
                    colors={{
                        name: "white",
                        designation: "#a1a1aa",
                        testimony: "#e4e4e7",
                        arrowBackground: "#27272a",
                        arrowForeground: "white",
                        arrowHoverBackground: "#facc15" // accent color
                    }}
                />
            </AnimatedContainer>
        </div>
      </section>

    </div>
  );
}

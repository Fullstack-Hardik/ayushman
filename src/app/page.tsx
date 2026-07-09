"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import Marquee from '@/components/Marquee';
import { FeatureCard, FeatureType } from '@/components/ui/grid-feature-cards';
import SkiperCarousel from '@/components/SkiperCarousel';
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
import GradientText from '@/components/ui/GradientText';
import CircularText from '@/components/ui/CircularText';
import { WebGLShader } from '@/components/ui/web-gl-shader';

// ... other imports remain unchanged ...

const HERO_BG_IMAGES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
];

const METHODOLOGY_STEPS = [
  {
    title: "Luxury Weddings",
    description: "End-to-end curation of milestone experiences, tailored with absolute exclusivity.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"
  },
  {
    title: "Architectural Decor",
    description: "Immersive floral & structural styling transforming raw spaces into magnificent environments.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
  },
  {
    title: "Elite Hospitality",
    description: "Uncompromising guest management and white-glove service standards for the most discerning clients.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80"
  }
];

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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-surface">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32 z-10 min-h-[65vh] md:min-h-[90vh] overflow-hidden">
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

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <WebGLShader className="opacity-25 md:opacity-40 mix-blend-screen w-[150%] h-[100%] md:w-[150%] md:h-[150%] max-w-none [mask-image:radial-gradient(circle_at_center,black_10%,transparent_50%)]" />
        </div>

        <div className="relative z-20 text-center max-w-[1000px] mx-auto mt-10 flex flex-col items-center w-full">
          <div className="relative inline-block items-center justify-center">
            <GradientText
              colors={["#9333EA", "#C026D3", "#DB2777", "#F472B6", "#9333EA"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[14vw] sm:text-6xl md:text-[8rem] font-serif font-black tracking-tighter leading-[0.9] drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-8 justify-center relative z-10"
            >
              Ayushman Events
            </GradientText>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-8 opacity-90 hover:opacity-100 transition-opacity">
            <CircularText
              text="ARCHITECTING*THE*EXTRAORDINARY*"
              onHover="speedUp"
              spinDuration={20}
              className="scale-90 md:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#contact" className="px-10 py-4 rounded-full bg-white text-black font-bold tracking-wider uppercase text-sm hover:scale-105 transition-transform duration-300 shadow-xl">
                Contact Us
              </a>
              <a href="#events" className="px-10 py-4 rounded-full border border-white/30 text-white font-bold tracking-wider uppercase text-sm hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-white/5">
                See Events
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Methodology Section */}
      <section className="py-32 px-6 md:px-10 relative z-20 overflow-hidden bg-surface">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-24 text-center">
            <AnimatedContainer>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-contrast">
                THE METHODOLOGY
                </h2>
                <p className="text-lg text-contrast/60 max-w-2xl mx-auto font-medium">
                Bespoke services engineered with unyielding precision.
                </p>
            </AnimatedContainer>
          </div>

          <div className="flex flex-col gap-24">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <AnimatedContainer delay={0.2} className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 group">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </AnimatedContainer>
                
                <AnimatedContainer delay={0.4} className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <span className="text-accent font-black tracking-[0.2em] uppercase text-sm">Step 0{idx + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight text-contrast">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-contrast/70 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </AnimatedContainer>
              </div>
            ))}
          </div>
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
            
            <AnimatedContainer delay={0.5} className="flex justify-center w-full">
                <SkiperCarousel 
                    images={PROJECTS.map(p => ({
                        src: p.src,
                        alt: p.name,
                        title: p.name
                    }))} 
                    autoplay={true}
                    loop={true}
                />
            </AnimatedContainer>
        </div>
      </section>

    </div>
  );
}

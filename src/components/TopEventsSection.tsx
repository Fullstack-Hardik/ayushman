"use client";

import React, { useState } from 'react';
import { AnimatedContainer } from './ui/animated-container';
import { Calendar, MapPin, ArrowRight, X } from 'lucide-react';

const TOP_EVENTS = [
  {
    id: 1,
    title: 'The Royal Gala Symphony',
    date: 'Dec 15, 2026',
    location: 'The Grand Palace, Mumbai',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
    description: 'An exclusive, invitation-only symphony and networking dinner for top industry leaders.',
  },
  {
    id: 2,
    title: 'Tech Summit Innovators',
    date: 'Jan 22, 2027',
    location: 'Cyber Hub Convention, Delhi',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    description: 'A premium showcase of upcoming technologies with keynotes from global founders.',
  },
  {
    id: 3,
    title: 'Elite Wedding Showcase',
    date: 'Feb 10, 2027',
    location: 'Taj Lands End, Mumbai',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    description: 'A curated exhibition of architectural decoration and luxury wedding management services.',
  }
];

export function TopEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inquiry submitted successfully! Our team will contact you shortly.');
    setSelectedEvent(null);
  };

  return (
    <section className="py-24 md:py-32 relative bg-surface/50">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <AnimatedContainer className="max-w-xl">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block italic">Featured</span>
                <h2 className="text-4xl font-black text-contrast md:text-6xl tracking-tighter uppercase italic">Upcoming Top Events</h2>
            </AnimatedContainer>
            <AnimatedContainer delay={0.2}>
                <a href="/events" className="group flex items-center gap-3 text-contrast/70 hover:text-contrast transition-all font-bold">
                    <span className="text-[11px] uppercase tracking-[0.2em]">View All Operations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </AnimatedContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOP_EVENTS.map((event, index) => (
                <AnimatedContainer key={event.id} delay={0.1 * (index + 1)}>
                    <div 
                        className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-black/5 flex flex-col h-full cursor-pointer hover:shadow-2xl transition-all duration-500"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-black tracking-tight mb-3 text-contrast leading-tight">{event.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-contrast/60 mb-6 font-medium">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                            </div>
                            <p className="text-contrast/70 text-sm leading-relaxed mb-8 flex-grow">{event.description}</p>
                            
                            <button className="mt-auto w-full py-3 rounded-xl bg-contrast text-white font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors">
                                Inquire Now
                            </button>
                        </div>
                    </div>
                </AnimatedContainer>
            ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <AnimatedContainer className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative">
                <button 
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors z-10"
                >
                    <X className="w-5 h-5 text-contrast" />
                </button>
                
                <div className="h-32 relative">
                    <img src={selectedEvent.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1 block">Inquiry For</span>
                        <h3 className="text-xl font-black">{selectedEvent.title}</h3>
                    </div>
                </div>

                <div className="p-8">
                    <form onSubmit={handleInquirySubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-contrast/60 mb-2">Full Name</label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-surface border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-contrast/60 mb-2">Email</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-surface border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-contrast/60 mb-2">Phone</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-surface border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="+91 99999 99999" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-contrast/60 mb-2">Guest Count (Est.)</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-surface border border-black/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all">
                                <option>Less than 100</option>
                                <option>100 - 500</option>
                                <option>500 - 1000</option>
                                <option>1000+</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-accent text-contrast font-black tracking-widest uppercase hover:bg-contrast hover:text-white transition-colors shadow-lg">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </AnimatedContainer>
        </div>
      )}
    </section>
  );
}

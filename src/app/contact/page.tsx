"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-10 bg-surface/50 text-contrast flex items-center justify-center">
      <div className="max-w-[800px] w-full text-center py-24 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-black/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
        >
          INITIATE CONTACT
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-contrast/60 mb-10"
        >
          Connect with Élite Concierge for your next extraordinary event.
        </motion.p>
        
        <div className="space-y-6 text-left max-w-[500px] mx-auto">
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest mb-2">Full Name</label>
            <input type="text" className="w-full bg-white border border-contrast/10 p-4 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="e.g. John Doe" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email Address</label>
            <input type="email" className="w-full bg-white border border-contrast/10 p-4 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="contact@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest mb-2">Inquiry</label>
            <textarea rows={4} className="w-full bg-white border border-contrast/10 p-4 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="How can we assist you?"></textarea>
          </div>
          <button className="w-full bg-contrast text-white font-bold tracking-widest uppercase p-4 rounded-lg hover:bg-black transition-colors">
            Submit Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}

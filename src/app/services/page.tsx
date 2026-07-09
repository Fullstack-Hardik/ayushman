"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-10 bg-surface/50 text-contrast">
      <div className="max-w-[1200px] mx-auto text-center py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
        >
          METHODOLOGY & SERVICES
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-contrast/60"
        >
          Detailed services - Coming Soon
        </motion.p>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-10 bg-surface/50 text-contrast">
      <div className="max-w-[1200px] mx-auto py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black tracking-tighter mb-10"
        >
          TERMS OF SERVICE
        </motion.h1>
        <div className="prose prose-lg">
          <p>Terms of service for Ayushman Events will be placed here.</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Typewriter({
  text,
  className = "",
  delay = 0,
  speed = 0.05
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const words = text.split(" ");
  
  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block" },
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

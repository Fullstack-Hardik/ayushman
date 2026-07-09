"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type ViewAnimationProps = {
	delay?: number;
	className?: string;
	children: React.ReactNode;
};

export function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ translateY: 20, opacity: 0 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			viewport={{ once: true, margin: "300px" }}
			transition={{ delay, duration: 0.3, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

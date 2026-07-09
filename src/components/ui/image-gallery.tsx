"use client";

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';

const sampleImages = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531498860502-7c67cf41c3ed?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1920&auto=format&fit=crop"
];

export function ImageGallery() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
            <div className="mb-16 text-center text-contrast">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
                    Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/50">Portfolio</span>
                </h1>
                <p className="text-lg md:text-xl text-contrast/60 max-w-2xl mx-auto font-medium">
                    A curated showcase of our most impactful brand activations, events, and architectural milestones.
                </p>
                <div className="mt-8 h-px bg-black/10 w-full max-w-md mx-auto"></div>
            </div>
			<div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 3 }).map((_, col) => (
					<div key={col} className="grid gap-6 auto-rows-max">
						{Array.from({ length: 4 }).map((_, index) => {
							const isPortrait = Math.random() > 0.5;
							const ratioClass = isPortrait ? "aspect-[3/4]" : "aspect-[4/3]";
                            const imgSrc = sampleImages[(col * 4 + index) % sampleImages.length];

							return (
								<AnimatedImage
									key={`${col}-${index}`}
									alt={`Project Image ${col}-${index}`}
									src={imgSrc}
									ratioClass={ratioClass}
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}

interface AnimatedImageProps {
	alt: string;
	src: string;
	ratioClass: string;
}

function AnimatedImage({ alt, src, ratioClass }: AnimatedImageProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "100px" });
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div
			ref={ref}
			className={cn(
                "relative w-full rounded-2xl overflow-hidden bg-surface border border-black/5 hover:border-black/20 transition-colors duration-500",
                ratioClass
            )}
		>
			<img 
				alt={alt}
				src={src}
				className={cn(
					'w-full h-full object-cover opacity-0 transition-all duration-1000 ease-in-out hover:scale-105',
					{
						'opacity-100': isInView && !isLoading,
					},
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
			/>
		</div>
	);
}

"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

const SkiperCarousel = ({
  images,
  className,
  showPagination = false,
  showNavigation = true,
  loop = true,
  autoplay = true,
  spaceBetween = 40,
}: {
  images: CarouselImage[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("w-full relative max-w-[1200px] mx-auto", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.43 }
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!h-[320px] md:!h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative w-full h-full">
              <img
                className="h-full w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
              {image.title && (
                <div className="absolute bottom-6 left-0 flex w-full items-center justify-center p-2 text-center font-bold tracking-tight text-white text-xl md:text-3xl drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                  {image.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:bg-white/40 transition">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 hover:bg-white/40 transition">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export default SkiperCarousel;

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
  .swiper-slide {
    transition: filter 0.5s ease;
  }
  .swiper-slide:not(.swiper-slide-active) {
    filter: blur(3px) brightness(0.6);
  }
  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    color: black;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: background 0.2s;
    z-index: 10;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    background: white;
  }
  .swiper-button-next {
    right: 20px;
  }
  .swiper-button-prev {
    left: 20px;
  }
  @media (min-width: 768px) {
    .swiper-button-next { right: 40px; }
    .swiper-button-prev { left: 40px; }
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
                delay: 1100,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={2.2}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 150,
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
          <SwiperSlide key={index} className="!h-[400px] md:!h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              <img
                className="h-full w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
              {image.title && (
                <div className="absolute bottom-6 left-0 flex w-full items-center justify-center p-2 text-center font-bold tracking-tight text-white text-xl md:text-3xl drop-shadow-lg">
                  {image.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        
        {showNavigation && (
          <>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6" />
            </div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6" />
            </div>
          </>
        )}
      </Swiper>
    </motion.div>
  );
};

export default SkiperCarousel;

"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

interface ParallaxSectionBgProps {
  src: string;
  alt: string;
  opacity?: number;
  overlayGradient?: string;
}

export default function ParallaxSectionBg({ 
  src, 
  alt, 
  opacity = 0.85,
  overlayGradient = "from-[#080B12] via-transparent to-[#080B12]"
}: ParallaxSectionBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax motion: translates image vertically and scales subtly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ 
          y, 
          scale,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)'
        }} 
        className="absolute -inset-y-28 inset-x-0 w-full h-[150%] transform-gpu will-change-transform"
      >
        <Image 
          src={src} 
          alt={alt}
          fill
          priority={src.includes('nature_hero_bg')}
          quality={90}
          className="object-cover object-center"
          style={{ opacity }}
        />
      </motion.div>

      {/* Top and Bottom Seamless Feathering Gradient Layers */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#080B12] via-[#080B12]/70 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080B12] via-[#080B12]/70 to-transparent pointer-events-none z-10" />

      {/* Radial overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${overlayGradient} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(8,11,18,0.4)_60%,#080B12_98%)]" />
    </div>
  );
}

"use client";
import { motion } from 'motion/react';
import { COLORS } from '@/constants';

export default function AnimatedShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large circle */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 10, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-64 h-64 lg:w-96 lg:h-96 border-[20px] lg:border-[32px] border-black rounded-full opacity-[0.03] lg:opacity-[0.05]"
      />
      
      {/* Square */}
      <motion.div 
        animate={{ 
          y: [0, 30, 0], 
          rotate: [0, -10, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-48 h-48 lg:w-72 lg:h-72 border-[20px] lg:border-[32px] border-black opacity-[0.03] lg:opacity-[0.05]"
      />

      {/* Cross/Plus */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [15, 30, 15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[20%] w-20 h-20 lg:w-32 lg:h-32 opacity-[0.04] lg:opacity-[0.06]"
      >
        <div className="absolute top-1/2 left-0 w-full h-[16px] lg:h-[24px] bg-black -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[16px] lg:h-full lg:w-[24px] bg-black -translate-x-1/2" />
      </motion.div>
      
      {/* Diagonal lines / squiggles approx */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] left-[15%] opacity-[0.03] lg:opacity-[0.05] flex gap-4 rotate-12"
      >
        <div className="w-2 h-32 lg:w-4 lg:h-48 bg-black rounded-full" />
        <div className="w-2 h-32 lg:w-4 lg:h-48 bg-black rounded-full mt-8" />
        <div className="w-2 h-32 lg:w-4 lg:h-48 bg-black rounded-full mt-16" />
      </motion.div>
    </div>
  );
}

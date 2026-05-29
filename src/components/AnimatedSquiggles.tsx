"use client";
import { motion } from 'motion/react';

export default function AnimatedSquiggles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] opacity-[0.05] w-48 h-24"
      >
        <svg viewBox="0 0 200 100" width="100%" height="100%">
           <path d="M 10,50 Q 50,10 100,50 T 190,50" fill="none" stroke="black" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[5%] opacity-[0.05] w-64 h-32"
      >
        <svg viewBox="0 0 200 100" width="100%" height="100%">
           <path d="M 10,50 Q 50,90 100,50 T 190,50" fill="none" stroke="black" strokeWidth="8" strokeLinecap="round" />
           <path d="M 10,20 Q 50,60 100,20 T 190,20" fill="none" stroke="black" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[50%] right-[85%] opacity-[0.04] w-32 h-32"
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
           <path d="M 20,20 Q 50,-10 80,20 T 50,80 T 20,20" fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[70%] left-[80%] opacity-[0.04] w-40 h-40"
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
           <path d="M 10,30 Q 30,10 50,50 T 90,30" fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" />
           <path d="M 10,70 Q 30,50 50,90 T 90,70" fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}

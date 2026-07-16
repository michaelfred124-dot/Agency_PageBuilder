import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const BioSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center md:items-start p-4 md:p-12 shrink-0 overflow-y-auto scrollbar-hide">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}

        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-3 md:mb-10 w-20 h-20 md:w-48 md:h-48"
      >
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
          alt="Profile" 
          className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/10"
        />
        <div className="absolute -bottom-0.5 -right-0.5 md:-bottom-2 md:-right-2 w-6 h-6 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
           <Sparkles className="w-3 h-3 md:w-6 md:h-6 text-yellow-500" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-2xl md:text-6xl font-bold tracking-tighter mb-2 md:mb-6 font-display flex items-center gap-1.5 md:gap-3">
          Elitza Vasileva
          <span className="text-xl md:text-4xl text-yellow-500">✨</span>
        </h1>
        <p className="text-xs md:text-xl text-black/60 font-medium mb-4 md:mb-12 max-w-[280px] md:max-w-[320px] leading-relaxed">
          Working on my products while travelling the world! 🌍
        </p>

        <ul className="flex flex-wrap md:flex-col justify-center md:justify-start gap-1.5 md:gap-4 max-w-sm md:max-w-none">
          <li className="flex items-center gap-1.5 md:gap-4 text-[11px] md:text-lg font-bold text-black/80 bg-white/60 md:bg-transparent border border-black/5 md:border-none px-2.5 py-1 md:p-0 rounded-full md:rounded-none shadow-sm md:shadow-none">
            <span className="w-5.5 h-5.5 md:w-10 md:h-10 rounded-md md:rounded-xl bg-purple-100 flex items-center justify-center text-[10px] md:text-xl">🎵</span>
            Music lover
          </li>
          <li className="flex items-center gap-1.5 md:gap-4 text-[11px] md:text-lg font-bold text-black/80 bg-white/60 md:bg-transparent border border-black/5 md:border-none px-2.5 py-1 md:p-0 rounded-full md:rounded-none shadow-sm md:shadow-none">
            <span className="w-5.5 h-5.5 md:w-10 md:h-10 rounded-md md:rounded-xl bg-orange-100 flex items-center justify-center text-[10px] md:text-xl">🍣</span>
            Food lover
          </li>
          <li className="flex items-center gap-1.5 md:gap-4 text-[11px] md:text-lg font-bold text-black/80 bg-white/60 md:bg-transparent border border-black/5 md:border-none px-2.5 py-1 md:p-0 rounded-full md:rounded-none shadow-sm md:shadow-none">
            <span className="w-5.5 h-5.5 md:w-10 md:h-10 rounded-md md:rounded-xl bg-yellow-100 flex items-center justify-center text-[10px] md:text-xl">💪</span>
            Gym lover
          </li>
          <li className="flex items-center gap-1.5 md:gap-4 text-[11px] md:text-lg font-bold text-black/80 bg-white/60 md:bg-transparent border border-black/5 md:border-none px-2.5 py-1 md:p-0 rounded-full md:rounded-none shadow-sm md:shadow-none">
            <span className="w-5.5 h-5.5 md:w-10 md:h-10 rounded-md md:rounded-xl bg-blue-100 flex items-center justify-center text-[10px] md:text-xl">🎨</span>
            Creative Mind
          </li>
          <li className="flex items-center gap-1.5 md:gap-4 text-[11px] md:text-lg font-bold text-black/80 bg-white/60 md:bg-transparent border border-black/5 md:border-none px-2.5 py-1 md:p-0 rounded-full md:rounded-none shadow-sm md:shadow-none">
            <span className="w-5.5 h-5.5 md:w-10 md:h-10 rounded-md md:rounded-xl bg-green-100 flex items-center justify-center text-[10px] md:text-xl">✈️</span>
            Travel Enthusiast
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

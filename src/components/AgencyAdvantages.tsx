"use client";
import { motion } from 'motion/react';
import { RefreshCcw, HandCoins, Users, Rocket } from 'lucide-react';
import { COLORS } from '@/constants';
import AnimatedShapes from './AnimatedShapes';

const QUALITIES = [
  {
    icon: RefreshCcw,
    title: 'Pause or Cancel Anytime',
    description: 'No long-term contracts. Don\'t have enough work for the month? Simply pause your subscription and resume when you do.',
    color: COLORS.green
  },
  {
    icon: HandCoins,
    title: 'Flat Monthly Rate',
    description: 'No surprise bills, hourly rates, or endless negotiations. You pay the exact same flat fee every single month.',
    color: COLORS.blue
  },
  {
    icon: Users,
    title: 'Your Dedicated Team',
    description: 'Stop playing roulette with freelancers. Get design and development from a senior-level team that learns your brand perfectly.',
    color: COLORS.yellow
  },
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Submit a request and get it back in an average of 48 hours. We iterate rapidly until you are 100% satisfied with the result.',
    color: COLORS.pink
  }
];

export default function AgencyAdvantages() {
  return (
    <section className="py-20 lg:py-32 bg-white text-zinc-900 px-4 lg:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-advantages" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-advantages)" />
        </svg>
      </div>

      {/* Decorative Floating Shapes */}
      <AnimatedShapes />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col space-y-4 mb-16 lg:mb-24 text-center items-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-405 text-zinc-400">The Advantages</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none max-w-4xl text-zinc-950">
            Why choose <span style={{ color: COLORS.purple }}>our agency?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 lg:p-12 rounded-3xl border-2 border-zinc-950 bg-white transition-all group lg:hover:-translate-y-1 lg:hover:translate-x-1 relative overflow-hidden"
            style={{ boxShadow: `4px 4px 0px rgba(9,9,11,1)` }}
          >
            <div className="relative z-10 w-full md:w-3/5">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border-2 border-zinc-950 shadow-[2.5px_2.5px_0px_rgba(9,9,11,1)]"
                style={{ backgroundColor: COLORS.green }}
              >
                <RefreshCcw className="w-6 h-6 text-zinc-950" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-3xl font-extrabold uppercase tracking-tight mb-4 text-zinc-950">
                Pause or Cancel Anytime
              </h3>
              <p className="text-zinc-650 font-normal text-base leading-relaxed">
                No long-term contracts. Don't have enough work for the month? Simply pause your subscription and resume when you do.
              </p>
            </div>
            
            <div className="absolute right-0 bottom-0 top-0 w-2/5 hidden md:block">
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover border-l-2 border-zinc-950 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Collaboration" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 p-8 lg:p-12 rounded-3xl border-2 border-zinc-950 bg-white transition-all group lg:hover:-translate-y-1 lg:hover:translate-x-1 flex flex-col justify-between"
            style={{ boxShadow: `4px 4px 0px rgba(9,9,11,1)` }}
          >
             <div>
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border-2 border-zinc-950 shadow-[2.5px_2.5px_0px_rgba(9,9,11,1)]"
                style={{ backgroundColor: COLORS.blue }}
              >
                <HandCoins className="w-6 h-6 text-zinc-950" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-extrabold uppercase tracking-tight mb-4 text-zinc-950">
                Flat Monthly Rate
              </h3>
              <p className="text-zinc-650 font-normal text-base leading-relaxed mb-6">
                No surprise bills, hourly rates, or endless negotiations. You pay the exact same flat fee every single month.
              </p>
             </div>
             <div className="w-full h-28 rounded-xl border-2 border-zinc-950 border-dashed overflow-hidden flex items-center justify-center bg-zinc-50">
                <span className="text-xl font-extrabold text-zinc-400">$0 Hidden fees</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 p-8 lg:p-12 rounded-3xl border-2 border-zinc-950 bg-white transition-all group lg:hover:-translate-y-1 lg:hover:translate-x-1"
            style={{ boxShadow: `4px 4px 0px rgba(9,9,11,1)` }}
          >
             <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border-2 border-zinc-950 shadow-[2.5px_2.5px_0px_rgba(9,9,11,1)]"
                style={{ backgroundColor: COLORS.yellow }}
              >
                <Users className="w-6 h-6 text-zinc-950" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-extrabold uppercase tracking-tight mb-4 text-zinc-950">
                Your Dedicated Team
              </h3>
              <p className="text-zinc-650 font-normal text-base leading-relaxed">
                Stop playing roulette with freelancers. Get design and development from a senior-level team that learns your brand perfectly.
              </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 p-8 lg:p-12 rounded-3xl border-2 border-zinc-950 bg-white transition-all group lg:hover:-translate-y-1 lg:hover:translate-x-1 relative overflow-hidden"
            style={{ boxShadow: `4px 4px 0px rgba(9,9,11,1)` }}
          >
            <div className="relative z-10 w-full md:w-1/2">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border-2 border-zinc-950 shadow-[2.5px_2.5px_0px_rgba(9,9,11,1)]"
                style={{ backgroundColor: COLORS.pink }}
              >
                <Rocket className="w-6 h-6 text-zinc-950" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl lg:text-3xl font-extrabold uppercase tracking-tight mb-4 text-zinc-950">
                Lightning Fast
              </h3>
              <p className="text-zinc-650 font-normal text-base leading-relaxed">
                Submit a request and get it back in an average of 48 hours. We iterate rapidly until you are 100% satisfied with the result.
              </p>
            </div>
            
            <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover border-l-2 border-zinc-950 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Performance dashboard" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

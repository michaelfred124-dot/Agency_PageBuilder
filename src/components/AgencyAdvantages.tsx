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
    <section className="py-20 lg:py-32 bg-[#F1EDE1] text-black px-4 lg:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-advantages" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-advantages)" />
        </svg>
      </div>

      {/* Decorative Floating Shapes */}
      <AnimatedShapes />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col space-y-4 mb-16 lg:mb-24 text-center items-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">The Advantages</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl text-black">
            Why choose <span style={{ color: COLORS.purple }}>our agency?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 lg:p-12 rounded-[32px] border-[6px] lg:border-8 border-black bg-white transition-all group lg:hover:-translate-y-2 lg:hover:translate-x-2 relative overflow-hidden"
            style={{ boxShadow: `12px 12px 0px ${COLORS.black}` }}
          >
            <div className="relative z-10 w-full md:w-3/5">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-[4px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: COLORS.green }}
              >
                <RefreshCcw className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter mb-4 text-black">
                Pause or Cancel Anytime
              </h3>
              <p className="text-black/70 font-medium text-lg leading-relaxed">
                No long-term contracts. Don't have enough work for the month? Simply pause your subscription and resume when you do.
              </p>
            </div>
            
            <div className="absolute right-0 bottom-0 top-0 w-2/5 hidden md:block">
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover border-l-[6px] lg:border-l-8 border-black grayscale group-hover:grayscale-0 transition-all duration-500" alt="Collaboration" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 p-8 lg:p-12 rounded-[32px] border-[6px] lg:border-8 border-black bg-white transition-all group lg:hover:-translate-y-2 lg:hover:translate-x-2 flex flex-col justify-between"
            style={{ boxShadow: `12px 12px 0px ${COLORS.black}` }}
          >
             <div>
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-[4px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: COLORS.blue }}
              >
                <HandCoins className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 text-black">
                Flat Monthly Rate
              </h3>
              <p className="text-black/70 font-medium text-lg leading-relaxed mb-6">
                No surprise bills, hourly rates, or endless negotiations. You pay the exact same flat fee every single month.
              </p>
             </div>
             <div className="w-full h-32 rounded-2xl border-4 border-black border-dashed overflow-hidden flex items-center justify-center bg-black/5">
                <span className="text-3xl font-black opacity-30">$0 Hidden fees</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 p-8 lg:p-12 rounded-[32px] border-[6px] lg:border-8 border-black bg-white transition-all group lg:hover:-translate-y-2 lg:hover:translate-x-2"
            style={{ boxShadow: `12px 12px 0px ${COLORS.black}` }}
          >
             <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-[4px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: COLORS.yellow }}
              >
                <Users className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 text-black">
                Your Dedicated Team
              </h3>
              <p className="text-black/70 font-medium text-lg leading-relaxed">
                Stop playing roulette with freelancers. Get design and development from a senior-level team that learns your brand perfectly.
              </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 p-8 lg:p-12 rounded-[32px] border-[6px] lg:border-8 border-black bg-white transition-all group lg:hover:-translate-y-2 lg:hover:translate-x-2 relative overflow-hidden"
            style={{ boxShadow: `12px 12px 0px ${COLORS.black}` }}
          >
            <div className="relative z-10 w-full md:w-1/2">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-[4px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: COLORS.pink }}
              >
                <Rocket className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter mb-4 text-black">
                Lightning Fast
              </h3>
              <p className="text-black/70 font-medium text-lg leading-relaxed">
                Submit a request and get it back in an average of 48 hours. We iterate rapidly until you are 100% satisfied with the result.
              </p>
            </div>
            
            <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover border-l-[6px] lg:border-l-8 border-black grayscale group-hover:grayscale-0 transition-all duration-500" alt="Performance dashboard" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

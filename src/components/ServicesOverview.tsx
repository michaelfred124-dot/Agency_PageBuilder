"use client";
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES as fallbackServices } from '@/constants';
import Link from 'next/link';
import { getSupabaseBrowserClient } from '@/lib/supabase';

export default function ServicesOverview() {
  const [services, setServices] = useState<any[]>(fallbackServices);

  useEffect(() => {
    const fetchServices = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
        
      if (!error && data && data.length > 0) {
        // Map DB services to the expected format
        const mappedServices = data.map(s => ({
          title: s.title,
          description: s.description,
          icon: s.icon || 'Star', // Default icon if none provided
          color: '#E0E7FF' // Generic color fallback
        }));
        setServices(mappedServices);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#0B0B0B] px-6 relative overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7F11]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-[#D4AF37]">Services</span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              What We <br />Offer
            </h2>
          </div>
          <p className="max-w-xl text-white/70 text-base md:text-lg leading-relaxed font-normal">
            We deliver top-tier, custom visual interfaces. No generic templates, no technical compromises. Every feature is crafted headlessly to ensure maximum performance and SEO compliance.
          </p>
        </div>

        {/* Blueprint-style thin border grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((skill, i) => {
            const Icon = (LucideIcons as any)[skill.icon] || LucideIcons.Star;
            return (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-2xl luxury-card relative group cursor-pointer"
              >
                <div className="mb-6 p-3.5 rounded-xl w-fit border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:border-[#FF7F11]/40 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/process">
            <button
              className="px-8 py-4 bg-gradient-to-r from-[#FF7F11] to-[#D4AF37] hover:opacity-90 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all shadow-lg shadow-orange-500/10 cursor-pointer"
            >
              See Our Process
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}



"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Zap, Shield, Droplets, Users, Calendar, Leaf, Check,
  Home, Building2, Search, Star, Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, Bird
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrighterSolarTemplate() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'one-time' | 'maintenance'>('one-time');

  return (
    <div className="bg-[#030712] min-h-screen font-sans text-gray-100 selection:bg-[#fbbf24] selection:text-[#030712] overflow-x-hidden relative">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40vh] right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20vh] left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Header */}
      <header className="bg-[#030712]/80 backdrop-blur-md py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-3">
           <div className="relative">
             <div className="absolute inset-0 bg-[#fbbf24]/20 rounded-full blur-md animate-pulse"></div>
             <SunIcon className="w-9 h-9 text-[#fbbf24] relative z-10" />
           </div>
           <div className="text-left">
             <div className="font-mono font-black text-lg leading-none tracking-wider text-white">BRIGHTER</div>
             <div className="text-[8px] tracking-[0.3em] text-[#06B6D4] font-bold mt-1 uppercase font-mono">SOLAR CLEANING</div>
           </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
          <Link href="#" className="text-[#fbbf24] border-b border-[#fbbf24] pb-1 font-bold">HOME</Link>
          <Link href="#" className="hover:text-white transition-colors">SERVICES</Link>
          <Link href="#" className="hover:text-white transition-colors">ABOUT US</Link>
          <Link href="#" className="hover:text-white transition-colors">REVIEWS</Link>
          <Link href="#" className="hover:text-white transition-colors">PRICING</Link>
          <Link href="#" className="hover:text-white transition-colors">CONTACT</Link>
        </nav>

        <div className="hidden lg:block">
           <button className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] text-[#030712] font-mono font-bold py-3 px-6 rounded-none flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-amber-500/10 text-xs uppercase tracking-widest border border-[#fbbf24]/50">
             QUICK INQUIRY <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
           </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#030712] z-40 pt-24 px-6 pb-6 flex flex-col gap-6 lg:hidden overflow-y-auto"
          >
            <Link href="#" className="text-[#fbbf24] font-mono text-xl uppercase tracking-widest">HOME</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-mono text-xl uppercase tracking-widest">SERVICES</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-mono text-xl uppercase tracking-widest">ABOUT US</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-mono text-xl uppercase tracking-widest">REVIEWS</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-mono text-xl uppercase tracking-widest">PRICING</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-mono text-xl uppercase tracking-widest">CONTACT</Link>
            <button className="mt-8 bg-[#fbbf24] text-[#030712] font-mono font-bold py-4 px-6 rounded-none flex items-center justify-center gap-2 uppercase tracking-widest">
              QUICK INQUIRY <ArrowRight className="w-5 h-5 text-[#030712]" strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Dashboard Widget */}
      <section className="relative pt-24 pb-44 px-6 md:px-12 bg-transparent overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80" 
            alt="High tech solar array" 
            className="w-full h-full object-cover filter saturate-50"
            fill 
          />
          <div className="absolute inset-0 bg-[#030712]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
           <div className="max-w-2xl text-left">
             <div className="text-[#06B6D4] font-mono font-bold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping"></span>
               System Optimization & Performance
             </div>
             <h1 className="text-5xl md:text-7xl font-sans font-black text-white leading-[1.05] tracking-tight mb-8">
               Max Production.<br/>
               Peak Efficiency.<br/>
               <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Zero Grime.</span>
             </h1>
             <p className="text-md md:text-lg text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
               Professional, zero-chemical pure-water cleaning engineered to recover up to 25% of your lost solar panel efficiency. Safeguard your sustainable asset.
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:shadow-lg hover:shadow-[#fbbf24]/10 text-[#030712] font-mono font-bold py-4.5 px-8 text-xs uppercase tracking-widest border border-[#fbbf24]/50 transition-all">
                 Request Diagnostic Quote <ArrowRight className="w-4 h-4 ml-2 inline" strokeWidth={3} />
               </button>
               <button className="bg-transparent hover:bg-white/5 text-white font-mono font-bold py-4.5 px-8 text-xs uppercase tracking-widest border border-white/10 hover:border-[#06B6D4]/50 transition-all">
                 Technical Specifications <ArrowRight className="w-4 h-4 ml-2 inline text-gray-400" />
               </button>
             </div>
           </div>

           {/* High-Tech Dashboard Widget Mockup */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="w-full lg:w-[480px] bg-[#0A162D]/60 backdrop-blur-md border border-[#06B6D4]/25 p-6 rounded-xl shadow-2xl relative"
           >
             {/* Cyber Deco Line */}
             <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent"></div>
             
             <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#06B6D4] font-bold">ANALYZER LOGIC v2.6</span>
               </div>
               <span className="text-[10px] font-mono text-gray-400">STATUS: RECOVERED</span>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-[#030712]/70 p-4 border border-white/5 rounded-lg text-left">
                 <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block mb-1">Efficiency Delta</span>
                 <span className="text-3xl font-mono text-[#fbbf24] font-black">+24.8%</span>
               </div>
               <div className="bg-[#030712]/70 p-4 border border-white/5 rounded-lg text-left">
                 <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block mb-1">Payback Ratio</span>
                 <span className="text-3xl font-mono text-[#06B6D4] font-black">4.2 Months</span>
               </div>
             </div>

             {/* Simulated SVG Graph */}
             <div className="bg-[#030712]/70 p-4 border border-white/5 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white">Daily Output Curve</span>
                  <div className="flex gap-3 text-[9px] font-mono">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]"></span> Optimized</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400/70"></span> Soiled</span>
                  </div>
                </div>
                
                <div className="h-28 w-full relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="h-px bg-white"></div>
                    <div className="h-px bg-white"></div>
                    <div className="h-px bg-white"></div>
                  </div>
                  
                  {/* SVG Curves */}
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Soiled curve */}
                    <path d="M 0 35 Q 25 30 50 25 T 100 32" fill="none" stroke="#f87171" strokeWidth="1.5" strokeOpacity="0.5" />
                    {/* Clean curve */}
                    <path d="M 0 35 Q 25 15 50 8 T 100 30" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  </svg>
                </div>
             </div>

             <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
               <span>EST. CARBON OFFSET INCREASE</span>
               <span className="text-emerald-400 font-bold">+1,240 LBS / YR</span>
             </div>
           </motion.div>
        </div>

        {/* Feature Spec Overlay Bar */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-6 md:px-12 z-20">
          <div className="max-w-6xl mx-auto bg-[#0A162D] rounded-xl p-8 flex flex-col md:flex-row gap-8 justify-between shadow-2xl border border-white/5">
            <div className="flex items-start gap-4 text-left">
               <div className="w-10 h-10 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center shrink-0">
                 <Zap className="w-5 h-5 text-[#06B6D4]" />
               </div>
               <div>
                 <h4 className="font-mono text-sm uppercase tracking-wider text-white font-bold mb-1">Recover Loss</h4>
                 <p className="text-xs text-gray-400 leading-relaxed font-light">Eradicate baked-on pollen, ash, and silica to maximize photon collection.</p>
               </div>
            </div>
            
            <div className="hidden md:block w-px bg-white/10 self-stretch"></div>
            
            <div className="flex items-start gap-4 text-left">
               <div className="w-10 h-10 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 flex items-center justify-center shrink-0">
                 <ShieldCheck className="w-5 h-5 text-[#fbbf24]" />
               </div>
               <div>
                 <h4 className="font-mono text-sm uppercase tracking-wider text-white font-bold mb-1">Zero Damage Guarantee</h4>
                 <p className="text-xs text-gray-400 leading-relaxed font-light">Certified Pure-Water technology. Safe for advanced glass coatings.</p>
               </div>
            </div>

            <div className="hidden md:block w-px bg-white/10 self-stretch"></div>

            <div className="flex items-start gap-4 text-left">
               <div className="w-10 h-10 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center shrink-0">
                 <Droplets className="w-5 h-5 text-[#06B6D4]" />
               </div>
               <div>
                 <h4 className="font-mono text-sm uppercase tracking-wider text-white font-bold mb-1">Pure Water Tech</h4>
                 <p className="text-xs text-gray-400 leading-relaxed font-light">Residue-free deionized water prevents future particulate attraction.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Specs Stats Bar */}
      <section className="pt-36 pb-24 px-6 md:px-12 bg-[#060B18]">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-left">
           {[
             { num: "500+", label: "Commercial Arrays Restored", icon: Users },
             { num: "5.6 MWh", label: "Estimated Restored Capacity", icon: TrendingUp },
             { num: "100%", label: "Streak-Free Visual Pass", icon: ShieldCheck },
             { num: "Zero-Chem", label: "Deionized Environmental Safety", icon: Leaf }
           ].map((stat, idx) => (
             <div key={idx} className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-[#0A162D] border border-white/5 flex items-center justify-center shrink-0">
                 <stat.icon className="w-5 h-5 text-[#06B6D4]" />
               </div>
               <div>
                 <div className="text-3xl font-mono text-white font-black">{stat.num}</div>
                 <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">{stat.label}</div>
               </div>
             </div>
           ))}
         </div>
      </section>

      {/* Technical Services Section */}
      <section className="py-32 px-6 md:px-12 bg-transparent border-t border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-[#06B6D4] font-mono font-bold text-xs tracking-[0.3em] uppercase mb-4 text-center">SPECIFIED SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white text-center mb-24 max-w-2xl">
              Solar Optimization Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                { title: "Residential Arrays", icon: Home, desc: "Bespoke clean programs tailored for rooftop home systems to restore energy savings.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80", spec: "DI Water / 12-Month Guarantee" },
                { title: "Commercial Grids", icon: Building2, desc: "Full scale optimization routines for business centers, industrial factories, and corporate roofs.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80", spec: "Priority Scheduling / Megawatt Auditing" },
                { title: "Ground Mount Arrays", icon: Search, desc: "Dust clearing for tracking ground installations to minimize solar panel shadowing.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80", spec: "Debris Clear / Inverter Auditing" },
                { title: "Pest Shield Protection", icon: ShieldCheck, desc: "Protective mesh fencing installations under panels to prevent pest nesting.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", spec: "Stainless Mesh / 10-Yr Guarantee" }
              ].map((service, i) => (
                <div key={i} className="bg-[#0A162D]/60 border border-white/5 rounded-xl overflow-hidden group flex flex-col hover:border-[#06B6D4]/40 transition-colors shadow-lg">
                  <div className="h-44 relative overflow-hidden bg-gray-900 border-b border-white/5">
                    <Image src={service.img} alt={service.title} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" fill />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between text-left relative">
                    <div>
                      <h3 className="text-lg font-mono uppercase tracking-wide text-white font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">{service.desc}</p>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-[#06B6D4] uppercase tracking-wider bg-[#06B6D4]/5 border border-[#06B6D4]/15 px-3 py-1.5 mb-6 text-center">
                        SPEC: {service.spec}
                      </div>
                      <Link href="#" className="flex items-center gap-2 text-[#fbbf24] hover:text-[#f59e0b] font-mono text-xs tracking-widest uppercase font-bold group/link">
                        Inquire Solution <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" strokeWidth={3} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Tech Process Section */}
      <section className="py-32 px-6 md:px-12 bg-[#060B18] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[#06B6D4] font-mono font-bold text-xs tracking-[0.3em] uppercase mb-4">OPTIMIZATION CYCLE</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white leading-tight mb-8">
              Meticulous<br />Methodology
            </h2>
            <button className="bg-transparent border border-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#030712] text-[#06B6D4] font-mono font-bold py-4 px-8 text-xs tracking-widest uppercase transition-colors">
               Analyze Methodology <ArrowRight className="w-4 h-4 ml-2 inline" strokeWidth={3} />
            </button>
          </div>

          <div className="lg:w-2/3 flex flex-col sm:flex-row justify-between w-full relative gap-6">
            {[
              { num: "01", title: "Diagnostic", desc: "Thermal inspections reveal hot-spots and track micro-fracture accumulation.", icon: Search },
              { num: "02", title: "Deionization", desc: "Pure deionized water loops strip minerals and static attraction.", icon: Droplets },
              { num: "03", title: "Rinse Cycle", desc: "Ultra-low PSI streak-free rinse ensures optimal angle photon passage.", icon: Sparkles },
              { num: "04", title: "Harvest", desc: "Immediate data verification displays live capacity recovery.", icon: TrendingUp }
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-[#0A162D]/60 border border-white/5 p-6 text-left rounded-lg shadow-sm hover:border-[#fbbf24]/20 transition-colors">
                <div className="text-3xl font-mono text-[#06B6D4]/30 font-black mb-4">{step.num}</div>
                <div className="font-mono text-sm uppercase text-white font-bold mb-2">{step.title}</div>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-[#fbbf24] font-mono font-bold text-xs tracking-[0.3em] uppercase mb-4 text-center">RESTORED METRICS</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white text-center mb-20">Verified Grid Success</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { name: "Sarah M.", role: "Silicon Valley Homeowner", quote: "Our monthly solar output delta jumped by 24% within 24 hours of their clean. Pure technical professionalism.", img: "https://randomuser.me/api/portraits/women/44.jpg", stat: "+24.2% Output Increase" },
              { name: "David L.", role: "CEO, Tech Facility", quote: "Cleaned a 2,000 panel commercial roof array. Inverter diagnostics showed immediate capacity restoration.", img: "https://randomuser.me/api/portraits/men/32.jpg", stat: "1.4 MWh Restored" },
              { name: "James R.", role: "Estate Operations", quote: "DI pure water wash leaves absolutely zero residue. Safe, fast, and highly effective for our solar tracks.", img: "https://randomuser.me/api/portraits/men/67.jpg", stat: "Streak-Free Pass" }
            ].map((review, i) => (
              <div key={i} className="bg-[#0A162D]/40 border border-white/5 rounded-xl p-8 flex flex-col justify-between text-left group hover:border-[#06B6D4]/30 transition-colors shadow-lg">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />)}
                  </div>
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-8 italic">
                    "{review.quote}"
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-wider mb-6 pb-4 border-b border-white/5">
                    METRIC: {review.stat}
                  </div>
                  <div className="flex items-center gap-4">
                    <Image src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-white/10" width={40} height={40} />
                    <div>
                      <div className="text-white font-mono font-bold text-xs uppercase tracking-wide">{review.name}</div>
                      <div className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-32 px-6 md:px-12 bg-[#060B18] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-[#06B6D4] font-mono font-bold text-xs tracking-[0.3em] uppercase mb-4 text-center font-bold">TRANSPARENT TIERING</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white text-center mb-12">System Investment Calculator</h2>

          {/* Toggle */}
          <div className="flex items-center gap-4 mb-20">
            <div className="bg-[#0A162D] border border-white/5 p-1 flex items-center justify-between w-80 relative rounded-none">
               <button 
                 className={`flex-1 py-3 px-4 text-[10px] font-mono uppercase tracking-widest transition-all relative z-10 font-bold ${billingCycle === 'one-time' ? 'text-[#030712]' : 'text-gray-400'}`}
                 onClick={() => setBillingCycle('one-time')}
               >
                 One-Time Clean
               </button>
               <button 
                 className={`flex-1 py-3 px-4 text-[10px] font-mono uppercase tracking-widest transition-all relative z-10 font-bold ${billingCycle === 'maintenance' ? 'text-[#030712]' : 'text-gray-400'}`}
                 onClick={() => setBillingCycle('maintenance')}
               >
                 Annual Plan
               </button>
               <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#fbbf24] transition-transform duration-300 ease-out z-0 ${billingCycle === 'one-time' ? 'translate-x-0' : 'translate-x-[calc(100%+4px)]'}`}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
            
            {/* Residential */}
            <div className="bg-[#0A162D]/60 border border-white/5 p-8 flex flex-col h-full hover:border-white/10 transition-colors shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div className="font-mono text-xs tracking-wider text-gray-400 uppercase font-bold">RESIDENTIAL TIER</div>
              </div>
              <div className="mb-2 text-left">
                <span className="text-5xl font-mono text-white font-black">${billingCycle === 'one-time' ? '99' : '79'}</span>
                <span className="text-gray-400 text-xs font-mono ml-2">/ cleaning</span>
              </div>
              <div className="text-gray-500 text-[10px] font-mono uppercase tracking-wider text-left mb-8">Base pricing structure</div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-1 text-left">
                {[
                  "Up to 20 solar modules",
                  "Double loop DI water wash",
                  "Basic thermal hot-spot audit",
                  "Streak-free mineral check"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-light text-xs leading-relaxed">
                    <Check className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 text-[#fbbf24] font-mono text-xs uppercase tracking-widest font-bold border border-[#fbbf24]/30 hover:bg-[#fbbf24] hover:text-[#030712] transition-colors">
                ORDER SCHEDULING
              </button>
            </div>

            {/* Commercial - Highlighted */}
            <div className="bg-[#0A162D]/80 border-2 border-[#fbbf24]/50 p-8 flex flex-col h-full relative shadow-2xl transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fbbf24] text-[#030712] font-mono font-bold text-[9px] px-4 py-1.5 uppercase tracking-widest">
                OPTIMAL HARVEST
              </div>
              <div className="flex items-center gap-4 mb-8 mt-4">
                <div className="w-10 h-10 rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/30 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#fbbf24]" />
                </div>
                <div className="font-mono text-xs tracking-wider text-white uppercase font-bold">COMMERCIAL GRID</div>
              </div>
              <div className="mb-2 text-left">
                <span className="text-5xl font-mono text-white font-black">${billingCycle === 'one-time' ? '299' : '249'}</span>
                <span className="text-gray-400 text-xs font-mono ml-2">/ cleaning</span>
              </div>
              <div className="text-gray-500 text-[10px] font-mono uppercase tracking-wider text-left mb-8">Base pricing structure</div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-1 text-left">
                {[
                  "Up to 100 solar modules",
                  "Pure DI pressure-free wash",
                  "Megawatt capacity audit logs",
                  "Priority technical schedule",
                  "Soiling curve delta report"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 font-light text-xs leading-relaxed">
                    <Check className="w-4 h-4 text-[#fbbf24] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] text-[#030712] font-mono text-xs uppercase tracking-widest font-bold border border-[#fbbf24]/50">
                ORDER SCHEDULING
              </button>
            </div>

            {/* Ground Mount */}
            <div className="bg-[#0A162D]/60 border border-white/5 p-8 flex flex-col h-full hover:border-white/10 transition-colors shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div className="font-mono text-xs tracking-wider text-gray-400 uppercase font-bold">GROUND MOUNT</div>
              </div>
              <div className="mb-2 text-left">
                <span className="text-5xl font-mono text-white font-black">${billingCycle === 'one-time' ? '199' : '159'}</span>
                <span className="text-gray-400 text-xs font-mono ml-2">/ cleaning</span>
              </div>
              <div className="text-gray-500 text-[10px] font-mono uppercase tracking-wider text-left mb-8">Base pricing structure</div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-1 text-left">
                {[
                  "Up to 50 solar modules",
                  "Undercarriage wiring clear",
                  "Hydrology tracking check",
                  "Full diagnostics checkup"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-light text-xs leading-relaxed">
                    <Check className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 text-[#fbbf24] font-mono text-xs uppercase tracking-widest font-bold border border-[#fbbf24]/30 hover:bg-[#fbbf24] hover:text-[#030712] transition-colors">
                ORDER SCHEDULING
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Cybernetic Bottom CTA Section */}
      <section className="px-6 md:px-12 py-32 bg-transparent">
         <div className="max-w-6xl mx-auto bg-[#0A162D] rounded-xl overflow-hidden relative p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl border border-white/5">
            {/* Decol Lines */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-screen"></div>
            
            <div className="relative z-10 max-w-2xl text-left">
              <span className="text-[#06B6D4] font-mono font-bold text-xs tracking-[0.3em] uppercase mb-4 block">INVESTMENT CONSERVATION</span>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-white leading-tight mb-8">
                Soiled Cells Drain Savings.<br/>
                <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Recover Megawatts.</span>
              </h2>
              
              <ul className="flex flex-col sm:flex-row gap-6 text-gray-300 font-mono text-[10px] tracking-wider uppercase">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fbbf24]" /> +25% CAPACITY BOOST
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fbbf24]" /> DEIONIZED HYDRO PROCESS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#fbbf24]" /> ENVIRONMENTAL RATED
                </li>
              </ul>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 shrink-0 w-full sm:w-auto">
               <button className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#030712] font-mono font-bold py-5 px-10 rounded-none flex items-center justify-center gap-3 transition-transform hover:scale-102 uppercase tracking-widest text-sm w-full sm:w-auto border border-[#fbbf24]/60">
                 ESTATE DIAGNOSTIC <ArrowRight className="w-5 h-5 text-[#030712]" strokeWidth={3} />
               </button>
               <p className="text-gray-400 text-xs font-mono">24-Hour Callback Protocol</p>
            </div>
         </div>
      </section>

      {/* Technical Footer */}
      <footer className="bg-[#060B18] text-gray-400 pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="relative">
                 <div className="absolute inset-0 bg-[#fbbf24]/20 rounded-full blur-md"></div>
                 <SunIcon className="w-8 h-8 text-[#fbbf24] relative z-10" />
               </div>
               <div>
                 <div className="font-mono font-black text-md leading-none tracking-wider text-white">BRIGHTER</div>
                 <div className="text-[7px] tracking-[0.3em] text-[#06B6D4] font-bold mt-1 uppercase font-mono">SOLAR CLEANING</div>
               </div>
            </div>
            <p className="text-xs font-light leading-relaxed mb-6 max-w-xs">
              Scientific solar cell diagnostics and deionized conservation services protecting commercial and residential assets.
            </p>
            <div className="flex gap-3">
               {[f, in_logo, x_logo, ig_logo].map((iconStr, i) => (
                  <div key={i} className="w-8 h-8 rounded-none bg-[#0A162D] border border-white/5 flex items-center justify-center hover:border-[#fbbf24] hover:text-[#fbbf24] transition-colors cursor-pointer text-xs font-mono font-bold">
                    {iconStr}
                  </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono font-bold mb-6 tracking-widest uppercase text-xs">SYSTEM CHANNELS</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono uppercase tracking-wider text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Home Base</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Optimization Solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Diagnostic Audits</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Yield Calculator</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Inquiry Protocol</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono font-bold mb-6 tracking-widest uppercase text-xs">PROGRAM SCHEMAS</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono uppercase tracking-wider text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Residential Array Wash</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Commercial Grid Wash</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tracking Mount Clean</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shield Guard Mesh</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Annual Conservation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono font-bold mb-6 tracking-widest uppercase text-xs">DIAGNOSTIC STUDIO</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#06B6D4]" />
                <a href="tel:5551234567" className="hover:text-white transition-colors font-mono">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#06B6D4]" />
                <a href="mailto:info@brightersolar.com" className="hover:text-white transition-colors font-mono">diagnostics@brightersolar.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#06B6D4]" />
                <span className="font-mono">Silicon Valley Peninsula</span>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock className="w-4 h-4 text-[#06B6D4] mt-0.5" />
                <span className="font-mono">Mon - Sat: 07:00 - 17:00<br/>Sun: Standby Protocol</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-gray-500">
          <p>© 2026 Brighter Solar Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Security Protocol</Link>
            <Link href="#" className="hover:text-white transition-colors">Service Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Inline helper constants for footer
const f = "F";
const in_logo = "LN";
const x_logo = "X";
const ig_logo = "IG";

function SunIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );
}

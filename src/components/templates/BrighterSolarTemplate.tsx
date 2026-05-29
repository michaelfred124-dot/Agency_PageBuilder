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
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-[#fbbf24] selection:text-[#0b172a]">
      {/* Header */}
      <header className="bg-[#0A1628] text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
           <SunIcon className="w-8 h-8 text-[#fbbf24]" />
           <div>
             <div className="font-black text-xl leading-none tracking-tight">BRIGHTER</div>
             <div className="text-[9px] tracking-[0.25em] text-white/70 font-bold mt-0.5">SOLAR CLEANING</div>
           </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
          <Link href="#" className="text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1 uppercase">HOME</Link>
          <Link href="#" className="hover:text-[#fbbf24] transition-colors uppercase">SERVICES</Link>
          <Link href="#" className="hover:text-[#fbbf24] transition-colors uppercase">ABOUT US</Link>
          <Link href="#" className="hover:text-[#fbbf24] transition-colors uppercase">REVIEWS</Link>
          <Link href="#" className="hover:text-[#fbbf24] transition-colors uppercase">PRICING</Link>
          <Link href="#" className="hover:text-[#fbbf24] transition-colors uppercase">CONTACT</Link>
        </nav>

        <div className="hidden lg:block">
           <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black py-3 px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105 text-sm uppercase tracking-wide">
             GET A FREE QUOTE <ArrowRight className="w-4 h-4 text-[#0A1628]" strokeWidth={3} />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#0A1628] z-40 pt-24 px-6 pb-6 flex flex-col gap-6 lg:hidden overflow-y-auto"
            style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: '#0A1628' }}
          >
            <Link href="#" className="text-[#fbbf24] font-black text-2xl uppercase">HOME</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-black text-2xl uppercase">SERVICES</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-black text-2xl uppercase">ABOUT US</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-black text-2xl uppercase">REVIEWS</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-black text-2xl uppercase">PRICING</Link>
            <Link href="#" className="text-white hover:text-[#fbbf24] font-black text-2xl uppercase">CONTACT</Link>
            <button className="mt-8 bg-[#fbbf24] text-[#0A1628] font-black py-4 px-6 rounded-full flex items-center justify-center gap-2 uppercase tracking-wide">
              GET A FREE QUOTE <ArrowRight className="w-5 h-5 text-[#0A1628]" strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-20 pb-40 px-6 md:px-12 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* We are using a regular img instead of next/image for ease in standard templates, though next/image is preferred if domains are configured. Using img to avoid host config issues. */}
          <Image 
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80" 
            alt="Solar Panel Base" 
            className="w-full h-full object-cover opacity-30"
          fill />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
           <div className="max-w-3xl">
             <div className="text-[#fbbf24] font-extrabold text-sm tracking-widest uppercase mb-4">
               CLEAN PANELS. MAX POWER.
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
               MORE SUN.<br/>
               MORE POWER.<br/>
               <span className="text-[#fbbf24]">MORE SAVINGS.</span>
             </h1>
             <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-medium leading-relaxed">
               Professional solar panel cleaning that removes dirt, dust & grime so your system performs at its best.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
               <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 uppercase tracking-wide">
                 GET A FREE QUOTE <ArrowRight className="w-5 h-5 text-[#0A1628]" strokeWidth={3} />
               </button>
               <button className="bg-transparent hover:bg-white/10 text-white font-black py-4 px-8 rounded-full flex items-center justify-center gap-2 border-2 border-white transition-colors uppercase tracking-wide">
                 SEE OUR SERVICES <ArrowRight className="w-5 h-5" strokeWidth={3} />
               </button>
             </div>
           </div>

           {/* Rating Badge */}
           <div className="hidden lg:flex flex-col items-center bg-[#0F203C]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl relative mt-32">
             <div className="flex gap-1 mb-2">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />)}
               <span className="text-white font-black ml-2 text-xl">5.0</span>
             </div>
             <p className="text-center text-sm font-medium text-white/80">Based on 200+<br/>Happy Customers</p>
           </div>
        </div>

        {/* Feature Bar attached to Hero */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-6 md:px-12 z-20">
          <div className="max-w-6xl mx-auto bg-[#0F203C] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 justify-between shadow-2xl border border-white/5 border-t-blue-400/20 text-white">
            <div className="flex items-center md:items-start gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-[#4A90E2]/30 flex items-center justify-center flex-shrink-0">
                 <Zap className="w-6 h-6 text-[#4A90E2]" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Boost Efficiency</h4>
                 <p className="text-sm text-white/70 font-medium">Up to 25% more<br className="hidden md:block" /> energy output</p>
               </div>
            </div>
            
            <div className="hidden md:block w-px bg-white/10 self-stretch"></div>
            
            <div className="flex items-center md:items-start gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-[#4A90E2]/30 flex items-center justify-center flex-shrink-0">
                 <ShieldCheck className="w-6 h-6 text-[#4A90E2]" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Protect Your System</h4>
                 <p className="text-sm text-white/70 font-medium">Remove harmful buildup<br className="hidden md:block" /> & prevent damage</p>
               </div>
            </div>

            <div className="hidden md:block w-px bg-white/10 self-stretch"></div>

            <div className="flex items-center md:items-start gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-[#4A90E2]/30 flex items-center justify-center flex-shrink-0">
                 <Droplets className="w-6 h-6 text-[#4A90E2]" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Safe & Eco-Friendly</h4>
                 <p className="text-sm text-white/70 font-medium">Pure water technology,<br className="hidden md:block" /> zero harsh chemicals</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="pt-48 pb-20 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
           
           <div className="flex items-center gap-6 pt-6 md:pt-0 md:px-4">
             <div className="w-16 h-16 text-[#0A1628] hidden lg:block"><Users className="w-full h-full stroke-1" /></div>
             <div>
               <div className="text-3xl font-black text-[#0A1628]">500+</div>
               <div className="text-sm font-semibold text-gray-500 mt-1">Homes & Businesses<br/>Served</div>
             </div>
           </div>

           <div className="flex items-center gap-6 pt-6 md:pt-0 md:px-4">
             <div className="w-16 h-16 text-[#0A1628] hidden lg:block"><Calendar className="w-full h-full stroke-1" /></div>
             <div>
               <div className="text-3xl font-black text-[#0A1628]">5+</div>
               <div className="text-sm font-semibold text-gray-500 mt-1">Years of Local<br/>Experience</div>
             </div>
           </div>

           <div className="flex items-center gap-6 pt-6 md:pt-0 md:px-4">
             <div className="w-16 h-16 text-[#0A1628] hidden lg:block"><Shield className="w-full h-full stroke-1" /></div>
             <div>
               <div className="text-3xl font-black text-[#0A1628]">100%</div>
               <div className="text-sm font-semibold text-gray-500 mt-1">Satisfaction<br/>Guaranteed</div>
             </div>
           </div>

           <div className="flex items-center gap-6 pt-6 md:pt-0 md:px-4">
             <div className="w-16 h-16 text-[#0A1628] hidden lg:block"><Leaf className="w-full h-full stroke-1" /></div>
             <div>
               <div className="text-2xl font-black text-[#0A1628]">Eco-Friendly</div>
               <div className="text-sm font-semibold text-gray-500 mt-1">Pure Water Technology<br/>Safe for Your System</div>
             </div>
           </div>

         </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0b172a]">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-[#fbbf24] font-black text-sm tracking-widest uppercase mb-4 text-center">OUR SERVICES</div>
           <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">Complete Solar Panel Cleaning Solutions</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
             {[
               { title: "Residential Cleaning", icon: Home, desc: "Keep your home system running at peak performance with routine cleanings.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
               { title: "Commercial Cleaning", icon: Building2, desc: "Maximize energy production and savings for your business with professional service.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
               { title: "Ground Mount Cleaning", icon: Search, desc: "We safely clean all types of ground mounted solar installations.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" },
               { title: "Bird Proofing", icon: ShieldCheck, desc: "Protect your panels from birds and pests with our proofing solutions.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" }
             ].map((service, i) => (
               <div key={i} className="bg-[#13284a] rounded-2xl overflow-hidden group flex flex-col border border-white/5">
                 <div className="h-48 relative overflow-hidden">
                   <Image src={(service.img) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" fill />
                   <div className="absolute inset-0 bg-[#0b172a]/20"></div>
                 </div>
                 <div className="p-8 flex-1 flex flex-col relative pt-12">
                   {/* Floating Icon */}
                   <div className="absolute -top-8 left-8 w-16 h-16 bg-[#0b172a] border-[4px] border-[#13284a] rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-[#4A90E2]" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                   <p className="text-white/70 font-medium mb-8 flex-1 leading-relaxed text-sm">{service.desc}</p>
                   <Link href="#" className="flex items-center gap-2 text-[#4A90E2] font-bold text-sm tracking-wider uppercase group/link w-fit">
                     LEARN MORE <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={3} />
                   </Link>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-[#4A90E2] font-black text-sm tracking-widest uppercase mb-4">HOW IT WORKS</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] leading-[1.1] mb-8">
              Clean Panels.<br />
              Better Results.
            </h2>
            <button className="bg-[#0b172a] hover:bg-[#1a365d] text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105 tracking-wide w-fit cursor-pointer">
               OUR PROCESS <ArrowRight className="w-5 h-5" strokeWidth={3} />
            </button>
          </div>

          <div className="lg:w-2/3 flex flex-col sm:flex-row justify-between w-full relative">
            {/* Dotted lines connecting steps - hidden on mobile */}
            <div className="hidden sm:block absolute top-12 left-1/4 right-1/4 h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>

            {[
              { num: "1", title: "Inspect", desc: "We inspect your system to check buildup and performance.", icon: Search },
              { num: "2", title: "Pure Clean", desc: "We use pure water technology to gently remove all dirt & grime.", icon: Droplets },
              { num: "3", title: "Rinse", desc: "Spot-free rinse leaves your panels clean and streak-free.", icon: Sparkles },
              { num: "4", title: "Maximize", desc: "Enjoy up to 25% more energy and lower electric bills.", icon: TrendingUp }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 w-full sm:w-1/4 px-2 mb-12 sm:mb-0">
                <div className="w-24 h-24 rounded-full border-[3px] border-gray-100 bg-white flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className={`w-10 h-10 ${i % 2 === 0 ? 'text-[#0b172a]' : 'text-[#fbbf24]'}`} strokeWidth={1.5} />
                </div>
                <div className="font-bold text-[#0A1628] text-lg mb-2">{step.num}. {step.title}</div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 relative bg-[#0b172a]">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1588602517551-78921e10222f?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#0b172a]/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-[#fbbf24] font-black text-sm tracking-widest uppercase mb-4 text-center">WHAT OUR CUSTOMERS SAY</div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">Real Reviews. Real Results.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {[
              { name: "Sarah M.", role: "Homeowner", quote: "My system is producing way more power after the cleaning. Super professional and easy to work with!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "David L.", role: "Business Owner", quote: "We schedules regular cleanings for all our buildings. The difference in output is incredible.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "James R.", role: "Homeowner", quote: "Great communication, on-time, and our panels have never looked better. Highly recommend!", img: "https://randomuser.me/api/portraits/men/67.jpg" }
            ].map((review, i) => (
              <div key={i} className="bg-transparent border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center relative group hover:bg-white/5 transition-colors">
                <div className="absolute top-6 left-6 text-white/5 text-6xl font-serif">"</div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />)}
                </div>
                <p className="text-white/90 font-medium leading-relaxed mb-8 relative z-10 italic">
                  "{review.quote}"
                </p>
                <div className="mt-auto flex items-center gap-4 relative z-10">
                  <Image src={(review.img) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" width={48} height={48} />
                  <div className="text-left">
                    <div className="text-white font-bold">{review.name}</div>
                    <div className="text-white/50 text-sm font-medium">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-[#007BFF] font-black text-sm tracking-widest uppercase mb-4 text-center">PRICING</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] text-center mb-12">Simple Pricing. Powerful Results.</h2>

          {/* Toggle */}
          <div className="flex items-center gap-4 mb-20 relative">
            <div className="bg-white border-2 border-gray-200 rounded-full p-1.5 flex items-center justify-between w-80 relative shadow-sm">
               <button 
                 className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-colors relative z-10 ${billingCycle === 'one-time' ? 'text-white' : 'text-gray-600'}`}
                 onClick={() => setBillingCycle('one-time')}
               >
                 One Time Cleaning
               </button>
               <button 
                 className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-colors relative z-10 ${billingCycle === 'maintenance' ? 'text-white' : 'text-gray-600'}`}
                 onClick={() => setBillingCycle('maintenance')}
               >
                 Maintenance Plans
               </button>
               <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0A1628] rounded-full transition-transform duration-300 ease-out z-0 ${billingCycle === 'one-time' ? 'translate-x-0' : 'translate-x-[calc(100%+12px)]'}`}></div>
            </div>
            
            {/* Save More drawing text */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:block opacity-60">
               <svg className="w-24 h-12 text-gray-500" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 25 C 30 10, 60 10, 90 25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
               </svg>
               <span className="absolute -right-16 top-1/2 -translate-y-1/2 font-serif italic text-gray-500 font-medium">Save more</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
            
            {/* Residential */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div className="font-bold text-gray-500 tracking-wider text-sm uppercase">RESIDENTIAL</div>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-black text-[#0A1628]">${billingCycle === 'one-time' ? '99' : '79'}</span>
              </div>
              <div className="text-gray-500 text-sm font-medium mb-8">Starting at</div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {[
                  "Up to 20 Solar Panels",
                  "Pure Water Cleaning",
                  "System Inspection",
                  "Streak-Free Guarantee"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                    <Check className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 text-[#4A90E2] font-bold border-2 border-[#4A90E2]/20 rounded-xl hover:bg-[#F0F7FF] transition-colors flex justify-center items-center gap-2">
                BOOK NOW <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>

            {/* Commercial - Highlighted */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#0A1628] shadow-2xl flex flex-col h-full relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fbbf24] text-[#0A1628] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div className="font-bold text-[#0A1628] tracking-wider text-sm uppercase">COMMERCIAL</div>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-black text-[#0A1628]">${billingCycle === 'one-time' ? '299' : '249'}</span>
              </div>
              <div className="text-gray-500 text-sm font-medium mb-8">Starting at</div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {[
                  "Up to 100 Solar Panels",
                  "Pure Water Cleaning",
                  "System Inspection",
                  "Priority Scheduling",
                  "Detailed Performance Report"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                    <Check className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black rounded-xl transition-colors flex justify-center items-center gap-2 uppercase">
                BOOK NOW <ArrowRight className="w-4 h-4 text-[#0A1628]" strokeWidth={3} />
              </button>
            </div>

            {/* Ground Mount */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div className="font-bold text-gray-500 tracking-wider text-sm uppercase">GROUND MOUNT</div>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-black text-[#0A1628]">${billingCycle === 'one-time' ? '199' : '159'}</span>
              </div>
              <div className="text-gray-500 text-sm font-medium mb-8">Starting at</div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {[
                  "Up to 50 Panels",
                  "Pure Water Cleaning",
                  "Undercarriage Cleaning",
                  "System Inspection"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                    <Check className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 text-[#4A90E2] font-bold border-2 border-[#4A90E2]/20 rounded-xl hover:bg-[#F0F7FF] transition-colors flex justify-center items-center gap-2">
                BOOK NOW <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>

          </div>

          <div className="mt-16 flex items-center gap-2 text-gray-600 font-semibold text-sm">
            <ShieldCheck className="w-5 h-5 text-[#007BFF]" />
            100% Satisfaction Guarantee — If you're not happy, we'll make it right.
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="px-6 md:px-12 py-12 bg-white">
         <div className="max-w-6xl mx-auto bg-[#0b172a] rounded-3xl overflow-hidden relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            {/* Background texture for CTA */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80')] mix-blend-screen bg-cover bg-center"></div>
            
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                Dirty Panels Cost You Money.<br/>
                <span className="text-[#fbbf24]">Let's Change That.</span>
              </h2>
              
              <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start text-white/90 font-medium">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#fbbf24]" /> Boost Efficiency
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#fbbf24]" /> Extend System Life
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#fbbf24]" /> Save on Energy Bills
                </li>
              </ul>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 flex-shrink-0">
               <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black py-5 px-10 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 uppercase tracking-wide text-lg w-full sm:w-auto">
                 GET A FREE QUOTE <ArrowRight className="w-5 h-5 text-[#0A1628]" strokeWidth={3} />
               </button>
               <p className="text-white/60 text-sm font-medium">No obligation. Fast response.</p>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b172a] text-white/70 pt-20 pb-8 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
               <SunIcon className="w-8 h-8 text-[#fbbf24]" />
               <div>
                 <div className="font-black text-xl leading-none tracking-tight text-white">BRIGHTER</div>
                 <div className="text-[9px] tracking-[0.25em] text-white/70 font-bold mt-0.5">SOLAR CLEANING</div>
               </div>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-6">
              Professional solar panel cleaning services that help you get the most out of your investment.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholders */}
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
                 <span className="font-bold text-sm">f</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
                 <span className="font-bold text-sm">in</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
                 <span className="font-bold text-sm shrink-0">X</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
                 <span className="font-bold text-sm">ig</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">QUICK LINKS</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">SERVICES</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Residential Cleaning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ground Mount Cleaning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Bird Proofing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">CONTACT US</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:5551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@brightersolarcleaning.com" className="hover:text-white transition-colors">info@brightersolar.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Serving Your Local Area</span>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Mon - Sat: 7AM - 5PM<br/>Sun: Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs font-semibold tracking-wide">
          <p>© 2026 Brighter Solar Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

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

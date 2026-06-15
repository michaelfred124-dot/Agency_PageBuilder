"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Zap, Shield, Droplets, Users, Calendar, Leaf, Check,
  Home, Building2, Search, Star, Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles,
  MessageSquare, ClipboardList, FileText, Wrench, Sun,
  Facebook, Instagram, Twitter, Linkedin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrighterSolarTemplate() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'process' | 'services' | 'projects' | 'blog' | 'contact'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', propertyType: 'residential', bill: '$150-$200', message: '' });

  const navigateTo = (page: 'home' | 'about' | 'process' | 'services' | 'projects' | 'blog' | 'contact') => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen font-sans text-gray-800 selection:bg-[#F1BA33] selection:text-[#060B16] overflow-x-hidden relative">
      
      {/* Header (Unified Style) */}
      <header className="bg-[#0A0E1A] text-white py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-white/5">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="relative flex items-center justify-center">
             <div className="absolute inset-0 bg-[#F1BA33]/20 rounded-full blur-sm animate-pulse"></div>
             <Sun className="w-8 h-8 text-[#F1BA33] relative z-10" />
          </div>
          <div className="text-left leading-none">
             <div className="font-sans font-black text-xl tracking-wider text-white">BRIGHTER</div>
             <div className="text-[9px] tracking-[0.22em] text-[#FBBF24] font-bold mt-1 uppercase font-mono">SOLAR</div>
          </div>
        </div>
        
        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-gray-300">
          <button 
            onClick={() => navigateTo('home')} 
            className={`transition-colors relative pb-1 ${currentPage === 'home' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('about')} 
            className={`transition-colors relative pb-1 ${currentPage === 'about' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            About Us
          </button>
          <button 
            onClick={() => navigateTo('process')} 
            className={`transition-colors relative pb-1 ${currentPage === 'process' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            How It Works
          </button>
          <button 
            onClick={() => navigateTo('services')} 
            className={`transition-colors relative pb-1 ${currentPage === 'services' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            Services
          </button>
          <button 
            onClick={() => navigateTo('projects')} 
            className={`transition-colors relative pb-1 ${currentPage === 'projects' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => navigateTo('blog')} 
            className={`transition-colors relative pb-1 ${currentPage === 'blog' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            Blog
          </button>
          <button 
            onClick={() => navigateTo('contact')} 
            className={`transition-colors relative pb-1 ${currentPage === 'contact' ? 'text-[#F1BA33] font-bold border-b-2 border-[#F1BA33]' : 'hover:text-white'}`}
          >
            Contact
          </button>
        </nav>

        {/* Header Right Phone & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-xs font-mono">
            <Phone className="w-4 h-4 text-[#F1BA33]" />
            <a href="tel:8885550196">(888) 555-0196</a>
          </div>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-[#F1BA33] hover:bg-[#E5A910] text-[#0A0E1A] font-mono font-bold py-2.5 px-5 text-xs uppercase tracking-widest transition-all"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#0A0E1A] z-40 pt-28 px-8 pb-8 flex flex-col gap-6 lg:hidden overflow-y-auto"
          >
            <button onClick={() => navigateTo('home')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'home' ? 'text-[#F1BA33]' : 'text-white'}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'about' ? 'text-[#F1BA33]' : 'text-white'}`}>About Us</button>
            <button onClick={() => navigateTo('process')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'process' ? 'text-[#F1BA33]' : 'text-white'}`}>How It Works</button>
            <button onClick={() => navigateTo('services')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'services' ? 'text-[#F1BA33]' : 'text-white'}`}>Services</button>
            <button onClick={() => navigateTo('projects')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'projects' ? 'text-[#F1BA33]' : 'text-white'}`}>Projects</button>
            <button onClick={() => navigateTo('blog')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'blog' ? 'text-[#F1BA33]' : 'text-white'}`}>Blog</button>
            <button onClick={() => navigateTo('contact')} className={`text-left font-mono text-lg uppercase tracking-wider ${currentPage === 'contact' ? 'text-[#F1BA33]' : 'text-white'}`}>Contact</button>
            
            <div className="w-full h-px bg-white/10 my-4"></div>
            
            <div className="flex items-center gap-3 text-white text-sm font-mono justify-center">
              <Phone className="w-4 h-4 text-[#F1BA33]" />
              <a href="tel:8885550196">(888) 555-0196</a>
            </div>
            
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-[#F1BA33] text-[#0A0E1A] font-mono font-bold py-4 px-6 uppercase tracking-widest text-center"
            >
              Get a Free Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Switcher */}
      <main>
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-24 pb-32 px-6 md:px-12 bg-[#0A0E1A] overflow-hidden">
              {/* Sunset Dusk House Background */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2070&q=80" 
                  className="w-full h-full object-cover opacity-35 filter brightness-90 scale-102 transition-all duration-1000" 
                  alt="Dusk solar house layout" 
                  referrerPolicy="no-referrer"
                  priority
                  fill 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/80 to-transparent" />
              </div>
              
              <div className="max-w-7xl mx-auto w-full relative z-10 text-white text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">
                    Powering a Brighter Tomorrow
                  </span>
                  <h1 className="text-5xl md:text-7xl font-sans font-black text-white leading-[1.05] tracking-tight mb-8">
                    CLEAN ENERGY.<br />
                    <span className="text-[#F1BA33]">BRIGHTER</span> FUTURE.
                  </h1>
                  <p className="text-md md:text-lg text-gray-300 max-w-xl leading-relaxed mb-12 font-light">
                    Brighter Solar provides premium solar energy solutions designed to save you money and power a sustainable future.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-16">
                    <button 
                      onClick={() => navigateTo('contact')}
                      className="bg-[#F1BA33] hover:bg-[#E5A910] text-[#0A0E1A] px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                    >
                      Get Your Free Quote <ArrowRight className="w-4 h-4 text-[#0A0E1A]" />
                    </button>
                    <button 
                      onClick={() => navigateTo('services')}
                      className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-all flex items-center gap-2 hover:bg-white/5"
                    >
                      Explore Solutions <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Row of 4 Hero Badges */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 max-w-4xl text-left">
                     {[
                       { icon: Leaf, title: "Clean & Renewable", desc: "100% Sustainable" },
                       { icon: TrendingUp, title: "Save More", desc: "Lower Your Bills" },
                       { icon: ShieldCheck, title: "25 Year Warranty", desc: "Panels & Performance" },
                       { icon: Star, title: "5-Star Rated", desc: "Trusted by Thousands" }
                     ].map((badge, idx) => (
                       <div key={idx} className="flex gap-3">
                         <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                           <badge.icon className="w-4.5 h-4.5 text-[#F1BA33]" />
                         </div>
                         <div className="flex flex-col">
                           <span className="text-xs font-bold text-white">{badge.title}</span>
                           <span className="text-[10px] text-gray-400 font-medium mt-0.5">{badge.desc}</span>
                         </div>
                       </div>
                     ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Grayscale Partner Logos Band */}
            <section className="py-8 bg-[#F8F9FA] border-b border-gray-200">
               <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
                 <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gray-400 font-bold">Trusted by Homeowners & Businesses</span>
                 <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-65 grayscale hover:grayscale-0 transition-all">
                   {["TESLA POWERWALL", "ENPHASE.", "Panasonic", "Q CELLS", "solaredge"].map((logo, idx) => (
                     <span key={idx} className="font-mono text-sm tracking-wider font-extrabold text-[#0A0E1A]">
                       {logo}
                     </span>
                   ))}
                 </div>
               </div>
            </section>

            {/* Why Choose Brighter Solar */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-5 text-left space-y-6">
                    <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block">
                      Why Choose Brighter Solar
                    </span>
                    <h2 className="text-3xl md:text-5xl font-sans font-black text-gray-900 leading-tight">
                      Smarter Energy.<br />Greater Savings.
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      We make switching to solar simple, affordable, and hassle-free. Our expert team handles everything from design to installation.
                    </p>
                    <button 
                      onClick={() => navigateTo('about')}
                      className="bg-[#F1BA33] hover:bg-[#E5A910] text-[#0A0E1A] px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                    >
                      Learn More About Us <ArrowRight className="w-4 h-4 text-[#0A0E1A]" />
                    </button>
                  </div>
                  
                  {/* Right Column Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: Droplets, title: "Cut Energy Costs", desc: "Reduce or eliminate your electricity bills with solar power that pays for itself." },
                      { icon: Leaf, title: "Eco-Friendly", desc: "Clean energy that reduces your carbon footprint and protects our planet." },
                      { icon: Home, title: "Increase Home Value", desc: "Solar panels can increase your property value and make your home more attractive." },
                      { icon: Shield, title: "Built to Last", desc: "High-quality solar systems with industry-leading warranties for peace of mind." }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow text-left flex flex-col justify-between min-h-[200px] relative">
                        <div>
                          <div className="w-12 h-12 rounded-full bg-[#FBBF24]/10 border border-[#F1BA33]/30 flex items-center justify-center mb-6">
                            <card.icon className="w-5 h-5 text-[#F1BA33]" />
                          </div>
                          <h3 className="text-md font-sans font-bold text-gray-900 mb-3">{card.title}</h3>
                          <p className="text-xs text-gray-500 font-light leading-relaxed">{card.desc}</p>
                        </div>
                        {/* Gold Indicator Line */}
                        <div className="w-8 h-[2.5px] bg-[#FBBF24] mt-6"></div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </section>

            {/* Statistics Banner */}
            <section className="relative py-24 bg-[#0A0E1A] overflow-hidden">
               {/* Solar Panel Texture Background */}
               <div className="absolute inset-0 z-0 opacity-15">
                 <Image src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover" alt="Solar texture backdrop" fill />
               </div>
               
               <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                  {[
                    { num: "10+", label: "Years of Experience" },
                    { num: "5,000+", label: "Happy Customers" },
                    { num: "25MW+", label: "Installed Capacity" },
                    { num: "1M+", label: "Tons of CO2 Offset" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col border-l border-[#F1BA33]/40 pl-6">
                      <span className="text-4xl md:text-5xl font-mono text-white font-black">{stat.num}</span>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-2 font-mono">{stat.label}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Our Simple Process Section */}
            <section className="py-24 bg-[#F8F9FA] border-b border-gray-200">
               <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                 <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Our Simple Process</span>
                 <h2 className="text-3xl md:text-5xl font-sans font-black text-gray-900 leading-tight mb-20">From Consultation to Clean Energy</h2>
                 
                 {/* 5-step process visual tree */}
                 <div className="relative flex flex-col lg:flex-row justify-between items-center w-full gap-8">
                   {/* Dotted Connecting Line (Desktop) */}
                   <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#F1BA33]/30 z-0"></div>

                   {[
                     { num: "1", title: "Free Consultation", desc: "We learn about your energy needs and goals.", icon: MessageSquare },
                     { num: "2", title: "Custom Design", desc: "We design a solar system customized for your home or business.", icon: ClipboardList },
                     { num: "3", title: "Easy Financing", desc: "We offer flexible financing options to make solar affordable.", icon: FileText },
                     { num: "4", title: "Professional Installation", desc: "Our certified installers set up your system with precision and care.", icon: Wrench },
                     { num: "5", title: "Start Saving", desc: "Generate clean energy and start saving from day one.", icon: Sun }
                   ].map((step, idx) => (
                     <div key={idx} className="flex-1 flex flex-col items-center relative z-10 max-w-[220px]">
                       {/* Circle Container */}
                       <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 relative hover:border-[#F1BA33] transition-colors group">
                         <step.icon className="w-9 h-9 text-gray-700 group-hover:text-[#F1BA33] transition-colors" />
                         
                         {/* Mini Step Number Bubble */}
                         <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#FBBF24] text-[#0A0E1A] font-mono font-bold text-xs flex items-center justify-center shadow-md">
                           {step.num}
                         </div>
                       </div>
                       
                       <h3 className="text-md font-sans font-bold text-gray-950 mt-4 mb-2">{step.title}</h3>
                       <p className="text-xs text-gray-500 font-light leading-relaxed px-2">{step.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* Recent Projects & Testimonial Section */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left: Recent Projects */}
                  <div className="lg:col-span-8 space-y-10 text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-6 border-b border-gray-150">
                      <div>
                        <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-3">Recent Projects</span>
                        <h2 className="text-2xl md:text-3xl font-sans font-black text-gray-900 leading-tight">Powering Homes & Businesses</h2>
                      </div>
                      <button 
                        onClick={() => navigateTo('projects')}
                        className="bg-transparent border border-gray-300 hover:border-gray-900 px-5 py-3 text-xs font-mono uppercase tracking-[0.15em] transition-all flex items-center gap-2"
                      >
                        View All Projects <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: "Modern Home, CA", size: "9.6 kW System", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
                        { title: "Commercial Building, TX", size: "250 kW System", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" },
                        { title: "Family Home, FL", size: "7.2 kW System", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" }
                      ].map((project, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                          <div className="h-44 relative bg-gray-900 overflow-hidden">
                            <Image src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" fill />
                          </div>
                          <div className="p-5">
                            <h3 className="text-sm font-sans font-bold text-gray-900">{project.title}</h3>
                            <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-2 font-mono font-medium">
                              <MapPin className="w-3.5 h-3.5 text-[#F1BA33]" /> {project.size}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Customer Testimonials */}
                  <div className="lg:col-span-4 space-y-8 text-left bg-[#F8F9FA] p-8 border border-gray-100 rounded-lg">
                    <div>
                      <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-3">What Our Customers Say</span>
                      
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#F1BA33] text-[#F1BA33]" />)}
                      </div>
                      
                      <p className="text-gray-700 italic text-sm leading-relaxed mb-8 font-light">
                        "Brighter Solar made the entire process easy and stress-free. Our energy bills are lower than ever!"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white relative shadow-sm">
                          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah M." className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-sm font-sans font-bold text-gray-900">Sarah M.</div>
                          <div className="text-[10px] text-gray-400 font-mono tracking-wider">San Diego, CA</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Slider Indicator Dots */}
                    <div className="flex gap-2 justify-start pt-4">
                       <span className="w-6 h-1.5 bg-[#F1BA33]"></span>
                       <span className="w-2 h-1.5 bg-gray-300"></span>
                       <span className="w-2 h-1.5 bg-gray-300"></span>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* About Us Page */}
        {currentPage === 'about' && (
          <div>
            <section className="bg-[#0A0E1A] text-white py-24 border-b border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Our History</span>
                <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-none mb-6">About Brighter Solar</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed font-light">Powering a sustainable, clean energy future for families and businesses since 2012.</p>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block">Our Mission</span>
                    <h2 className="text-3xl md:text-5xl font-sans font-black text-gray-900 leading-tight">Committed to Quality Solar Engineering</h2>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Brighter Solar was established with a singular mission: to make solar energy simple, affordable, and accessible. Over the years, we have designed and installed solar grids that help clients drastically lower their monthly electricity bills.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      We handle everything in-house: from initial architectural design and financing analysis to professional permit logistics and final panel commissioning.
                    </p>
                  </div>
                  
                  <div className="lg:col-span-6 relative">
                    <div className="aspect-video bg-gray-900 overflow-hidden rounded-lg shadow-xl relative">
                      <Image src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-80" alt="Solar farm engineering" fill />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Our Specialists</span>
                <h2 className="text-3xl md:text-5xl font-sans font-black text-gray-900 mb-20">Meet the Leadership</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Robert Sterling", role: "Chief Solar Engineer", img: "https://i.pravatar.cc/300?img=60", desc: "Designing high-capacity grid structures and home arrays for over 12 years." },
                    { name: "Diana Vance", role: "Horticulture & Impact Lead", img: "https://i.pravatar.cc/300?img=49", desc: "Overseeing ecological restoration and environmental certifications for solar yards." },
                    { name: "Marcus Cruz", role: "Paving & Structure Chief", img: "https://i.pravatar.cc/300?img=12", desc: "Oversees panel mounting stability, battery integrations, and electrical connections." }
                  ].map((member, i) => (
                    <div key={i} className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm text-center flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-6 relative border-2 border-white shadow-md">
                        <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                      </div>
                      <h3 className="text-md font-sans font-bold text-gray-900 mb-1">{member.name}</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#F1BA33] mb-4 font-bold">{member.role}</span>
                      <p className="text-gray-500 text-xs leading-relaxed font-light">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* How It Works / Process Page */}
        {currentPage === 'process' && (
          <div>
            <section className="bg-[#0A0E1A] text-white py-24 border-b border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Methodology</span>
                <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-none mb-6">Our Process</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed font-light">From initial assessment to clean solar energy—how we transform your property.</p>
              </div>
            </section>

            <section className="py-24 bg-white">
               <div className="max-w-4xl mx-auto px-6 text-left space-y-12">
                 {[
                   { step: "01", title: "Site Assessment & Consult", desc: "Our specialists evaluate your roof pitch, orientation, and local tree shading grids using advanced solar modeling equipment. We review your current utility invoices to design the target system capacity." },
                   { step: "02", title: "Custom Energy Blueprint", desc: "Our in-house engineers design a custom solar layout mapping the panels, inverters, battery storage slots, and electrical runs. We model exact projections of monthly savings and power returns." },
                   { step: "03", title: "Financing & Approvals", desc: "We align federal tax credits, local energy rebates, and custom financing solutions. We manage all city building permits, HOA applications, and utility connection authorization paperwork." },
                   { step: "04", title: "Precision Commissioning", desc: "Our certified installation technicians securely mount the brackets, install the solar modules, wire inverters, and connect batteries. The entire setup is double-checked for structural load and safety compliance." },
                   { step: "05", title: "System Activation", desc: "We test and activate the system alongside local building inspectors. You begin harvesting clean energy immediately and can monitor your yield daily via our dashboard utility." }
                 ].map((proc, idx) => (
                   <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 pb-12 border-b border-gray-150 last:border-b-0 last:pb-0 items-start">
                     <span className="text-5xl font-mono text-[#F1BA33]/30 font-black tracking-tight shrink-0">{proc.step}</span>
                     <div>
                       <h3 className="text-lg font-sans font-bold text-gray-900 mb-3">{proc.title}</h3>
                       <p className="text-xs text-gray-500 leading-relaxed font-light">{proc.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </section>
          </div>
        )}

        {/* Services Page */}
        {currentPage === 'services' && (
          <div>
            <section className="bg-[#0A0E1A] text-white py-24 border-b border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Our Solutions</span>
                <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-none mb-6">Solar Engineering Solutions</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed font-light">Custom clean energy systems designed for long-term savings and visual harmony.</p>
              </div>
            </section>

            <section className="py-24 bg-[#F8F9FA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "Residential Solar", icon: Home, desc: "Bespoke panel arrays sized specifically for single-family residences to lower monthly electricity bills.", spec: "High-Efficiency Panels / 25-Yr Warranty" },
                    { title: "Commercial Solar", icon: Building2, desc: "High-capacity solar system engineering for offices, corporate headquarters, and warehouses.", spec: "SaaS Dashboard / Commercial Grade" },
                    { title: "Solar Battery Storage", icon: Zap, desc: "Advanced battery integration (Tesla Powerwall) to store energy for evening use or emergency grid outages.", spec: "Automated Switchover / High Storage" },
                    { title: "EV Charging Infrastructure", icon: TrendingUp, desc: "Level 2 and Level 3 electric vehicle charger installations wired straight to your solar network.", spec: "Smart App Control / Fast Charging" },
                    { title: "Panel Maintenance & Optimization", icon: ShieldCheck, desc: "Pure deionized water washing, diagnostic thermography sweeps, and inverter updates.", spec: "Annual Cleaning Plan / Streak-Free" }
                  ].map((service, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between min-h-[300px]">
                      <div>
                        <div className="w-12 h-12 rounded-full bg-[#FBBF24]/10 border border-[#F1BA33]/30 flex items-center justify-center mb-6">
                          <service.icon className="w-5 h-5 text-[#F1BA33]" />
                        </div>
                        <h3 className="text-md font-sans font-bold text-gray-950 mb-3">{service.title}</h3>
                        <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">{service.desc}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#F1BA33] uppercase tracking-wider block mb-4">{service.spec}</span>
                        <button 
                          onClick={() => navigateTo('contact')}
                          className="bg-[#0A0E1A] hover:bg-[#F1BA33] hover:text-[#0A0E1A] text-white py-3 px-4 text-[10px] font-mono uppercase tracking-widest transition-all w-full text-center"
                        >
                          Book Solution
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Projects Page */}
        {currentPage === 'projects' && (
          <div>
            <section className="bg-[#0A0E1A] text-white py-24 border-b border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Case Studies</span>
                <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-none mb-6">Completed Portfolios</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed font-light">Explore how we helped residential and commercial clients go sustainable.</p>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "The Sand Hill Sanctuary", size: "9.6 kW System", loc: "Atherton, CA", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
                    { title: "Sterling Commercial Warehouse", size: "250 kW System", loc: "Austin, TX", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" },
                    { title: "Atherton Meadow Ranch", size: "12.4 kW System", loc: "Atherton, CA", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" },
                    { title: "Los Altos Modernist Residence", size: "8.2 kW System", loc: "Los Altos Hills, CA", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
                    { title: "Woodside Solar Carport", size: "15.0 kW System", loc: "Woodside, CA", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" },
                    { title: "Suburban Family Rooftop", size: "7.2 kW System", loc: "Miami, FL", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" }
                  ].map((p, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left">
                      <div className="h-48 relative bg-gray-900 overflow-hidden">
                        <Image src={p.img} alt={p.title} className="w-full h-full object-cover opacity-90" fill />
                      </div>
                      <div className="p-6">
                        <h3 className="text-md font-sans font-bold text-gray-900 mb-2">{p.title}</h3>
                        <div className="flex justify-between items-center text-xs font-mono font-semibold text-gray-500 mt-4">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#F1BA33]" /> {p.loc}</span>
                          <span className="text-[#F1BA33]">{p.size}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Blog Page */}
        {currentPage === 'blog' && (
          <div>
            <section className="bg-[#0A0E1A] text-white py-24 border-b border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Articles</span>
                <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-none mb-6">Clean Energy Insights</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed font-light">Stay updated with the latest in solar incentives, battery storage, and sustainability.</p>
              </div>
            </section>

            <section className="py-24 bg-[#F8F9FA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: "Federal Solar Tax Credits in 2026", date: "June 12, 2026", read: "5 min read", desc: "A breakdown of the current residential clean energy credit structures and how you can save up to 30% on installations.", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" },
                    { title: "Rooftop Solar vs. Battery Storage", date: "May 28, 2026", read: "4 min read", desc: "How adding battery storage to your rooftop panels maximizes grid independence and guarantees backup power during blackouts.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
                    { title: "Does Rain Clean Your Solar Panels?", date: "April 15, 2026", read: "3 min read", desc: "Common solar misconceptions debunked. Learn why regular rain does not remove baked-on pollen and why deionized clean is required.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" }
                  ].map((blog, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-44 relative bg-gray-900 overflow-hidden">
                        <Image src={blog.img} alt={blog.title} className="w-full h-full object-cover" fill />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-mono text-[#FBBF24]">
                          <span>{blog.date}</span>
                          <span>{blog.read}</span>
                        </div>
                        <h3 className="text-md font-sans font-bold text-gray-900">{blog.title}</h3>
                        <p className="text-xs text-gray-500 font-light leading-relaxed">{blog.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && (
          <div>
            <section className="bg-[#0A0E1A] text-white py-24 border-b border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="text-[#F1BA33] font-mono font-bold text-xs tracking-[0.2em] uppercase block mb-4">Inquire</span>
                <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-none mb-6">Contact Our Experts</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed font-light">Request a free estimate or system blueprint. We reply within 24 hours.</p>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Info Column */}
                  <div className="lg:col-span-5 text-left space-y-8">
                    <h2 className="text-3xl md:text-4xl font-sans font-black text-gray-900 leading-tight">Secure Your Savings Projection</h2>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Ready to go solar? Reach out to schedule a custom solar blueprint. Our solar engineers will measure your roof pitch, verify shading coefficients, and provide a detailed savings breakdown.
                    </p>
                    
                    <div className="space-y-6 bg-[#F8F9FA] p-8 border border-gray-150 rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#F1BA33] shrink-0">
                          <Phone className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold">Direct Line</h4>
                          <p className="font-sans font-bold text-gray-900 text-sm mt-1">(888) 555-0196</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#F1BA33] shrink-0">
                          <Mail className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold">Diagnostics Email</h4>
                          <p className="font-sans font-bold text-gray-900 text-sm mt-1">info@brighter-solar.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#F1BA33] shrink-0">
                          <MapPin className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold">Headquarters</h4>
                          <p className="font-sans font-bold text-gray-900 text-sm mt-1">123 Solar Way, Suite 100, Irvine, CA 92618</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Form Column */}
                  <div className="lg:col-span-7 w-full bg-white p-8 md:p-12 border border-gray-150 rounded-lg shadow-sm">
                    {formSubmitted ? (
                      <div className="py-20 text-center space-y-6">
                        <div className="w-14 h-14 border-2 border-[#F1BA33] text-[#0A0E1A] bg-[#FBBF24]/10 rounded-full flex items-center justify-center mx-auto shadow-md">
                          <Check className="w-6 h-6 text-[#F1BA33]" strokeWidth={3} />
                        </div>
                        <h3 className="text-2xl font-sans font-black text-gray-950 uppercase tracking-wide">Inquiry Authenticated</h3>
                        <p className="text-gray-500 text-xs max-w-sm mx-auto font-light leading-relaxed">
                          Thank you. Your current utility billing detail has been saved. A solar engineer will connect shortly to finalize your custom layout.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                        <h3 className="text-xl font-sans font-black text-gray-900 mb-6 pb-4 border-b border-gray-150 uppercase tracking-wide">Estimate Intake Form</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold mb-2">Full Name</label>
                            <input 
                              type="text" 
                              required 
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="bg-[#F8F9FA] border border-gray-200 px-4 py-3.5 text-xs focus:outline-none focus:border-[#F1BA33] rounded-md transition-colors" 
                              placeholder="e.g. Robert Smith"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold mb-2">Direct Phone</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="bg-[#F8F9FA] border border-gray-200 px-4 py-3.5 text-xs focus:outline-none focus:border-[#F1BA33] rounded-md transition-colors" 
                              placeholder="e.g. (888) 555-0100"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold mb-2">Secure Email</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="bg-[#F8F9FA] border border-gray-200 px-4 py-3.5 text-xs focus:outline-none focus:border-[#F1BA33] rounded-md transition-colors" 
                              placeholder="e.g. r.smith@gmail.com"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold mb-2">Property Profile</label>
                            <select 
                              value={formData.propertyType}
                              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                              className="bg-[#F8F9FA] border border-gray-200 px-4 py-3.5 text-xs focus:outline-none focus:border-[#F1BA33] rounded-md transition-colors cursor-pointer"
                            >
                              <option value="residential">Residential Villa</option>
                              <option value="commercial">Commercial Building</option>
                              <option value="carport">Solar Carport / Charger</option>
                              <option value="maintenance">Ongoing Panel Wash</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold mb-2">Average Monthly Electric Bill</label>
                          <select 
                            value={formData.bill}
                            onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                            className="bg-[#F8F9FA] border border-gray-200 px-4 py-3.5 text-xs focus:outline-none focus:border-[#F1BA33] rounded-md transition-colors cursor-pointer"
                          >
                            <option value="under-$100">Under $100</option>
                            <option value="$100-$150">$100 - $150</option>
                            <option value="$150-$200">$150 - $200</option>
                            <option value="$200-$300">$200 - $300</option>
                            <option value="over-$300">Over $300</option>
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1BA33] font-bold mb-2">Project Brief</label>
                          <textarea 
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="bg-[#F8F9FA] border border-gray-200 px-4 py-3.5 text-xs focus:outline-none focus:border-[#F1BA33] rounded-md transition-colors leading-relaxed" 
                            placeholder="Detail your roof age, shading factors, target timeframe..."
                          />
                        </div>

                        <button 
                          type="submit" 
                          className="w-full bg-[#F1BA33] hover:bg-[#E5A910] text-[#0A0E1A] py-4.5 text-xs font-mono uppercase tracking-widest font-bold transition-all border border-[#F1BA33]/50"
                        >
                          Submit Projections Form
                        </button>
                      </form>
                    )}
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Ready to Go Solar? Final CTA Banner */}
      <section className="relative py-20 bg-[#0A0E1A] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover" alt="Solar grid final cta backdrop" fill />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6 text-left max-w-2xl">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 hidden sm:flex">
              <Sun className="w-8 h-8 text-[#FBBF24]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-black text-white leading-tight">Ready to Go Solar?</h2>
              <p className="text-xs text-gray-300 font-light mt-2 leading-relaxed">Get a free, no-obligation quote and see how much you can save.</p>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-[#F1BA33] hover:bg-[#E5A910] text-[#0A0E1A] px-10 py-5 text-xs font-mono uppercase tracking-[0.22em] font-bold transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Get Your Free Quote <ArrowRight className="w-4 h-4 text-[#0A0E1A]" />
          </button>
        </div>
      </section>

      {/* Deep Dark Footer */}
      <footer className="bg-[#060B16] text-gray-400 pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="text-left space-y-6">
            <div className="flex items-center gap-2.5">
               <Sun className="w-8 h-8 text-[#F1BA33]" />
               <div className="leading-none">
                 <div className="font-sans font-black text-lg tracking-wider text-white">BRIGHTER</div>
                 <div className="text-[8px] tracking-[0.22em] text-[#FBBF24] font-bold mt-1 uppercase font-mono">SOLAR</div>
               </div>
            </div>
            <p className="text-xs font-light leading-relaxed">
              Brighter Solar is dedicated to providing clean, affordable, and reliable solar energy solutions.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#F1BA33] hover:text-[#F1BA33] transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
               ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="text-white font-mono font-bold mb-8 tracking-[0.2em] uppercase text-xs">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono uppercase tracking-wider">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors text-left">Home</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => navigateTo('process')} className="hover:text-white transition-colors text-left">How It Works</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors text-left">Services</button></li>
              <li><button onClick={() => navigateTo('projects')} className="hover:text-white transition-colors text-left">Projects</button></li>
              <li><button onClick={() => navigateTo('blog')} className="hover:text-white transition-colors text-left">Blog</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-white font-mono font-bold mb-8 tracking-[0.2em] uppercase text-xs">Services</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono uppercase tracking-wider">
              <li><span className="text-gray-400">Residential Solar</span></li>
              <li><span className="text-gray-400">Commercial Solar</span></li>
              <li><span className="text-gray-400">Solar Battery Storage</span></li>
              <li><span className="text-gray-400">EV Charging Infrastructure</span></li>
              <li><span className="text-gray-400">Solar Maintenance Plan</span></li>
            </ul>
          </div>

          <div className="text-left space-y-6">
            <h4 className="text-white font-mono font-bold tracking-[0.2em] uppercase text-xs">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-xs">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F1BA33] shrink-0" />
                <a href="tel:8885550196" className="hover:text-white transition-colors font-mono">(888) 555-0196</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F1BA33] shrink-0" />
                <a href="mailto:info@brighter-solar.com" className="hover:text-white transition-colors font-mono">info@brighter-solar.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F1BA33] shrink-0" />
                <span className="font-mono">123 Solar Way, Suite 100<br />Irvine, CA 92618</span>
              </li>
              <li className="pt-2 border-t border-white/5 text-[10px] font-mono text-gray-500">
                License # CSLB 1234567
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500">
          <p>© 2026 Brighter Solar. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

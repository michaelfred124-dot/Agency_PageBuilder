"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, Trees, Shovel, Droplets, Trash2, CheckCircle2, Star, 
  Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight, 
  Clock, ShieldCheck, User, Menu, X, Check, Heart, Sparkles
} from 'lucide-react';

export default function GreenscapeTemplate() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'projects' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'design', message: '' });

  const navigateTo = (page: 'home' | 'services' | 'about' | 'projects' | 'contact') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans bg-[#F4F0EA] text-[#1A1A1A] selection:bg-[#0B1B13] selection:text-[#C5A880] overflow-x-hidden">
      {/* Top Banner - Luxury Announcement */}
      <div className="bg-[#0B1B13] text-[#C5A880] py-3 px-6 md:px-12 text-[10px] tracking-[0.25em] font-medium flex justify-between items-center border-b border-[#C5A880]/15 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
          Artisanal Landscape Architecture & Design
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <span className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-[#C5A880]/70" />
            By Appointment Only
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-[#C5A880]/70" />
            Silicon Valley & Peninsula
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#F4F0EA]/85 backdrop-blur-md py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60] border-b border-[#C5A880]/15">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="bg-[#0B1B13] p-2 rounded-full border border-[#C5A880]/30 shadow-md">
            <Leaf className="w-5 h-5 text-[#C5A880]" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif text-2xl tracking-tight text-[#0B1B13]">Greenscape</span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#C5A880] uppercase mt-1">Est. 2012</span>
          </div>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A]/70">
          <button 
            onClick={() => navigateTo('home')} 
            className={`transition-colors relative py-1 ${currentPage === 'home' ? 'text-[#0B1B13] font-bold' : 'hover:text-[#0B1B13]'}`}
          >
            Home
            {currentPage === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]"></span>}
          </button>
          <button 
            onClick={() => navigateTo('services')} 
            className={`transition-colors relative py-1 ${currentPage === 'services' ? 'text-[#0B1B13] font-bold' : 'hover:text-[#0B1B13]'}`}
          >
            Services
            {currentPage === 'services' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]"></span>}
          </button>
          <button 
            onClick={() => navigateTo('about')} 
            className={`transition-colors relative py-1 ${currentPage === 'about' ? 'text-[#0B1B13] font-bold' : 'hover:text-[#0B1B13]'}`}
          >
            About
            {currentPage === 'about' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]"></span>}
          </button>
          <button 
            onClick={() => navigateTo('projects')} 
            className={`transition-colors relative py-1 ${currentPage === 'projects' ? 'text-[#0B1B13] font-bold' : 'hover:text-[#0B1B13]'}`}
          >
            Portfolio
            {currentPage === 'projects' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]"></span>}
          </button>
          <button 
            onClick={() => navigateTo('contact')} 
            className={`transition-colors relative py-1 ${currentPage === 'contact' ? 'text-[#0B1B13] font-bold' : 'hover:text-[#0B1B13]'}`}
          >
            Inquire
            {currentPage === 'contact' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]"></span>}
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigateTo('contact')}
            className="hidden sm:flex bg-[#0B1B13] hover:bg-[#153224] text-[#C5A880] px-6 py-3.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all items-center gap-2 rounded-none border border-[#C5A880]/30 hover:border-[#C5A880] shadow-xl hover:-translate-y-0.5"
          >
            Request Portfolio <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="lg:hidden text-[#0B1B13] p-1.5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-[#F4F0EA] border-b border-[#C5A880]/20 shadow-2xl p-8 flex flex-col gap-6 text-xs font-mono uppercase tracking-[0.2em] text-[#1A1A1A] z-[99]"
            >
              <button onClick={() => navigateTo('home')} className={`text-left py-2 ${currentPage === 'home' ? 'text-[#C5A880]' : ''}`}>Home</button>
              <button onClick={() => navigateTo('services')} className={`text-left py-2 ${currentPage === 'services' ? 'text-[#C5A880]' : ''}`}>Services</button>
              <button onClick={() => navigateTo('about')} className={`text-left py-2 ${currentPage === 'about' ? 'text-[#C5A880]' : ''}`}>About</button>
              <button onClick={() => navigateTo('projects')} className={`text-left py-2 ${currentPage === 'projects' ? 'text-[#C5A880]' : ''}`}>Portfolio</button>
              <button onClick={() => navigateTo('contact')} className={`text-left py-2 ${currentPage === 'contact' ? 'text-[#C5A880]' : ''}`}>Inquire</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Switcher */}
      <main>
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 px-6 md:px-12 bg-[#0B1B13] overflow-hidden">
              {/* Refined Luxury Background overlay */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80" 
                  className="w-full h-full object-cover opacity-35 filter brightness-90 contrast-105 scale-105 transition-all duration-1000" 
                  alt="Scenic Luxury Estate" 
                  referrerPolicy="no-referrer"
                  priority
                  fill 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B13] via-[#0B1B13]/70 to-[#0B1B13]/40" />
              </div>
              
              <div className="max-w-7xl mx-auto w-full relative z-10 text-white flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-4xl"
                >
                  <div className="flex justify-center items-center gap-3 mb-8">
                     <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C5A880] bg-[#C5A880]/10 border border-[#C5A880]/30 px-4 py-1.5 rounded-full">
                       Exquisite Craftsmanship
                     </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-light leading-[1.05] tracking-tight mb-8 text-[#FAF8F5]">
                    Where Nature <br /><span className="italic text-[#C5A880] font-normal">Meets Architecture</span>
                  </h1>
                  <p className="text-md md:text-lg text-[#F4F0EA]/80 max-w-2xl mx-auto leading-relaxed mb-12 font-light tracking-wide">
                    We curate sustainable, award-winning exterior spaces that seamlessly blend structural design with raw ecological beauty. Elevating estates throughout Silicon Valley.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 mb-16">
                    <button 
                      onClick={() => navigateTo('contact')}
                      className="bg-[#C5A880] text-[#0B1B13] px-10 py-5 text-[10px] font-mono uppercase tracking-[0.25em] hover:bg-[#FAF8F5] transition-all border border-[#C5A880] shadow-2xl hover:shadow-[#C5A880]/20"
                    >
                      Begin Your Consultation
                    </button>
                    <button 
                      onClick={() => navigateTo('projects')}
                      className="bg-transparent border border-white/20 hover:border-[#C5A880] text-white px-10 py-5 text-[10px] font-mono uppercase tracking-[0.25em] transition-all hover:bg-white/5"
                    >
                      Explore Portfolio
                    </button>
                  </div>
                  
                  {/* Luxury Ratings / Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left">
                     {[
                       { val: "10+", label: "Years of Fine Design" },
                       { val: "250+", label: "Bespoke Estates Curated" },
                       { val: "Awwwards", label: "Featured Architecture" },
                       { val: "5.0 Rating", label: "Client Retainership" }
                     ].map((stat, idx) => (
                       <div key={idx} className="flex flex-col border-l border-[#C5A880]/35 pl-4">
                         <span className="text-2xl font-serif text-[#C5A880] font-semibold">{stat.val}</span>
                         <span className="text-[9px] font-mono uppercase tracking-widest text-white/50 mt-1">{stat.label}</span>
                       </div>
                     ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Curated Solutions Overview */}
            <section className="py-32 bg-[#F4F0EA] border-y border-[#C5A880]/15">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">Artisanal Offerings</span>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-[#0B1B13] tracking-tight mb-20">
                  Custom Outdoor Architecture
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { 
                      icon: Leaf, 
                      title: 'Artistic Horticulture', 
                      desc: 'Carefully chosen organic planting matrices structured around local microclimates and native soil dynamics.' 
                    },
                    { 
                      icon: Trees, 
                      title: 'Architectural Design', 
                      desc: 'Full scale 3D conceptual drafting matching your estate\'s structural aesthetic with customized flora layouts.' 
                    },
                    { 
                      icon: Shovel, 
                      title: 'Stonework & Paving', 
                      desc: 'Hand-carved premium flagstones, custom-grouted terraces, and elegant boundary masonry created by master masons.' 
                    },
                    { 
                      icon: Droplets, 
                      title: 'Sensory Water Features', 
                      desc: 'Calming infinity reflection ponds, minimalist stone cascades, and modern oxygenating pools integrated with nature.' 
                    },
                    { 
                      icon: ShieldCheck, 
                      title: 'Smart Preservation Systems', 
                      desc: 'Low-impact, water-efficient preservation networks that conserve natural resources while maintaining lush growth.' 
                    },
                    { 
                      icon: Sparkles, 
                      title: 'Luminescent Illumination', 
                      desc: 'Bespoke low-voltage architectural lighting mapped to highlight texture, contour, and nocturnal depth.' 
                    }
                  ].map((service, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => navigateTo('services')}
                      className="bg-[#FAF8F5] p-8 border border-[#C5A880]/20 hover:border-[#C5A880]/80 transition-all duration-500 text-left group cursor-pointer shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[300px]"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-full border border-[#C5A880]/40 flex items-center justify-center mb-6 bg-white transition-colors group-hover:bg-[#0B1B13] group-hover:border-[#0B1B13]">
                          <service.icon className="w-5 h-5 text-[#0B1B13] group-hover:text-[#C5A880] transition-colors" />
                        </div>
                        <h3 className="text-lg font-serif font-light text-[#0B1B13] mb-4 uppercase tracking-wide">{service.title}</h3>
                        <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-light">{service.desc}</p>
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#C5A880] group-hover:text-[#0B1B13] transition-colors pt-4 border-t border-[#C5A880]/10">
                        View Solution Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Asymmetrical Editorial About Section */}
            <section className="py-32 bg-[#0B1B13] text-[#FAF8F5] relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-6 relative">
                    <div className="aspect-[4/5] overflow-hidden border border-[#C5A880]/25 relative z-10 shadow-2xl">
                      <Image 
                        src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80" 
                        className="w-full h-full object-cover filter brightness-95" 
                        alt="Elegantly Structured Garden" 
                        referrerPolicy="no-referrer" 
                        fill 
                      />
                    </div>
                    {/* Floating Fine Art Badge Overlay */}
                    <div className="absolute -bottom-10 -right-6 w-2/3 bg-[#FAF8F5] p-8 border border-[#C5A880]/30 shadow-2xl text-[#1A1A1A] z-20 hidden md:block">
                       <Leaf className="w-8 h-8 text-[#C5A880] mb-4" />
                       <h4 className="text-lg font-serif font-light leading-tight mb-2 text-[#0B1B13]">Crafting Spaces with Intentionality</h4>
                       <p className="text-[#1A1A1A]/60 text-[11px] leading-relaxed mb-6 font-light">Every project begins with a deep geological assessment and creative alignment session.</p>
                       <button onClick={() => navigateTo('contact')} className="w-full bg-[#0B1B13] hover:bg-[#153224] text-[#C5A880] px-4 py-3.5 text-[9px] font-mono uppercase tracking-[0.2em] transition-all flex items-center justify-between group border border-[#C5A880]/30">
                          Secure Consultation <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-6 space-y-8 text-left">
                    <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block">The Philosophy</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-[#FAF8F5] leading-tight">
                      Designed to Mature <br /><span className="italic text-[#C5A880] font-normal">With Grace</span>
                    </h2>
                    <p className="text-sm text-[#FAF8F5]/80 leading-relaxed font-light max-w-xl">
                      We do not build static landscapes. We sculpt living architecture that dynamically shifts, grows, and enriches with each passing season. Combining high-end structural textures with organic sustainability.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 py-8 border-y border-[#C5A880]/20 max-w-md">
                      <div>
                         <span className="text-3xl font-serif text-[#C5A880] font-light">14+</span>
                         <p className="text-[9px] font-mono uppercase tracking-widest text-[#FAF8F5]/50 mt-2">Design Awards</p>
                      </div>
                      <div>
                         <span className="text-3xl font-serif text-[#C5A880] font-light">100%</span>
                         <p className="text-[9px] font-mono uppercase tracking-widest text-[#FAF8F5]/50 mt-2">Native Species</p>
                      </div>
                      <div>
                         <span className="text-3xl font-serif text-[#C5A880] font-light">3D</span>
                         <p className="text-[9px] font-mono uppercase tracking-widest text-[#FAF8F5]/50 mt-2">Scale Modeling</p>
                      </div>
                    </div>

                    <button onClick={() => navigateTo('about')} className="bg-transparent border border-[#C5A880] text-[#C5A880] hover:text-[#0B1B13] hover:bg-[#C5A880] px-8 py-4.5 font-mono uppercase tracking-[0.2em] transition-all text-[10px] flex items-center gap-3">
                      Read Our Narrative <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Masonry Portfolio Highlight */}
            <section className="py-32 bg-[#F4F0EA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                  <div>
                    <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">Curated Archive</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#0B1B13] tracking-tight">Featured Collaborations</h2>
                  </div>
                  <button onClick={() => navigateTo('projects')} className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#0B1B13] hover:text-[#C5A880] transition-colors border-b border-[#0B1B13]/30 pb-2">
                    View Entire Archive <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Editorial Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'The Sand Hill Sanctuary', loc: 'Atherton, CA', img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80' },
                    { title: 'Monolithic Front Gardens', loc: 'Los Altos Hills, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80' },
                    { title: 'Stonework Terrace', loc: 'Woodside, CA', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
                    { title: 'Ecological Meadow', loc: 'Palo Alto, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80' }
                  ].map((p, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -8 }}
                      className="group relative h-[420px] overflow-hidden border border-[#C5A880]/20 cursor-pointer shadow-md transition-all duration-500"
                    >
                      <Image 
                        src={p.img} 
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-all duration-[1000ms] group-hover:grayscale-0 group-hover:scale-105" 
                        alt={p.title} 
                        referrerPolicy="no-referrer" 
                        fill 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B13]/90 via-transparent to-transparent z-10" />
                      <div className="absolute bottom-8 left-8 right-8 text-white translate-y-3 group-hover:translate-y-0 transition-all duration-500 z-20">
                         <h4 className="text-xl font-serif font-light mb-2">{p.title}</h4>
                         <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                            <MapPin className="w-3 h-3 text-[#C5A880]" /> {p.loc}
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* High-End Testimonial Quote */}
            <section className="py-32 bg-[#0B1B13] border-t border-[#C5A880]/15 relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-8">Client Experience</span>
                <p className="text-2xl md:text-3xl font-serif font-light text-[#FAF8F5] leading-relaxed mb-12 italic">
                  "The architectural depth and visual harmony Greenscape brought to our estate exceeded every standard. They designed not just a garden, but a timeless sanctuary that matches our home's modernist aesthetic."
                </p>
                <div className="flex flex-col items-center">
                   <div className="w-12 h-[1px] bg-[#C5A880] mb-4"></div>
                   <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FAF8F5]">Evelyn & Thomas Vance</span>
                   <span className="text-[9px] font-mono uppercase tracking-widest text-[#C5A880] mt-1">Atherton Estate Owners</span>
                </div>
              </div>
            </section>

            {/* Bottom Invitation Section */}
            <section className="py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#C5A880]/20">
              <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <Leaf className="w-10 h-10 text-[#C5A880] mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-6xl font-serif font-light text-[#0B1B13] tracking-tight leading-tight mb-8">
                  Initiate Your Landscape <br /><span className="italic font-normal text-[#C5A880]">Architecture Inquiry</span>
                </h2>
                <p className="text-sm text-[#1A1A1A]/70 mb-16 max-w-xl mx-auto font-light leading-relaxed">
                  We invite you to reach out for a private landscape review. Our horticulturalists and designers will evaluate your estate’s microclimate and topography to align design options.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-12 text-left max-w-3xl mx-auto border-y border-[#C5A880]/20 py-10 mb-16">
                   <div className="flex-1 flex flex-col gap-2">
                      <span className="text-[#C5A880] text-[9px] font-mono uppercase tracking-[0.25em]">Consultation Line</span>
                      <span className="text-md font-serif text-[#0B1B13] font-medium">(408) 123-4567</span>
                   </div>
                   <div className="w-[1px] bg-[#C5A880]/20 hidden md:block" />
                   <div className="flex-1 flex flex-col gap-2">
                      <span className="text-[#C5A880] text-[9px] font-mono uppercase tracking-[0.25em]">Design Studio</span>
                      <span className="text-md font-serif text-[#0B1B13] font-medium">By Appointment Only</span>
                   </div>
                   <div className="w-[1px] bg-[#C5A880]/20 hidden md:block" />
                   <div className="flex-1 flex flex-col gap-2">
                      <span className="text-[#C5A880] text-[9px] font-mono uppercase tracking-[0.25em]">Corporate Office</span>
                      <span className="text-md font-serif text-[#0B1B13] font-medium">Silicon Valley, California</span>
                   </div>
                </div>
                
                <button 
                  onClick={() => navigateTo('contact')}
                  className="bg-[#0B1B13] hover:bg-[#153224] text-[#C5A880] px-12 py-5 font-mono uppercase tracking-[0.25em] transition-all text-[11px] border border-[#C5A880]/30 shadow-2xl inline-flex items-center gap-3"
                >
                   Begin Dialogue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Services Page */}
        {currentPage === 'services' && (
          <div>
            <section className="bg-[#0B1B13] text-white py-28 border-b border-[#C5A880]/20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">The Atelier</span>
                <h1 className="text-4xl md:text-6xl font-serif font-light text-[#FAF8F5] leading-none mb-6">Our Design Services</h1>
                <p className="text-[#FAF8F5]/60 max-w-xl mx-auto text-sm font-light leading-relaxed">Artisanal solutions spanning structural layout, botanical architecture, and preservation systems.</p>
              </div>
            </section>

            {/* High-End Services List */}
            <section className="py-32 bg-[#F4F0EA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { 
                      title: 'Architectural Landscaping', 
                      desc: 'Weekly or bi-weekly detailed botanical care, soil testing, organic preservation amendments, and seasonal pruning tailored to specimen plantings.',
                      img: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80',
                      features: ['Botanical Detailing', 'Organic Micro-Nutrients', 'Pruning Aesthetics', 'Weed Mitigation']
                    },
                    { 
                      title: 'Botanical Layouts', 
                      desc: 'Complete ecosystem design combining local flora matrices, deciduous shade structure, and textured ground-covering to integrate with estate layouts.',
                      img: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
                      features: ['Native Cal-Flora Focus', '3D Photorealistic Models', 'Deciduous Matrices', 'Seasonal Color Flow']
                    },
                    { 
                      title: 'Luxury Hardscaping', 
                      desc: 'Meticulously crafted terraces, custom paving patterns using imported stone, retaining walls, and custom steps built to last generations.',
                      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
                      features: ['Imported Stone Terraces', 'Preservation Paving', 'Handmade Boundary Walls', 'Structural Seating']
                    },
                    { 
                      title: 'Preservation Hydrology', 
                      desc: 'Installation and diagnostic maintenance of high-efficiency drip loops, smart climate-linked controllers, and greywater diversion piping.',
                      img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80',
                      features: ['Atmospheric Smart Valves', 'Subterranean Drip Loops', 'Soil-Moisture Feedback', 'Hydrology Auditing']
                    },
                    { 
                      title: 'Botanical Pruning', 
                      desc: 'Detailed structural tree shaping, decorative boxwood pruning, arborist diagnostics, and custom support grids for young saplings.',
                      img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80',
                      features: ['Artistic Boxwood Shaping', 'Arborist Health Audits', 'Organic Sapling Protection', 'Espalier Training']
                    },
                    { 
                      title: 'Seasonal Cleansing', 
                      desc: 'Hauling of storm debris, refreshing of organic cedar mulching layers, cleaning stone terraces, and preparation of irrigation for frost.',
                      img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80',
                      features: ['Debris Extraction', 'Premium Cedar Mulch', 'Stone Pressure Washing', 'Frost System Drains']
                    }
                  ].map((service, i) => (
                    <div 
                      key={i} 
                      className="bg-[#FAF8F5] overflow-hidden border border-[#C5A880]/20 flex flex-col hover:border-[#C5A880] transition-all duration-500 shadow-sm hover:shadow-xl group"
                    >
                      <div className="h-56 relative overflow-hidden bg-zinc-200 border-b border-[#C5A880]/15">
                        <Image src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill />
                      </div>
                      <div className="p-8 flex-1 flex flex-col text-left justify-between min-h-[340px]">
                        <div>
                          <h3 className="text-xl font-serif font-light text-[#0B1B13] mb-4 uppercase tracking-wide">{service.title}</h3>
                          <p className="text-[#1A1A1A]/70 font-light text-xs leading-relaxed mb-6">{service.desc}</p>
                          
                          <div className="mb-8 pt-4 border-t border-[#C5A880]/15 grid grid-cols-2 gap-3 text-[10px] font-mono uppercase tracking-widest text-[#C5A880]">
                            {service.features.map((f, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" strokeWidth={2} />
                                <span className="truncate">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button 
                          onClick={() => navigateTo('contact')}
                          className="w-full bg-[#0B1B13] hover:bg-[#FAF8F5] text-[#C5A880] hover:text-[#0B1B13] font-mono py-4 px-4 border border-[#C5A880]/40 transition-all text-[9px] uppercase tracking-widest text-center"
                        >
                          Book Solution Consultation
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Insured certification block */}
            <section className="py-24 bg-[#0B1B13] border-t border-[#C5A880]/15">
              <div className="max-w-4xl mx-auto px-6 text-center text-[#FAF8F5]">
                <ShieldCheck className="w-10 h-10 text-[#C5A880] mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 text-[#FAF8F5]">Licensed, Bonded & Insured</h3>
                <p className="text-[#FAF8F5]/60 font-light text-sm leading-relaxed max-w-2xl mx-auto">
                  We guarantee absolute preservation safety. Our teams are backed by comprehensive estate liability policies, workers' compensation protection, and licensed pesticide management qualifications.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <div>
            <section className="bg-[#0B1B13] text-white py-28 border-b border-[#C5A880]/20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">The Lineage</span>
                <h1 className="text-4xl md:text-6xl font-serif font-light text-[#FAF8F5] leading-none mb-6">Our Heritage & Design</h1>
                <p className="text-[#FAF8F5]/60 max-w-xl mx-auto text-sm font-light leading-relaxed">Discover our commitment to crafting living architecture since 2012.</p>
              </div>
            </section>

            <section className="py-32 bg-[#F4F0EA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block">The Standard</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#0B1B13] leading-tight mb-6">Preserving Visual Purity</h2>
                    <p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed mb-6">
                      Greenscape Landscaping was founded in Atherton, California with a vision to replace standard cookie-cutter landscaping with custom-made exterior architecture. We realized that estates deserved exterior spaces built with the same precision, typography, and visual hierarchy as their interior designs.
                    </p>
                    <p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed mb-8">
                      Over the last decade, we have stayed small, selecting only a few estates each season to maintain meticulous design standards. By coupling geological expertise with fine architectural drawing, we craft layouts that will inspire for decades.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pb-6 border-b border-[#C5A880]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880] shrink-0">
                          <Check className="w-4.5 h-4.5" strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0B1B13]">Atherton Crew Chiefs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880] shrink-0">
                          <Check className="w-4.5 h-4.5" strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0B1B13]">Eco Preservation</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative">
                    <div className="aspect-video lg:aspect-square overflow-hidden border border-[#C5A880]/20 shadow-2xl relative">
                      <Image src="https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover filter brightness-95" alt="Finished Estate Layout" fill />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Team / Artists Section */}
            <section className="py-32 bg-[#FAF8F5] border-t border-[#C5A880]/20">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">The Artists</span>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-[#0B1B13] tracking-tight mb-20">The Studio Minds</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: 'Marcus Sterling', role: 'Lead Architect', img: 'https://i.pravatar.cc/300?img=60', desc: 'Devoted to structural layouts, drawing inspiration from Italian modernism and Japanese stone minimalism.' },
                    { name: 'Diana Jenkins', role: 'Chief Horticulturalist', img: 'https://i.pravatar.cc/300?img=49', desc: 'Over 12 years studying native California drylands, soil nutrition, and drought-tolerant preservation.' },
                    { name: 'Tyler Cruz', role: 'Masonic Masonry Director', img: 'https://i.pravatar.cc/300?img=12', desc: 'Master mason working with imported flagstone, granite, and interlocking concrete terracing.' }
                  ].map((member, i) => (
                    <div 
                      key={i}
                      className="bg-[#FAF8F5] p-8 border border-[#C5A880]/20 text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="w-28 h-28 rounded-full border border-[#C5A880]/40 overflow-hidden bg-zinc-100 mb-6 relative">
                        <img src={member.img} alt={member.name} className="object-cover w-full h-full filter brightness-95 grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <h3 className="text-lg font-serif font-light text-[#0B1B13] mb-1">{member.name}</h3>
                      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-4">{member.role}</span>
                      <p className="text-[#1A1A1A]/70 font-light text-xs leading-relaxed">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Projects / Gallery Page */}
        {currentPage === 'projects' && (
          <div>
            <section className="bg-[#0B1B13] text-white py-28 border-b border-[#C5A880]/20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">The Portfolio</span>
                <h1 className="text-4xl md:text-6xl font-serif font-light text-[#FAF8F5] leading-none mb-6">Living Masterpieces</h1>
                <p className="text-[#FAF8F5]/60 max-w-xl mx-auto text-sm font-light leading-relaxed">A catalog of residential estates and garden designs curated by our team.</p>
              </div>
            </section>

            {/* Masonry Layout */}
            <section className="py-32 bg-[#F4F0EA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    { title: 'The Atherton Hillside Sanctuary', desc: 'Sculpted from a dry hillside, we integrated flagstone pathways, natural boulder steps, dry meadow plantings, and low-consumption smart hydration systems.', loc: 'Atherton, CA', img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=1200&q=80', tag: 'Terrace Masonry' },
                    { title: 'Los Altos Hills Monolithic Gardens', desc: 'Drought-tolerant structural softscaping with dark organic mulch contours, massive limestone slab elements, and architectural landscape illumination.', loc: 'Los Altos Hills, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80', tag: 'Preservation Softscape' },
                    { title: 'Woodside Paved Terrace & Shrub Grids', desc: 'Linear imported stone terrace bordered by structured boxwoods and low-voltage path lighting to emphasize structural depth.', loc: 'Woodside, CA', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', tag: 'Stonework' },
                    { title: 'Palo Alto Native Meadowlands', desc: 'Replacing traditional lawn layouts with water-conserving California sages, local sedges, and structured stone boundaries.', loc: 'Palo Alto, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=1200&q=80', tag: 'Ecological Restoration' }
                  ].map((p, i) => (
                    <div 
                      key={i}
                      className="bg-[#FAF8F5] overflow-hidden border border-[#C5A880]/20 flex flex-col md:flex-row hover:border-[#C5A880] transition-all duration-500 shadow-sm hover:shadow-xl group"
                    >
                      <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-zinc-200 border-b md:border-b-0 md:border-r border-[#C5A880]/15 shrink-0">
                        <Image src={p.img} alt={p.title} className="w-full h-full object-cover filter brightness-95" fill />
                        <span className="absolute top-4 left-4 bg-[#0B1B13] text-[#C5A880] border border-[#C5A880]/30 px-3 py-1 text-[9px] font-mono uppercase tracking-widest rounded-full z-20 shadow-md">{p.tag}</span>
                      </div>
                      <div className="p-8 flex-1 flex flex-col text-left justify-between min-h-[300px]">
                        <div>
                          <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A880] mb-3">
                            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> {p.loc}
                          </div>
                          <h3 className="text-xl font-serif font-light text-[#0B1B13] mb-4 uppercase tracking-wide">{p.title}</h3>
                          <p className="text-[#1A1A1A]/70 font-light text-xs leading-relaxed mb-6">{p.desc}</p>
                        </div>

                        <button 
                          onClick={() => navigateTo('contact')}
                          className="self-start text-[#C5A880] hover:text-[#0B1B13] font-mono text-[9px] tracking-widest uppercase flex items-center gap-1.5 group/link border-b border-transparent hover:border-[#0B1B13] pb-1 transition-colors"
                        >
                          Book Design Align <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </button>
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
            <section className="bg-[#0B1B13] text-white py-28 border-b border-[#C5A880]/20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="font-mono text-[#C5A880] tracking-[0.3em] text-[10px] uppercase block mb-4">The Dialogue</span>
                <h1 className="text-4xl md:text-6xl font-serif font-light text-[#FAF8F5] leading-none mb-6">Secure Your Portfolio Consultation</h1>
                <p className="text-[#FAF8F5]/60 max-w-xl mx-auto text-sm font-light leading-relaxed">Request private consultation or design portfolio delivery. We reply within 24 hours.</p>
              </div>
            </section>

            <section className="py-32 bg-[#F4F0EA]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Info Cards */}
                  <div className="lg:col-span-5 space-y-8 text-left">
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-[#0B1B13] leading-tight mb-6">Begin the Alignment</h2>
                    <p className="text-[#1A1A1A]/75 font-light text-sm leading-relaxed mb-8">
                      Ready to reshape your property’s exterior architecture? Contact us to schedule an initial design alignment. Marcus Sterling and our lead horticulturalist will visit your site, measure geological constraints, and discuss design motifs.
                    </p>
                    
                    <div className="space-y-6 bg-[#FAF8F5] p-8 border border-[#C5A880]/20 shadow-xl">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] bg-white shrink-0">
                          <Phone className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">Design Line</h4>
                          <p className="font-serif font-medium text-[#0B1B13] text-sm mt-1">(408) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] bg-white shrink-0">
                          <Mail className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">Email Studio</h4>
                          <p className="font-serif font-medium text-[#0B1B13] text-sm mt-1">studio@greenscape.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] bg-white shrink-0">
                          <MapPin className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">Headquarters</h4>
                          <p className="font-serif font-medium text-[#0B1B13] text-sm mt-1">123 Greenway Dr, Sunnyvale, CA 94086</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] bg-white shrink-0">
                          <Clock className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">Availability</h4>
                          <p className="font-serif font-medium text-[#0B1B13] text-sm mt-1">Mon - Sat: 7:00 AM - 6:00 PM</p>
                          <p className="text-[#1A1A1A]/40 text-[9px] font-mono uppercase tracking-widest mt-1">Consultation by Appointment Only</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Form Card */}
                  <div className="lg:col-span-7 w-full bg-[#FAF8F5] p-8 md:p-12 border border-[#C5A880]/20 shadow-2xl">
                    {formSubmitted ? (
                      <div className="py-20 text-center">
                        <div className="w-14 h-14 border border-[#C5A880] text-[#0B1B13] bg-[#C5A880]/15 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                          <Check className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-serif font-light text-[#0B1B13] mb-3 uppercase tracking-wide">Inquiry Authenticated</h3>
                        <p className="text-[#1A1A1A]/60 text-xs max-w-sm mx-auto font-light leading-relaxed">
                          Your request has been filed in our private design system. Marcus Sterling will contact you shortly to coordinate your site consultation.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-8">
                        <h3 className="text-xl font-serif font-light text-[#0B1B13] mb-6 pb-4 border-b border-[#C5A880]/20 text-left uppercase tracking-wider">Consultation Request</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col text-left">
                            <label className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-3">Your Full Name</label>
                            <input 
                              type="text" 
                              required 
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="bg-[#F4F0EA] border border-[#C5A880]/25 px-4 py-4.5 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-[#0B1B13] transition-colors rounded-none" 
                              placeholder="e.g. Johnathan Smith"
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <label className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-3">Direct Phone Line</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="bg-[#F4F0EA] border border-[#C5A880]/25 px-4 py-4.5 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-[#0B1B13] transition-colors rounded-none" 
                              placeholder="e.g. (408) 555-0100"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col text-left">
                            <label className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-3">Secure Email</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="bg-[#F4F0EA] border border-[#C5A880]/25 px-4 py-4.5 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-[#0B1B13] transition-colors rounded-none" 
                              placeholder="e.g. j.smith@gmail.com"
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <label className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-3">Consultation Class</label>
                            <select 
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="bg-[#F4F0EA] border border-[#C5A880]/25 px-4 py-4.5 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-[#0B1B13] transition-colors rounded-none appearance-none cursor-pointer"
                            >
                              <option value="design">Landscape Architectural Planning</option>
                              <option value="hardscaping">Terracing & Paved Hardscape</option>
                              <option value="irrigation">Water Preservation & Irrigation Setup</option>
                              <option value="preservation">Ongoing Botanical Preservation</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col text-left">
                          <label className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-3">Estate / Design Brief</label>
                          <textarea 
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="bg-[#F4F0EA] border border-[#C5A880]/25 px-4 py-4.5 text-xs font-light focus:outline-none focus:border-[#0B1B13] transition-colors rounded-none leading-relaxed" 
                            placeholder="Detail your estate size, topography, current aesthetics, and goals..."
                          />
                        </div>

                        <button 
                          type="submit" 
                          className="w-full bg-[#0B1B13] hover:bg-[#153224] text-[#C5A880] py-5 text-[10px] font-mono uppercase tracking-[0.25em] border border-[#C5A880]/30 shadow-2xl transition-all"
                        >
                          Send Estimate Request
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

      {/* Main Editorial Footer */}
      <footer className="bg-[#0B1B13] text-[#FAF8F5]/60 pt-28 pb-16 px-6 md:px-12 border-t border-[#C5A880]/15">
        <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-4 gap-16 mb-24 text-left">
              <div>
                 <div className="flex items-center gap-3 mb-8">
                   <div className="bg-[#FAF8F5] p-2 rounded-full border border-[#C5A880]/30 shadow-md">
                     <Leaf className="w-5 h-5 text-[#0B1B13]" />
                   </div>
                   <div className="flex flex-col leading-none">
                     <span className="font-serif text-2xl tracking-tight text-white">Greenscape</span>
                     <span className="text-[9px] font-mono tracking-[0.35em] text-[#C5A880] uppercase mt-1">Est. 2012</span>
                   </div>
                 </div>
                 <p className="text-[#FAF8F5]/50 text-xs leading-relaxed mb-8 max-w-xs font-light">
                   Curated landscape architecture and botanical preservation serving Silicon Valley estates.
                 </p>
                 <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                       <a key={i} href="#" className="w-9 h-9 rounded-full border border-[#FAF8F5]/10 flex items-center justify-center text-[#FAF8F5]/60 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                       </a>
                    ))}
                 </div>
              </div>
              
              <div>
                <h4 className="font-mono uppercase tracking-[0.2em] text-[10px] mb-8 text-[#FAF8F5]">Navigation</h4>
                <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40">
                  <button onClick={() => navigateTo('home')} className="hover:text-white text-left transition-colors">Home</button>
                  <button onClick={() => navigateTo('services')} className="hover:text-white text-left transition-colors">Services</button>
                  <button onClick={() => navigateTo('about')} className="hover:text-white text-left transition-colors">About Us</button>
                  <button onClick={() => navigateTo('projects')} className="hover:text-white text-left transition-colors">Portfolio</button>
                  <button onClick={() => navigateTo('contact')} className="hover:text-white text-left transition-colors">Inquire</button>
                </div>
              </div>

              <div>
                <h4 className="font-mono uppercase tracking-[0.2em] text-[10px] mb-8 text-[#FAF8F5]">Solutions</h4>
                <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40">
                   <span>Horticulture</span>
                   <span>3D Estate Drawing</span>
                   <span>Flagstone Masonry</span>
                   <span>Hydrology Systems</span>
                   <span>Preservation Maintenance</span>
                </div>
              </div>

              <div>
                <h4 className="font-mono uppercase tracking-[0.2em] text-[10px] mb-8 text-[#FAF8F5]">Design Studio</h4>
                <div className="space-y-6 text-xs font-light">
                   <div className="flex items-start gap-4">
                      <Phone className="w-4.5 h-4.5 text-[#C5A880] shrink-0" />
                      <div>
                        <p className="font-serif font-medium text-white">(408) 123-4567</p>
                        <p className="text-white/40 text-[9px] font-mono uppercase tracking-widest mt-1">Mon - Sat: 7AM - 6PM</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Mail className="w-4.5 h-4.5 text-[#C5A880] shrink-0" />
                      <p className="font-serif font-medium text-white">studio@greenscape.com</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <MapPin className="w-4.5 h-4.5 text-[#C5A880] shrink-0" />
                      <p className="font-serif font-medium text-white whitespace-pre-line">123 Greenway Dr, <br />Sunnyvale, CA 94086</p>
                   </div>
                </div>
              </div>
           </div>
           
           <div className="pt-12 border-t border-[#FAF8F5]/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[9px] font-mono uppercase tracking-widest text-[#FAF8F5]/30">© {new Date().getFullYear()} Greenscape Landscaping. All rights reserved.</p>
              <div className="flex gap-8 text-[9px] font-mono uppercase tracking-widest text-[#FAF8F5]/30">
                 <Link href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</Link>
                 <Link href="#" className="hover:text-[#C5A880] transition-colors">Terms of Service</Link>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

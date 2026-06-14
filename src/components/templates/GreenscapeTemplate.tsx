"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, Trees, Shovel, Droplets, Trash2, CheckCircle2, Star, 
  Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight, 
  Clock, ShieldCheck, User, Menu, X, Check, Eye
} from 'lucide-react';

const COLORS = {
  emerald: '#4C6B36',
  emeraldLight: '#7BA05C',
  sand: '#F7F6F2',
  dark: '#1A1A1A',
  text: '#333333'
};

export default function GreenscapeTemplate() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'projects' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'lawn-care', message: '' });

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
    <div className="min-h-screen font-sans bg-white text-[#333333] selection:bg-[#4C6B36] selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#1A1A1A] text-white py-2 px-6 md:px-12 text-[10px] md:text-xs font-medium flex justify-between items-center border-b border-white/10 uppercase tracking-widest">
        <div className="flex items-center gap-2">
           <MapPin className="w-3 h-3 text-[#7BA05C]" />
           Proudly serving Sunnyvale and surrounding areas
        </div>
        <div className="hidden md:flex items-center gap-6">
           <div className="flex items-center gap-2">
             <Clock className="w-3 h-3 text-[#7BA05C]" />
             Mon - Sat: 7AM - 6PM
           </div>
           <div className="flex items-center gap-2">
             <Phone className="w-3 h-3 text-[#7BA05C]" />
             (408) 123-4567
           </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60] shadow-sm border-b border-zinc-100">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="bg-[#4C6B36] p-1.5 rounded-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter uppercase">Greenscape</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#4C6B36] uppercase font-mono">Landscaping</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
          <button 
            onClick={() => navigateTo('home')} 
            className={`transition-colors border-b-2 pb-1 ${currentPage === 'home' ? 'text-[#4C6B36] border-[#4C6B36]' : 'hover:text-[#4C6B36] border-transparent'}`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('services')} 
            className={`transition-colors border-b-2 pb-1 ${currentPage === 'services' ? 'text-[#4C6B36] border-[#4C6B36]' : 'hover:text-[#4C6B36] border-transparent'}`}
          >
            Services
          </button>
          <button 
            onClick={() => navigateTo('about')} 
            className={`transition-colors border-b-2 pb-1 ${currentPage === 'about' ? 'text-[#4C6B36] border-[#4C6B36]' : 'hover:text-[#4C6B36] border-transparent'}`}
          >
            About
          </button>
          <button 
            onClick={() => navigateTo('projects')} 
            className={`transition-colors border-b-2 pb-1 ${currentPage === 'projects' ? 'text-[#4C6B36] border-[#4C6B36]' : 'hover:text-[#4C6B36] border-transparent'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => navigateTo('contact')} 
            className={`transition-colors border-b-2 pb-1 ${currentPage === 'contact' ? 'text-[#4C6B36] border-[#4C6B36]' : 'hover:text-[#4C6B36] border-transparent'}`}
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-[#4C6B36] text-white px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#3D552B] transition-all flex items-center gap-2 rounded-md border-2 border-black shadow-[4px_4px_0px_#000]"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </button>
          <button className="lg:hidden text-[#1A1A1A] p-1.5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b-4 border-black shadow-xl p-8 flex flex-col gap-5 text-xs font-black uppercase tracking-widest text-[#1A1A1A] z-[99] border-t border-zinc-100"
            >
              <button onClick={() => navigateTo('home')} className={`text-left ${currentPage === 'home' ? 'text-[#4C6B36]' : ''}`}>Home</button>
              <button onClick={() => navigateTo('services')} className={`text-left ${currentPage === 'services' ? 'text-[#4C6B36]' : ''}`}>Services</button>
              <button onClick={() => navigateTo('about')} className={`text-left ${currentPage === 'about' ? 'text-[#4C6B36]' : ''}`}>About</button>
              <button onClick={() => navigateTo('projects')} className={`text-left ${currentPage === 'projects' ? 'text-[#4C6B36]' : ''}`}>Projects</button>
              <button onClick={() => navigateTo('contact')} className={`text-left ${currentPage === 'contact' ? 'text-[#4C6B36]' : ''}`}>Contact</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content Switcher */}
      <main>
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-[90vh] py-32 flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Beautiful garden" 
                  referrerPolicy="no-referrer"
                  priority
                  fill 
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                     <span className="bg-[#7BA05C] text-black px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-black shadow-[2px_2px_0px_#000]">Top Rated</span>
                     <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Residential & Commercial</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tighter uppercase">
                    Beautiful landscapes.<br />Built for your life.
                  </h1>
                  <p className="text-lg md:text-xl font-medium mb-10 text-white/90 max-w-2xl leading-relaxed">
                    Expert landscaping design and maintenance services that enhance your property and add lasting value. Rooted in quality since 2012.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => navigateTo('contact')}
                      className="bg-[#7BA05C] text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-[#8CB16E] transition-all text-xs rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-0.5 active:shadow-[2px_2px_0px_#000]"
                    >
                      Get a Free Quote
                    </button>
                    <button 
                      onClick={() => navigateTo('services')}
                      className="backdrop-blur-md bg-black/20 border-2 border-white/30 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all text-xs rounded-lg shadow-xl"
                    >
                      Our Services
                    </button>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-3">
                     <div className="flex -space-x-2">
                       {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-[#4C6B36] flex items-center justify-center overflow-hidden relative">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" className="object-cover w-full h-full" />
                          </div>
                       ))}
                     </div>
                     <div className="flex flex-col">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80">4.9 Stars on Google (250+ Reviews)</span>
                     </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Services Quick Grid */}
            <section className="py-20 bg-white border-y border-zinc-150">
              <div className="container mx-auto px-6 md:px-12 text-center">
                <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">Core Solutions</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-16">Outdoor Services we offer</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {[
                    { icon: Shovel, title: 'Lawn Care', desc: 'Expert maintenance for every season.' },
                    { icon: Trees, title: 'Landscape Design', desc: 'Custom designs tailored to you.' },
                    { icon: Leaf, title: 'Garden & Planting', desc: 'Beautiful plants and expert care.' },
                    { icon: Droplets, title: 'Hardscaping', desc: 'Patios, walkways, and walls.' },
                    { icon: ShieldCheck, title: 'Irrigation', desc: 'Efficient water-saving systems.' },
                    { icon: Trash2, title: 'Cleanup', desc: 'Yard cleanup and debris removal.' }
                  ].map((service, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => navigateTo('services')}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#F7F6F2] border-2 border-black flex items-center justify-center mb-4 transition-colors group-hover:bg-[#4C6B36] shadow-[3px_3px_0px_#000] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                        <service.icon className="w-7 h-7 text-[#4C6B36] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-widest mb-2 px-2">{service.title}</h3>
                      <p className="text-[10px] text-[#333333]/50 leading-tight md:px-2">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Showcase */}
            <section className="py-24 bg-[#F7F6F2] overflow-hidden">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_#000] relative z-10 bg-zinc-200">
                      <Image src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Garden design" referrerPolicy="no-referrer" fill />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-[#1A1A1A] p-8 md:p-12 rounded-2xl border-4 border-black shadow-[8px_8px_0px_#000] hidden md:flex flex-col justify-center text-white z-20">
                       <Leaf className="w-12 h-12 text-[#7BA05C] mb-6" />
                       <h4 className="text-2xl font-black uppercase tracking-tighter leading-none mb-4">Transform your outdoor space</h4>
                       <p className="text-white/50 text-xs mb-8">Get a free, no-obligation quote today.</p>
                       <button onClick={() => navigateTo('contact')} className="bg-white text-black px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#7BA05C] transition-all flex items-center justify-between group border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
                          Get Your Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-left">
                    <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block">About Greenscape</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">Rooted in our community. <br />Committed to excellence.</h2>
                    <p className="text-base text-[#333333]/70 mb-10 leading-relaxed max-w-xl">
                      Greenscape Landscaping is a locally owned and operated business serving Sunnyvale and surrounding areas. We take pride in our work, our reliability, and the relationships we build with our clients.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 py-8 border-y border-[#333333]/15">
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                           <ShieldCheck className="w-5 h-5 text-[#4C6B36]" />
                           <span className="text-4xl font-black tracking-tighter font-mono">10+</span>
                         </div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Years Experience</p>
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                           <User className="w-5 h-5 text-[#4C6B36]" />
                           <span className="text-4xl font-black tracking-tighter font-mono">500+</span>
                         </div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Happy Customers</p>
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                           <CheckCircle2 className="w-5 h-5 text-[#4C6B36]" />
                           <span className="text-4xl font-black tracking-tighter font-mono">100%</span>
                         </div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Satisfaction</p>
                      </div>
                    </div>

                    <button onClick={() => navigateTo('about')} className="bg-[#1A1A1A] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#4C6B36] transition-all text-xs rounded-md shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-3">
                      Learn More About Us <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Overview */}
            <section className="py-24 bg-white border-t border-zinc-100">
              <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                  <div>
                    <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">Our Work</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Projects we're proud of</h2>
                  </div>
                  <button onClick={() => navigateTo('projects')} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] hover:text-[#4C6B36] transition-colors border-b-2 border-black/10 pb-2">
                    View All Projects <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Backyard Retreat', loc: 'Sunnyvale, CA', img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80' },
                    { title: 'Modern Front Yard', loc: 'Mountain View, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80' },
                    { title: 'Elegant Pathway', loc: 'Cupertino, CA', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
                    { title: 'Drought-Tolerant', loc: 'Santa Clara, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80' }
                  ].map((p, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -6 }}
                      className="group relative h-[380px] rounded-2xl overflow-hidden border-4 border-black shadow-[6px_6px_0px_#000] cursor-pointer"
                    >
                      <Image src={p.img} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={p.title} referrerPolicy="no-referrer" fill />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      <div className="absolute bottom-6 left-6 text-white translate-y-3 group-hover:translate-y-0 transition-all duration-500 z-20">
                         <h4 className="text-xl font-bold uppercase tracking-tighter mb-1">{p.title}</h4>
                         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70">
                            <MapPin className="w-3.5 h-3.5 text-[#7BA05C]" /> {p.loc}
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-[#1A1A1A] relative overflow-hidden border-t-4 border-black">
              <div className="absolute inset-0 z-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
              <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                <Leaf className="w-16 h-16 text-[#7BA05C] mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">Let's build something <br />beautiful together.</h2>
                <p className="text-base text-white/60 mb-12 max-w-xl mx-auto">Contact us today for your free estimate and start your transition to a more beautiful life outdoors.</p>
                
                <div className="flex flex-wrap justify-center gap-8 text-lg font-bold">
                   <div className="flex flex-col gap-2">
                      <span className="text-[#7BA05C] text-xs uppercase font-black tracking-widest">Call Us</span>
                      <span>(408) 123-4567</span>
                   </div>
                   <div className="w-px h-16 bg-white/10 hidden md:block" />
                   <div className="flex flex-col gap-2">
                      <span className="text-[#7BA05C] text-xs uppercase font-black tracking-widest">Schedule Online</span>
                      <span>Fast & Easy Setup</span>
                   </div>
                   <div className="w-px h-16 bg-white/10 hidden md:block" />
                   <div className="flex flex-col gap-2">
                      <span className="text-[#7BA05C] text-xs uppercase font-black tracking-widest">Send a Message</span>
                      <span>Reply within 24 Hours</span>
                   </div>
                </div>
                
                <button 
                  onClick={() => navigateTo('contact')}
                  className="mt-16 bg-[#7BA05C] text-black px-12 py-6 font-black uppercase tracking-[0.2em] hover:bg-white transition-all text-sm rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,0.2)] flex items-center gap-4 mx-auto"
                >
                   Get a Free Quote <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Services Page */}
        {currentPage === 'services' && (
          <div>
            <section className="bg-[#1A1A1A] text-white py-20 border-b-4 border-black relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
              <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="bg-[#7BA05C] text-black px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-black shadow-[2px_2px_0px_#000] inline-block mb-4">Our Services</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">Professional Solutions</h1>
                <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-semibold">Transforming yards, gardens, and commercial outdoor properties in Silicon Valley.</p>
              </div>
            </section>

            {/* Grid display */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { 
                      title: 'Lawn Care & Maintenance', 
                      desc: 'Weekly or bi-weekly mowing, aeration, seasonal fertilization, soil amendments, and complete weed abatement to keep lawns lush and vibrant.',
                      img: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80',
                      features: ['Precision Edge Trim', 'Core Aeration', 'Organic Fertilization', 'Weed Control']
                    },
                    { 
                      title: 'Landscape Design &Softscaping', 
                      desc: 'Full layout planning combining native planting zones, shade design, mulch placement, sod laying, and structural garden planning.',
                      img: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
                      features: ['Native Plant Selection', '3D Design Concepts', 'Softscape Layouts', 'Eco-friendly Focus']
                    },
                    { 
                      title: 'Hardscape Construction', 
                      desc: 'Beautiful, durable stonework including custom paved patios, flagstone pathways, brick walkways, retaining walls, and steps.',
                      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
                      features: ['Stone & Brick Pave', 'Retaining Walls', 'Custom Patios', 'Walkway Paths']
                    },
                    { 
                      title: 'Smart Irrigation Setup', 
                      desc: 'Installation, optimization, and repairing of water-efficient irrigation networks, drip systems, smart WiFi timers, and valves.',
                      img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80',
                      features: ['WiFi Smart Controllers', 'Drip Line Setup', 'Sprinkler Repair', 'Water Audits']
                    },
                    { 
                      title: 'Garden Care & Planting', 
                      desc: 'Careful flower bed design, shrub shaping, native plantings, tree health checks, pruning, and landscape lighting setup.',
                      img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80',
                      features: ['Shrub & Tree Pruning', 'Flower Bed Layouts', 'Garden Mulching', 'Lighting Systems']
                    },
                    { 
                      title: 'Seasonal Cleanup', 
                      desc: 'Complete debris clean, leaf hauling, storm damage restoration, mulch rejuvenation, and readying your yard for summer/winter.',
                      img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80',
                      features: ['Leaf & Debris Haul', 'Mulch Refresh', 'Gutter Cleans', 'Overgrowth Cut']
                    }
                  ].map((service, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="h-48 relative overflow-hidden bg-zinc-200 border-b-4 border-black">
                        <Image src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" fill />
                      </div>
                      <div className="p-8 flex-1 flex flex-col text-left">
                        <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-4">{service.title}</h3>
                        <p className="text-zinc-500 font-semibold text-xs leading-relaxed mb-6 flex-1">{service.desc}</p>
                        
                        <div className="mb-6 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-2 text-[10px] font-black uppercase tracking-widest text-[#4C6B36]">
                          {service.features.map((f, j) => (
                            <div key={j} className="flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#7BA05C] shrink-0" strokeWidth={3} />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>

                        <button 
                          onClick={() => navigateTo('contact')}
                          className="w-full bg-[#F7F6F2] hover:bg-[#4C6B36] hover:text-white text-zinc-800 font-black py-3 px-4 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs uppercase tracking-wider text-center"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Banner CTA */}
            <section className="py-20 bg-[#F7F6F2] border-t border-zinc-100">
              <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
                <ShieldCheck className="w-12 h-12 text-[#4C6B36] mx-auto mb-6" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-zinc-900">Licensed, Bonded & Insured</h3>
                <p className="text-zinc-500 font-semibold text-sm leading-relaxed mb-8">We take pride in our safe working habits, our drug-free local workforce, and our comprehensive liability and workers' compensation policies. Sleep soundly knowing your property is in professional hands.</p>
                <button onClick={() => navigateTo('contact')} className="bg-[#1A1A1A] text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#4C6B36] transition-all rounded-lg border-2 border-black shadow-[4px_4px_0px_#000]">
                  Get Free Estimate Now
                </button>
              </div>
            </section>
          </div>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <div>
            <section className="bg-[#1A1A1A] text-white py-20 border-b-4 border-black relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
              <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="bg-[#7BA05C] text-black px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-black shadow-[2px_2px_0px_#000] inline-block mb-4">Our History</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">About Greenscape</h1>
                <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-semibold">Creating beautiful environments and lasting client relationships since 2012.</p>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6 text-left">
                    <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block">Rooted in excellence</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">Our design philosophy</h2>
                    <p className="text-zinc-500 font-semibold text-sm leading-relaxed mb-6">
                      Greenscape Landscaping was established with a singular mission: to provide the highest-quality landscaping design, construction, and horticultural care in the South Bay. Our founder envisioned a business that combined creative layout structures with highly scientific soil prep and water-saving irrigation planning.
                    </p>
                    <p className="text-zinc-500 font-semibold text-sm leading-relaxed mb-8">
                      Over the last decade, we have expanded our service area, hired licensed pesticide technicians and experienced arborists, and designed over 500 gardens. Yet, we remain a family-owned, community-first local business.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pb-6 border-b border-zinc-150">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                          <Check className="w-5 h-5" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-zinc-900">Local Crew Only</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                          <Check className="w-5 h-5" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-zinc-900">Eco-Friendly Practices</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-video @lg:aspect-square rounded-2xl overflow-hidden border-4 border-black shadow-[10px_10px_0px_#000] relative bg-zinc-200">
                      <Image src="https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Our work" fill />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Team section */}
            <section className="py-20 bg-[#F7F6F2] border-t border-zinc-100">
              <div className="container mx-auto px-6 md:px-12 text-center">
                <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">Our Crew</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-16">Meet the experts</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: 'Marcus Sterling', role: 'Founder & Lead Designer', img: 'https://i.pravatar.cc/300?img=60', desc: 'Over 15 years designing custom hardscape and softscape gardens in the Bay Area.' },
                    { name: 'Diana Jenkins', role: 'Head Horticulturalist', img: 'https://i.pravatar.cc/300?img=49', desc: 'Expert in native Californian drought-tolerant flora and organic soil biology.' },
                    { name: 'Tyler Cruz', role: 'Irrigation & Hardscape Crew Chief', img: 'https://i.pravatar.cc/300?img=12', desc: 'Certified irrigation specialist ensuring maximum water conservation and paving durability.' }
                  ].map((member, i) => (
                    <div 
                      key={i}
                      className="bg-white p-8 rounded-2xl border-4 border-black shadow-[6px_6px_0px_#000] text-center flex flex-col items-center"
                    >
                      <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden bg-zinc-100 mb-6 relative">
                        <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 mb-1">{member.name}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#4C6B36] mb-4">{member.role}</span>
                      <p className="text-zinc-500 font-semibold text-xs leading-relaxed">{member.desc}</p>
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
            <section className="bg-[#1A1A1A] text-white py-20 border-b-4 border-black relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
              <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="bg-[#7BA05C] text-black px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-black shadow-[2px_2px_0px_#000] inline-block mb-4">Our Gallery</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">Living Portfolios</h1>
                <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-semibold">Browse our residential and commercial landscaping transformations.</p>
              </div>
            </section>

            {/* Grid layout */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    { title: 'The Sunnyvale Backyard Retreat', desc: 'We transformed a flat, dry lawn into a multi-level stone patio with flagstone paths, a native planting grid, and low-voltage custom path lighting.', loc: 'Sunnyvale, CA', img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=1200&q=80', tag: 'Hardscaping' },
                    { title: 'Modern Front Yard Sod & Lighting', desc: 'Drought-tolerant softscape design with gravel outlines, drought-resistant shrubs, custom cedar planting beds, and smart drip irrigation.', loc: 'Mountain View, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80', tag: 'Drought-Tolerant' },
                    { title: 'Flagstone Pathway & Shrub Border', desc: 'A curvilinear flagstone path set in sand and bordered by carefully pruned boxwood shrubs and organic dark redwood mulch.', loc: 'Cupertino, CA', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', tag: 'Stone Work' },
                    { title: 'Drought-Tolerant Native Garden', desc: 'A gorgeous layout replacing standard turf grass with local California sages, salvias, ornamental grasses, and decorative river rocks.', loc: 'Santa Clara, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=1200&q=80', tag: 'Softscaping' }
                  ].map((p, i) => (
                    <div 
                      key={i}
                      className="bg-white rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col md:flex-row hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-zinc-200 border-b-4 md:border-b-0 md:border-r-4 border-black shrink-0">
                        <Image src={p.img} alt={p.title} className="w-full h-full object-cover" fill />
                        <span className="absolute top-4 left-4 bg-black text-white border-2 border-white/20 px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full z-20 shadow-md">{p.tag}</span>
                      </div>
                      <div className="p-8 flex-1 flex flex-col text-left justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                            <MapPin className="w-3.5 h-3.5 text-[#7BA05C]" /> {p.loc}
                          </div>
                          <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-4">{p.title}</h3>
                          <p className="text-zinc-500 font-semibold text-xs leading-relaxed mb-6">{p.desc}</p>
                        </div>

                        <button 
                          onClick={() => navigateTo('contact')}
                          className="self-start text-[#4C6B36] hover:text-[#3D552B] font-black text-xs tracking-wider uppercase flex items-center gap-1.5 group/link"
                        >
                          Book Similar Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
            <section className="bg-[#1A1A1A] text-white py-20 border-b-4 border-black relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
              <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <span className="bg-[#7BA05C] text-black px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-black shadow-[2px_2px_0px_#000] inline-block mb-4">Get Quote</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">Contact Our Team</h1>
                <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-semibold">Request a free estimate or consultation. We reply within 24 hours.</p>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left info cards */}
                  <div className="lg:col-span-5 space-y-8 text-left">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6">Let's talk about your project</h2>
                    <p className="text-zinc-500 font-semibold text-sm leading-relaxed mb-8">Ready to transform your outdoors? Reach out for a free, no-obligation estimate or consultation. We will schedule an on-site visit to inspect your yard, measure properties, and discuss designs.</p>
                    
                    <div className="space-y-6 bg-[#F7F6F2] p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Call or Text</h4>
                          <p className="font-bold text-zinc-900 text-sm mt-0.5">(408) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Email Us</h4>
                          <p className="font-bold text-zinc-900 text-sm mt-0.5">info@greenscape.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Headquarters</h4>
                          <p className="font-bold text-zinc-900 text-sm mt-0.5">123 Greenway Dr, Sunnyvale, CA 94086</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Hours</h4>
                          <p className="font-bold text-zinc-900 text-sm mt-0.5">Mon - Sat: 7:00 AM - 6:00 PM</p>
                          <p className="text-zinc-400 text-[10px] font-semibold mt-0.5">Closed Sundays</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right form card */}
                  <div className="lg:col-span-7 w-full bg-[#F7F6F2] p-8 md:p-12 rounded-2xl border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                    {formSubmitted ? (
                      <div className="py-16 text-center">
                        <div className="w-16 h-16 bg-[#4C6B36] text-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-xl flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-2">Estimate Requested!</h3>
                        <p className="text-zinc-500 text-sm max-w-sm mx-auto font-semibold">Thank you for contacting Greenscape. Our lead horticulturalist will reach out shortly to coordinate an on-site visit.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-900 mb-6 pb-4 border-b-2 border-black/10 text-left">Request a Free Estimate</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col text-left">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Full Name</label>
                            <input 
                              type="text" 
                              required 
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="bg-white border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:border-[#4C6B36] transition-colors" 
                              placeholder="e.g. John Smith"
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Phone Number</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="bg-white border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:border-[#4C6B36] transition-colors" 
                              placeholder="e.g. (408) 555-0100"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col text-left">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="bg-white border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:border-[#4C6B36] transition-colors" 
                              placeholder="e.g. john.smith@gmail.com"
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Service Type</label>
                            <select 
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="bg-white border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:border-[#4C6B36] transition-colors appearance-none"
                            >
                              <option value="lawn-care">Lawn Care & Mowing</option>
                              <option value="design">Landscape Design</option>
                              <option value="hardscaping">Patios & Paving</option>
                              <option value="irrigation">Sprinkler Setup/Repair</option>
                              <option value="cleanup">Yard Cleanups & Leaves</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col text-left">
                          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Project Details</label>
                          <textarea 
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="bg-white border-2 border-black px-4 py-3 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#4C6B36] transition-colors" 
                            placeholder="Describe your yard size, ideas, and target timeframe..."
                          />
                        </div>

                        <button 
                          type="submit" 
                          className="w-full bg-[#4C6B36] hover:bg-[#3D552B] text-white py-4 text-xs font-black uppercase tracking-[0.2em] rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 active:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
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

      {/* Main Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-[#F7F6F2]">
        <div className="container mx-auto">
           <div className="grid md:grid-cols-4 gap-16 mb-24 text-left">
              <div>
                 <div className="flex items-center gap-2 mb-8">
                   <div className="bg-[#4C6B36] p-1.5 rounded-lg">
                     <Leaf className="w-6 h-6 text-white" />
                   </div>
                   <div className="flex flex-col leading-none">
                     <span className="font-black text-xl tracking-tighter uppercase">Greenscape</span>
                     <span className="text-[9px] font-bold tracking-[0.3em] text-[#4C6B36] uppercase font-mono mt-0.5">Landscaping</span>
                   </div>
                 </div>
                 <p className="text-[#333333]/50 text-sm leading-relaxed mb-8 max-w-xs font-semibold">
                   Professional design-first landscaping and horticultural services in Sunnyvale and surrounding areas.
                 </p>
                 <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                       <a key={i} href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#4C6B36] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
                          <Icon className="w-4 h-4" />
                       </a>
                    ))}
                 </div>
              </div>
              
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#1A1A1A]">Site Navigation</h4>
                <div className="flex flex-col gap-4 text-xs font-black uppercase tracking-wider text-[#333333]/60">
                  <button onClick={() => navigateTo('home')} className="hover:text-[#4C6B36] text-left transition-colors">Home</button>
                  <button onClick={() => navigateTo('services')} className="hover:text-[#4C6B36] text-left transition-colors">Services</button>
                  <button onClick={() => navigateTo('about')} className="hover:text-[#4C6B36] text-left transition-colors">About Us</button>
                  <button onClick={() => navigateTo('projects')} className="hover:text-[#4C6B36] text-left transition-colors">Our Work</button>
                  <button onClick={() => navigateTo('contact')} className="hover:text-[#4C6B36] text-left transition-colors">Contact</button>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#1A1A1A]">Core Services</h4>
                <div className="flex flex-col gap-4 text-xs font-black uppercase tracking-wider text-[#333333]/50">
                   <span>Lawn Maintenance</span>
                   <span>Landscape Design</span>
                   <span>Paved Hardscaping</span>
                   <span>Drip & WiFi Sprinklers</span>
                   <span>Seasonal Cleanups</span>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#1A1A1A]">Location Details</h4>
                <div className="space-y-6 text-sm font-medium">
                   <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-[#4C6B36] shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A1A1A]">(408) 123-4567</p>
                        <p className="text-[#333333]/40 text-xs font-semibold">Call or Text Anytime</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[#4C6B36] shrink-0" />
                      <p className="font-bold text-[#1A1A1A]">info@greenscape.com</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#4C6B36] shrink-0" />
                      <p className="font-bold text-[#1A1A1A] whitespace-pre-line">123 Greenway Dr, <br />Sunnyvale, CA 94086</p>
                   </div>
                </div>
              </div>
           </div>
           
           <div className="pt-12 border-t border-[#F7F6F2] flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#333333]/30">© {new Date().getFullYear()} Greenscape Landscaping. All rights reserved.</p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-[#333333]/40">
                 <Link href="#" className="hover:text-[#4C6B36] transition-colors">Privacy Policy</Link>
                 <Link href="#" className="hover:text-[#4C6B36] transition-colors">Terms of Service</Link>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

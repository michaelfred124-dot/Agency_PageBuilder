"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Leaf, Trees, Shovel, Droplets, Trash2, CheckCircle2, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight, Clock, ShieldCheck, User } from 'lucide-react';

const COLORS = {
  emerald: '#4C6B36',
  emeraldLight: '#7BA05C',
  sand: '#F7F6F2',
  dark: '#1A1A1A',
  text: '#333333'
};

export default function GreenscapeTemplate() {
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
      <nav className="bg-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60] shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-[#4C6B36] p-1.5 rounded-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter uppercase">Greenscape</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#4C6B36] uppercase">Landscaping</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
          <Link href="#" className="hover:text-[#4C6B36] transition-colors border-b-2 border-transparent hover:border-[#4C6B36] pb-1">Home</Link>
          <Link href="#" className="hover:text-[#4C6B36] transition-colors">Services</Link>
          <Link href="#" className="hover:text-[#4C6B36] transition-colors">About</Link>
          <Link href="#" className="hover:text-[#4C6B36] transition-colors">Projects</Link>
          <Link href="#" className="hover:text-[#4C6B36] transition-colors">Reviews</Link>
          <Link href="#" className="hover:text-[#4C6B36] transition-colors">Contact</Link>
        </div>

        <button className="bg-[#4C6B36] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#3D552B] transition-all flex items-center gap-2 rounded-md">
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80" 
            className="w-full h-full object-cover" 
            alt="Beautiful garden" 
            referrerPolicy="no-referrer"
          fill />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
               <span className="bg-[#7BA05C] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Top Rated</span>
               <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Built with Next.js + React</span>
               <span className="bg-[#1A1A1A] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">SEO Optimized</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight">
              Beautiful landscapes.<br />Built for your life.
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-white/90 max-w-2xl leading-relaxed">
              Expert landscaping services that enhance your property and add lasting value. Rooted in quality since 2012.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="bg-[#7BA05C] text-black px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest hover:bg-[#8CB16E] transition-all text-xs md:text-sm rounded-md shadow-xl">
                Get a Free Quote
              </button>
              <button className="backdrop-blur-md bg-black/20 border border-white/30 text-white px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all text-xs md:text-sm rounded-md shadow-xl">
                View Our Services
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-3">
               <div className="flex -space-x-2">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-[#4C6B36] flex items-center justify-center overflow-hidden">
                       <Image src={`https://i.pravatar.cc/100?img=${i+10}` || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} alt="User" referrerPolicy="no-referrer" width={800} height={600} />
                    </div>
                 ))}
               </div>
               <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">4.9 Stars on Google</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
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
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#F7F6F2] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#4C6B36]">
                  <service.icon className="w-7 h-7 text-[#4C6B36] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-2 px-2">{service.title}</h3>
                <p className="text-[10px] text-[#333333]/50 leading-tight md:px-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <Image src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Garden design" referrerPolicy="no-referrer" fill />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-[#1A1A1A] p-12 rounded-2xl hidden md:flex flex-col justify-center text-white">
                 <Leaf className="w-12 h-12 text-[#7BA05C] mb-6" />
                 <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none mb-4">Ready to transform your outdoors?</h4>
                 <p className="text-white/50 text-sm mb-8">Get a free, no-obligation quote today.</p>
                 <button className="bg-white text-black px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#7BA05C] transition-all flex items-center justify-between group">
                    Get Your Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
            
            <div>
              <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">About Greenscape</span>
              <h2 className="text-5xl lg:text-7xl font-bold mb-8 uppercase tracking-tighter leading-none">Rooted in our community. <br />Committed to excellence.</h2>
              <p className="text-lg text-[#333333]/70 mb-10 leading-relaxed max-w-xl">
                Greenscape Landscaping is a locally owned and operated business serving Sunnyvale and surrounding areas. We take pride in our work, our reliability, and the relationships we build with our clients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 py-8 border-y border-[#333333]/10">
                <div>
                   <div className="flex items-start gap-2 mb-2">
                     <ShieldCheck className="w-5 h-5 text-[#4C6B36]" />
                     <span className="text-4xl font-black tracking-tighter">10+</span>
                   </div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-[#333333]/40">Years of Experience</p>
                </div>
                <div>
                   <div className="flex items-start gap-2 mb-2">
                     <User className="w-5 h-5 text-[#4C6B36]" />
                     <span className="text-4xl font-black tracking-tighter">500+</span>
                   </div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-[#333333]/40">Happy Customers</p>
                </div>
                <div>
                   <div className="flex items-start gap-2 mb-2">
                     <CheckCircle2 className="w-5 h-5 text-[#4C6B36]" />
                     <span className="text-4xl font-black tracking-tighter">100%</span>
                   </div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-[#333333]/40">Satisfaction Guaranteed</p>
                </div>
              </div>

              <button className="bg-[#1A1A1A] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#4C6B36] transition-all text-xs rounded-md shadow-xl flex items-center gap-3">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">Our Work</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">Projects we're proud of</h2>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] hover:text-[#4C6B36] transition-colors border-b-2 border-black/10 pb-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
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
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image src={(p.img) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={p.title} referrerPolicy="no-referrer" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <h4 className="text-xl font-bold uppercase tracking-tighter mb-1">{p.title}</h4>
                   <div className="flex items-center gap-2 text-xs text-white/60">
                      <MapPin className="w-3 h-3 text-[#7BA05C]" /> {p.loc}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
          <Leaf className="w-16 h-16 text-[#7BA05C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">Let's build something <br />beautiful together.</h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">Contact us today for your free quote and start your transition to a more beautiful life outdoors.</p>
          <div className="flex flex-wrap justify-center gap-8 text-xl font-bold">
             <div className="flex flex-col gap-2">
                <span className="text-[#3D552B] text-xs uppercase tracking-widest">Call Us</span>
                <span>(408) 123-4567</span>
             </div>
             <div className="w-px h-16 bg-white/10 hidden md:block" />
             <div className="flex flex-col gap-2">
                <span className="text-[#3D552B] text-xs uppercase tracking-widest">Schedule Online</span>
                <span>Fast & Easy</span>
             </div>
             <div className="w-px h-16 bg-white/10 hidden md:block" />
             <div className="flex flex-col gap-2">
                <span className="text-[#3D552B] text-xs uppercase tracking-widest">Send a Message</span>
                <span>We'll reply soon!</span>
             </div>
          </div>
          <button className="mt-16 bg-[#7BA05C] text-black px-12 py-6 font-black uppercase tracking-[0.2em] hover:bg-white transition-all text-sm rounded-md flex items-center gap-4 mx-auto">
             Get a Free Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-[#F7F6F2]">
        <div className="container mx-auto">
           <div className="grid md:grid-cols-4 gap-16 mb-24">
              <div className="col-span-1 md:col-span-1">
                 <div className="flex items-center gap-2 mb-8">
                   <div className="bg-[#4C6B36] p-1.5 rounded-lg">
                     <Leaf className="w-6 h-6 text-white" />
                   </div>
                   <div className="flex flex-col leading-none">
                     <span className="font-black text-xl tracking-tighter uppercase">Greenscape</span>
                   </div>
                 </div>
                 <p className="text-[#333333]/50 text-sm leading-relaxed mb-8 max-w-xs">
                   Professional landscaping services in Sunnyvale and surrounding areas. Let's build something beautiful together.
                 </p>
                 <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                       <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#F7F6F2] flex items-center justify-center text-[#1A1A1A] hover:bg-[#4C6B36] hover:text-white transition-all">
                          <Icon className="w-4 h-4" />
                       </a>
                    ))}
                 </div>
              </div>
              
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#1A1A1A]">Quick Links</h4>
                <div className="flex flex-col gap-4 text-sm font-bold text-[#333333]/60">
                  <Link href="#" className="hover:text-[#4C6B36] transition-colors">Home</Link>
                  <Link href="#" className="hover:text-[#4C6B36] transition-colors">Services</Link>
                  <Link href="#" className="hover:text-[#4C6B36] transition-colors">About Us</Link>
                  <Link href="#" className="hover:text-[#4C6B36] transition-colors">Our Work</Link>
                  <Link href="#" className="hover:text-[#4C6B36] transition-colors">Contact</Link>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#1A1A1A]">Services</h4>
                <div className="flex flex-col gap-4 text-sm font-bold text-[#333333]/60">
                   <Link href="#" className="hover:text-[#4C6B36] transition-colors">Lawn Care</Link>
                   <Link href="#" className="hover:text-[#4C6B36] transition-colors">Design</Link>
                   <Link href="#" className="hover:text-[#4C6B36] transition-colors">Hardscaping</Link>
                   <Link href="#" className="hover:text-[#4C6B36] transition-colors">Irrigation</Link>
                   <Link href="#" className="hover:text-[#4C6B36] transition-colors">Cleanups</Link>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#1A1A1A]">Contact Us</h4>
                <div className="space-y-6 text-sm font-medium">
                   <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-[#4C6B36] shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A1A1A]">(408) 123-4567</p>
                        <p className="text-[#333333]/40 text-xs">Call or Text Anytime</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[#4C6B36] shrink-0" />
                      <p className="font-bold text-[#1A1A1A]">info@greenscape.com</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#4C6B36] shrink-0" />
                      <p className="font-bold text-[#1A1A1A]">123 Greenway Dr, <br />Sunnyvale, CA 94086</p>
                   </div>
                </div>
              </div>
           </div>
           
           <div className="pt-12 border-t border-[#F7F6F2] flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#333333]/30">© 2024 Greenscape Landscaping. All rights reserved.</p>
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

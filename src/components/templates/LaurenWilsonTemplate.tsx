"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Camera, Heart, Trees, User, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight, Quote, Star } from 'lucide-react';

const COLORS = {
  charcoal: '#1A1A1A',
  beige: '#F8F5F2',
  white: '#FFFFFF',
  silver: '#E0E0E0',
  text: '#333333'
};

const PORTFOLIO_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', category: 'Weddings', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1511285560929-86b16002067d?q=80&w=2070&auto=format&fit=crop', category: 'Couples', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', category: 'Landscapes', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1520850838323-133289a2e340?q=80&w=2070&auto=format&fit=crop', category: 'Portraits', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop', category: 'Landscapes', span: 'col-span-1 row-span-1' },
];

export default function LaurenWilsonTemplate() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#333333] selection:bg-[#1A1A1A] selection:text-white">
      {/* Navbar */}
      <nav className="bg-[#1A1A1A] text-white py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60]">
        <div className="flex items-center gap-2">
          <div className="text-xl font-serif italic tracking-widest flex items-center gap-2">
            <span className="text-2xl font-bold">L</span>
            <div className="w-px h-6 bg-white/20 mx-1" />
            <span className="text-2xl font-bold">W</span>
          </div>
          <div className="flex flex-col leading-none ml-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Lauren Wilson</span>
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/50">Photography</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
          <Link href="#" className="hover:text-silver transition-colors">Home</Link>
          <Link href="#" className="hover:text-silver transition-colors">Portfolio</Link>
          <Link href="#" className="hover:text-silver transition-colors">About</Link>
          <Link href="#" className="hover:text-silver transition-colors">Services</Link>
          <Link href="#" className="hover:text-silver transition-colors">Blog</Link>
          <Link href="#" className="hover:text-silver transition-colors">Contact</Link>
        </div>

        <button className="border border-white/30 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
          Book a Session
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Photography Hero" 
            referrerPolicy="no-referrer"
          fill />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
               <span className="bg-[#E0E0E0] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">New Template</span>
               <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Built with Next.js + React</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block text-white/70">Capturing Real Moments</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.1] mb-8">
              Timeless Imagery.<br />Authentic Stories.
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 text-white/80 max-w-lg leading-relaxed">
              Natural light photographer specializing in portraits, couples, weddings, and landscapes based in Colorado.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="bg-white text-black px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest hover:bg-silver transition-all text-xs md:text-[11px] flex items-center gap-3">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#1A1A1A]/40 font-bold uppercase tracking-widest text-[10px] block mb-4">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">Selected Work</h2>
            </div>
            <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest border-b border-black/5 pb-2">
              {['All', 'Portraits', 'Weddings', 'Couples', 'Landscapes', 'Brands'].map((filter, i) => (
                <a key={filter} href="#" className={`${i === 0 ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]' : 'text-[#1A1A1A]/40'} hover:text-[#1A1A1A] transition-colors pb-2`}>
                  {filter}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 space-y-4">
               <div className="aspect-[4/3] overflow-hidden group relative">
                 <Image src={(PORTFOLIO_IMAGES[0].url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Work" referrerPolicy="no-referrer" fill />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">View Case</span>
                 </div>
               </div>
               <div className="aspect-[4/5] overflow-hidden group relative">
                 <Image src={(PORTFOLIO_IMAGES[3].url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Work" referrerPolicy="no-referrer" fill />
               </div>
            </div>
            <div className="col-span-1">
               <div className="h-full min-h-[500px] overflow-hidden group relative">
                 <Image src={(PORTFOLIO_IMAGES[1].url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Work" referrerPolicy="no-referrer" fill />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">Weddings</span>
                 </div>
               </div>
            </div>
            <div className="col-span-1 space-y-4">
               <div className="aspect-[3/4] overflow-hidden group relative">
                 <Image src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Work" referrerPolicy="no-referrer" fill />
               </div>
               <div className="aspect-[4/3] overflow-hidden group relative">
                 <Image src={(PORTFOLIO_IMAGES[2].url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Work" referrerPolicy="no-referrer" fill />
               </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 hover:border-[#1A1A1A] transition-colors">
               View Full Gallery <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#F8F5F2]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            >
               <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Lauren Wilson" referrerPolicy="no-referrer" fill />
            </motion.div>
            
            <div>
              <span className="text-[#1A1A1A]/40 font-bold uppercase tracking-widest text-[10px] block mb-4">About Me</span>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-8 text-[#1A1A1A]">Hi, I'm Lauren.<br />Nice to meet you.</h2>
              <div className="w-12 h-px bg-[#1A1A1A] mb-8" />
              <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed max-w-xl">
                I'm a natural light photographer based in Colorado. I believe in capturing real moments and creating images that feel honest, emotive, and timeless. When I'm not behind the camera, you'll find me hiking, traveling, or drinking way too much coffee.
              </p>
              <button className="bg-[#1A1A1A] text-white px-10 py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-all text-[11px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block mb-4">What I Offer</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">Photography for Every Chapter</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { icon: User, title: 'Portraits', desc: 'Natural, authentic portraits that capture who you are.' },
              { icon: Star, title: 'Weddings', desc: 'Documenting your day with heart and intention.' },
              { icon: Heart, title: 'Couples', desc: 'Honest moments. Real connection. Beautiful light.' },
              { icon: Trees, title: 'Landscapes', desc: 'Scenic landscapes and travel imagery that inspires.' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">{service.title}</h3>
                <p className="text-[11px] text-white/40 leading-relaxed max-w-[200px] mx-auto mb-6">{service.desc}</p>
                <Link href="#" className="text-[9px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all">
                   Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-[#1A1A1A]/40 font-bold uppercase tracking-widest text-[10px] block mb-4">Kind Words</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">Client Love</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { text: "Lauren made us feel so comfortable and captured our day perfectly. We'll cherish these photos forever.", author: "Jessica & Mark" },
              { text: "The photos are STUNNING. She has such a gift for capturing natural moments and beautiful light.", author: "Amy & Taylor" },
              { text: "Professional, kind, and insanely talented. We had the best experience and the results speak for themselves.", author: "Michael R." }
            ].map((testimonial, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6">
                <Quote className="w-8 h-8 text-black/5 mb-6" />
                <p className="text-lg font-light italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="w-8 h-px bg-black/10 mb-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">— {testimonial.author}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-16">
            {[0,1,2].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-black/10'}`} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" referrerPolicy="no-referrer" fill />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
          <span className="text-white/60 font-bold uppercase tracking-widest text-[10px] block mb-6">Let's create something beautiful</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-12">Ready to book your session?</h2>
          <button className="bg-white text-black px-8 md:px-12 py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-silver transition-all text-[10px] md:text-xs rounded-none">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="text-xl font-serif italic tracking-widest flex items-center">
                  <span className="text-2xl font-bold">L</span>
                  <div className="w-px h-6 bg-white/20 mx-1" />
                  <span className="text-2xl font-bold">W</span>
                </div>
                <div className="flex flex-col leading-none ml-2">
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Lauren Wilson</span>
                  <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/50">Photography</span>
                </div>
              </div>
              <p className="text-white/40 text-[11px] leading-relaxed mb-8 max-w-xs">
                Natural light photographer capturing authentic moments and unforgettable memories.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-white/30">Navigation</h4>
              <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest">
                <Link href="#" className="hover:text-silver transition-colors">Home</Link>
                <Link href="#" className="hover:text-silver transition-colors">Portfolio</Link>
                <Link href="#" className="hover:text-silver transition-colors">About</Link>
                <Link href="#" className="hover:text-silver transition-colors">Services</Link>
                <Link href="#" className="hover:text-silver transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-white/30">Portfolio</h4>
              <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest">
                <Link href="#" className="hover:text-silver transition-colors">Portraits</Link>
                <Link href="#" className="hover:text-silver transition-colors">Weddings</Link>
                <Link href="#" className="hover:text-silver transition-colors">Couples</Link>
                <Link href="#" className="hover:text-silver transition-colors">Landscapes</Link>
                <Link href="#" className="hover:text-silver transition-colors">Brands</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-white/30">Contact</h4>
              <div className="space-y-6 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-white/30 shrink-0" />
                  <p>Colorado, USA</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-white/30 shrink-0" />
                  <p>(303) 555-1234</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-white/30 shrink-0" />
                  <p>hello@laurenwilsonphoto.com</p>
                </div>
                <button className="border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
                  Book a Session
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-medium uppercase tracking-widest text-white/20">© 2024 Lauren Wilson Photography. All Rights Reserved.</p>
            <Link href="#" className="text-[9px] font-medium uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

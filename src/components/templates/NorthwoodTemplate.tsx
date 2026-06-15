"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Smartphone, User, Menu as MenuIcon, ArrowRight, Star } from 'lucide-react';

const COLORS = {
  forest: '#1B1F16',
  cream: '#F4F1EA',
  wood: '#8B5E3C',
  gold: '#D4AF37',
  text: '#2C2C2C'
};

const MENU_DATA = {
  coffee: [
    { name: 'Latte', price: '$4.75' },
    { name: 'Cappuccino', price: '$4.50' },
    { name: 'Mocha', price: '$5.25' },
    { name: 'Cold Brew', price: '$4.75' },
    { name: 'Pour Over', price: '$5.50' },
  ],
  food: [
    { name: 'Avocado Toast', price: '$8.50' },
    { name: 'Breakfast Sandwich', price: '$7.50' },
    { name: 'Yogurt Parfait', price: '$6.25' },
    { name: 'Almond Croissant', price: '$4.25' },
    { name: 'Chocolate Chip Cookie', price: '$3.25' },
  ],
  seasonal: [
    { name: 'Honey Lavender Latte', price: '$5.75' },
    { name: 'Iced Maple Oat Latte', price: '$5.75' },
    { name: 'Strawberry Matcha', price: '$5.50' },
    { name: 'Peach Cold Brew', price: '$5.25' },
  ]
};

export default function NorthwoodTemplate() {
  return (
    <div className="min-h-screen font-serif bg-[#F4F1EA] text-[#2C2C2C] selection:bg-[#8B5E3C] selection:text-white">
      {/* Mini Nav for Template */}
      <nav className="bg-[#1B1F16]/95 backdrop-blur-md text-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60] border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <Coffee className="w-5 h-5 text-[#D4AF37]" />
          <span className="font-bold uppercase tracking-[0.25em] text-xs md:text-sm text-white">Northwood Coffee Co.</span>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-white/75">
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Menu</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Order Ahead</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">About</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Locations</Link>
        </div>
        <button className="bg-[#D4AF37] hover:bg-[#C29E2F] text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors">
          Order Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
            alt="Coffee Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          fill />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA] via-transparent to-black/30" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
               <span className="bg-[#D4AF37] text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full">New Blend</span>
               <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full">Small Batch Roasters</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tight leading-[1.05] mb-8 text-white">
              Local coffee.<br />Made for your mornings.
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 text-white/80 max-w-xl leading-relaxed">
              Handcrafted drinks, fresh bites, and good vibes in the heart of our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#D4AF37] hover:bg-[#C29E2F] text-black px-8 py-4 font-bold uppercase tracking-widest transition-all text-xs">
                Order Online
              </button>
              <button className="border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-xs">
                Explore Menu
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethos / Features */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F1EA]">
        <div className="container mx-auto md:max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Coffee, title: 'Small Batch', desc: 'Roasted in small batches for quality and consistency.' },
              { icon: MapPin, title: 'Ethically Sourced', desc: 'We partner with farmers who care about people and the planet.' },
              { icon: Smartphone, title: 'Made Locally', desc: 'Roasted, packed, and shipped right here in our community.' },
              { icon: User, title: 'Community Driven', desc: "We're proud to support local events and give back where we live." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 border border-[#2C2C2C]/5 bg-white/30 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 p-4 rounded-full bg-[#8B5E3C]/10 text-[#8B5E3C]">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-3">{feature.title}</h3>
                <p className="text-xs text-[#2C2C2C]/70 leading-relaxed max-w-[200px]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-24 bg-[#1B1F16] text-white overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="italic text-[#D4AF37] text-2xl mb-4 block font-serif">Come say hi!</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 uppercase tracking-tight">Find Us</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg uppercase tracking-wider">123 Main Street</p>
                    <p className="text-white/50 text-sm mt-1">Yourtown, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-white/5 pt-6">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg uppercase tracking-wider">Call Ahead</p>
                    <p className="text-white/50 text-sm mt-1">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-white/5 pt-6">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg uppercase tracking-wider">Email Inquiry</p>
                    <p className="text-white/50 text-sm mt-1">hello@northwoodcoffee.co</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              fill />
              <div className="absolute -bottom-1 -left-1 bg-[#8B5E3C] p-8 border-t-2 border-r-2 border-[#1B1F16] rounded-tr-2xl hidden lg:block text-white shadow-xl">
                 <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-4 text-[#D4AF37]">Hours</h4>
                 <div className="space-y-2 text-xs font-mono">
                   <p className="flex justify-between gap-10"><span>Mon - Fri</span> <span>6:30am - 5:00pm</span></p>
                   <p className="flex justify-between gap-10"><span>Sat</span> <span>7:00am - 5:00pm</span></p>
                   <p className="flex justify-between gap-10"><span>Sun</span> <span>8:00am - 4:00pm</span></p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <span className="italic text-[#8B5E3C] text-xl block mb-2">Our Menu</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Something for everyone</h2>
            </div>
            <Link href="#" className="font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:text-[#8B5E3C] transition-colors border-b border-[#2C2C2C]/10 pb-1">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Coffee Column */}
            <div className="p-6 rounded-2xl bg-[#F4F1EA]/30 border border-[#2C2C2C]/5 flex flex-col justify-between">
              <div>
                <div className="mb-6 aspect-video overflow-hidden rounded-xl relative border border-[#2C2C2C]/5">
                   <Image src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" alt="Coffee" referrerPolicy="no-referrer" fill />
                </div>
                <h3 className="text-base font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#8B5E3C]" /> Coffee
                </h3>
                <div className="space-y-4">
                  {MENU_DATA.coffee.map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-black/5 pb-2 text-sm">
                      <span className="font-bold">{item.name}</span>
                      <span className="font-light">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Food Column */}
            <div className="p-6 rounded-2xl bg-[#F4F1EA]/30 border border-[#2C2C2C]/5 flex flex-col justify-between">
              <div>
                <div className="mb-6 aspect-video overflow-hidden rounded-xl relative border border-[#2C2C2C]/5">
                   <Image src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop" className="w-full h-full object-cover" alt="Food" referrerPolicy="no-referrer" fill />
                </div>
                <h3 className="text-base font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <MenuIcon className="w-4 h-4 text-[#8B5E3C]" /> Food
                </h3>
                <div className="space-y-4">
                  {MENU_DATA.food.map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-black/5 pb-2 text-sm">
                      <span className="font-bold">{item.name}</span>
                      <span className="font-light">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seasonal Column */}
            <div className="p-6 rounded-2xl bg-[#8B5E3C]/5 border border-[#8B5E3C]/20 flex flex-col justify-between">
              <div>
                <div className="mb-6 aspect-video overflow-hidden rounded-xl relative border border-[#8B5E3C]/10">
                   <Image src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Seasonal" referrerPolicy="no-referrer" fill />
                </div>
                <h3 className="text-base font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#D4AF37]" /> Seasonal Specials
                </h3>
                <div className="space-y-4">
                  {MENU_DATA.seasonal.map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-[#8B5E3C]/10 pb-2 text-sm text-[#8B5E3C]">
                      <span className="font-bold">{item.name}</span>
                      <span className="font-light">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Ahead */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F1EA] border-b border-[#2C2C2C]/5">
        <div className="container mx-auto bg-[#1B1F16] text-white rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20">
              <span className="italic text-[#D4AF37] text-2xl mb-4 block font-serif">Skip the line</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-none tracking-tight">Order Ahead</h2>
              <p className="text-white/60 text-lg mb-10 max-w-md font-light leading-relaxed">
                Order in advance and pick up when it's ready. More time for what matters.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-4 bg-white/5 text-[#D4AF37]">
                    <MenuIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-white/40">Choose items</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-4 bg-white/5 text-[#D4AF37]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-white/40">Pick your time</span>
                </div>
                <div className="text-center">
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-4 bg-white/5 text-[#D4AF37]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-white/40">Pick Up</span>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-[#D4AF37] text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-[#C29E2F] transition-all">
                Start Ordering
              </button>
            </div>
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90" 
                alt="App" 
                referrerPolicy="no-referrer"
              fill />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="italic text-[#8B5E3C] text-xl block mb-2 font-serif">Stronger together</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Our Community</h2>
            <p className="text-black/60 max-w-xl mx-auto text-sm leading-relaxed">
              We're more than just coffee. We're a gathering place, a creative space, and a proud supporter of local artists and makers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative border border-[#2C2C2C]/5">
              <Image src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cafe culture" referrerPolicy="no-referrer" fill />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative border border-[#2C2C2C]/5 md:mt-12">
               <Image src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Latte art" referrerPolicy="no-referrer" fill />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative border border-[#2C2C2C]/5">
               <Image src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cafe vibe" referrerPolicy="no-referrer" fill />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative border border-[#2C2C2C]/5 md:mt-12">
               <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Pastry" referrerPolicy="no-referrer" fill />
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-12 max-w-5xl mx-auto pt-8 border-t border-[#2C2C2C]/5">
            {[
              { text: "Best coffee in town! The staff is amazing and the vibes are unmatched.", author: "Sarah K.", rating: 5 },
              { text: "I come here every morning. Consistent, delicious, and always made with care.", author: "Michael T.", rating: 5 },
              { text: "Love supporting a local business that gives so much back to the community.", author: "Jessica L.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="text-center px-4">
                <div className="flex justify-center gap-1.5 mb-4">
                  {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-base font-light italic mb-4 text-[#2C2C2C]/90">"{review.text}"</p>
                <span className="font-bold uppercase tracking-widest text-[10px] text-[#AF9063]">— {review.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1F16] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-6">
                <Coffee className="w-6 h-6 text-[#D4AF37]" />
                <span className="font-bold uppercase tracking-[0.2em] text-lg">Northwood</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed max-w-xs">
                Crafting exceptional coffee experiences in our community since 2014.
              </p>
              <div className="flex gap-4 mt-8">
                <Instagram className="w-4 h-4 hover:text-[#D4AF37] transition-colors cursor-pointer text-white/40" />
                <Facebook className="w-4 h-4 hover:text-[#D4AF37] transition-colors cursor-pointer text-white/40" />
                <Twitter className="w-4 h-4 hover:text-[#D4AF37] transition-colors cursor-pointer text-white/40" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-1">
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-white/40">Quick Links</h4>
                <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-white/70">
                  <Link href="#" className="hover:text-[#D4AF37]">Menu</Link>
                  <Link href="#" className="hover:text-[#D4AF37]">Order Ahead</Link>
                  <Link href="#" className="hover:text-[#D4AF37]">About</Link>
                  <Link href="#" className="hover:text-[#D4AF37]">Locations</Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-white/40">Support</h4>
                <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-white/70">
                  <Link href="#" className="hover:text-[#D4AF37]">Contact</Link>
                  <Link href="#" className="hover:text-[#D4AF37]">FAQs</Link>
                  <Link href="#" className="hover:text-[#D4AF37]">Careers</Link>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-white/40">Location</h4>
              <p className="text-xs mb-2 font-bold text-white">123 Main Street</p>
              <p className="text-xs text-white/50 mb-6">Yourtown, ST 12345</p>
              <p className="text-xs text-[#D4AF37] font-bold">(555) 123-4567</p>
              <p className="text-xs text-white/50 mt-1">hello@northwoodcoffee.co</p>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-white/40">Hours</h4>
              <div className="text-xs space-y-2 text-white/60 font-mono">
                <p className="flex justify-between"><span>Mon - Fri</span> <span>6:30am - 5:00pm</span></p>
                <p className="flex justify-between"><span>Sat</span> <span>7:00am - 5:00pm</span></p>
                <p className="flex justify-between"><span>Sun</span> <span>8:00am - 4:00pm</span></p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-white/20">
            <p>© 2026 Northwood Coffee Co. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

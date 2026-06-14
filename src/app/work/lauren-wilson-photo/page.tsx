import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const PORTFOLIO = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', cat: 'Weddings' },
  { url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop', cat: 'Couples' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop', cat: 'Portraits' },
  { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', cat: 'Couples' },
];

const SERVICES = [
  { icon: '◻', label: 'Portraits', desc: 'Natural, authentic portraits that capture who you truly are.' },
  { icon: '◇', label: 'Weddings', desc: 'Documenting your day with heart, intention, and beautiful light.' },
  { icon: '○', label: 'Couples', desc: 'Honest moments, real connection, and timeless imagery.' },
  { icon: '△', label: 'Landscapes', desc: 'Scenic landscapes and travel imagery that transports you.' },
];

const TESTIMONIALS = [
  { text: "Lauren made us feel so comfortable and captured our day perfectly. We'll cherish these photos forever.", author: "Jessica & Mark" },
  { text: "The photos are STUNNING. She has such a gift for capturing natural moments and beautiful light.", author: "Amy & Taylor" },
  { text: "Professional, kind, and insanely talented. We had the best experience and the results speak for themselves.", author: "Michael R." },
];

export default function LaurenHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Lauren Wilson Photography"
            fill
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 block mb-5">
            Capturing Real Moments
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif italic text-white leading-[1.05] mb-8">
            Timeless Imagery.<br />Authentic Stories.
          </h1>
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
            Natural light photographer specializing in portraits, couples, weddings, and landscapes — based in Colorado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`${BASE}/portfolio`}
              className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:bg-[#E0E0E0] transition-all"
            >
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-3 border border-white/35 text-white px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:border-white/60 transition-all"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#1A1A1A]/35 font-bold uppercase tracking-widest text-[10px] block mb-3">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">Selected Work</h2>
            </div>
            <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest border-b border-black/5 pb-2">
              {['All', 'Portraits', 'Weddings', 'Couples', 'Landscapes'].map((f, i) => (
                <Link
                  key={f}
                  href={`${BASE}/portfolio`}
                  className={`${i === 0 ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]' : 'text-[#1A1A1A]/35'} hover:text-[#1A1A1A] transition-colors pb-2`}
                >
                  {f}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden group relative">
                <Image src={PORTFOLIO[0].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={PORTFOLIO[0].cat} fill referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">{PORTFOLIO[0].cat}</span>
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden group relative">
                <Image src={PORTFOLIO[2].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={PORTFOLIO[2].cat} fill referrerPolicy="no-referrer" />
              </div>
            </div>
            <div>
              <div className="h-full min-h-[500px] overflow-hidden group relative">
                <Image src={PORTFOLIO[1].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={PORTFOLIO[1].cat} fill referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">{PORTFOLIO[1].cat}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden group relative">
                <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Landscapes" fill referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/3] overflow-hidden group relative">
                <Image src={PORTFOLIO[3].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={PORTFOLIO[3].cat} fill referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`${BASE}/portfolio`}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 hover:border-[#1A1A1A] transition-colors"
            >
              View Full Gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Lauren Wilson"
                fill
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[#1A1A1A]/35 font-bold uppercase tracking-widest text-[10px] block mb-4">About Me</span>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-8 text-[#1A1A1A]">
                Hi, I'm Lauren.<br />Nice to meet you.
              </h2>
              <div className="w-12 h-px bg-[#1A1A1A] mb-8" />
              <p className="text-lg text-[#333333]/65 mb-8 leading-relaxed max-w-xl">
                I'm a natural light photographer based in Colorado. I believe in capturing real moments and creating images that feel honest, emotive, and timeless. When I'm not behind the camera, you'll find me hiking, traveling, or drinking way too much coffee.
              </p>
              <Link
                href={`${BASE}/about`}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
              >
                My Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-white/35 font-bold uppercase tracking-widest text-[10px] block mb-4">What I Offer</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">Photography for Every Chapter</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {SERVICES.map((s, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white transition-colors duration-500 text-white/30 group-hover:text-white text-lg">
                  {s.icon}
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4">{s.label}</h3>
                <p className="text-[11px] text-white/35 leading-relaxed max-w-[200px] mx-auto mb-5">{s.desc}</p>
                <Link href={`${BASE}/services`} className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 opacity-0 group-hover:opacity-100 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border border-white/25 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all"
            >
              View All Services & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-[#1A1A1A]/35 font-bold uppercase tracking-widest text-[10px] block mb-4">Kind Words</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">Client Love</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <Quote className="w-7 h-7 text-black/5 mb-6" />
                <p className="text-lg font-light italic mb-8 leading-relaxed text-[#333333]/75">"{t.text}"</p>
                <div className="w-8 h-px bg-black/10 mb-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">— {t.author}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-14">
            {[0, 1, 2].map(i => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#1A1A1A]' : 'bg-black/10'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
            fill
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <span className="text-white/50 font-bold uppercase tracking-widest text-[10px] block mb-6">
            Let's create something beautiful
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-12">
            Ready to book your session?
          </h2>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-[#E0E0E0] transition-all"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

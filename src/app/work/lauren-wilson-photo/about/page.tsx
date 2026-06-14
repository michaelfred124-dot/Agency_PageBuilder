import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Heart, Sun, Compass } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const VALUES = [
  { icon: Sun, title: 'Natural Light', desc: "I never use flash. Every image is lit by the magic of natural or ambient light — golden hour, open shade, window light." },
  { icon: Heart, title: 'Authentic Connection', desc: "I build genuine relationships with my clients before we ever shoot. Comfort and trust make for real, unguarded photos." },
  { icon: Camera, title: 'Intentional Craft', desc: "Every composition, every moment I choose to capture, is intentional. I'm always asking: does this image have feeling?" },
  { icon: Compass, title: 'Adventure First', desc: "I'll hike 3 miles to a summit for the right shot. I believe the best images happen when you're willing to go the extra mile." },
];

const PROCESS = [
  { step: '01', title: 'Inquiry & Discovery', desc: "Reach out and tell me about your vision. I'll follow up within 48 hours to schedule a quick call where we get to know each other." },
  { step: '02', title: 'Planning Your Session', desc: "We'll choose the perfect location, timing (golden hour is always my first suggestion), and a wardrobe that feels authentically you." },
  { step: '03', title: 'The Session Itself', desc: 'I guide without directing. My style is candid and warm — expect laughter, real moments, and zero stiff posing.' },
  { step: '04', title: 'Your Gallery', desc: "Within 3–4 weeks, you'll receive a private online gallery of carefully edited, full-resolution images ready to download and print." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F5F2] py-0">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              alt="Lauren Wilson"
              fill
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <div className="flex items-center px-10 md:px-20 py-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A]/35 block mb-6">About Me</span>
              <h1 className="text-5xl md:text-6xl font-serif italic text-[#1A1A1A] leading-tight mb-8">
                Hi, I'm Lauren.<br />Nice to meet you.
              </h1>
              <div className="w-12 h-px bg-[#1A1A1A] mb-8" />
              <p className="text-[#333333]/65 leading-relaxed text-lg mb-6 max-w-lg">
                I'm a natural light photographer based in Colorado specializing in portraits, couples, and weddings. I've been behind the lens for over eight years, and I still get the same flutter of excitement when I see a frame come together perfectly.
              </p>
              <p className="text-[#333333]/65 leading-relaxed text-lg mb-10 max-w-lg">
                My work is rooted in honesty — I'm not interested in manufactured smiles or stiff poses. I want to capture who you actually are, in moments that actually feel like yours.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-serif italic text-[#1A1A1A] font-bold">8+</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 mt-1">Years Shooting</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div className="text-center">
                  <div className="text-3xl font-serif italic text-[#1A1A1A] font-bold">400+</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 mt-1">Sessions</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div className="text-center">
                  <div className="text-3xl font-serif italic text-[#1A1A1A] font-bold">12</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/35 mt-1">States Traveled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#1A1A1A] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/35 block mb-5">My Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif italic">What I believe in</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:border-white/40 transition-colors">
                  <Icon className="w-5 h-5 text-white/35 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4">{title}</h3>
                <p className="text-[11px] text-white/35 leading-relaxed max-w-[220px] mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A]/35 block mb-5">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">The Process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {PROCESS.map(({ step, title, desc }, i) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="text-5xl font-serif italic text-black/8 shrink-0 leading-none mt-1">{step}</span>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-3 text-[#1A1A1A]">{title}</h3>
                  <p className="text-[#333333]/60 leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second image + personal note */}
      <section className="bg-[#F8F5F2] py-0">
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          <div className="flex items-center px-10 md:px-20 py-20 order-2 lg:order-1">
            <div className="max-w-lg">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A]/35 block mb-6">Beyond the Camera</span>
              <h2 className="text-4xl font-serif italic text-[#1A1A1A] mb-8">When I'm not shooting</h2>
              <p className="text-[#333333]/65 leading-relaxed mb-5">
                You'll find me somewhere in the mountains — hiking, camping, or chasing sunsets. Colorado is endlessly inspiring and I'm convinced there's no better light anywhere on earth than a Rocky Mountain golden hour.
              </p>
              <p className="text-[#333333]/65 leading-relaxed mb-10">
                I also teach beginner photography workshops at a local community center, because I believe everyone deserves to understand the magic of light and the power of a meaningful image.
              </p>
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
              >
                Let's Connect <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden order-1 lg:order-2" style={{ minHeight: '400px' }}>
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
              alt="Colorado landscape"
              fill
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </>
  );
}

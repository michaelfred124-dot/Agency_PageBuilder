import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Heart, Sun, Compass } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const DARK = '#1A1A1A';
const WARM_SAND = '#F0EBE3';
const FOREST = '#3D5A4C';
const OFF_WHITE = '#FDFBF9';

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
      {/* Page Header */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
          >
            About Me
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: FOREST }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9] mb-0"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
          >
            Hi, I'm Lauren.<br />Nice to meet you.
          </h1>
        </div>
      </section>

      {/* Two-column narrative */}
      <section style={{ backgroundColor: WARM_SAND }} className="py-0">
        <div className="grid lg:grid-cols-2 min-h-[85vh]">
          {/* Editorial portrait */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              alt="Lauren Wilson"
              fill
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            {/* Subtle overlay with stat strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-10">
              <div className="flex items-center gap-10">
                <div>
                  <div
                    className="text-4xl leading-none mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
                  >
                    8+
                  </div>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    Years Shooting
                  </div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div
                    className="text-4xl leading-none mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
                  >
                    400+
                  </div>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    Sessions
                  </div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div
                    className="text-4xl leading-none mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
                  >
                    12
                  </div>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    States Traveled
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right text narrative */}
          <div className="flex items-center px-10 md:px-16 lg:px-20 py-20" style={{ backgroundColor: WARM_SAND }}>
            <div className="max-w-lg">
              <p
                className="text-xl leading-relaxed mb-7"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}99` }}
              >
                I'm a natural light photographer based in Colorado specializing in portraits, couples, and weddings. I've been behind the lens for over eight years, and I still get the same flutter of excitement when I see a frame come together perfectly.
              </p>
              <p
                className="text-xl leading-relaxed mb-7"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}99` }}
              >
                My work is rooted in honesty — I'm not interested in manufactured smiles or stiff poses. I want to capture who you actually are, in moments that actually feel like yours.
              </p>
              <p
                className="text-xl leading-relaxed mb-12"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}99` }}
              >
                Colorado is endlessly inspiring. Whether we're hiking into the mountains for golden-hour portraits or shooting in an open meadow, the light here is something I never take for granted.
              </p>
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center gap-3 px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', backgroundColor: DARK, color: '#fff' }}
              >
                Let's Work Together <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ backgroundColor: DARK }} className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-5"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}
            >
              My Philosophy
            </span>
            <h2
              className="text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
            >
              What I believe in
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="group">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8 border transition-colors group-hover:border-white/40"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors group-hover:opacity-70"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: 'var(--font-body)', color: '#fff' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-5"
              style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
            >
              How It Works
            </span>
            <h2
              className="text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              The Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-14">
            {PROCESS.map(({ step, title, desc }, i) => (
              <div key={i} className="flex gap-8 items-start">
                <span
                  className="text-6xl shrink-0 leading-none mt-1"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: `${DARK}0D` }}
                >
                  {step}
                </span>
                <div>
                  <div className="w-6 h-px mb-4" style={{ backgroundColor: FOREST }} />
                  <h3
                    className="font-bold uppercase tracking-[0.2em] text-[11px] mb-3"
                    style={{ fontFamily: 'var(--font-body)', color: DARK }}
                  >
                    {title}
                  </h3>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: `${DARK}80` }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Camera */}
      <section style={{ backgroundColor: WARM_SAND }} className="py-0">
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          <div
            className="flex items-center px-10 md:px-16 lg:px-20 py-20 order-2 lg:order-1"
            style={{ backgroundColor: WARM_SAND }}
          >
            <div className="max-w-lg">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
              >
                Beyond the Camera
              </span>
              <h2
                className="text-4xl md:text-5xl mb-8"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
              >
                When I'm not shooting
              </h2>
              <p
                className="leading-relaxed mb-5 text-base"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}80` }}
              >
                You'll find me somewhere in the mountains — hiking, camping, or chasing sunsets. Colorado is endlessly inspiring and I'm convinced there's no better light anywhere on earth than a Rocky Mountain golden hour.
              </p>
              <p
                className="leading-relaxed mb-12 text-base"
                style={{ fontFamily: 'var(--font-body)', color: `${DARK}80` }}
              >
                I also teach beginner photography workshops at a local community center, because I believe everyone deserves to understand the magic of light and the power of a meaningful image.
              </p>
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center gap-3 px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', backgroundColor: FOREST, color: '#fff' }}
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

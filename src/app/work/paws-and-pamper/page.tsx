'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, ArrowRight, Check, Star, Scissors, ShowerHead, Zap, Phone, MapPin, ChevronDown, Shield } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const FOREST = '#134E4A';
const SKY = '#F0FDFA';
const WARM = '#FEF3C7';

const headingFont = { fontFamily: 'var(--font-display)', fontWeight: 800 } as const;
const subheadFont = { fontFamily: 'var(--font-display)', fontWeight: 700 } as const;
const bodyFont = { fontFamily: 'var(--font-display)', fontWeight: 400 } as const;
const semiBold = { fontFamily: 'var(--font-display)', fontWeight: 600 } as const;

// ── Pricing data ──
const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const;
type Size = typeof SIZES[number];

const PRICING: Record<Size, { bath: string; full: string; spa: string; nails: string }> = {
  'XS': { bath: '$45', full: '$60', spa: '+$15', nails: '+$10' },
  'S':  { bath: '$55', full: '$75', spa: '+$15', nails: '+$10' },
  'M':  { bath: '$65', full: '$90', spa: '+$20', nails: '+$12' },
  'L':  { bath: '$75', full: '$110', spa: '+$20', nails: '+$12' },
  'XL': { bath: '$90', full: '$130', spa: '+$25', nails: '+$15' },
};

const SIZE_LABELS: Record<Size, string> = {
  'XS': 'Under 15 lb',
  'S':  '15–30 lb',
  'M':  '30–50 lb',
  'L':  '50–70 lb',
  'XL': '70+ lb',
};

const SERVICES_ROW = [
  { key: 'bath' as const, label: 'Bath & Brush', icon: ShowerHead, desc: 'Bath, blow dry, brush out, ear clean, spritz' },
  { key: 'full' as const, label: 'Full Groom', icon: Scissors, desc: 'Bath & Brush + breed-specific cut & styling' },
  { key: 'spa' as const, label: 'Spa Add-on', icon: Heart, desc: 'Conditioning mask, paw balm, blueberry facial' },
  { key: 'nails' as const, label: 'Nail Trim', icon: Zap, desc: 'Nail clip or grind, quick express service' },
];

function PricingSelector() {
  const [selected, setSelected] = useState<Size>('M');
  const prices = PRICING[selected];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-teal-50 max-w-2xl mx-auto">
      {/* Size selector */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 text-center" style={semiBold}>Select Your Dog's Size</p>
        <div className="flex gap-2 justify-center flex-wrap">
          {SIZES.map(size => (
            <button
              key={size}
              onClick={() => setSelected(size)}
              className="flex flex-col items-center px-4 py-3 rounded-xl border-2 transition-all duration-200 min-w-[72px]"
              style={{
                borderColor: selected === size ? TEAL : '#E2F8F5',
                backgroundColor: selected === size ? TEAL : 'white',
                color: selected === size ? 'white' : FOREST,
              }}
            >
              <span className="text-lg" style={{ ...headingFont, color: selected === size ? 'white' : FOREST }}>{size}</span>
              <span className="text-[9px] mt-0.5" style={{ ...bodyFont, opacity: 0.75 }}>{SIZE_LABELS[size]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-2 gap-3">
        {SERVICES_ROW.map(({ key, label, icon: Icon, desc }) => (
          <div key={key} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: SKY }}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: TEAL + '20' }}
            >
              <Icon className="w-4 h-4" style={{ color: TEAL }} strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5" style={subheadFont}>{label}</div>
              <div className="text-xl transition-all duration-300" style={{ ...headingFont, color: TEAL }}>{prices[key]}</div>
              <div className="text-[10px] text-gray-400 mt-0.5 leading-snug" style={bodyFont}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Size guide link */}
      <div className="text-center mt-6">
        <span className="text-xs text-gray-400" style={bodyFont}>Not sure of your dog's size? </span>
        <Link href={`${BASE}/services`} className="text-xs underline" style={{ color: TEAL, ...semiBold }}>
          Size Guide →
        </Link>
      </div>
    </div>
  );
}

// ── Static content ──
const STEPS = [
  { icon: Phone, n: '1', title: 'Book Your Appointment', desc: 'Call, text, or book online. First-time clients get a free 10-minute meet-and-greet to discuss your dog\'s needs.' },
  { icon: Heart, n: '2', title: 'Drop Off & Relax', desc: 'We take it from here. One dog at a time means your pup gets individual attention, never caged between services.' },
  { icon: ShowerHead, n: '3', title: 'Real-Time Updates', desc: 'We text you a photo mid-groom so you can see the progress. No news is good news — but we always send good news.' },
  { icon: Scissors, n: '4', title: 'Pickup a Happy Pup', desc: 'Your dog leaves clean, styled, and calm. We go over what we found and any notes for your next visit.' },
];

const TEAM = [
  {
    name: 'Casey Larson',
    role: 'Lead Groomer & Co-owner',
    years: '8 years grooming experience',
    cert: 'Fear-Free Certified Professional',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop',
    bio: 'Casey founded Paws & Pamper after years of working with rescue dogs. She specializes in anxious and senior pups.',
  },
  {
    name: 'Jordan Kim',
    role: 'Senior Groomer & Co-owner',
    years: '6 years grooming experience',
    cert: 'Fear-Free Certified + IPG Member',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop',
    bio: 'Jordan is our double-coat and doodle specialist. He brings calm energy and steady hands to every appointment.',
  },
];

const REVIEWS = [
  { text: "Biscuit has anxiety and used to tremble at the groomer. Casey is so patient and gentle with him. He came home calm, fluffy, and smelling amazing.", author: "Jen M.", dog: "Biscuit the Shih Tzu" },
  { text: "My 90-pound German Shepherd mix can be reactive. They accommodated him without any judgment. The private suite setup made all the difference.", author: "Sam W.", dog: "Duke the GSD Mix" },
  { text: "Monthly customer for over a year. Consistent, thorough, and they always remember Ziggy's preferences. The photo updates during grooming are a lovely touch.", author: "Rob A.", dog: "Ziggy the Poodle" },
];

const FAQS = [
  { q: "What does 'fear-free certified' actually mean?", a: "Fear-Free is a professional certification requiring continuing education on animal behavior, stress recognition, and low-stress handling techniques. We never use intimidation, force, or physical restraint to rush a dog. If a dog needs a break, we give them one. The experience is designed to be positive from start to finish." },
  { q: "How long does a grooming appointment take?", a: "Most small dogs (under 30 lb) are ready in 1.5–2 hours. Medium dogs take 2–3 hours. Large and double-coated breeds may take 3–4 hours. We call or text when your pup is ready — no need to wait outside. We are never rushed, so times may vary." },
  { q: "Do you groom anxious or aggressive dogs?", a: "We specialize in anxious dogs. We use desensitization techniques, high-value treats, slow introductions, and private suites for dogs that do better without other dogs around. For severely reactive dogs, we may recommend a vet visit before grooming. Reach out and we will discuss your dog's specific needs." },
  { q: "Do I need an appointment?", a: "Yes for Full Grooms and Bath & Brush services. Walk-ins are accepted for Express services (nail trims, ear cleans) on a first-come first-served basis, Tuesday through Friday. Saturday walk-ins fill up quickly — call ahead to check availability." },
  { q: "What shampoos and products do you use?", a: "We use Isle of Dogs and Chris Christensen professional-grade shampoos and conditioners. All products are free from parabens, sulfates, and artificial dyes. We carry a sensitive skin formula and a hypoallergenic option. If your dog has a specific allergy, you can bring your own shampoo." },
  { q: "My dog has health conditions — can you still groom them?", a: "Yes, often. We work with dogs who have arthritis, collapsing trachea, heart conditions, and other health issues. We do require a vet note for dogs with heart or respiratory conditions. Please disclose any conditions when booking so we can accommodate safely." },
  { q: "What is your cancellation policy?", a: "We ask for at least 24 hours notice to reschedule or cancel. Cancellations with less than 2 hours notice may be charged 50% of the service. No-shows are charged the full amount. We understand life happens — just communicate with us and we will work with you." },
];

export default function PawsAndPamperHome() {
  return (
    <>
      {/* ── HERO — centered & spacious ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
            alt="Happy dog being groomed"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
            priority
          />
          {/* Soft radial gradient — light in center, teal-tinted edges */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(13,148,136,0.15) 0%, rgba(19,78,74,0.65) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-white text-xs uppercase tracking-widest"
            style={{ backgroundColor: TEAL, ...semiBold }}
          >
            Fear-Free Certified · Seattle, WA
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
          >
            Every dog deserves<br />the royal treatment.
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={subheadFont}>
            Professional grooming done the gentle way.
          </p>

          {/* Two CTAs centered */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-widest px-8 py-4 rounded-full"
              style={{ backgroundColor: TEAL, ...semiBold }}
            >
              Book a Groom <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 border-2 border-white text-white text-sm uppercase tracking-widest px-8 py-4 rounded-full"
              style={semiBold}
            >
              See Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEAR-FREE COMMITMENT BAND ── */}
      <section style={{ backgroundColor: SKY }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {['Fear-Free Certified', 'No Cage Drying — Ever', '5.0 Stars · 190+ Reviews', 'One Dog at a Time'].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" style={{ color: TEAL }} />
                <span className="text-sm" style={{ color: FOREST, ...subheadFont }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSPARENT PRICING SELECTOR ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: TEAL, ...semiBold }}>No Surprises</div>
            <h2 className="text-4xl mb-3" style={{ ...headingFont, color: FOREST }}>Transparent Pricing — Always</h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto" style={bodyFont}>Pick your dog's size to see exact prices. What you see is what you pay.</p>
          </div>
          <PricingSelector />
          <div className="text-center mt-8">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-10 py-4 rounded-full" style={{ backgroundColor: FOREST, ...semiBold }}>
              Full Service Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS — 4 horizontal steps ── */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: TEAL, ...semiBold }}>How It Works</div>
            <h2 className="text-4xl" style={{ ...headingFont, color: FOREST }}>Your Dog is in Good Paws</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ icon: Icon, n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: SKY }}
                >
                  <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                </div>
                <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: TEAL, ...semiBold }}>Step {n}</div>
                <h3 className="text-sm mb-2" style={{ ...subheadFont, color: FOREST }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed" style={bodyFont}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section style={{ backgroundColor: SKY }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: TEAL, ...semiBold }}>The Team</div>
            <h2 className="text-4xl" style={{ ...headingFont, color: FOREST }}>Meet Casey & Jordan</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center">
                <div className="relative w-24 h-24 mx-auto mb-5 overflow-hidden rounded-full border-4 border-teal-100">
                  <Image src={m.img} alt={m.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-lg mb-1" style={{ ...subheadFont, color: FOREST }}>{m.name}</div>
                <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: TEAL, ...semiBold }}>{m.role}</div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4" style={bodyFont}>{m.bio}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500 justify-center" style={bodyFont}>
                    <Check className="w-3.5 h-3.5" style={{ color: TEAL }} />{m.years}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 justify-center" style={bodyFont}>
                    <Check className="w-3.5 h-3.5" style={{ color: TEAL }} />{m.cert}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest border-b pb-0.5" style={{ color: TEAL, borderColor: TEAL, ...semiBold }}>
              More About Our Studio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ backgroundColor: SKY }} className="py-20 px-6 md:px-12 border-t border-teal-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: TEAL, ...semiBold }}>Happy Pups</div>
            <h2 className="text-4xl mb-2" style={{ ...headingFont, color: FOREST }}>What Pet Parents Say</h2>
            <p className="text-gray-400 text-sm" style={bodyFont}>5.0 Stars · 190+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl">
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />)}</div>
                <p className="text-sm leading-relaxed mb-3 italic text-gray-600" style={bodyFont}>"{r.text}"</p>
                <div className="text-xs" style={{ ...subheadFont, color: FOREST }}>— {r.author}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5" style={bodyFont}>{r.dog}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] uppercase tracking-widest" style={{ color: TEAL, ...semiBold }}>
              Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: TEAL, ...semiBold }}>FAQ</div>
            <h2 className="text-4xl" style={{ ...headingFont, color: FOREST }}>Questions From Pet Parents</h2>
          </div>
          <div className="divide-y divide-teal-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="text-sm leading-snug" style={{ ...subheadFont, color: FOREST }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: TEAL }} />
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed" style={bodyFont}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / LOCATION ── */}
      <section style={{ backgroundColor: FOREST }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-3 text-teal-400" style={semiBold}>Find Us</div>
            <div className="flex items-start gap-2 text-white/65 text-sm" style={bodyFont}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-teal-400" />
              <span>2241 NW Market St<br />Seattle, WA 98107<br /><span className="text-white/35 text-xs">Free street parking on 22nd Ave NW</span></span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-3 text-teal-400" style={semiBold}>Hours</div>
            <div className="text-white/65 text-sm space-y-1" style={bodyFont}>
              <div>Tue – Fri: 9:00am – 6:00pm</div>
              <div>Saturday: 8:00am – 5:00pm</div>
              <div className="text-white/30">Sun & Mon: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] uppercase tracking-widest mb-1 text-teal-400" style={semiBold}>Book or Inquire</div>
            <a href="tel:2065550374" className="inline-flex items-center gap-2 text-white font-bold text-base" style={subheadFont}>
              <Phone className="w-4 h-4 text-teal-400" /> (206) 555-0374
            </a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-7 py-3 rounded-full" style={{ backgroundColor: TEAL, ...semiBold }}>
              Book a Grooming Appointment <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: FOREST }} className="py-14 px-6 text-center border-t border-teal-800">
        <Heart className="w-8 h-8 mx-auto mb-5 text-teal-400" strokeWidth={1.5} />
        <h2 className="text-3xl text-white mb-4" style={headingFont}>Every dog leaves happy. Guaranteed.</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto" style={bodyFont}>Book online or call. New client appointments available most weeks. First visit includes a free meet-and-greet.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-widest px-10 py-4 rounded-full" style={{ backgroundColor: TEAL, ...semiBold }}>
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-teal-700 text-white/60 text-[11px] uppercase tracking-widest px-10 py-4 rounded-full" style={semiBold}>
            <Shield className="w-4 h-4" /> View All Services
          </Link>
        </div>
      </section>
    </>
  );
}

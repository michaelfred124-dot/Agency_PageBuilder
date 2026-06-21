'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChevronDown, Phone, MapPin, Check, Shield, AlertCircle } from 'lucide-react';

const BASE = '/work/valley-prohome';
const BG = '#1A1A1A';
const AMBER = '#D4A843';
const CREAM = '#F5F0E8';
const CARD = '#242424';
const MUTED = 'rgba(245,240,232,0.45)';

const SERVICES = [
  { num: '01', name: 'Roofing & Gutters', start: 'From $450' },
  { num: '02', name: 'HVAC & Climate Control', start: 'From $299' },
  { num: '03', name: 'Plumbing Services', start: 'From $149' },
  { num: '04', name: 'Electrical', start: 'From $189' },
  { num: '05', name: 'Painting & Drywall', start: 'From $325' },
  { num: '06', name: 'Flooring & Tile', start: 'From $6/sqft' },
];

const PROCESS = [
  { n: '1', title: 'Free Estimate', desc: 'We assess the project, walk you through scope and cost, and answer every question. No obligation.' },
  { n: '2', title: 'Schedule & Plan', desc: 'We confirm dates, assign a dedicated crew, and give you a clear timeline before any work begins.' },
  { n: '3', title: 'Expert Execution', desc: 'Licensed, insured crews. Daily updates. We treat your home with the same respect we would give our own.' },
  { n: '4', title: 'Final Walkthrough', desc: 'We inspect everything together. No payment until you are completely satisfied. Guaranteed.' },
];

const PROJECTS = [
  { img: 'photo-1600596542815-ffad4c1539a9', label: 'Full Renovation · Green Hills', type: 'Kitchen & Bath' },
  { img: 'photo-1504307651254-35680f356dfd', label: 'Roof Replacement · Brentwood', type: 'Roofing' },
  { img: 'photo-1568605114967-8130f3a36994', label: 'Exterior Repaint · Belle Meade', type: 'Painting' },
];

const FAQS = [
  { q: "Are you licensed and insured in Tennessee?", a: "Yes. Valley ProHome is a fully licensed Tennessee general contractor (License #TN-48291). We carry $2M general liability insurance and workers' comp on all crew members. We provide certificates on request before any job starts." },
  { q: "Do you offer free estimates?", a: "Always. We visit your home, assess the scope, and provide a detailed written estimate at no charge and with no obligation. Most estimates are scheduled within 48 hours of your request." },
  { q: "How long do projects typically take?", a: "It depends on scope. A roof replacement is typically 1–2 days. A kitchen remodel is 2–4 weeks. A full home renovation is 6–12 weeks. We give you a realistic timeline upfront and stick to it — or we call you before it changes." },
  { q: "Do you handle permits?", a: "Yes. For any work that requires permits (structural, electrical, plumbing, HVAC), we obtain, manage, and close out all permits. You do not need to manage the city — we handle everything." },
  { q: "What if something goes wrong after the job is done?", a: "All our work is backed by a 2-year craftsmanship warranty. Materials are covered by manufacturer warranties (typically 10–50 years depending on product). If something fails, we return and fix it, period." },
  { q: "Can you work while we are living in the home?", a: "Yes. For most projects, you can stay in the home. We contain work areas, clean up daily, and minimize disruption. For larger renovations, we sequence work to keep one usable living space at all times." },
  { q: "Do you offer financing?", a: "Yes. We partner with GreenSky and Hearth to offer 0% financing for qualified homeowners on projects over $2,500. Ask about financing options during your free estimate." },
];

export default function ValleyProHome() {
  return (
    <>
      {/* EMERGENCY BANNER */}
      <div style={{ backgroundColor: AMBER }} className="py-2.5 px-6 text-center">
        <span className="text-xs font-black uppercase tracking-widest text-black">
          <AlertCircle className="w-3.5 h-3.5 inline mr-2 -mt-0.5" />
          Emergency services available 24/7 —&nbsp;
          <a href="tel:6155550301" className="underline">Call (615) 555-0301</a>
        </span>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: BG, borderBottom: '1px solid rgba(212,168,67,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={BASE} className="font-black text-lg tracking-tight" style={{ color: CREAM }}>VALLEY<span style={{ color: AMBER }}> PROHOME</span></Link>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Projects', 'Reviews', 'Contact'].map(l => (
              <Link key={l} href={`${BASE}/services`} className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>{l}</Link>
            ))}
          </div>
          <Link href={`${BASE}/contact`} className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 text-black" style={{ backgroundColor: AMBER }}>
            Get Free Quote
          </Link>
        </div>
      </nav>

      {/* HERO — full-bleed, text anchored bottom */}
      <section className="relative flex items-end overflow-hidden" style={{ height: '92vh', minHeight: 600 }}>
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
          alt="Professional home renovation"
          fill className="object-cover object-center" referrerPolicy="no-referrer" priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-6xl w-full mx-auto px-8 md:px-12 pb-20">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="w-4 h-4" style={{ color: AMBER }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: AMBER }}>Licensed · Insured · 19 Years Nashville</span>
          </div>
          <h1 className="font-black uppercase leading-none mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: CREAM }}>
            Built right,<br /><span style={{ color: AMBER }}>built to last.</span>
          </h1>
          <p className="text-lg mb-10 max-w-lg" style={{ color: MUTED }}>
            Roofing, HVAC, plumbing, electrical, remodeling. Nashville's most trusted home services contractor — licensed, insured, and guaranteed on every job.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 text-black" style={{ backgroundColor: AMBER }}>
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 border border-white/20" style={{ color: CREAM }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES — typographic list */}
      <section style={{ backgroundColor: BG }} className="py-20 px-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b pb-6" style={{ borderColor: 'rgba(212,168,67,0.15)' }}>
            <h2 className="font-black text-3xl" style={{ color: CREAM }}>What we do.</h2>
            <Link href={`${BASE}/services`} className="text-xs font-bold uppercase tracking-widest" style={{ color: AMBER }}>All Services</Link>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(212,168,67,0.1)' }}>
            {SERVICES.map(({ num, name, start }, i) => (
              <Link key={i} href={`${BASE}/services`} className="flex items-center justify-between py-7 group">
                <div className="flex items-center gap-8">
                  <span className="font-black text-sm" style={{ color: 'rgba(212,168,67,0.3)' }}>{num}</span>
                  <span className="font-black text-xl md:text-2xl transition-colors group-hover:text-amber-400" style={{ color: CREAM }}>{name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-sm font-medium" style={{ color: MUTED }}>{start}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: AMBER }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE STANDARD — split: credentials left, 2 stacked photos right */}
      <section className="grid lg:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col justify-center px-10 md:px-16 py-20" style={{ backgroundColor: CARD }}>
          <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: AMBER }}>Our Standard</div>
          <h2 className="font-black text-4xl md:text-5xl mb-8 leading-tight" style={{ color: CREAM }}>
            19 years.<br />4,200 jobs.<br />Zero shortcuts.
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: MUTED }}>
            Every crew is licensed and drug-tested. Every job gets a dedicated foreman. Every material comes with a written warranty. We do not cut corners because your home is not a place to cut corners.
          </p>
          <div className="space-y-4 mb-10">
            {['Tennessee Licensed General Contractor', 'A+ BBB Accredited Business', 'EPA Lead-Safe Certified', 'NRCA & ACCA Member', '2-Year Craftsmanship Warranty', '4.9★ Google Rating (380+ reviews)'].map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: MUTED }}>
                <Check className="w-4 h-4 shrink-0" style={{ color: AMBER }} /> {c}
              </div>
            ))}
          </div>
          <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: AMBER }}>
            About Valley ProHome <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-rows-2">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Roofing project" fill className="object-cover" referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
              alt="Interior renovation" fill className="object-cover" referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* PROCESS — 4 steps on cream */}
      <section style={{ backgroundColor: CREAM }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8B7A55' }}>How It Works</p>
            <h2 className="font-black text-4xl" style={{ color: BG }}>From estimate to done.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {PROCESS.map(({ n, title, desc }, i) => (
              <div key={i}>
                <div className="font-black text-7xl leading-none mb-4" style={{ color: 'rgba(26,26,26,0.07)' }}>{n}</div>
                <div className="font-black text-3xl mb-2" style={{ color: BG }}>0{n}</div>
                <h3 className="font-bold text-base mb-3" style={{ color: BG }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY — 3-col on dark */}
      <section style={{ backgroundColor: BG }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-black text-3xl" style={{ color: CREAM }}>Recent Projects</h2>
            <Link href={`${BASE}/services`} className="text-xs font-bold uppercase tracking-widest" style={{ color: AMBER }}>View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {PROJECTS.map(({ img, label, type }, i) => (
              <div key={i} className="group relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={`https://images.unsplash.com/${img}?q=80&w=1200&auto=format&fit=crop`}
                  alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(26,26,26,0.7)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AMBER }}>{type}</div>
                  <div className="font-bold text-sm text-white">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL — single large quote, full-width */}
      <section style={{ backgroundColor: CARD }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: AMBER }} />)}
          </div>
          <blockquote className="font-black text-2xl md:text-3xl leading-snug mb-8" style={{ color: CREAM }}>
            "Valley ProHome replaced our 22-year-old roof in two days. The crew was respectful, cleaned up completely, and the work was flawless. Three years later, not a single issue."
          </blockquote>
          <div className="text-sm font-bold uppercase tracking-widest" style={{ color: AMBER }}>Robert & Lisa M. · Belle Meade</div>
          <div className="text-xs mt-1" style={{ color: MUTED }}>Roof Replacement · 2022</div>
          <div className="mt-10">
            <Link href={`${BASE}/reviews`} className="text-xs font-bold uppercase tracking-widest" style={{ color: AMBER }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* PROCARE PLAN BAND */}
      <section
        className="py-16 px-6 md:px-12"
        style={{ backgroundColor: AMBER }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-[0.4em] mb-3"
              style={{ color: BG }}
            >
              Annual Maintenance
            </div>
            <h2
              className="text-3xl md:text-4xl font-black mb-3"
              style={{ color: BG }}
            >
              ProHome Care Plan — $199/year
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ color: 'rgba(17,17,17,0.7)' }}
            >
              Annual HVAC tune-up, plumbing inspection, and electrical safety check — plus priority scheduling, 10% off all service calls, and free emergency dispatch fees.
            </p>
          </div>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest px-8 py-4 whitespace-nowrap shrink-0"
            style={{ backgroundColor: BG }}
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: BG }} className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AMBER }}>FAQ</p>
            <h2 className="font-black text-3xl" style={{ color: CREAM }}>Questions answered.</h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(212,168,67,0.12)' }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm" style={{ color: CREAM }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: AMBER }} />
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: AMBER }} className="py-20 px-6 text-center">
        <h2 className="font-black text-4xl text-black mb-4">Get your free estimate today.</h2>
        <p className="text-black/60 mb-8 max-w-md mx-auto">No pressure, no obligation. Just an honest assessment of your project from Nashville's most trusted contractor.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-black font-bold text-sm px-10 py-4 text-white">
            Schedule Estimate <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:6155550301" className="inline-flex items-center gap-2 border-2 border-black font-bold text-sm px-10 py-4 text-black">
            <Phone className="w-4 h-4" /> (615) 555-0301
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#111111' }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="font-black text-lg mb-3" style={{ color: CREAM }}>VALLEY<br /><span style={{ color: AMBER }}>PROHOME</span></div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.35)' }}>Licensed Tennessee contractor. Serving Nashville and surrounding areas since 2006.</p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: AMBER }}>Services</div>
            <ul className="space-y-1.5">
              {['Roofing', 'HVAC', 'Plumbing', 'Electrical', 'Painting', 'Flooring'].map(s => (
                <li key={s}><Link href={`${BASE}/services`} className="text-xs" style={{ color: 'rgba(245,240,232,0.35)' }}>{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: AMBER }}>Service Areas</div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.35)' }}>
              Nashville · Brentwood<br />Franklin · Murfreesboro<br />Hendersonville · Smyrna
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: AMBER }}>Contact</div>
            <div className="space-y-2 text-xs" style={{ color: 'rgba(245,240,232,0.35)' }}>
              <div><Phone className="w-3 h-3 inline mr-2" style={{ color: AMBER }} />(615) 555-0301</div>
              <div><MapPin className="w-3 h-3 inline mr-2" style={{ color: AMBER }} />2910 Nolensville Pike<br />Nashville TN 37211</div>
              <div className="mt-2">24/7 Emergency Line</div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t pt-6 flex justify-between items-center" style={{ borderColor: 'rgba(212,168,67,0.1)' }}>
          <span className="text-xs" style={{ color: 'rgba(245,240,232,0.2)' }}>© 2025 Valley ProHome LLC · TN Lic #48291</span>
          <Shield className="w-4 h-4" style={{ color: 'rgba(212,168,67,0.3)' }} />
        </div>
      </footer>
    </>
  );
}

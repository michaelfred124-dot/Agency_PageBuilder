import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Star, ChevronDown, Phone, MapPin, Smile, Sparkles, Shield, Heart } from 'lucide-react';

const BASE = '/work/clarity-dental';
const BG = '#FFFFFF';
const NAVY = '#0D1B2A';
const BLUE = '#3B9EF4';
const LIGHT = '#F0F6FF';
const BORDER = '#E5EEF8';
const MUTED = '#6B7280';

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'From professional whitening to complete smile makeovers. We craft the smile you have always envisioned.',
    items: ['Professional teeth whitening', 'Porcelain veneers', 'Dental bonding & contouring', 'Smile design consultation'],
  },
  {
    icon: Shield,
    title: 'Orthodontics & Invisalign',
    desc: 'Straighter teeth without the metal. Invisalign clear aligner therapy for teens and adults.',
    items: ['Invisalign for teens & adults', 'Traditional braces available', 'Retainers & maintenance', 'Free consultation included'],
  },
  {
    icon: Heart,
    title: 'Family Preventive Care',
    desc: 'Comprehensive preventive care for the whole family, from your toddler to your grandparents.',
    items: ['Digital X-rays & cleanings', 'Comprehensive exams', 'Sealants & fluoride', 'Gum disease treatment'],
  },
  {
    icon: Smile,
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacement that restores your smile and your confidence.',
    items: ['Single & multiple implants', 'Implant-supported dentures', 'Bone grafting if needed', 'Free implant consultation'],
  },
];

const TECH_FEATURES = [
  'Digital cone beam 3D imaging',
  'Same-day CEREC ceramic crowns',
  'Laser-assisted gum therapy',
  'Intraoral camera for every exam',
];

const PROCESS_STEPS = [
  { n: '1', title: 'Book Online', desc: 'Schedule in 60 seconds from any device. New patients often seen within the same week.' },
  { n: '2', title: 'New Patient Forms', desc: 'Complete digital paperwork before your visit — no clipboards, no wasted time.' },
  { n: '3', title: 'Comprehensive Exam', desc: 'Full digital X-rays, gum health screening, and a thorough exam with your doctor.' },
  { n: '4', title: 'Custom Treatment Plan', desc: 'A clear, prioritized plan with all costs explained upfront. Zero pressure, full transparency.' },
];

const INSURANCE_PLANS = ['Delta Dental', 'Cigna', 'Aetna', 'BlueCross BlueShield', 'United Concordia', 'Humana', 'MetLife', 'Guardian'];

const TESTIMONIALS = [
  { quote: "Dr. Patel is the first dentist who took my anxiety seriously. My Invisalign was flawless and I actually look forward to my checkups now.", name: 'Karen S.', note: 'Verified Patient · Invisalign' },
  { quote: "Two implants placed by Dr. Kim — completely indistinguishable from my natural teeth. The care at every stage was outstanding.", name: 'Michael L.', note: 'Verified Patient · Implants' },
  { quote: "Same-day emergency for a cracked molar. Dr. Kim got me in within the hour and the permanent crown was ready faster than I expected.", name: 'Priya M.', note: 'Verified Patient · Emergency Crown' },
];

const FAQS = [
  { q: "Are you accepting new patients?", a: "Yes, we are actively welcoming new patients of all ages. We are completely judgment-free — whether you have not seen a dentist in years or just moved to Nashville, we will meet you exactly where you are. Most new patients are seen within the same week of calling." },
  { q: "Which insurance plans do you accept?", a: "We accept most major PPO dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, Guardian, Humana, BlueCross BlueShield, and United Concordia. For patients without insurance, we offer our in-house Clarity Care Plan — a flat annual fee with meaningful discounts on all services and no waiting periods." },
  { q: "Do you treat children?", a: "Yes. We see patients from age three and up. Our team is trained in gentle, child-friendly techniques that make early dental visits positive experiences. We recommend a child's first visit around age one to two, in line with American Dental Association guidelines." },
  { q: "What do you offer patients with dental anxiety?", a: "We offer nitrous oxide (laughing gas), oral conscious sedation, and IV sedation for virtually any procedure. We also have noise-canceling headphones, warm blankets, and a firm no-rush policy. Simply mention your anxiety when you book — we will prepare the entire visit around your comfort." },
  { q: "How much does Invisalign cost?", a: "Invisalign treatment at Clarity Dental starts at $3,800 for minor corrections and ranges to $6,500 for comprehensive cases. Most dental insurance plans with orthodontic benefits cover $1,000 to $2,500 of the cost. We also offer 0% financing through CareCredit and Lending Club. Every case begins with a free consultation and digital simulation of your results." },
  { q: "Do you offer payment plans?", a: "Yes. We offer 0% interest financing through CareCredit and Lending Club for any treatment over $200. We accept all major credit cards, HSA, and FSA. We believe no one should delay necessary dental care because of cost — our team is happy to walk through all options before you commit to any treatment." },
  { q: "What are your office hours?", a: "Monday through Thursday: 8:00am to 6:00pm. Friday: 8:00am to 5:00pm. Saturday: 9:00am to 2:00pm. We offer Saturday appointments specifically to accommodate working adults and families with busy weekday schedules." },
];

export default function ClarityDental() {
  return (
    <div style={{ backgroundColor: BG, color: NAVY }}>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-white" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold tracking-[0.15em]" style={{ color: NAVY }}>CLARITY</span>
          <span className="text-lg font-bold tracking-[0.15em]" style={{ color: BLUE }}>DENTAL</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'New Patients', 'Contact'].map((item) => (
            <Link key={item} href={`${BASE}/${item.toLowerCase().replace(/ /g, '-')}`} className="text-xs font-semibold uppercase tracking-widest" style={{ color: NAVY }}>{item}</Link>
          ))}
        </div>
        <Link href={`${BASE}/contact`} className="text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full text-white" style={{ backgroundColor: NAVY }}>
          Book Appointment
        </Link>
      </nav>

      {/* HERO — TWO COLUMN LIGHT */}
      <section className="min-h-screen grid md:grid-cols-[55fr_45fr]">
        {/* Left copy */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-24 bg-white">
          <div className="max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: BLUE }}>
              Nashville&apos;s Trusted Family Dentistry
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6" style={{ color: NAVY }}>
              A perfect smile,<br />artfully crafted.
            </h1>
            <div className="w-16 h-0.5 mb-6" style={{ backgroundColor: BLUE }} />
            <p className="text-base leading-relaxed mb-10" style={{ color: MUTED }}>
              Compassionate, comprehensive dental care for Nashville families. Cosmetic, preventive, restorative, orthodontics, and implants — all in one trusted practice.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white" style={{ backgroundColor: NAVY }}>
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-sm font-bold underline" style={{ color: BLUE }}>
                Meet Our Team
              </Link>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>
              ADA Member &nbsp;·&nbsp; AACD Accredited &nbsp;·&nbsp; 5★ Google
            </div>
          </div>
        </div>
        {/* Right image */}
        <div className="relative overflow-hidden rounded-l-3xl min-h-[60vh]" style={{ backgroundColor: LIGHT }}>
          <Image
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop"
            alt="Clarity Dental office"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 rounded-l-3xl" style={{ background: 'linear-gradient(135deg, rgba(59,158,244,0.15) 0%, transparent 60%)' }} />
        </div>
      </section>

      {/* NEW PATIENT OFFER BANNER */}
      <section className="py-5 px-8 text-center text-white text-sm font-bold" style={{ backgroundColor: BLUE }}>
        New Patient Special — Exam + X-Rays + Cleaning for $149 &nbsp;
        <Link href={`${BASE}/contact`} className="underline font-bold">Book Today →</Link>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: BLUE }}>What We Offer</p>
            <h2 className="text-5xl font-bold leading-tight mb-4" style={{ color: NAVY }}>Everything your smile needs.</h2>
            <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: MUTED }}>One office, one trusted team, complete dental care. We treat patients from age 3 and up.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, items }, i) => (
              <div key={i} className="p-8 rounded-2xl shadow-sm border bg-white" style={{ borderColor: BORDER }}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: BLUE + '18' }}>
                    <Icon className="w-5 h-5" style={{ color: BLUE }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: NAVY }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs" style={{ color: MUTED }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: BLUE }} /> {item}
                    </li>
                  ))}
                </ul>
                <Link href={`${BASE}/services`} className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION — SPLIT */}
      <section className="py-28 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left dark card */}
          <div className="p-10 rounded-2xl text-white" style={{ backgroundColor: NAVY }}>
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: BLUE }}>Our Technology</p>
            <h2 className="text-4xl font-bold leading-tight mb-4 text-white">
              Cutting-Edge<br />Dental Technology
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Our state-of-the-art facility uses digital imaging, 3D scanning, and laser dentistry to deliver more accurate diagnoses and more comfortable treatment.
            </p>
            <ul className="space-y-3">
              {TECH_FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: BLUE }} /> {f}
                </li>
              ))}
            </ul>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 mt-10 text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              Tour Our Office <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          {/* Right image */}
          <div className="relative h-96 md:h-full min-h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffbb172827c?q=80&w=2070&auto=format&fit=crop"
              alt="Modern dental technology"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: BLUE }}>Your First Visit</p>
            <h2 className="text-5xl font-bold leading-tight" style={{ color: NAVY }}>Your first visit, made easy.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold text-white" style={{ backgroundColor: BLUE }}>
                  {n}
                </div>
                <h3 className="text-base font-bold mb-3" style={{ color: NAVY }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold text-white" style={{ backgroundColor: NAVY }}>
              Book Your First Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INSURANCE PARTNERS */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: BLUE }}>Insurance</p>
          <h2 className="text-3xl font-bold mb-8" style={{ color: NAVY }}>We accept most insurance plans.</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {INSURANCE_PLANS.map((plan, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-xs font-bold bg-white shadow-sm border" style={{ borderColor: BORDER, color: MUTED }}>
                {plan}
              </span>
            ))}
          </div>
          <p className="text-xs" style={{ color: MUTED }}>
            No insurance? Ask about our in-house <strong style={{ color: NAVY }}>Clarity Care Plan</strong> — flat annual fee, no waiting periods, immediate savings on all services.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: BLUE }}>Patient Reviews</p>
            <h2 className="text-5xl font-bold leading-tight" style={{ color: NAVY }}>4.9 Stars on Google</h2>
            <p className="text-sm mt-2" style={{ color: MUTED }}>480+ verified patient reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl shadow-sm border" style={{ borderColor: BORDER, backgroundColor: BG }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: BLUE }} />)}
                </div>
                <p className="text-sm italic leading-relaxed mb-6" style={{ color: MUTED }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-bold" style={{ color: NAVY }}>{t.name}</div>
                <div className="text-xs mt-1 px-2.5 py-1 rounded-full inline-block font-bold" style={{ backgroundColor: LIGHT, color: BLUE }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: BLUE }}>FAQ</p>
            <h2 className="text-5xl font-bold leading-tight" style={{ color: NAVY }}>Patient Questions Answered</h2>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <summary className="flex items-center justify-between cursor-pointer gap-4 py-6">
                  <span className="font-bold text-sm leading-snug" style={{ color: NAVY }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 group-open:rotate-180 transition-transform" style={{ color: BLUE }} />
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 text-center text-white" style={{ backgroundColor: NAVY }}>
        <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Get Started</p>
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Your smile is<br />our priority.</h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          New patients welcome. Most insurance accepted. Same-week appointments available for families throughout Nashville.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold" style={{ backgroundColor: BLUE, color: '#fff' }}>
            Book an Appointment <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:6155550155" className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold border border-white/25 text-white">
            <Phone className="w-4 h-4" /> (615) 555-0155
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 md:px-16 bg-white" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-base font-bold tracking-[0.15em]" style={{ color: NAVY }}>CLARITY</span>
                <span className="text-base font-bold tracking-[0.15em]" style={{ color: BLUE }}>DENTAL</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                Comprehensive dental care for Nashville families. ADA Member · AACD Accredited.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: NAVY }}>Services</div>
              <ul className="space-y-2">
                {['Cosmetic Dentistry', 'Invisalign', 'Dental Implants', 'Family Dentistry', 'Emergency Care'].map((item) => (
                  <li key={item}><Link href={`${BASE}/services`} className="text-xs hover:underline" style={{ color: MUTED }}>{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: NAVY }}>Contact</div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xs" style={{ color: MUTED }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: BLUE }} />
                  1822 21st Ave S<br />Nashville, TN 37212
                </div>
                <a href="tel:6155550155" className="flex items-center gap-2 text-xs" style={{ color: MUTED }}>
                  <Phone className="w-3.5 h-3.5" style={{ color: BLUE }} /> (615) 555-0155
                </a>
                <div className="text-xs" style={{ color: MUTED }}>Mon–Fri: 8:00am – 6:00pm<br />Sat: 9:00am – 2:00pm</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: NAVY }}>Patient Resources</div>
              <ul className="space-y-2">
                {['New Patient Forms', 'Insurance Info', 'Financing Options', 'Patient Portal', 'Book Online'].map((item) => (
                  <li key={item}><Link href={`${BASE}/contact`} className="text-xs hover:underline" style={{ color: MUTED }}>{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color: MUTED }}>© 2026 Clarity Dental PLLC. All rights reserved. Nashville, TN 37212.</p>
            <p className="text-xs" style={{ color: MUTED }}>ADA Member. Results may vary. Individual treatment plans determined at consultation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

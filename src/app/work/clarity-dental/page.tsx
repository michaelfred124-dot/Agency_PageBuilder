'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Check, Star, ArrowRight, Smile, Shield, Sparkles, Phone, MapPin, ChevronDown, Clock, Heart } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const SKY = '#0284C7';
const ICE = '#F0F9FF';
const MINT = '#DCFCE7';
const WHITE = '#FFFFFF';

/* ── Animated counter component ── */
function AnimatedStat({ target, label, suffix = '+' }: { target: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center px-6 py-8">
      <div
        className="text-5xl md:text-6xl font-bold mb-2 tabular-nums"
        style={{ fontFamily: 'var(--font-display)', color: WHITE }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest" style={{ color: SKY }}>
        {label}
      </div>
    </div>
  );
}

/* ── Data ── */
const SVCS = [
  { icon: Smile, title: 'General & Preventive', category: 'General', price: 'From $89', desc: 'Cleanings, X-rays, exams, and fillings. Preventive care that saves you money and pain long-term.', items: ['Teeth cleaning & polishing', 'Digital X-rays', 'Comprehensive exam', 'Sealants & fluoride', 'Gum disease treatment', 'Emergency same-day visits'] },
  { icon: Sparkles, title: 'Cosmetic Dentistry', category: 'Cosmetic', price: 'From $295', desc: 'From subtle whitening to complete smile makeovers. We help you achieve the smile you have always wanted.', items: ['Professional teeth whitening', 'Porcelain veneers', 'Dental bonding', 'Smile makeovers', 'Gum contouring', 'Tooth-colored fillings'] },
  { icon: Shield, title: 'Restorative', category: 'Orthodontics', price: 'Same-week appts', desc: 'Crowns, bridges, and dentures to replace damaged or missing teeth and restore full function.', items: ['Dental crowns & bridges', 'Partial & full dentures', 'Inlays & onlays', 'Root canal therapy', 'Tooth extractions', 'Bone grafting'] },
  { icon: Heart, title: 'Implants & Ortho', category: 'Emergency', price: 'Free consult', desc: 'Permanent tooth replacement with implants and orthodontic treatment with Invisalign or braces.', items: ['Single & multiple implants', 'Implant-supported dentures', 'Invisalign for teens & adults', 'Traditional braces', 'Retainers', 'Free Invisalign consultation'] },
];

const INSURANCE = ['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'United Concordia', 'Guardian', 'Humana', 'BlueCross BlueShield'];

const REVIEWS = [
  { text: "I dreaded the dentist for 15 years. Dr. Patel is the first dentist who listened to my anxiety. My Invisalign was perfect and I finally have the smile I always wanted.", author: "Karen S.", service: "Invisalign" },
  { text: "Two implants placed by Dr. Kim. The results are indistinguishable from my natural teeth. Outstanding care at every single stage.", author: "Mike L.", service: "Dental Implants" },
  { text: "Same-day emergency for a cracked molar. Dr. Kim got me in immediately and the permanent crown was ready faster than expected. No surprise billing.", author: "Priya M.", service: "Crown" },
];

const FAQS = [
  { q: "Are you accepting new patients?", a: "Yes! We are actively accepting new patients of all ages. We also accept new patients with dental anxiety or who have not seen a dentist in many years — we are judgment-free. Most new patients can be seen within the same week." },
  { q: "Do you accept my insurance?", a: "We accept most major PPO dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, Guardian, Humana, and more. We also work with patients who have no insurance through our in-house Clarity Care Plan, which offers discounts on all services for a flat annual fee." },
  { q: "Do you see children?", a: "Yes. We see patients from age 3 and up. We have a gentle, kid-friendly approach and can treat the whole family in one place. We recommend first dental visits around age 1-2, per the American Dental Association guidelines." },
  { q: "What do you do for anxious patients?", a: "We offer nitrous oxide (laughing gas), oral conscious sedation, and IV sedation for procedures. We also have noise-canceling headphones, blankets, and a no-rush policy. Tell us about your anxiety when you book and we will prepare accordingly." },
  { q: "How much does teeth whitening cost?", a: "In-office professional whitening starts at $395 and delivers dramatic results in a single 90-minute visit. Take-home whitening trays start at $295 and show full results in 2 weeks. Both include custom-fitted trays and a touch-up kit." },
  { q: "Do you offer payment plans or financing?", a: "Yes. We offer 0% interest financing through CareCredit and Lending Club for any treatment over $200. We also accept all major credit cards, HSA, and FSA. No one should avoid dental care because of cost — talk to our team about options." },
  { q: "What are your hours?", a: "Monday through Thursday 7:00am–7:00pm, Friday 7:00am–5:00pm, and Saturday 8:00am–3:00pm. We offer early morning, evening, and Saturday appointments specifically to accommodate working adults and families." },
];

const CHECKPOINTS = [
  "Digital X-rays & 3D cone beam imaging",
  "Nitrous oxide & oral sedation available",
  "Evening hours Mon–Thu until 7pm",
  "Saturday morning appointments available",
  "Online booking & text appointment reminders",
];

export default function ClarityDentalHome() {
  return (
    <>
      {/* HERO — asymmetric split screen */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left — NAVY dark panel */}
        <div
          className="flex flex-col justify-center px-10 md:px-14 py-20 md:py-0 order-1"
          style={{ backgroundColor: NAVY }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: SKY }} />
            <span className="text-[9px] font-bold uppercase tracking-[0.45em] text-white/50">Denver, CO · Accepting New Patients</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Dentistry you&rsquo;ll actually look forward to.
          </h1>

          {/* Subtitle */}
          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-md" style={{ fontWeight: 300 }}>
            Compassionate, comprehensive dental care for families and individuals. General, cosmetic, restorative, implants, and orthodontics — all under one roof.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-8 py-4"
              style={{ backgroundColor: SKY }}
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:7205550139"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[10px] px-8 py-4"
            >
              <Phone className="w-4 h-4" /> (720) 555-0139
            </a>
          </div>

          {/* 3 quick-stat badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { val: '4.9★', sub: '480+ Reviews' },
              { val: '20+', sub: 'Years Serving Denver' },
              { val: 'Same-Day', sub: 'Emergency Visits' },
            ].map((b, i) => (
              <div key={i} className="px-4 py-3 border border-white/10 text-center">
                <div className="text-white font-bold text-sm">{b.val}</div>
                <div className="text-white/40 text-[9px] uppercase tracking-widest mt-0.5">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — full photo */}
        <div className="relative overflow-hidden order-2" style={{ minHeight: '50vh' }}>
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
            alt="Clarity Dental Studio"
            fill
            className="object-cover object-top"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
      </section>

      {/* SIGNATURE ELEMENT — animated stats counters */}
      <section style={{ backgroundColor: NAVY }} className="border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          <AnimatedStat target={20} label="Years Serving Denver" />
          <AnimatedStat target={15000} label="Smiles Transformed" />
          <AnimatedStat target={98} label="% Patient Satisfaction" suffix="%" />
          <AnimatedStat target={4} label="Doctors on Staff" />
        </div>
      </section>

      {/* SPECIAL OFFER BANNER */}
      <section style={{ backgroundColor: ICE }} className="py-5 px-6 text-center border-b border-sky-100">
        <p className="text-sm font-bold" style={{ color: NAVY }}>
          New Patient Special: Exam + X-Rays + Cleaning —{' '}
          <span style={{ color: SKY }}>$89 (Reg. $290)</span>{' '}
          ·{' '}
          <Link href={`${BASE}/contact`} className="underline">Book Online Now</Link>
        </p>
      </section>

      {/* SERVICES — 4-category grid with icon + category + items + price */}
      <section style={{ backgroundColor: ICE }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SKY }}>What We Offer</p>
            <h2
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Everything Your Smile Needs
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">One office, one team, complete dental care. We treat patients aged 3 to 93.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SVCS.map(({ icon: Icon, title, category, price, desc, items }, i) => (
              <div key={i} className="bg-white p-8 border border-sky-50">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div
                      className="text-[9px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: SKY }}
                    >
                      {category}
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: SKY + '12' }}>
                      <Icon className="w-5 h-5" style={{ color: SKY }} strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 text-white" style={{ backgroundColor: NAVY }}>
                    {price}
                  </span>
                </div>
                <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: NAVY }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Check className="w-3 h-3 shrink-0" style={{ color: SKY }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ backgroundColor: NAVY }}
            >
              Full Services & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — ICE background, doctor photo right, text left */}
      <section style={{ backgroundColor: WHITE }} className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: ICE }}>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-5" style={{ color: SKY }}>Our Practice</p>
            <h2
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Dental care that puts you at ease.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Dr. Anita Patel and Dr. Marcus Kim built Clarity around one principle: every patient deserves to feel comfortable, informed, and respected — not rushed, judged, or scared.
            </p>
            <div className="space-y-3 mb-8">
              {CHECKPOINTS.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 shrink-0" style={{ color: SKY }} />{p}
                </div>
              ))}
            </div>
            <Link
              href={`${BASE}/about`}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5"
              style={{ color: SKY, borderColor: SKY }}
            >
              Meet Dr. Patel & Dr. Kim <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* INSURANCE STRIP */}
      <section style={{ backgroundColor: ICE }} className="py-12 px-6 md:px-12 border-y border-sky-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[9px] font-bold uppercase tracking-widest mb-6" style={{ color: NAVY }}>Insurance Partners</div>
          <div className="flex flex-wrap justify-center gap-3">
            {INSURANCE.map((ins, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-sky-100 text-xs font-bold text-gray-500">
                {ins}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-5">No insurance? Ask about our in-house Clarity Care Plan — flat-rate annual fee, no waiting periods.</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: ICE }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SKY }}>Patient Reviews</p>
            <h2
              className="text-4xl md:text-5xl mb-2"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              4.9 Stars on Google
            </h2>
            <p className="text-gray-400 text-sm">480+ verified patient reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: SKY }}>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SKY }} />)}
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: NAVY }}>
                  — {r.author} <span className="text-gray-400 font-normal">· {r.service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`${BASE}/reviews`}
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: SKY }}
            >
              Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW PATIENTS — MINT/green background with special offer */}
      <section style={{ backgroundColor: MINT }} className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: '#166534' }}>New Patients</p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-display)', color: NAVY }}
          >
            Start with our $89 New Patient Special
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Includes full exam, digital X-rays, and professional cleaning. Regular value $290. We accept most major insurance plans — and if you have none, we have options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ backgroundColor: NAVY }}
            >
              Claim This Offer <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:7205550139"
              className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-[10px] px-10 py-4"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <Phone className="w-4 h-4" /> Call to Schedule
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-4" style={{ color: SKY }}>FAQ</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', color: NAVY }}
            >
              Patient Questions Answered
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: NAVY }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: SKY }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: SKY }}>Our Office</div>
            <div className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SKY }} />
              <span>720 S Colorado Blvd, Suite 550<br />Denver, CO 80246</span>
            </div>
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: SKY }}>Office Hours</div>
            <div className="text-sm space-y-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <div>Mon – Thu: 7:00am – 7:00pm</div>
              <div>Friday: 7:00am – 5:00pm</div>
              <div>Saturday: 8:00am – 3:00pm</div>
              <div style={{ color: 'rgba(255,255,255,0.3)' }}>Sunday: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: SKY }}>Contact Us</div>
            <a href="tel:7205550139" className="inline-flex items-center gap-2 text-white font-bold text-base">
              <Phone className="w-4 h-4" style={{ color: SKY }} /> (720) 555-0139
            </a>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] px-7 py-3"
              style={{ backgroundColor: SKY }}
            >
              Book an Appointment <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: SKY }} className="py-16 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl text-white mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          New patients welcome. Same-week appointments available.
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm">
          Accepting most insurance plans. Flexible payment options for all patients. Morning, evening, and Saturday hours for busy families.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
            style={{ color: NAVY }}
          >
            Book Online Now <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:7205550139"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold uppercase tracking-widest text-[10px] px-10 py-4"
          >
            <Clock className="w-4 h-4" /> Same-Day Emergency Line
          </a>
        </div>
      </section>
    </>
  );
}

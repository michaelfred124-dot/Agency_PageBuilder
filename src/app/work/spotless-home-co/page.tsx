import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Star, Shield, Phone, MapPin, ChevronDown, Sparkles, Zap, Clock } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const GREEN = '#10B981';
const BLACK = '#0A0A0A';
const GRAY = '#F4F6F8';
const MUTED = '#6B7280';
const DARK_GREEN = '#059669';

const PACKAGES = [
  {
    name: 'One-Time Deep Clean',
    price: '$220',
    per: 'one-time visit',
    tag: '',
    desc: 'A thorough, top-to-bottom clean for move-ins, move-outs, or a fresh start.',
    features: ['All rooms, floors & surfaces', 'Inside cabinets & appliances', 'Baseboards & light fixtures', 'Same-week booking available'],
  },
  {
    name: 'Bi-Weekly Service',
    price: '$99',
    per: 'per visit',
    tag: 'Most Popular',
    desc: 'The sweet spot — your home stays consistently clean without daily effort.',
    features: ['Every 2 weeks on your schedule', 'Same dedicated cleaner', 'Free re-clean guarantee', 'Priority rebooking & support'],
  },
  {
    name: 'Weekly Maintenance',
    price: '$79',
    per: 'per visit',
    tag: 'Best Value',
    desc: 'For busy households that want a home that always feels guest-ready.',
    features: ['Every week, same day & time', 'Customized cleaning checklist', 'Free add-on services quarterly', 'Dedicated account manager'],
  },
];

const STEPS = [
  { icon: Clock, step: '01', title: 'Book in 60 seconds', desc: 'Tell us your home size and preferred schedule. Instant confirmation, no phone calls.' },
  { icon: Sparkles, step: '02', title: 'We show up & clean', desc: 'Our vetted, insured cleaners arrive on time with everything they need. You do nothing.' },
  { icon: Zap, step: '03', title: 'Come home to clean', desc: 'Walk into a spotless home. If anything is off, we reclean within 24 hours, free.' },
];

const REVIEWS = [
  { text: "Switched from two other cleaning services. Spotless is the first one that actually does what they promise. The cleaner remembers exactly how I like things every single time.", author: 'Amanda R.', stars: 5, tag: 'Bi-Weekly Client' },
  { text: "Booked a one-time deep clean before my in-laws visited. The team did things I did not even ask for — baseboards, inside the microwave, the tracks on the windows. Phenomenal.", author: 'Marcus T.', stars: 5, tag: 'Deep Clean' },
  { text: "I have been using Spotless weekly for eight months. My home has never been cleaner. The app is easy, the team is reliable, and I have never had to follow up on anything.", author: 'Priya K.', stars: 5, tag: 'Weekly Client' },
];

const FAQS = [
  { q: "Do I need to be home during the cleaning?", a: "No. Most clients give us a key or door code and are not home at all. Your cleaner is background-checked, insured, and bonded. If you prefer to be home the first visit, that works too." },
  { q: "What if I am not happy with the clean?", a: "We reclean any missed area within 24 hours, no questions asked. If you are still not satisfied, we refund the visit. We have never had to issue a refund — but the guarantee is real." },
  { q: "Do your cleaners bring their own supplies?", a: "Yes. All supplies, equipment, and products are included. If you prefer eco-friendly or fragrance-free products, let us know when booking and we will accommodate." },
  { q: "Can I request the same cleaner each visit?", a: "Yes. Once you have a cleaner you love, we keep them on your account. If they are ever unavailable, we notify you in advance and assign a trained backup." },
  { q: "How do I skip a week or pause service?", a: "Manage everything from your account — skip visits, change dates, or pause anytime with no penalty. We just ask for 24 hours notice for schedule changes." },
  { q: "What areas of Nashville do you serve?", a: "We cover Nashville, Brentwood, Franklin, Germantown, East Nashville, 12 South, Green Hills, Belle Meade, and surrounding areas. Enter your zip code when booking to confirm availability." },
  { q: "Are you insured if something is damaged?", a: "Yes. We carry full liability insurance and a damage coverage policy. In the rare event of damage, file a claim within 48 hours and we handle it within 3 business days." },
];

export default function SpotlessHome() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={BASE} className="font-black text-lg tracking-tight" style={{ color: BLACK }}>SPOTLESS<span style={{ color: GREEN }}>.</span></Link>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Pricing', 'Reviews', 'Contact'].map(l => (
              <Link key={l} href={`${BASE}/services`} className="text-sm font-medium" style={{ color: MUTED }}>{l}</Link>
            ))}
          </div>
          <Link href={`${BASE}/contact`} className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 text-white" style={{ backgroundColor: GREEN }}>Book Now</Link>
        </div>
      </nav>

      {/* HERO — split: big type left, image + floating cards right */}
      <section className="min-h-screen grid lg:grid-cols-2 overflow-hidden bg-white">
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          <div className="inline-flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit" style={{ backgroundColor: '#ECFDF5', color: GREEN }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GREEN }} /> Nashville's highest-rated cleaning service
          </div>
          <h1 className="font-black leading-none mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: BLACK }}>
            A cleaner<br />home starts<br /><span style={{ color: GREEN }}>today.</span>
          </h1>
          <p className="text-lg mb-10 max-w-sm" style={{ color: MUTED }}>
            Professional home cleaning on your schedule. Background-checked cleaners, 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 text-white" style={{ backgroundColor: GREEN }}>
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 border-2" style={{ borderColor: BLACK, color: BLACK }}>
              View Pricing
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} />)}
            </div>
            <span className="text-sm font-medium" style={{ color: MUTED }}>4.9 stars · 840+ Google reviews</span>
          </div>
        </div>

        {/* Right: image + floating cards */}
        <div className="relative min-h-[600px]" style={{ backgroundColor: GRAY }}>
          <Image
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop"
            alt="Clean modern home"
            fill className="object-cover" referrerPolicy="no-referrer" priority
          />
          {/* Floating stat cards */}
          <div className="absolute top-10 left-6 bg-white rounded-2xl shadow-xl p-5 w-44">
            <div className="text-3xl font-black mb-1" style={{ color: BLACK }}>2,400<span style={{ color: GREEN }}>+</span></div>
            <div className="text-xs font-medium" style={{ color: MUTED }}>Nashville homes cleaned</div>
          </div>
          <div className="absolute bottom-10 right-6 bg-white rounded-2xl shadow-xl p-5 w-48">
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#F59E0B' }} />)}
            </div>
            <div className="text-3xl font-black mb-1" style={{ color: BLACK }}>98<span style={{ color: GREEN }}>%</span></div>
            <div className="text-xs font-medium" style={{ color: MUTED }}>client satisfaction rate</div>
          </div>
        </div>
      </section>

      {/* STATS — 4 numbers on light gray */}
      <section style={{ backgroundColor: GRAY }} className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '2,400+', l: 'Homes Cleaned' },
            { n: '98%', l: 'Satisfaction Rate' },
            { n: '$0', l: 'Hidden Fees. Ever.' },
            { n: '24hr', l: 'Reclean Guarantee' },
          ].map(({ n, l }, i) => (
            <div key={i} className="text-center">
              <div className="font-black text-5xl mb-2" style={{ color: BLACK }}>{n}</div>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES — 3-col SaaS-style */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>Pricing</p>
            <h2 className="font-black text-4xl md:text-5xl mb-3" style={{ color: BLACK }}>Simple, transparent pricing.</h2>
            <p className="text-base" style={{ color: MUTED }}>No contracts. Cancel anytime. First-time clients save 20%.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(({ name, price, per, tag, desc, features }, i) => (
              <div key={i} className="relative rounded-2xl p-8 flex flex-col" style={{ border: i === 1 ? `2px solid ${GREEN}` : '2px solid #E5E7EB', backgroundColor: i === 1 ? '#ECFDF5' : 'white', boxShadow: '0 6px 28px rgba(0,0,0,0.10)' }}>
                {tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 text-white rounded-full" style={{ backgroundColor: GREEN }}>{tag}</div>
                )}
                <div className="mb-5">
                  <h3 className="font-bold text-sm mb-4" style={{ color: MUTED }}>{name}</h3>
                  <div className="font-black text-5xl mb-1" style={{ color: BLACK }}>{price}</div>
                  <div className="text-xs" style={{ color: MUTED }}>{per}</div>
                </div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: BLACK }}>
                      <Check className="w-4 h-4 shrink-0" style={{ color: GREEN }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`${BASE}/contact`} className="text-center font-bold text-sm py-3.5 transition-colors" style={{ backgroundColor: i === 1 ? GREEN : BLACK, color: 'white' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps */}
      <section style={{ backgroundColor: GRAY }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>Process</p>
            <h2 className="font-black text-4xl" style={{ color: BLACK }}>Three steps to a clean home.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.10)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#ECFDF5' }}>
                  <Icon className="w-6 h-6" style={{ color: GREEN }} />
                </div>
                <div className="font-black text-5xl mb-3" style={{ color: '#E5E7EB' }}>{step}</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: BLACK }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE — full-width green */}
      <section style={{ backgroundColor: GREEN }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-10 h-10 mx-auto mb-6 text-white opacity-80" />
          <h2 className="font-black text-4xl md:text-5xl text-white mb-5">The Spotless Guarantee.</h2>
          <p className="text-lg text-white/75 max-w-xl mx-auto mb-8">
            If you are not 100% satisfied, we return within 24 hours and reclean the area for free. No questions, no hassle, no runaround.
          </p>
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold text-sm px-8 py-4" style={{ color: GREEN }}>
            Book With Confidence <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>Reviews</p>
            <h2 className="font-black text-4xl" style={{ color: BLACK }}>What our clients say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => {
              const PASTELS = [
                { bg: '#FCE7F3', border: '#F9A8D4', star: '#EC4899' },
                { bg: '#EDE9FE', border: '#C4B5FD', star: '#7C3AED' },
                { bg: '#FEF3C7', border: '#FCD34D', star: '#D97706' },
              ];
              const pastel = PASTELS[i % 3];
              return (
              <div key={i} className="rounded-2xl p-7" style={{ backgroundColor: pastel.bg, border: `1.5px solid ${pastel.border}`, boxShadow: `0 8px 32px ${pastel.border}55` }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: pastel.star }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>"{r.text}"</p>
                <div>
                  <div className="font-bold text-sm" style={{ color: BLACK }}>{r.author}</div>
                  <div className="text-xs mt-0.5" style={{ color: pastel.star }}>{r.tag}</div>
                </div>
              </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>View All 840+ Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: GRAY }} className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>FAQ</p>
            <h2 className="font-black text-4xl" style={{ color: BLACK }}>Common questions.</h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer gap-4">
                  <span className="font-bold text-sm" style={{ color: BLACK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: GREEN }} />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-5" style={{ color: BLACK }}>Ready for a cleaner home?</h2>
          <p className="text-base mb-8" style={{ color: MUTED }}>Book in 60 seconds. First clean 20% off. Cancel anytime.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold text-sm px-10 py-4 text-white" style={{ backgroundColor: GREEN }}>Book Your First Clean <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:6155550431" className="inline-flex items-center gap-2 font-bold text-sm px-10 py-4 border-2" style={{ borderColor: BLACK, color: BLACK }}><Phone className="w-4 h-4" /> (615) 555-0431</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: BLACK }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-black text-xl text-white mb-3">SPOTLESS<span style={{ color: GREEN }}>.</span></div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Professional home cleaning in Nashville. Insured, reliable, and 100% guaranteed.</p>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <MapPin className="w-4 h-4 shrink-0" style={{ color: GREEN }} />
              <span>1234 Murfreesboro Pike, Nashville TN 37217</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Services</div>
            <ul className="space-y-2">
              {['Standard Cleaning', 'Deep Cleaning', 'Move In / Move Out', 'Weekly Service', 'Bi-Weekly Service', 'Commercial'].map(s => (
                <li key={s}><Link href={`${BASE}/services`} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 text-white">Contact</div>
            <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <div><Phone className="w-3.5 h-3.5 inline mr-2" style={{ color: GREEN }} />(615) 555-0431</div>
              <div className="mt-3">Mon – Sat: 7:00am – 7:00pm<br />Sunday: 9:00am – 4:00pm</div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>© 2025 Spotless Home Co. All rights reserved.</span>
          <div className="flex gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <Link href={BASE}>Privacy</Link>
            <Link href={BASE}>Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

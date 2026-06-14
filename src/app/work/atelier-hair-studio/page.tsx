import Image from 'next/image';
import Link from 'next/link';
import { Scissors, ArrowRight, Star, Leaf, Sparkles, Check, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

const SVCS = [
  { title: 'Balayage & Highlights', price: 'From $180', desc: 'Hand-painted balayage, foil highlights, babylights, and toning. Each blend is uniquely created for your skin tone and features.' },
  { title: 'Full Color', price: 'From $120', desc: 'Root touch-ups, full single-process color, and fashion-forward vivid tones. Formulated with Schwarzkopf and Olaplex.' },
  { title: 'Precision Cuts', price: 'From $85', desc: 'Dry or wet cutting technique chosen for your texture. Every cut includes a consultation, shampoo, condition, and blowout.' },
  { title: 'Keratin Treatment', price: 'From $250', desc: 'Smoothing treatments that eliminate frizz for 3–5 months. Safe for color-treated and chemically processed hair.' },
  { title: 'Bridal Hair', price: 'Custom Quote', desc: 'Trial appointments, day-of bridal styling, and bridesmaid packages. Inquire 6+ months in advance for peak season dates.' },
  { title: 'Treatments & Gloss', price: 'From $65', desc: 'Bond-building Olaplex treatments, deep conditioning masks, and glossing services to restore shine and strength.' },
];

const STEPS = [
  { icon: Sparkles, title: 'Book a Consultation', desc: 'New clients start with a complimentary 15-minute consultation — in-person or via DM. We review your hair history and goals.' },
  { icon: Scissors, title: 'Your Custom Formulation', desc: 'Your stylist creates a personalized formula and service plan. No cookie-cutter approaches.' },
  { icon: Leaf, title: 'The Service', desc: 'Relax in a quiet, boutique environment. Enjoy a scalp massage, quality products, and time devoted entirely to you.' },
  { icon: Star, title: 'Maintain & Return', desc: 'Leave with a personalized aftercare kit recommendation and maintenance schedule. We are your long-term hair partner.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2080&auto=format&fit=crop',
];

const REVIEWS = [
  { text: "Maria is an absolute artist. My balayage looks so natural and the color is exactly what I dreamed of. I will never go anywhere else.", author: "Chloe T.", service: "Balayage" },
  { text: "I have been to at least a dozen salons. Atelier is in a completely different league. The attention to detail and quality of care is unmatched.", author: "Priya N.", service: "Color + Cut" },
  { text: "My wedding hair was absolutely perfect. Jamie executed my vision flawlessly and I felt beautiful all day.", author: "Emma W.", service: "Bridal Hair" },
];

const FAQS = [
  { q: "Do I need a consultation before booking a color service?", a: "New color clients are required to book a complimentary consultation first, especially for vivid colors, major transformations, or if you have had box dye. This ensures we have enough time and the right formula. Returning clients can book directly." },
  { q: "How far in advance should I book?", a: "Maria and Priya book 4–6 weeks out for color services. Jamie has more availability for cuts and bridal. For bridal styling, we recommend contacting us at least 6 months before your date — 12 months for peak season (May–October)." },
  { q: "What is your cancellation policy?", a: "We require 48 hours notice to cancel or reschedule. Cancellations with less than 24 hours notice may be charged 50% of the service. No-shows are charged the full service amount." },
  { q: "Do you use sustainable or natural products?", a: "Yes. We use Schwarzkopf Professional and Olaplex, both of which are free from ammonia and PPD. We also carry a selection of Davines styling products, which are certified carbon-neutral and sustainably packaged." },
  { q: "Can I bring inspiration photos?", a: "Absolutely — we encourage it. Screenshots, Pinterest boards, and Instagram saves are all helpful. Please also include photos of hair that did not work so we can understand your preferences. A great consultation uses both." },
  { q: "Do you accommodate textured, curly, or natural hair?", a: "Yes. Priya specializes in curly and textured hair and uses a curl-specific cutting technique (dry cutting for curls). We will never straighten your texture to cut it. Please book with Priya and mention your texture when scheduling." },
  { q: "Is parking available nearby?", a: "Street parking is available on South Congress Ave and surrounding streets. There is also a small lot behind our building with two-hour free parking. We are easily accessible via the #1 CapMetro bus line." },
];

export default function AtelierHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,26,0.65)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px" style={{ backgroundColor: ROSE }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60">Austin, TX · Sustainable Luxury</span></div>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-6">Where Hair<br />Becomes Art.</h1>
          <p className="text-white/65 text-lg mb-10 max-w-md leading-relaxed">A boutique hair studio dedicated to artisan color, precision cuts, and sustainable luxury. Every appointment is an experience crafted entirely for you.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4" style={{ backgroundColor: ROSE }}>Book a Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4">Our Services & Pricing</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['4.9 Stars · 200+ Reviews', 'Olaplex Certified', 'Sustainable Products', 'New Clients Welcome'].map((s, i) => (
            <div key={i} className="font-bold text-sm" style={{ color: i % 2 === 0 ? '#fff' : ROSE }}>{s}</div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: BLUSH }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Services & Pricing</div>
            <h2 className="text-4xl font-serif italic mb-3" style={{ color: CHARCOAL }}>Our Craft</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Every service begins with a consultation. Pricing reflects the artisan skill and quality products used.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SVCS.map(({ title, price, desc }, i) => (
              <div key={i} className="bg-white p-7">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-sm" style={{ color: CHARCOAL }}>{title}</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 ml-3 shrink-0" style={{ backgroundColor: ROSE + '20', color: ROSE }}>{price}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: CHARCOAL }}>Full Menu & Pricing <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {GALLERY.map((src, i) => (
          <div key={i} className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
            <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Your Experience</div>
            <h2 className="text-4xl font-serif italic" style={{ color: CHARCOAL }}>The Atelier Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: BLUSH }}>
                  <Icon className="w-5 h-5" style={{ color: ROSE }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: CHARCOAL }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="grid lg:grid-cols-2 min-h-[60vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: CHARCOAL }}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: ROSE }}>Why Atelier</div>
            <h2 className="text-4xl font-serif italic text-white mb-6">Hair transformed.<br />Confidence restored.</h2>
            <p className="text-white/50 leading-relaxed mb-8">Every stylist at Atelier completes ongoing education — we do not sit still while the industry evolves. We use only Olaplex-compatible formulas, zero PPD, and sustainable tools.</p>
            <div className="space-y-3 mb-8">
              {["Complimentary 15-min new client consultation", "Olaplex bond protection included on all color", "Eco-conscious products — vegan & cruelty-free", "Private suite available for sensitive clients", "Bridal team specializing in textured hair"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50"><Check className="w-4 h-4 shrink-0" style={{ color: ROSE }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: ROSE, borderColor: ROSE }}>Meet Our Stylists <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: BLUSH }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Client Love</div>
            <h2 className="text-4xl font-serif italic" style={{ color: CHARCOAL }}>What Clients Say</h2>
            <p className="text-gray-500 text-sm mt-2">4.9 Stars · 200+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7">
                <div className="flex justify-center mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ROSE }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4 text-center">"{r.text}"</p>
                <div className="text-center font-bold text-xs" style={{ color: CHARCOAL }}>— {r.author} <span className="text-gray-400 font-normal">· {r.service}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: CHARCOAL }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>FAQ</div>
            <h2 className="text-4xl font-serif italic" style={{ color: CHARCOAL }}>Questions Answered</h2>
          </div>
          <div className="divide-y divide-pink-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: CHARCOAL }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: ROSE }} />
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>Find Us</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ROSE }} />
              <span>1120 South Congress Ave, Suite 8<br />Austin, TX 78704</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ROSE }}>Hours</div>
            <div className="text-white/65 text-sm space-y-0.5">
              <div>Tue – Fri: 9:00am – 7:00pm</div>
              <div>Saturday: 9:00am – 6:00pm</div>
              <div className="text-white/30">Sun & Mon: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:5125550293" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: ROSE }} /> (512) 555-0293</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-7 py-3" style={{ backgroundColor: ROSE }}>Book a Consultation <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 text-center">
        <Scissors className="w-7 h-7 mx-auto mb-5" style={{ color: ROSE }} strokeWidth={1.5} />
        <h2 className="text-3xl font-serif italic mb-4" style={{ color: CHARCOAL }}>Book your transformation today.</h2>
        <p className="text-gray-500 mb-8 text-sm max-w-md mx-auto">New clients receive a complimentary deep conditioning treatment with any color service. Olaplex bond protection included.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: CHARCOAL }}>Book Online <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:5125550293" className="inline-flex items-center gap-2 border font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ borderColor: CHARCOAL, color: CHARCOAL }}><Clock className="w-4 h-4" /> Call for Same-Week Availability</a>
        </div>
      </section>
    </>
  );
}

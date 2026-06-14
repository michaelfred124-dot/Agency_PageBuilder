import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, Check, Star, Scissors, ShowerHead, Zap, Phone, MapPin, ChevronDown, Clock, Shield } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const SVCS = [
  { icon: ShowerHead, title: 'Bath & Brush', tag: 'Most Popular', starting: '$45', desc: 'A thorough bath with breed-appropriate shampoo, blow dry, brush out, ear cleaning, nail trim, and spritz.', sizes: [['XS (under 15 lb)', '$45'], ['S (15–30 lb)', '$55'], ['M (30–50 lb)', '$65'], ['L (50–70 lb)', '$75'], ['XL (70+ lb)', '$90']] },
  { icon: Scissors, title: 'Full Groom', tag: 'Premium', starting: '$70', desc: 'Everything in Bath & Brush, plus a breed-specific cut, styling, and a bandana or bow of your choice.', sizes: [['XS (under 15 lb)', '$70'], ['S (15–30 lb)', '$85'], ['M (30–50 lb)', '$100'], ['L (50–70 lb)', '$120'], ['XL (70+ lb)', '$145']] },
  { icon: Heart, title: 'Spa Add-Ons', tag: 'Upgrades', starting: '$12', desc: 'Elevate any groom with our spa treatments designed for coat health, comfort, and that extra glow.', sizes: [['Blueberry Facial', '$18'], ['Conditioning Mask', '$22'], ['Paw Balm Treatment', '$15'], ['Teeth Brushing', '$12'], ['De-shed Treatment', '$25']] },
  { icon: Zap, title: 'Express Service', tag: 'Quick Visit', starting: '$20', desc: 'In and out services for between-groom maintenance. No appointment needed for most express services.', sizes: [['Nail Trim', '$20'], ['Ear Cleaning', '$18'], ['Paw Trim', '$22'], ['Quick Brush-Out', '$25'], ['Nail Grind', '$25']] },
];

const STEPS = [
  { icon: Phone, title: 'Book Your Appointment', desc: 'Call, text, or book online. First-time clients get a free 10-minute meet-and-greet to discuss your dog\'s needs.' },
  { icon: Heart, title: 'Drop Off & Relax', desc: 'We take it from here. One dog at a time means your pup gets individual attention, never caged between services.' },
  { icon: ShowerHead, title: 'Real-Time Updates', desc: 'We text you a photo mid-groom so you can see the progress. No news is good news — but we always send good news.' },
  { icon: Scissors, title: 'Pickup a Happy Pup', desc: 'Your dog leaves clean, styled, and calm. We go over what we found and any notes for your next visit.' },
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
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover object-center" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(19,78,74,0.97) 0%, rgba(19,78,74,0.45) 60%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-px" style={{ backgroundColor: '#5EEAD4' }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/55">Seattle, WA · Fear-Free Certified · Est. 2018</span></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">Your dog deserves<br />to be <em style={{ color: '#5EEAD4' }}>pampered</em>.</h1>
          <p className="text-white/65 text-lg mb-10 max-w-md leading-relaxed">Fear-free certified grooming for dogs of all breeds and sizes. A calm, loving environment where every pup leaves looking great and feeling great.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full" style={{ backgroundColor: TEAL }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:2065550374" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full"><Phone className="w-4 h-4" /> (206) 555-0374</a>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/15 text-white/55 font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full">Pricing & Menu</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: TEAL }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Fear-Free Certified', 'No Cage Drying — Ever', '5.0 Stars · 190+ Reviews', 'One Dog at a Time'].map((s, i) => (
            <div key={i} className="text-white font-bold text-sm">{s}</div>
          ))}
        </div>
      </section>

      {/* SERVICES WITH PRICING */}
      <section style={{ backgroundColor: LIGHT }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Services & Pricing</div>
            <h2 className="text-4xl font-bold mb-3" style={{ color: DARK }}>Grooming for Happy Dogs</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Pricing is based on breed, coat condition, and size. Final price confirmed at drop-off after a brief assessment.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SVCS.map(({ icon: Icon, title, tag, starting, desc, sizes }, i) => (
              <div key={i} className="bg-white p-8 border-t-4" style={{ borderTopColor: TEAL }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: TEAL + '18' }}>
                    <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: TEAL }}>{tag}</div>
                    <div className="text-xs text-gray-400">Starting at <span className="font-bold" style={{ color: DARK }}>{starting}</span></div>
                  </div>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">{desc}</p>
                <div className="space-y-1.5">
                  {sizes.map(([size, price], j) => (
                    <div key={j} className="flex items-center justify-between text-xs border-b border-gray-50 pb-1.5">
                      <span className="text-gray-500">{size}</span>
                      <span className="font-bold" style={{ color: DARK }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: DARK }}>Full Service Menu <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>How It Works</div>
            <h2 className="text-4xl font-bold" style={{ color: DARK }}>Your Dog is in Good Paws</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: LIGHT }}>
                  <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE SPLIT */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="flex items-center px-10 md:px-16 py-16 bg-white">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: TEAL }}>Our Promise</div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>Calm. Gentle. Professional.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">Every dog is different. We take time to understand your pet's needs, anxiety triggers, and preferences — then build a grooming experience around them. No rush. No cages. No fear.</p>
            <div className="space-y-3 mb-8">
              {["No cage drying — air dry or hand dry only", "One dog on the grooming floor at a time", "Anxious & senior dog specialists on staff", "Text photo updates mid-groom", "All-natural shampoo option available", "Anxiety wraps & calming sprays on hand"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-500"><Check className="w-4 h-4 shrink-0" style={{ color: TEAL }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: TEAL, borderColor: TEAL }}>Meet Casey & Jordan <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Happy Pups</div>
            <h2 className="text-4xl font-bold mb-2" style={{ color: DARK }}>What Pet Parents Say</h2>
            <p className="text-gray-400 text-sm">5.0 Stars · 190+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: TEAL }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: DARK }}>— {r.author}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest">{r.dog}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: TEAL }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>FAQ</div>
            <h2 className="text-4xl font-bold" style={{ color: DARK }}>Questions From Pet Parents</h2>
          </div>
          <div className="divide-y divide-teal-50">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: DARK }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: TEAL }} />
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3 text-teal-400">Find Us</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-teal-400" />
              <span>2241 NW Market St<br />Seattle, WA 98107<br /><span className="text-white/30 text-xs">Free street parking on 22nd Ave NW</span></span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3 text-teal-400">Hours</div>
            <div className="text-white/65 text-sm space-y-1">
              <div>Tue – Fri: 9:00am – 6:00pm</div>
              <div>Saturday: 8:00am – 5:00pm</div>
              <div className="text-white/30">Sun & Mon: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-teal-400">Book or Inquire</div>
            <a href="tel:2065550374" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4 text-teal-400" /> (206) 555-0374</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-7 py-3 rounded-full" style={{ backgroundColor: TEAL }}>Book a Grooming Appointment <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center border-t border-teal-800">
        <Heart className="w-8 h-8 mx-auto mb-5 text-teal-400" strokeWidth={1.5} />
        <h2 className="text-3xl font-bold text-white mb-4">Every dog leaves happy. Guaranteed.</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">Book online or call. New client appointments available most weeks. First visit includes a free meet-and-greet.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: TEAL }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
          <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-teal-700 text-white/60 font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full"><Shield className="w-4 h-4" /> View All Services</Link>
        </div>
      </section>
    </>
  );
}

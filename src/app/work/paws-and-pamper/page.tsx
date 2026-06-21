'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Check, Star, ChevronDown, MapPin, Phone, Instagram, Scissors } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const BG = '#162418';
const SAGE = '#7EA87A';
const CREAM = '#F5EDD8';
const CARD = '#1E3020';
const MUTED = 'rgba(245,237,216,0.5)';

const SERVICES = [
  {
    name: 'Full Groom Package',
    price: 'From $70',
    desc: 'Our signature head-to-tail service. Bath, blow-dry, breed-specific cut, ear cleaning, nail trim, and a bandana to finish.',
    includes: ['Breed-specific styling', 'All-natural shampoo & conditioner', 'Ear cleaning & nail trim', 'Blueberry facial spritz'],
    note: '(Prices vary by breed and coat condition)',
  },
  {
    name: 'Bath & Brush',
    price: 'From $45',
    desc: 'A thorough, relaxing bath with professional blow-dry and full brush-out. Perfect for between full-groom maintenance.',
    includes: ['Premium natural shampoo', 'Professional blow-dry', 'Full brush-out & deshedding', 'Nail trim included'],
    note: '(Prices vary by size/breed)',
  },
  {
    name: "Puppy's First Groom",
    price: 'From $55',
    desc: 'A gentle, positive introduction to grooming. We go slow, use treats, and make it a joyful experience from day one.',
    includes: ['Fear-free certified approach', 'Mini bath & blow-dry', 'Gentle nail introduction', 'Take-home grooming guide'],
    note: '(For puppies under 6 months)',
  },
  {
    name: 'Spa Add-Ons',
    price: 'From $12',
    desc: 'Elevate any groom with our luxury spa treatments. Each is thoughtfully sourced for coat health and skin nourishment.',
    includes: ['Blueberry facial $18', 'Conditioning mask $22', 'Paw balm treatment $15', 'De-shed treatment $25'],
    note: '(Add to any existing service)',
  },
];

const PROMISES = [
  { label: 'Cage-free environment', desc: 'Your dog is never left crated between services.' },
  { label: 'All-natural products', desc: 'Isle of Dogs and Chris Christensen — no sulfates, no parabens.' },
  { label: 'Breed-specific techniques', desc: 'Every coat type handled with specialized expertise.' },
  { label: 'Certified groomers only', desc: 'Fear-Free certified and continually trained staff.' },
];

// ── Static content ──
const STEPS = [
  { n: '01', title: 'Book Online', desc: 'Select your service, date, and breed. First-time clients receive a complimentary 10-minute meet-and-greet.' },
  { n: '02', title: 'Drop-Off & Consult', desc: 'We walk through your dog\'s preferences, sensitivities, and any special instructions before we begin.' },
  { n: '03', title: 'Premium Grooming', desc: 'One dog at a time. No rush. We text you a mid-groom photo so you can follow along from afar.' },
  { n: '04', title: 'Pick Up Fresh & Happy', desc: 'Your pup leaves calm, clean, and styled. We share care notes for their next visit.' },
];

const BREEDS = [
  { label: 'Large Breeds', sub: 'Golden, Shepherd, Doodle', src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop' },
  { label: 'Small Breeds', sub: 'Shih Tzu, Yorkie, Maltese', src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop' },
  { label: 'Long-Hair Breeds', sub: 'Cavalier, Bichon, Afghan', src: 'https://images.unsplash.com/photo-1612774412771-005b8fb54b82?q=80&w=2070&auto=format&fit=crop' },
];

const TESTIMONIALS = [
  { quote: "Biscuit has anxiety and used to tremble at the groomer. He came home calm, fluffy, and smelling incredible. I will never go anywhere else.", owner: 'Sarah M.', dog: "Bella's mom", service: 'Full Groom Package' },
  { quote: "My 90-pound Shepherd can be reactive. The private, cage-free setup made all the difference. Absolutely exceptional care and professionalism.", owner: 'James W.', dog: "Duke's dad", service: 'Bath & Brush' },
  { quote: "Monthly client for over a year. Consistent, thorough, and they always remember Ziggy's preferences. The mid-groom photo update is such a lovely touch.", owner: 'Rob A.', dog: "Ziggy's dad", service: 'Full Groom Package' },
];

const FAQS = [
  { q: 'How long does a grooming appointment take?', a: 'Small dogs (under 30 lb) are typically ready in 1.5 to 2 hours. Medium breeds take 2 to 3 hours. Large and double-coated breeds may need 3 to 4 hours. We send a text when your pup is ready.' },
  { q: 'Do you groom anxious or reactive dogs?', a: 'We specialize in anxious dogs. We use desensitization techniques, high-value treats, slow introductions, and private suites for dogs that do better without other dogs around. Contact us to discuss your dog\'s specific needs.' },
  { q: 'What shampoos and products do you use?', a: 'We use Isle of Dogs and Chris Christensen professional-grade shampoos. All products are free from parabens, sulfates, and artificial dyes. We carry sensitive-skin and hypoallergenic formulas, and you are welcome to bring your own.' },
  { q: 'Do I need an appointment?', a: 'Yes for Full Grooms and Bath & Brush services. Walk-ins are accepted for Express services Tuesday through Friday. Saturday walk-ins fill quickly, so call ahead to check availability.' },
  { q: 'My dog has health conditions. Can you still groom them?', a: 'Often yes. We work with dogs managing arthritis, collapsing trachea, and heart conditions. A vet note is required for dogs with heart or respiratory issues. Please disclose any conditions when booking so we can accommodate safely.' },
  { q: 'What is your cancellation policy?', a: 'We ask for at least 24 hours notice to reschedule or cancel. Late cancellations under 2 hours may incur a 50% fee. No-shows are charged the full amount. Life happens, just communicate with us and we will work with you.' },
];

export default function PawsAndPamperPage() {
  return (
    <div style={{ backgroundColor: BG, color: CREAM }}>

      {/* STICKY NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-14 py-4"
        style={{ backgroundColor: BG, borderBottom: '1px solid rgba(126,168,122,0.2)' }}
      >
        <span className="font-serif italic text-lg" style={{ color: CREAM }}>Paws & Pamper</span>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {['Services', 'Booking', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`${BASE}/${item.toLowerCase()}`} className="transition-colors hover:opacity-100" style={{ color: MUTED }}>
              {item}
            </Link>
          ))}
        </div>
        <Link
          href={`${BASE}/contact`}
          className="text-xs font-bold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: SAGE, color: '#0A0A0A' }}
        >
          Book Grooming
        </Link>
      </nav>

      {/* HERO — split layout */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        {/* Left panel */}
        <div
          className="flex flex-col justify-center px-12 md:px-16 py-24 lg:py-32"
          style={{ backgroundColor: BG, flex: '0 0 55%' }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.35em] mb-8"
            style={{ color: SAGE }}
          >
            Nashville Premium Pet Grooming
          </p>
          <h1
            className="text-6xl md:text-7xl font-serif leading-tight mb-8"
            style={{ color: CREAM }}
          >
            Grooming<br />as an act<br />of love.
          </h1>
          <div className="mb-8" style={{ width: '60px', height: '2px', backgroundColor: SAGE }} />
          <p className="text-base leading-relaxed mb-10 max-w-sm" style={{ color: MUTED }}>
            Premium, cage-free pet grooming in the heart of Nashville. Every appointment is a one-on-one experience designed for your dog's comfort.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href={`${BASE}/contact`}
              className="px-7 py-3.5 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: SAGE, color: '#0A0A0A' }}
            >
              Book Appointment
            </Link>
            <Link
              href={`${BASE}/services`}
              className="px-7 py-3.5 rounded-full font-bold text-sm border transition-opacity hover:opacity-80"
              style={{ borderColor: CREAM, color: CREAM }}
            >
              View Services
            </Link>
          </div>
          <p className="text-xs" style={{ color: MUTED }}>500+ Nashville dogs groomed monthly</p>
        </div>

        {/* Right panel — image */}
        <div className="relative overflow-hidden" style={{ flex: '0 0 45%', minHeight: '500px' }}>
          <Image
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
            alt="Happy groomed dog"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(126,168,122,0.1)' }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: CARD }} className="py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '6,000+', label: 'Pets Groomed' },
            { num: '98%', label: 'Return Rate' },
            { num: '8', label: 'Expert Groomers' },
            { num: 'Est. 2017', label: 'Nashville Roots' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-5xl font-bold mb-2" style={{ color: SAGE }}>{num}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: MUTED }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: SAGE }}>Our Services</p>
            <h2 className="text-4xl md:text-5xl font-serif" style={{ color: CREAM }}>Everything your dog deserves.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(({ name, price, desc, includes, note }) => (
              <div
                key={name}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: CARD, border: '1px solid rgba(126,168,122,0.2)', boxShadow: '0 6px 28px rgba(0,0,0,0.10)' }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(126,168,122,0.15)' }}>
                    <Scissors className="w-5 h-5" style={{ color: SAGE }} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-bold" style={{ color: SAGE }}>{price}</span>
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: CREAM }}>{name}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{desc}</p>
                <ul className="space-y-2 mb-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: MUTED }}>
                      <Check className="w-4 h-4 shrink-0" style={{ color: SAGE }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs italic" style={{ color: 'rgba(245,237,216,0.3)' }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PAMPER PROMISE — split */}
      <section className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* Image left */}
        <div className="relative overflow-hidden" style={{ flex: '0 0 50%', minHeight: '400px' }}>
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            alt="Happy dog portrait"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Content right */}
        <div className="flex items-center px-12 md:px-16 py-20" style={{ flex: '0 0 50%', backgroundColor: CARD }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6" style={{ color: SAGE }}>Our Commitment</p>
            <h2 className="text-4xl font-serif mb-10" style={{ color: CREAM }}>The Pamper Promise.</h2>
            <div className="space-y-6">
              {PROMISES.map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(126,168,122,0.15)' }}>
                    <Leaf className="w-4 h-4" style={{ color: SAGE }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: CREAM }}>{label}</p>
                    <p className="text-sm" style={{ color: MUTED }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — 4 steps horizontal */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: SAGE }}>How It Works</p>
            <h2 className="text-4xl font-serif" style={{ color: CREAM }}>Simple. Stress-free. Spotless.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-base"
                  style={{ backgroundColor: SAGE, color: '#0A0A0A' }}
                >
                  {n}
                </div>
                <h3 className="font-bold text-sm mb-3" style={{ color: CREAM }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREEDS WE SERVE */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: SAGE }}>All Breeds Welcome</p>
            <h2 className="text-4xl font-serif" style={{ color: CREAM }}>Every breed deserves the best.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BREEDS.map(({ label, sub, src }) => (
              <div key={label} className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(126,168,122,0.15)' }}>
                <div className="relative" style={{ paddingBottom: '70%' }}>
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,36,24,0.75) 0%, transparent 55%)' }} />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-bold text-sm mb-1" style={{ color: CREAM }}>{label}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: SAGE }}>Happy Families</p>
            <h2 className="text-4xl font-serif" style={{ color: CREAM }}>What pet parents say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, owner, dog, service }, i) => {
              const pastels = [
                { bg: '#FCE7F3', border: '#F9A8D4', star: '#EC4899' },
                { bg: '#EDE9FE', border: '#C4B5FD', star: '#7C3AED' },
                { bg: '#FEF3C7', border: '#FCD34D', star: '#D97706' },
              ];
              const pastel = pastels[i % 3];
              return (
                <div
                  key={owner}
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: pastel.bg,
                    border: `1.5px solid ${pastel.border}`,
                    boxShadow: `0 8px 32px ${pastel.border}55`,
                  }}
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" style={{ color: pastel.star }} />
                    ))}
                  </div>
                  <p className="font-serif italic text-base leading-relaxed mb-6" style={{ color: '#1E3020' }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#1E3020' }}>{owner} &mdash; {dog}</p>
                    <p className="text-xs mt-1 font-bold" style={{ color: pastel.star }}>{service}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: CARD }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: SAGE }}>Common Questions</p>
            <h2 className="text-4xl font-serif" style={{ color: CREAM }}>Questions from pet parents.</h2>
          </div>
          <div style={{ borderTop: '1px solid rgba(126,168,122,0.15)' }}>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group"
                style={{ borderBottom: '1px solid rgba(126,168,122,0.15)' }}
              >
                <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none">
                  <span className="font-bold text-sm leading-snug" style={{ color: CREAM }}>{q}</span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    style={{ color: SAGE }}
                  />
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: SAGE }}>
        <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: 'rgba(10,10,10,0.55)' }}>Ready to Book?</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: '#0A0A0A' }}>
          Book your dog's next spa day.
        </h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'rgba(10,10,10,0.65)' }}>
          New client appointments available most weeks. First visit includes a complimentary 10-minute meet-and-greet.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="inline-block px-10 py-4 font-bold text-sm rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#0A0A0A', color: CREAM }}
        >
          Book an Appointment
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-12" style={{ backgroundColor: BG, borderTop: `1px solid ${SAGE}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif italic text-xl block mb-4" style={{ color: CREAM }}>Paws & Pamper</span>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Nashville's premier cage-free, fear-free grooming salon. Where every appointment is an act of love.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: SAGE }}>Services</p>
            <ul className="space-y-2">
              {['Full Groom Package', 'Bath & Brush', "Puppy's First Groom", 'Spa Add-Ons', 'Express Services'].map((s) => (
                <li key={s}>
                  <Link href={`${BASE}/services`} className="text-sm transition-opacity hover:opacity-100" style={{ color: MUTED }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: SAGE }}>Contact</p>
            <div className="space-y-3 text-sm" style={{ color: MUTED }}>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: SAGE }} />
                <span>1420 Lebanon Pike, Nashville TN 37210</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: SAGE }} />
                <a href="tel:6155550382" className="hover:opacity-100">(615) 555-0382</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 shrink-0" style={{ color: SAGE }} />
                <span>Follow us for cute dog pics &mdash; @pawsandpamper.nash</span>
              </div>
              <div className="pt-1" style={{ color: 'rgba(245,237,216,0.3)' }}>
                Tue &ndash; Fri: 9am &ndash; 6pm &nbsp;|&nbsp; Sat: 8am &ndash; 5pm
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8" style={{ borderTop: '1px solid rgba(126,168,122,0.15)' }}>
          <p className="text-xs text-center" style={{ color: 'rgba(245,237,216,0.25)' }}>
            &copy; 2025 Paws &amp; Pamper Nashville. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

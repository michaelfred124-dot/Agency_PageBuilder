import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Star, Phone, MapPin, ChevronDown, ArrowRight } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const BG = '#F5F0E8';
const TEXT = '#1A1A1A';
const ROSE = '#C49A6C';
const WHITE = '#FDFAF5';
const MUTED = 'rgba(26,26,26,0.45)';

const SHADOW_SM = '0 2px 12px rgba(26,26,26,0.08)';
const SHADOW_MD = '0 6px 28px rgba(26,26,26,0.11)';
const SHADOW_LG = '0 16px 48px rgba(26,26,26,0.13)';

// Pastel colors for review cards
const REVIEW_PASTELS = [
  { bg: '#FCE7F3', border: '#F9A8D4', star: '#EC4899' }, // rose pink
  { bg: '#EDE9FE', border: '#C4B5FD', star: '#7C3AED' }, // lavender
  { bg: '#FEF3C7', border: '#FCD34D', star: '#D97706' }, // warm amber
];

const SERVICES = [
  {
    title: 'Precision Cut & Style',
    price: 'From $95',
    features: ['Complimentary consultation', 'Blow-dry & finish included', 'Texture & movement specialists'],
    photo: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=200&auto=format&fit=crop',
  },
  {
    title: 'Hair Color & Highlights',
    price: 'From $165',
    features: ['Balayage & babylights', 'Schwarzkopf & Olaplex formulas', 'Glossing service available'],
    photo: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=200&auto=format&fit=crop',
  },
  {
    title: 'Extensions',
    price: 'From $450',
    features: ['Tape-in, hand-tied & fusion', 'Remy human hair only', 'Maintenance appointments included'],
    photo: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=200&auto=format&fit=crop',
  },
  {
    title: 'Bridal Hair',
    price: 'Custom Quote',
    features: ['Trial appointment included', 'Day-of coordination', 'Bridesmaid styling available'],
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=200&auto=format&fit=crop',
  },
];

const STYLISTS = [
  {
    name: 'Sophie Laurent',
    title: 'Creative Director',
    specialty: 'Color & Balayage',
    photo: 'https://i.pravatar.cc/400?img=47',
  },
  {
    name: 'Maya Chen',
    title: 'Senior Stylist',
    specialty: 'Extensions & Texture',
    photo: 'https://i.pravatar.cc/400?img=48',
  },
  {
    name: 'Isla Monroe',
    title: 'Bridal Specialist',
    specialty: 'Bridal & Updos',
    photo: 'https://i.pravatar.cc/400?img=49',
  },
];

const GALLERY_PHOTOS = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560066984-138daaa3d35d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop',
];

const TESTIMONIALS = [
  {
    text: "Sophie completely transformed my hair. I showed her a photo I had been too afraid to ask for elsewhere, and she delivered something even better. I cried happy tears.",
    author: 'Claire R.',
    service: 'Balayage & Cut',
  },
  {
    text: "The most luxurious salon experience I have ever had. Every detail was considered. The consultation alone was worth the visit. My hair has never looked this healthy.",
    author: 'Priya N.',
    service: 'Color & Extensions',
  },
  {
    text: "Isla did my entire bridal party on the wedding day. Every single person looked incredible and the styles lasted all night into the reception. Absolutely flawless.",
    author: 'Emma W.',
    service: 'Bridal Hair',
  },
];

const FAQS = [
  {
    q: 'Do I need a consultation before booking a color service?',
    a: "New color clients are required to start with a complimentary consultation, especially for vivid colors, major transformations, or if you have used box dye. This ensures we have the correct formula, time allotment, and realistic expectations. Returning clients may book directly.",
  },
  {
    q: 'How far in advance should I book an appointment?',
    a: "Sophie and Maya book 4–6 weeks out for color services. Isla has availability for precision cuts and is best booked 6 weeks out. For bridal services, we recommend reaching out at least 6 months before your date and up to 12 months for peak wedding season.",
  },
  {
    q: 'What is your cancellation policy?',
    a: "We ask for 48 hours notice to cancel or reschedule at no charge. Cancellations with less than 24 hours notice are charged 50% of the scheduled service. No-shows are charged the full service amount. We respect your time and ask the same in return.",
  },
  {
    q: 'What products do you use?',
    a: "We work exclusively with Schwarzkopf Professional color, Olaplex bond-building treatments, and Davines styling products. All are free from harmful chemicals, cruelty-free, and sustainably sourced. We include Olaplex protection in all color services at no additional charge.",
  },
  {
    q: 'Can I bring inspiration photos?',
    a: "Please do. Screenshots, Pinterest boards, and Instagram saves are incredibly helpful for our consultation. We also encourage you to bring photos of hair you did not like so we can fully understand your preferences. The best results come from great communication.",
  },
  {
    q: 'Do you accommodate curly and textured hair?',
    a: "Absolutely. Maya specializes in curly and naturally textured hair using a dry-cutting technique that honors your texture rather than fighting it. We will never straighten your curls to cut them. Please mention your hair type when booking so we can allocate the right time.",
  },
];

const MARQUEE_TEXT = '· Balayage · Precision Cuts · Color · Keratin · Bridal Hair · Olaplex Certified · Extensions · Scalp Treatments · Vivid Color · Dry Cuts ·';

export default function AtelierHome() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT }}>

      {/* STICKY NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-14 py-4"
        style={{
          backgroundColor: 'rgba(245,240,232,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,26,26,0.08)',
          boxShadow: '0 2px 20px rgba(26,26,26,0.07)',
        }}
      >
        <span className="font-serif italic text-xl" style={{ color: TEXT }}>Atelier</span>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Stylists', 'Portfolio', 'Contact'].map((item) => (
            <Link key={item} href={`${BASE}/contact`} className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>
              {item}
            </Link>
          ))}
        </div>
        <Link
          href={`${BASE}/contact`}
          className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border"
          style={{ borderColor: TEXT, color: TEXT, boxShadow: SHADOW_SM }}
        >
          Book Now
        </Link>
      </nav>

      {/* HERO — two-column split */}
      <section className="min-h-screen grid md:grid-cols-[55fr_45fr]">
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-24" style={{ backgroundColor: BG }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10" style={{ color: ROSE }}>
            Nashville's Premier Salon
          </p>
          <h1 className="text-7xl font-serif italic leading-tight mb-8" style={{ color: TEXT }}>
            Your most<br />beautiful self.
          </h1>
          <div className="w-16 mb-8" style={{ borderTop: `3px solid ${ROSE}` }} />
          <p className="text-lg leading-relaxed mb-12 max-w-md" style={{ color: MUTED }}>
            A boutique hair studio where artisan color, precision cuts, and genuine care come together for an experience unlike any other.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: TEXT, boxShadow: SHADOW_MD }}
            >
              Book Appointment
            </Link>
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest border"
              style={{ borderColor: ROSE, color: TEXT }}
            >
              Explore Services
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ROSE }} />
            <span className="text-xs" style={{ color: MUTED }}>1,200+ guests trust Atelier each year</span>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[60vh] md:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop"
            alt="Atelier Hair Studio Nashville"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(196,154,108,0.1)' }} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['1,200+', 'Happy Guests'],
            ['8', 'Master Stylists'],
            ['4.9★', 'Google Rating'],
            ['Est. 2015', 'Nashville Studio'],
          ].map(([val, lbl]) => (
            <div key={lbl} className="text-center py-8 px-4 rounded-xl" style={{ backgroundColor: BG, boxShadow: SHADOW_SM }}>
              <div className="text-4xl font-bold mb-2" style={{ color: TEXT }}>{val}</div>
              <div className="w-8 mx-auto mb-2" style={{ borderTop: `2px solid ${ROSE}` }} />
              <div className="text-[10px] uppercase tracking-widest" style={{ color: MUTED }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES — with full-bleed image behind the header */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: WHITE }}>
        <div className="max-w-5xl mx-auto">
          {/* Image header block */}
          <div className="relative rounded-2xl overflow-hidden mb-12" style={{ boxShadow: SHADOW_LG }}>
            <div className="relative h-56 md:h-72">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138daaa3d35d?q=80&w=2070&auto=format&fit=crop"
                alt="Atelier salon interior"
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.3) 60%, rgba(26,26,26,0.05) 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-3" style={{ color: ROSE }}>Services</p>
                <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-white">
                  The art of<br />beautiful hair.
                </h2>
              </div>
            </div>
          </div>

          {/* Service rows */}
          <div className="space-y-4">
            {SERVICES.map(({ title, price, features, photo }) => (
              <div
                key={title}
                className="flex items-center gap-6 py-6 px-6 rounded-xl"
                style={{ backgroundColor: BG, boxShadow: SHADOW_SM }}
              >
                <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-xl" style={{ boxShadow: SHADOW_MD }}>
                  <Image src={photo} alt={title} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-bold text-lg" style={{ color: TEXT }}>{title}</h3>
                    <span className="text-sm font-bold shrink-0" style={{ color: ROSE }}>{price}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {features.map((f) => (
                      <span key={f} className="text-xs" style={{ color: MUTED }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: TEXT, boxShadow: SHADOW_MD }}
            >
              View Full Menu <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* STYLISTS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Our Team</p>
            <h2 className="text-5xl font-serif italic" style={{ color: TEXT }}>Meet Your Stylists</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STYLISTS.map(({ name, title, specialty, photo }) => (
              <div key={name} className="rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, boxShadow: SHADOW_MD }}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5">
                  <div className="font-bold text-base" style={{ color: TEXT }}>{name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mt-0.5 mb-1.5" style={{ color: MUTED }}>{title}</div>
                  <div className="text-sm font-medium" style={{ color: ROSE }}>{specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — 4-col full-width */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {GALLERY_PHOTOS.map((photo, i) => (
          <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
            <Image
              src={photo}
              alt="Atelier Hair Studio portfolio"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: WHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Your Experience</p>
            <h2 className="text-4xl font-serif italic" style={{ color: TEXT }}>How it works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px" style={{ borderTop: `1px dashed ${ROSE}60` }} />
            {[
              { n: '1', title: 'Book Online', desc: 'Select your service, choose your stylist, and book in under 2 minutes.' },
              { n: '2', title: 'Consultation', desc: 'Your stylist reviews your goals, history, and inspiration before a single cut.' },
              { n: '3', title: 'Your Service', desc: 'Relax in a calm, boutique space dedicated entirely to your comfort.' },
              { n: '4', title: 'Love Your Look', desc: 'Leave with a custom aftercare kit and a maintenance schedule tailored to you.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="text-center px-5 py-7 rounded-2xl" style={{ backgroundColor: BG, boxShadow: SHADOW_SM }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-white"
                  style={{ backgroundColor: ROSE, boxShadow: '0 4px 16px rgba(196,154,108,0.4)' }}
                >
                  {n}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: TEXT }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — pastel colored cards */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Reviews</p>
            <h2 className="text-4xl font-serif italic" style={{ color: TEXT }}>Guests love Atelier.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, author, service }, i) => {
              const pastel = REVIEW_PASTELS[i % REVIEW_PASTELS.length];
              return (
                <div
                  key={author}
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: pastel.bg,
                    border: `1.5px solid ${pastel.border}`,
                    boxShadow: `0 8px 32px ${pastel.border}55`,
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: pastel.star }} />
                    ))}
                  </div>
                  <p className="text-sm italic leading-relaxed mb-6" style={{ color: TEXT }}>
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="font-bold text-sm" style={{ color: TEXT }}>{author}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: pastel.star }}>{service}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 md:px-14" style={{ backgroundColor: WHITE }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>FAQ</p>
            <h2 className="text-4xl font-serif italic" style={{ color: TEXT }}>Questions answered.</h2>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: SHADOW_MD }}>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group border-b last:border-0"
                style={{ borderColor: 'rgba(26,26,26,0.07)', backgroundColor: BG }}
              >
                <summary className="flex justify-between items-center cursor-pointer gap-4 px-7 py-6 list-none">
                  <span className="font-bold text-sm leading-snug" style={{ color: TEXT }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: ROSE }} />
                </summary>
                <p className="px-7 pb-6 text-sm leading-relaxed" style={{ color: MUTED }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: TEXT }}>
        <div className="max-w-2xl mx-auto">
          <Scissors className="w-7 h-7 mx-auto mb-6" style={{ color: ROSE }} strokeWidth={1.5} />
          <h2 className="text-5xl font-serif italic mb-5" style={{ color: WHITE }}>
            Ready for your transformation?
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: 'rgba(253,250,245,0.5)' }}>
            New guests receive a complimentary deep conditioning treatment with any color service. Book online or call us directly.
          </p>
          <Link
            href={`${BASE}/contact`}
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: ROSE, boxShadow: '0 8px 32px rgba(196,154,108,0.5)' }}
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-14 pt-16 pb-10" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-serif italic text-2xl mb-3 block" style={{ color: TEXT }}>Atelier</span>
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
              A boutique hair studio where artisan technique meets genuine care. Nashville, since 2015.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: ROSE }}>Services</div>
            <div className="space-y-2.5">
              {['Precision Cut & Style', 'Hair Color & Highlights', 'Extensions', 'Bridal Hair', 'Treatments & Gloss'].map((item) => (
                <div key={item}>
                  <Link href={`${BASE}/services`} className="text-xs" style={{ color: MUTED }}>{item}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: ROSE }}>Contact</div>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ROSE }} />
              <address className="text-xs not-italic leading-relaxed" style={{ color: MUTED }}>
                212 Commerce St, Suite 400<br />Nashville, TN 37201
              </address>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: ROSE }} />
              <a href="tel:6155550221" className="text-xs" style={{ color: MUTED }}>(615) 555-0221</a>
            </div>
            <div className="text-xs space-y-1" style={{ color: MUTED }}>
              <div>Tue &ndash; Fri: 9:00am &ndash; 7:00pm</div>
              <div>Saturday: 9:00am &ndash; 6:00pm</div>
              <div style={{ color: 'rgba(26,26,26,0.25)' }}>Sun &amp; Mon: Closed</div>
            </div>
          </div>
        </div>
        <div
          className="border-t flex flex-col md:flex-row items-center justify-between gap-3 pt-8 text-[10px]"
          style={{ borderColor: 'rgba(26,26,26,0.1)', color: MUTED }}
        >
          <span>&copy; 2025 Atelier Hair Studio &nbsp;&middot;&nbsp; Nashville, TN</span>
          <div className="flex items-center gap-5">
            <Link href={`${BASE}/privacy`} style={{ color: MUTED }}>Privacy Policy</Link>
            <Link href={`${BASE}/terms`} style={{ color: MUTED }}>Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

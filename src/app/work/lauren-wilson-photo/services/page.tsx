import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const DARK = '#1A1A1A';
const WARM_SAND = '#F0EBE3';
const FOREST = '#3D5A4C';
const OFF_WHITE = '#FDFBF9';

const PACKAGES = [
  {
    name: 'Essential',
    price: '$395',
    tagline: 'Perfect for individuals and short portrait sessions.',
    features: [
      '1-hour session',
      '30+ carefully edited images',
      'Private online gallery',
      'High-resolution downloads',
      '1 location',
      'Print release included',
    ],
    cta: 'Book Essential',
    highlight: false,
  },
  {
    name: 'Signature',
    price: '$695',
    tagline: 'Most popular. Ideal for couples, engagements, and families.',
    features: [
      '2-hour session',
      '80+ carefully edited images',
      'Private online gallery',
      'High-resolution downloads',
      'Up to 2 locations',
      'Style consultation call',
      'Full print release',
    ],
    cta: 'Book Signature',
    highlight: true,
  },
  {
    name: 'Full Day',
    price: '$2,400',
    tagline: 'Complete wedding or event coverage from start to finish.',
    features: [
      'Up to 10 hours coverage',
      '400+ carefully edited images',
      'Two photographers',
      'Private online gallery',
      'USB drive with all files',
      'Engagement session included',
      'Album design consultation',
    ],
    cta: 'Book Full Day',
    highlight: false,
  },
];

const SERVICES = [
  {
    label: 'Portrait Sessions',
    tagline: 'Individuals, families & seniors',
    desc: "Natural, relaxed portrait sessions designed to capture the real you. Whether it's a solo shoot, family gathering, or senior portraits, I create images that feel genuine and timeless.",
    duration: '1–2 hours',
    location: 'Colorado-wide',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop',
    includes: ['Location scouting', 'Online gallery (50+ images)', 'Print-ready high-resolution files', '2 outfit changes', 'Personal shopping guide'],
  },
  {
    label: 'Wedding Photography',
    tagline: 'Your story, beautifully documented',
    desc: 'From the nervous excitement of getting ready to the last dance of the night, I document your wedding with photojournalistic honesty and quiet artistry. Every detail, every tear, every laugh.',
    duration: '8–10 hours',
    location: 'Colorado & destination',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    includes: ['Full-day coverage', 'Two photographers', 'Engagement session included', 'Online gallery (400+ images)', 'USB with all files', 'Complimentary album design consult'],
  },
  {
    label: 'Couples & Engagements',
    tagline: 'For the ones in love',
    desc: 'Engagement sessions are my favorite. Two people, golden light, and real connection. I guide you gently so you forget the camera even exists — and the photos always reflect that.',
    duration: '1.5–2 hours',
    location: 'Colorado-wide',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop',
    includes: ['Location recommendations', 'Online gallery (80+ images)', 'High-resolution files', 'Style guide', 'Perfect for save-the-dates'],
  },
  {
    label: 'Landscape & Travel',
    tagline: 'Fine art landscape photography',
    desc: 'Licensed landscape prints and custom travel commissions. Whether you want a statement piece for your wall or professional imagery for your brand, I bring the same intentionality to every frame.',
    duration: 'Project-based',
    location: 'Worldwide',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    includes: ['Custom print sizing', 'Gallery-quality Hahnemühle paper', 'Licensing for commercial use', 'Digital files available', 'Worldwide shipping'],
  },
];

const FAQ = [
  { q: 'How far in advance should I book?', a: 'Weddings book 9–12 months out on average. Portrait sessions are more flexible — 4–8 weeks is ideal, but I always try to accommodate last-minute requests.' },
  { q: 'Do you travel for sessions?', a: "Yes! I'm based in Colorado but available for destination weddings and travel portrait work worldwide. Travel fees apply for sessions outside the Denver metro area." },
  { q: 'When will I receive my photos?', a: "Portrait galleries are delivered within 2–3 weeks. Wedding galleries take 6–8 weeks. You'll receive a sneak peek of 10–15 images within 48 hours of your session." },
  { q: 'Can I print my photos anywhere?', a: "Absolutely. All packages include a full print release so you can print your images wherever you like. I also offer professional printing through my preferred lab if you'd like expert results." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
          >
            Services
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: FOREST }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
          >
            What I Offer
          </h1>
        </div>
      </section>

      {/* Pricing Packages */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-5"
              style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
            >
              Investment
            </span>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              Simple, Transparent Pricing
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className="relative p-10"
                style={{
                  backgroundColor: pkg.highlight ? FOREST : '#fff',
                  border: pkg.highlight ? 'none' : `1px solid ${DARK}15`,
                }}
              >
                {pkg.highlight && (
                  <span
                    className="text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 inline-block mb-6"
                    style={{ fontFamily: 'var(--font-body)', backgroundColor: '#fff', color: FOREST }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: pkg.highlight ? 'rgba(255,255,255,0.6)' : `${DARK}80` }}
                >
                  {pkg.name}
                </h3>
                <div
                  className="text-5xl mb-3 leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: pkg.highlight ? '#fff' : DARK }}
                >
                  {pkg.price}
                </div>
                <p
                  className="text-sm mb-8 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: pkg.highlight ? 'rgba(255,255,255,0.55)' : `${DARK}66` }}
                >
                  {pkg.tagline}
                </p>
                <ul className="space-y-3.5 mb-10">
                  {pkg.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-[12px]"
                      style={{ fontFamily: 'var(--font-body)', color: pkg.highlight ? 'rgba(255,255,255,0.7)' : `${DARK}70` }}
                    >
                      <Check
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: pkg.highlight ? '#fff' : FOREST }}
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="block text-center py-4 text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-85"
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: pkg.highlight ? '#fff' : DARK,
                    color: pkg.highlight ? FOREST : '#fff',
                  }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p
            className="text-center text-[10px] uppercase tracking-widest mt-8"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}40` }}
          >
            Custom packages available · Travel rates apply outside Colorado · All prices in USD
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ backgroundColor: WARM_SAND }} className="py-0">
        {SERVICES.map((svc, i) => (
          <div key={i} className="grid lg:grid-cols-2 min-h-[55vh]">
            <div
              className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{ minHeight: '350px' }}
            >
              <Image
                src={svc.image}
                alt={svc.label}
                fill
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div
              className={`flex items-center px-10 md:px-16 py-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              style={{ backgroundColor: i % 2 === 1 ? WARM_SAND : OFF_WHITE }}
            >
              <div className="max-w-lg">
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.4em] block mb-4"
                  style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
                >
                  {svc.tagline}
                </span>
                <h2
                  className="text-3xl md:text-4xl mb-5"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
                >
                  {svc.label}
                </h2>
                <div className="w-10 h-px mb-6" style={{ backgroundColor: FOREST }} />
                <p
                  className="leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-body)', color: `${DARK}70` }}
                >
                  {svc.desc}
                </p>
                <div className="flex gap-8 mb-8">
                  <div>
                    <span
                      className="block font-bold mb-1 text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: DARK }}
                    >
                      {svc.duration}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}45` }}
                    >
                      Duration
                    </span>
                  </div>
                  <div className="w-px h-10 bg-black/10" />
                  <div>
                    <span
                      className="block font-bold mb-1 text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: DARK }}
                    >
                      {svc.location}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}45` }}
                    >
                      Location
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {svc.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: 'var(--font-body)', color: `${DARK}65` }}
                    >
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', color: DARK, borderColor: `${DARK}30` }}
                >
                  Inquire About This Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process overview */}
      <section style={{ backgroundColor: DARK }} className="py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-5"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}
            >
              The Journey
            </span>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
            >
              From Inquiry to Gallery
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { step: '01', label: 'Reach Out', desc: 'Fill out the inquiry form and I'll respond within 48 hours.' },
              { step: '02', label: 'Discovery Call', desc: 'We'll chat about your vision, location, and wardrobe ideas.' },
              { step: '03', label: 'The Session', desc: 'A relaxed, candid shoot — I guide gently, never stifly.' },
              { step: '04', label: 'Your Gallery', desc: 'Delivered in 2–4 weeks. Full-resolution, ready to print.' },
            ].map(({ step, label, desc }, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-5xl mb-4 leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(255,255,255,0.1)' }}
                >
                  {step}
                </div>
                <div className="w-6 h-px mx-auto mb-4" style={{ backgroundColor: FOREST }} />
                <h3
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: '#fff' }}
                >
                  {label}
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

      {/* FAQ */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-28 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-5"
              style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
            >
              Common Questions
            </span>
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              FAQ
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: `${DARK}10` }}>
            {FAQ.map(({ q, a }, i) => (
              <div key={i} className="py-7">
                <h3
                  className="font-bold uppercase tracking-[0.15em] text-[11px] mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: DARK }}
                >
                  {q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <p
              className="text-sm mb-6"
              style={{ fontFamily: 'var(--font-body)', color: `${DARK}50` }}
            >
              Have more questions? I'd love to chat.
            </p>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
              style={{ fontFamily: 'var(--font-body)', backgroundColor: FOREST, color: '#fff' }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

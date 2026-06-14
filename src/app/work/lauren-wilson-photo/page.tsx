import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const DARK = '#1A1A1A';
const WARM_SAND = '#F0EBE3';
const FOREST = '#3D5A4C';
const OFF_WHITE = '#FDFBF9';

const PORTFOLIO_GRID = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', cat: 'Weddings / Colorado', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop', cat: 'Portraits / Colorado', span: '' },
  { url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop', cat: 'Couples / Colorado', span: '' },
  { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', cat: 'Couples / Colorado', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes / Colorado', span: '' },
  { url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop', cat: 'Portraits / Colorado', span: '' },
];

const TESTIMONIALS = [
  { text: "Lauren made us feel so comfortable and captured our day perfectly. We'll cherish these photos forever.", author: "Jessica & Mark" },
  { text: "The photos are STUNNING. She has such a gift for capturing natural moments and beautiful light.", author: "Amy & Taylor" },
  { text: "Professional, kind, and insanely talented. We had the best experience and the results speak for themselves.", author: "Michael R." },
];

const PROCESS = [
  { num: '01', title: 'Inquiry', desc: "Fill out the contact form. I'll reply within 24 hours to check availability and learn about your vision." },
  { num: '02', title: 'Discovery Call', desc: 'A 20-minute call to align on style, location, timing, and any details that matter to you.' },
  { num: '03', title: 'The Session', desc: 'I guide, you exist. Natural, relaxed, real. No stiff poses — just honest moments as they unfold.' },
  { num: '04', title: 'Delivery', desc: 'Edited gallery delivered within 2–3 weeks. Download in full resolution, forever.' },
];

export default function LaurenHome() {
  return (
    <>
      {/* HERO — asymmetric editorial split */}
      <section className="h-screen grid" style={{ gridTemplateColumns: '55% 45%', backgroundColor: OFF_WHITE }}>
        {/* Left: full-height portrait photo */}
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Lauren Wilson Photography — portrait session"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        {/* Right: off-white editorial panel */}
        <div className="flex flex-col justify-center px-12 xl:px-16" style={{ backgroundColor: OFF_WHITE }}>
          {/* Wordmark */}
          <p className="text-sm mb-6 italic" style={{ fontFamily: 'var(--font-display)', color: FOREST, fontStyle: 'italic' }}>Lauren Wilson</p>
          <hr style={{ borderColor: 'rgba(26,26,26,0.15)', marginBottom: '2rem' }} />

          {/* Hero headline */}
          <h1
            className="text-5xl xl:text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic', color: DARK }}
          >
            Real moments,<br />honestly<br />captured.
          </h1>

          {/* Pull quote */}
          <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: `${DARK}99` }}>
            "I photograph what's already there."
          </p>

          {/* Meta */}
          <p className="text-sm mb-10 tracking-wide" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: `${DARK}66` }}>
            Colorado · 8 Years · 400+ Sessions
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`${BASE}/portfolio`}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white tracking-wide"
              style={{ backgroundColor: FOREST, fontFamily: 'var(--font-body)' }}
            >
              See my work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide border"
              style={{ borderColor: DARK, color: DARK, fontFamily: 'var(--font-body)' }}
            >
              Book a session
            </Link>
          </div>
        </div>

        {/* Mobile fallback — stacked */}
        <style>{`
          @media (max-width: 768px) {
            .hero-grid { display: flex !important; flex-direction: column !important; height: auto !important; }
            .hero-photo { height: 45vh !important; width: 100% !important; position: relative !important; }
            .hero-panel { padding: 2.5rem 1.5rem !important; }
          }
        `}</style>
      </section>

      {/* PORTFOLIO — expandable masonry grid (signature element) */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: OFF_WHITE }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-3" style={{ color: FOREST, fontFamily: 'var(--font-body)' }}>Portfolio</p>
              <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: DARK }}>Selected Work</h2>
            </div>
            <Link href={`${BASE}/portfolio`} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest pb-1 border-b" style={{ color: FOREST, borderColor: FOREST, fontFamily: 'var(--font-body)' }}>
              View Full Gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Asymmetric masonry CSS grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(3, 220px)',
            }}
          >
            {/* Photo 1 — spans 2 rows */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridColumn: '1', gridRow: '1 / 3' }}
            >
              <Image src={PORTFOLIO_GRID[0].url} alt={PORTFOLIO_GRID[0].cat} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>{PORTFOLIO_GRID[0].cat}</span>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative overflow-hidden group cursor-pointer" style={{ gridColumn: '2', gridRow: '1' }}>
              <Image src={PORTFOLIO_GRID[1].url} alt={PORTFOLIO_GRID[1].cat} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>{PORTFOLIO_GRID[1].cat}</span>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="relative overflow-hidden group cursor-pointer" style={{ gridColumn: '3', gridRow: '1' }}>
              <Image src={PORTFOLIO_GRID[2].url} alt={PORTFOLIO_GRID[2].cat} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>{PORTFOLIO_GRID[2].cat}</span>
              </div>
            </div>

            {/* Photo 4 — spans 2 rows */}
            <div className="relative overflow-hidden group cursor-pointer" style={{ gridColumn: '2', gridRow: '2 / 4' }}>
              <Image src={PORTFOLIO_GRID[3].url} alt={PORTFOLIO_GRID[3].cat} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>{PORTFOLIO_GRID[3].cat}</span>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="relative overflow-hidden group cursor-pointer" style={{ gridColumn: '3', gridRow: '2' }}>
              <Image src={PORTFOLIO_GRID[4].url} alt={PORTFOLIO_GRID[4].cat} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>{PORTFOLIO_GRID[4].cat}</span>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="relative overflow-hidden group cursor-pointer" style={{ gridColumn: '1', gridRow: '3' }}>
              <Image src={PORTFOLIO_GRID[5].url} alt={PORTFOLIO_GRID[5].cat} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>{PORTFOLIO_GRID[5].cat}</span>
              </div>
            </div>

            {/* Photo 7 — last cell */}
            <div className="relative overflow-hidden group cursor-pointer" style={{ gridColumn: '3', gridRow: '3' }}>
              <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="Portraits / Colorado" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ backgroundColor: `${FOREST}CC` }}>
                <span className="text-white text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>Portraits / Colorado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: WARM_SAND }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-6" style={{ color: FOREST, fontFamily: 'var(--font-body)' }}>About</p>
            <h2 className="text-4xl md:text-5xl italic mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: DARK }}>
              Hi, I'm Lauren.<br />Nice to meet you.
            </h2>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: DARK }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: `${DARK}99`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              I'm a natural light photographer based in Colorado. I believe in capturing real moments and creating images that feel honest, emotive, and timeless.
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: `${DARK}99`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              I don't direct you into poses. I watch how you look at each other, how you laugh when you're nervous, how the light catches your face — and I photograph that.
            </p>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-4 text-white" style={{ backgroundColor: DARK, fontFamily: 'var(--font-body)' }}>
              My Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              alt="Lauren Wilson"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: OFF_WHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-4" style={{ color: FOREST, fontFamily: 'var(--font-body)' }}>Investment</p>
            <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: DARK }}>Simple, clear pricing.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: 'Essential', price: '$395', includes: ['1.5 hour session', '30 edited images', 'Online gallery', 'Portrait & lifestyle'] },
              { tier: 'Signature', price: '$695', includes: ['3 hour session', '75 edited images', 'Online gallery + USB', 'Multiple locations', 'Couples & families'], featured: true },
              { tier: 'Full Day', price: '$2,400', includes: ['8 hour session', '200+ edited images', 'High-res delivery', 'Weddings & elopements', 'Second shooter available'] },
            ].map((p, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{
                  backgroundColor: p.featured ? FOREST : 'white',
                  color: p.featured ? 'white' : DARK,
                  border: p.featured ? 'none' : `1px solid ${DARK}15`,
                }}
              >
                {p.featured && (
                  <div className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-70" style={{ fontFamily: 'var(--font-body)' }}>Most Booked</div>
                )}
                <div className="text-xs font-semibold uppercase tracking-[0.3em] mb-2 opacity-60" style={{ fontFamily: 'var(--font-body)' }}>{p.tier}</div>
                <div className="text-5xl italic mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{p.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {p.includes.map((item, j) => (
                    <li key={j} className="text-sm flex items-center gap-2.5 opacity-80" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: p.featured ? 'white' : FOREST }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="block text-center text-xs font-semibold uppercase tracking-widest py-3.5"
                  style={{
                    backgroundColor: p.featured ? 'white' : FOREST,
                    color: p.featured ? FOREST : 'white',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-8 opacity-50" style={{ color: DARK, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
            Custom packages available for weddings, brands, and extended projects. Let's talk.
          </p>
        </div>
      </section>

      {/* PROCESS — horizontal row on dark background */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-4 opacity-40 text-white" style={{ fontFamily: 'var(--font-body)' }}>How it works</p>
            <h2 className="text-4xl md:text-5xl italic text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>From inquiry to gallery.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px opacity-20" style={{ backgroundColor: 'white' }} />
            {PROCESS.map((step, i) => (
              <div key={i} className="px-6 py-8 text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{ backgroundColor: i === 0 ? FOREST : 'rgba(255,255,255,0.07)', border: `1px solid rgba(255,255,255,0.15)` }}
                >
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-body)' }}>{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 italic" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed opacity-50 text-white" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: WARM_SAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-4" style={{ color: FOREST, fontFamily: 'var(--font-body)' }}>Kind Words</p>
            <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: DARK }}>Client love.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Quote className="w-6 h-6 mb-6 opacity-20" style={{ color: DARK }} />
                <p
                  className="text-xl leading-relaxed mb-8 italic"
                  style={{ fontFamily: 'var(--font-display)', color: DARK, fontStyle: 'italic' }}
                >
                  "{t.text}"
                </p>
                <div className="w-8 h-px mb-5" style={{ backgroundColor: FOREST }} />
                <span className="text-xs font-semibold uppercase tracking-widest opacity-60" style={{ color: DARK, fontFamily: 'var(--font-body)' }}>— {t.author}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/reviews`} className="text-xs font-semibold uppercase tracking-widest pb-1 border-b" style={{ color: FOREST, borderColor: FOREST, fontFamily: 'var(--font-body)' }}>
              Read All Reviews <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: FOREST }}>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-6 text-white opacity-60" style={{ fontFamily: 'var(--font-body)' }}>
          Let's create something beautiful
        </p>
        <h2 className="text-4xl md:text-6xl italic text-white mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          Ready to book<br />your session?
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 bg-white px-10 py-5 text-sm font-semibold uppercase tracking-widest"
          style={{ color: FOREST, fontFamily: 'var(--font-body)' }}
        >
          Get In Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}

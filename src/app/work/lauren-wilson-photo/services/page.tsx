import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

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

const PACKAGES = [
  {
    name: 'Essential',
    price: '$395',
    desc: 'Perfect for individuals and short portrait sessions.',
    features: ['1-hour session', '30+ edited images', 'Private online gallery', 'High-res downloads', '1 location'],
    cta: 'Book Essential',
    highlight: false,
  },
  {
    name: 'Signature',
    price: '$695',
    desc: 'Most popular. Ideal for couples, engagements, and families.',
    features: ['2-hour session', '80+ edited images', 'Private online gallery', 'High-res downloads', 'Up to 2 locations', 'Style consultation', 'Print release'],
    cta: 'Book Signature',
    highlight: true,
  },
  {
    name: 'Full Day',
    price: '$2,400',
    desc: 'Complete wedding or event coverage from start to finish.',
    features: ['Up to 10 hours', '400+ edited images', 'Two photographers', 'Private online gallery', 'USB drive', 'Engagement session', 'Album design consult'],
    cta: 'Book Full Day',
    highlight: false,
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
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-28 px-6 md:px-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 block mb-5">Services</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">What I Offer</h1>
        <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
          From quiet portrait sessions to full-day wedding coverage — every offering is guided by the same commitment to authenticity and craft.
        </p>
      </section>

      {/* Services List */}
      <section className="bg-white">
        {SERVICES.map((svc, i) => (
          <div key={i} className={`grid lg:grid-cols-2 min-h-[55vh] ${i % 2 === 1 ? '' : ''}`}>
            <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '350px' }}>
              <Image
                src={svc.image}
                alt={svc.label}
                fill
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`flex items-center px-10 md:px-16 py-16 ${i % 2 === 1 ? 'lg:order-1 bg-[#F8F5F2]' : 'bg-white'}`}>
              <div className="max-w-lg">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A]/35 block mb-4">{svc.tagline}</span>
                <h2 className="text-3xl md:text-4xl font-serif italic text-[#1A1A1A] mb-5">{svc.label}</h2>
                <div className="w-10 h-px bg-[#1A1A1A] mb-6" />
                <p className="text-[#333333]/60 leading-relaxed mb-8">{svc.desc}</p>
                <div className="flex gap-8 mb-8 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                  <div><span className="block text-[#1A1A1A] mb-1">{svc.duration}</span>Duration</div>
                  <div><span className="block text-[#1A1A1A] mb-1">{svc.location}</span>Location</div>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {svc.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[11px] text-[#333333]/60">
                      <Check className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/25 pb-1 hover:border-[#1A1A1A] transition-colors"
                >
                  Inquire About This Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="bg-[#1A1A1A] text-white py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/35 block mb-5">Investment</span>
            <h2 className="text-4xl md:text-5xl font-serif italic">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`p-9 ${pkg.highlight ? 'bg-white text-[#1A1A1A]' : 'bg-white/5 border border-white/10'}`}
              >
                {pkg.highlight && (
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] bg-[#1A1A1A] text-white px-3 py-1 inline-block mb-5">Most Popular</span>
                )}
                <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-2">{pkg.name}</h3>
                <div className={`text-4xl font-serif italic mb-2 ${pkg.highlight ? 'text-[#1A1A1A]' : 'text-white'}`}>{pkg.price}</div>
                <p className={`text-[11px] mb-7 leading-relaxed ${pkg.highlight ? 'text-[#333333]/55' : 'text-white/35'}`}>{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-3 text-[11px] ${pkg.highlight ? 'text-[#333333]/65' : 'text-white/45'}`}>
                      <Check className={`w-3 h-3 shrink-0 ${pkg.highlight ? 'text-[#1A1A1A]' : 'text-white/40'}`} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${BASE}/contact`}
                  className={`block text-center py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    pkg.highlight
                      ? 'bg-[#1A1A1A] text-white hover:opacity-85'
                      : 'border border-white/25 text-white hover:bg-white hover:text-[#1A1A1A]'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-white/25 text-[10px] uppercase tracking-widest mt-8">
            Custom packages available · Travel rates apply outside Colorado · All prices in USD
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F5F2] py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A]/35 block mb-5">Common Questions</span>
            <h2 className="text-4xl font-serif italic text-[#1A1A1A]">FAQ</h2>
          </div>
          <div className="space-y-0 divide-y divide-black/8">
            {FAQ.map(({ q, a }, i) => (
              <div key={i} className="py-7">
                <h3 className="font-bold uppercase tracking-[0.15em] text-[11px] text-[#1A1A1A] mb-3">{q}</h3>
                <p className="text-[#333333]/55 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-[#333333]/45 text-sm mb-6">Have more questions? I'd love to chat.</p>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-9 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

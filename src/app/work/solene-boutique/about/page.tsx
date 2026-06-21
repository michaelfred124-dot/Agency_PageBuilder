import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, Hammer } from 'lucide-react';

const BASE = '/work/solene-boutique';

const makers = [
  { name: 'Kiln Studio', location: 'Portland, OR', specialty: 'Handthrown ceramics', photo: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80' },
  { name: 'Thread & Loom', location: 'Eugene, OR', specialty: 'Woven textiles & linens', photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { name: 'Pinery Co.', location: 'Bend, OR', specialty: 'Beeswax candles & botanicals', photo: 'https://images.unsplash.com/photo-1602607863001-e5da79a9e1e4?w=400&q=80' },
  { name: 'Pacific Grain', location: 'Astoria, OR', specialty: 'Hardwood serving pieces', photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80' },
  { name: 'Meadow Press', location: 'Ashland, OR', specialty: 'Botanical prints & stationery', photo: 'https://images.unsplash.com/photo-1490750967868-88df5691cc53?w=400&q=80' },
  { name: 'Coastal Fiber', location: 'Newport, OR', specialty: 'Natural fiber bags & baskets', photo: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
];

const values = [
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description: 'We only carry products made by hand or with significant human skill. No mass production, no shortcuts.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Natural materials, low-waste processes, and honest answers about environmental impact.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Every purchase supports an independent maker. We believe local economies and living wages matter.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Our Story
          </p>
          <h1
            className="text-5xl md:text-7xl italic text-[#18181B] leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We believe in things that last.
          </h1>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Solène Marchand, founder"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              The Founder
            </p>
            <h2
              className="text-3xl md:text-4xl italic text-[#18181B] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Solène Marchand
            </h2>
            <div className="space-y-4 text-[#9B9189] leading-relaxed text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <p>
                Solène grew up in Lyon, France, surrounded by markets where every object had provenance — a name, a village, a method. When she moved to Portland in 2015, she fell in love with the Pacific Northwest&apos;s maker culture but struggled to find one place that brought it all together thoughtfully.
              </p>
              <p>
                After years working in retail and supply chain, she opened Solène in 2019 with 12 makers, a small storefront on NW 23rd, and one rule: never carry something you wouldn&apos;t give as a gift.
              </p>
              <p>
                Today the shop carries over 350 products from 80+ independent makers across Oregon, Washington, and Northern California. Every single one has been evaluated in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#18181B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Our Mission
          </p>
          <blockquote
            className="text-3xl md:text-5xl italic text-[#FDFAF6] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            &ldquo;To make it easy to choose beautiful, ethical objects — and to support the makers who create them.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Our Makers Grid */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              The People Behind the Products
            </p>
            <h2
              className="text-4xl md:text-5xl italic text-[#18181B]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Makers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {makers.map((maker) => (
              <div key={maker.name} className="group">
                <div className="aspect-[4/3] overflow-hidden relative mb-4">
                  <Image
                    src={maker.photo}
                    alt={maker.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                  {maker.location}
                </p>
                <h3
                  className="text-xl italic text-[#18181B] mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {maker.name}
                </h3>
                <p className="text-sm text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                  {maker.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl italic text-[#18181B]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Pillars
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-[#C9A84C] text-[#C9A84C] mb-6">
                  <value.icon size={22} />
                </div>
                <h3
                  className="text-2xl italic text-[#18181B] mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-[#9B9189] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#18181B] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-4xl italic text-[#FDFAF6] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to explore the collection?
          </h2>
          <Link
            href={`${BASE}/shop`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#18181B] text-sm tracking-wide hover:bg-[#FDFAF6] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start Shopping <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

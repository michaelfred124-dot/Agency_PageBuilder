import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Package, RotateCcw, Heart } from 'lucide-react';

const BASE = '/work/solene-boutique';

const rooms = [
  { name: 'Living Room', photo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=560&q=80' },
  { name: 'Kitchen', photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=560&q=80' },
  { name: 'Bedroom', photo: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=560&q=80' },
  { name: 'Workspace', photo: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=560&q=80' },
  { name: 'Gift Ideas', photo: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=560&q=80' },
];

const products = [
  { name: 'Handthrown Ceramic Mug', maker: 'Kiln Studio', price: '$42', photo: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80' },
  { name: 'Linen Throw Blanket', maker: 'Thread & Loom', price: '$128', photo: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&q=80' },
  { name: 'Beeswax Taper Candles (Set of 4)', maker: 'Pinery Co.', price: '$24', photo: 'https://images.unsplash.com/photo-1602607863001-e5da79a9e1e4?w=600&q=80' },
  { name: 'Walnut Serving Board', maker: 'Pacific Grain', price: '$88', photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80' },
  { name: 'Pressed Wildflower Print', maker: 'Meadow Press', price: '$65', photo: 'https://images.unsplash.com/photo-1490750967868-88df5691cc53?w=600&q=80' },
  { name: 'Cotton Market Bag', maker: 'Coastal Fiber', price: '$38', photo: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80' },
];

const testimonials = [
  { text: "Finally a shop where everything has a story. Bought three gifts here and every recipient asked where I found them.", author: "Meredith L.", location: "Portland" },
  { text: "The ceramics I ordered arrived better than pictured. Beautifully packaged, clearly made with care.", author: "James P.", location: "Seattle" },
  { text: "Refreshing to shop somewhere that isn't just curated aesthetics — these products genuinely last.", author: "Claire T.", location: "San Francisco" },
];

export default function SolenePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] bg-[#FDFAF6] overflow-hidden">
        {/* Hero image right side */}
        <div className="absolute right-0 top-0 w-[65%] h-full">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80"
            alt="Artisan home goods lifestyle"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFAF6] via-[#FDFAF6]/20 to-transparent" />
        </div>

        {/* Text panel */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl pt-20">
              <p className="text-xs tracking-[0.25em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                New Collection — Spring 2026
              </p>
              <h1
                className="text-6xl md:text-8xl leading-[1.05] italic text-[#18181B] mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Objects made<br />to be lived with.
              </h1>
              <p className="text-base md:text-lg text-[#9B9189] font-light leading-relaxed mb-8 max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Curated home goods and gifts from independent makers across the Pacific Northwest.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={`${BASE}/shop`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#18181B] text-[#FDFAF6] text-sm tracking-wide hover:bg-[#C9A84C] hover:text-[#18181B] transition-all duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Shop the Collection <ArrowRight size={16} />
                </Link>
                <Link
                  href={`${BASE}/about`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#18181B] text-[#18181B] text-sm tracking-wide hover:bg-[#18181B] hover:text-[#FDFAF6] transition-all duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Meet Our Makers
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="flex items-center gap-1.5"><Package size={13} /> Free shipping $75+</span>
                <span className="w-px h-3 bg-[#9B9189]/40" />
                <span className="flex items-center gap-1.5"><RotateCcw size={13} /> Easy returns</span>
                <span className="w-px h-3 bg-[#9B9189]/40" />
                <span className="flex items-center gap-1.5"><Heart size={13} /> Handpicked makers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="bg-[#18181B] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '350+', label: 'Products' },
            { stat: '80+', label: 'Independent Makers' },
            { stat: '12,000+', label: 'Happy Homes' },
            { stat: '4.9 Stars', label: '890 Reviews' },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-2xl md:text-3xl text-[#C9A84C] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {item.stat}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Shop by Room ── */}
      <section className="py-20 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Browse</p>
          <h2 className="text-4xl md:text-5xl italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
            Find your perfect piece
          </h2>
        </div>
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-6"
          style={{ scrollbarWidth: 'none' }}
        >
          {rooms.map((room) => (
            <Link
              key={room.name}
              href={`${BASE}/shop`}
              className="flex-none w-[280px] h-[380px] relative snap-start overflow-hidden group"
            >
              <Image
                src={room.photo}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xl italic text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {room.name}
                </p>
                <span className="text-xs text-[#C9A84C] tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  Shop →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Just In</p>
              <h2 className="text-4xl md:text-5xl italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
                New Arrivals
              </h2>
            </div>
            <Link
              href={`${BASE}/shop`}
              className="hidden md:inline-flex items-center gap-2 text-sm text-[#18181B] border-b border-[#18181B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="group">
                <div className="aspect-square overflow-hidden bg-[#FDFAF6] relative mb-4">
                  <Image
                    src={product.photo}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#18181B]/0 group-hover:bg-[#18181B]/10 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <Link
                      href={`${BASE}/shop`}
                      className="px-6 py-2.5 bg-[#18181B] text-[#FDFAF6] text-xs tracking-[0.1em] uppercase hover:bg-[#C9A84C] hover:text-[#18181B] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Add to Bag
                    </Link>
                  </div>
                </div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                  {product.maker}
                </p>
                <p className="text-lg text-[#18181B] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {product.name}
                </p>
                <p className="text-sm text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Makers ── */}
      <section className="py-24 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[560px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
              alt="Artisan at work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>Our Standard</p>
            <h2 className="text-4xl md:text-5xl italic text-[#18181B] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              We only carry what we believe in.
            </h2>
            <p className="text-[#9B9189] leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Every maker in our shop has been visited in person. We sit in their studios, understand their process, and only say yes when we&apos;d be proud to have their work in our own homes.
            </p>
            <p className="text-[#9B9189] leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              We don&apos;t list thousands of products. We list the ones that matter.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Small-batch production only',
                'Sustainable, natural materials',
                'Fair wages throughout the supply chain',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#18181B] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <span className="w-5 h-px bg-[#C9A84C] flex-none" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`${BASE}/about`}
              className="inline-flex items-center gap-2 text-sm text-[#18181B] border-b border-[#18181B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Meet Our Makers <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Reviews</p>
            <h2 className="text-4xl md:text-5xl italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
              From happy homes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#FDFAF6] p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="#C9A84C" className="text-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-[#18181B] leading-relaxed mb-6 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-[#18181B]" style={{ fontFamily: 'var(--font-body)' }}>{t.author}</p>
                  <p className="text-xs text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 bg-[#18181B] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl italic text-[#FDFAF6] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Discover objects worth keeping.
          </h2>
          <p className="text-[#9B9189] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            New arrivals added weekly. Free shipping on orders $75+.
          </p>
          <Link
            href={`${BASE}/shop`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#18181B] text-sm tracking-wide hover:bg-[#FDFAF6] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Shop the Spring Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

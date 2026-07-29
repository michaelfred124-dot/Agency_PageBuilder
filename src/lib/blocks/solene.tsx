import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Package, RotateCcw, Heart } from 'lucide-react';

export { SE_SCHEMAS } from './solene.schemas';

export const SE_RENDERERS = {
  SEHero: ({ tagline, title, subtitle, button1Text, button1Link, button2Text, button2Link, image }: any) => (
    <section className="relative h-screen min-h-[600px] bg-[#FDFAF6] overflow-hidden">
      <div className="absolute right-0 top-0 w-[65%] h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFAF6] via-[#FDFAF6]/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl pt-20">
            <p className="text-xs tracking-[0.25em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              {tagline}
            </p>
            <h1
              className="text-6xl @md:text-8xl leading-[1.05] italic text-[#18181B] mb-6 whitespace-pre-wrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h1>
            <p className="text-base @md:text-lg text-[#9B9189] font-light leading-relaxed mb-8 max-w-sm whitespace-pre-wrap" style={{ fontFamily: 'var(--font-body)' }}>
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href={button1Link || '#'}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#18181B] text-[#FDFAF6] text-sm tracking-wide hover:bg-[#C9A84C] hover:text-[#18181B] transition-all duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {button1Text} <ArrowRight size={16} />
              </Link>
              <Link
                href={button2Link || '#'}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#18181B] text-[#18181B] text-sm tracking-wide hover:bg-[#18181B] hover:text-[#FDFAF6] transition-all duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {button2Text}
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
  ),
  SESocial: ({ stats }: any) => (
    <section className="bg-[#18181B] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 @md:grid-cols-4 gap-8 text-center">
        {stats?.map((item: any, i: number) => (
          <div key={i}>
            <p className="text-2xl @md:text-3xl text-[#C9A84C] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {item.stat}
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  ),
  SERooms: ({ tagline, title, rooms }: any) => (
    <section className="py-20 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{tagline}</p>
        <h2 className="text-4xl @md:text-5xl italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h2>
      </div>
      <div
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-6 @md:pl-[calc((100vw-1280px)/2+24px)] pr-6"
        style={{ scrollbarWidth: 'none' }}
      >
        {rooms?.map((room: any, i: number) => (
          <Link
            key={i}
            href={room.link || '#'}
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
  ),
  SEProducts: ({ tagline, title, linkText, linkUrl, products }: any) => (
    <section className="py-20 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{tagline}</p>
            <h2 className="text-4xl @md:text-5xl italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h2>
          </div>
          <Link
            href={linkUrl || '#'}
            className="hidden @md:inline-flex items-center gap-2 text-sm text-[#18181B] border-b border-[#18181B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {linkText} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 gap-8">
          {products?.map((product: any, i: number) => (
            <div key={i} className="group">
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
                    href={product.link || '#'}
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
  ),
  SEMakers: ({ tagline, title, desc1, desc2, bullets, linkText, linkUrl, image }: any) => (
    <section className="py-24 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto px-6 grid @md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[560px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>{tagline}</p>
          <h2 className="text-4xl @md:text-5xl italic text-[#18181B] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
          <p className="text-[#9B9189] leading-relaxed mb-6 whitespace-pre-wrap" style={{ fontFamily: 'var(--font-body)' }}>
            {desc1}
          </p>
          <p className="text-[#9B9189] leading-relaxed mb-8 whitespace-pre-wrap" style={{ fontFamily: 'var(--font-body)' }}>
            {desc2}
          </p>
          <ul className="space-y-4 mb-10">
            {(bullets?.split(',') || []).map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-[#18181B] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="w-5 h-px bg-[#C9A84C] flex-none" />
                {item.trim()}
              </li>
            ))}
          </ul>
          <Link
            href={linkUrl || '#'}
            className="inline-flex items-center gap-2 text-sm text-[#18181B] border-b border-[#18181B] pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {linkText} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  ),
  SETestimonials: ({ tagline, title, testimonials }: any) => (
    <section className="py-20 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B9189] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{tagline}</p>
          <h2 className="text-4xl @md:text-5xl italic text-[#18181B]" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
        </div>
        <div className="grid @md:grid-cols-3 gap-8">
          {testimonials?.map((t: any, i: number) => (
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
  ),
  SECta: ({ title, subtitle, buttonText, buttonLink }: any) => (
    <section className="py-28 bg-[#18181B] text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl @md:text-6xl italic text-[#FDFAF6] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h2>
        <p className="text-[#9B9189] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
          {subtitle}
        </p>
        <Link
          href={buttonLink || '#'}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#18181B] text-sm tracking-wide hover:bg-[#FDFAF6] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {buttonText} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
};

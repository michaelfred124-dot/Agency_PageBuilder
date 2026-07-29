import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';
const CHARCOAL = '#2A2018';

export { ER_SCHEMAS } from './emberandrye.schemas';

export const ER_RENDERERS = {
  ERHero: ({ tagline, title, subtitle, button1Text, button1Link, button2Text, button2Link, footerText, bgImage }: any) => (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: DARK }}>
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(16,10,5,0.78)' }} />
      </div>

      <div className="relative z-10 px-6 py-32">
        <p
          className="text-[10px] font-medium uppercase tracking-[0.5em] mb-6"
          style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          {tagline}
        </p>
        <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
        <h1
          className="text-7xl @md:text-9xl leading-none mb-6"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          {title}
        </h1>
        <p
          className="text-xl mb-8"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(245,237,216,0.6)' }}
        >
          {subtitle}
        </p>
        <div className="w-20 h-px mx-auto mb-10" style={{ backgroundColor: GOLD }} />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={button1Link || '#'}
            className="px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
            style={{ backgroundColor: EMBER, color: CREAM, fontFamily: 'var(--font-body)' }}
          >
            {button1Text}
          </Link>
          <Link
            href={button2Link || '#'}
            className="px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] border transition-colors hover:border-[#F5EDD8]"
            style={{ color: CREAM, borderColor: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
          >
            {button2Text}
          </Link>
        </div>
        <p
          className="mt-12 text-xs"
          style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em' }}
        >
          {footerText}
        </p>
      </div>
    </section>
  ),
  ERSocial: ({ stats }: any) => (
    <section style={{ backgroundColor: CHARCOAL }} className="py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 @md:grid-cols-4 gap-6 text-center">
        {(stats?.split(',') || []).map((stat: string, i: number) => (
          <div key={i}>
            <div
              className="text-sm"
              style={{ fontFamily: 'var(--font-body)', color: CREAM, fontWeight: 500, letterSpacing: '0.05em' }}
            >
              {stat.trim()}
            </div>
          </div>
        ))}
      </div>
    </section>
  ),
  ERMenu: ({ tagline, title, starters, sides, steaks, menuLink }: any) => (
    <section className="py-24 px-6 @md:px-12" style={{ backgroundColor: DARK }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[10px] uppercase tracking-[0.4em] mb-4"
            style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
          >
            {tagline}
          </p>
          <h2
            className="text-4xl @md:text-5xl"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
          >
            {title}
          </h2>
        </div>

        <div className="grid @md:grid-cols-2 gap-12">
          {/* Starters */}
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-6 pb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-body)', borderBottom: `1px solid ${GOLD}40` }}
            >
              Starters
            </div>
            <div className="space-y-6">
              {starters?.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <div>
                    <div
                      className="text-lg mb-0.5"
                      style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>{item.desc}</div>
                  </div>
                  <div
                    className="text-sm shrink-0"
                    style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="text-[10px] font-semibold uppercase tracking-[0.4em] mt-10 mb-6 pb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-body)', borderBottom: `1px solid ${GOLD}40` }}
            >
              Sides
            </div>
            <div className="space-y-3">
              {sides?.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-center">
                  <span
                    className="text-base"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                  >
                    {item.name}
                  </span>
                  <span className="text-sm" style={{ color: EMBER, fontFamily: 'var(--font-body)' }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steaks */}
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-2 pb-4"
              style={{ color: GOLD, fontFamily: 'var(--font-body)', borderBottom: `1px solid ${GOLD}40` }}
            >
              Steaks
            </div>
            <p
              className="text-[10px] italic mb-6"
              style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}
            >
              All cuts dry-aged 28 days on premises
            </p>
            <div className="space-y-6">
              {steaks?.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <div>
                    <div
                      className="text-lg mb-0.5"
                      style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>{item.desc}</div>
                  </div>
                  <div
                    className="text-sm shrink-0"
                    style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6" style={{ borderTop: `1px solid rgba(245,237,216,0.1)` }}>
              <p className="text-xs mb-4" style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}>
                Full menu available on request
              </p>
              <Link
                href={menuLink || '#'}
                className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] border-b pb-0.5"
                style={{ color: CREAM, borderColor: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
              >
                View Full Menu <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  ERGrill: ({ tagline, title, desc, bullets, image }: any) => (
    <section className="grid @md:grid-cols-2 min-h-[500px]">
      <div className="relative min-h-[300px]">
        <Image
          src={image}
          alt={tagline}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col justify-center p-12 @md:p-16" style={{ backgroundColor: CHARCOAL }}>
        <div
          className="text-[10px] uppercase tracking-[0.4em] mb-5"
          style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
        >
          {tagline}
        </div>
        <h2
          className="text-4xl mb-6 whitespace-pre-wrap"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          {title}
        </h2>
        <p
          className="text-sm leading-relaxed mb-8 whitespace-pre-wrap"
          style={{ color: 'rgba(245,237,216,0.6)', fontFamily: 'var(--font-body)' }}
        >
          {desc}
        </p>
        <div className="space-y-4">
          {(bullets?.split(',') || []).map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: EMBER }} />
              <span className="text-sm" style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-body)' }}>{item.trim()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  ERTestimonials: ({ testimonials }: any) => (
    <section className="py-20 px-6 @md:px-12" style={{ backgroundColor: DARK }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />)}
        </div>
        <div className="grid @md:grid-cols-3 gap-6">
          {testimonials?.map((r: any, i: number) => (
            <div key={i} className="p-8" style={{ backgroundColor: CHARCOAL, borderLeft: `2px solid ${EMBER}` }}>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="text-xs" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>
                {r.name} &mdash; {r.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  ERCta: ({ title, subtitle, buttonText, buttonLink, phone }: any) => (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: EMBER }}>
      <h2
        className="text-4xl @md:text-5xl mb-4"
        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
      >
        {title}
      </h2>
      <p className="mb-8 text-sm" style={{ color: 'rgba(245,237,216,0.75)', fontFamily: 'var(--font-body)' }}>
        {subtitle}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href={buttonLink || '#'}
          className="px-10 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
          style={{ backgroundColor: CREAM, color: DARK, fontFamily: 'var(--font-body)' }}
        >
          {buttonText}
        </Link>
        <span className="text-sm" style={{ color: 'rgba(245,237,216,0.7)', fontFamily: 'var(--font-body)' }}>
          {phone}
        </span>
      </div>
    </section>
  )
};

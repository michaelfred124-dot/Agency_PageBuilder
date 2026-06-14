import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const REVIEWS = [
  { author: 'Jennifer M.', rating: 5, service: 'Recurring Clean', frequency: 'Bi-weekly', date: 'April 2024', text: "Maria and David run an incredible operation. My house has never been cleaner. The same team comes every time, they remember how I like things done, and I have never had to ask for something twice. Absolutely worth it." },
  { author: 'Brian T.', rating: 5, service: 'Deep Clean', frequency: 'One-time', date: 'March 2024', text: "We moved out of our rental and needed it spotless for inspection. Spotless Home did a deep clean and we got our full deposit back. The landlord said it was one of the cleanest move-outs she had seen. Amazing team." },
  { author: 'Sandra K.', rating: 5, service: 'Airbnb Turnover', frequency: 'Weekly', date: 'February 2024', text: "I have three short-term rentals and Spotless handles all of them. They arrive between checkouts without me having to coordinate anything, the photos always look great, and my review scores have gone up since I started with them." },
  { author: 'Paul H.', rating: 5, service: 'Move-In Clean', frequency: 'One-time', date: 'January 2024', text: "Bought a house that needed a deep clean before we moved in. Spotless did baseboards, inside cabinets, windows — everything. It felt like a brand new house when they were done. Punctual, professional, and thorough." },
  { author: 'Diana W.', rating: 5, service: 'Recurring Clean', frequency: 'Monthly', date: 'November 2023', text: "I was nervous about having cleaners in my home. David made the process comfortable from the first consultation. They are bonded, reliable, and I feel completely at ease. My home has never looked this good." },
  { author: 'Carlos R.', rating: 5, service: 'Eco Clean', frequency: 'Bi-weekly', date: 'September 2023', text: "Switched to the eco option because of my kids and pets. No drop in quality and everything smells clean without harsh chemical smells. They are consistent every time and the team is always friendly." },
];

export default function SpotlessReviews() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Customer Reviews</div>
        <h1 className="text-4xl font-serif text-white mb-5">What Our Customers Say</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: TEAL }} />)}</div>
        <p className="text-white/35 text-sm">4.9 Stars · 320+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: TEAL }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: DARK }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.service} · {r.frequency}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: TEAL }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: TEAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Join 2,000+ happy homes in the valley.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ color: DARK }}>Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const DARK = '#134E4A';
const LIGHT = '#F0FDFA';

const REVIEWS = [
  { author: 'Jen M. & Biscuit', rating: 5, service: 'Full Groom', date: 'April 2024', text: "Biscuit has anxiety and used to tremble at the groomer. Casey is so patient and gentle with him. He came home calm, fluffy, and smelling amazing. This is the only place we will ever go." },
  { author: 'Kyle T. & Noodle', rating: 5, service: 'Bath & Brush', date: 'March 2024', text: "Noodle is a giant, squirmy golden retriever who is not an easy dog to groom. The team at Paws & Pamper handled her beautifully. No mats, no stress, and she looked incredible." },
  { author: 'Lisa H. & Pepper', rating: 5, service: 'Spa Add-Ons', date: 'February 2024', text: "Got the blueberry facial and conditioning mask for my poodle. I was skeptical but her coat has never been softer. Casey truly knows what she is doing and treats every dog like a VIP." },
  { author: 'Sam W. & Duke', rating: 5, service: 'Full Groom', date: 'January 2024', text: "Duke is a 90-pound German Shepherd mix who can be reactive. I was upfront about it and they accommodated him without any judgment. The private suite setup made all the difference. Amazing service." },
  { author: 'Tina B. & Coco', rating: 5, service: 'Express Groom', date: 'December 2023', text: "Needed Coco groomed before the holidays on short notice. They fit us in the next morning. Fast, professional, and my maltipoo looked like she walked out of a show ring." },
  { author: 'Rob A. & Ziggy', rating: 5, service: 'Bath & Brush', date: 'October 2023', text: "Monthly customer for over a year. Consistent, thorough, and they always remember Ziggy's preferences. The text updates and photos while he is there are a lovely touch." },
];

export default function PawsReviews() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: TEAL }}>Client Reviews</div>
        <h1 className="text-4xl font-serif text-white mb-5">Happy Pups, Happy Families</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: TEAL }} />)}</div>
        <p className="text-white/35 text-sm">5.0 Stars · 190+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-t-4" style={{ borderTopColor: TEAL }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: DARK }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.service}</div>
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

      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Give your pup the pampering they deserve.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: TEAL }}>Book a Groom <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

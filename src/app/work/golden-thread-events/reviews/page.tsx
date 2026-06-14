import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/golden-thread-events';
const DARK = '#1A1A1A';
const SAGE = '#6B8F6B';
const BLUSH = '#F5EAE4';

const REVIEWS = [
  { author: 'Emily & James W.', rating: 5, type: 'Full Planning', date: 'October 2023', text: "We handed Sophia the reins on our wedding and it was the best decision we ever made. Every detail was considered, every vendor was perfectly chosen, and the day itself was completely stress-free. We got to be present for every moment. Absolutely perfect." },
  { author: 'Natalie R.', rating: 5, type: 'Partial Planning', date: 'August 2023', text: "I had a vision but needed help executing it. Sophia stepped in and immediately understood my aesthetic. The coordination on the day was seamless and she thought of details I never would have. Worth every penny." },
  { author: 'Claire & Dan M.', rating: 5, type: 'Floral Design', date: 'June 2023', text: "The florals Sophia created for our wedding were beyond anything we could have imagined. The ceremony arch was breathtaking. She listened to every request and then elevated it into something truly extraordinary." },
  { author: 'Priya & Raj S.', rating: 5, type: 'Full Planning', date: 'April 2023', text: "We wanted a blend of South Asian and Western traditions. Sophia embraced it completely, researched both, and created something authentic and beautiful. Our families were in tears — the good kind. Flawless execution." },
  { author: 'Laura H.', rating: 5, type: 'Day-Of Coordination', date: 'March 2023', text: "I planned my own wedding but needed someone to execute the day. Sophia took my binder, ran a seamless rehearsal, and managed the entire day without one hiccup. She intercepted two problems I never even knew about." },
  { author: 'Megan & Tom B.', rating: 5, type: 'Full Planning', date: 'November 2022', text: "Over 18 months Sophia became more than a planner — she was a trusted advisor and creative collaborator. She pushed back when something was not quite right and championed our vision always. The result was the most beautiful day of our lives." },
];

export default function GoldenThreadReviews() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Client Reviews</div>
        <h1 className="text-4xl font-serif italic text-white mb-5">Stories From Our Couples</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: SAGE }} />)}</div>
        <p className="text-white/35 text-sm">5.0 Stars · 160+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: DARK }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.type}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: SAGE }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: DARK }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">Let us craft your perfect day.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: SAGE, color: 'white' }}>Begin Your Journey <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

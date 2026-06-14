import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const WARM = '#FDF8F3';

const REVIEWS = [
  { author: 'Lena R.', rating: 5, class: 'Yin & Restore', date: 'April 2024', text: "I came to Solstice during the hardest year of my life. Elena's Yin class became my anchor every week. She creates a space that is genuinely healing — not performative wellness, just real, grounded care. I am so grateful for this studio." },
  { author: 'Marcus T.', rating: 5, class: 'Power Flow', date: 'March 2024', text: "I was skeptical that yoga could challenge me athletically. Rahul's Power Flow changed my mind in one class. Technically deep, physically demanding, and he never makes it about ego. My mobility and recovery have improved dramatically." },
  { author: 'Sophie H.', rating: 5, class: 'Fundamentals', date: 'February 2024', text: "Absolute beginner here. Cora made me feel completely welcome from day one. The Fundamentals series gave me a real foundation and I now take three classes a week across different styles. This studio changed my relationship with my body." },
  { author: 'David K.', rating: 5, class: '200-hr Teacher Training', date: 'January 2024', text: "I completed the 200-hour program with the Solstice team. It was the most rigorous and rewarding thing I have ever done. The depth of teaching — anatomy, philosophy, sequencing — was genuinely transformative. I am a confident teacher now." },
  { author: 'Amara J.', rating: 5, class: 'Intro Month', date: 'November 2023', text: "Tried the intro month on a whim and I have not left. The community here is unlike any gym or studio I have experienced. Inclusive, warm, knowledgeable teachers and classes that meet you where you are." },
  { author: 'Claire B.', rating: 5, class: 'Meditation', date: 'September 2023', text: "Elena leads the meditation series with such gentleness and skill. I have tried apps, I have tried other classes — nothing compared. I sleep better, I am calmer at work, and I actually look forward to Monday mornings now." },
];

export default function SolsticeReviews() {
  return (
    <>
      <section style={{ backgroundColor: DARK }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: SAGE }}>Student Reviews</div>
        <h1 className="text-4xl font-serif italic text-white mb-5">Stories From Our Community</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: SAGE }} />)}</div>
        <p className="text-white/35 text-sm">5.0 Stars · 210+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: WARM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-l-4" style={{ borderLeftColor: SAGE }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: DARK }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.class}</div>
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
        <h2 className="text-2xl font-serif italic text-white mb-4">Your practice starts here.</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: SAGE }}>Start Intro Month <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

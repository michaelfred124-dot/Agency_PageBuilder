import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

const REVIEWS = [
  { author: 'Chloe T.', rating: 5, service: 'Balayage', stylist: 'Maria', date: 'April 2024', text: "Maria is an absolute artist. My balayage looks so natural and the color is exactly what I dreamed of. The salon is gorgeous and everyone there makes you feel so welcome. I will never go anywhere else." },
  { author: 'Priya N.', rating: 5, service: 'Color + Cut', stylist: 'Priya S.', date: 'March 2024', text: "I have been to at least a dozen salons in Austin and Atelier is in a completely different league. The attention to detail, the quality of products, and the level of care they put into every appointment is unmatched." },
  { author: 'Emma W.', rating: 5, service: 'Bridal Hair', stylist: 'Jamie', date: 'February 2024', text: "My wedding hair was absolutely perfect. Jamie did a trial the month before and nailed my vision, then executed it flawlessly on the day. The entire team was calm, professional, and I felt beautiful all day." },
  { author: 'Rachel L.', rating: 5, service: 'Keratin Treatment', stylist: 'Maria', date: 'January 2024', text: "The keratin treatment Maria did lasted four months. My hair has never been so smooth or easy to manage. Worth every penny and I plan to make this a seasonal thing." },
  { author: 'Sofia M.', rating: 5, service: 'Highlights', stylist: 'Priya S.', date: 'November 2023', text: "Priya understood my curly hair in a way no one else ever has. My highlights look incredible and my curl pattern is even better than before. Finally a salon that gets it." },
  { author: 'Megan B.', rating: 5, service: 'Cut + Blowout', stylist: 'Maria', date: 'September 2023', text: "I have been going to Atelier for two years. Every single visit is consistent and excellent. Maria remembers details about my hair from my last appointment. That level of care is rare." },
];

export default function AtelierReviews() {
  return (
    <>
      <section style={{ backgroundColor: CHARCOAL }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: ROSE }}>Client Reviews</div>
        <h1 className="text-4xl font-serif italic text-white mb-5">What Clients Are Saying</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: ROSE }} />)}</div>
        <p className="text-white/35 text-sm">4.9 Stars · 200+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: BLUSH }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: CHARCOAL }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.service} · {r.stylist}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: ROSE }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: CHARCOAL }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif italic text-white mb-4">Ready to experience the Atelier difference?</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: ROSE }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

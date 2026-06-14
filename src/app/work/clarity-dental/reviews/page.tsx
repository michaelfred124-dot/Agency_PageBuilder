import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const BLUE = '#0284C7';
const LIGHT = '#F0F8FF';

const REVIEWS = [
  { author: 'Karen S.', rating: 5, service: 'Invisalign', date: 'April 2024', text: "I was terrified of the dentist for 15 years. Dr. Patel is the first dentist who actually listened to my anxiety and adjusted everything accordingly. Invisalign went perfectly and I finally have the smile I always wanted." },
  { author: 'Mike L.', rating: 5, service: 'Dental Implants', date: 'March 2024', text: "Two implants placed by Dr. Kim. The process was explained thoroughly at every stage, recovery was easy, and the results are indistinguishable from my natural teeth. Outstanding care throughout." },
  { author: 'Rachel G.', rating: 5, service: 'Teeth Whitening', date: 'February 2024', text: "Professional whitening results in one visit. Sarah the hygienist is gentle and thorough, and Dr. Patel took the time to make sure I was comfortable. Everyone at Clarity is warm and professional." },
  { author: 'Thomas H.', rating: 5, service: 'General Checkup', date: 'January 2024', text: "Been coming to Clarity for three years as a family. All four of us feel comfortable here. The kids actually look forward to their appointments. Scheduling is easy and they always run on time." },
  { author: 'Priya M.', rating: 5, service: 'Crown', date: 'November 2023', text: "Needed a crown after a cracked molar. Dr. Kim got me in same-day, managed my pain immediately, and the permanent crown was ready in less time than expected. No surprise billing — exactly what they quoted." },
  { author: 'Janet R.', rating: 5, service: 'Cleaning', date: 'September 2023', text: "Sarah RDH is the most thorough and gentlest hygienist I have ever had. She caught an early cavity that I did not even know about. My teeth feel incredible after every visit." },
];

export default function ClarityReviews() {
  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Patient Reviews</div>
        <h1 className="text-4xl font-serif text-white mb-5">What Our Patients Say</h1>
        <div className="flex justify-center gap-1.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: BLUE }} />)}</div>
        <p className="text-white/35 text-sm">4.9 Stars · 480+ Google Reviews</p>
      </section>

      <section style={{ backgroundColor: LIGHT }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 rounded-lg shadow-sm border border-blue-50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-sm" style={{ color: NAVY }}>{r.author}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{r.service}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: BLUE }} />)}</div>
                  <div className="text-[10px] text-gray-300">{r.date}</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: NAVY }} className="py-14 px-6 text-center">
        <h2 className="text-2xl font-serif text-white mb-4">Ready to experience dental care you will actually enjoy?</h2>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: BLUE }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

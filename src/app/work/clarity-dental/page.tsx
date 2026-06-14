import Image from 'next/image';
import Link from 'next/link';
import { Check, Star, ArrowRight, Smile, Shield, Sparkles, Phone, MapPin, ChevronDown, Clock, Heart } from 'lucide-react';

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const BLUE = '#0284C7';
const LIGHT = '#F0F8FF';

const SVCS = [
  { icon: Smile, title: 'General & Preventive', tag: 'Foundation', price: 'Most insurances accepted', desc: 'Cleanings, X-rays, exams, and fillings. Preventive care that saves you money and pain long-term.', items: ['Teeth cleaning & polishing', 'Digital X-rays', 'Comprehensive exam', 'Sealants & fluoride', 'Gum disease treatment', 'Emergency same-day visits'] },
  { icon: Sparkles, title: 'Cosmetic Dentistry', tag: 'Transform', price: 'Financing available', desc: 'From subtle whitening to complete smile makeovers. We help you achieve the smile you have always wanted.', items: ['Professional teeth whitening', 'Porcelain veneers', 'Dental bonding', 'Smile makeovers', 'Gum contouring', 'Tooth-colored fillings'] },
  { icon: Shield, title: 'Restorative', tag: 'Repair', price: 'Same-week appointments', desc: 'Crowns, bridges, and dentures to replace damaged or missing teeth and restore full function.', items: ['Dental crowns & bridges', 'Partial & full dentures', 'Inlays & onlays', 'Root canal therapy', 'Tooth extractions', 'Bone grafting'] },
  { icon: Heart, title: 'Implants & Ortho', tag: 'Specialty', price: 'Free consultation', desc: 'Permanent tooth replacement with implants and orthodontic treatment with Invisalign or braces.', items: ['Single & multiple implants', 'Implant-supported dentures', 'Invisalign for teens & adults', 'Traditional braces', 'Retainers', 'Free Invisalign consultation'] },
];

const STEPS = [
  { n: '01', title: 'Book Your Visit', desc: 'Online in 60 seconds or call. New patients often seen within the same week.' },
  { n: '02', title: 'Comprehensive Exam', desc: 'Full digital X-rays, gum health check, and exam by Dr. Patel or Dr. Kim. No rush.' },
  { n: '03', title: 'Personalized Treatment Plan', desc: 'We explain everything clearly, prioritize by urgency, and present all options — no pressure.' },
  { n: '04', title: 'Comfortable Care', desc: 'Sedation available. We check in throughout every procedure. You are always in control.' },
];

const INSURANCE = ['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'United Concordia', 'Guardian', 'Humana', 'BlueCross BlueShield'];

const REVIEWS = [
  { text: "I dreaded the dentist for 15 years. Dr. Patel is the first dentist who listened to my anxiety. My Invisalign was perfect and I finally have the smile I always wanted.", author: "Karen S.", service: "Invisalign" },
  { text: "Two implants placed by Dr. Kim. The results are indistinguishable from my natural teeth. Outstanding care at every single stage.", author: "Mike L.", service: "Dental Implants" },
  { text: "Same-day emergency for a cracked molar. Dr. Kim got me in immediately and the permanent crown was ready faster than expected. No surprise billing.", author: "Priya M.", service: "Crown" },
];

const FAQS = [
  { q: "Are you accepting new patients?", a: "Yes! We are actively accepting new patients of all ages. We also accept new patients with dental anxiety or who have not seen a dentist in many years — we are judgment-free. Most new patients can be seen within the same week." },
  { q: "Do you accept my insurance?", a: "We accept most major PPO dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, Guardian, Humana, and more. We also work with patients who have no insurance through our in-house Clarity Care Plan, which offers discounts on all services for a flat annual fee." },
  { q: "Do you see children?", a: "Yes. We see patients from age 3 and up. We have a gentle, kid-friendly approach and can treat the whole family in one place. We recommend first dental visits around age 1-2, per the American Dental Association guidelines." },
  { q: "What do you do for anxious patients?", a: "We offer nitrous oxide (laughing gas), oral conscious sedation, and IV sedation for procedures. We also have noise-canceling headphones, blankets, and a no-rush policy. Tell us about your anxiety when you book and we will prepare accordingly." },
  { q: "How much does teeth whitening cost?", a: "In-office professional whitening starts at $395 and delivers dramatic results in a single 90-minute visit. Take-home whitening trays start at $295 and show full results in 2 weeks. Both include custom-fitted trays and a touch-up kit." },
  { q: "Do you offer payment plans or financing?", a: "Yes. We offer 0% interest financing through CareCredit and Lending Club for any treatment over $200. We also accept all major credit cards, HSA, and FSA. No one should avoid dental care because of cost — talk to our team about options." },
  { q: "What are your hours?", a: "Monday through Thursday 7:00am–7:00pm, Friday 7:00am–5:00pm, and Saturday 8:00am–3:00pm. We offer early morning, evening, and Saturday appointments specifically to accommodate working adults and families." },
];

export default function ClarityDentalHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="" fill className="object-cover object-top" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(12,35,64,0.97) 0%, rgba(12,35,64,0.65) 55%, rgba(12,35,64,0.15) 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px" style={{ backgroundColor: BLUE }} /><span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">Denver, CO · All Ages · All Insurances</span></div>
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-5">A healthier smile<br />starts here.</h1>
          <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">Compassionate, comprehensive dental care for families and individuals. General, cosmetic, restorative, implants, and orthodontics — all under one roof.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full" style={{ backgroundColor: BLUE }}>Book Appointment <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:7205550139" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full"><Phone className="w-4 h-4" /> (720) 555-0139</a>
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 border border-white/15 text-white/55 font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full">Our Services</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: BLUE }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Now Accepting New Patients', 'Same-Day Emergency Visits', 'All Major Insurances Accepted', 'Financing — 0% Interest'].map((s, i) => (
            <div key={i} className="text-white font-bold text-sm">{s}</div>
          ))}
        </div>
      </section>

      {/* SPECIAL OFFER BANNER */}
      <section style={{ backgroundColor: LIGHT }} className="py-6 px-6 text-center border-b border-blue-100">
        <p className="text-sm font-bold" style={{ color: NAVY }}>New Patient Special: Exam + X-Rays + Cleaning — <span style={{ color: BLUE }}>$89 (Reg. $290)</span> · <Link href={`${BASE}/contact`} className="underline">Book Online Now</Link></p>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: LIGHT }} className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>What We Offer</div>
            <h2 className="text-4xl font-serif mb-3" style={{ color: NAVY }}>Everything Your Smile Needs</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">One office, one team, complete dental care. We treat patients aged 3 to 93.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SVCS.map(({ icon: Icon, title, tag, price, desc, items }, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: BLUE + '15' }}>
                    <Icon className="w-5 h-5" style={{ color: BLUE }} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: BLUE }}>{tag}</div>
                    <div className="text-[10px] text-gray-400">{price}</div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {items.map((item, j) => <li key={j} className="flex items-center gap-1.5 text-xs text-gray-400"><Check className="w-3 h-3 shrink-0" style={{ color: BLUE }} />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${BASE}/services`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ backgroundColor: NAVY }}>Full Services & Pricing <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Your Visit</div>
            <h2 className="text-4xl font-serif text-white">What to Expect</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold text-lg text-white" style={{ backgroundColor: BLUE }}>{n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE SPLIT */}
      <section className="grid lg:grid-cols-2 min-h-[55vh]">
        <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
          <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" alt="" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center px-10 md:px-16 py-16" style={{ backgroundColor: NAVY }}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: BLUE }}>Our Practice</div>
            <h2 className="text-4xl font-serif text-white mb-6">Dental care that puts you at ease.</h2>
            <p className="text-white/50 leading-relaxed mb-8">Dr. Anita Patel and Dr. Marcus Kim built Clarity around one principle: every patient deserves to feel comfortable, informed, and respected — not rushed, judged, or scared.</p>
            <div className="space-y-3 mb-8">
              {["Digital X-rays & 3D cone beam imaging", "Nitrous oxide & oral sedation available", "Evening hours Mon–Thu until 7pm", "Saturday morning appointments available", "Online booking & text appointment reminders", "No surprise billing — transparent estimates"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50"><Check className="w-4 h-4 shrink-0" style={{ color: BLUE }} />{p}</div>
              ))}
            </div>
            <Link href={`${BASE}/about`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b pb-0.5" style={{ color: BLUE, borderColor: BLUE }}>Meet Dr. Patel & Dr. Kim <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* INSURANCE STRIP */}
      <section style={{ backgroundColor: LIGHT }} className="py-12 px-6 md:px-12 border-y border-blue-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: NAVY }}>Insurance Partners</div>
          <div className="flex flex-wrap justify-center gap-4">
            {INSURANCE.map((ins, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-blue-100 text-xs font-bold text-gray-500 rounded-full">{ins}</span>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-5">No insurance? Ask about our in-house Clarity Care Plan — flat-rate annual fee, no waiting periods.</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ backgroundColor: LIGHT }} className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>Patient Reviews</div>
            <h2 className="text-4xl font-serif mb-2" style={{ color: NAVY }}>4.9 Stars on Google</h2>
            <p className="text-gray-400 text-sm">480+ verified patient reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-7 rounded-lg shadow-sm">
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: BLUE }} />)}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="font-bold text-xs" style={{ color: NAVY }}>— {r.author} <span className="text-gray-400 font-normal">· {r.service}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${BASE}/reviews`} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: BLUE }}>Read All Reviews <ArrowRight className="w-3 h-3 inline ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: BLUE }}>FAQ</div>
            <h2 className="text-4xl font-serif" style={{ color: NAVY }}>Patient Questions Answered</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer gap-4">
                  <span className="font-bold text-sm leading-snug" style={{ color: NAVY }}>{q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: BLUE }} />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Our Office</div>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BLUE }} />
              <span>720 S Colorado Blvd, Suite 550<br />Denver, CO 80246</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Office Hours</div>
            <div className="text-white/65 text-sm space-y-1">
              <div>Mon – Thu: 7:00am – 7:00pm</div>
              <div>Friday: 7:00am – 5:00pm</div>
              <div>Saturday: 8:00am – 3:00pm</div>
              <div className="text-white/30">Sunday: Closed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: BLUE }}>Contact Us</div>
            <a href="tel:7205550139" className="inline-flex items-center gap-2 text-white font-bold text-base"><Phone className="w-4 h-4" style={{ color: BLUE }} /> (720) 555-0139</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-7 py-3 rounded-full" style={{ backgroundColor: BLUE }}>Book an Appointment <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: BLUE }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">New patients welcome. Same-week appointments available.</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Accepting most insurance plans. Flexible payment options for all patients. Morning, evening, and Saturday hours for busy families.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full" style={{ color: NAVY }}>Book Online Now <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:7205550139" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4 rounded-full"><Clock className="w-4 h-4" /> Same-Day Emergency Line</a>
        </div>
      </section>
    </>
  );
}

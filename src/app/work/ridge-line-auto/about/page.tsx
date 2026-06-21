import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Shield } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const CARD = '#161616';
const RED = '#E5242A';
const MUTED = 'rgba(255,255,255,0.45)';

const TEAM = [
  { 
    name: 'Rick Holloway', 
    role: 'Founder & Lead Mechanic', 
    certs: 'ASE Master Certified · 24 Years Experience', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', 
    bio: "Rick opened Ridge Line in 2002 after spending a decade at regional dealerships. He believed Nashville drivers deserved straight-talk diagnostics, fair pricing, and builds engineered to run without compromise." 
  },
  { 
    name: 'Angela Torres', 
    role: 'Service Advisor', 
    certs: 'ASE Certified · Estimator', 
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', 
    bio: "Angela translates complex engine diagnostics into clear repair options. She coordinates parts procurement and scheduling, making sure our clients know exactly what is happening under the hood." 
  },
  { 
    name: 'Marcus Webb', 
    role: 'Senior Tuner & Electrical Lead', 
    certs: 'ASE Master Certified · Calibration Specialist', 
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop', 
    bio: "Marcus leads our diagnostic lane and dyno calibration. From custom harness repinning to turbo mapping, his meticulous calibration work has created a dedicated client following." 
  },
];

const PROMISES = [
  'Written diagnostics and price approvals before any wrench is turned.',
  'Digital inspection briefs sent to your phone with detailed photos.',
  '24-month/24,000-mile warranty on all diagnostic labor and parts.',
  'Complimentary multi-point health check with every service visit.',
  'Price match guarantee against written estimates from local Nashville shops.',
];

const STATS = [
  { value: '2006', label: 'Founded' },
  { value: '14,000+', label: 'Vehicles Serviced' },
  { value: '4.8★', label: 'Google Rating' },
  { value: '18 Yrs', label: 'Denver Trusted' },
];

export default function RidgeLineAbout() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: BG, color: '#fff' }}>
      
      {/* Title Header */}
      <section className="py-24 px-6 md:px-12 text-center bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
        <span className="text-[#E5242A] font-mono font-black text-xs tracking-[0.25em] uppercase block mb-4">Our History</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none uppercase">Built on Honesty. Driven by Speed.</h1>
        <p className="text-white/50 max-w-xl mx-auto text-sm font-light leading-relaxed">
          Ridge Line Auto opened in 2002 to give Nashville drivers a premium, honest alternative to dealership service and markup.
        </p>
      </section>

      {/* Story Grid Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-6">
            <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">Straight Diagnosis.<br />Zero Compromises.</h2>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Rick Holloway launched Ridge Line with a simple commitment: treat every customer’s car like it belonged to his own family. He saw too many enthusiasts getting overcharged at corporate shops for subpar builds.
            </p>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Today, we operate a state-of-the-art facility off Nolensville Pike. We pair factory-grade diagnostic computers with veteran mechanics, ensuring your vehicle is built and serviced to the highest performance standards.
            </p>
            <div className="space-y-3 pt-4 border-t border-white/5">
              {PROMISES.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/3] md:h-[480px] w-full rounded-tr-[64px] rounded-bl-[64px] border border-[#E5242A]/20 overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop" 
              alt="Ridge Line workshop mechanic" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      {/* Team / Mechanics Section */}
      <section className="py-32 bg-[#121212] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#E5242A] font-mono font-bold text-xs tracking-[0.25em] uppercase block mb-4">Our Crew</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-24 uppercase tracking-tight">The Mechanics</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div 
                key={i} 
                className="border border-white/5 flex flex-col justify-between overflow-hidden shadow-xl"
                style={{ backgroundColor: CARD }}
              >
                <div className={`relative h-72 border-b border-white/5 overflow-hidden ${
                  i % 2 === 0 ? 'rounded-tl-[32px] rounded-br-[32px]' : 'rounded-tr-[32px] rounded-bl-[32px]'
                }`}>
                  <Image 
                    src={m.img} 
                    alt={m.name} 
                    fill 
                    className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-8 text-left space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: RED }}>{m.certs}</span>
                    <h3 className="font-black text-white text-lg mt-2 uppercase">{m.name}</h3>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">{m.role}</p>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed font-light pt-4 border-t border-white/5">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#E5242A] rounded-tl-[64px] rounded-br-[64px] py-16 px-8 text-center shadow-2xl text-white border border-[#E5242A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600')" }} />
          <Shield className="w-10 h-10 mx-auto mb-6 text-white" strokeWidth={1.2} />
          <h2 className="text-3xl font-black text-white mb-4 uppercase">ASE Certified. Family Owned. 24 Years Strong.</h2>
          <div className="pt-6 relative z-10">
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] text-white font-mono font-black uppercase tracking-widest text-xs px-10 py-5 transition-all">
              Book Service Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


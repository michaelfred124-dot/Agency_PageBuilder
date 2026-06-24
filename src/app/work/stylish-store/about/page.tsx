import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Award, Shield, Sparkles } from 'lucide-react';

const BASE = '/work/stylish-store';

const TEAM = [
  {
    name: 'Elena Rostova',
    role: 'Lead Fashion Designer',
    certs: '12+ Years Experience',
    img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop',
    bio: 'Elena oversees our footwear aesthetics, blending luxury craftsmanship with daily ergonomic comfort.'
  },
  {
    name: 'Marcus Vance',
    role: 'Master of Craftsmanship',
    certs: 'Savile Row Trained',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    bio: 'Marcus ensures every stitch, leather sole, and Flyknit mesh meets our world-class durability standards.'
  },
  {
    name: 'Chloe Mercer',
    role: 'Sustainability Director',
    certs: 'M.S. in Eco-Design',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    bio: 'Chloe leads our eco-initiatives, sourcing 100% recycled packaging and organic cotton components.'
  }
];

const VALUES = [
  {
    title: 'Sustainable Sourcing',
    desc: 'We are committed to reducing our carbon footprint by using eco-sustainable leathers and Flyknit fabrics.'
  },
  {
    title: 'Artisan Construction',
    desc: 'Each pair of sneakers is assembled by hand, undergoing rigorous durability testing before packaging.'
  },
  {
    title: 'Ergonomic Support',
    desc: 'We work closely with orthotic experts to design insoles that offer optimal arch support and daily comfort.'
  }
];

export default function StylishStoreAbout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">
            Our Story & Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none">
            Built on Style & Innovation
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Discover the dedication, sustainable sourcing, and design aesthetics behind every pair of Stylish shoes.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-2 opacity-10 blur-xl pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop"
                alt="Elena Rostova Spotlight"
                fill className="object-cover object-top" referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right bio */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                The Creative Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight">
                Designed to Move with Purpose
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-500 text-sm sm:text-base leading-relaxed font-medium space-y-4">
              <p>
                Founded in 2018, Stylish Online Store set out with a simple mission: to design luxury-tier sneakers that do not compromise on foot health or environmental ethics.
              </p>
              <p>
                We believe that footwear is the foundation of daily productivity. By combining high-performance athletics design with luxury editorial fashion, we craft sneakers that transition seamlessly from gym training to corporate office settings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              {[
                '100% Eco-Sustainable Packaging',
                'Orthotic-Approved Arch Support',
                'Handcrafted Assembly Process',
                'Premium Italian Grain Leathers',
                'Breathable Recycled Mesh Fabrics',
                'Lifetime Stitching Guarantee'
              ].map((text, idx) => (
                <div key={idx} className="flex gap-2.5 items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Cards Grid */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Our Principles
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Values That Drive Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 shadow-sm">
                    {idx === 0 ? <Shield className="w-5 h-5" /> : idx === 1 ? <Sparkles className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <h4 className="font-sans font-black text-lg text-slate-900">{val.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Designer Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              The Creators
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Meet Our Designers & Artisans
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group flex flex-col text-left">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 shadow-sm mb-6 bg-slate-50">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    fill className="object-cover group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw" referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-500/20 px-2 py-0.5 rounded">
                      {member.certs}
                    </span>
                    <h4 className="font-sans font-black text-lg leading-none pt-1">{member.name}</h4>
                    <p className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed px-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-slate-950 text-white text-center border-t border-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white leading-tight">
            Ready to find your perfect fit?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Contact our advisors or explore our complete catalog to choose the pair designed for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link 
              href={`${BASE}/services`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all"
            >
              Shop Catalog
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

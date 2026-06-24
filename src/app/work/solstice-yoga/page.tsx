import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChevronDown, Phone, Check, Award, CheckCircle } from 'lucide-react';

const BASE = '/work/solstice-yoga';

const PARTNERS = [
  { name: 'Mindbody', logo: '🧘‍♀️ Mindbody' },
  { name: 'Lululemon', logo: '🍋 Lululemon' },
  { name: 'Manduka', logo: '🐸 Manduka' },
  { name: 'ClassPass', logo: '🎟️ ClassPass' },
  { name: 'Yoga Alliance', logo: '☀️ Yoga Alliance' },
];

const MODALITIES = [
  { 
    name: 'Hatha Flow', 
    level: 'All Levels', 
    desc: 'Classic yoga focusing on alignment, breathing, and deep awareness.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    action: 'Book Class'
  },
  { 
    name: 'Power Vinyasa', 
    level: 'Intermediate', 
    desc: 'Dynamic sequences and strong transitions to build strength and heat.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    action: 'Book Class'
  },
  { 
    name: 'Yin & Restorative', 
    level: 'All Levels', 
    desc: 'Long-held, passive floor poses to release tension and restore the nervous system.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    action: 'Book Class'
  },
  { 
    name: 'Meditation & Sound', 
    level: 'All Levels', 
    desc: 'Mindfulness practices, breathwork, and healing soundscapes.',
    img: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop',
    action: 'Book Class'
  },
];

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    rating: 5,
    source: 'Google Review',
    text: "Solstice completely changed my relationship with movement. I walked in feeling tight and stressed, and after 3 months I feel the best I have in years. The teachers are incredibly certified, safe, and helpful.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Richard Vance',
    rating: 5,
    source: 'Google Review',
    text: "Precise instruction and a beautiful sanctuary. The Hatha Flow is restorative yet engaging. The studio is clean, has free parking, and booking through the site is instant and seamless. Highly recommend!",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Adriene Skinner',
    rating: 5,
    source: 'Google Review',
    text: "I finished my 200-hour teacher training here. It was rigorous, thorough, and highly professional. Elena and her staff are masters of alignment, anatomy, and sequencing. Cannot thank Solstice enough!",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'David Kim',
    rating: 5,
    source: 'Google Review',
    text: "Best yoga studio in Denver by far. The Yin & Restore class on Sunday evenings has become a non-negotiable part of my self-care routine. The teachers make everyone feel welcome.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
  },
];

const FAQS = [
  { q: "I have never done yoga before. Where do I start?", a: "Start with Hatha Flow or Yin & Restorative. Both are designed for all levels, and our teachers actively offer modifications. Your first class is free — come as you are." },
  { q: "What should I bring to my first class?", a: "Just yourself. We provide mats, blocks, straps, and blankets free of charge. Wear comfortable clothing you can move in. Arrive 10 minutes early to meet your teacher." },
  { q: "Do you offer private sessions or corporate yoga?", a: "Yes. Private sessions are scheduled directly with teachers — rates start at $85/hour. Corporate and group programs are available for teams of any size. Contact us to discuss details." },
  { q: "Is there parking at the studio?", a: "Yes. We have free parking in the dedicated lot behind the studio on Solstice Lane, and plenty of street parking is available." },
  { q: "Can I freeze or pause my membership?", a: "Yes. You can pause your membership for up to 3 months per year with no penalty. Simply email us or manage pauses inside your account." },
];

export default function SolsticeYoga() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Electrician Style: Dark Slate, Typography Left, Image Right, Google Badge) */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-black uppercase tracking-widest text-yellow-400">
              <CheckCircle className="w-3.5 h-3.5" /> Denver's Top-Rated Wellness Studio
            </div>
            
            <h1 className="font-sans font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.05] text-white">
              Mindful & Professional <br />
              <span className="text-yellow-400">Yoga, Breathwork &</span> <br />
              Sanctuary Services
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
              Denver's certified instructors serving you 7 days a week. Begin your practice with a supportive community and expert alignment guidance.
            </p>
            
            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                href={`${BASE}/contact`}
                className="bg-yellow-400 text-slate-950 hover:bg-yellow-500 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-yellow-400/10 flex items-center justify-center gap-2 group transition-all"
              >
                Book Free First Class
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:7205550142"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/70 transition-all text-sm font-bold"
              >
                <Phone className="w-5 h-5 text-yellow-500 fill-yellow-500/10" />
                <span>Call (720) 555-0142</span>
              </a>
            </div>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-400">
                ⭐ <span className="text-white font-bold">5.0 Star Rating</span> on Google Reviews | Google Guaranteed Sanctuary
              </p>
            </div>
          </div>
          
          {/* Right Column Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl rotate-3 opacity-10 blur-xl pointer-events-none" />
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200&auto=format&fit=crop"
                alt="Instructor leading yoga class in modern sunlit studio"
                fill className="object-cover" referrerPolicy="no-referrer" priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO BAR SECTION */}
      <section className="bg-slate-50 py-10 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Trusted by 5,000+ Denver Students & Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-400 font-bold text-sm">
            {PARTNERS.map((p, i) => (
              <span key={i} className="hover:text-slate-600 transition-colors uppercase tracking-wider text-xs md:text-sm">
                {p.logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODALITIES GRID ("Your Trusted Local Sanctuary") */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-600">
              Denver's Certified Modalities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Your Trusted Local Sanctuary
            </h3>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Explore our core modalities designed for ultimate alignment, strength building, and restoration. Guided by certified instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MODALITIES.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-[400px]"
              >
                {/* Photo Background */}
                <Image 
                  src={item.img}
                  alt={item.name}
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                
                {/* Content */}
                <div className="relative z-10 mt-auto p-6 space-y-3 flex flex-col justify-end text-white h-full">
                  <span className="text-[9px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 px-2 py-1 rounded w-fit">
                    {item.level}
                  </span>
                  <h4 className="text-xl font-bold font-sans tracking-tight">{item.name}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-300 overflow-hidden font-medium">
                    {item.desc}
                  </p>
                  <Link 
                    href={`${BASE}/services`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white group-hover:text-yellow-400 transition-colors pt-2"
                  >
                    {item.action} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLUE CTA BANNER SECTION */}
      <section className="px-6 md:px-12 py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto rounded-[32px] bg-sky-600 text-white p-8 md:p-12 relative overflow-hidden shadow-xl">
          {/* Background shapes */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-sky-500 opacity-20 rounded-l-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Title and Instructor Avatars */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Avatars */}
              <div className="flex items-center justify-center lg:justify-start -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-sky-600 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=150" alt="Clara" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-sky-600 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=150" alt="James" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-sky-600 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150" alt="Mei" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-yellow-400 text-slate-950 font-black text-[9px] px-3 py-1.5 rounded-full uppercase tracking-wider ml-4 shadow-sm border border-yellow-300">
                  Meet the Guides
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight leading-none">
                  Begin Your Practice Today.
                </h3>
                <p className="text-sky-100 text-sm font-medium max-w-xl leading-relaxed">
                  Experience professional, certified instruction designed to center your mind and align your physical movement.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0 justify-center">
              <Link 
                href={`${BASE}/contact`}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all text-center"
              >
                Schedule Class Now
              </Link>
              <a 
                href="tel:7205550142"
                className="border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all font-bold text-sm px-6 py-4 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" /> Call (720) 555-0142
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "WHY CHOOSE US" SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text/Bullet Points */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-600">
                Professional & Mindful Yoga
              </h2>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
                Why Choose Solstice?
              </h3>
              <p className="text-slate-500 text-sm sm:text-base font-medium">
                Our classes are structured to deliver real restoration and physical progress. Here is why Denver trust Solstice Yoga & Wellness.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "We're Local.", desc: "Centrally located with free parking. We offer a convenient 7-day schedule to fit your busy lifestyle easily." },
                { title: "We're Certified.", desc: "Our instructors average over 9 years of teaching experience with RYS 200/500 credentials and safety training." },
                { title: "We're Community-Focused.", desc: "A welcoming, inclusive space. No performance grades. Every class offers depth for advanced practitioners and beginner modifications." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-1">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm sm:text-base mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                href={`${BASE}/services`}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
              >
                Request Schedule <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-100 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
                alt="Beautiful sunlit yoga studio room with mats and plants"
                fill className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. SPLITSCREEN ROW ("No Power No Problem" equivalent) */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200 shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop"
                alt="Relaxing meditation bowls, mats, and blocks"
                fill className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right side Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              For Every Practitioner — Big or Small
            </span>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Find Your Strength. <br />
              Feel Your Stillness.
            </h3>
            
            <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              We understand that yoga is personal. Whether you are stepping onto the mat for the very first time, looking to master your handstand, or recovering from an injury, our certified guides are here to design modifications and support your flow.
            </p>
            
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              No pressure. No competition. Simply show up, connect with your breath, and let the benefits of authentic wellness integrate into your daily life.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link 
                href={`${BASE}/contact`}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                Claim Free First Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "DENVER'S GO-TO SANCTUARY" SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-yellow-600 font-sans font-black text-xs uppercase tracking-widest">
              <span>Denver Sanctuary</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>Mindful</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>Certified</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Solstice Yoga & Wellness <br />
              Your Go-To Denver Studio
            </h3>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Since 2016, Solstice has been Denver's premier destination for individuals searching for a supportive, knowledgeable, and clean yoga studio. We pride ourselves on creating a neighborhood sanctuary where you can escape the noise, build physical health, and restore your nervous system.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              We offer over 30 weekly classes, certified 200/500-hour instruction, workshops, and teacher training courses. Convenient street and rear lot parking. Contact us at (720) 555-0142.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-100 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
                alt="Instructor doing warrior pose next to large window"
                fill className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIAL CAROUSEL BANNER (Electrician style: Dark Slate Blue, verified reviews, google logos, stars, avatars) */}
      <section className="bg-slate-950 text-white py-24 px-6 md:px-12 border-t border-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0369a122_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Our Community Brightens Our Day!
            </p>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight leading-none">
              Thank You Denver Area
            </h3>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Hear from our dedicated students about how Solstice has impacted their health, alignment, and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-6"
              >
                {/* Header review details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-yellow-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {/* Google verified logo */}
                    <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-black tracking-wider uppercase">
                      G
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic font-medium">
                    "{rev.text}"
                  </p>
                </div>

                {/* Reviewer signature */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-800 shrink-0">
                    <Image src={rev.avatar} alt={rev.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white leading-none mb-1">{rev.name}</h4>
                    <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider">{rev.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-600">
              Got Questions?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Answers Before You Arrive
            </h3>
            <p className="text-slate-500 font-medium text-sm">
              Everything you need to know about class bookings, memberships, and studio policies.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer gap-4 text-slate-900 hover:text-yellow-600 transition-colors list-none select-none">
                  <span className="font-black text-sm sm:text-base tracking-tight">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-open:rotate-180 group-open:bg-yellow-400 group-open:border-yellow-400 group-open:text-slate-950 transition-all duration-300">
                    <ChevronDown className="w-4 h-4 shrink-0 transition-transform" />
                  </div>
                </summary>
                <p className="mt-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium pl-2 border-l-2 border-yellow-400/80">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="bg-yellow-400 py-16 px-6 text-center text-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fef08a_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl font-sans font-black tracking-tight leading-none">
            Begin Your Wellness Journey.
          </h2>
          <p className="text-slate-900/80 text-sm font-semibold max-w-md mx-auto leading-relaxed">
            Your very first class is completely free. No credit card, no commitments, and no pressure. Just show up as you are.
          </p>
          <div className="pt-2">
            <Link 
              href={`${BASE}/contact`} 
              className="inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-slate-900 font-sans font-black uppercase text-xs tracking-widest px-10 py-4 rounded-xl shadow-xl transition-all"
            >
              Book Your Free Class <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}


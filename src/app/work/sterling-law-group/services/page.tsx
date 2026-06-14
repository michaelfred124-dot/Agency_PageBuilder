import Link from 'next/link';
import { ArrowRight, Scale, Shield, Users, Building, FileText, Check } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const CREAM = '#FAF8F2';

const PRACTICE_AREAS = [
  {
    icon: Shield,
    title: 'Personal Injury',
    tagline: 'No fees unless we win.',
    desc: 'When negligence causes harm, you deserve aggressive representation. We handle auto accidents, slip and fall, wrongful death, dog bites, and product liability cases across Colorado.',
    items: ['Auto & motorcycle accidents', 'Slip & fall injuries', 'Wrongful death claims', 'Product liability', 'Dog bites & animal attacks', 'Premises liability'],
    note: 'Contingency fee — you pay nothing unless we recover for you.',
  },
  {
    icon: Users,
    title: 'Family Law',
    tagline: 'Protecting what matters most.',
    desc: 'Divorce, child custody, and family matters require both legal expertise and human compassion. We guide you through Colorado family law with clarity and care.',
    items: ['Divorce & legal separation', 'Child custody & parenting plans', 'Child & spousal support', 'Adoption proceedings', 'Domestic violence protection', 'Property division'],
    note: 'Free initial consultation. Flexible payment plans available.',
  },
  {
    icon: Scale,
    title: 'Criminal Defense',
    tagline: 'Your rights. Your future. Defended.',
    desc: 'A criminal charge can change your life. Our experienced defense attorneys fight to protect your freedom and your record at every stage of the process.',
    items: ['DUI / DWAI defense', 'Drug offenses', 'Assault & violent crimes', 'Theft & property crimes', 'Expungements & record sealing', 'Federal criminal defense'],
    note: 'Available 24/7 for emergency consultations.',
  },
  {
    icon: Building,
    title: 'Business Law',
    tagline: 'Protecting your business interests.',
    desc: 'From formation to dispute resolution, we give Colorado businesses the legal foundation they need to operate with confidence and protect their assets.',
    items: ['Business formation (LLC, Corp)', 'Contract drafting & review', 'Commercial litigation', 'Employment disputes', 'Mergers & acquisitions', 'Intellectual property'],
    note: 'Fixed-fee packages available for small business clients.',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    tagline: 'Secure your legacy.',
    desc: 'Protect your family and assets with a comprehensive estate plan. We draft wills, trusts, and powers of attorney tailored to your specific situation.',
    items: ['Wills & living trusts', 'Powers of attorney', 'Healthcare directives', 'Estate administration', 'Probate proceedings', 'Trust litigation'],
    note: 'Estate planning packages starting at $750.',
  },
  {
    icon: Shield,
    title: 'Real Estate Law',
    tagline: 'Every transaction, protected.',
    desc: 'Whether buying, selling, or facing a real estate dispute, our attorneys ensure your investment is legally sound and your interests are fully protected.',
    items: ['Purchase & sale agreements', 'Title disputes', 'Landlord/tenant disputes', 'HOA issues', 'Construction defect claims', 'Commercial real estate'],
    note: 'Flat fees for residential closings.',
  },
];

export default function SterlingServices() {
  return (
    <>
      <section style={{ backgroundColor: NAVY }} className="py-20 px-6 md:px-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4" style={{ color: GOLD }}>Practice Areas</div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-5">How We Can Help</h1>
        <p className="text-white/55 max-w-xl mx-auto leading-relaxed">25+ years of experience across personal injury, family law, criminal defense, and business law. Free consultations. No fees unless we win on injury cases.</p>
      </section>

      <section style={{ backgroundColor: CREAM }} className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {PRACTICE_AREAS.map(({ icon: Icon, title, tagline, desc, items, note }, i) => (
            <div key={i} className="bg-white p-8 md:p-10 grid md:grid-cols-[1fr_1.5fr] gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
                  <h2 className="font-bold text-lg" style={{ color: NAVY }}>{title}</h2>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>{tagline}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="text-xs font-bold p-3 border-l-2" style={{ color: NAVY, borderColor: GOLD, backgroundColor: CREAM }}>{note}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">What We Handle</div>
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: NAVY }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">Schedule a free consultation today.</h2>
        <p className="text-white/55 mb-8">Available evenings and weekends. Direct attorney access from day one.</p>
        <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-4" style={{ backgroundColor: GOLD }}>Book Free Consultation <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </>
  );
}

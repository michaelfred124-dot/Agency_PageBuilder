"use client";
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { COLORS } from '@/constants';

const PLANS = [
  {
    name: 'DIY Template',
    price: '$20',
    interval: '/mo',
    description: 'Barebones template to get your website started.',
    features: [
      'Barebones template selection',
      'Contact form included',
      'Self-hosted',
      'Basic email support'
    ],
    color: COLORS.green,
  },
  {
    name: 'Managed Template',
    price: '$50',
    interval: '/mo',
    description: 'Hosted template with regular maintenance.',
    features: [
      'Select from templates',
      'Fast, secure hosting',
      'E-commerce included',
      'Unlimited updates (up to 2 hrs)'
    ],
    color: COLORS.orange,
    popular: true,
  },
  {
    name: 'Fully Custom',
    price: '$100',
    interval: '/mo',
    description: 'Complete custom build and growth plan.',
    features: [
      'Fully custom website',
      'Fast, secure hosting',
      'Unlimited updates',
      'SEO support & growth plan'
    ],
    color: COLORS.blue,
  }
];

export default function PricingPage() {
  return (
    <div className="pt-24 lg:pt-32 bg-[#F1EDE1] min-h-screen">
      <section className="py-20 px-4 lg:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col space-y-4 mb-16 lg:mb-24 text-center items-center">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Pricing</span>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter text-black leading-[0.9]">
              Simple, Transparent <br/>Pricing
            </h1>
            <p className="text-xl md:text-2xl text-black/80 font-medium max-w-2xl mt-6">
              No hidden fees, no surprise invoices. Pause or cancel your subscription at any time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-6 lg:p-8 rounded-[32px] border-8 border-black shadow-[10px_10px_0px_rgba(34,34,34,1)] relative bg-white flex flex-col`}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 text-xs lg:text-sm font-bold uppercase tracking-widest rounded-full border-4 border-black text-white whitespace-nowrap"
                    style={{ backgroundColor: COLORS.black }}
                  >
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </h3>
                <p className="text-black/60 font-medium mb-8 text-sm">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl lg:text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-lg font-bold text-black/40">{plan.interval}</span>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-12 text-black">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 font-bold text-[15px] leading-tight">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-black" strokeWidth={4} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/onboarding?plan=${encodeURIComponent(plan.name)}`}
                  className="w-full py-4 text-lg font-black uppercase tracking-widest rounded-xl border-4 border-black hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_rgba(34,34,34,1)] hover:shadow-[10px_10px_0px_rgba(34,34,34,1)] hover:-translate-y-1 mt-auto text-center block"
                  style={{ backgroundColor: plan.popular ? plan.color : 'white', color: plan.popular ? 'white' : 'black' }}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center p-8 lg:p-12 border-[6px] border-black rounded-[32px] bg-white shadow-[10px_10px_0px_rgba(34,34,34,1)]">
            <h4 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Own Your Code</h4>
            <p className="text-black/80 font-medium text-lg lg:text-xl leading-relaxed">
              We don't hold your website hostage. After 1 year of continuous payments, you have the option to choose whether you want to stay with our managed services for ongoing support and hosting, or <span className="font-bold underline decoration-[3px] underline-offset-4" style={{ textDecorationColor: COLORS.orange }}>export your code entirely</span>. Once exported, the website is 100% yours to manage, host, and modify as you please. No hard feelings—we know things change, and we're still friends. We can even help you set up new hosting and configuration.
            </p>
          </div>

          <div className="mt-32 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">
                Optional <span style={{ color: COLORS.orange }}>Add-ons</span>
              </h2>
              <p className="text-xl text-black/80 font-medium max-w-2xl mx-auto mt-4">
                Enhance your website with extra services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { name: "SEO Optimization", price: "$200/mo", description: "Advanced on-page SEO and monthly reporting." },
                { name: "Blog Management", price: "$300/mo", description: "2 SEO-optimized blog posts per month." },
                { name: "Logo Design", price: "$400", description: "Custom logo design and branding guidelines." },
                { name: "Custom Email Setup", price: "$50", description: "Professional email setup via Google Workspace." },
                { name: "Extra Pages", price: "$150/page", description: "Need more than what's included? Add pages a la carte." },
                { name: "Copywriting", price: "$200/page", description: "Professional copywriting to convert visitors into customers." },
              ].map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, x: -4, boxShadow: `10px 10px 0px ${COLORS.black}` }}
                  className="p-8 border-[4px] lg:border-6 border-black rounded-[24px] bg-white transition-all cursor-default"
                  style={{ boxShadow: `6px 6px 0px ${COLORS.black}` }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-black">{addon.name}</h4>
                    <span className="font-bold text-black border-[3px] border-black rounded-full px-4 py-1 text-sm bg-black/5 whitespace-nowrap self-start">{addon.price}</span>
                  </div>
                  <p className="text-black/60 font-medium">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

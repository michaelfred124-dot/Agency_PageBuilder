"use client";
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { COLORS } from '@/constants';

const PRICING_PLANS = [
  {
    name: "Standard",
    price: "$50",
    description: "Perfect for most business websites.",
    features: [
      "Hosting included",
      "Maintenance & protection",
      "Up to 2 hours of updates per month",
      "Regular hourly rate applies after 2 hours"
    ],
    color: COLORS.green
  },
  {
    name: "Advanced",
    price: "$100",
    description: "For websites needing payment integration.",
    features: [
      "Everything in Standard",
      "Payment integration",
      "Up to 2 hours of updates per month",
      "Regular hourly rate applies after 2 hours"
    ],
    color: COLORS.purple,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 bg-[#F7F8FA] px-4 lg:px-6 relative overflow-hidden border-t border-zinc-200/50 z-10">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 mt-4">
            Simple <span style={{ color: COLORS.blue }}>Plans</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, x: -4, boxShadow: `6px 6px 0px rgba(9,9,11,1)` }}
              className={`p-8 lg:p-12 border-2 border-zinc-950 rounded-3xl bg-white relative flex flex-col transition-all duration-300`}
              style={{ boxShadow: `4px 4px 0px rgba(9,9,11,1)` }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-4 right-8 px-4 py-1.5 border-2 border-zinc-950 rounded-full font-bold uppercase tracking-widest text-xs text-white shadow-[2px_2px_0px_rgba(9,9,11,1)]"
                  style={{ backgroundColor: COLORS.orange }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2" style={{ color: plan.color }}>
                {plan.name}
              </h3>
              <p className="text-zinc-500 font-semibold uppercase tracking-wider text-xs">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-2 mt-4">
                <span className="text-5xl font-black tracking-tight text-zinc-950">{plan.price}</span>
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-xs">/month</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 mt-0.5 border-2 border-zinc-950 shadow-[1.5px_1.5px_0px_rgba(9,9,11,1)]">
                      <Check className="w-3.5 h-3.5 text-zinc-950" strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-sm text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 border-2 border-zinc-950 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-zinc-950 hover:text-white transition-colors text-zinc-950 bg-white shadow-[2px_2px_0px_rgba(9,9,11,1)] cursor-pointer">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 border border-zinc-200 rounded-2xl bg-white shadow-xl shadow-zinc-150/50">
          <h4 className="text-xl font-extrabold uppercase tracking-tight text-zinc-950 mb-2">Own Your Code</h4>
          <p className="text-zinc-650 font-normal text-sm leading-relaxed">
            We don't hold your website hostage. After 1 year of continuous payments, you have the option to choose whether you want to stay with our managed services for ongoing support and hosting, or export your code entirely. Once exported, the website is 100% yours to manage, host, and modify as you please. No hard feelings—we know things change, and we're still friends. We can even help you set up new hosting and configuration.
          </p>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-zinc-950">
              Add-on <span style={{ color: COLORS.orange }}>Services</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "SEO Optimization", price: "$200/mo", description: "Advanced on-page SEO and monthly reporting." },
              { name: "Blog Management", price: "$300/mo", description: "2 SEO-optimized blog posts per month." },
              { name: "Logo Design", price: "$400", description: "Custom logo design and branding guidelines." },
              { name: "Custom Email Setup", price: "$50", description: "Professional email setup via Google Workspace." }
            ].map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2, x: -2, boxShadow: `4px 4px 0px rgba(9,9,11,1)` }}
                className="p-6 border-2 border-zinc-950 rounded-2xl bg-white transition-all cursor-default"
                style={{ boxShadow: `2.5px 2.5px 0px rgba(9,9,11,1)` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-extrabold uppercase tracking-tight text-zinc-950">{addon.name}</h4>
                  <span className="font-bold text-zinc-950 border border-zinc-950 rounded-full px-3 py-0.5 text-xs bg-zinc-50 shadow-[1.5px_1.5px_0px_rgba(9,9,11,1)]">{addon.price}</span>
                </div>
                <p className="text-zinc-500 font-normal text-xs leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

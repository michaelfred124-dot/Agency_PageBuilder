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
    <section className="py-20 lg:py-32 bg-[#F1EDE1] px-4 lg:px-6 relative overflow-hidden border-t-[6px] lg:border-t-8 border-black z-10">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Pricing</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black mt-4">
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
              whileHover={{ y: -8, x: -8, boxShadow: `16px 16px 0px ${COLORS.black}` }}
              className={`p-8 lg:p-12 border-[6px] border-black rounded-[32px] bg-white relative flex flex-col transition-all duration-300`}
              style={{ boxShadow: `10px 10px 0px ${COLORS.black}` }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-6 right-8 px-4 py-2 border-4 border-black rounded-full font-black uppercase tracking-widest text-sm bg-black text-white"
                  style={{ backgroundColor: COLORS.orange }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-black" style={{ color: plan.color }}>
                {plan.name}
              </h3>
              <p className="text-black/60 font-bold mb-8 uppercase tracking-wider text-sm">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-6xl font-black tracking-tighter text-black">{plan.price}</span>
                <span className="text-black/50 font-bold uppercase tracking-widest">/month</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-0.5 border-2 border-black">
                      <Check className="w-4 h-4 text-black" strokeWidth={4} />
                    </div>
                    <span className="font-bold text-black">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 border-[4px] border-black rounded-2xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-black">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center p-6 border-[4px] border-black rounded-[24px] bg-[#F1EDE1]" style={{ boxShadow: `6px 6px 0px ${COLORS.black}` }}>
          <h4 className="text-2xl font-black uppercase tracking-tighter text-black mb-2">Own Your Code</h4>
          <p className="text-black/80 font-medium">
            We don't hold your website hostage. After 1 year of continuous payments, you have the option to choose whether you want to stay with our managed services for ongoing support and hosting, or export your code entirely. Once exported, the website is 100% yours to manage, host, and modify as you please. No hard feelings—we know things change, and we're still friends. We can even help you set up new hosting and configuration.
          </p>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
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
                whileHover={{ y: -4, x: -4, boxShadow: `8px 8px 0px ${COLORS.black}` }}
                className="p-6 border-[4px] border-black rounded-[24px] bg-white transition-all cursor-default"
                style={{ boxShadow: `4px 4px 0px ${COLORS.black}` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-black uppercase tracking-tighter text-black">{addon.name}</h4>
                  <span className="font-bold text-black border-2 border-black rounded-full px-3 py-1 text-sm bg-black/5">{addon.price}</span>
                </div>
                <p className="text-black/60 font-medium text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

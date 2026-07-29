/**
 * Single source of truth for subscription pricing.
 *
 * The checkout API prices from THIS file using the plan id the client sends —
 * never from a price in the request body. Otherwise anyone could POST their own
 * amount and subscribe to a 10-page site for a dollar.
 */

export interface Plan {
  id: string;
  name: string;
  monthlyCents: number;
  pagesCount: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: '3-page',
    name: '3-Page Website',
    monthlyCents: 3000,
    pagesCount: 3,
    description: 'Essential multi-page presence for small local businesses.',
    features: [
      '3 Complete Full-Width Pages',
      'Home, Services & Contact',
      'Built on WordPress + Divi',
      'Custom Domain & Free SSL',
      'Managed Hosting, Backups & Updates',
      'Standard Email Support',
    ],
  },
  {
    id: '5-page',
    name: '5-Page Website',
    monthlyCents: 5000,
    pagesCount: 5,
    description: 'Complete brand showcase for growing service companies.',
    features: [
      '5 Complete Full-Width Pages',
      'Home, Services, About, Reviews, Contact',
      'Built on WordPress + Divi',
      'Google Maps & Booking Widgets',
      'On-Page SEO & Schema Setup',
      'Priority 48h Design Edits',
    ],
    popular: true,
  },
  {
    id: '10-page',
    name: '10-Page Website',
    monthlyCents: 10000,
    pagesCount: 10,
    description: 'Maximum search authority & dedicated sub-page depth.',
    features: [
      '10 Complete Full-Width Pages',
      'Dedicated Individual Service Pages',
      'Built on WordPress + Divi',
      'Custom Lead & Estimate Forms',
      'Advanced Local SEO & Schema.org',
      'WooCommerce & Mailchimp Ready',
      'Priority 24h Edits + Dedicated Team',
    ],
  },
];

export interface Addon {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
}

export const ADDONS: Addon[] = [
  {
    id: 'extra-page',
    name: 'Extra Page Add-on',
    price: '+$10/mo',
    unit: 'per page',
    description:
      'Add individual custom layout pages to any base plan. (Automatically upgrades to the 5-page or 10-page tier when hitting threshold counts.)',
  },
  {
    id: 'blog-engine',
    name: 'Blog Engine Setup',
    price: 'Counts as 1 Page',
    unit: 'layout template',
    description:
      'Adds a dynamic Blog Hub (/blog) & Article Layout. Individual published blog posts do NOT consume your page quota.',
  },
  {
    id: 'blog-writing',
    name: 'Managed Blog Article Writing',
    price: '+$30/mo',
    unit: 'flat fee',
    description:
      '2 SEO-optimized local service blog articles researched, written, and published to your site every month.',
  },
  {
    id: 'local-seo',
    name: 'Local SEO & Schema Booster',
    price: '+$25/mo',
    unit: 'flat fee',
    description:
      'Full Schema.org local business markup, Google Business Profile sync, and monthly search ranking monitoring.',
  },
  {
    id: 'priority',
    name: 'Priority 24h Rapid Turnaround',
    price: '+$15/mo',
    unit: 'flat fee',
    description: 'Jump to the top of the queue for same-day content updates and design revisions.',
  },
];

export const getPlan = (id: string): Plan | undefined => PLANS.find(p => p.id === id);

export const formatCents = (cents: number): string =>
  `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;

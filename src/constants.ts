/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project } from './types';

export const COLORS = {
  yellow: '#FFE28B',
  green: '#86DE00',
  blue: '#00B1FF',
  purple: '#8E7AFE',
  pink: '#FF6B6B',
  orange: '#FF9500',
  offWhite: '#F1EDE1',
  black: '#222222',
};

export const NAV_LINKS = [
  { name: 'Services', href: '/services', color: COLORS.green },
  { name: 'Process', href: '/process', color: COLORS.pink },
  { name: 'Work', href: '/work', color: COLORS.blue },
  { name: 'Pricing', href: '/pricing', color: COLORS.purple },
  { name: 'Contact', href: '/contact', color: COLORS.yellow },
];

export const SERVICES: Skill[] = [
  {
    title: 'Web Design',
    description: 'Bespoke, high-end web designs tailored perfectly to your brand. We do not use templates. Every pixel is crafted with intention to make you stand out.',
    icon: 'Monitor',
    color: COLORS.green,
  },
  {
    title: 'Web Development',
    description: 'Blazing fast, responsive, and accessible development. We build on modern stacks (React, Next.js, Tailwind) ensuring your site scales with your business.',
    icon: 'Code',
    color: COLORS.blue,
  },
  {
    title: 'Graphic Design',
    description: 'Beautiful branding, logo design, marketing materials, and custom illustrations to make your brand identity memorable and cohesive.',
    icon: 'PenTool',
    color: COLORS.yellow,
  },
  {
    title: 'Motion Design',
    description: 'Engaging animations, fluid micro-interactions, and visual effects to bring your digital presence to life and capture attention.',
    icon: 'Video',
    color: COLORS.pink,
  },
  {
    title: 'SEO & Performance',
    description: 'We don`t just build pretty sites. We ensure they rank well and load instantly. Technical SEO and performance optimization are built-in from day one.',
    icon: 'Search',
    color: COLORS.purple,
  },
  {
    title: 'Unlimited Requests',
    description: 'Subscribe to a plan and request as many designs or pages as you need. We deliver them one by one. Pause or cancel anytime.',
    icon: 'Infinity',
    color: COLORS.green,
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Paws & Pamper Pet Spa',
    description: 'Friendly, warm dog grooming website with cage-free ethos, booking, and community reviews.',
    tags: ['Custom Next.js', 'Pet Grooming', 'Local Business'],
    image: '/screenshots/paws-pamper.jpg',
    link: '/work/paws-and-pamper',
  },
  {
    title: 'Sterling Law Group',
    description: 'Professional, trust-driving law firm website with practice areas, stats, and case results.',
    tags: ['Cinematic Hero', 'Law Firm', 'Professional Services'],
    image: '/screenshots/sterling-law.jpg',
    link: '/work/sterling-law-group',
  },
  {
    title: 'Greenscape Landscaping',
    description: 'A full-service landscaping landing page built for local business growth.',
    tags: ['Next.js Template', 'SEO Optimized', 'Local Business'],
    image: '/screenshots/greenscape-landscaping.jpg',
    link: '/work/greenscape-landscaping',
  },
  {
    title: 'Maison Boutique',
    description: 'Luxury editorial boutique website with curated collections, brand story, and email newsletter.',
    tags: ['Shopify Sync', 'Fashion', 'Boutique'],
    image: '/screenshots/maison-boutique.jpg',
    link: '/work/maison-boutique',
  },
  {
    title: 'Iron Edge Fitness',
    description: 'High-energy personal training website with programs, client results, and pricing.',
    tags: ['Template', 'Fitness', 'Personal Training'],
    image: '/screenshots/iron-edge-fitness.jpg',
    link: '/work/iron-edge-fitness',
  },
  {
    title: 'Brighter Solar Energy',
    description: 'High-converting solar energy landing page with bold stats and trust-building design.',
    tags: ['Next.js Template', 'Services', 'Clean Energy'],
    image: '/screenshots/brighter-solar.jpg',
    link: '/work/brighter-solar',
  },
  {
    title: 'Clarity Dental Studio',
    description: 'Clean, welcoming dental practice website with services, patient reviews, and membership plans.',
    tags: ['Template', 'Dental', 'Healthcare'],
    image: '/screenshots/clarity-dental.jpg',
    link: '/work/clarity-dental',
  },
  {
    title: 'Lauren Wilson Photo',
    description: 'A beautiful, minimalist portfolio for a natural light photographer.',
    tags: ['Next.js Template', 'Portfolio', 'Photography'],
    image: '/screenshots/lauren-wilson.jpg',
    link: '/work/lauren-wilson-photo',
  },
  {
    title: 'Easy Does It Auto Detailing',
    description: 'Premium auto detailing landing page with pricing tiers, gallery, and booking CTA.',
    tags: ['Template', 'Auto Detailing', 'Local Business'],
    image: '/screenshots/easy-does-it.jpg',
    link: '/work/easy-does-it',
  },
  {
    title: 'The Golden Thread Events',
    description: 'Romantic, luxury wedding planning website with portfolio, services, and testimonials.',
    tags: ['Template', 'Wedding Planning', 'Events'],
    image: '/screenshots/golden-thread.jpg',
    link: '/work/golden-thread-events',
  },
  {
    title: 'Northwood Coffee Co.',
    description: 'A premium, handcrafted web experience for a high-end coffee shop.',
    tags: ['Next.js Template', 'Premium Design', 'React'],
    image: '/screenshots/northwood-coffee.jpg',
    link: '/work/northwood-coffee',
  },
  {
    title: 'Valley ProHome Services',
    description: 'Bold, conversion-focused contractor site for plumbers, electricians, and HVAC companies with 24/7 dispatch.',
    tags: ['Template', 'Home Services', 'Contractor'],
    image: '/screenshots/valley-prohome.jpg',
    link: '/work/valley-prohome',
  },
  {
    title: 'Atelier Hair Studio',
    description: 'Stylish, intimate hair salon website with portfolio gallery, services, and booking CTA.',
    tags: ['Template', 'Hair Salon', 'Beauty'],
    image: '/screenshots/atelier-hair.jpg',
    link: '/work/atelier-hair-studio',
  },
  {
    title: 'Meridian Properties',
    description: 'Credibility-first real estate agent website with listings, stats, and testimonials.',
    tags: ['Template', 'Real Estate', 'Professional'],
    image: '/screenshots/meridian-properties.jpg',
    link: '/work/meridian-properties',
  },
  {
    title: 'Spotless Home Co.',
    description: 'Trustworthy home cleaning service website with service packages, team intro, and reviews.',
    tags: ['Template', 'Home Cleaning', 'Local Business'],
    image: '/screenshots/spotless-home.jpg',
    link: '/work/spotless-home-co',
  },
  {
    title: 'Solstice Yoga & Wellness',
    description: 'Calm, community-driven yoga studio website with class booking, ethos, and testimonials.',
    tags: ['Template', 'Yoga', 'Wellness'],
    image: '/screenshots/solstice-yoga.jpg',
    link: '/work/solstice-yoga',
  },
  {
    title: 'Ridge Line Auto Service',
    description: 'Bold, conversion-focused auto repair website with services, process steps, and reviews.',
    tags: ['Template', 'Auto Repair', 'Local Business'],
    image: '/screenshots/ridge-line-auto.jpg',
    link: '/work/ridge-line-auto',
  }
];

export const BIO = "We are MichaelFred Designs Official. Your dedicated team for high-end web design and development. Get a world-class website as a service. Unlimited requests, transparent pricing, and lightning-fast delivery. Pause or cancel your subscription at any time.";

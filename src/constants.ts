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
    title: 'Lauren Wilson Photo',
    description: 'A beautiful, minimalist portfolio for a natural light photographer.',
    tags: ['Next.js Template', 'Portfolio', 'Photography'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    link: '/work/lauren-wilson-photo',
  },
  {
    title: 'Greenscape Landscaping',
    description: 'A full-service landscaping landing page built for local business growth.',
    tags: ['Next.js Template', 'SEO Optimized', 'Local Business'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80',
    link: '/work/greenscape-landscaping',
  },
  {
    title: 'Northwood Coffee Co.',
    description: 'A premium, handcrafted web experience for a high-end coffee shop.',
    tags: ['Next.js Template', 'Premium Design', 'React'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
    link: '/work/northwood-coffee',
  },
  {
    title: 'Brighter Solar Cleaning',
    description: 'Professional cleaning service landing page packed with features.',
    tags: ['Next.js Template', 'Services', 'Local Business'],
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80',
    link: '/work/brighter-solar',
  }
];

export const BIO = "We are MichaelFred Designs Official. Your dedicated team for high-end web design and development. Get a world-class website as a service. Unlimited requests, transparent pricing, and lightning-fast delivery. Pause or cancel your subscription at any time.";

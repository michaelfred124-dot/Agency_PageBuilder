// Single source of truth for template metadata shown in pickers
// (admin assign-site modal, onboarding, dashboard). Uses real screenshots
// from /public/screenshots where they exist; Unsplash fallback otherwise.

export interface TemplateCatalogEntry {
  key: string;
  name: string;
  desc: string;
  image: string;
}

export const TEMPLATE_CATALOG: TemplateCatalogEntry[] = [
  { key: 'easy_does_it', name: 'Easy Does It Detailing', desc: 'Premium, dark-themed mobile car detailing and automotive artistry.', image: '/screenshots/easy-does-it.jpg' },
  { key: 'northwood', name: 'Northwood Coffee Co.', desc: 'Cozy design ideal for cafés, restaurants, and local diners.', image: '/screenshots/northwood-coffee.jpg' },
  { key: 'restaurant', name: 'Osteria Bella Restaurant', desc: 'Bold, elegant layout for full-service restaurants and eateries.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400' },
  { key: 'greenscape', name: 'Greenscape Landscaping', desc: 'Fresh, professional layout for handymen, cleaners, and lawn care.', image: '/screenshots/greenscape-landscaping.jpg' },
  { key: 'lauren', name: 'Lauren Wilson Photo', desc: 'Minimalist creative space for photographers, artists, and portfolios.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600' },
  { key: 'brighter_solar', name: 'Brighter Solar Energy', desc: 'Sleek conversion-driven layout for eco businesses and clean energy.', image: '/screenshots/brighter-solar.jpg' },
  { key: 'voltvikings', name: 'Volt Vikings Electricians', desc: 'High-impact premium layout for local home service and contracting businesses.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop' },
  { key: 'precise_building_services', name: 'Precise Building Services', desc: 'Master craftsmanship, commercial & residential construction, structural steel, and remodeling.', image: '/screenshots/precise-building.jpg' },
  { key: 'auto_repair', name: 'Ridge Line Auto Service', desc: 'Bold, high-converting design for auto repair and mechanic shops.', image: '/screenshots/ridge-line-auto.jpg' },
  { key: 'hair_salon', name: 'Atelier Hair Studio', desc: 'Stylish, intimate layout for hair salons, barbers, and beauty studios.', image: '/screenshots/atelier-hair.jpg' },
  { key: 'real_estate', name: 'Meridian Properties', desc: 'Clean, credibility-first design for real estate agents and brokerages.', image: '/screenshots/meridian-properties.jpg' },
  { key: 'personal_trainer', name: 'Iron Edge Fitness', desc: 'High-energy layout for personal trainers, coaches, and fitness studios.', image: '/screenshots/iron-edge-fitness.jpg' },
  { key: 'dental', name: 'Clarity Dental Studio', desc: 'Clean, welcoming design for dental practices and medical offices.', image: '/screenshots/clarity-dental.jpg' },
  { key: 'dog_grooming', name: 'Paws & Pamper Pet Spa', desc: 'Friendly, warm layout for pet groomers, vets, and pet care services.', image: '/screenshots/paws-pamper.jpg' },
  { key: 'wedding_planner', name: 'The Golden Thread Events', desc: 'Romantic, elegant layout for wedding planners and event designers.', image: '/screenshots/golden-thread.jpg' },
  { key: 'home_cleaning', name: 'Spotless Home Co.', desc: 'Fresh, trustworthy design for cleaning services and home care companies.', image: '/screenshots/spotless-home.jpg' },
  { key: 'yoga_studio', name: 'Solstice Yoga & Wellness', desc: 'Calm, community-driven layout for yoga studios and wellness centers.', image: '/screenshots/solstice-yoga.jpg' },
  { key: 'prohome_services', name: 'Valley ProHome Services', desc: 'Bold contractor layout for plumbers, electricians, and HVAC companies.', image: '/screenshots/valley-prohome.jpg' },
  { key: 'maison_boutique', name: 'Maison Boutique', desc: 'Luxury editorial layout for fashion boutiques and lifestyle brands.', image: '/screenshots/maison-boutique.jpg' },
  { key: 'ember_rye', name: 'Ember & Rye Steakhouse', desc: 'Dark, cinematic layout for steakhouses and fine dining destinations.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400' },
  { key: 'solene_boutique', name: 'Solène Boutique', desc: 'Warm artisan layout for gift shops, makers, and curated boutiques.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400' },
  { key: 'stylish_store', name: 'Stylish Store', desc: 'Modern e-commerce layout with product grids and promo banners.', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400' },
];

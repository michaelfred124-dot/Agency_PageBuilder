import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';
const CHARCOAL = '#2A2018';

const MENU = [
  {
    course: 'Starters',
    items: [
      { name: 'Beef Tartare', desc: 'Hand-cut prime beef, quail egg, cornichon, smoked mustard, grilled crostini', price: '$22' },
      { name: 'Bone Marrow Gratin', desc: 'Roasted bone marrow, herb gremolata, pickled shallots, sourdough toast points', price: '$18' },
      { name: 'Wagyu Beef Carpaccio', desc: 'Paper-thin Wagyu, truffle aioli, shaved Parmigiano, capers, arugula', price: '$26' },
      { name: 'Burrata & Heirloom Tomato', desc: 'Stracciatella burrata, heirloom tomatoes, aged balsamic, micro basil', price: '$17' },
      { name: 'Crispy Duck Confit', desc: 'Slow-braised leg, cherry gastrique, pickled fennel, watercress', price: '$21' },
      { name: 'Lobster Bisque', desc: 'Maine lobster, cognac cream, chive oil, crème fraîche', price: '$16' },
    ],
  },
  {
    course: 'Raw Bar',
    items: [
      { name: 'Oysters on the Half Shell', desc: 'Daily selection from Pacific Northwest and East Coast, mignonette, cocktail sauce', price: 'Market' },
      { name: 'Chilled King Crab', desc: 'Alaskan king crab legs, drawn butter, lemon, horseradish cream', price: '$48' },
      { name: 'Shrimp Cocktail', desc: 'Jumbo Gulf shrimp, house cocktail sauce, fresh horseradish', price: '$22' },
      { name: 'Seafood Tower for Two', desc: 'Oysters, king crab, shrimp, lobster tail — the full spread', price: '$95' },
    ],
  },
  {
    course: 'Salads & Soups',
    items: [
      { name: 'Caesar', desc: 'Romaine hearts, house-made anchovy dressing, aged Parmigiano, focaccia croutons', price: '$14' },
      { name: 'Wedge Salad', desc: 'Iceberg, house blue cheese dressing, candied bacon, cherry tomatoes, chive', price: '$13' },
      { name: 'French Onion', desc: 'Caramelized onion broth, Gruyère crust, herbed crouton', price: '$14' },
    ],
  },
  {
    course: 'Steaks',
    note: 'All cuts dry-aged 28 days on premises · USDA Prime and Wagyu exclusively',
    items: [
      { name: 'Prime Ribeye 14oz', desc: 'Bone-in, wood-fired at 1200°F, compound bone marrow butter', price: '$72' },
      { name: 'New York Strip 12oz', desc: 'USDA Prime, hand-cut, classic preparation', price: '$58' },
      { name: 'Filet Mignon 8oz', desc: 'Center-cut beef tenderloin, red wine bordelaise', price: '$64' },
      { name: 'Tomahawk Ribeye 32oz', desc: '45-day aged, tableside carving, for two persons', price: '$145' },
      { name: 'Japanese A5 Wagyu 4oz', desc: 'Miyazaki prefectural Wagyu, minimum intervention', price: '$88' },
    ],
  },
  {
    course: "Butcher's Cuts",
    note: 'Off-cut selections — availability varies nightly',
    items: [
      { name: 'Hanger Steak 10oz', desc: 'The butcher\'s secret, chimichurri, crispy shallots', price: '$44' },
      { name: 'Flat Iron 12oz', desc: 'Underrated and marbled, rosemary garlic butter', price: '$48' },
      { name: 'Short Rib (Boneless)', desc: '72-hour braised, red wine reduction, horseradish gremolata', price: '$52' },
    ],
  },
  {
    course: 'Seafood',
    items: [
      { name: 'Butter-Poached Lobster Tail', desc: '8oz Maine lobster, tarragon beurre blanc, micro herbs', price: '$58' },
      { name: 'Day Boat Halibut', desc: 'Pan-seared, saffron beurre blanc, roasted fennel, capers', price: '$44' },
      { name: 'Seared Diver Scallops', desc: 'U10 scallops, cauliflower purée, pancetta, herb oil', price: '$38' },
    ],
  },
  {
    course: 'Sides',
    items: [
      { name: 'Truffle Parmesan Mac & Cheese', desc: 'Aged white cheddar, black truffle, Parmigiano', price: '$14' },
      { name: 'Duck Fat Roasted Potatoes', desc: 'Crispy outside, fluffy inside, rosemary salt', price: '$12' },
      { name: 'Creamed Spinach', desc: 'House classic, garlic, nutmeg, cream', price: '$11' },
      { name: 'Roasted Wild Mushrooms', desc: 'Seasonal blend, thyme, sherry, crispy garlic', price: '$13' },
      { name: 'Grilled Asparagus', desc: 'Hollandaise, lemon zest, sea salt', price: '$11' },
      { name: 'Loaded Baked Potato', desc: 'Sour cream, cheddar, chive, house-smoked bacon', price: '$10' },
    ],
  },
  {
    course: 'Desserts',
    items: [
      { name: 'Warm Chocolate Lava Cake', desc: 'Valrhona 70%, vanilla bean ice cream, caramel drizzle', price: '$14' },
      { name: 'New York Cheesecake', desc: 'Graham crust, seasonal fruit compote, whipped cream', price: '$12' },
      { name: 'Crème Brûlée', desc: 'Classic vanilla, caramelized sugar crust, fresh berries', price: '$11' },
      { name: 'Cheese Course', desc: 'Artisanal selection, seasonal accompaniments, house crackers', price: '$22' },
    ],
  },
  {
    course: 'Wine by the Glass',
    note: 'Full cellar of 200+ bottles available — ask your sommelier',
    items: [
      { name: 'Prisoner Red Blend', desc: 'Napa Valley · Zinfandel, Cabernet, Petite Sirah', price: '$22' },
      { name: 'Jordan Cabernet Sauvignon', desc: 'Alexander Valley · Structured, full-bodied', price: '$26' },
      { name: 'Duckhorn Merlot', desc: 'Napa Valley · Plum, blackberry, oak', price: '$24' },
      { name: 'Caymus Cabernet Sauvignon', desc: 'Napa Valley · Classic, concentrated, long finish', price: '$28' },
      { name: 'Rombauer Chardonnay', desc: 'Carneros · Buttery, vanilla, tropical fruit', price: '$18' },
      { name: 'Cakebread Sauvignon Blanc', desc: 'Napa Valley · Crisp, citrus, herbaceous', price: '$16' },
    ],
  },
];

export default function EmberAndRyeMenu() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 md:px-12 text-center" style={{ backgroundColor: DARK }}>
        <p
          className="text-[10px] uppercase tracking-[0.5em] mb-4"
          style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
        >
          Dinner Menu
        </p>
        <h1
          className="text-6xl md:text-7xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          The Menu
        </h1>
        <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
        <p className="text-sm" style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}>
          Served Tuesday – Sunday · Dinner from 5pm
        </p>
      </section>

      {/* Menu Body */}
      <section className="px-6 md:px-12 pb-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-3xl mx-auto">
          {MENU.map((section, si) => (
            <div key={si} className="mb-16">
              {/* Course heading */}
              <div
                className="flex items-center gap-4 mb-6 pb-4"
                style={{ borderBottom: `1px solid ${GOLD}50` }}
              >
                <h2
                  className="text-2xl tracking-wide"
                  style={{ fontFamily: 'var(--font-display)', color: GOLD, letterSpacing: '0.05em' }}
                >
                  {section.course}
                </h2>
              </div>
              {section.note && (
                <p
                  className="text-[10px] italic mb-5"
                  style={{ color: 'rgba(245,237,216,0.4)', fontFamily: 'var(--font-body)' }}
                >
                  {section.note}
                </p>
              )}
              <div className="space-y-6">
                {section.items.map((item, ii) => (
                  <div key={ii} className="flex justify-between items-start gap-6">
                    <div className="flex-1">
                      <div
                        className="text-lg mb-1"
                        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="text-xs leading-relaxed"
                        style={{ color: 'rgba(245,237,216,0.45)', fontFamily: 'var(--font-body)' }}
                      >
                        {item.desc}
                      </div>
                    </div>
                    <div
                      className="text-sm shrink-0 pt-0.5"
                      style={{ color: EMBER, fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p
            className="text-xs text-center pt-8 border-t"
            style={{ color: 'rgba(245,237,216,0.3)', borderColor: 'rgba(245,237,216,0.1)', fontFamily: 'var(--font-body)' }}
          >
            We accommodate dietary restrictions with advance notice. Please inform your server. Consuming raw or undercooked meats may increase your risk of foodborne illness.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: CHARCOAL }}>
        <h2
          className="text-3xl mb-4"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
        >
          Ready to dine?
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
          style={{ backgroundColor: EMBER, color: CREAM, fontFamily: 'var(--font-body)' }}
        >
          Reserve a Table <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </>
  );
}

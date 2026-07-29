// Schema data for the menu block family.
// Kept out of menu.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const MENU_SCHEMAS = {
  ClassicMenu: {
    description: "Classic dual-column restaurant menu with dotted price leaders and dietary badges.",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'col1Title', label: 'Column 1 Category Title', type: 'text' },
      { name: 'col1Items', label: 'Column 1 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'badge', label: 'Badge (e.g. GF, V, Chef Special)', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'col2Title', label: 'Column 2 Category Title', type: 'text' },
      { name: 'col2Items', label: 'Column 2 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'badge', label: 'Badge (e.g. GF, V, Chef Special)', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "FINE DINING EXPERIENCE",
      title: "À La Carte Menu",
      subtitle: "Handcrafted daily using fresh, locally sourced ingredients.",
      col1Title: "Starters & Appetizers",
      col1Items: [
        { name: "Truffle Burrata & Heirloom Tomato", badge: "V / GF", desc: "Aged balsamic drizzle, basil oil, toasted pine nuts, sea salt.", price: "$19" },
        { name: "Pan-Seared Sea Scallops", badge: "Chef Special", desc: "Cauliflower purée, crispy pancetta, lemon-herb butter reduction.", price: "$24" },
        { name: "Wagyu Beef Carpaccio", badge: "GF", desc: "Truffle aioli, caperberries, shaved parmesan, baby arugula.", price: "$22" },
        { name: "Wild Mushroom & Thyme Soup", badge: "V", desc: "Crème fraîche, garlic herb oil, artisan sourdough crostini.", price: "$16" }
      ],
      col2Title: "Chef's Entrées",
      col2Items: [
        { name: "Prime Black Angus Ribeye (14oz)", badge: "Gluten Free", desc: "Rosemary garlic butter, truffle mashed potatoes, roasted asparagus.", price: "$52" },
        { name: "Chilean Sea Bass", badge: "Fresh Catch", desc: "Saffron risotto, braised baby fennel, citrus beurre blanc.", price: "$46" },
        { name: "Handmade Lobster Ravioli", badge: "Signature", desc: "Maine lobster, tarragon cream, shaved black truffle, aged parmesan.", price: "$38" },
        { name: "Roasted Herb Chicken Breast", badge: "GF", desc: "Wild mushroom ragù, roasted fingerling potatoes, pan jus.", price: "$32" }
      ]
    }
  },

  ModernCardMenu: {
    description: "Modern 3-column visual menu with item photo cards, category filters, and tags.",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'items', label: 'Menu Cards', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'category', label: 'Category Tag', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'image', label: 'Image URL', type: 'text' },
        { name: 'badge', label: 'Featured Badge', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "EXPLORE OUR DISHES",
      title: "Featured Specialties",
      subtitle: "Browse our signature creations designed to delight every palate.",
      items: [
        {
          name: "Artisanal Pepperoni Pizza",
          category: "Pizzas",
          desc: "Slow-fermented dough, San Marzano tomato sauce, fresh mozzarella, spicy salami.",
          price: "$22",
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
          badge: "Popular"
        },
        {
          name: "Gourmet Wagyu Burger",
          category: "Mains",
          desc: "Aged cheddar, caramelized onions, truffle mayo, brioche bun, house fries.",
          price: "$26",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
          badge: "Best Seller"
        },
        {
          name: "Fresh Salmon Power Bowl",
          category: "Bowls & Salads",
          desc: "Grilled Atlantic salmon, quinoa, avocado, edamame, sesame ginger dressing.",
          price: "$24",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
          badge: "Healthy Choice"
        },
        {
          name: "Crispy Korean Fried Chicken",
          category: "Starters",
          desc: "Double-fried chicken wings coated in sweet garlic soy glaze and sesame seeds.",
          price: "$18",
          image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
          badge: "Spicy"
        },
        {
          name: "Creamy Fettuccine Alfredo",
          category: "Pasta",
          desc: "Fresh egg fettuccine tossed in parmigiano cream butter sauce with herbs.",
          price: "$21",
          image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281358?q=80&w=800&auto=format&fit=crop",
          badge: "Classic"
        },
        {
          name: "Decadent Chocolate Lava Cake",
          category: "Desserts",
          desc: "Warm molten chocolate core, served with vanilla bean ice cream & berries.",
          price: "$14",
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
          badge: "Sweet Finish"
        }
      ]
    }
  },

  CozyBoardMenu: {
    description: "Warm rustic café chalkboard menu with sections for Coffee, Bakery, and Brunch.",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'note', label: 'Notice / Hours Note', type: 'text' },
      { name: 'sec1Title', label: 'Section 1 Name', type: 'text' },
      { name: 'sec1Items', label: 'Section 1 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'sec2Title', label: 'Section 2 Name', type: 'text' },
      { name: 'sec2Items', label: 'Section 2 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'sec3Title', label: 'Section 3 Name', type: 'text' },
      { name: 'sec3Items', label: 'Section 3 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "BREWED WITH LOVE DAILY",
      title: "Café & Bakery Board",
      note: "Served Fresh 7:00 AM – 4:00 PM Daily",
      sec1Title: "Espresso & Drinks",
      sec1Items: [
        { name: "Single Origin Pour Over", desc: "Ethiopian Yirgacheffe notes of jasmine & berry", price: "$5.50" },
        { name: "Vanilla Bean Oat Latte", desc: "House vanilla bean syrup, microfoam, espresso", price: "$6.25" },
        { name: "Honey Lavender Cappuccino", desc: "Local wildflower honey, dried lavender buds", price: "$6.00" },
        { name: "Iced Matcha Tea Latte", desc: "Ceremonial grade Japanese matcha, oat milk", price: "$6.50" }
      ],
      sec2Title: "Fresh Baked Goods",
      sec2Items: [
        { name: "Butter Croissant", desc: "Flaky 81-layer French butter croissant", price: "$4.50" },
        { name: "Almond Frangipane Tart", desc: "Sliced almonds, toasted butter crust", price: "$5.75" },
        { name: "Blueberry Lemon Scone", desc: "Fresh blueberries, sweet lemon glaze", price: "$4.75" },
        { name: "Dark Chocolate Brownie", desc: "Fudgey chocolate, sea salt flakes", price: "$4.25" }
      ],
      sec3Title: "Brunch Plates",
      sec3Items: [
        { name: "Avocado Toast Special", desc: "Poached eggs, sourdough, dukkah, microgreens", price: "$14.50" },
        { name: "Smoked Salmon Bagel", desc: "Everything bagel, dill cream cheese, capers", price: "$16.00" },
        { name: "Ricotta Hotcakes", desc: "Honeycomb butter, fresh berries, maple syrup", price: "$15.00" },
        { name: "Breakfast Grain Bowl", desc: "Quinoa, roasted veggies, fried egg, pesto", price: "$14.00" }
      ]
    }
  },

  EditorialSteakhouseMenu: {
    description: "Cinematic dark luxury menu layout with gold accents, raw bar, prime steaks & wine pairings.",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'col1Title', label: 'Column 1 Title', type: 'text' },
      { name: 'col1Items', label: 'Column 1 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'col2Title', label: 'Column 2 Title', type: 'text' },
      { name: 'col2Items', label: 'Column 2 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "STEAKHOUSE & RAW BAR",
      title: "The Evening Collection",
      subtitle: "USDA Prime 45-Day Dry Aged Steaks & Fresh Pacific Seafood",
      col1Title: "Raw Bar & Starters",
      col1Items: [
        { name: "Pacific Oysters (Half Dozen)", desc: "Mignonette, house cocktail sauce, fresh horseradish", price: "$28" },
        { name: "Jumbo Blue Crab Cake", desc: "Whole grain mustard remoulade, pickled cucumber salad", price: "$26" },
        { name: "Charred Spanish Octopus", desc: "Smoked paprika oil, fingerling potatoes, romesco sauce", price: "$25" },
        { name: "Classic French Onion Soup", desc: "Caramelized onions, rich beef brodo, gruyère cheese crust", price: "$18" }
      ],
      col2Title: "Prime Aged Cuts",
      col2Items: [
        { name: "Dry Aged Bone-In Kansas City Strip (18oz)", desc: "45-day dry aged, roasted garlic bone marrow butter", price: "$74" },
        { name: "Center Cut Filet Mignon (8oz)", desc: "Ultra-tender USDA Prime, red wine demi-glace sauce", price: "$62" },
        { name: "Tomahawk Ribeye for Two (40oz)", desc: "Long-bone prime ribeye served carved with chimichurri", price: "$145" },
        { name: "Pan Roasted Halibut", desc: "Wild mushrooms, sweet corn purée, brown butter emulsion", price: "$48" }
      ]
    }
  }
};

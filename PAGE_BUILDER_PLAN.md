# Page Builder Architecture Plan
**Goal:** Build an Elementor/Builder.io-like page builder where users drag-drop premade blocks to create full websites in minutes.

---

## 1. Core Architecture

### 1.1 Block System
- **Blocks are Next.js Components** in `/src/lib/blocks/[category]/`
- Each block exports:
  - `Component`: The visual React component
  - `schema`: Configuration/props interface
  - `defaultProps`: Pre-filled values
  - `thumbnail`: Preview image for block library
  - `category`: 'hero', 'content', 'cta', 'form', 'social', etc.
  - `presets`: 3-5 style variations

**Example block structure:**
```typescript
// src/lib/blocks/hero/HeroV1.tsx
export const HeroV1 = ({ title, subtitle, image, cta, bgColor }) => (...)
export const schema = {
  title: { type: 'text', label: 'Headline' },
  subtitle: { type: 'text', label: 'Subheading' },
  image: { type: 'image', label: 'Background Image' },
  cta: { type: 'text', label: 'Button Text' },
  bgColor: { type: 'color', label: 'Background Color' },
}
export const defaultProps = { title: 'Your Headline Here', ... }
export const presets = [
  { name: 'Light', values: { bgColor: '#fff', ... } },
  { name: 'Dark', values: { bgColor: '#000', ... } },
]
```

### 1.2 Block Registry
- `/src/lib/blockRegistry.ts` — Master catalog of all available blocks
- Dynamically loads blocks from directories
- Indexed by category for fast lookup
- Includes search/filtering capabilities

```typescript
export const BLOCK_REGISTRY = {
  hero: [
    { id: 'hero-v1', name: 'Hero V1', component: HeroV1, ... },
    { id: 'hero-v2', name: 'Hero V2', component: HeroV2, ... },
  ],
  testimonial: [
    { id: 'testimonial-card', ... },
    { id: 'testimonial-grid', ... },
  ],
  ...
}
```

### 1.3 Canvas Data Structure
- `/src/types/page.ts` — Define page/section data model

```typescript
interface PageSection {
  id: string;
  blockId: string;  // e.g., 'hero-v1'
  props: Record<string, any>;
  customCSS?: string;
  locked?: boolean;
  metadata?: {
    name?: string;
    notes?: string;
  };
}

interface Page {
  id: string;
  name: string;
  sections: PageSection[];
  globalStyles?: {
    fontFamily?: string;
    primaryColor?: string;
    ...
  };
  createdAt: number;
  updatedAt: number;
}
```

---

## 2. Block Library (Initial Launch)

### 2.1 Hero Blocks (3 variants)
- `hero-image-left` — Image on left, text right
- `hero-video` — Video background with overlay
- `hero-split` — 50/50 split with gradient

### 2.2 Content Blocks (4 variants)
- `text-section` — Flexible text with formatting
- `image-text-stack` — Image + text, toggle order
- `2-column-grid` — Two-column content grid
- `feature-list` — 3-6 feature cards in grid

### 2.3 Testimonial Blocks (3 variants)
- `testimonial-single` — One featured testimonial
- `testimonial-carousel` — Swipeable testimonials
- `testimonial-grid` — 3-6 testimonials in grid

### 2.4 CTA Blocks (2 variants)
- `cta-banner` — Full-width CTA with button
- `cta-card` — Card-style CTA section

### 2.5 Form Blocks (2 variants)
- `contact-form` — Name, email, message fields
- `email-signup` — Email capture with optional first name

### 2.6 Pricing Blocks (2 variants)
- `pricing-table` — Rows of pricing tiers
- `pricing-cards` — Side-by-side pricing cards

### 2.7 Gallery Blocks (2 variants)
- `gallery-grid` — Responsive image grid
- `gallery-carousel` — Swipeable image gallery

### 2.8 Social Blocks (2 variants)
- `social-icons` — Icon links to social profiles
- `social-feed` — Instagram-style feed grid

### 2.9 Footer Block (1 variant)
- `footer-multi-column` — Logo, links, contact, social, copyright

### 2.10 Navigation Block (1 variant)
- `navbar-sticky` — Sticky top nav with mobile hamburger

**Total: ~25 blocks across 10 categories**

---

## 3. User Interface

### 3.1 Editor Layout
```
┌─────────────────────────────────────┐
│  Page Title  │ Preview │ Publish    │
├──────┬───────┴─────────┴────────────┤
│ Blk  │                              │
│ Lib  │         Canvas               │
│      │      (Draggable)             │
│      │                              │
│ ─────┤     Add Block + / ────────   │
│ Props│         Toolbar              │
│      │                              │
└──────┴────────────────────────────────┘
```

### 3.2 Block Library (Left Sidebar)
- **Search bar** — Filter blocks by name/tag
- **Categories** — Hero, Content, CTA, Form, etc.
- **Blocks grid** — Thumbnails with drag handles
- **Drag to canvas** — Adds new section
- **Favorites** — Star frequently-used blocks

### 3.3 Canvas (Center)
- **Vertical stacked layout** — Sections touch (no gaps)
- **Hover effects** — Highlight section, show toolbar
- **Click to select** — Outline + props panel updates
- **Drag to reorder** — Smooth animation
- **Add section button** — Between sections
- **Live preview** — Real-time updates as user edits

### 3.4 Props Panel (Right Sidebar)
- **Tabs:**
  - `Content` — Text, images, links specific to block
  - `Style` — Colors, fonts, spacing, shadows
  - `Layout` — Width, alignment, padding, margin
  - `Advanced` — Custom CSS, animations, SEO (meta tags)

- **Field types:**
  - Text input, textarea, number, color picker
  - Image upload with Unsplash integration
  - Dropdown select (variants, options)
  - Checkbox, toggle
  - URL input with auto-link detection
  - Date picker, time picker

---

## 4. Key Features

### 4.1 Drag & Drop
- Reorder sections by dragging
- Add new blocks from library
- Smooth animations
- Undo/redo stack
- Keyboard shortcuts (delete, duplicate, up/down)

### 4.2 Real-Time Preview
- WYSIWYG editing
- Responsive preview (desktop, tablet, mobile)
- Toggle preview/edit mode
- Live color/text updates

### 4.3 Block Customization
- **Color system** — Brand color picker + presets
- **Typography** — Font family, size, weight, line-height
- **Spacing** — Padding, margin, gaps (visual controls)
- **Effects** — Shadows, borders, opacity, blur
- **Animation** — Entrance animations (fade, slide, etc.)

### 4.4 Templates & Presets
- **Save as template** — Users can save their design as reusable template
- **Preset variations** — Each block has light/dark/bold presets
- **Industry templates** — Pre-designed full pages (agency, ecommerce, blog, etc.)
- **Import/export** — JSON export for portability

### 4.5 Responsiveness
- **Mobile-first approach** — Responsive settings per breakpoint
- **Toggle breakpoints** — Desktop, tablet, mobile
- **Responsive text sizes** — Auto-scale font sizes
- **Hide on mobile** — Toggle blocks per breakpoint

### 4.6 SEO & Meta
- **Page title, description, keywords**
- **OG tags** for social sharing
- **Structured data** (schema.org)
- **Alt text** for images
- **Heading hierarchy** validation

---

## 5. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Block component structure & registry
- [ ] Canvas layout (vertical stacking)
- [ ] Basic props editor (text, color, image)
- [ ] Drag-drop reordering
- [ ] 5 core block types (Hero, Text, CTA, Testimonial, Footer)

### Phase 2: Block Library Expansion (Week 2-3)
- [ ] Add 15+ more blocks across categories
- [ ] Block presets/variations
- [ ] Unsplash image integration
- [ ] Component library documentation

### Phase 3: Advanced Editing (Week 3-4)
- [ ] Spacing/layout visual editor
- [ ] Typography controls
- [ ] Animation/transition options
- [ ] Custom CSS editor
- [ ] Responsive breakpoints

### Phase 4: Templates & Publishing (Week 4-5)
- [ ] Save/load pages
- [ ] Template system
- [ ] Publish to domain
- [ ] Version history
- [ ] Collaboration (if time permits)

---

## 6. Technical Stack

### Frontend
- **Next.js** — Page rendering + API
- **React** — Component library
- **TailwindCSS** — Default styling
- **dnd-kit** — Drag-drop (already installed)
- **Framer Motion** — Animations
- **zustand** — State management (already using)

### Backend/Storage
- **Vercel KV** (if needed for speed)
- **PostgreSQL** — Page/block data persistence
- **AWS S3** — Image uploads
- **Clerk/Auth0** — User authentication

### External APIs
- **Unsplash API** — Free stock images
- **Stripe** (future) — Monetization

---

## 7. File Structure

```
src/
├── lib/
│   ├── blocks/                    # All block components
│   │   ├── hero/
│   │   │   ├── HeroV1.tsx
│   │   │   ├── HeroV2.tsx
│   │   │   └── index.ts
│   │   ├── testimonial/
│   │   ├── cta/
│   │   ├── form/
│   │   └── ... (other categories)
│   ├── blockRegistry.ts           # Master block catalog
│   ├── pageStore.tsx              # Zustand page state
│   ├── blockParser.ts             # Convert block JSON → component
│   └── utils/
│       ├── sanitize.ts            # HTML/CSS sanitization
│       └── responsive.ts          # Breakpoint helpers
├── components/
│   ├── PageBuilder/
│   │   ├── Canvas.tsx             # Main editor canvas
│   │   ├── BlockLibrary.tsx        # Left sidebar
│   │   ├── PropsPanel.tsx          # Right sidebar
│   │   ├── BlockRenderer.tsx       # Render individual block
│   │   └── Toolbar.tsx             # Top toolbar
│   └── ui/
│       ├── ColorPicker.tsx
│       ├── SpacingControl.tsx
│       └── ... (common UI components)
├── types/
│   ├── page.ts                    # PageSection, Page interfaces
│   └── block.ts                   # Block schema types
├── app/
│   ├── builder/
│   │   ├── [pageId]/page.tsx      # Editor page
│   │   └── templates/page.tsx     # Template gallery
│   └── preview/
│       └── [pageId]/page.tsx      # Live preview
└── public/
    └── block-thumbnails/          # Block preview images
```

---

## 8. Best Practices

### Reusability
- Every block is a pure functional component
- Props are the only input (no internal state except UI)
- Export schema + defaultProps with each block
- Use TailwindCSS for consistent styling

### Performance
- Lazy-load block components on demand
- Memoize blocks to prevent unnecessary re-renders
- Optimize images (WebP, srcset)
- Code-split block categories

### Maintainability
- Block schema is single source of truth for props
- Auto-generate prop forms from schema
- Document each block with examples
- Use TypeScript strict mode

### User Experience
- Undo/redo for all actions
- Auto-save every 30 seconds
- Keyboard shortcuts (⌘+Z, ⌘+D, etc.)
- Confirmation before delete
- Helpful error messages

---

## 9. Future Enhancements

- [ ] AI content generation (headlines, descriptions)
- [ ] A/B testing variants
- [ ] Analytics integration
- [ ] Email capture & automation
- [ ] Collaboration & comments
- [ ] Advanced animations (scroll triggers, parallax)
- [ ] Custom domain mapping
- [ ] Themes/design system manager
- [ ] Marketplace for 3rd-party blocks

---

## 10. Success Metrics

- Users can build a basic site in < 10 minutes
- Block library reaches 50+ blocks
- 90%+ component reusability
- Page load time < 2s
- Mobile responsiveness by default

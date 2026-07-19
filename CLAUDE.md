# Michaelfred Designs Agency — Code Guide

## Overview
This is a Next.js web-design agency platform. **The designer hand-codes each client site in code; clients get a simple on-canvas editor for text and images only** (Payload-CMS-like, Elementor-style inline editing). There is no client-facing drag-drop page builder anymore. Each showcase site in `/src/app/work/[site-name]/` is a complete, multi-page Next.js app with its own layout, nav, and styling, using a **traditional flowing layout** — sections stack full-width top to bottom, edge-to-edge.

## Code-First Client Site Workflow (THE core architecture)

1. **Design in code**: build the site as a block family in `src/lib/blocks/<family>.tsx` following the `voltvikings.tsx` pattern — exported section components that accept `isEditable` / `onPropChange` props (wire `EditableText` for inline text), plus `*_SCHEMAS` (field metadata: `name`/`label`/`type: 'text'|'textarea'|'image'|...` + `defaultProps`) and `*_RENDERERS` exports, registered in `src/lib/blocks.tsx` (`ComponentType` union, `COMPONENT_SCHEMAS`, `Renderers`).
2. **Register the template**: add a `TEMPLATES.<key>` section array and (for multi-page) `TEMPLATE_PAGES.<key>` entry in `src/lib/templates.ts`; add catalog metadata (name/screenshot) in `src/lib/templateCatalog.ts`. The showcase page under `/work/` should be a one-liner: `<TemplatePageRenderer templateKey="<key>" />`.
3. **Assign to a client**: Admin CRM (`/admin/clients` → user drawer → Sites tab → "Assign New Site") calls `POST /api/admin/client` (`action: 'create'` with `owner_id` + `template_key`), which deep-clones the template's pages into `sites_data` rows for a new tenant.
4. **Client edits**: `/dashboard` opens `src/components/dashboard/ClientSiteEditor.tsx` for tenant-backed sites — click text to edit inline, click images to swap (upload via `POST /api/upload` → Supabase Storage `site-images` bucket, or stock search). Saves go through `PATCH /api/site/[tenantId]`, which **enforces text/image-only server-side** (merges only string props; structure is immutable from the client side).
5. **Live rendering**: unchanged — `tenants` + `sites_data` rendered by `/tenants/[domain]/[[...slug]]` via middleware subdomain/custom-domain rewrites.

**Deprecated (do not invest in):** the drag-drop `SiteEditor.tsx` (still used for local-only drafts, pending removal), `draftService.ts`/`drafts` table, `undoRedoStore.ts`, the Bento chain (except the `BentoPublishedGrid` legacy fallback in the tenant route).

## Layout & Styling Standards

### Traditional Flowing Layout (Default)
The site builder and all sites use a **traditional flowing layout** — sections stack full-width from top to bottom, touching edge-to-edge. This matches standard website builders and is how all sites are displayed.

**Implementation:**
- Editor canvas (`BentoCanvas.tsx`): `flex flex-col gap-0` for stacked sections
- Published sites (`BentoPublishedGrid.tsx`): `flex flex-col` for flowing vertical layout
- Sections are full-width (`w-full`) with `height: auto`
- No gaps or spacing between sections — they touch
- Individual sections define their own internal padding/spacing

**Pattern:**
- Clean, continuous vertical flow
- Each section is a complete, full-width block
- Sections can have their own backgrounds, images, content
- Users drag/drop sections to reorder in the flowing order
- Matches how tools like Webflow, Wix, Squarespace work

## Site Structure

Each site in `/src/app/work/` follows this pattern:
```
/work/site-name/
  page.tsx              # Home page
  layout.tsx            # Shared layout + footer
  /services/page.tsx    # (optional)
  /about/page.tsx       # (optional)
  /reviews/page.tsx     # (optional)
  /contact/page.tsx     # (optional)
  /components/templates/[abbr]/Nav.tsx  # Site navigation
```

### Color Constants
Define at the top of each page file:
```tsx
const BLUE = '#1B6EB5';
const LIGHT = '#EBF4FF';
```

Use inline `style={{ color: BLUE }}` rather than Tailwind color classes for brand colors.

### Images
- Use Next.js `Image` component with `fill` prop for full-width backgrounds
- Always include `referrerPolicy="no-referrer"` for Unsplash URLs
- Store screenshots in `/public/screenshots/`

### Icons & Accents
- Use Lucide React icons
- Import only what's needed
- Remove unused imports to avoid lint hints

### Styling Approach
- Tailwind CSS for layout and spacing
- Inline `style={}` for brand color variables (defined at top)
- No magic numbers — use consistent spacing (px-6, py-20, gap-8, etc.)
- Mobile-first: `grid-cols-2 md:grid-cols-4` pattern

## Recent Projects

### Paws & Pamper (Complete)
- 5-page site: home, services, about, reviews, contact
- Blue/white professional grooming brand (`BLUE = '#1B6EB5'`, `LIGHT = '#EBF4FF'`)
- All pages rebuilt in flowing layout with consistent color palette

### Sterling Law Group (Complete)
- Cinematic hero + trust strip + editorial layout
- Dark luxury aesthetic (`BG = '#09090B'`, `GOLD = '#C9A84C'`)

## Screenshots
- Run `npm run screenshot` to capture all work pages
- Updates `/public/screenshots/*.jpg`
- Automatically referenced in dashboard & onboarding preview cards

## Page Builder Block System

### Block Component Structure
Blocks are reusable Next.js components that live in `/src/lib/blocks/[category]/`. Each block exports:

1. **Component** — The React functional component
2. **schema** — Props interface (tells the editor what fields to show)
3. **defaultProps** — Pre-filled starting values
4. **presets** — 3-5 style variations (light/dark/bold)
5. **category** — 'hero', 'content', 'cta', 'form', 'social', 'footer', etc.

**Example:**
```typescript
// src/lib/blocks/hero/HeroImageLeft.tsx
export const HeroImageLeft = ({ title, subtitle, image, cta, bgColor }) => (...)

export const schema = {
  title: { type: 'text', label: 'Headline', required: true },
  subtitle: { type: 'textarea', label: 'Subheading' },
  image: { type: 'image', label: 'Hero Image' },
  cta: { type: 'text', label: 'Button Text' },
  bgColor: { type: 'color', label: 'Background' },
}

export const defaultProps = {
  title: 'Your Headline Here',
  subtitle: 'Short subheading',
  cta: 'Get Started',
  bgColor: '#ffffff',
}

export const presets = [
  { name: 'Light', values: { bgColor: '#fff', ... } },
  { name: 'Dark', values: { bgColor: '#1a1a1a', ... } },
]
```

### Block Registry
- `/src/lib/blockRegistry.ts` catalogs all blocks by category
- Auto-discovered from directory structure
- Enables block library UI and drag-drop

### Field Types Supported
- `text` — Single-line text input
- `textarea` — Multi-line text with formatting
- `color` — Color picker
- `image` — Image upload + Unsplash integration
- `select` — Dropdown options
- `number` — Number input (spacing, sizes)
- `url` — Link input
- `toggle` — Boolean checkbox
- `richtext` — HTML editor

### Designer Tips
- Keep props minimal (< 8 props per block)
- Use TailwindCSS for styling
- Make blocks responsive by default
- Add helpful placeholder text
- Use consistent spacing/colors

## Notes
- Keep sections continuous and connected — no floating cards by default
- Traditional flowing layout is the standard
- Each site should feel like a complete, professional website, not a collection of isolated components
- See `PAGE_BUILDER_PLAN.md` for detailed architecture and roadmap

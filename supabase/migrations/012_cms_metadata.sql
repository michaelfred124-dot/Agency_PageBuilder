-- ============================================================
-- 012: CMS Metadata — page nav labels/ordering, per-page SEO, favicon
--
-- sites_data has been unaltered since 001_create_tenants_schema.sql: no
-- display name, no ordering, no SEO fields. Page tab labels have been
-- hardcoded client-side (PAGE_LABELS map in ClientSiteEditor.tsx) and every
-- page of a tenant site has shared the exact same <title>/description
-- (generateMetadata only ever read tenant.name, ignoring which page was
-- being viewed).
-- ============================================================

ALTER TABLE sites_data ADD COLUMN IF NOT EXISTS nav_label TEXT;
ALTER TABLE sites_data ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0;
ALTER TABLE sites_data ADD COLUMN IF NOT EXISTS show_in_nav BOOLEAN DEFAULT true;
ALTER TABLE sites_data ADD COLUMN IF NOT EXISTS seo_title TEXT;
ALTER TABLE sites_data ADD COLUMN IF NOT EXISTS seo_description TEXT;
ALTER TABLE sites_data ADD COLUMN IF NOT EXISTS og_image TEXT;

-- Site-wide (not per-page) favicon. Deliberately not reusing tenants.image,
-- which is already the dashboard preview thumbnail.
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS favicon_url TEXT;

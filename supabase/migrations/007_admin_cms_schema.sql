-- Create CMS Tables for Admin
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    image_url TEXT,
    price TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.portfolio_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    client_name TEXT,
    project_url TEXT,
    image_url TEXT,
    category TEXT,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.site_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    template_key TEXT UNIQUE NOT NULL,
    description TEXT,
    preview_url TEXT,
    image_url TEXT,
    category TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_templates ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active services
CREATE POLICY "Public can view active services" ON public.services
    FOR SELECT USING (is_active = true);

-- Allow public read access to published portfolio items
CREATE POLICY "Public can view published portfolio items" ON public.portfolio_items
    FOR SELECT USING (is_published = true);

-- Allow public read access to active templates
CREATE POLICY "Public can view active templates" ON public.site_templates
    FOR SELECT USING (is_active = true);

-- Allow admins full access to services
CREATE POLICY "Admins have full access to services" ON public.services
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Allow admins full access to portfolio items
CREATE POLICY "Admins have full access to portfolio items" ON public.portfolio_items
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Allow admins full access to site templates
CREATE POLICY "Admins have full access to site templates" ON public.site_templates
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

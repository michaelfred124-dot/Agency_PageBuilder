"use client";
import React, { useEffect, useState, use } from 'react';
import { Renderers, SectionData } from '@/lib/blocks';
import PreviewWrapper from '@/components/PreviewWrapper';
import { TEMPLATES } from '@/lib/templates';

export default function PreviewPage({ params }: { params: Promise<{ siteId: string }> }) {
  const resolvedParams = use(params);
  const siteId = resolvedParams.siteId;

  const [sections, setSections] = useState<SectionData[]>([]);
  const [theme, setTheme] = useState<any>(null);
  const [siteName, setSiteName] = useState<string>('Site Preview');

  useEffect(() => {
    // 1. Get site metadata to retrieve templateKey and name
    const savedSitesRaw = localStorage.getItem('my-sites');
    let templateKey = '';
    let name = 'Site Preview';

    if (savedSitesRaw) {
      try {
        const sites = JSON.parse(savedSitesRaw);
        const currentSite = sites.find((s: any) => s.id === siteId);
        if (currentSite) {
          templateKey = currentSite.templateKey;
          name = currentSite.name;
        }
      } catch (e) {
        console.error("Error parsing my-sites", e);
      }
    }

    // Fallback template key if it is a template ID
    if (!templateKey && siteId.startsWith('template-')) {
      if (siteId.includes('lauren')) templateKey = 'lauren';
      else if (siteId.includes('greenscape')) templateKey = 'greenscape';
      else if (siteId.includes('northwood')) templateKey = 'northwood';
      else if (siteId.includes('brighter')) templateKey = 'brighter_solar';
      
      name = siteId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    setSiteName(name);

    // 2. Get sections
    const savedSections = localStorage.getItem(`site-sections-${siteId}`);
    if (savedSections) {
      try {
        setSections(JSON.parse(savedSections));
      } catch (e) {
        console.error("Error parsing saved sections", e);
      }
    } else if (templateKey && TEMPLATES[templateKey]) {
      setSections(TEMPLATES[templateKey]);
    }

    // 3. Get theme
    const savedTheme = localStorage.getItem(`site-theme-${siteId}`);
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (e) {
        console.error("Error parsing saved theme", e);
      }
    }
  }, [siteId]);

  return (
    <PreviewWrapper title={siteName} theme={theme}>
      <div className="w-full flex-1 flex flex-col pb-32">
        {sections.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-black/40 bg-white">
             <p className="font-black uppercase tracking-widest text-sm">No sections yet</p>
          </div>
        ) : (
          sections.map((section) => {
            const Renderer = Renderers[section.type];
            if (!Renderer) return null;
            const overrides = section.styleOverrides || {};
            const wrapperStyle: React.CSSProperties = {
              paddingTop: overrides.paddingTop || undefined,
              paddingBottom: overrides.paddingBottom || undefined,
              textAlign: overrides.textAlign || undefined,
              borderWidth: overrides.borderWidth || undefined,
              borderColor: overrides.borderColor || undefined,
              borderStyle: overrides.borderWidth ? 'solid' : undefined,
              backgroundColor: overrides.backgroundColor || undefined,
            };
            const shadowClass = {
              none: '',
              sm: 'shadow-sm',
              md: 'shadow-md',
              lg: 'shadow-lg',
              xl: 'shadow-[8px_8px_0px_rgba(0,0,0,1)]'
            }[overrides.shadowSize as string || 'none'] || '';

            return (
              <div 
                key={section.id}
                className={shadowClass}
                style={wrapperStyle}
                data-custom-bg={overrides.backgroundColor ? 'true' : 'false'}
                data-custom-align={overrides.textAlign || 'default'}
              >
                 <Renderer {...section.props} buttonText={overrides.buttonText || section.props.buttonText} />
              </div>
            );
          })
        )}
      </div>
    </PreviewWrapper>
  );
}

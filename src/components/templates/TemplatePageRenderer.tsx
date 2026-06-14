"use client";
import React from 'react';
import { Renderers } from '@/lib/blocks';
import { TEMPLATES } from '@/lib/templates';

interface TemplatePageRendererProps {
  templateKey: string;
}

export default function TemplatePageRenderer({ templateKey }: TemplatePageRendererProps) {
  const sections = TEMPLATES[templateKey] || [];

  return (
    <div className="@container min-h-screen">
      {sections.map((section) => {
        const Renderer = Renderers[section.type];
        if (!Renderer) return null;
        return (
          <div key={section.id} style={section.styleOverrides as React.CSSProperties}>
            {Renderer(section.props)}
          </div>
        );
      })}
    </div>
  );
}

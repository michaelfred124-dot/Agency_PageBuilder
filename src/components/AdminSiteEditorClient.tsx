"use client";

import { useRouter } from 'next/navigation';
import SiteEditor from '@/components/SiteEditor';

interface AdminSiteEditorClientProps {
  siteName: string;
  tenantId: string;
  initialPages?: any[];
  initialTheme?: any;
  planTier?: string;
}

export default function AdminSiteEditorClient({
  siteName,
  tenantId,
  initialPages,
  initialTheme,
  planTier,
}: AdminSiteEditorClientProps) {
  const router = useRouter();

  const save = async (pages: any[], theme: any) => {
    const response = await fetch(`/api/admin/sites/${tenantId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pages, theme }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || 'Unable to save this site.');
    }
    if (result.warnings?.length) {
      console.warn('[Admin site save warnings]', result.warnings);
    }
    return result;
  };

  return (
    <SiteEditor
      siteName={siteName}
      siteId={tenantId}
      tenantId={tenantId}
      initialPages={initialPages}
      initialTheme={initialTheme}
      planTier={planTier}
      onBack={() => router.push('/admin')}
      onSave={save}
      onPublish={save}
    />
  );
}

import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';

/**
 * API Route: /api/media
 *
 * Media library for the site editors.
 *
 * GET ?tenantId=<uuid>  → list media rows the caller may use:
 *   - the tenant's media (if caller owns the tenant or is admin)
 *   - plus the caller's personal (unattached) uploads
 *   Without tenantId: just the caller's own uploads.
 *
 * DELETE ?id=<uuid>     → delete a media row (owner or admin) and its
 *   storage object (best-effort).
 */

const BUCKET = 'site-images';
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;
  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
  return adminEmails.includes(email);
}

async function getAuthedUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthedUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: please log in.' }, { status: 401 });
    }

    const serviceClient = getSupabaseServerClient();
    const rawTenantId = request.nextUrl.searchParams.get('tenantId');
    const tenantId = rawTenantId && UUID_RE.test(rawTenantId) ? rawTenantId : null;

    let query = serviceClient
      .from('site_media')
      .select('id, tenant_id, url, name, type, created_at')
      .order('created_at', { ascending: false })
      .limit(200);

    if (tenantId) {
      const { data: tenant } = await serviceClient
        .from('tenants')
        .select('id, owner_id')
        .eq('id', tenantId)
        .single();
      if (!tenant) {
        return NextResponse.json({ error: 'Site not found.' }, { status: 404 });
      }
      if (tenant.owner_id !== user.id && !isAdminEmail(user.email)) {
        return NextResponse.json({ error: 'Forbidden: you do not own this site.' }, { status: 403 });
      }
      query = query.or(`tenant_id.eq.${tenantId},owner_id.eq.${user.id}`);
    } else {
      query = query.eq('owner_id', user.id);
    }

    const { data, error } = await query;
    if (error) {
      console.error('[Media API] GET error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ media: data || [] });
  } catch (error: any) {
    console.error('[Media API] error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getAuthedUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: please log in.' }, { status: 401 });
    }

    const id = request.nextUrl.searchParams.get('id');
    if (!id || !UUID_RE.test(id)) {
      return NextResponse.json({ error: 'Invalid media id.' }, { status: 400 });
    }

    const serviceClient = getSupabaseServerClient();
    const { data: row } = await serviceClient
      .from('site_media')
      .select('id, owner_id, url')
      .eq('id', id)
      .single();

    if (!row) {
      return NextResponse.json({ error: 'Media not found.' }, { status: 404 });
    }
    if (row.owner_id !== user.id && !isAdminEmail(user.email)) {
      return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
    }

    // Best-effort: remove the storage object if the URL points at our bucket
    const marker = `/object/public/${BUCKET}/`;
    const idx = row.url.indexOf(marker);
    if (idx >= 0) {
      const objectPath = decodeURIComponent(row.url.slice(idx + marker.length).split('?')[0]);
      await serviceClient.storage.from(BUCKET).remove([objectPath]).then(() => {}, () => {});
    }

    const { error: delError } = await serviceClient.from('site_media').delete().eq('id', id);
    if (delError) {
      return NextResponse.json({ error: delError.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[Media API] error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';

/**
 * API Route: POST /api/upload
 *
 * Uploads an image to Supabase Storage (bucket: site-images) using the
 * service role (bypasses Storage RLS — auth is enforced here instead).
 *
 * FormData fields:
 *   file:     the image file (jpeg/png/webp/gif, max 8MB)
 *   tenantId: optional. When a valid tenant UUID is given, the caller must
 *             own that tenant (or be an admin) and the file is stored under
 *             the tenant's folder. When absent (local drafts, admin library),
 *             the file is stored under the user's own folder.
 *
 * Returns: { url, id } — public URL + site_media row id
 */

const BUCKET = 'site-images';
const MAX_BYTES = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;
  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
  return adminEmails.includes(email);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Authenticate
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: please log in.' }, { status: 401 });
    }

    // 2. Parse form data
    const formData = await request.formData();
    const file = formData.get('file');
    const rawTenantId = formData.get('tenantId');

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Missing file.' }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Only JPEG, PNG, WebP, or GIF images are allowed.' }, { status: 415 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: 'Image must be under 8MB.' }, { status: 413 });
    }

    // 3. Resolve scope: tenant-owned upload vs personal library upload
    const serviceClient = getSupabaseServerClient();
    const tenantId = typeof rawTenantId === 'string' && UUID_RE.test(rawTenantId) ? rawTenantId : null;
    let folder = `users/${user.id}`;

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
      folder = tenantId;
    }

    // 4. Ensure the bucket exists (idempotent; a real failure surfaces on upload)
    await serviceClient.storage.createBucket(BUCKET, { public: true }).then(() => {}, () => {});

    // 5. Upload
    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
    const safeBase = file.name.replace(/\.[^.]*$/, '').toLowerCase().replace(/[^a-z0-9-_]/g, '-').slice(0, 60) || 'image';
    const path = `${folder}/${Date.now()}-${safeBase}.${ext}`;

    const bytes = Buffer.from(await file.arrayBuffer());
    const { error: uploadError } = await serviceClient.storage
      .from(BUCKET)
      .upload(path, bytes, { contentType: file.type, upsert: false });

    if (uploadError) {
      console.error('[Upload API] Storage upload error:', uploadError);
      return NextResponse.json({ error: `Upload failed: ${uploadError.message}` }, { status: 500 });
    }

    const { data: publicData } = serviceClient.storage.from(BUCKET).getPublicUrl(path);
    const url = publicData.publicUrl;

    // 6. Track in the media library
    const { data: mediaRow, error: mediaError } = await serviceClient
      .from('site_media')
      .insert([{
        tenant_id: tenantId,
        owner_id: user.id,
        url,
        type: 'image',
        name: file.name
      }])
      .select('id, url, name, created_at')
      .single();

    if (mediaError) {
      console.warn('[Upload API] site_media insert warning:', mediaError.message);
    }

    return NextResponse.json({ url, id: mediaRow?.id || null });
  } catch (error: any) {
    console.error('[Upload API] error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * API Route: POST /api/contact
 *
 * Records a contact form submission (lead) from client websites.
 *
 * Body:
 * {
 *   tenantId: string, // The UUID of the site owner (tenant)
 *   name: string,
 *   email: string,
 *   phone?: string,
 *   message: string
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tenantId, name, email, phone, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // If tenantId is not a valid database UUID (e.g. "template-restaurant" or "site-12345" in localStorage),
    // we simulate a successful submission so that forms still function correctly in dev previews.
    if (!tenantId || !UUID_REGEX.test(tenantId)) {
      console.warn(`[API /contact] Received submission for non-db tenantId "${tenantId}". Simulating success.`);
      return NextResponse.json({
        success: true,
        mock: true,
        message: 'Form submitted successfully (local preview simulation).',
        data: { name, email, phone, message }
      });
    }

    // Insert submission into database using server client (bypasses RLS for insertions)
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        tenant_id: tenantId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        message: message.trim(),
        status: 'unread'
      })
      .select()
      .single();

    if (error) {
      console.error('[API /contact] Supabase Insert Error:', error.message);
      return NextResponse.json(
        { error: 'Failed to submit contact message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully.',
      submissionId: data.id
    });
  } catch (error: any) {
    console.error('[API /contact] Server Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

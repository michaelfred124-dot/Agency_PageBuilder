/**
 * Thin transactional email wrapper (Resend HTTP API — no SDK dependency).
 *
 * No-ops with a console warning if RESEND_API_KEY isn't set, so nothing
 * breaks before the key is configured; every call site should treat
 * failures as non-fatal (log and continue), never block the caller's
 * actual write (a lead/onboarding submission must still succeed even if
 * the notification email fails).
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS || 'Michaelfred Designs <notifications@michaelfreddesigns.com>';

interface SendEmailArgs {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailArgs): Promise<{ sent: boolean; error?: string }> {
  if (!RESEND_API_KEY) {
    console.warn(`[email] RESEND_API_KEY not set — skipping email to ${to}: "${subject}"`);
    return { sent: false, error: 'RESEND_API_KEY not configured' };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: FROM_ADDRESS, to, subject, html }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`[email] Resend send failed (${res.status}):`, errText);
      return { sent: false, error: errText };
    }

    return { sent: true };
  } catch (err: any) {
    console.error('[email] Resend request error:', err);
    return { sent: false, error: err?.message || 'Unknown email error' };
  }
}

export function notifyNewLeadEmail(opts: { to: string; tenantName: string; leadName: string; leadEmail: string; message: string }) {
  return sendEmail({
    to: opts.to,
    subject: `New lead on ${opts.tenantName}: ${opts.leadName}`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="margin: 0 0 8px;">New message from your website</h2>
        <p style="color: #666; margin: 0 0 20px;">${opts.tenantName}</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #888; width: 90px;">Name</td><td style="padding: 6px 0;">${opts.leadName}</td></tr>
          <tr><td style="padding: 6px 0; color: #888;">Email</td><td style="padding: 6px 0;">${opts.leadEmail}</td></tr>
        </table>
        <p style="margin-top: 16px; white-space: pre-wrap;">${opts.message}</p>
      </div>
    `,
  });
}

export function notifyNewOnboardingBriefEmail(opts: { to: string; planTier: string; businessName?: string; userEmail: string }) {
  return sendEmail({
    to: opts.to,
    subject: `New ${opts.planTier} onboarding brief${opts.businessName ? `: ${opts.businessName}` : ''}`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="margin: 0 0 8px;">New onboarding submission</h2>
        <p style="color: #666;">Plan: <strong>${opts.planTier}</strong></p>
        ${opts.businessName ? `<p style="color: #666;">Business: <strong>${opts.businessName}</strong></p>` : ''}
        <p style="color: #666;">From: ${opts.userEmail}</p>
        <p style="margin-top: 16px;">Review the full brief in <a href="https://www.michaelfreddesigns.com/admin/clients">the admin CRM</a>.</p>
      </div>
    `,
  });
}

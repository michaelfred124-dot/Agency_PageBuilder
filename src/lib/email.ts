/**
 * Thin transactional email wrapper (SMTP via nodemailer).
 *
 * No-ops with a console warning if SMTP credentials aren't set. Every call site
 * should treat failures as non-fatal (log and continue), never block the caller's
 * actual write (a payment or onboarding submission must still succeed even if
 * the notification email fails).
 */

import nodemailer from 'nodemailer';

const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS || 'Michaelfred Designs <noreply@michaelfreddesigns.com>';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn('[email] SMTP not configured (SMTP_HOST, SMTP_USER, SMTP_PASS required)');
    return null;
  }

  try {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    return transporter;
  } catch (err) {
    console.error('[email] Failed to create SMTP transporter:', err);
    return null;
  }
}

interface SendEmailArgs {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailArgs): Promise<{ sent: boolean; error?: string }> {
  const transport = getTransporter();
  if (!transport) {
    console.warn(`[email] SMTP not configured — skipping email to ${to}: "${subject}"`);
    return { sent: false, error: 'SMTP not configured' };
  }

  try {
    await transport.sendMail({
      from: FROM_ADDRESS,
      to,
      subject,
      html,
    });
    return { sent: true };
  } catch (err: any) {
    console.error('[email] SMTP send failed:', err?.message || err);
    return { sent: false, error: err?.message || 'Email send failed' };
  }
}

/** Lead-supplied text lands in HTML email — escape it. */
function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const LABELS: Record<string, string> = {
  new_site: 'New website',
  redesign: 'Redesign of an existing site',
  maintenance: 'Maintenance / hosting only',
  not_sure: 'Not sure yet',
  under_1k: 'Under $1,000',
  '1k_3k': '$1,000 – $3,000',
  '3k_7k': '$3,000 – $7,000',
  '7k_plus': '$7,000+',
  unsure: 'Not sure yet',
  asap: 'As soon as possible',
  '1_3_months': 'In 1–3 months',
  '3_plus_months': '3+ months out',
  just_exploring: 'Just exploring',
};

export function labelFor(value?: string | null): string {
  if (!value) return '—';
  return LABELS[value] || value;
}

/** Sent to the agency owner the moment a subscription payment succeeds. */
export function notifyNewSubscriptionEmail(opts: {
  to: string;
  planName: string;
  monthlyTotal: string;
  customerEmail: string;
  customerName?: string;
}) {
  return sendEmail({
    to: opts.to,
    subject: `💰 New subscriber: ${opts.planName} — ${opts.monthlyTotal}/mo`,
    html: `
      <div style="font-family:-apple-system,sans-serif;max-width:520px;margin:0 auto;">
        <h2 style="margin:0 0 4px;">You got paid</h2>
        <p style="color:#666;margin:0 0 20px;">${esc(opts.planName)} — <strong>${esc(opts.monthlyTotal)}/mo</strong></p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${opts.customerName ? `<tr><td style="padding:6px 12px 6px 0;color:#888;">Name</td><td style="padding:6px 0;">${esc(opts.customerName)}</td></tr>` : ''}
          <tr><td style="padding:6px 12px 6px 0;color:#888;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(opts.customerEmail)}">${esc(opts.customerEmail)}</a></td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px;">
          They've been sent the intake questionnaire. You'll get another email once they complete it.
        </p>
        <p style="margin-top:24px;">
          <a href="https://www.michaelfreddesigns.com/admin/orders"
             style="background:#0f172a;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600;">
            Open in orders
          </a>
        </p>
      </div>
    `,
  });
}

/** Sent to the agency owner once the client finishes the intake questionnaire. */
export function notifyIntakeCompleteEmail(opts: { to: string; businessName: string; planName: string }) {
  return sendEmail({
    to: opts.to,
    subject: `📋 Intake complete: ${opts.businessName}`,
    html: `
      <div style="font-family:-apple-system,sans-serif;max-width:520px;margin:0 auto;">
        <h2 style="margin:0 0 4px;">Ready to build</h2>
        <p style="color:#666;margin:0 0 20px;">
          <strong>${esc(opts.businessName)}</strong> finished their intake for the ${esc(opts.planName)}.
        </p>
        <p style="margin-top:24px;">
          <a href="https://www.michaelfreddesigns.com/admin/orders"
             style="background:#0f172a;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600;">
            View their answers
          </a>
        </p>
      </div>
    `,
  });
}

/** Sent to the customer right after payment — sets expectations. */
export function welcomeSubscriberEmail(opts: { to: string; name?: string; planName: string; intakeUrl: string }) {
  return sendEmail({
    to: opts.to,
    subject: `Welcome — let's build your website`,
    html: `
      <div style="font-family:-apple-system,sans-serif;max-width:520px;margin:0 auto;line-height:1.6;">
        <p>Hi ${esc(opts.name?.split(' ')[0] || 'there')},</p>
        <p>Thanks for subscribing to the <strong>${esc(opts.planName)}</strong>. You're all set on payment.</p>
        <p><strong>One thing left:</strong> I need some details about your business before I can start —
        your content, brand colours, and what you want on each page. It takes about five minutes.</p>
        <p style="margin:24px 0;">
          <a href="${esc(opts.intakeUrl)}"
             style="background:#0f172a;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:600;">
            Complete my intake form
          </a>
        </p>
        <p>Once that's in, I'll have your first draft ready within a few days and you'll get a private
        preview link to review before anything goes live.</p>
        <p style="margin-top:24px;">— Michael<br>
        <span style="color:#888;">Michaelfred Designs</span></p>
      </div>
    `,
  });
}

/**
 * Sent to the customer once their WordPress + Divi site finishes provisioning.
 *
 * Carries their admin password, so it is the one email in this file that must
 * never be forwarded or logged. Resend delivers over TLS; we don't log the body.
 */
export function wordpressReadyEmail(opts: {
  to: string;
  name?: string;
  siteUrl: string;
  adminUrl: string;
  username: string;
  password: string;
}) {
  return sendEmail({
    to: opts.to,
    subject: `Your website is ready — here's your login`,
    html: `
      <div style="font-family:-apple-system,sans-serif;max-width:520px;margin:0 auto;line-height:1.6;">
        <p>Hi ${esc(opts.name?.split(' ')[0] || 'there')},</p>
        <p>Your WordPress site is live and ready for me to start building on.</p>

        <p style="margin:24px 0 8px;"><strong>Your site</strong><br>
        <a href="${esc(opts.siteUrl)}">${esc(opts.siteUrl)}</a></p>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin:16px 0;">
          <p style="margin:0 0 10px;font-weight:600;">Your login details</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:4px 12px 4px 0;color:#888;">Login page</td><td style="padding:4px 0;"><a href="${esc(opts.adminUrl)}">${esc(opts.adminUrl)}</a></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888;">Username</td><td style="padding:4px 0;font-family:monospace;">${esc(opts.username)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888;">Password</td><td style="padding:4px 0;font-family:monospace;">${esc(opts.password)}</td></tr>
          </table>
        </div>

        <p style="color:#666;font-size:13px;">
          Please change this password after your first login, and don't forward this email —
          it's the only copy of your password you'll get by email.
        </p>

        <p>You don't need to do anything with it yet. I'll be building out your pages from the
        details you sent me, and I'll let you know the moment there's something to review.</p>

        <p style="margin-top:24px;">— Michael<br>
        <span style="color:#888;">Michaelfred Designs</span></p>
      </div>
    `,
  });
}

/** Sent to the agency owner when a site fails to provision and has stopped retrying. */
export function notifyProvisioningFailedEmail(opts: {
  to: string;
  businessName: string;
  orderId: string;
  error: string;
}) {
  return sendEmail({
    to: opts.to,
    subject: `⚠️ Site provisioning failed: ${opts.businessName}`,
    html: `
      <div style="font-family:-apple-system,sans-serif;max-width:520px;margin:0 auto;">
        <h2 style="margin:0 0 4px;">Provisioning failed</h2>
        <p style="color:#666;margin:0 0 16px;">
          <strong>${esc(opts.businessName)}</strong> has paid, but their WordPress site could not be
          created and has stopped retrying. They are waiting on you.
        </p>
        <pre style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:12px;
                    font-size:12px;white-space:pre-wrap;word-break:break-word;">${esc(opts.error)}</pre>
        <p style="margin-top:24px;">
          <a href="https://www.michaelfreddesigns.com/admin/orders"
             style="background:#0f172a;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600;">
            Open orders
          </a>
        </p>
      </div>
    `,
  });
}

export function notifyNewLeadEmail(opts: { tenantName: string; to: string; leadName: string; leadEmail: string; message: string }) {
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

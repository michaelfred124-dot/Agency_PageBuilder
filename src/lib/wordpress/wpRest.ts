import crypto from 'crypto';

/**
 * WordPress REST API calls against a freshly cloned site.
 *
 * A clone is a byte-for-byte copy of the master's database, so the master's
 * admin user AND its Application Password come across with it. That is what
 * authenticates these calls — no SSH, no WP-CLI, no per-site secret exchange.
 *
 * Required env:
 *   WP_MASTER_ADMIN_USER      admin username on the master site
 *   WP_MASTER_APP_PASSWORD    Application Password (Users -> Profile -> Application Passwords)
 *
 * Application Passwords require HTTPS; Cloudways app domains are HTTPS by default.
 */

export class WordPressError extends Error {
  constructor(message: string, readonly status?: number, readonly code?: string) {
    super(message);
    this.name = 'WordPressError';
  }
}

export function isWordPressConfigured(): boolean {
  return Boolean(process.env.WP_MASTER_ADMIN_USER && process.env.WP_MASTER_APP_PASSWORD);
}

function authHeader(): string {
  const user = process.env.WP_MASTER_ADMIN_USER;
  const pass = process.env.WP_MASTER_APP_PASSWORD;
  if (!user || !pass) {
    throw new WordPressError('WP_MASTER_ADMIN_USER / WP_MASTER_APP_PASSWORD are not set.');
  }
  // Application Passwords are displayed space-separated for readability; WordPress
  // ignores the spaces, but only if we strip them before base64-encoding.
  return `Basic ${Buffer.from(`${user}:${pass.replace(/\s+/g, '')}`).toString('base64')}`;
}

async function wpFetch(siteUrl: string, path: string, body?: unknown): Promise<any> {
  const res = await fetch(`${siteUrl.replace(/\/$/, '')}/wp-json${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: authHeader(),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const text = await res.text();
  let json: any = null;
  try {
    json = JSON.parse(text);
  } catch {
    /* fall through — handled below */
  }

  if (!res.ok) {
    throw new WordPressError(
      json?.message || `WordPress ${path} failed (${res.status})`,
      res.status,
      json?.code,
    );
  }

  if (json === null) {
    throw new WordPressError(`WordPress ${path} returned non-JSON (${res.status})`, res.status);
  }

  return json;
}

/** A WordPress-acceptable password that survives being pasted out of an email. */
export function generatePassword(): string {
  // Avoids look-alike characters (0/O, 1/l/I) so clients can retype it correctly.
  const alphabet = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.randomBytes(20);
  let out = '';
  for (let i = 0; i < 20; i++) out += alphabet[bytes[i] % alphabet.length];
  // Guarantee a symbol so it clears any "strong password" policy.
  return `${out.slice(0, 10)}-${out.slice(10)}`;
}

/** Username derived from the client's email, unique enough for a single-tenant site. */
export function usernameFromEmail(email: string | null): string {
  const base = (email || 'owner').split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
  return (base || 'owner').slice(0, 20);
}

/**
 * Create the client's administrator account.
 *
 * Idempotent: the runner may retry after a partial failure, and a duplicate
 * username or email means the account already exists from the previous attempt,
 * which is success, not an error.
 */
export async function createAdminUser(
  siteUrl: string,
  opts: { username: string; email: string; password: string; name?: string },
): Promise<{ created: boolean }> {
  try {
    await wpFetch(siteUrl, '/wp/v2/users', {
      username: opts.username,
      email: opts.email,
      password: opts.password,
      name: opts.name || opts.username,
      roles: ['administrator'],
    });
    return { created: true };
  } catch (err) {
    if (
      err instanceof WordPressError &&
      (err.code === 'existing_user_login' || err.code === 'existing_user_email')
    ) {
      return { created: false };
    }
    throw err;
  }
}

/** Set the site title and tagline so the clone stops announcing the master's name. */
export async function setSiteIdentity(
  siteUrl: string,
  opts: { title: string; description?: string },
): Promise<void> {
  await wpFetch(siteUrl, '/wp/v2/settings', {
    title: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
  });
}

/** Cheap liveness probe — confirms the clone is actually serving before we configure it. */
export async function isSiteResponding(siteUrl: string): Promise<boolean> {
  try {
    const res = await fetch(`${siteUrl.replace(/\/$/, '')}/wp-json`, {
      headers: { Authorization: authHeader() },
    });
    return res.ok;
  } catch {
    return false;
  }
}

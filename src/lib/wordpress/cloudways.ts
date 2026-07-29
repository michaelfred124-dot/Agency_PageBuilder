import {
  WordPressHost,
  CloneHandle,
  OperationStatus,
  HostedApp,
  HostError,
} from './provider';

/**
 * Cloudways implementation of WordPressHost.
 *
 * Required env:
 *   CLOUDWAYS_EMAIL          account email
 *   CLOUDWAYS_API_KEY        from Cloudways -> Account -> API Keys
 *   CLOUDWAYS_SERVER_ID      server holding the master site
 *   CLOUDWAYS_MASTER_APP_ID  the master WordPress + Divi app to clone
 *
 * Cloudways' API is form-encoded, not JSON, and its booleans come back as the
 * strings "1"/"0" — both handled here so nothing else has to know.
 */

const API = 'https://api.cloudways.com/api/v1';

/** Access tokens last ~1h. Cached per warm serverless instance. */
let cachedToken: { value: string; expiresAt: number } | null = null;

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new HostError(`${name} is not set — WordPress provisioning is not configured.`);
  return value;
}

export function isCloudwaysConfigured(): boolean {
  return Boolean(
    process.env.CLOUDWAYS_EMAIL &&
      process.env.CLOUDWAYS_API_KEY &&
      process.env.CLOUDWAYS_SERVER_ID &&
      process.env.CLOUDWAYS_MASTER_APP_ID,
  );
}

async function getToken(): Promise<string> {
  // 60s of slack so a token can't expire mid-request.
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;

  const res = await fetch(`${API}/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      email: requiredEnv('CLOUDWAYS_EMAIL'),
      api_key: requiredEnv('CLOUDWAYS_API_KEY'),
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new HostError(`Cloudways auth failed (${res.status})`, res.status, text.slice(0, 500));
  }

  let json: any;
  try {
    json = JSON.parse(text);
  } catch {
    throw new HostError('Cloudways auth returned non-JSON', res.status, text.slice(0, 500));
  }

  const token = json.access_token;
  if (!token) throw new HostError('Cloudways auth response had no access_token');

  cachedToken = {
    value: token,
    expiresAt: Date.now() + (Number(json.expires_in) || 3600) * 1000,
  };
  return token;
}

async function call(
  path: string,
  opts: { method?: 'GET' | 'POST'; params?: Record<string, string> } = {},
): Promise<any> {
  const token = await getToken();
  const method = opts.method || 'GET';

  let url = `${API}${path}`;
  const init: RequestInit = {
    method,
    headers: { Authorization: `Bearer ${token}` },
  };

  if (opts.params) {
    if (method === 'GET') {
      url += `?${new URLSearchParams(opts.params)}`;
    } else {
      init.headers = {
        ...init.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      init.body = new URLSearchParams(opts.params);
    }
  }

  const res = await fetch(url, init);
  const text = await res.text();

  if (!res.ok) {
    throw new HostError(`Cloudways ${method} ${path} failed (${res.status})`, res.status, text.slice(0, 800));
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new HostError(`Cloudways ${method} ${path} returned non-JSON`, res.status, text.slice(0, 800));
  }
}

/** Cloudways reports booleans as "1"/"0" strings in places and real booleans in others. */
const truthy = (v: unknown): boolean => v === true || v === 1 || v === '1' || v === 'true';

function normaliseUrl(app: any): string {
  const fqdn: string = app?.cname || app?.app_fqdn || '';
  if (!fqdn) return '';
  return fqdn.startsWith('http') ? fqdn.replace(/\/$/, '') : `https://${fqdn.replace(/\/$/, '')}`;
}

export class CloudwaysHost implements WordPressHost {
  readonly name = 'cloudways';

  async cloneMaster(label: string): Promise<CloneHandle> {
    const serverId = requiredEnv('CLOUDWAYS_SERVER_ID');
    const appId = requiredEnv('CLOUDWAYS_MASTER_APP_ID');

    const json = await call('/app/clone', {
      method: 'POST',
      params: { server_id: serverId, app_id: appId, app_label: label },
    });

    const operationId = String(json?.operation_id ?? json?.operation?.id ?? '');
    if (!operationId) {
      throw new HostError(`Cloudways clone returned no operation_id: ${JSON.stringify(json).slice(0, 400)}`);
    }

    return {
      operationId,
      serverId,
      // Present on some responses, absent on others — findApp falls back to label.
      appId: json?.app_id ? String(json.app_id) : undefined,
    };
  }

  async getOperation(operationId: string): Promise<OperationStatus> {
    const json = await call(`/operation/${encodeURIComponent(operationId)}`);
    const op = json?.operation ?? json;

    const complete = truthy(op?.is_completed);
    const status = String(op?.status || '').toLowerCase();
    // Cloudways marks a finished-but-broken job complete with a failure status,
    // so "complete" alone is not success.
    const failed = status.includes('fail') || status.includes('error');

    return {
      complete: complete || failed,
      failed,
      message: op?.message || op?.status || undefined,
    };
  }

  async findApp(opts: { serverId: string; appId?: string; label?: string }): Promise<HostedApp | null> {
    const json = await call('/server');
    const servers: any[] = json?.servers || [];
    const server = servers.find(s => String(s?.id) === String(opts.serverId));
    if (!server) return null;

    const apps: any[] = server?.apps || [];
    const app =
      (opts.appId && apps.find(a => String(a?.id) === String(opts.appId))) ||
      (opts.label && apps.find(a => a?.label === opts.label)) ||
      null;

    if (!app) return null;

    return {
      appId: String(app.id),
      serverId: String(server.id),
      url: normaliseUrl(app),
      label: app.label || '',
    };
  }
}

export const cloudways = new CloudwaysHost();

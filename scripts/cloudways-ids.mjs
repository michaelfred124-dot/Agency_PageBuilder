#!/usr/bin/env node
/**
 * Finds the CLOUDWAYS_SERVER_ID and CLOUDWAYS_MASTER_APP_ID you need in .env.local,
 * and verifies your API credentials work at the same time.
 *
 *   node scripts/cloudways-ids.mjs
 *
 * Requires CLOUDWAYS_EMAIL and CLOUDWAYS_API_KEY in .env.local
 * (Cloudways dashboard -> top-right account menu -> API Keys).
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Minimal .env.local reader — avoids adding a dotenv dependency for one script.
function loadEnv() {
  try {
    for (const line of readFileSync(resolve(root, '.env.local'), 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (!m) continue;
      const value = m[2].trim().replace(/^["']|["']$/g, '');
      if (!process.env[m[1]]) process.env[m[1]] = value;
    }
  } catch {
    /* no .env.local — fall back to real env vars */
  }
}

loadEnv();

const API = 'https://api.cloudways.com/api/v1';
const email = process.env.CLOUDWAYS_EMAIL;
const apiKey = process.env.CLOUDWAYS_API_KEY;

if (!email || !apiKey) {
  console.error('\n  Missing CLOUDWAYS_EMAIL and/or CLOUDWAYS_API_KEY in .env.local\n');
  console.error('  Get an API key: Cloudways dashboard -> account menu (top right) -> API Keys\n');
  process.exit(1);
}

const token = await (async () => {
  const res = await fetch(`${API}/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email, api_key: apiKey }),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`\n  Auth failed (${res.status}). Check CLOUDWAYS_EMAIL / CLOUDWAYS_API_KEY.`);
    console.error(`  ${text.slice(0, 300)}\n`);
    process.exit(1);
  }
  return JSON.parse(text).access_token;
})();

console.log('\n  Credentials OK.\n');

const res = await fetch(`${API}/server`, { headers: { Authorization: `Bearer ${token}` } });
if (!res.ok) {
  console.error(`  Could not list servers (${res.status}).\n`);
  process.exit(1);
}

const { servers = [] } = await res.json();

if (servers.length === 0) {
  console.log('  No servers found. Create one in Cloudways first.\n');
  process.exit(0);
}

for (const server of servers) {
  console.log(`  SERVER  ${server.label}   CLOUDWAYS_SERVER_ID=${server.id}`);
  console.log(`          ${server.public_ip || ''}  ${server.cloud || ''} ${server.size || ''}`);

  const apps = server.apps || [];
  if (apps.length === 0) {
    console.log('          (no apps yet)\n');
    continue;
  }

  for (const app of apps) {
    const url = app.cname || app.app_fqdn || '';
    console.log(`    APP   ${app.label}`);
    console.log(`          CLOUDWAYS_MASTER_APP_ID=${app.id}`);
    console.log(`          ${url ? `https://${url.replace(/^https?:\/\//, '')}` : '(no domain yet)'}`);
    console.log(`          type: ${app.application || 'unknown'}`);
  }
  console.log('');
}

console.log('  Use the app that holds your master Divi install as CLOUDWAYS_MASTER_APP_ID.\n');

import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from './utils/supabase/middleware';

/**
 * Vercel Edge Middleware — Multi-Tenant Domain Router
 *
 * Intercepts every request and determines whether it belongs to:
 * 1. The agency website (michaelfreddesigns.com) → pass through
 * 2. A tenant subdomain (acme.michaelfreddesigns.com) → rewrite to /_tenants/acme/...
 * 3. A custom domain (acme.com) → rewrite to /_tenants/acme.com/...
 */

// Routes that belong to the agency — never rewrite these
const AGENCY_PATHS = [
  '/dashboard',
  '/admin',
  '/login',
  '/onboarding',
  '/services',
  '/pricing',
  '/process',
  '/contact',
  '/work',
  '/preview',
  '/site',       // local dev fallback
  '/api',
  '/_next',
  '/tenants',
  '/favicon.ico',
];

// Your root agency domain(s). Requests to these are NOT tenant requests.
const ROOT_DOMAINS = [
  'michaelfreddesigns.com',
  'www.michaelfreddesigns.com',
  'localhost',
  '127.0.0.1',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // 1. Update/Refresh session and get user info using Supabase SSR utility
  const { supabaseResponse, user } = await updateSession(request);

  // Helper to preserve cookies on redirect
  const redirectWithCookies = (url: URL | string) => {
    const response = NextResponse.redirect(url);
    supabaseResponse.cookies.getAll().forEach(cookie => {
      response.cookies.set(cookie.name, cookie.value, {
        path: cookie.path,
        domain: cookie.domain,
        maxAge: cookie.maxAge,
        secure: cookie.secure,
        sameSite: cookie.sameSite,
        httpOnly: cookie.httpOnly,
        expires: cookie.expires
      });
    });
    return response;
  };

  // 2. Session-based route protection
  if (pathname.startsWith('/dashboard')) {
    if (!user) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      return redirectWithCookies(loginUrl);
    }

    // Redirect admin users to the CRM admin dashboard
    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim().toLowerCase()) || [];
    const userEmail = user.email?.toLowerCase();
    const isAdmin = 
      userEmail && (
        adminEmails.includes(userEmail) || 
        userEmail === 'michaelfreddesigns@gmail.com' ||
        userEmail === 'michaelfred124@gmail.com' ||
        user.user_metadata?.is_admin === true ||
        user.app_metadata?.is_admin === true ||
        user.user_metadata?.role === 'admin' ||
        user.app_metadata?.role === 'admin'
      );

    if (isAdmin) {
      const adminUrl = request.nextUrl.clone();
      adminUrl.pathname = '/admin';
      return redirectWithCookies(adminUrl);
    }
  }

  if (pathname === '/login') {
    if (user) {
      const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim().toLowerCase()) || [];
      const userEmail = user.email?.toLowerCase();
      const isAdmin = 
        userEmail && (
          adminEmails.includes(userEmail) || 
          userEmail === 'michaelfreddesigns@gmail.com' ||
          userEmail === 'michaelfred124@gmail.com' ||
          user.user_metadata?.is_admin === true ||
          user.app_metadata?.is_admin === true ||
          user.user_metadata?.role === 'admin' ||
          user.app_metadata?.role === 'admin'
        );
        
      const dashUrl = request.nextUrl.clone();
      if (isAdmin) {
        dashUrl.pathname = '/admin';
      } else {
        dashUrl.pathname = '/dashboard';
      }
      return redirectWithCookies(dashUrl);
    }
  }

  // 3. Skip middleware for agency paths and static assets
  if (AGENCY_PATHS.some((p) => pathname.startsWith(p))) {
    return supabaseResponse;
  }

  // Also skip for static file extensions
  if (pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js|woff|woff2|ttf|eot|map)$/)) {
    return supabaseResponse;
  }

  // 4. Determine if this is a tenant request by checking the hostname
  const hostnameWithoutPort = hostname.split(':')[0];

  // If the request is to a root domain (agency site), pass through
  if (ROOT_DOMAINS.includes(hostnameWithoutPort) || hostnameWithoutPort.endsWith('.vercel.app')) {
    return supabaseResponse;
  }

  // 5. Try to extract a subdomain
  // e.g. "acme.michaelfreddesigns.com" → subdomain = "acme"
  let tenantIdentifier = '';

  // Check if it's a subdomain of our root domain
  const rootDomain = ROOT_DOMAINS.find((rd) =>
    hostnameWithoutPort.endsWith(`.${rd}`)
  );

  if (rootDomain) {
    // Extract subdomain: "acme.michaelfreddesigns.com" → "acme"
    tenantIdentifier = hostnameWithoutPort.replace(`.${rootDomain}`, '');
  } else {
    // It's a completely custom domain (e.g. "acme.com")
    // Use the full hostname as the identifier — the tenant renderer
    // will try to look it up by custom_domain
    tenantIdentifier = hostnameWithoutPort;
  }

  if (!tenantIdentifier) {
    return supabaseResponse;
  }

  // 6. Rewrite to the internal tenant route
  // e.g. acme.michaelfreddesigns.com/about → /_tenants/acme/about
  const slug = pathname === '/' ? '' : pathname;
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/tenants/${tenantIdentifier}${slug}`;
  
  const response = NextResponse.rewrite(rewriteUrl);
  
  // Copy cookies from supabaseResponse to the new response
  supabaseResponse.cookies.getAll().forEach(cookie => {
    response.cookies.set(cookie.name, cookie.value, {
      path: cookie.path,
      domain: cookie.domain,
      maxAge: cookie.maxAge,
      secure: cookie.secure,
      sameSite: cookie.sameSite,
      httpOnly: cookie.httpOnly,
      expires: cookie.expires
    });
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

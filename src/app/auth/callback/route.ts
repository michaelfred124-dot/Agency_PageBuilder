import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const errorParam = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  
  console.log('[Auth Callback] Request received. Code present:', !!code, 'Error param:', errorParam, 'Description:', errorDescription);
  
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      console.log('[Auth Callback] Code exchange successful. Session created for user:', data.user?.email);
      const forwardedHost = request.headers.get('x-forwarded-host');
      const isLocalEnv = process.env.NODE_ENV === 'development';
      
      if (isLocalEnv) {
        console.log('[Auth Callback] Redirecting local env to:', `${origin}${next}`);
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        console.log('[Auth Callback] Redirecting production with forwarded host to:', `https://${forwardedHost}${next}`);
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        console.log('[Auth Callback] Redirecting to:', `${origin}${next}`);
        return NextResponse.redirect(`${origin}${next}`);
      }
    } else {
      console.error('[Auth Callback] exchangeCodeForSession failed:', error.message, error);
    }
  } else {
    console.error('[Auth Callback] No authorization code found in request params.');
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`);
}

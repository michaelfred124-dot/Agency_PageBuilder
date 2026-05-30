"use client";
import './globals.css';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getSupabaseBrowserClient } from '@/lib/supabase';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const supabase = getSupabaseBrowserClient();
      if (typeof window !== 'undefined' && localStorage.getItem('auth_flush_v3') !== 'true') {
        supabase.auth.signOut().then(() => {
          // Clear all cookies to wipe stale session remnants
          document.cookie.split(";").forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
          localStorage.setItem('auth_flush_v3', 'true');
          window.location.reload();
        }).catch((err) => {
          console.error("Signout error during flush:", err);
          localStorage.setItem('auth_flush_v3', 'true');
        });
      }
    } catch (err) {
      console.error("Supabase client init or signout failed:", err);
    }
  }, []);
  
  const isTemplatePage = pathname?.startsWith('/work/');
  const isDashboardPage = pathname?.startsWith('/dashboard');
  const isLoginPage = pathname === '/login';
  const isOnboardingPage = pathname === '/onboarding';
  const isPreviewPage = pathname?.startsWith('/preview/');
  const isTenantPage = pathname?.startsWith('/_tenants/');
  const isSiteFallbackPage = pathname?.startsWith('/site/');

  const shouldHideGlobalNav = isTemplatePage || isDashboardPage || isLoginPage || isOnboardingPage || isPreviewPage || isTenantPage || isSiteFallbackPage;

  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-black selection:text-white">
        {!shouldHideGlobalNav && <Navbar />}
        {children}
        {!shouldHideGlobalNav && <Footer />}
      </body>
    </html>
  );
}

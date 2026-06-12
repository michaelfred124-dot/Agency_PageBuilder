"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { getSupabaseBrowserClient } from '@/lib/supabase';

export default function ClientLayout({
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
  const isTenantPage = pathname?.startsWith('/tenants/');
  const isSiteFallbackPage = pathname?.startsWith('/site/');
  const isAdminPage = pathname?.startsWith('/admin');

  const shouldHideGlobalNav = isTemplatePage || isDashboardPage || isLoginPage || isOnboardingPage || isPreviewPage || isTenantPage || isSiteFallbackPage || isAdminPage;

  return (
    <>
      {!shouldHideGlobalNav && (
        <div className="agency-global-nav">
          <Navbar />
        </div>
      )}
      {children}
      {!shouldHideGlobalNav && (
        <div className="agency-global-footer">
          <Footer />
        </div>
      )}
    </>
  );
}

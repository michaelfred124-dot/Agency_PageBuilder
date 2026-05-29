"use client";
import './globals.css';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
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

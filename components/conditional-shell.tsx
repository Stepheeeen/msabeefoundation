'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide site-wide UI on admin and gallery management routes
  const isAdminRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/gallery/upload');

  if (isAdminRoute) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

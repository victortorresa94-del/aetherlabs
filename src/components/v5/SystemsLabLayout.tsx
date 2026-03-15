'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollAnimations from './ScrollAnimations';

interface SystemsLabLayoutProps {
  children: React.ReactNode;
  accentColor?: string;
}

export default function SystemsLabLayout({ children, accentColor = 'var(--v5-accent)' }: SystemsLabLayoutProps) {
  return (
    <div className="v5-page" style={{ ['--tool-accent' as string]: accentColor }}>
      <ScrollAnimations />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      {/* Back to Systems Lab */}
      <div className="bg-white/5 border-t border-white/10 py-12">
        <div className="v5-container">
          <Link
            href="/systems-lab"
            className="inline-flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver a Systems Lab
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

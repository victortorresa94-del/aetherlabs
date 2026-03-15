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
      <main style={{ paddingTop: '64px' }}>
        {children}
      </main>
      {/* Back to Systems Lab */}
      <div style={{
        backgroundColor: 'var(--v5-bg-surface)',
        borderTop: '1px solid var(--v5-border)',
        padding: '32px 0',
      }}>
        <div className="v5-container">
          <Link
            href="/systems-lab"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--v5-font-body)',
              fontSize: '14px',
              color: 'var(--v5-text-secondary)',
              textDecoration: 'none',
              transition: 'color var(--v5-transition)',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--v5-text-primary)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--v5-text-secondary)'}
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

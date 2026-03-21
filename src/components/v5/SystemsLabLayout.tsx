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
<Footer />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import ClosiusNavbar from './ClosiusNavbar';
import ClosiusHero from './ClosiusHero';
import ClosiusTraction from './ClosiusTraction';
import ClosiusProblem from './ClosiusProblem';
import ClosiusPhases from './ClosiusPhases';
import ClosiusCoaching from './ClosiusCoaching';
import ClosiusIntegrations from './ClosiusIntegrations';
import ClosiusROICalculator from './ClosiusROICalculator';
import ClosiusPricing from './ClosiusPricing';
import ClosiusFAQ from './ClosiusFAQ';
import ClosiusCTA from './ClosiusCTA';
import GlobalInteractivity from '../v4/GlobalInteractivity';

export default function ClosiusPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ background: '#0A0A0A', position: 'relative' }}>
      <GlobalInteractivity />
      {/* Page specific progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: `${scrollProgress}%`, height: '3px',
        background: 'var(--green)',
        zIndex: 1100, transition: 'width 0.1s linear'
      }} />

      <ClosiusNavbar />

      <div className="closius-content">
        <ClosiusHero />
        <ClosiusTraction />
        <ClosiusProblem />
        <ClosiusPhases />
        <ClosiusCoaching />
        <ClosiusIntegrations />
        <ClosiusROICalculator />
        <ClosiusPricing />
        <ClosiusFAQ />
        <ClosiusCTA />
      </div>

      <footer style={{
        padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)',
        background: '#0D0D0D', textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '14px', color: 'rgba(255,255,255,0.3)',
            display: 'flex', justifyContent: 'center', gap: '24px'
          }}>
            <span>© 2025 Aether Labs</span>
            <a href="/privacidad" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidad</a>
            <a href="/legal" style={{ color: 'inherit', textDecoration: 'none' }}>Legal</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        /* Global resets for Closius page to ensure specific look */
        .closius-content {
          scroll-behavior: smooth;
        }
        ::selection {
          background: var(--green);
          color: #000;
        }
        /* Custom scrollbar for Closius */
        .closius-content::-webkit-scrollbar {
          width: 6px;
        }
        .closius-content::-webkit-scrollbar-track {
          background: #0A0A0A;
        }
        .closius-content::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .closius-content::-webkit-scrollbar-thumb:hover {
          background: var(--green);
        }
      `}</style>
    </main>
  );
}

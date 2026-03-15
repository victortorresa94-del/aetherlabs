'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Systems Lab', href: '/systems-lab' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: scrolled ? 'rgba(10,15,30,0.95)' : 'rgba(10,15,30,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}>
        <div className="v5-container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <Image src="/aether-logo-white.png" alt="Aether Labs" width={32} height={32} style={{ objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--v5-font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--v5-text-primary)',
              letterSpacing: '-0.02em',
            }}>
              Aether Labs
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }} className="v5-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--v5-text-secondary)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: 'var(--v5-radius-sm)',
                  transition: 'color var(--v5-transition), background var(--v5-transition)',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-primary)';
                  (e.target as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLAnchorElement).style.color = 'var(--v5-text-secondary)';
                  (e.target as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="#sesion-claridad" className="v5-btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Reservar sesión
            </Link>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--v5-text-primary)',
              }}
              className="v5-hamburger"
              aria-label="Menú"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '300px',
        height: '100vh',
        backgroundColor: 'var(--v5-bg-surface)',
        zIndex: 999,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderLeft: '1px solid var(--v5-border)',
        padding: '80px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '18px',
              fontWeight: 500,
              color: 'var(--v5-text-secondary)',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid var(--v5-border)',
              transition: 'color var(--v5-transition)',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#sesion-claridad"
          onClick={() => setMobileOpen(false)}
          className="v5-btn-primary"
          style={{ marginTop: '24px', justifyContent: 'center' }}
        >
          Reservar sesión gratuita →
        </Link>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998,
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .v5-nav-links { display: none !important; }
          .v5-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

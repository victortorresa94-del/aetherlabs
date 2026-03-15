'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Casos', href: '/casos' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          transition: 'background 400ms ease, border-color 400ms ease',
          background: scrolled ? 'rgba(8, 8, 8, 0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        }}
      >
        <div className="v5-container w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <circle
                cx="16" cy="16" r="14"
                stroke={scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.85)'}
                strokeWidth="1.5"
                style={{ transition: 'stroke 400ms ease' }}
              />
              <circle
                cx="16" cy="16" r="5"
                fill={scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.85)'}
                style={{ transition: 'fill 400ms ease' }}
              />
            </svg>
            <span
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '15px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
                transition: 'color 400ms ease',
              }}
            >
              Aether Labs
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  color: scrolled ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.50)',
                  textDecoration: 'none',
                  transition: 'color 300ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(255,255,255,1)';
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.color = scrolled ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.50)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <Link
              href="/systems-lab/sesion-de-claridad"
              className="hidden sm:inline-flex items-center no-underline"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                fontWeight: 400,
                padding: '8px 20px',
                borderRadius: '100px',
                transition: 'all 300ms ease',
                background: scrolled ? '#F5F5F0' : 'rgba(255,255,255,0.08)',
                color: scrolled ? '#080808' : 'rgba(255,255,255,0.85)',
                border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.15)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = scrolled ? '#FFFFFF' : 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = scrolled ? '#F5F5F0' : 'rgba(255,255,255,0.08)';
              }}
            >
              Sesión gratuita
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
              style={{ color: scrolled ? '#444444' : 'rgba(255,255,255,0.60)' }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '280px',
          height: '100vh',
          background: '#FAFAFA',
          zIndex: 999,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 480ms cubic-bezier(0.16, 1, 0.3, 1)',
          borderLeft: '1px solid #EBEBEB',
          padding: '80px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '16px',
              fontWeight: 300,
              color: '#666666',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid #EBEBEB',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#111111'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#666666'; }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/systems-lab/sesion-de-claridad"
          onClick={() => setMobileOpen(false)}
          style={{
            marginTop: '32px',
            padding: '14px 0',
            background: '#111111',
            color: '#FFFFFF',
            borderRadius: '100px',
            textAlign: 'center',
            fontFamily: 'var(--v5-font-body)',
            fontSize: '14px',
            fontWeight: 400,
            textDecoration: 'none',
          }}
        >
          Sesión gratuita
        </Link>
      </div>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 998,
            backdropFilter: 'blur(4px)',
          }}
        />
      )}
    </>
  );
}

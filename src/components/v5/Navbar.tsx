'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLabsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const labsLinks = [
    { label: 'Systems Lab', href: '/systems-lab' },
    { label: 'Creative Lab', href: '/creative-lab' },
    { label: 'School Lab', href: '/school-lab' },
    { label: 'Open Lab', href: '/open-lab' },
  ];

  const otherLinks = [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Casos', href: '/casos' },
  ];

  const getTextColor = (base: string, hovered: string) => {
    // If not scrolled but white hover
    return base;
  };

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
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: 'none',
          boxShadow: 'none',
        }}
      >
        <div className="v5-container w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline group">
            <Image
              src="/aether-logo-white.png"
              alt="Aether Labs"
              height={16}
              width={62}
              style={{
                objectFit: 'contain',
                transition: 'filter 400ms ease',
                filter: scrolled ? 'invert(1)' : 'none',
              }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {/* Labs dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLabsOpen(!labsOpen)}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: scrolled ? '#555555' : 'rgba(255,255,255,0.6)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#111111' : '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#555555' : 'rgba(255,255,255,0.6)';
                }}
              >
                Labs
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: labsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E8E8E8',
                  borderRadius: '12px',
                  padding: '12px',
                  minWidth: '180px',
                  opacity: labsOpen ? 1 : 0,
                  visibility: labsOpen ? 'visible' : 'hidden',
                  transition: 'all 200ms ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {labsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setLabsOpen(false)}
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: '#555555',
                      textDecoration: 'none',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      transition: 'all 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.color = '#111111';
                      el.style.background = '#F8F8F8';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.color = '#555555';
                      el.style.background = 'transparent';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  color: scrolled ? '#555555' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#111111' : '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#555555' : 'rgba(255,255,255,0.6)';
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
              className="hidden sm:inline-flex items-center no-underline v5-btn-primary"
              style={{
                background: scrolled ? '#111111' : '#FFFFFF',
                color: scrolled ? '#FFFFFF' : '#111111',
                borderRadius: '0px',
                padding: '10px 24px',
                fontSize: '13px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (scrolled) {
                  el.style.background = '#333333';
                } else {
                  el.style.background = '#F0F0F0';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = scrolled ? '#111111' : '#FFFFFF';
              }}
            >
              Reservar sesión →
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
              style={{ color: scrolled ? '#555555' : 'rgba(255,255,255,0.60)' }}
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
          width: '100%',
          maxWidth: '320px',
          height: '100vh',
          background: '#FFFFFF',
          zIndex: 999,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          borderLeft: '1px solid #E8E8E8',
          padding: '80px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <div style={{ marginBottom: '24px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Labs
        </div>
        {labsLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '18px',
              fontWeight: 300,
              color: '#555555',
              textDecoration: 'none',
              padding: '12px 0',
              borderBottom: '1px solid #E8E8E8',
            }}
          >
            {link.label}
          </Link>
        ))}

        <div style={{ marginTop: '32px', marginBottom: '24px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          General
        </div>
        {otherLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '18px',
              fontWeight: 300,
              color: '#555555',
              textDecoration: 'none',
              padding: '12px 0',
              borderBottom: '1px solid #E8E8E8',
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/systems-lab/sesion-de-claridad"
          onClick={() => setMobileOpen(false)}
          className="v5-btn-primary"
          style={{
            marginTop: 'auto',
            background: '#111111',
            color: '#FFFFFF',
            borderRadius: '0px',
            textAlign: 'center',
            justifyContent: 'center',
            padding: '16px 0',
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
            background: 'rgba(0,0,0,0.4)',
            zIndex: 998,
            backdropFilter: 'blur(4px)',
          }}
        />
      )}
    </>
  );
}

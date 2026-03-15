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
    { label: 'Labs', href: '/' },
    { label: 'Nosotros', href: '/sobre-nosotros' },
    { label: 'Casos', href: '/casos' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-20 z-[1000] flex items-center transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent border-b border-transparent'
        }`}>
        <div className="v5-container w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 no-underline group">
            <Image src="/aether-logo-white.png" alt="Aether Labs" width={60} height={60} className="object-contain transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden lg:block text-white font-display font-medium tracking-tighter text-xl">Aether Labs</span>
          </Link>

          {/* Desktop Nav Links - More space between them */}
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[13px] uppercase tracking-[0.2em] font-medium text-white/50 no-underline transition-all hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-8">
            <Link href="/contacto" className="v5-btn-primary !py-2.5 !px-7 !text-[13px] !rounded-full">
              Contacto
            </Link>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white bg-transparent border-none cursor-pointer"
              aria-label="Menú"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <div className={`fixed top-0 right-0 w-[300px] h-screen bg-zinc-950 z-[999] transition-transform duration-500 border-l border-white/10 px-8 pt-24 flex flex-col gap-2 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-white/70 no-underline py-4 border-b border-white/5 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contacto"
          onClick={() => setMobileOpen(false)}
          className="v5-btn-primary mt-6 !justify-center"
        >
          Contacto
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

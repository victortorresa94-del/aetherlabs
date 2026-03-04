'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Soluciones', href: '#soluciones' },
        { label: 'Achieve Apex AI', href: '/achieve-apex' },
        { label: 'Productos', href: '#productos' },
        { label: 'Sobre nosotros', href: '#credenciales' },
        { label: 'Contacto', href: '#cta' },
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
                    background: scrolled
                        ? 'rgba(10,10,10,0.92)'
                        : 'rgba(10,10,10,0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    transition: 'background 0.3s ease',
                }}
            >
                <div
                    style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        padding: '0 32px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* LEFT — Logo + version */}
                    <Link
                        href="/"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                        <Image
                            src="/aether-logo-white.png"
                            alt="Aether Labs"
                            width={110}
                            height={28}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                        <span
                            className="nav-version"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10px',
                                color: '#666',
                                letterSpacing: '0.05em',
                                marginTop: '2px',
                            }}
                        >
                            [v4.0]
                        </span>
                    </Link>

                    {/* CENTER — Nav links (desktop) */}
                    <div
                        className="desktop-nav"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px',
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                style={{
                                    color: '#888',
                                    textDecoration: 'none',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#888')}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT — CTA Button (desktop) + Hamburger (mobile) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <a
                            href="#cta"
                            className="desktop-nav"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: '#fff',
                                color: '#000',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 600,
                                fontSize: '13px',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                        >
                            Hablar con nosotros
                        </a>
                        {/* Hamburger */}
                        <button
                            className="hamburger-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'pointer',
                                padding: '10px',
                                borderRadius: '8px',
                                display: 'none',
                                width: '40px',
                                height: '40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <span
                                    style={{
                                        display: 'block',
                                        width: '18px',
                                        height: '1.5px',
                                        background: '#F5F5F5',
                                        transition: 'transform 0.2s, opacity 0.2s',
                                        transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
                                    }}
                                />
                                <span
                                    style={{
                                        display: 'block',
                                        width: menuOpen ? '18px' : '12px',
                                        height: '1.5px',
                                        background: '#F5F5F5',
                                        alignSelf: 'flex-end',
                                        transition: 'opacity 0.2s, width 0.2s',
                                        opacity: menuOpen ? 0 : 1,
                                    }}
                                />
                                <span
                                    style={{
                                        display: 'block',
                                        width: '18px',
                                        height: '1.5px',
                                        background: '#F5F5F5',
                                        transition: 'transform 0.2s, opacity 0.2s',
                                        transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
                                    }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 999,
                        background: 'rgba(10,10,10,0.97)',
                        backdropFilter: 'blur(24px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '32px',
                    }}
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                color: '#F5F5F5',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-display)',
                                fontSize: '32px',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#cta"
                        onClick={() => setMenuOpen(false)}
                        className="btn-outline-cyan"
                        style={{ marginTop: '16px', padding: '14px 32px', fontSize: '16px' }}
                    >
                        Hablar con nosotros
                    </a>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .nav-version {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .btn-outline-cyan:not(.mobile-visible) {
            display: none;
          }
        }
      `}</style>
        </>
    );
}

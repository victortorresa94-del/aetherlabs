'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClosiusNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                transition: 'all 0.4s ease',
                padding: scrolled ? '12px 0' : '24px 0',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Link href="/" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                        Aether Labs /
                    </Link>
                    <span style={{ fontSize: '18px', fontWeight: 500, color: '#fff', fontFamily: 'var(--font-display)' }}>
                        Closius
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <div className="nav-links" style={{ display: 'flex', gap: '24px' }}>
                        {['Cómo funciona', 'ROI', 'Precios', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                style={{
                                    fontSize: '14px',
                                    color: 'rgba(255,255,255,0.6)',
                                    textDecoration: 'none',
                                    fontFamily: 'var(--font-body)',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#cta"
                        style={{
                            background: 'var(--green)',
                            color: '#000',
                            padding: '10px 24px',
                            borderRadius: '100px',
                            fontSize: '14px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            fontFamily: 'var(--font-display)',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(130, 255, 31, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Solicitar Demo
                    </a>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
        </nav>
    );
}

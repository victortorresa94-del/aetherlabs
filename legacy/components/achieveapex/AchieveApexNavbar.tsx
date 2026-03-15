'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AchieveApexNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0,
            height: '70px', zIndex: 1000,
            background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
            transition: 'all 0.3s ease'
        }}>
            <div style={{
                maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
                height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Link href="/">
                        <Image src="/aether-logo-white.png" alt="Aether Labs" width={120} height={40} style={{ objectFit: 'contain' }} />
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="nav-badges">
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#444' }}>
                            / achieveapex
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#25D366',
                            border: '1px solid rgba(37,211,102,0.3)', padding: '2px 8px', borderRadius: '100px',
                            background: 'rgba(37,211,102,0.05)'
                        }}>
                            Partners Oficiales
                        </span>
                    </div>
                </div>

                <a href="https://achieveapex.com/signup?utm_source=aetherlabs&utm_medium=landing&utm_campaign=achieveapex-es"
                    target="_blank" rel="noopener noreferrer"
                    style={{
                        background: '#25D366', color: '#0A0A0A', fontFamily: 'var(--font-body)',
                        fontWeight: 700, fontSize: '14px', padding: '10px 24px', borderRadius: '100px',
                        textDecoration: 'none', transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(37,211,102,0.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                    Empezar gratis
                </a>
            </div>

            <style jsx>{`
                @media (max-width: 600px) {
                    .nav-badges { display: none !important; }
                }
            `}</style>
        </nav>
    );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ClosiusHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                background: '#0A0A0A',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '160px', /* Increased from 100px to clear navbar */
            }}
        >
            {/* Background Glows (v3 Atmos) */}
            <div style={{
                position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
                width: '80vw', height: '60vh',
                background: 'radial-gradient(ellipse at center, rgba(130, 60, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(100px)', pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', right: '-5%',
                width: '40vw', height: '40vh',
                background: 'radial-gradient(ellipse at center, rgba(0, 180, 255, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)', pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '6px 16px', borderRadius: '100px',
                    background: 'rgba(130, 255, 31, 0.1)', border: '1px solid rgba(130, 255, 31, 0.2)',
                    color: 'var(--green)', fontSize: '11px', fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: '32px',
                    opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(-10px)',
                    transition: 'all 0.8s ease 0.2s'
                }}>
                    Distribuidores Oficiales España & LATAM
                </div>

                <h1 style={{
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    lineHeight: 0.95,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    marginBottom: '24px',
                    opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)',
                    transition: 'all 0.8s ease'
                }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>El primer asistente IA</span> <br />
                    <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>para comerciales.</span>
                </h1>

                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(16px, 1.2vw, 20px)',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '800px',
                    margin: '0 auto 48px',
                    lineHeight: 1.6,
                    opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)',
                    transition: 'all 0.8s ease 0.2s'
                }}>
                    Analiza, guía y entrena a tu equipo de ventas
                    antes, durante y después de cada llamada.
                </p>

                {/* Dashboard Mockup - Progressive Reveal Animation */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '550px', /* Further reduced from 700px to fit well on screen */
                    margin: '0 auto 80px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(130, 255, 31, 0.1)',
                    background: '#0D0D0D',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(100px)',
                    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                }}>
                    <div style={{
                        height: '32px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '6px', /* Reduced header height */
                        borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#111'
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0D0D0D' }}>
                        <video
                            src="https://closius.ai/lovable-uploads/CLOSIUS_MINI3.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />
                        {/* Progressive Reveal Shimmer */}
                        <div className="progressive-render" style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(90deg, transparent, rgba(130, 255, 31, 0.05), transparent)',
                            transform: 'translateX(-100%)',
                            animation: 'shimmer 3s infinite'
                        }} />
                    </div>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap',
                    paddingBottom: '80px', /* Added padding specifically for the CTA area to give room before next section */
                    opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)',
                    transition: 'all 0.8s ease 0.6s' /* Staggered after video */
                }}>
                    <a href="#cta" style={{
                        background: 'var(--green)', color: '#000', padding: '14px 28px', /* Reduced padding */
                        borderRadius: '100px', fontSize: '15px', fontWeight: 600, /* Reduced font-size */
                        textDecoration: 'none', fontFamily: 'var(--font-display)',
                        boxShadow: '0 4px 20px rgba(130, 255, 31, 0.25)', /* Smaller shadow */
                        transition: 'transform 0.2s ease'
                    }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                        Solicitar Demo Gratuita
                    </a>
                    <a href="#roi" style={{
                        background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '14px 28px', /* Reduced padding */
                        borderRadius: '100px', fontSize: '15px', fontWeight: 400, /* Reduced font-size */
                        textDecoration: 'none', fontFamily: 'var(--font-display)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.2s ease'
                    }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                        Calcular ROI
                    </a>
                </div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
        </section>
    );
}

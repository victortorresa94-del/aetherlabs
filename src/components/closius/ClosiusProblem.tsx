'use client';

import { useState } from 'react';

export default function ClosiusProblem() {
    const [hover, setHover] = useState(false);

    return (
        <section
            id="problema"
            style={{
                padding: '120px 0',
                background: '#0D0D0D',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ EL PROBLEMA ]</div>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 48px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Vender a ciegas</span> <br />
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>te está costando dinero.</span>
                    </h2>
                </div>

                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px',
                        background: 'rgba(255,255,255,0.05)', borderRadius: '24px',
                        overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        cursor: 'default'
                    }}
                >
                    {/* BEFORE */}
                    <div style={{
                        padding: '60px', background: '#111', transition: 'all 0.5s ease',
                        opacity: hover ? 0.4 : 1, filter: hover ? 'grayscale(1)' : 'none'
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ff5f56', marginBottom: '32px', fontSize: '28px' }}>
                            Sin Closius: El Caos
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[
                                'Feedback subjetivo ("me ha ido bien")',
                                'La mejor info se queda en la cabeza del comercial',
                                'Analizar llamadas consume horas de managers',
                                'Nuevos fichajes tardan meses en ser rentables'
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>
                                    <span style={{ color: '#ff5f56' }}>✕</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AFTER */}
                    <div style={{
                        padding: '60px', background: '#0D0D0D', transition: 'all 0.5s ease',
                        position: 'relative', overflow: 'hidden',
                        boxShadow: hover ? 'inset 0 0 40px rgba(130, 255, 31, 0.1)' : 'none'
                    }}>
                        {/* Cyan glow background */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: '100%', height: '100%',
                            background: 'radial-gradient(circle, rgba(130, 255, 31, 0.05) 0%, transparent 70%)',
                            opacity: hover ? 1 : 0.5, transition: 'opacity 0.5s ease'
                        }} />

                        <h3 style={{
                            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)', marginBottom: '32px', fontSize: '28px',
                            position: 'relative'
                        }}>
                            Con Closius: La Inteligencia
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                            {[
                                'Feedback Data-Driven basado en 100% de llamadas',
                                'Repositorio centralizado de mejores prácticas',
                                'Coaching automático basado en KPIs reales',
                                'Ramp-up de comerciales un 40% más rápido'
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '12px', color: '#fff', fontFamily: 'var(--font-body)',
                                    transform: hover ? 'translateX(10px)' : 'none', transition: 'transform 0.5s ease'
                                }}>
                                    <span style={{ color: 'var(--green)' }}>✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

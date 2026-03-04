'use client';

import { useEffect, useRef } from 'react';

interface StatCard {
    number: string;
    text: string;
    label: string;
    accent?: string;
}

const STATS: StatCard[] = [
    {
        number: '73%',
        text: 'de las pymes españolas no ha implementado ninguna herramienta de IA en sus procesos comerciales.',
        label: '[FUENTE: INE 2024]',
    },
    {
        number: '6-18 meses',
        text: 'es el tiempo medio que tarda una empresa en evaluar, negociar e implementar un software de IA por su cuenta.',
        label: '[TIEMPO MEDIO DE ADOPCIÓN]',
    },
    {
        number: '#1',
        text: 'barrera de adopción de IA en empresas es la falta de un interlocutor de confianza que hable su idioma.',
        label: '[MCKINSEY GLOBAL AI SURVEY]',
        accent: '#a855f7',
    },
];

export default function GapSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="soluciones"
            ref={sectionRef}
            style={{
                background: '#0D0D0D',
                padding: '120px 0',
                position: 'relative',
            }}
        >
            {/* Subtle grid */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    pointerEvents: 'none',
                }}
                aria-hidden
            />

            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 80px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Label */}
                <div className="section-label reveal" style={{ marginBottom: '20px' }}>
                    [PROBLEMA DETECTADO]
                </div>

                {/* Title */}
                <h2
                    className="reveal reveal-delay-1"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(36px, 4.5vw, 56px)',
                        fontWeight: 700,
                        color: '#F5F5F5',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        maxWidth: '700px',
                    }}
                >
                    La tecnología existe.{' '}
                    <span style={{ color: '#888' }}>El acceso, no.</span>
                </h2>

                {/* Subtitle */}
                <p
                    className="reveal reveal-delay-2"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '18px',
                        color: '#888',
                        maxWidth: '700px',
                        lineHeight: 1.7,
                        marginBottom: '64px',
                    }}
                >
                    Las mejores soluciones de IA del mundo ya están construidas.
                    El problema es que la mayoría de empresas nunca las conocen,
                    no saben cómo integrarlas, o no confían en quien se las vende.
                </p>

                {/* Stats Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px',
                        marginBottom: '80px',
                    }}
                >
                    {STATS.map((stat, i) => (
                        <StatCard key={i} stat={stat} delay={i} />
                    ))}
                </div>

                {/* Bridge text */}
                <div
                    className="reveal"
                    style={{ textAlign: 'center', paddingTop: '16px' }}
                >
                    <div
                        style={{
                            width: '40px',
                            height: '1px',
                            background: 'var(--cyan)',
                            margin: '0 auto 24px',
                        }}
                    />
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '24px',
                            color: '#F5F5F5',
                            fontStyle: 'italic',
                            fontWeight: 400,
                        }}
                    >
                        Ahí es donde entra Aether Labs.
                    </p>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          section > div:nth-child(2) {
            padding: 0 24px !important;
          }
        }
      `}</style>
        </section>
    );
}

function StatCard({ stat, delay }: { stat: StatCard; delay: number }) {
    return (
        <div
            className={`reveal reveal-delay-${delay + 2} card-hover`}
            style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                cursor: 'default',
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '64px',
                    fontWeight: 800,
                    lineHeight: 1,
                    background: `linear-gradient(135deg, ${stat.accent || '#06b6d4'}, #a855f7)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.03em',
                }}
            >
                {stat.number}
            </div>
            <p
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#aaa',
                    lineHeight: 1.65,
                    flex: 1,
                }}
            >
                {stat.text}
            </p>
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: '#555',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                }}
            >
                {stat.label}
            </div>
        </div>
    );
}

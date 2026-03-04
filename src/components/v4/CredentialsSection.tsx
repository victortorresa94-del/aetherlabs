'use client';

import { useEffect, useRef, useState } from 'react';

const CREDENTIALS = [
    { org: 'KMELEON.TECH', desc: 'Partners estratégicos. 47+ proyectos de IA enterprise en USA y Latam.' },
    { org: 'MICROSOFT', desc: 'Distribuidores de Microsoft 365 y Copilot para empresas españolas.' },
    { org: 'TECH BARCELONA', desc: 'Miembros activos del ecosistema de startups de IA en Barcelona.' },
    { org: 'CLOSIUS.AI', desc: 'Distribuidores oficiales para España y LATAM.' },
    { org: 'ACHIEVEAPEX', desc: 'Partners certificados e implementadores.' },
];

const METRICS = [
    { number: 47, suffix: '+', label: 'Proyectos de IA ejecutados con Kmeleon' },
    { number: 3, suffix: '', label: 'Productos en catálogo activo' },
    { number: 24, suffix: 'h', label: 'Tiempo máximo de respuesta a cualquier consulta' },
    { number: 100, suffix: '%', label: 'Proyectos acompañados hasta adopción real' },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (!isVisible) return;
        const start = performance.now();
        const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOut cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [isVisible, target, duration]);

    return count;
}

function MetricCard({ number, suffix, label, visible }: {
    number: number; suffix: string; label: string; visible: boolean;
}) {
    const count = useCountUp(number, visible);
    return (
        <div
            style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '48px',
                    fontWeight: 800,
                    lineHeight: 1,
                    background: 'var(--green)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.03em',
                }}
            >
                {count}{suffix}
            </div>
            <div
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: '#888',
                    lineHeight: 1.55,
                }}
            >
                {label}
            </div>
        </div>
    );
}

export default function CredentialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [metricsVisible, setMetricsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        if ((entry.target as HTMLElement).dataset.metrics) {
                            setMetricsVisible(true);
                        }
                    }
                });
            },
            { threshold: 0.15 }
        );

        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach((el) => observer.observe(el));

        const metricsEl = sectionRef.current?.querySelector('[data-metrics]');
        if (metricsEl) observer.observe(metricsEl);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="credenciales"
            ref={sectionRef}
            style={{
                background: '#0D0D0D',
                padding: '120px 0',
                position: 'relative',
            }}
        >
            {/* Dot grid */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
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
                {/* Header */}
                <div className="section-label reveal" style={{ marginBottom: '16px' }}>
                    [CREDENCIALES]
                </div>
                <h2
                    className="reveal reveal-delay-1"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        fontWeight: 700,
                        color: '#F5F5F5',
                        letterSpacing: '-0.02em',
                        marginBottom: '8px',
                    }}
                >
                    No somos un reseller más.
                </h2>
                <p
                    className="reveal reveal-delay-2"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '20px',
                        color: '#888',
                        marginBottom: '64px',
                    }}
                >
                    Venimos de dentro de la industria.
                </p>

                {/* 2 column layout */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px',
                        alignItems: 'start',
                    }}
                >
                    {/* LEFT — Text + log credentials */}
                    <div>
                        <p
                            className="reveal"
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '17px',
                                color: '#aaa',
                                lineHeight: 1.75,
                                marginBottom: '40px',
                            }}
                        >
                            Hemos trabajado con las empresas que construyen esta tecnología.
                            Sabemos cómo funciona por dentro, qué promete de más y dónde está
                            el valor real. Por eso podemos ser el filtro que tu empresa necesita.
                        </p>

                        {/* Credential logs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {CREDENTIALS.map((c, i) => (
                                <div
                                    key={i}
                                    className={`reveal reveal-delay-${i + 1}`}
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '13px',
                                        color: '#888',
                                        lineHeight: 1.55,
                                    }}
                                >
                                    <span style={{ color: 'var(--green)' }}>{'>'}</span>{' '}
                                    <span style={{ color: 'var(--green)' }}>[{c.org}]</span>{' '}
                                    <span style={{ color: '#555' }}>—</span>{' '}
                                    {c.desc}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Metrics 2x2 */}
                    <div
                        data-metrics="true"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '16px',
                        }}
                    >
                        {METRICS.map((m, i) => (
                            <MetricCard
                                key={i}
                                number={m.number}
                                suffix={m.suffix}
                                label={m.label}
                                visible={metricsVisible}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 900px) {
          section > div:nth-child(2) > div:last-child {
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

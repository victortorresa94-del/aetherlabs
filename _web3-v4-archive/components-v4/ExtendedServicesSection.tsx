'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
    {
        title: 'Desarrollo a medida',
        desc: 'Conectamos con ingenieros especializados. Equipo en Colombia, España y LATAM.',
        href: '#cta',
    },
    {
        title: 'Formación corporativa en IA',
        desc: 'Talleres, workshops y formación práctica para equipos.',
        href: '#cta',
    },
    {
        title: 'Oportunidades de colaboración',
        desc: 'Si tienes un producto tech sin presencia en España, hablemos.',
        href: '#cta',
    },
];

export default function ExtendedServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('revealed');
                });
            },
            { threshold: 0.1 }
        );
        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#0A0A0A',
                padding: '80px 0',
                borderTop: '1px solid #1A1A1A',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 80px',
                }}
            >
                <div className="section-label reveal" style={{ marginBottom: '16px' }}>
                    [EXTENDED SERVICES]
                </div>
                <h2
                    className="reveal reveal-delay-1"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '32px',
                        fontWeight: 500,
                        color: '#F5F5F5',
                        letterSpacing: '-0.01em',
                        marginBottom: '40px',
                    }}
                >
                    ¿Necesitas algo más específico?
                </h2>

                <div
                    style={{
                        display: 'flex',
                        gap: '48px',
                        flexWrap: 'wrap',
                    }}
                >
                    {SERVICES.map((s, i) => (
                        <div
                            key={i}
                            className={`reveal reveal-delay-${i + 2}`}
                            style={{ flex: '1', minWidth: '220px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                                <span
                                    style={{
                                        color: 'var(--cyan)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '14px',
                                        marginTop: '1px',
                                        flexShrink: 0,
                                    }}
                                >
                                    →
                                </span>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: '#F5F5F5',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {s.title}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '14px',
                                            color: '#666',
                                            lineHeight: 1.6,
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {s.desc}
                                    </div>
                                    <a
                                        href={s.href}
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '13px',
                                            color: '#555',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#aaa')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                                    >
                                        Consultar →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            padding: 0 24px !important;
          }
        }
      `}</style>
        </section>
    );
}

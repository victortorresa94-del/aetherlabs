'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
    {
        num: '01',
        title: 'Seleccionamos lo mejor del mercado global',
        text: 'Evaluamos centenares de herramientas de IA para quedarnos solo con las que tienen tracción real, modelo de negocio sólido y producto probado. Nada de humo. Solo lo que funciona.',
        checks: [
            'Producto con tracción real',
            'Modelo SaaS recurrente',
            'Soporte y roadmap activo',
            'Compatible con mercado español/europeo',
        ],
        label: 'CURACIÓN',
        color: '#82ff1f',
    },
    {
        num: '02',
        title: 'Lo distribuimos bajo nuestra marca y criterio',
        text: 'Somos el canal de confianza. Ponemos nuestra narrativa, nuestro acceso al mercado español y nuestra red de contactos para que los mejores productos lleguen a quien los necesita, cuando los necesita.',
        diagram: true,
        label: 'DISTRIBUCIÓN',
        color: '#5ed21a',
    },
    {
        num: '03',
        title: 'Implementamos, formamos y garantizamos',
        text: 'No dejamos a nadie solo con un login. Acompañamos la adopción, formamos al equipo y somos el punto de contacto permanente. La tecnología cambia. Nosotros nos adaptamos con tu empresa.',
        timeline: ['Onboarding', 'Formación', 'Soporte', 'Optimización'],
        label: 'ACOMPAÑAMIENTO',
        color: '#82ff1f',
    },
];

export default function BridgeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index >= 0) setActiveStep(index);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="como-funciona"
            ref={containerRef}
            style={{
                background: '#0A0A0A',
                position: 'relative',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 80px',
                    display: 'flex',
                    gap: '80px',
                    alignItems: 'flex-start',
                }}
            >
                {/* LEFT STICKY PANEL */}
                <div
                    style={{
                        width: '380px',
                        flexShrink: 0,
                        position: 'sticky',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        alignSelf: 'flex-start',
                        padding: '120px 0',
                    }}
                >
                    <div className="section-label" style={{ marginBottom: '20px' }}>
                        [METODOLOGÍA]
                    </div>
                    <h2
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(28px, 3vw, 48px)',
                            fontWeight: 700,
                            color: '#F5F5F5',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.15,
                            marginBottom: '16px',
                        }}
                    >
                        El puente funciona en tres movimientos.
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            color: '#888',
                            lineHeight: 1.65,
                            marginBottom: '40px',
                        }}
                    >
                        No vendemos software. Construimos el camino entre la mejor
                        tecnología del mundo y tu negocio.
                    </p>

                    {/* Step progress lines */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {STEPS.map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        color: i <= activeStep ? s.color : '#444',
                                        transition: 'color 0.4s ease',
                                        width: '24px',
                                    }}
                                >
                                    {s.num}
                                </span>
                                <div
                                    style={{
                                        flex: 1,
                                        height: '2px',
                                        background: i <= activeStep ? s.color : 'rgba(255,255,255,0.1)',
                                        borderRadius: '1px',
                                        transition: 'background 0.4s ease',
                                        boxShadow: i <= activeStep ? `0 0 6px ${s.color}44` : 'none',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SCROLLING PANELS */}
                <div style={{ flex: 1, padding: '120px 0' }}>
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            ref={(el) => { if (el) stepRefs.current[i] = el; }}
                            style={{
                                minHeight: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                opacity: activeStep === i ? 1 : 0.3,
                                transition: 'opacity 0.5s ease',
                            }}
                        >
                            <div style={{ maxWidth: '520px' }}>
                                {/* Step icon + label */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '24px',
                                    }}
                                >
                                    <StepIcon index={i} color={step.color} />
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '11px',
                                            color: step.color,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        [{step.label}]
                                    </span>
                                </div>

                                {/* Step number */}
                                <div
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '72px',
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,0.04)',
                                        lineHeight: 1,
                                        marginBottom: '-20px',
                                        userSelect: 'none',
                                    }}
                                >
                                    {step.num}
                                </div>

                                <h3
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(24px, 2.5vw, 36px)',
                                        fontWeight: 700,
                                        color: '#F5F5F5',
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.2,
                                        marginBottom: '20px',
                                    }}
                                >
                                    {step.title}
                                </h3>

                                <p
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '17px',
                                        color: '#888',
                                        lineHeight: 1.7,
                                        marginBottom: '32px',
                                    }}
                                >
                                    {step.text}
                                </p>

                                {/* Checks */}
                                {step.checks && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {step.checks.map((check, ci) => (
                                            <div
                                                key={ci}
                                                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                            >
                                                <span style={{ color: step.color, fontSize: '14px' }}>✓</span>
                                                <span
                                                    style={{
                                                        fontFamily: 'var(--font-body)',
                                                        fontSize: '14px',
                                                        color: '#aaa',
                                                    }}
                                                >
                                                    {check}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Diagram */}
                                {step.diagram && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '20px 24px',
                                            background: 'rgba(130,255,31,0.06)',
                                            border: '1px solid rgba(130,255,31,0.2)',
                                            borderRadius: '8px',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        {['Producto tech', 'Aether Labs', 'Empresa española'].map((label, fi) => (
                                            <span key={fi} style={{ display: 'contents' }}>
                                                <span
                                                    style={{
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '12px',
                                                        color: fi === 1 ? '#82ff1f' : '#aaa',
                                                        padding: '6px 12px',
                                                        border: `1px solid ${fi === 1 ? '#82ff1f' : 'rgba(255,255,255,0.1)'}`,
                                                        borderRadius: '4px',
                                                        fontWeight: fi === 1 ? 600 : 400,
                                                    }}
                                                >
                                                    {label}
                                                </span>
                                                {fi < 2 && (
                                                    <span style={{ color: '#555', fontSize: '14px' }}>→</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Timeline */}
                                {step.timeline && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                                        {step.timeline.map((item, ti) => (
                                            <div key={ti} style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                    <div
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            borderRadius: '50%',
                                                            background: '#82ff1f',
                                                            boxShadow: '0 0 8px rgba(130,255,31,0.4)',
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '11px',
                                                            color: '#888',
                                                            whiteSpace: 'nowrap',
                                                        }}
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                                {ti < step.timeline!.length - 1 && (
                                                    <div
                                                        style={{
                                                            width: '48px',
                                                            height: '1px',
                                                            background: 'rgba(130,255,31,0.3)',
                                                            marginBottom: '20px',
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          section > div {
            flex-direction: column !important;
            padding: 0 24px !important;
          }
          /* Disable sticky on mobile */
          div[style*="sticky"] {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            padding: 80px 0 40px !important;
          }
          div[style*="100vh"] {
            min-height: unset !important;
            padding: 60px 0 !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>
        </section>
    );
}

function StepIcon({ index, color }: { index: number; color: string }) {
    const icons = [
        // Radar/scan
        <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke={color} strokeWidth="1" opacity="0.3" />
            <circle cx="14" cy="14" r="7" stroke={color} strokeWidth="1" opacity="0.5" />
            <circle cx="14" cy="14" r="2.5" fill={color} />
            <line x1="14" y1="14" x2="22" y2="6" stroke={color} strokeWidth="1" opacity="0.7" />
        </svg>,
        // Network expand
        <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="3" fill={color} />
            <circle cx="5" cy="7" r="2" fill={color} opacity="0.6" />
            <circle cx="23" cy="7" r="2" fill={color} opacity="0.6" />
            <circle cx="5" cy="21" r="2" fill={color} opacity="0.6" />
            <circle cx="23" cy="21" r="2" fill={color} opacity="0.6" />
            <line x1="14" y1="14" x2="5" y2="7" stroke={color} strokeWidth="1" opacity="0.5" />
            <line x1="14" y1="14" x2="23" y2="7" stroke={color} strokeWidth="1" opacity="0.5" />
            <line x1="14" y1="14" x2="5" y2="21" stroke={color} strokeWidth="1" opacity="0.5" />
            <line x1="14" y1="14" x2="23" y2="21" stroke={color} strokeWidth="1" opacity="0.5" />
        </svg>,
        // Shield/anchor
        <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 3 L24 7 L24 16 C24 22 14 26 14 26 C14 26 4 22 4 16 L4 7 Z" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
            <circle cx="14" cy="14" r="3" fill={color} opacity="0.8" />
        </svg>,
    ];
    return icons[index] || icons[0];
}

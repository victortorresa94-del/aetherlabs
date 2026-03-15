'use client';

import { useEffect, useRef } from 'react';

export default function CtaSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('revealed');
                });
            },
            { threshold: 0.2 }
        );
        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="cta"
            ref={sectionRef}
            style={{
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '120px 24px',
                position: 'relative',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #0D1117, #0A0A0A)',
            }}
        >
            {/* Neon glow center */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '300px',
                    background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
                aria-hidden
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
                <div className="section-label reveal" style={{ marginBottom: '20px', justifyContent: 'center', display: 'flex' }}>
                    [PRÓXIMO PASO]
                </div>

                <h2
                    className="reveal reveal-delay-1"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(36px, 5.5vw, 64px)',
                        fontWeight: 700,
                        color: '#F5F5F5',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                        marginBottom: '20px',
                    }}
                >
                    ¿Tu empresa ya trabaja con IA?
                </h2>

                <p
                    className="reveal reveal-delay-2"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '18px',
                        color: '#888',
                        lineHeight: 1.7,
                        marginBottom: '48px',
                        maxWidth: '560px',
                        margin: '0 auto 48px',
                    }}
                >
                    Si no, es momento de que alguien de confianza te cuente qué existe,
                    qué encaja contigo y qué no. Sin venderte la moto.
                </p>

                {/* Two CTA cards */}
                <div
                    className="reveal reveal-delay-3"
                    style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '32px',
                    }}
                >
                    {/* Option A */}
                    <a
                        href="#productos"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '18px 28px',
                            border: '1px solid rgba(0,229,255,0.5)',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            color: '#06b6d4',
                            fontFamily: 'var(--font-body)',
                            fontSize: '15px',
                            fontWeight: 600,
                            background: 'transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(0,229,255,0.08)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,229,255,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span>→</span>
                        <span>Ver nuestras soluciones</span>
                    </a>

                    {/* Option B */}
                    <a
                        href="https://wa.me/34600000000?text=Hola%20Víctor%2C%20me%20gustaría%20conocer%20más%20sobre%20las%20soluciones%20de%20Aether%20Labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            padding: '18px 28px',
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <WhatsAppIcon />
                        Hablar directamente con Víctor
                    </a>
                </div>

                {/* Footer note */}
                <div
                    className="reveal"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: '#444',
                        letterSpacing: '0.05em',
                    }}
                >
                    Sin compromiso. Respuesta en menos de 24 horas. Basados en Barcelona.
                </div>
            </div>
        </section>
    );
}

function WhatsAppIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

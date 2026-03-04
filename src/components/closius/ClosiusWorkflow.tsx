'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
    {
        num: '01',
        title: 'Analiza',
        label: 'ESCUCHA ACTIVA',
        text: 'Closius registra y transcribe cada llamada, identificando objeciones, sentimientos y momentos clave automáticamente.',
        accent: 'var(--green)',
        metric: '100%',
        metricLabel: 'Llamadas Analizadas'
    },
    {
        num: '02',
        title: 'Guía',
        label: 'REAL-TIME ASSISTANCE',
        text: 'Recibe sugerencias y respuestas a objeciones en tiempo real mientras hablas con el cliente.',
        accent: 'var(--green)',
        metric: '-30%',
        metricLabel: 'Tiempo de Cierre'
    },
    {
        num: '03',
        title: 'Entrena',
        label: 'PERSONALIZED COACHING',
        text: 'Genera planes de entrenamiento personalizados para cada comercial basados en sus puntos débiles reales.',
        accent: 'var(--green)',
        metric: '+25%',
        metricLabel: 'Tasa de Conversión'
    }
];

export default function ClosiusWorkflow() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % STEPS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="cómo-funciona"
            style={{
                padding: '120px 0',
                background: '#0A0A0A',
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ marginBottom: '80px' }}>
                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ WORKFLOW ]</div>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 48px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        maxWidth: '600px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Un ciclo de mejora</span> <br />
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>que no se detiene.</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            onClick={() => setActive(i)}
                            style={{
                                padding: '40px', background: active === i ? '#111' : '#0D0D0D',
                                borderRadius: '24px', border: `1px solid ${active === i ? step.accent + '44' : 'rgba(255,255,255,0.05)'}`,
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                cursor: 'pointer',
                                transform: active === i ? 'translateY(-10px)' : 'none',
                                boxShadow: active === i ? `0 20px 40px ${step.accent}11` : 'none'
                            }}
                        >
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '14px', color: step.accent,
                                marginBottom: '24px', letterSpacing: '0.1em'
                            }}>
                                [{step.label}]
                            </div>

                            <h3 style={{
                                fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '30px', fontWeight: 400,
                                color: '#fff', marginBottom: '16px'
                            }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'normal', fontSize: '24px', fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>{step.num}.</span> {step.title}
                            </h3>

                            <p style={{
                                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.6, marginBottom: '40px'
                            }}>
                                {step.text}
                            </p>

                            <div style={{
                                borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px'
                            }}>
                                <div style={{
                                    fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 500,
                                    color: step.accent, lineHeight: 1
                                }}>
                                    {step.metric}
                                </div>
                                <div style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(255,255,255,0.3)',
                                    textTransform: 'uppercase', marginTop: '8px'
                                }}>
                                    {step.metricLabel}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1000px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

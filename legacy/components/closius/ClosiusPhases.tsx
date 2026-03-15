'use client';

import { useEffect, useState } from 'react';

const PHASES = [
    {
        id: 'before',
        tag: 'ANTES',
        title: 'Prepara tu llamada',
        description: 'Closius escanea tu CRM y el histórico de emails en segundos. Tus comerciales entran a cada reunión con el contexto perfecto, sabiendo exactamente por dónde atacar.',
        video: 'https://closius.ai/lovable-uploads/closius-ask.mp4',
    },
    {
        id: 'during',
        tag: 'DURANTE',
        title: 'Coaching en Vivo',
        description: 'Un copiloto táctico que escucha la llamada. Te chiva datos clave, rebate objeciones al instante y asegura que nunca te quedes en blanco ante un prospecto difícil.',
        video: 'https://closius.ai/lovable-uploads/closius-realtime.mp4',
    },
    {
        id: 'after',
        tag: 'DESPUÉS',
        title: 'Insights Accionables',
        description: 'La pesadilla del CRM ha terminado. Closius resume la reunión, extrae los siguientes pasos y actualiza tu base de datos automáticamente. Solo vende, la IA hace el resto.',
        video: 'https://closius.ai/lovable-uploads/closius-After-call.mp4',
    }
];

export default function ClosiusPhases() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section
            id="cómo-funciona"
            style={{
                padding: '120px 0',
                background: '#0A0A0A',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ EL PROCESO ]</div>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 48px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Dominio total en</span> <br />
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>cada fase de la venta.</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                }}>
                    {PHASES.map((phase) => (
                        <div key={phase.id} style={{
                            background: '#111',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            className="phase-card"
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                                e.currentTarget.style.borderColor = 'rgba(130, 255, 31, 0.2)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            }}
                        >
                            {/* Video Side - Top */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/10',
                                position: 'relative',
                                backgroundColor: '#000',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <video
                                    src={phase.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Text Side - Bottom */}
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                                    color: 'var(--green)', letterSpacing: '0.1em',
                                    marginBottom: '16px', textTransform: 'uppercase'
                                }}>
                                    {phase.tag}
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 500,
                                    color: '#fff', marginBottom: '16px', lineHeight: 1.2
                                }}>
                                    {phase.title}
                                </h3>
                                <p style={{
                                    fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300,
                                    color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1
                                }}>
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    div[style*="grid-template-columns: repeat(3, 1fr)"] {
                        grid-template-columns: 1fr !important;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
}

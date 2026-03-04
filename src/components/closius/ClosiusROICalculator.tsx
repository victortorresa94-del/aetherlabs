'use client';

import { useState, useEffect } from 'react';

export default function ClosiusROICalculator() {
    const [calls, setCalls] = useState(1000);
    const [conv, setConv] = useState(10);
    const [ticket, setTicket] = useState(2000);
    const [roi, setRoi] = useState(0);

    useEffect(() => {
        // Logic: Closius usually improves conversion by ~15-25%
        // Let's assume a conservative 15% improvement on the BASE conversion
        const improvement = 1.20; // 20% improvement
        const currentRevenue = calls * (conv / 100) * ticket;
        const futureRevenue = calls * ((conv * improvement) / 100) * ticket;
        const gain = futureRevenue - currentRevenue;
        setRoi(Math.round(gain));
    }, [calls, conv, ticket]);

    return (
        <section
            id="roi"
            style={{
                padding: '120px 0',
                background: '#0D0D0D',
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center',
                    background: '#111', padding: '80px', borderRadius: '40px',
                    border: '1px solid rgba(130, 255, 31, 0.1)'
                }}>
                    <div>
                        <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ CALCULADORA ROI ]</div>
                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px'
                        }}>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Mide el impacto</span> <br />
                            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>en tu facturación.</span>
                        </h2>
                        <p style={{
                            fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.6, marginBottom: '48px'
                        }}>
                            Ajusta los valores de tu equipo comercial y descubre cuánto dinero
                            estás dejando sobre la mesa por no optimizar cada conversación.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <InputRange
                                label="Llamadas/Demos anuales"
                                value={calls}
                                min={100} max={10000} step={100}
                                onChange={setCalls} suffix=""
                            />
                            <InputRange
                                label="Tasa de conversión actual (%)"
                                value={conv}
                                min={1} max={50} step={1}
                                onChange={setConv} suffix="%"
                            />
                            <InputRange
                                label="Ticket medio de venta (EUR)"
                                value={ticket}
                                min={100} max={20000} step={100}
                                onChange={setTicket} suffix="€"
                            />
                        </div>
                    </div>

                    <div style={{
                        textAlign: 'center', padding: '60px', borderRadius: '32px',
                        background: 'linear-gradient(135deg, rgba(130, 255, 31, 0.1), rgba(0, 0, 0, 0.2))',
                        border: '1px solid rgba(130, 255, 31, 0.2)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '16px' }}>
                            INCREMENTO ANUAL ESTIMADO
                        </div>
                        <div style={{
                            fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300,
                            color: 'var(--green)', lineHeight: 1, letterSpacing: '-0.04em',
                            marginBottom: '16px'
                        }}>
                            +{roi.toLocaleString()}€
                        </div>
                        <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)', maxWidth: '280px', margin: '0 auto 40px' }}>
                            Basado en una mejora del 20% en la eficiencia comercial con Closius.
                        </p>
                        <a href="#cta" style={{
                            display: 'block', background: '#fff', color: '#000', padding: '16px',
                            borderRadius: '100px', fontSize: '16px', fontWeight: 600,
                            textDecoration: 'none', fontFamily: 'var(--font-display)', transition: 'transform 0.2s ease'
                        }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                            Obtener este resultado →
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1000px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; padding: 40px !important; }
        }
      `}</style>
        </section>
    );
}

function InputRange({ label, value, min, max, step, onChange, suffix }: any) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)', fontWeight: 600 }}>{value}{suffix}</span>
            </div>
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                    width: '100%', accentColor: 'var(--green)', cursor: 'pointer', outline: 'none'
                }}
            />
        </div>
    );
}

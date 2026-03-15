'use client';

import { useEffect, useState } from 'react';

export default function AchieveApexProblem() {
    const [mockupState, setMockupState] = useState<'chaos' | 'organized'>('chaos');

    useEffect(() => {
        // Toggle the mockup state every 5 seconds to show before/after
        const interval = setInterval(() => {
            setMockupState(prev => prev === 'chaos' ? 'organized' : 'chaos');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="problema" style={{
            padding: '120px 0',
            background: '#0D0D0D',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        color: '#FFB800', fontSize: '11px', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        [ REALIDAD DE TU NEGOCIO ]
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Tu WhatsApp de empresa es un caos. Y te está costando ventas.</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 18px)', fontWeight: 300,
                        color: '#888', maxWidth: '640px', margin: '0 auto'
                    }}>
                        Cada mensaje sin responder es un lead que se fue. Cada seguimiento olvidado es una venta de tu competencia.
                    </p>
                </div>

                {/* Inbox Mockup Visualizer */}
                <div style={{
                    maxWidth: '800px', margin: '0 auto 40px',
                    background: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)',
                    overflow: 'hidden', position: 'relative',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.5)'
                }}>
                    <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔥</div>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px' }}>Mi Empresa S.L.</span>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => setMockupState('chaos')} style={{
                                background: mockupState === 'chaos' ? 'rgba(255,184,0,0.1)' : 'transparent',
                                color: mockupState === 'chaos' ? '#FFB800' : '#666',
                                border: `1px solid ${mockupState === 'chaos' ? '#FFB800' : 'rgba(255,255,255,0.1)'}`,
                                padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontFamily: 'var(--font-mono)', cursor: 'pointer'
                            }}>Antes</button>
                            <button onClick={() => setMockupState('organized')} style={{
                                background: mockupState === 'organized' ? 'rgba(37,211,102,0.1)' : 'transparent',
                                color: mockupState === 'organized' ? '#25D366' : '#666',
                                border: `1px solid ${mockupState === 'organized' ? '#25D366' : 'rgba(255,255,255,0.1)'}`,
                                padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontFamily: 'var(--font-mono)', cursor: 'pointer'
                            }}>Con AchieveApex</button>
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '360px' }}>
                        {/* Chaos State */}
                        <div style={{
                            position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
                            opacity: mockupState === 'chaos' ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: mockupState === 'chaos' ? 'auto' : 'none'
                        }}>
                            <div className="chat-item" style={{ borderLeft: '3px solid #FFB800' }}>
                                <div className="chat-header"><span>+34 600 123 456</span><span style={{ color: '#FFB800' }}>hace 3 horas sin responder</span></div>
                                <div className="chat-preview">Hola, me interesa vuestro servicio para my clínica...</div>
                            </div>
                            <div className="chat-item" style={{ borderLeft: '3px solid #FF4444' }}>
                                <div className="chat-header"><span>María Lopez</span><span style={{ color: '#FF4444' }}>hace 1 día</span></div>
                                <div className="chat-preview">¿Siguen disponibles? ¿Cuánto cuesta la implementación?</div>
                            </div>
                            <div className="chat-item" style={{ borderLeft: '3px solid #FFB800' }}>
                                <div className="chat-header"><span>+34 699 888 777</span><span style={{ color: '#FFB800' }}>hace 6 horas</span></div>
                                <div className="chat-preview">audio_message.ogg (0:45)</div>
                            </div>
                            <div style={{ position: 'absolute', right: '32px', top: '32px', background: '#FF4444', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>14</div>
                        </div>

                        {/* Organized State */}
                        <div style={{
                            position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
                            opacity: mockupState === 'organized' ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: mockupState === 'organized' ? 'auto' : 'none'
                        }}>
                            <div className="chat-item" style={{ borderLeft: '3px solid #25D366' }}>
                                <div className="chat-header"><span>+34 600... (Lead Cualificado)</span><span style={{ color: '#25D366' }}>IA respondió hace 1m</span></div>
                                <div className="chat-preview">¡Perfecto! El precio base es 500€. ¿Agendamos llamada?</div>
                            </div>
                            <div className="chat-item" style={{ borderLeft: '3px solid #25D366' }}>
                                <div className="chat-header"><span>María Lopez (Reactivada)</span><span style={{ color: '#25D366' }}>IA hizo seguimiento ayer</span></div>
                                <div className="chat-preview">Respuesta automática: Sí, seguimos disponibles. Hemos enviado el catálogo.</div>
                            </div>
                            <div className="chat-item" style={{ borderLeft: '3px solid #00E5FF' }}>
                                <div className="chat-header"><span>+34 699... (Asignado a David)</span><span style={{ color: '#00E5FF' }}>Transcrito por IA</span></div>
                                <div className="chat-preview">"Vale, me parece bien el presupuesto de ayer. Adelante."</div>
                            </div>
                            <div style={{ position: 'absolute', right: '32px', top: '32px', background: '#25D366', color: '#111', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>✓</div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#444' }}>
                        {mockupState === 'chaos' ? 'Esto es lo que pasa sin sistema. ↑' : 'Esto es AchieveApex. ↓'}
                    </span>
                </div>

                {/* Data Points */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
                    borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '64px'
                }}>
                    <div className="data-point">
                        <div style={{ color: '#FFB800', fontSize: '48px', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '12px', lineHeight: 1 }}>80%</div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888', lineHeight: 1.5 }}>
                            de los leads pierden interés si no reciben respuesta en la primera hora.
                        </p>
                    </div>
                    <div className="data-point">
                        <div style={{ color: '#FFB800', fontSize: '48px', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '12px', lineHeight: 1 }}>40%</div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888', lineHeight: 1.5 }}>
                            de los mensajes en WhatsApp de empresa no se responden en horario laboral.
                        </p>
                    </div>
                    <div className="data-point">
                        <div style={{ color: '#FFB800', fontSize: '48px', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '12px', lineHeight: 1 }}>×3</div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888', lineHeight: 1.5 }}>
                            más tiempo invierte un equipo sin sistema en gestión de conversaciones vs. con IA.
                        </p>
                    </div>
                    <div className="data-point transition-color">
                        <div style={{ color: '#25D366', fontSize: '48px', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '12px', lineHeight: 1 }}>0€</div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888', lineHeight: 1.5 }}>
                            coste para empezar con AchieveApex hoy. Gratis de verdad.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .chat-item {
                    background: #1A1A1A; padding: 16px 20px; border-radius: 8px;
                }
                .chat-header {
                    display: flex; justify-content: space-between; font-family: var(--font-body);
                    font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 8px;
                }
                .chat-header span:last-child {
                    font-family: var(--font-mono); font-size: 10px; font-weight: 400;
                }
                .chat-preview {
                    font-family: var(--font-body); font-size: 13px; color: #888;
                }
                
                @media (max-width: 900px) {
                    div[style*="grid-template-columns: repeat(4, 1fr)"] {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    div[style*="grid-template-columns: repeat(4, 1fr)"] {
                        grid-template-columns: 1fr !important; gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
}

'use client';

import { MessageSquare, Zap, RefreshCcw, UserPlus, Mic, Database, LineChart, Mail } from 'lucide-react';

const FEATURES = [
    {
        icon: <MessageSquare size={32} color="#25D366" />,
        accent: '#25D366',
        title: 'Conversaciones Omnicanal',
        desc: 'WhatsApp, Instagram, Facebook y Email en un solo panel. Tu IA responde en todos simultáneamente.',
    },
    {
        icon: <Zap size={32} color="#00E5FF" />,
        accent: '#00E5FF',
        title: 'IA que cierra deals',
        desc: 'La IA detecta intención de compra, cualifica al lead y empuja hacia el cierre sin intervención humana.',
    },
    {
        icon: <RefreshCcw size={32} color="#25D366" />,
        accent: '#25D366',
        title: 'Automatización de seguimientos',
        desc: 'Secuencias automáticas de follow-up que se activan según comportamiento del lead. Nunca más un lead olvidado.',
    },
    {
        icon: <UserPlus size={32} color="#00E5FF" />,
        accent: '#00E5FF',
        title: 'Asignación inteligente',
        desc: 'Cuando el lead está listo para hablar con un humano, la IA lo asigna al comercial correcto con todo el contexto preparado.',
    },
    {
        icon: <Mic size={32} color="#25D366" />,
        accent: '#25D366',
        title: 'Voz a texto en tiempo real',
        desc: 'Los audios de WhatsApp se transcriben instantáneamente. Nunca más escuchar un audio de 3 minutos para saber si vale.',
    },
    {
        icon: <Database size={32} color="#00E5FF" />,
        accent: '#00E5FF',
        title: 'CRM inteligente integrado',
        desc: 'Cada conversación alimenta el CRM automáticamente. Tu pipeline siempre actualizado sin que nadie toque nada.',
    },
    {
        icon: <LineChart size={32} color="#25D366" />,
        accent: '#25D366',
        title: 'Analytics en tiempo real',
        desc: 'Dashboard completo: volumen de conversaciones, tasa de conversión por canal, rendimiento del equipo, deals en curso.',
    },
    {
        icon: <Mail size={32} color="#00E5FF" />,
        accent: '#00E5FF',
        title: 'Gestión de email con IA',
        desc: 'Tu IA gestiona el inbox de email con el mismo criterio que WhatsApp. Prioriza, responde y escala según reglas tuyas.',
    },
];

export default function AchieveApexFeatures() {
    return (
        <section style={{
            padding: '120px 0',
            background: '#0A0A0A',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        color: '#25D366', fontSize: '11px', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        [ EL SISTEMA ]
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Una IA que gestiona, cierra y aprende por ti.</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 18px)', fontWeight: 300,
                        color: '#888', maxWidth: '640px', margin: '0 auto'
                    }}>
                        No es un chatbot básico. Es un sistema completo de gestión comercial conversacional.
                    </p>
                </div>

                <div className="features-grid">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="feature-card" style={{
                            background: '#111',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderLeft: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '8px', padding: '32px 24px',
                            transition: 'all 0.3s ease', cursor: 'default',
                            ['--accent' as any]: feature.accent
                        }}>
                            <div className="feature-icon" style={{ marginBottom: '24px' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                                color: '#fff', marginBottom: '12px', lineHeight: 1.3
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888',
                                lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical', overflow: 'hidden'
                            }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }
                .feature-card:hover {
                    border-left: 3px solid var(--accent) !important;
                    transform: translateY(-4px);
                    background: #151515 !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                @media (max-width: 1024px) {
                    .features-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                    .features-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}

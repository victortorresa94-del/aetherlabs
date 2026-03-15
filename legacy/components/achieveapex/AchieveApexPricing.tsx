'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const PLANS = [
    {
        name: 'Gratis para siempre',
        priceMonthly: '0€/mes',
        priceAnnual: '0€/mes',
        includes: [
            '1 usuario',
            '100 contactos',
            '20 deals',
            '1 asistente IA',
            '1 automatización'
        ],
        ctaText: 'Empezar gratis',
        popular: false
    },
    {
        name: 'Basic',
        priceMonthly: '$49/mes',
        priceAnnual: '$39/mes',
        includes: [
            '2 usuarios',
            '10.000 contactos',
            '1.000 deals',
            '2 asistentes IA',
            '10 automatizaciones'
        ],
        ctaText: 'Empezar con Basic',
        popular: false
    },
    {
        name: 'Professional',
        priceMonthly: '$99/mes',
        priceAnnual: '$79/mes',
        includes: [
            'Usuarios ilimitados',
            '150.000 contactos',
            '20.000 deals',
            '5 asistentes IA',
            'Automatizaciones ilimitadas'
        ],
        ctaText: 'Empezar con Professional',
        popular: true
    },
    {
        name: 'Enterprise',
        priceMonthly: '$299/mes',
        priceAnnual: '$239/mes',
        includes: [
            'Todo ilimitado',
            'Soporte prioritario',
            'Roles y permisos avanzados',
            'Asistente IA dedicado',
            'Infraestructura aislada'
        ],
        ctaText: 'Contactar para Enterprise',
        popular: false
    }
];

export default function AchieveApexPricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="precios" style={{
            padding: '120px 0',
            background: '#0D0D0D', // Slightly different from 0A0A0A
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{
                        color: '#666', fontSize: '11px', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        [ PLANES ]
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: 800, color: '#F5F5F5', letterSpacing: '-0.02em',
                        marginBottom: '16px'
                    }}>
                        Empieza gratis. Escala cuando quieras.
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '16px', color: '#888',
                        maxWidth: '540px', margin: '0 auto'
                    }}>
                        Sin permanencia. Sin letra pequeña. Cancela cuando quieras.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px' }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', background: '#141414',
                        padding: '4px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <button
                            onClick={() => setIsAnnual(false)}
                            style={{
                                padding: '10px 24px', borderRadius: '100px',
                                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                                background: !isAnnual ? '#222' : 'transparent',
                                color: !isAnnual ? '#fff' : '#666',
                                transition: 'all 0.2s ease', cursor: 'pointer', border: 'none'
                            }}
                        >
                            Mensual
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            style={{
                                padding: '10px 24px', borderRadius: '100px',
                                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                                background: isAnnual ? '#222' : 'transparent',
                                color: isAnnual ? '#fff' : '#666',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                transition: 'all 0.2s ease', cursor: 'pointer', border: 'none'
                            }}
                        >
                            Anual
                            <span style={{
                                background: isAnnual ? 'rgba(37,211,102,0.1)' : 'transparent',
                                color: '#25D366', fontSize: '10px', padding: '2px 8px', borderRadius: '100px',
                                border: `1px solid ${isAnnual ? 'rgba(37,211,102,0.3)' : 'transparent'}`
                            }}>
                                Ahorra 20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="pricing-grid">
                    {PLANS.map((plan, idx) => (
                        <div key={idx} style={{
                            background: '#111',
                            borderRadius: '12px',
                            border: plan.popular ? '1px solid #25D366' : '1px solid rgba(255,255,255,0.06)',
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            boxShadow: plan.popular ? '0 0 30px rgba(37,211,102,0.05)' : 'none',
                            transform: plan.popular ? 'translateY(-8px)' : 'none',
                            transition: 'all 0.3s ease'
                        }}>

                            {plan.popular && (
                                <div style={{
                                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                                    background: '#25D366', color: '#000', fontFamily: 'var(--font-mono)',
                                    fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px',
                                    letterSpacing: '0.05em'
                                }}>
                                    MÁS POPULAR
                                </div>
                            )}

                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                                {plan.name}
                            </h3>

                            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 800, color: '#fff' }}>
                                    {isAnnual ? plan.priceAnnual.split('/')[0] : plan.priceMonthly.split('/')[0]}
                                </span>
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#666' }}>
                                    /mes
                                </span>
                            </div>

                            <div style={{ flex: 1 }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {plan.includes.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle2 size={16} color={plan.popular ? '#25D366' : '#555'} style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#aaa', lineHeight: 1.4 }}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href={plan.popular ? "https://achieveapex.com/signup" : "https://achieveapex.com/signup"}
                                style={{
                                    display: 'block', textAlign: 'center', marginTop: '32px',
                                    background: plan.popular ? '#25D366' : 'transparent',
                                    color: plan.popular ? '#0A0A0A' : '#fff',
                                    border: plan.popular ? '1px solid #25D366' : '1px solid rgba(255,255,255,0.2)',
                                    fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700,
                                    padding: '12px 24px', borderRadius: '4px', textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={e => {
                                    if (!plan.popular) {
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.color = '#000';
                                    } else {
                                        e.currentTarget.style.filter = 'brightness(1.1)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!plan.popular) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#fff';
                                    } else {
                                        e.currentTarget.style.filter = 'none';
                                    }
                                }}
                            >
                                {plan.ctaText}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Aether Labs Implementation Block */}
                <div style={{
                    marginTop: '80px', background: '#141414', border: '1px solid rgba(0,229,255,0.2)',
                    padding: '40px', borderRadius: '8px', maxWidth: '800px', margin: '80px auto 0'
                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '24px', textAlign: 'center' }}>
                        Contratar a través de Aether Labs incluye:
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '40px' }} className="aether-features">
                        {[
                            'Implementación técnica completa en España (sin coste adicional)',
                            'Formación del equipo en español (2-4h incluidas)',
                            'Soporte continuo con interlocutor local',
                            'Integración con tus herramientas actuales',
                            'Personalización de flujos para tu sector',
                            'Acompañamiento en los primeros 30 días'
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <span style={{ color: '#00E5FF' }}>✦</span>
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#888', lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <a href="https://calendly.com/aetherlabs/30min" target="_blank" rel="noopener noreferrer" style={{
                            fontFamily: 'var(--font-body)', fontSize: '15px', color: '#00E5FF', fontWeight: 600,
                            textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: '2px',
                            transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '8px'
                        }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottom = '1px solid #fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#00E5FF'; e.currentTarget.style.borderBottom = '1px solid transparent'; }}>
                            Contactar con Aether Labs para implementación →
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }
                
                @media (max-width: 1100px) {
                    .pricing-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .pricing-grid { grid-template-columns: 1fr; }
                    .aether-features { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}

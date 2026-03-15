'use client';

const PLANS = [
    {
        name: 'Standard',
        desc: 'Para equipos comerciales en crecimiento.',
        price: '$30',
        priceSub: 'usuario / mes',
        features: [
            'Análisis de llamadas ilimitado',
            'Transcripción multilingüe',
            'Dashboard de KPIs básico',
            'Coaching asíncrono',
            'Soporte por email'
        ],
        cta: 'Empezar con Standard',
        accent: '#fff'
    },
    {
        name: 'Enterprise',
        desc: 'Para grandes redes de ventas y call centers.',
        price: 'Custom',
        priceSub: 'precio por volumen',
        features: [
            'Todo lo de Standard',
            'Asistencia en tiempo real (Live)',
            'API & Integraciones CRM avanzadas',
            'Success Manager dedicado',
            'Soporte 24/7 de Aether Labs',
            'Training presencial incluido'
        ],
        cta: 'Hablar con Ventas',
        accent: 'var(--green)',
        highlight: true
    }
];

export default function ClosiusPricing() {
    return (
        <section id="precios" style={{ padding: '120px 0', background: '#0A0A0A' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ PRECIOS ]</div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1
                    }}>
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>Escala tu equipo</span> <br />
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>sin límites de eficiencia.</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    {PLANS.map((plan, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '48px',
                                background: plan.highlight ? '#111' : 'transparent',
                                borderRadius: '32px',
                                border: `1px solid ${plan.highlight ? 'rgba(130, 255, 31, 0.3)' : 'rgba(255,255,255,0.1)'}`,
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                boxShadow: plan.highlight ? '0 30px 60px rgba(130, 255, 31, 0.05)' : 'none'
                            }}
                        >
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute', top: '24px', right: '24px',
                                    background: 'var(--green)', color: '#000', padding: '4px 12px',
                                    borderRadius: '100px', fontSize: '10px', fontWeight: 800,
                                    fontFamily: 'var(--font-mono)'
                                }}>
                                    RECOMENDADO
                                </div>
                            )}

                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 500, color: plan.accent, marginBottom: '8px' }}>{plan.name}</h3>
                            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>{plan.desc}</p>

                            <div style={{ marginBottom: '40px' }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 300, color: '#fff' }}>{plan.price}</span>
                                <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)', marginLeft: '12px' }}>{plan.priceSub}</span>
                            </div>

                            <div style={{ flex: 1, marginBottom: '48px' }}>
                                {plan.features.map((f, fi) => (
                                    <div key={fi} style={{ display: 'flex', gap: '12px', marginBottom: '16px', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                                        <span style={{ color: plan.accent === '#fff' ? 'var(--green)' : plan.accent }}>•</span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#cta" style={{
                                display: 'block', textAlign: 'center', padding: '16px', borderRadius: '100px',
                                background: plan.highlight ? 'var(--green)' : 'rgba(255,255,255,0.05)',
                                color: plan.highlight ? '#000' : '#fff',
                                fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)'
                            }} onMouseEnter={e => {
                                if (!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                else e.currentTarget.style.transform = 'scale(1.02)';
                            }} onMouseLeave={e => {
                                if (!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                else e.currentTarget.style.transform = 'scale(1)';
                            }}>
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 800px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

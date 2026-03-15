'use client';

export default function ClosiusTraction() {
    const logos = [
        { name: 'Kmeleon', text: 'TECNOLOGÍA CORE' },
        { name: 'Aether Labs', text: 'PARTNER OFICIAL' },
        { name: 'LATAM', text: 'DISTRIBUCIÓN' },
        { name: 'ESPAÑA', text: 'VENTA DIRECTA' },
    ];

    return (
        <section
            style={{
                padding: '60px 0',
                background: '#0A0A0A',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexWrap: 'wrap', gap: '80px', textAlign: 'center'
                }}>
                    {/* Metrics Focus */}
                    <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>12.000+</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '12px' }}>Usuarios Activos</div>
                    </div>

                    <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)' }} className="divider"></div>

                    <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>500k+</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '12px' }}>Llamadas Analizadas</div>
                    </div>

                    <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)' }} className="divider"></div>

                    <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>24/7</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '12px' }}>Soporte Aether</div>
                    </div>
                </div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .divider { display: none; }
                        div[style*="gap: 80px"] { gap: 48px !important; flex-direction: column; }
                    }
                `}</style>
            </div>
        </section>
    );
}

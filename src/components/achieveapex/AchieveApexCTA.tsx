'use client';

export default function AchieveApexCTA() {
    return (
        <section id="cta" style={{
            padding: '120px 0',
            background: '#0D0D0D', // Match FAQ
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
        }}>
            {/* Abstract conversations background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ opacity: 0.03 }}>
                    <path d="M100,200 Q150,50 300,150 T500,100 T700,250 T800,400 T600,600 T400,500 T300,700 T150,600 T50,500 Q20,350 100,200" fill="#25D366" />
                    <path d="M800,100 Q900,50 950,200 T850,400 T900,600 T700,750 T500,800 T300,750 T150,900 T50,850 Q200,950 800,100" fill="#00E5FF" />
                </svg>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>
                <div style={{
                    color: '#666', fontSize: '11px', fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px'
                }}>
                    [ SIGUIENTE PASO ]
                </div>

                <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 56px)',
                    fontWeight: 800, color: '#F5F5F5', letterSpacing: '-0.02em',
                    marginBottom: '24px', lineHeight: 1.1
                }}>
                    Empieza hoy. Resultados en 48 horas.
                </h2>

                <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 18px)',
                    color: '#888', maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.75
                }}>
                    El plan gratuito no caduca. La implementación con Aether Labs la tienes cuando quieras.
                </p>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
                    <a href="https://achieveapex.com/signup?utm_source=aetherlabs&utm_medium=landing&utm_campaign=achieveapex-es"
                        style={{
                            background: '#25D366', color: '#0A0A0A', fontFamily: 'var(--font-body)',
                            fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '4px',
                            textDecoration: 'none', transition: 'all 0.2s ease', display: 'inline-block'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.4)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                        Crear cuenta gratis →
                    </a>
                    <a href="https://calendly.com/aetherlabs/30min" target="_blank" rel="noopener noreferrer"
                        style={{
                            background: 'transparent', color: '#00E5FF', fontFamily: 'var(--font-body)',
                            fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '4px',
                            textDecoration: 'none', border: '1px solid #00E5FF', transition: 'all 0.2s ease', display: 'inline-block'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,229,255,0.05)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,229,255,0.1)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}>
                        Hablar con Aether Labs
                    </a>
                </div>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#444' }}>
                    Sin tarjeta. Sin compromiso. Implementación guiada por Aether Labs.
                </p>
            </div>
        </section>
    );
}

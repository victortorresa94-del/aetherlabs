'use client';

export default function ClosiusCTA() {
    return (
        <section id="cta" style={{ padding: '120px 0', background: '#0A0A0A', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background radial glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '60vw', height: '60vh',
                background: 'radial-gradient(circle, rgba(130, 255, 31, 0.1) 0%, transparent 70%)',
                filter: 'blur(100px)', zIndex: 0
            }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    color: '#fff', letterSpacing: '-0.02em', lineHeight: 0.95,
                    marginBottom: '32px'
                }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>¿Listo para subir</span> <br />
                    <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>de nivel tu equipo?</span>
                </h2>
                <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 20px)', fontWeight: 300, color: 'rgba(255,255,255,0.7)',
                    marginBottom: '56px', lineHeight: 1.6
                }}>
                    Habla con un experto de Aether Labs y descubre cómo implementar
                    la inteligencia de Closius en tu red de ventas hoy mismo.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href="https://calendly.com/aetherlabs/demo" target="_blank" rel="noopener" style={{
                        background: 'var(--green)', color: '#000', padding: '16px 36px',
                        borderRadius: '100px', fontSize: '16px', fontWeight: 600,
                        textDecoration: 'none', fontFamily: 'var(--font-display)',
                        boxShadow: '0 4px 30px rgba(130, 255, 31, 0.25)',
                        transition: 'transform 0.2s ease'
                    }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                        Agendar Llamada de Consulta
                    </a>
                </div>

                <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                    <div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>PARTNER OFICIAL</div>
                        <div style={{ fontSize: '14px', color: '#fff', fontWeight: 700, fontFamily: 'var(--font-display)' }}>KMELEON.TECH</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>DISTRIBUYE</div>
                        <div style={{ fontSize: '14px', color: '#fff', fontWeight: 700, fontFamily: 'var(--font-display)' }}>AETHER LABS</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

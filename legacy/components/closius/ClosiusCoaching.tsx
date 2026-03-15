'use client';

import { useEffect, useState } from 'react';

export default function ClosiusCoaching() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section
            style={{
                padding: '120px 0',
                background: '#050505',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Subtle background glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '60vw', height: '60vh',
                background: 'radial-gradient(ellipse at center, rgba(130, 255, 31, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)', pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ PARA MANAGERS Y COACHES ]</div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 56px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        marginBottom: '24px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Asegura la ejecución</span> <br />
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>de tu estrategia comercial.</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 20px)', fontWeight: 300,
                        color: 'rgba(255,255,255,0.6)', lineHeight: 1.6
                    }}>
                        Closius transforma las interacciones diarias en coaching accionable.
                        Comprueba al instante si tu equipo hace las preguntas de cualificación correctas,
                        si rebaten las objeciones según el playbook, y acelera la adopción de nuevas tácticas.
                    </p>
                </div>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(130, 255, 31, 0.2)',
                    background: '#0A0A0A',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(130, 255, 31, 0.1)',
                    aspectRatio: '16/9'
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '40px',
                        background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', padding: '0 20px', gap: '8px', zIndex: 2
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                    </div>

                    <video
                        src="https://closius.ai/lovable-uploads/coaching-view.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }}
                    />
                </div>

            </div>
        </section>
    );
}

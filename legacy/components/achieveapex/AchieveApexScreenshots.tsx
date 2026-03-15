'use client';

import { useState } from 'react';
import Image from 'next/image';

const TABS = [
    {
        id: 'conversaciones',
        title: 'Conversaciones',
        desc: 'Todas tus conversaciones de todos los canales, en tiempo real, con contexto completo de cada lead.',
        imgUrl: 'https://achieveapex.com/images/site/conversations.png'
    },
    {
        id: 'crm',
        title: 'CRM y Deals',
        desc: 'Tu pipeline comercial construido automáticamente por la IA a partir de las conversaciones.',
        imgUrl: 'https://achieveapex.com/images/site/pipeline.png'
    },
    {
        id: 'automatizaciones',
        title: 'Automatizaciones',
        desc: 'Diseña flujos de seguimiento visuales. Sin código. La IA los ejecuta sola.',
        imgUrl: 'https://achieveapex.com/images/site/automations.png'
    },
    {
        id: 'analytics',
        title: 'Analytics',
        desc: 'Visibilidad total del rendimiento comercial en tiempo real.',
        imgUrl: 'https://achieveapex.com/images/site/analytics.png'
    },
    {
        id: 'demo',
        title: 'Demo interactiva',
        desc: '',
        imgUrl: ''
    }
];

export default function AchieveApexScreenshots() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <section style={{
            padding: '120px 0',
            background: '#0D0D0D',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        color: '#00E5FF', fontSize: '11px', fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        [ EL PRODUCTO EN ACCIÓN ]
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        marginBottom: '16px', maxWidth: '800px', margin: '0 auto 16px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Así se ve por dentro.</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300,
                        color: '#888', maxWidth: '640px', margin: '0 auto'
                    }}>
                        Sin demos grabadas con actores. El producto real.
                    </p>
                </div>

                {/* Horizontal Tabs */}
                <div style={{
                    display: 'flex', justifyContent: 'center', gap: '8px',
                    marginBottom: '48px', flexWrap: 'wrap'
                }}>
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: activeTab.id === tab.id ? '#1A1A1A' : 'transparent',
                                color: activeTab.id === tab.id ? '#fff' : '#666',
                                border: '1px solid',
                                borderColor: activeTab.id === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                                padding: '10px 20px', borderRadius: '100px',
                                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                                transition: 'all 0.3s ease', cursor: 'pointer'
                            }}
                            onMouseEnter={e => {
                                if (activeTab.id !== tab.id) {
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (activeTab.id !== tab.id) {
                                    e.currentTarget.style.color = '#666';
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{
                    maxWidth: '1000px', margin: '0 auto',
                    position: 'relative', minHeight: '600px'
                }}>
                    {TABS.map(tab => (
                        <div
                            key={tab.id}
                            style={{
                                position: 'absolute', inset: 0,
                                opacity: activeTab.id === tab.id ? 1 : 0,
                                pointerEvents: activeTab.id === tab.id ? 'auto' : 'none',
                                transition: 'opacity 0.4s ease',
                                display: 'flex', flexDirection: 'column', alignItems: 'center'
                            }}
                        >
                            {tab.id === 'demo' ? (
                                <div style={{
                                    width: '100%', height: '500px', background: 'linear-gradient(135deg, #1A1A1A, #0D0D0D)',
                                    borderRadius: '12px', border: '1px solid rgba(0,229,255,0.2)',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 0 60px rgba(0,229,255,0.05)', textAlign: 'center', padding: '40px'
                                }}>
                                    <div style={{
                                        width: '64px', height: '64px', borderRadius: '50%', background: '#00E5FF',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px',
                                        color: '#0A0A0A', fontSize: '24px'
                                    }}>▶</div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>
                                        Prueba el demo en vivo de AchieveApex →
                                    </h3>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#888', maxWidth: '400px', marginBottom: '32px' }}>
                                        Tenemos demos configuradas para Real Estate, Salud y Restauración. Prueba la que más se parezca a tu negocio.
                                    </p>
                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <button className="demo-btn">Real Estate</button>
                                        <button className="demo-btn">Salud</button>
                                        <button className="demo-btn">Restauración</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="img-container" style={{
                                        width: '100%', aspectRatio: '16/10', position: 'relative',
                                        borderRadius: '12px', border: '1px solid rgba(37,211,102,0.15)',
                                        boxShadow: '0 0 60px rgba(37,211,102,0.05), 0 40px 80px rgba(0,0,0,0.6)',
                                        overflow: 'hidden', background: '#111'
                                    }}>
                                        <div style={{
                                            position: 'absolute', inset: 0, zIndex: 1,
                                            background: 'linear-gradient(90deg, #0D0D0D 0%, transparent 10%, transparent 90%, #0D0D0D 100%)',
                                            pointerEvents: 'none'
                                        }} />

                                        <Image
                                            src={tab.imgUrl}
                                            alt={tab.title}
                                            fill
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                            unoptimized={true}
                                        />
                                    </div>
                                    <p style={{
                                        fontFamily: 'var(--font-body)', fontSize: '15px', color: '#888',
                                        textAlign: 'center', marginTop: '32px', maxWidth: '600px'
                                    }}>
                                        {tab.desc}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .img-container {
                    animation: clipDown 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @keyframes clipDown {
                    from { clip-path: inset(0 0 100% 0); }
                    to { clip-path: inset(0 0 0 0); }
                }

                .demo-btn {
                    background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff;
                    padding: 8px 16px; border-radius: 4px; font-family: var(--font-body); font-size: 14px;
                    cursor: pointer; transition: all 0.2s;
                }
                .demo-btn:hover { background: #00E5FF; color: #000; border-color: #00E5FF; }
            `}</style>
        </section>
    );
}

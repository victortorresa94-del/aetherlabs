'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
const INTEGRATIONS = [
    { name: 'Salesforce', icon: 'https://img.icons8.com/color/96/salesforce.png' },
    { name: 'HubSpot', icon: 'https://img.icons8.com/color/96/hubspot.png' },
    { name: 'Slack', icon: 'https://img.icons8.com/color/96/slack-new.png' },
    { name: 'WhatsApp', icon: 'https://img.icons8.com/color/96/whatsapp--v1.png' },
    { name: 'Zendesk', icon: 'https://img.icons8.com/color/96/zendesk.png' },
    { name: 'Google Calendar', icon: 'https://img.icons8.com/color/96/google-calendar--v2.png' },
    { name: 'Notion', icon: 'https://img.icons8.com/color/96/notion--v1.png' },
    { name: 'Zapier', icon: 'https://img.icons8.com/color/96/zapier.png' },
    { name: 'Mailchimp', icon: 'https://img.icons8.com/color/96/mailchimp.png' },
];

export default function ClosiusIntegrations() {
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
            {/* Elegant Background Grid */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.1,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>

                    {/* 3D Representation Element */}
                    <div style={{
                        width: '120px', height: '120px', marginBottom: '40px',
                        background: 'radial-gradient(circle at 30% 30%, rgba(130, 255, 31, 0.4), rgba(0,0,0,0.8))',
                        borderRadius: '30px', transform: 'rotate(15deg)',
                        boxShadow: 'inset 0 0 40px rgba(130, 255, 31, 0.5), 0 20px 40px rgba(0,0,0,0.8), 0 0 80px rgba(130, 255, 31, 0.2)',
                        border: '1px solid rgba(130, 255, 31, 0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '60px', height: '60px', background: '#000', borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.1)', transform: 'rotate(-15deg)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                        }} />
                    </div>

                    <div className="section-label" style={{ color: 'var(--green)', marginBottom: '16px' }}>[ PLUG & PLAY ]</div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 56px)',
                        color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
                        marginBottom: '24px', maxWidth: '800px'
                    }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Conéctalo</span> <br />
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--green)' }}>con tu stack actual.</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 20px)', fontWeight: 300,
                        color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '600px'
                    }}>
                        Sin complejas integraciones. Closius se sincroniza en 1 minuto con tu CRM,
                        calendario y sistema de videollamadas/VoIP habitual.
                    </p>
                </div>

                {/* Infinite Scrolling Logos */}
                <div style={{
                    position: 'relative', width: '100%', overflow: 'hidden',
                    padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 15%, rgba(10,10,10,0) 85%, rgba(10,10,10,1) 100%)'
                }}>
                    <div style={{
                        display: 'flex', gap: '100px', width: 'fit-content',
                        animation: 'scroll 30s linear infinite',
                        alignItems: 'center'
                    }}>
                        {/* Render twice for seamless loop */}
                        {[...INTEGRATIONS, ...INTEGRATIONS].map((integration, i) => (
                            <div key={i} style={{
                                opacity: 0.5, transition: 'opacity 0.3s ease', cursor: 'default',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }} onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '0.5'}>
                                {integration.icon && (
                                    <div style={{ position: 'relative', width: '56px', height: '56px', filter: 'grayscale(100%) brightness(0) invert(1)' }}>
                                        <Image src={integration.icon} alt={integration.name} fill style={{ objectFit: 'contain' }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}

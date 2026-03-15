'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function AchieveApexHero() {
    const [mounted, setMounted] = useState(false);
    const [titleText, setTitleText] = useState("");
    const targetTitle = "Todas tus conversaciones.\nUn solo cerebro\nde inteligencia artificial.";
    const [showBadges, setShowBadges] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Typewriter effect
        let i = 0;
        const speed = 30; // ms per char
        const typeWriter = setInterval(() => {
            if (i < targetTitle.length) {
                setTitleText(targetTitle.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typeWriter);
                setTimeout(() => setShowBadges(true), 400); // Badges pop in after title finishes
            }
        }, speed);
        return () => clearInterval(typeWriter);
    }, []);

    const titleLines = titleText.split('\n');

    return (
        <section style={{
            minHeight: '100vh',
            padding: '120px 0 80px',
            background: '#0A0A0A',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/* Abstract conversations background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ opacity: 0.03 }}>
                    <path d="M100,200 Q150,50 300,150 T500,100 T700,250 T800,400 T600,600 T400,500 T300,700 T150,600 T50,500 Q20,350 100,200" fill="#25D366" />
                    <path d="M800,100 Q900,50 950,200 T850,400 T900,600 T700,750 T500,800 T300,750 T150,900 T50,850 Q200,950 800,100" fill="#00E5FF" />
                    <path d="M500,300 Q600,250 700,350 T800,500 T650,700 T450,650 T350,800 T200,700 T150,500 Q250,400 500,300" fill="#25D366" />
                </svg>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', width: '100%', position: 'relative', zIndex: 10 }}>
                <div className="hero-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 55%) minmax(0, 45%)',
                    gap: '40px',
                    alignItems: 'center'
                }}>

                    {/* LEFT COLUMN */}
                    <div style={{ paddingRight: '20px' }}>
                        {/* Status Badges */}
                        <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                            <span style={{
                                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '12px',
                                background: '#111', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
                                padding: '4px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center'
                            }}>
                                <span style={{ color: '#25D366', marginRight: '4px' }}>///</span> achieveapex
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#25D366',
                                background: 'rgba(37,211,102,0.1)', border: '1px solid #25D366',
                                padding: '4px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center'
                            }}>
                                ✦ Partners Oficiales España
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#FFB800',
                                background: 'rgba(255,184,0,0.1)', border: '1px solid #FFB800',
                                padding: '4px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center'
                            }}>
                                Gratis para empezar
                            </span>
                        </div>

                        {/* Typewriter Title */}
                        <h1 style={{
                            fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)',
                            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em',
                            marginBottom: '24px', minHeight: '192px' // Prevent layout shift
                        }}>
                            <span style={{ color: '#fff', display: 'block' }}>
                                {titleLines[0] || ' '}
                            </span>
                            <span style={{ color: '#fff', display: 'block' }}>
                                {titleLines[1] || ' '}
                            </span>
                            <span style={{
                                display: 'block',
                                background: 'linear-gradient(90deg, #25D366, #00E5FF)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text', color: 'transparent'
                            }}>
                                {titleLines[2] || ' '}
                            </span>
                        </h1>

                        <p className="fade-up delay-1" style={{
                            fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 18px)',
                            color: '#888', maxWidth: '520px', lineHeight: 1.75, marginBottom: '32px'
                        }}>
                            WhatsApp, Instagram, Facebook y Email — atendidos simultáneamente por IA, las 24 horas. Tu equipo solo interviene cuando hay una oportunidad real lista para cerrar.
                        </p>

                        {/* Channels Row */}
                        <div className="fade-up channels-row" style={{
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px',
                            marginBottom: '48px', opacity: 0, animation: showBadges ? 'slideInRight 0.6s ease-out forwards' : 'none'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MessageCircle size={28} color="#25D366" fill="#25D366" strokeWidth={0} />
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888' }}>WhatsApp</span>
                            </div>
                            <span style={{ color: '#444' }}>·</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Instagram size={28} color="#E1306C" />
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888' }}>Instagram</span>
                            </div>
                            <span style={{ color: '#444' }}>·</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Facebook size={28} color="#1877F2" fill="#1877F2" strokeWidth={0} />
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888' }}>Facebook</span>
                            </div>
                            <span style={{ color: '#444' }}>·</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Mail size={28} color="#EA4335" fill="#EA4335" strokeWidth={0} />
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888' }}>Email</span>
                            </div>
                            <span style={{ color: '#444' }}>·</span>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#25D366', fontWeight: 700 }}>24/7</span>
                        </div>

                        {/* CTAs */}
                        <div className="fade-up delay-2" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                            <a href="https://achieveapex.com/signup?utm_source=aetherlabs&utm_medium=landing&utm_campaign=achieveapex-es"
                                style={{
                                    background: '#25D366', color: '#0A0A0A', fontFamily: 'var(--font-body)',
                                    fontWeight: 700, fontSize: '16px', padding: '16px 36px', borderRadius: '4px',
                                    textDecoration: 'none', transition: 'all 0.2s ease', display: 'inline-block'
                                }}
                                className="primary-btn"
                                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.4)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                                Empezar gratis ahora
                            </a>
                            <a href="#problema" style={{
                                fontFamily: 'var(--font-body)', fontSize: '15px', color: '#888',
                                textDecoration: 'none', transition: 'all 0.2s ease', display: 'inline-block',
                                borderBottom: '1px solid transparent'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottom = '1px solid #fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderBottom = '1px solid transparent'; }}>
                                Ver demo en vivo ↓
                            </a>
                        </div>
                        <p className="fade-up delay-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#444' }}>
                            Sin tarjeta de crédito. Sin instalación. Activo en minutos.
                        </p>
                    </div>

                    {/* RIGHT COLUMN - Dashboard Mockup */}
                    <div className="fade-up delay-3 hero-mockup" style={{ position: 'relative', width: '100%', perspective: '1000px' }}>
                        <div style={{
                            width: '100%', height: 'auto', aspectRatio: '4/3',
                            background: '#111', borderRadius: '16px', border: '1px solid rgba(37,211,102,0.25)',
                            boxShadow: '0 0 80px rgba(37,211,102,0.06), 0 60px 120px rgba(0,0,0,0.7)',
                            transform: 'rotateY(-6deg) rotateX(3deg)', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative', overflow: 'hidden', zIndex: 1
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'rotateY(0) rotateX(0)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'rotateY(-6deg) rotateX(3deg)'; }}>

                            {/* Fallback image if remote URL is blocked */}
                            <Image
                                src="https://achieveapex.com/images/site/conversations.png"
                                alt="AchieveApex Dashboard Conversaciones"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'top left' }}
                                unoptimized={true}
                            />

                            {/* Gradient mask at bottom */}
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.4) 0%, transparent 10%)' }} />
                        </div>

                        {/* Floating Badges */}
                        {showBadges && (
                            <>
                                <div style={{
                                    position: 'absolute', top: '10%', right: '-5%', zIndex: 2,
                                    background: '#111', border: '1px solid #25D366', color: '#25D366',
                                    fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '6px 12px', borderRadius: '4px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)', animation: 'popIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                                    opacity: 0, animationDelay: '0.3s'
                                }}>
                                    🟢 <span className="counter-anim">127</span> conversaciones activas
                                </div>
                                <div style={{
                                    position: 'absolute', top: '45%', left: '-15%', zIndex: 2,
                                    background: '#111', border: '1px solid #FFB800', color: '#FFB800',
                                    fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '6px 12px', borderRadius: '4px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)', animation: 'popIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                                    opacity: 0, animationDelay: '0.6s'
                                }}>
                                    ⚡ Respuesta automática enviada — hace 2s
                                </div>
                                <div style={{
                                    position: 'absolute', bottom: '20%', right: '5%', zIndex: 2,
                                    background: '#111', border: '1px solid #00E5FF', color: '#00E5FF',
                                    fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '6px 12px', borderRadius: '4px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)', animation: 'popIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                                    opacity: 0, animationDelay: '0.9s'
                                }}>
                                    ↑ 3 deals cerrados hoy
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes popIn { 0% { opacity: 0; transform: scale(0.8) translateY(10px); } 60% { transform: scale(1.05) translateY(-2px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
                
                @media (max-width: 1024px) {
                    .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
                    .hero-mockup { width: 90% !important; margin: 0 auto !important; }
                }
                @media (max-width: 600px) {
                    .channels-row { gap: 8px !important; }
                    .channels-row div span { display: none !important; }
                    .hero-mockup { width: 100% !important; }
                }
            `}</style>
        </section>
    );
}

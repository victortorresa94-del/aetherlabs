'use client';

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';

// ─── Aurora Canvas (v3 heritage — soft gradient blobs only, no particles) ─────
function AuroraCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const t = useRef(0);
    const animRef = useRef<number>(0);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const draw = () => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            t.current += 0.003;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const blob = (cx: number, cy: number, rx: number, ry: number, c1: string, phase: number) => {
                const x = cx + Math.sin(t.current + phase) * rx * 0.35;
                const y = cy + Math.cos(t.current * 0.7 + phase) * ry * 0.25;
                const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
                g.addColorStop(0, c1);
                g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.globalCompositeOperation = 'screen';
                ctx.beginPath();
                ctx.ellipse(x, y, rx, ry, t.current * 0.1, 0, Math.PI * 2);
                ctx.fillStyle = g;
                ctx.fill();
            };
            const w = canvas.width, h = canvas.height;
            // v3 Atmospheric blobs
            blob(w * 0.25, h * 0.4, w * 0.42, h * 0.55, 'rgba(130, 60, 255, 0.15)', 0);
            blob(w * 0.72, h * 0.35, w * 0.38, h * 0.5, 'rgba(0, 180, 255, 0.12)', 2.1);
            blob(w * 0.5, h * 0.6, w * 0.5, h * 0.45, 'rgba(180, 40, 220, 0.08)', 4.2);
            blob(w * 0.15, h * 0.65, w * 0.3, h * 0.35, 'rgba(50, 120, 255, 0.06)', 1.5);
            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: 'screen', pointerEvents: 'none' }}
        />
    );
}

// ─── Grid overlay ──────────────────────────────────────────────────────────────
function GridOverlay() {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)`,
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%,black 0%,transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%,black 0%,transparent 100%)',
            }}
        />
    );
}

// ─── Rotating words ────────────────────────────────────────────────────────────
const WORDS = ['empresas', 'personas', 'negocios', 'mercados'];

// ─── Hero ──────────────────────────────────────────────────────────────────────
export default function HeroSection() {
    const [wordIndex, setWordIndex] = useState(0);
    const [wordAnim, setWordAnim] = useState(false);
    const [ready, setReady] = useState(false);

    // Simple fade-in on mount instead of typewriter
    useEffect(() => {
        const t = setTimeout(() => setReady(true), 200);
        return () => clearTimeout(t);
    }, []);

    // Word rotation
    useEffect(() => {
        if (!ready) return;
        const interval = setInterval(() => {
            setWordAnim(true);
            setTimeout(() => { setWordIndex(i => (i + 1) % WORDS.length); setWordAnim(false); }, 280);
        }, 2500);
        return () => clearInterval(interval);
    }, [ready]);

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: '#000',
                overflow: 'hidden',
                // hero starts from top of viewport, behind navbar (navbar is fixed, z-50)
                paddingTop: 0,
            }}
        >
            {/* Background */}
            <GridOverlay />
            <AuroraCanvas />

            {/* Radial glow — v3 atmospheric core */}
            <div aria-hidden="true" style={{
                position: 'absolute', width: '70vw', height: '55vh', top: '12%', left: '50%',
                transform: 'translateX(-50%)',
                background: 'radial-gradient(ellipse at center,rgba(120,40,255,0.1) 0%,transparent 70%)',
                filter: 'blur(50px)', pointerEvents: 'none',
                animation: 'glowA 10s ease-in-out infinite',
            }} />
            {/* Blue accent glow */}
            <div aria-hidden="true" style={{
                position: 'absolute', width: '50vw', height: '35vh', top: '5%', left: '60%',
                background: 'radial-gradient(ellipse at center,rgba(0,160,255,0.06) 0%,transparent 70%)',
                filter: 'blur(70px)', pointerEvents: 'none',
                animation: 'glowB 13s ease-in-out infinite', animationDelay: '2s',
            }} />
            {/* Bottom fade to black */}
            <div aria-hidden="true" style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
                background: 'linear-gradient(to top,#000 0%,transparent 100%)', pointerEvents: 'none',
            }} />
            {/* Film grain */}
            <div aria-hidden="true" style={{
                position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px',
            }} />

            {/* ── Content ── */}
            <div style={{
                position: 'relative', zIndex: 2,
                maxWidth: '1280px', margin: '0 auto',
                padding: '160px 80px 100px', // top padding accounts for fixed navbar
                width: '100%',
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}>

                {/* Content side-by-side with robot */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
                    <div style={{ flex: 1 }}>
                        {/* Title */}
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(32px, 4vw, 52px)',
                            fontWeight: 300,
                            color: '#fff',
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                            marginBottom: '20px',
                        }}>
                            <span style={{ display: 'block' }}>Somos el puente</span>
                            <span style={{ display: 'block' }}>entre la <span style={{ fontWeight: 700 }}>tecnología</span></span>
                            <span style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
                                <span>y las</span>
                                <span style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                    background: 'linear-gradient(135deg, #00b4ff, #a855f7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'inline-block',
                                    transform: wordAnim ? 'translateY(-8px)' : 'translateY(0)',
                                    opacity: wordAnim ? 0 : 1,
                                    transition: 'transform 0.28s ease, opacity 0.28s ease',
                                }}>
                                    {WORDS[wordIndex]}
                                </span>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '18px',
                            color: 'rgba(255,255,255,0.55)',
                            maxWidth: '520px',
                            lineHeight: 1.75,
                            fontWeight: 300,
                            marginBottom: '48px',
                        }}>
                            Seleccionamos, distribuimos e implementamos las mejores soluciones
                            de IA del mundo para que tu empresa compita en la nueva economía.
                        </p>

                        {/* CTAs */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <a
                                href="#productos"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    background: '#fff', color: '#000',
                                    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px',
                                    padding: '14px 28px', borderRadius: '100px',
                                    textDecoration: 'none',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(255,255,255,0.18)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                Ver soluciones <span>→</span>
                            </a>
                            <a
                                href="#cta"
                                style={{
                                    fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 400,
                                    color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                            >
                                Contactar →
                            </a>
                        </div>
                    </div>

                    {/* Robot Integration */}
                    <div style={{
                        flex: 1, height: '600px',
                        display: 'none', // Conditional desktop display
                    }} className="hero-robot">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute', bottom: '40px', left: '50%',
                transform: 'translateX(-50%)', zIndex: 2,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            }}>
                <div style={{
                    width: '1px', height: '48px', background: 'rgba(255,255,255,0.08)',
                    position: 'relative', overflow: 'hidden', borderRadius: '1px',
                }}>
                    <div style={{
                        position: 'absolute', top: '-100%', width: '100%', height: '100%',
                        background: 'var(--green)', animation: 'dropLine 1.6s ease-in-out infinite',
                    }} />
                </div>
            </div>

            <style jsx>{`
        @keyframes glowA { 0%,100%{opacity:.7;transform:translateX(-50%) scale(1)} 50%{opacity:1;transform:translateX(-50%) scale(1.08)} }
        @keyframes glowB { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.9;transform:scale(1.12)} }
        @keyframes dropLine { 0%{top:-100%} 50%{top:100%} 51%{top:-100%} 100%{top:-100%} }
        @media (min-width: 1024px) { .hero-robot { display: block !important; } }
        @media (max-width:1023px) { section > div:nth-child(8) { padding: 120px 24px 80px !important; } }
      `}</style>
        </section>
    );
}

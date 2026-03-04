'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    badge: string;
    badgeColor: string;
    secondBadge?: string;
    secondBadgeColor?: string;
    title: string;
    text: string;
    bullets: string[];
    price: string;
    priceSub: string;
    ctaText: string;
    ctaHref: string;
    ctaStyle: 'green' | 'lime' | 'ghost';
    accent: string;
    comingSoon?: boolean;
    imageSrc?: string;
    imageAlt?: string;
}

const PRODUCTS: Product[] = [
    {
        id: 'closius',
        name: 'Closius',
        badge: 'AI SALES COACHING',
        badgeColor: '#82ff1f',
        secondBadge: 'DISTRIBUIDORES OFICIALES ESPAÑA',
        secondBadgeColor: '#5ed21a',
        title: 'Convierte cada comercial en tu mejor comercial.',
        text: 'Closius es el AI Sales Coach que analiza, guía y mejora a tu equipo de ventas antes, durante y después de cada interacción con el cliente. Ya tiene clientes con más de 12.000 usuarios activos.',
        bullets: [
            'Coaching en tiempo real durante llamadas y reuniones',
            'Análisis de conversaciones y feedback automático',
            'Entrenamiento personalizado por comercial',
        ],
        price: '$30/usuario/mes',
        priceSub: 'Implementación incluida con Aether Labs.',
        ctaText: 'Conocer Closius →',
        ctaHref: '/closius',
        ctaStyle: 'green',
        accent: '#82ff1f',
        imageAlt: 'Closius AI Sales Coaching Dashboard',
    },
    {
        id: 'achieveapex',
        name: 'AchieveApex',
        badge: 'AI CONVERSATIONAL CRM',
        badgeColor: '#5ed21a',
        title: 'Todas tus conversaciones, un solo cerebro de IA.',
        text: 'AchieveApex es el CRM conversacional con IA que gestiona WhatsApp, Instagram, Facebook y Email simultáneamente, las 24 horas, cerrando deals y automatizando seguimientos sin intervención humana.',
        bullets: [
            'Gestión omnicanal 24/7 con IA nativa',
            'Automatización de follow-ups y workflows',
            'Analytics en tiempo real y asignación inteligente',
        ],
        price: 'Desde $49/mes',
        priceSub: 'Implementación y formación con Aether Labs.',
        ctaText: 'Conocer AchieveApex →',
        ctaHref: '/achieveapex',
        ctaStyle: 'lime',
        accent: '#5ed21a',
        imageSrc: 'https://achieveapex.com/images/site/conversations.png',
        imageAlt: 'AchieveApex Conversational CRM Dashboard',
    },
    {
        id: 'osvecto',
        name: 'Osvecto',
        badge: 'AGENTES CLAUDBOT',
        badgeColor: '#888',
        secondBadge: 'PRÓXIMAMENTE',
        secondBadgeColor: '#555',
        title: 'Despliega agentes Claudbot sin escribir una línea de código.',
        text: 'Osvecto es la plataforma que permite conectar y desplegar agentes de Claudbot en tu empresa de forma visual e intuitiva. La infraestructura de agentes, democratizada.',
        bullets: [
            'Configuración visual de agentes Claudbot',
            'Despliegue en minutos, no en semanas',
            'Conecta con tus sistemas existentes',
        ],
        price: 'Consultar disponibilidad',
        priceSub: 'Lista de espera abierta.',
        ctaText: 'Unirse a la lista de espera →',
        ctaHref: '#cta',
        ctaStyle: 'ghost',
        accent: '#888',
        comingSoon: true,
    },
];

export default function ProductsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('revealed');
                });
            },
            { threshold: 0.1 }
        );
        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="productos"
            ref={sectionRef}
            style={{
                background: '#0A0A0A',
                padding: '120px 0',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    pointerEvents: 'none',
                }}
                aria-hidden
            />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="section-label reveal" style={{ marginBottom: '16px' }}>
                    [CATÁLOGO — 2025]
                </div>
                <h2
                    className="reveal reveal-delay-1"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        fontWeight: 700,
                        color: '#F5F5F5',
                        letterSpacing: '-0.02em',
                        marginBottom: '12px',
                    }}
                >
                    Las herramientas que distribuimos.
                </h2>
                <p
                    className="reveal reveal-delay-2"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        color: '#888',
                        marginBottom: '64px',
                        maxWidth: '680px',
                        lineHeight: 1.65,
                    }}
                >
                    Selección activa. Cada producto tiene nuestra confianza,
                    nuestra implementación y nuestro soporte.
                </p>

                {/* Products Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px',
                    }}
                >
                    {PRODUCTS.map((p, i) => (
                        <ProductCard key={p.id} product={p} delay={i} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1100px) {
          section > div:nth-child(2) > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          section > div:nth-child(2) {
            padding: 0 24px !important;
          }
        }
      `}</style>
        </section>
    );
}

function ProductCard({ product: p, delay }: { product: Product; delay: number }) {
    const accentGlow = p.accent === '#82ff1f'
        ? 'rgba(130,255,31,0.18)'
        : p.accent === '#5ed21a'
            ? 'rgba(94,210,26,0.18)'
            : 'transparent';

    return (
        <div
            className={`reveal reveal-delay-${delay + 2} card-hover`}
            style={{
                background: '#111',
                border: `1px solid rgba(255,255,255,0.07)`,
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                opacity: p.comingSoon ? 0.75 : 1,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Glow accent top border */}
            <div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '1px',
                    background: `linear-gradient(90deg, transparent, ${p.accent}66, transparent)`,
                    pointerEvents: 'none',
                }}
                aria-hidden
            />

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.08em',
                        color: p.badgeColor,
                        border: `1px solid ${p.badgeColor}55`,
                        background: `${p.badgeColor}11`,
                        padding: '4px 10px',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                    }}
                >
                    {p.badge}
                </span>
                {p.secondBadge && (
                    <span
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            letterSpacing: '0.08em',
                            color: p.secondBadgeColor,
                            border: `1px solid ${p.secondBadgeColor}55`,
                            background: `${p.secondBadgeColor}11`,
                            padding: '4px 10px',
                            borderRadius: '100px',
                            textTransform: 'uppercase',
                        }}
                    >
                        {p.secondBadge}
                    </span>
                )}
            </div>

            {/* Product image / mockup */}
            {p.imageSrc ? (
                <div
                    style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        position: 'relative',
                        height: '180px',
                        border: `1px solid ${p.accent}22`,
                        boxShadow: `0 0 20px ${accentGlow}`,
                    }}
                >
                    <Image
                        src={p.imageSrc}
                        alt={p.imageAlt || p.name}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                    />
                    {/* Gradient mask */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0, left: 0, right: 0,
                            height: '60px',
                            background: 'linear-gradient(to top, #111, transparent)',
                            pointerEvents: 'none',
                        }}
                    />
                </div>
            ) : (
                <div
                    style={{
                        borderRadius: '8px',
                        height: '180px',
                        background: 'linear-gradient(135deg, #0D0D0D, #1A1A1A)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <OsvectoMockup />
                </div>
            )}

            {/* Title */}
            <h3
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#F5F5F5',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.25,
                }}
            >
                {p.title}
            </h3>

            {/* Text */}
            <p
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#888',
                    lineHeight: 1.65,
                    flex: 1,
                }}
            >
                {p.text}
            </p>

            {/* Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {p.bullets.map((b, bi) => (
                    <div key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: p.accent, fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#aaa', lineHeight: 1.5 }}>
                            {b}
                        </span>
                    </div>
                ))}
            </div>

            {/* Price */}
            <div>
                <div
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#F5F5F5',
                    }}
                >
                    {p.price}
                </div>
                <div
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        color: '#666',
                        marginTop: '4px',
                    }}
                >
                    {p.priceSub}
                </div>
            </div>

            {/* CTA */}
            <a
                href={p.ctaHref}
                style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px 0',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    border: `1px solid ${p.accent}`,
                    color: p.accent,
                    background: 'transparent',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = p.accent;
                    e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = p.accent;
                }}
            >
                {p.ctaText}
            </a>
        </div>
    );
}

function OsvectoMockup() {
    return (
        <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4 }}>
            <rect x="8" y="8" width="100" height="48" rx="4" stroke="#888" strokeWidth="0.8" />
            <rect x="8" y="64" width="45" height="48" rx="4" stroke="#888" strokeWidth="0.8" />
            <rect x="58" y="64" width="50" height="48" rx="4" stroke="#888" strokeWidth="0.8" />
            <rect x="116" y="8" width="116" height="104" rx="4" stroke="#888" strokeWidth="0.8" />
            <line x1="108" y1="32" x2="116" y2="32" stroke="#888" strokeWidth="0.8" />
            <line x1="83" y1="88" x2="116" y2="88" stroke="#888" strokeWidth="0.8" />
            <circle cx="58" cy="32" r="3" fill="#888" />
            <circle cx="116" cy="32" r="3" fill="#888" />
            <circle cx="116" cy="88" r="3" fill="#888" />
            <text x="20" y="28" fill="#666" fontSize="9" fontFamily="monospace">AGENT //</text>
            <text x="128" y="24" fill="#666" fontSize="8" fontFamily="monospace">Status: active</text>
            <text x="128" y="38" fill="#555" fontSize="7" fontFamily="monospace">Connections: 3</text>
            <text x="16" y="92" fill="#555" fontSize="7" fontFamily="monospace">input</text>
            <text x="66" y="92" fill="#555" fontSize="7" fontFamily="monospace">output</text>
        </svg>
    );
}

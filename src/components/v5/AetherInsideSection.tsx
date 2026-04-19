'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AetherInsideSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="v5-reveal"
      style={{
        width: '100%',
        backgroundColor: '#080808',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0px',
        }}
      >
        {/* Label */}
        <div
          style={{
            fontFamily: 'var(--al-font-mono, var(--v5-font-mono))',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            marginBottom: '32px',
          }}
        >
          Y si lo quieres todo...
        </div>

        {/* Main headline */}
        <h2
          style={{
            fontFamily: 'var(--al-font-advercase, var(--v5-font-advercase))',
            fontSize: 'clamp(38px, 6.5vw, 92px)',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.025em',
            lineHeight: 1.0,
            margin: '0 0 16px 0',
          }}
        >
          Implementamos IA
          <br />en tu empresa
        </h2>

        {/* Product name — orange accent */}
        <div
          style={{
            fontFamily: 'var(--al-font-advercase, var(--v5-font-advercase))',
            fontSize: 'clamp(13px, 1.4vw, 18px)',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FF6B35',
            marginBottom: '36px',
          }}
        >
          · Aether Inside ·
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--al-font-body, var(--v5-font-body))',
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.55)',
            lineHeight: 1.65,
            margin: '0 0 44px 0',
            maxWidth: '520px',
          }}
        >
          Vamos a tu empresa, formamos a tu equipo y construimos
          los sistemas de IA. Nos aseguramos de que funcionen.
        </p>

        {/* CTA */}
        <Link
          href="/aether-inside"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 32px',
            backgroundColor: hovered ? '#F0EDE7' : '#F5F5F0',
            color: '#080808',
            fontFamily: 'var(--al-font-body, var(--v5-font-body))',
            fontSize: '15px',
            fontWeight: 400,
            letterSpacing: '0.01em',
            textDecoration: 'none',
            transition: 'background-color 200ms ease, transform 200ms ease',
            transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
          }}
        >
          Mira cómo lo hacemos →
        </Link>
      </div>
    </section>
  );
}

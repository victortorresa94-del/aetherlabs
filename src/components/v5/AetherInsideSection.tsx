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
        backgroundColor: '#0A0A0A',
        padding: 'clamp(64px, 8vw, 96px) clamp(24px, 5vw, 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '28px',
        }}
      >
        {/* Label */}
        <div
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Y si lo quieres todo...
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: 'var(--v5-font-advercase)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            margin: 0,
          }}
        >
          AETHER INSIDE
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.65)',
            lineHeight: 1.65,
            margin: 0,
            maxWidth: '560px',
          }}
        >
          Vamos a tu empresa, formamos a tu equipo y construimos los sistemas de IA.
          Nos aseguramos de que funcionen.
        </p>

        {/* CTA */}
        <Link
          href="/aether-inside"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-block',
            marginTop: '4px',
            padding: '14px 32px',
            backgroundColor: hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
            color: '#F5F0E8',
            border: `1px solid ${hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)'}`,
            borderRadius: '4px',
            fontFamily: 'var(--v5-font-body)',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            cursor: 'pointer',
          }}
        >
          Conoce Aether Inside →
        </Link>
      </div>
    </section>
  );
}

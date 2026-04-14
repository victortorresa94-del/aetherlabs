'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExperimentosBanner() {
  const [hovered, setHovered] = useState(false);
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: hovered ? '#221E1A' : '#1A1614',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background-color 0.25s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { window.location.href = '/experimentos'; }}
    >
      <div
        className="exp-strip-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          minHeight: '64px',
        }}
      >
        {/* Left: label + text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '4px 12px',
              borderRadius: '2px',
              flexShrink: 0,
            }}
          >
            NUEVO
          </span>
          <span
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '14px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.4,
            }}
          >
            Estamos publicando EXPERIMENTOS — mira lo que es posible.
          </span>
        </div>

        {/* Right: link */}
        <Link
          href="/experimentos"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setArrowHovered(true)}
          onMouseLeave={() => setArrowHovered(false)}
          style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: '14px',
            fontWeight: 500,
            color: arrowHovered ? '#FFFFFF' : 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Ver Experimentos
          <span
            style={{
              display: 'inline-block',
              transform: arrowHovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.2s ease',
            }}
          >
            →
          </span>
        </Link>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-strip-inner {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 20px 24px !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

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
        backgroundColor: hovered ? 'rgba(0,229,255,0.03)' : '#0D0D0D',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.location.href = '/experimentos'}
    >
      {/* CSS shimmer line */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '60%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)',
            animation: 'expBannerShimmer 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content row */}
      <div
        className="exp-banner-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '22px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          minHeight: '72px',
        }}
      >
        {/* NUEVO label */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#00E5FF',
            backgroundColor: 'rgba(0,229,255,0.08)',
            border: '1px solid rgba(0,229,255,0.2)',
            padding: '4px 10px',
            borderRadius: '2px',
            flexShrink: 0,
          }}
        >
          NUEVO
        </span>

        {/* Text */}
        <span
          style={{
            fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(245,245,245,0.7)',
            lineHeight: 1.4,
          }}
        >
          Estamos construyendo experimentos. Mira lo que es posible con IA.
        </span>

        {/* Link */}
        <Link
          href="/experimentos"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setArrowHovered(true)}
          onMouseLeave={() => setArrowHovered(false)}
          style={{
            fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: '#00E5FF',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
            flexShrink: 0,
          }}
        >
          Ver EXPERIMENTOS
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
        @keyframes expBannerShimmer {
          0%   { left: -60%; }
          100% { left: 160%; }
        }
        @media (max-width: 640px) {
          .exp-banner-inner {
            flex-direction: column !important;
            text-align: center;
            gap: 12px !important;
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

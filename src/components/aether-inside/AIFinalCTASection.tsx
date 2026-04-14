'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIFinalCTASection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{
      backgroundColor: '#000000',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 48px',
      textAlign: 'center',
      backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.06) 0%, transparent 60%)',
    }}>
      <div className="v5-reveal">
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(60px, 10vw, 140px)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: '40px',
        }}>
          ¿Listo para entrar?
        </h2>

        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '18px',
          fontWeight: 300,
          color: 'rgba(245,245,245,0.6)',
          maxWidth: '480px',
          margin: '0 auto 56px',
          lineHeight: 1.7,
        }}>
          Primera conversación: 30 minutos. Sin coste. Sin compromiso.
          <br />
          Te decimos si encajamos o no. Eso también tiene valor.
        </p>

        {/* Primary CTA */}
        <Link
          href="/contacto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-block',
            backgroundColor: hovered ? '#33EEFF' : '#00E5FF',
            color: '#000000',
            fontFamily: 'var(--v5-font-body)',
            fontSize: '17px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            padding: '20px 48px',
            borderRadius: '2px',
            textDecoration: 'none',
            transform: hovered ? 'translateY(-2px)' : 'none',
            boxShadow: hovered ? '0 8px 40px rgba(0,229,255,0.3)' : 'none',
            transition: 'all 0.25s ease',
          }}
        >
          Cuéntanos lo que necesitas
        </Link>

        {/* Secondary */}
        <div style={{ marginTop: '24px' }}>
          <Link
            href="/experimentos"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(245,245,245,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,245,245,0.7)'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,245,245,0.35)'; }}
          >
            ¿Prefieres ver ejemplos primero? → Ver Experimentos
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section[style*="60vh"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

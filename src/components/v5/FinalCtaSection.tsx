'use client';

import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="v5-section relative overflow-hidden" style={{ backgroundColor: '#080808' }}>
      <div className="v5-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="v5-reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>

          <span
            style={{
              display: 'block',
              marginBottom: '16px',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
            }}
          >
            ¿Empezamos?
          </span>

          <h2
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 6vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#F5F5F0',
              marginBottom: '28px',
            }}
          >
            Una conversación puede cambiar el rumbo de tu empresa
          </h2>

          <p
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(245,245,240,0.5)',
              maxWidth: '520px',
              margin: '0 auto 40px',
              textAlign: 'center',
            }}
          >
            Sin compromiso. Sin presentación de ventas. Solo para ver si tiene sentido trabajar juntos.
          </p>

          <div className="v5-cta-buttons">
            <Link
              href="/systems-lab/sesion-de-claridad"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: '#F5F5F0',
                color: '#080808',
                borderRadius: '0px',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 400,
                letterSpacing: '0.01em',
                textDecoration: 'none',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Auditoría gratuita
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              justifyContent: 'center',
              marginTop: '40px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="mailto:hola@aetherlabs.es"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'rgba(255,255,255,0.28)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.60)'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.28)'; }}
            >
              hola@aetherlabs.es
            </a>
            <span style={{ color: 'rgba(255,255,255,0.10)' }}>|</span>
            <a
              href="https://wa.me/34627281459"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '12px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.28)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.60)'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.28)'; }}
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Subtle warm glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(237,232,223,0.020) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}

'use client';

import Link from 'next/link';

export default function AIFinalCTASection() {
  return (
    <section style={{
      backgroundColor: '#080808',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="v5-reveal">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '64px',
          alignItems: 'end',
        }}
          className="final-cta-grid"
        >
          {/* Left */}
          <div>
            <div style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.28)',
              marginBottom: '32px',
            }}>
              Siguiente paso
            </div>

            <h2 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              color: '#F5F0E8',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              30 minutos.
              <br />
              <span style={{ color: 'rgba(245,240,232,0.4)' }}>Sin coste. Sin compromiso.</span>
            </h2>

            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.45)',
              lineHeight: 1.7,
              maxWidth: '480px',
            }}>
              Te decimos exactamente si encajamos — y si no,
              te decimos por qué. Eso también tiene valor.
            </p>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <Link
              href="/systems-lab/sesion-de-claridad"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: '#F5F0E8',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 400,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 200ms ease, transform 200ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#FFFFFF';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#F5F0E8';
                el.style.transform = 'translateY(0)';
              }}
            >
              Reserva tu sesión gratuita →
            </Link>
            <Link
              href="/experimentos"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.28)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.55)'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.28)'; }}
            >
              Ver casos y experimentos →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .final-cta-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

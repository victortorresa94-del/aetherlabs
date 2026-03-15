'use client';

import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="v5-section relative overflow-hidden bg-black pb-32">
      {/* Animated glow sphere */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'v5GlowPulse 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,184,217,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'v5GlowPulse 8s ease-in-out infinite reverse',
      }} />

      <div className="v5-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px' }}>
          ¿Empezamos?
        </span>

        <h2 className="v5-h2 v5-reveal" style={{ maxWidth: '600px', margin: '0 auto 20px' }}>
          Una conversación de 30 minutos puede cambiar el rumbo de tu empresa
        </h2>

        <p className="v5-body-large v5-reveal" style={{ maxWidth: '440px', margin: '0 auto 40px' }}>
          Sin compromiso. Sin presentación de ventas. Solo para ver si tiene sentido trabajar juntos.
        </p>

        <div className="v5-reveal flex flex-col items-center gap-6">
          <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary hover:-translate-y-1 transition-transform" style={{
            fontSize: '18px',
            padding: '18px 40px',
          }}>
            Reservar sesión gratuita →
          </Link>

          <div className="flex items-center gap-6 flex-wrap justify-center mt-6">
            <span style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '14px',
              color: 'var(--v5-text-muted)',
            }}>
              O escríbenos directamente:
            </span>
            <a
              href="mailto:hola@aetherlabs.es"
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '14px',
                color: 'var(--v5-accent)',
                textDecoration: 'none',
                transition: 'color var(--v5-transition)',
              }}
              onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-accent-hover)'}
              onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'var(--v5-accent)'}
            >
              hola@aetherlabs.es
            </a>
            <span style={{ color: 'var(--v5-border-hover)' }}>|</span>
            <a
              href="https://wa.me/34000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '14px',
                color: 'var(--v5-text-secondary)',
                textDecoration: 'none',
                transition: 'color var(--v5-transition)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--v5-text-primary)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--v5-text-secondary)'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1.01 2.56.13.17 1.75 2.67 4.25 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2.02-1.25-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes v5GlowPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50%       { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}

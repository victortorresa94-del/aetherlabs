'use client';

import Link from 'next/link';

const includes = [
  '90 min de diagnóstico real',
  'Documento con hallazgos',
  'Mapa de herramientas recomendadas',
  'Hoja de ruta de 90 días',
  'Grabación de la sesión',
];

export default function ClaritySessionSection() {
  return (
    <section id="sesion-claridad" className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
      <div className="v5-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
          className="v5-clarity-grid"
        >
          {/* Left: Text */}
          <div>
            <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px' }}>
              El primer paso
            </span>
            <h2 className="v5-h2 v5-reveal">
              Sesión de Claridad
            </h2>
            <p style={{
              fontFamily: 'var(--v5-font-display)',
              fontWeight: 500,
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: 'var(--v5-text-secondary)',
              lineHeight: 1.4,
              marginTop: '16px',
              marginBottom: '24px',
            }}
              className="v5-reveal"
            >
              Una sola sesión para saber exactamente dónde estás y dónde necesitas llegar.
            </p>
            <p className="v5-reveal" style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '16px',
              color: 'var(--v5-text-muted)',
              lineHeight: 1.75,
            }}>
              90 minutos contigo. Sin presentación de ventas. Sin decks de PowerPoint.
              Solo una conversación donde mapeamos tus procesos, identificamos dónde la IA
              puede ayudarte de verdad, y te entregamos un documento con todo lo que encontramos
              y lo que recomendamos.
            </p>
          </div>

          {/* Right: Product card */}
          <div className="v5-reveal">
            <div style={{
              backgroundColor: 'var(--v5-bg-surface2)',
              border: '1px solid var(--v5-border)',
              borderRadius: 'var(--v5-radius-lg)',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Glow top */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--v5-accent), transparent)',
              }} />

              {/* Badge */}
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                backgroundColor: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: '100px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: 'var(--v5-accent)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Sesiones de lanzamiento
              </span>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px' }}>
                <span style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 800,
                  fontSize: '56px',
                  color: 'var(--v5-text-primary)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}>
                  150€
                </span>
                <span style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '20px',
                  color: 'var(--v5-text-muted)',
                  textDecoration: 'line-through',
                }}>
                  300€
                </span>
              </div>

              {/* Includes */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {includes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(99,102,241,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--v5-accent)" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      color: 'var(--v5-text-secondary)',
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '13px',
                color: 'var(--v5-text-muted)',
                marginBottom: '24px',
                lineHeight: 1.5,
              }}>
                Si decides contratar algo después: el precio de la sesión se descuenta del proyecto.
              </p>

              {/* CTA */}
              <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                fontSize: '17px',
                padding: '16px',
              }}>
                Reservar mi sesión →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v5-clarity-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

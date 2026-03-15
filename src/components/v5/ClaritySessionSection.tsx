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
    <section id="sesion-claridad" className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="v5-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div className="v5-reveal">
            <span
              style={{
                display: 'block',
                marginBottom: '20px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#999999',
              }}
            >
              El primer paso
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#111111',
                marginBottom: '20px',
              }}
            >
              Sesión de Claridad
            </h2>
            <p
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '19px',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                lineHeight: 1.5,
                color: '#666666',
                marginBottom: '20px',
              }}
            >
              Una sola sesión para saber exactamente dónde estás y dónde necesitas llegar.
            </p>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#888888',
                maxWidth: '460px',
              }}
            >
              90 minutos contigo. Sin presentación de ventas. Solo una conversación
              donde mapeamos tus procesos, identificamos dónde la IA puede ayudarte
              de verdad, y te entregamos un documento con todo.
            </p>
          </div>

          {/* Right: Product card — warm card on white bg */}
          <div className="v5-reveal" style={{ transitionDelay: '100ms' }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                padding: '40px',
                background: '#EDE8DF',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.07)',
              }}
            >
              {/* Badge */}
              <span
                style={{
                  display: 'inline-block',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  background: 'rgba(0,0,0,0.08)',
                  color: 'rgba(0,0,0,0.42)',
                  marginBottom: '28px',
                }}
              >
                Oferta de lanzamiento
              </span>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px' }}>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '64px',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'rgba(0,0,0,0.88)',
                  }}
                >
                  150€
                </span>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '20px',
                    fontWeight: 300,
                    textDecoration: 'line-through',
                    color: 'rgba(0,0,0,0.28)',
                  }}
                >
                  300€
                </span>
              </div>

              {/* Includes */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {includes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.40)" strokeWidth={2.5}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'rgba(0,0,0,0.62)',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '12px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(0,0,0,0.35)',
                  marginBottom: '28px',
                }}
              >
                Si decides contratar algo después, el precio de la sesión se descuenta del proyecto.
              </p>

              {/* CTA */}
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '15px 24px',
                  borderRadius: '100px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  background: 'rgba(0,0,0,0.88)',
                  color: 'rgba(255,255,255,0.90)',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#000000';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.88)';
                }}
              >
                Reservar mi sesión
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

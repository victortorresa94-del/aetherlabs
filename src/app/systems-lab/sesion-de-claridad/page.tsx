import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'Sesión de Claridad — Aether Labs | Barcelona',
  description: '90 minutos para saber exactamente qué IA necesita tu empresa y por dónde empezar. Primera sesión desde 150€.',
};

const includes = [
  'Sesión de 90 min (presencial o videollamada)',
  'Documento de diagnóstico (PDF)',
  'Mapa de herramientas recomendadas',
  'Hoja de ruta de 90 días',
  'Grabación de la sesión',
  'Si contratas, el coste se descuenta',
];

const profiles = [
  {
    quote: '"No sé ni qué herramientas existen"',
    description: 'Empresas que oyen hablar de IA pero no saben por dónde empezar.',
  },
  {
    quote: '"Tenemos herramientas pero no las usamos bien"',
    description: 'Empresas con Copilot, HubSpot o ClickUp que no sacan partido.',
  },
  {
    quote: '"Quiero automatizar pero no sé qué se puede automatizar"',
    description: 'Empresas con procesos manuales que quieren eficiencia.',
  },
];

export default function ClaritySessionPage() {
  return (
    <SystemsLabLayout accentColor="#6366F1">
      {/* Hero */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px' }}>
            El punto de partida
          </span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '680px', marginBottom: '20px' }}>
            Sesión de Claridad
          </h1>
          <p style={{
            fontFamily: 'var(--v5-font-display)',
            fontWeight: 500,
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: 'var(--v5-text-secondary)',
            lineHeight: 1.4,
            maxWidth: '560px',
            letterSpacing: '-0.02em',
          }}
            className="v5-reveal"
          >
            90 minutos para saber exactamente qué IA necesita tu empresa y por dónde empezar
          </p>
        </div>
      </section>

      {/* Main content: 2 cols */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)', paddingTop: '0' }}>
        <div className="v5-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
            className="v5-clarity-page-grid"
          >
            {/* Left */}
            <div>
              <p className="v5-reveal" style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                color: 'var(--v5-text-secondary)',
                lineHeight: 1.75,
                marginBottom: '40px',
              }}>
                La mayoría de empresas que nos contactan tienen el mismo problema: saben que la IA
                puede ayudarles, pero no saben qué herramienta necesitan, ni si lo que tienen vale,
                ni si están perdiendo tiempo y dinero en algo que no funciona. La Sesión de Claridad resuelve eso.
              </p>

              <h2 style={{
                fontFamily: 'var(--v5-font-display)',
                fontWeight: 600,
                fontSize: '22px',
                color: 'var(--v5-text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}
                className="v5-reveal"
              >
                Lo que hacemos en la sesión
              </h2>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}
                className="v5-reveal"
              >
                {[
                  'Mapeamos tus procesos actuales',
                  'Identificamos dónde la IA puede ayudar de verdad',
                  'Revisamos las herramientas que ya tienes y si las usas bien',
                  'Detectamos las que te faltan y cuál encaja con tu situación',
                  'Te entregamos un documento de hallazgos y recomendaciones',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(99,102,241,0.15)',
                      border: '1px solid rgba(99,102,241,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--v5-accent)" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      color: 'var(--v5-text-secondary)',
                      lineHeight: 1.55,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, var(--v5-accent), transparent)',
                }} />

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
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
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--v5-accent)' }} />
                  Sesiones de lanzamiento — plazas limitadas
                </span>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px' }}>
                  <span style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontWeight: 800,
                    fontSize: '64px',
                    color: 'var(--v5-text-primary)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}>
                    150€
                  </span>
                  <span style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '22px',
                    color: 'var(--v5-text-muted)',
                    textDecoration: 'line-through',
                  }}>
                    300€
                  </span>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {includes.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px', height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(99,102,241,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--v5-accent)" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hola@aetherlabs.es?subject=Reserva%20Sesión%20de%20Claridad"
                  className="v5-btn-primary"
                  style={{ display: 'flex', justifyContent: 'center', width: '100%', fontSize: '17px', padding: '16px', boxSizing: 'border-box' }}
                >
                  Reservar mi Sesión →
                </a>

                <p style={{
                  textAlign: 'center',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  color: 'var(--v5-text-muted)',
                  marginTop: '16px',
                }}>
                  Sin compromiso. Si no encajamos, te decimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles section */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            ¿Para quién es?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
            className="v5-profiles-grid"
          >
            {profiles.map((profile, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  backgroundColor: 'var(--v5-bg-base)',
                  border: '1px solid var(--v5-border)',
                  borderRadius: 'var(--v5-radius-lg)',
                  padding: '32px',
                }}
              >
                <p style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: 'var(--v5-text-primary)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}>
                  {profile.quote}
                </p>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  color: 'var(--v5-text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .v5-clarity-page-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .v5-profiles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SystemsLabLayout>
  );
}

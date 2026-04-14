'use client';

const YES = [
  'Tienes una empresa de 5 a 100 personas',
  'Sabes que la IA puede ayudarte pero no sabes por dónde empezar',
  'Has probado herramientas por tu cuenta y no han cuajado',
  'Quieres que tu equipo gane velocidad sin perder semanas en formación',
  'Buscas resultados en semanas, no proyectos que duran meses sin entregables',
  'Tienes presupuesto para invertir en transformación real',
];

const NO = [
  'Buscas una charla motivacional sobre IA',
  'Quieres un informe de recomendaciones para implementar solo',
  'Tu empresa tiene más de 200 personas (tienes departamentos para esto)',
  'Esperas resultados sin que tu equipo participe en el proceso',
  'No tienes presupuesto mínimo para herramientas y tiempo de implementación',
];

export default function AIForWhoSection() {
  return (
    <section style={{ backgroundColor: '#0A0A0A', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="v5-reveal">
        {/* Header */}
        <p style={{
          fontFamily: 'var(--v5-font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: '#00E5FF',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Para quién es
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(28px, 3.5vw, 52px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '64px',
        }}>
          No para todo el mundo.
          <br />
          Sí para ti si...
        </h2>

        <div className="ai-forwho-grid">
          {/* YES card */}
          <div style={{
            backgroundColor: 'rgba(0,229,255,0.04)',
            border: '1px solid rgba(0,229,255,0.15)',
            borderRadius: '4px',
            padding: '40px',
          }}>
            <p style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              color: 'rgba(0,229,255,0.7)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Sí es para ti si...
            </p>
            {YES.map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                marginBottom: '16px',
              }}>
                <span style={{ color: 'rgba(0,229,255,0.6)', flexShrink: 0, marginTop: '2px', fontSize: '14px' }}>✓</span>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: 'rgba(245,245,245,0.85)',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* NO card */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '4px',
            padding: '40px',
          }}>
            <p style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              No es para ti si...
            </p>
            {NO.map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                marginBottom: '16px',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0, marginTop: '2px', fontSize: '14px', lineHeight: 1 }}>—</span>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: 'rgba(245,245,245,0.5)',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '16px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(245,245,245,0.35)',
          textAlign: 'center',
          marginTop: '48px',
          lineHeight: 1.6,
        }}>
          Somos directos porque respetamos tu tiempo.
          <br />
          Si no eres el cliente adecuado, lo decimos antes de empezar.
        </p>
      </div>

      <style>{`
        .ai-forwho-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .ai-forwho-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

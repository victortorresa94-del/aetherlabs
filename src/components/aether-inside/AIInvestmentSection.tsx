'use client';

const FACTORS = [
  {
    label: 'El tamaño del equipo',
    desc: 'Más personas = más horas de formación y acompañamiento.',
  },
  {
    label: 'La complejidad técnica',
    desc: 'Conectar un chatbot a un WhatsApp es diferente a integrar IA en un ERP a medida.',
  },
  {
    label: 'El alcance de la implementación',
    desc: '¿Una área de la empresa o toda la operación?',
  },
];

const RANGES = [
  {
    label: 'Implementación básica',
    sub: '1 área · equipo pequeño',
    value: 'desde 1.500€',
  },
  {
    label: 'Implementación media',
    sub: '2–3 áreas · 10–30 personas',
    value: '3.000€ – 8.000€',
  },
  {
    label: 'Implementación completa',
    sub: 'empresa completa',
    value: 'presupuesto personalizado',
  },
];

export default function AIInvestmentSection() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '120px 48px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }} className="v5-reveal">
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
          La inversión
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>
          Sin letra pequeña. Sin sorpresas.
        </h2>

        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '20px',
          fontWeight: 300,
          color: 'rgba(245,245,245,0.7)',
          lineHeight: 1.7,
          maxWidth: '600px',
          marginBottom: '64px',
        }}>
          No tenemos un precio fijo.
          <br />
          Tenemos un precio justo por proyecto.
        </p>

        {/* Factors */}
        <div className="ai-factors-grid">
          {FACTORS.map((f) => (
            <div key={f.label} style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              padding: '32px',
            }}>
              <p style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                color: '#00E5FF',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}>
                {f.label}
              </p>
              <p style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(245,245,245,0.65)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ranges */}
        <div style={{ marginTop: '56px' }}>
          {RANGES.map((r, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              padding: '20px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(245,245,245,0.7)',
                  margin: '0 0 4px',
                }}>
                  {r.label}
                </p>
                <p style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  color: 'rgba(245,245,245,0.3)',
                  letterSpacing: '0.06em',
                  margin: 0,
                }}>
                  {r.sub}
                </p>
              </div>
              <span style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: '20px',
                fontWeight: 400,
                color: '#F5F5F5',
                flexShrink: 0,
                letterSpacing: '-0.01em',
              }}>
                {r.value}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '15px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(245,245,245,0.35)',
          textAlign: 'center',
          marginTop: '40px',
          lineHeight: 1.6,
        }}>
          Estos rangos son orientativos.
          <br />
          La primera conversación es gratis y sin compromiso.
          En 30 minutos podemos darte un rango preciso para tu caso.
        </p>
      </div>

      <style>{`
        .ai-factors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .ai-factors-grid { grid-template-columns: 1fr !important; }
          section[style*="111111"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

'use client';

const ALWAYS = [
  'Auditoría de procesos y herramientas actuales',
  'Mapa de oportunidades de IA específico para tu empresa',
  'Plan de implementación priorizado',
  'Configuración completa de herramientas seleccionadas',
  'Agentes IA (si aplica al caso)',
  'Automatizaciones de procesos repetitivos',
  'Formación específica para cada rol del equipo',
  'Documentación de lo implementado (para tu equipo)',
  '2 semanas de soporte post-implementación',
  'Hoja de ruta de siguiente fase (qué hacer después)',
];

const OPTIONAL = [
  'Integración con CRM/ERP existente',
  'Desarrollo de software o app personalizada',
  'Campañas de contenido con IA',
  'Chatbot o agente de atención al cliente',
  'Sistema de automatización de ventas',
  'Dashboard de métricas con IA',
  'Formación avanzada del equipo directivo',
];

export default function AIIncludedSection() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '120px 48px' }}>
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
          Qué incluye
        </p>
        <h2 style={{
          fontFamily: 'var(--v5-font-advercase)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400,
          color: '#F5F5F5',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '72px',
        }}>
          Todo lo que hace falta. Nada más.
        </h2>

        {/* Grid */}
        <div className="ai-included-grid">
          {/* Always */}
          <div>
            <p style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#00E5FF',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Siempre incluido
            </p>
            {ALWAYS.map((item) => (
              <IncludedItem key={item} text={item} type="check" />
            ))}
          </div>

          {/* Optional */}
          <div>
            <p style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(245,245,245,0.35)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Según el caso
            </p>
            {OPTIONAL.map((item) => (
              <IncludedItem key={item} text={item} type="circle" />
            ))}
          </div>
        </div>

        {/* Note */}
        <p style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '16px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(245,245,245,0.4)',
          textAlign: 'center',
          marginTop: '64px',
          lineHeight: 1.6,
        }}>
          ¿No ves algo que necesitas? Cuéntanoslo.
          <br />
          Cada implementación es diferente.
        </p>
      </div>

      <style>{`
        .ai-included-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        @media (max-width: 768px) {
          .ai-included-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          section[style*="111111"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function IncludedItem({ text, type }: { text: string; type: 'check' | 'circle' }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      padding: '14px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <span style={{
        fontSize: '16px',
        flexShrink: 0,
        marginTop: '2px',
        color: type === 'check' ? 'rgba(0,229,255,0.7)' : 'rgba(255,255,255,0.25)',
        lineHeight: 1,
      }}>
        {type === 'check' ? '✓' : '○'}
      </span>
      <span style={{
        fontFamily: 'var(--v5-font-body)',
        fontSize: '16px',
        fontWeight: 300,
        color: 'rgba(245,245,245,0.8)',
        lineHeight: 1.5,
      }}>
        {text}
      </span>
    </div>
  );
}

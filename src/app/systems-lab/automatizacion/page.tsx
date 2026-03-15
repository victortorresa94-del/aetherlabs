import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'Automatización de flujos — Systems Lab | Aether Labs',
  description: 'n8n, Make y Zapier. Conectamos tus herramientas y automatizamos los procesos que consumen más horas en tu empresa.',
};

const PINK = '#EA4B71';

const flows = [
  'Captación de leads: formulario → CRM → email personalizado → notificación Slack',
  'Onboarding de clientes: CRM → proyecto ClickUp → carpeta Drive → email bienvenida',
  'Facturación automática: proyecto cerrado → genera factura → envía por email',
  'Reporting semanal: extrae datos → Claude genera resumen → envía PDF por email',
  'Seguimiento de leads fríos: sin respuesta en X días → email de seguimiento',
  'Publicación de contenido: brief → Claude crea → revisión → publica en web/RRSS',
  'Enriquecimiento de leads: nuevo contacto → busca en LinkedIn/Apollo → enriquece CRM',
  'Gestión de agenda: reuniones en Calendar → crea tarea ClickUp → envía recordatorio',
  'Atención al cliente: email/WhatsApp → Claude categoriza → asigna o responde',
  'Análisis de competencia: alertas Google → Claude analiza → informe semanal',
  'Actualización de inventario: ventas → actualiza stock → alerta cuando queda poco',
  'Offboarding de proyectos: proyecto completado → genera entregables → archiva todo',
];

const tools = [
  {
    name: 'n8n',
    subtitle: 'Para flujos complejos',
    desc: 'La herramienta más potente. Open source, se puede instalar en servidor propio. Ideal para empresas que necesitan control total y conexión con IA en el proceso.',
    color: PINK,
  },
  {
    name: 'Make',
    subtitle: 'Para flujos visuales',
    desc: 'La herramienta más intuitiva visualmente. Ideal para equipos no técnicos que quieren ver el flujo completo.',
    color: '#9B3AEA',
  },
  {
    name: 'Zapier',
    subtitle: 'Para integraciones simples',
    desc: 'La más conocida y la más sencilla. Ideal para conectar dos herramientas rápidamente sin lógica compleja.',
    color: '#FF4A00',
  },
];

export default function AutomatizacionPage() {
  return (
    <SystemsLabLayout accentColor={PINK}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px', color: PINK }}>Automatización de flujos</span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '720px', marginBottom: '20px' }}>
            El trabajo repetitivo que hace tu equipo{' '}
            <span style={{ background: `linear-gradient(135deg, ${PINK}, #FF6B8E)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              puede hacerlo una máquina
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            Conectamos tus herramientas y automatizamos los procesos que consumen más horas en tu empresa. Sin programar.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ backgroundColor: PINK, fontSize: '16px' }}>
              Automatizar mi empresa →
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Las herramientas que usamos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
            className="v5-auto-grid"
          >
            {tools.map((tool) => (
              <div key={tool.name} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: `1px solid ${tool.color}25`,
                borderRadius: 'var(--v5-radius-lg)',
                padding: '32px',
              }}>
                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 700, fontSize: '24px', color: tool.color, marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  {tool.name}
                </h3>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--v5-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                  {tool.subtitle}
                </span>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.65 }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '12px' }}>Los 12 flujos que más implementamos</h2>
          <p className="v5-body-large v5-reveal" style={{ marginBottom: '40px', maxWidth: '480px' }}>
            Estos son los automatizaciones que más ROI generan a nuestros clientes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
            className="v5-flows-grid"
          >
            {flows.map((flow, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-surface)',
                border: '1px solid var(--v5-border)',
                borderRadius: 'var(--v5-radius-md)',
                padding: '20px 24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', fontWeight: 700, color: PINK, flexShrink: 0, minWidth: '24px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.55 }}>
                  {flow}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '32px' }}>Automatizar mi empresa con Aether</h2>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px', backgroundColor: PINK }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .v5-auto-grid { grid-template-columns: 1fr !important; }
          .v5-flows-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SystemsLabLayout>
  );
}

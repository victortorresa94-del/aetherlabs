import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'Microsoft Copilot — Systems Lab | Aether Labs',
  description: 'La IA ya está en tu Microsoft 365. Solo hay que activarla. Configuración, formación e integración con Claude.',
};

const BLUE = '#0078D4';

const features = [
  { name: 'Copilot en Word', desc: 'Redacta, resume y mejora textos automáticamente' },
  { name: 'Copilot en Excel', desc: 'Analiza datos, genera gráficos, formula predicciones' },
  { name: 'Copilot en PowerPoint', desc: 'Crea presentaciones desde cero con prompt de texto' },
  { name: 'Copilot en Outlook', desc: 'Resume emails, redacta respuestas, gestiona agenda' },
  { name: 'Copilot en Teams', desc: 'Transcripción de reuniones, resumen, action items' },
  { name: 'Copilot Cowork', desc: 'Agente multi-app powered by Claude (desde marzo 2026)' },
  { name: 'Power Automate AI', desc: 'Automatización de flujos con IA sin programar' },
  { name: 'Power BI + Copilot', desc: 'Dashboards y reportes en lenguaje natural' },
];

export default function CopilotPage() {
  return (
    <SystemsLabLayout accentColor={BLUE}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px', color: BLUE }}>
            Microsoft Copilot
          </span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '640px', marginBottom: '20px' }}>
            La IA ya está en tu{' '}
            <span style={{ background: `linear-gradient(135deg, ${BLUE}, #00BCF2)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Microsoft 365
            </span>
            .<br />Solo hay que activarla.
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            La mayoría de empresas pagan por Copilot y no lo están usando.
            Nosotros lo configuramos, lo conectamos y formamos al equipo.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ backgroundColor: BLUE, fontSize: '16px' }}>
              Activar Copilot con Aether →
            </Link>
            <Link href="/systems-lab" className="v5-btn-ghost" style={{ fontSize: '16px' }}>
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '12px' }}>El ecosistema Copilot en 2026</h2>
          <p className="v5-body-large v5-reveal" style={{ marginBottom: '40px', maxWidth: '500px' }}>
            Cada aplicación de Microsoft 365 tiene IA integrada. Este es todo lo que incluye.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
            className="v5-copilot-grid"
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  backgroundColor: 'var(--v5-bg-base)',
                  border: `1px solid ${BLUE}20`,
                  borderRadius: 'var(--v5-radius-lg)',
                  padding: '24px',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: BLUE,
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                }}>
                  {f.name}
                </h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.55 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}
            className="v5-copilot-who"
          >
            <div>
              <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '28px' }}>Para quién es</h2>
              {[
                'Empresas con Microsoft 365 Business o Enterprise que no usan Copilot',
                'Empresas que ya tienen Copilot pero el equipo no lo usa en su día a día',
                'Equipos de operaciones, administración, ventas o marketing',
              ].map((item, i) => (
                <div key={i} className="v5-reveal" style={{ display: 'flex', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: BLUE, marginTop: '8px', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '28px' }}>Lo que hacemos</h2>
              {[
                ['Setup inicial', 'Activación de Copilot en toda la organización'],
                ['Configuración', 'Conectamos Copilot con los datos de la empresa'],
                ['Formación', 'Media jornada práctica por departamento'],
                ['Flujos custom', 'Power Automate para los procesos repetitivos'],
                ['Reporting', 'Power BI dashboards conectados a KPIs del negocio'],
              ].map(([title, desc], i) => (
                <div key={i} className="v5-reveal" style={{ marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {title}
                  </span>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.5, marginTop: '4px' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '16px' }}>Implementar Copilot con Aether</h2>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '440px', margin: '0 auto 32px' }}>
            Empieza con una Sesión de Claridad y vemos juntos cómo sacarle partido.
          </p>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px', backgroundColor: BLUE }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .v5-copilot-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .v5-copilot-grid { grid-template-columns: 1fr !important; } .v5-copilot-who { grid-template-columns: 1fr !important; } }
      `}</style>
    </SystemsLabLayout>
  );
}

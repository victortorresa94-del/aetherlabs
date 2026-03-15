import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'ClickUp — Systems Lab | Aether Labs',
  description: 'Gestiona proyectos, equipos y procesos con IA integrada. El sistema operativo de tu empresa con ClickUp Brain y Claude via MCP.',
};

const PURPLE = '#7B68EE';

const cases = [
  { title: 'Onboarding automático', desc: 'Lead entra → Claude analiza → Crea proyecto en ClickUp → Asigna tareas → Carpeta Drive → Email bienvenida' },
  { title: 'Reportes semanales sin humanos', desc: 'ClickUp lee el estado de todos los proyectos → Claude genera resumen ejecutivo → PDF enviado al director cada lunes a las 8h' },
  { title: 'Gestión de contenido', desc: 'Brief en ClickUp → Claude crea el contenido → Revisión → Publicación automática en web o redes' },
];

export default function ClickUpPage() {
  return (
    <SystemsLabLayout accentColor={PURPLE}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px', color: '#999999' }}>ClickUp</span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '680px', marginBottom: '20px' }}>
            Gestiona proyectos, equipos y procesos{' '}
            <span style={{ color: 'rgba(245,245,240,0.38)' }}>
              con IA integrada
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            ClickUp no es solo un gestor de tareas. Es el sistema operativo de tu empresa,
            con IA que automatiza el 40% del trabajo manual.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '16px' }}>
              Implementar ClickUp →
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Por qué ClickUp sobre otras herramientas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="v5-why-grid"
          >
            {[
              { title: 'ClickUp Brain', desc: 'IA nativa que escribe, resume, crea y responde preguntas sobre tus proyectos' },
              { title: 'Agentes ClickUp', desc: 'Agentes propios para automatizar workflows completos sin programar' },
              { title: 'Integración con Claude', desc: 'Vía MCP, Claude puede actuar sobre ClickUp directamente en lenguaje natural' },
              { title: 'Todo en uno', desc: 'Tareas, docs, tiempo, objetivos, chat — sin necesidad de 5 herramientas distintas' },
            ].map((item, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: `1px solid ${PURPLE}25`,
                borderRadius: 'var(--v5-radius-lg)',
                padding: '28px',
              }}>
                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 600, fontSize: '18px', color: PURPLE, marginBottom: '10px', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Casos de uso que implementamos</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {cases.map((c, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-surface)',
                border: '1px solid var(--v5-border)',
                borderRadius: 'var(--v5-radius-lg)',
                padding: '28px 32px',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 700, color: PURPLE, minWidth: '28px' }}>0{i + 1}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 600, fontSize: '18px', color: 'var(--v5-text-primary)', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '32px' }}>Implementar ClickUp con Aether</h2>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px' }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .v5-why-grid { grid-template-columns: 1fr !important; } }`}</style>
    </SystemsLabLayout>
  );
}

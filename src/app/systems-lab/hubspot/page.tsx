import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'HubSpot con IA — Systems Lab | Aether Labs',
  description: 'HubSpot Breeze AI, scoring predictivo y Claude vía MCP. El stack comercial más potente del mercado implementado por Aether Labs.',
};

const ORANGE = '#FF7A59';

export default function HubSpotPage() {
  return (
    <SystemsLabLayout accentColor={ORANGE}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px', color: '#999999' }}>HubSpot con IA</span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '680px', marginBottom: '20px' }}>
            Tu CRM que trabaja{' '}
            <span style={{ color: 'rgba(245,245,240,0.38)' }}>
              contigo, no al revés
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            HubSpot en 2025/2026 tiene IA en cada punto del funnel.
            Conectado con Claude, se convierte en el sistema comercial más potente del mercado.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '16px' }}>
              Implementar HubSpot con Aether →
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '12px' }}>HubSpot AI en 2026 — lo que pocas empresas aprovechan</h2>
          <p className="v5-body-large v5-reveal" style={{ marginBottom: '40px', maxWidth: '480px' }}>
            La mayoría de empresas solo usa el 20% de lo que HubSpot ofrece.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
            className="v5-hs-grid"
          >
            {[
              { title: 'Breeze AI', desc: 'El motor de IA nativo de HubSpot. Crea contenido, resume datos, predice leads.' },
              { title: 'Breeze Copilot', desc: 'Asistente dentro del CRM que responde preguntas sobre tus contactos y deals.' },
              { title: 'Breeze Agents', desc: 'Agentes de IA para marketing, ventas y soporte automático.' },
              { title: 'Scoring predictivo', desc: 'Identifica qué leads van a cerrar antes de que el equipo los trabaje.' },
              { title: 'Claude vía MCP', desc: 'Integración nativa: Claude lee y escribe en HubSpot directamente en lenguaje natural.' },
              { title: 'Automatización avanzada', desc: 'Workflows complejos que conectan marketing, ventas y atención al cliente.' },
            ].map((item, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: `1px solid ${ORANGE}20`,
                borderRadius: 'var(--v5-radius-lg)',
                padding: '24px',
              }}>
                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 600, fontSize: '16px', color: 'var(--v5-text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '28px' }}>Lo que implementamos</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              ['Implementación básica', 'Setup de HubSpot, importación de contactos, configuración de pipeline'],
              ['Automatización de marketing', 'Secuencias de nurturing, scoring, lead routing automático'],
              ['Integración Claude', 'Vía MCP, Claude gestiona HubSpot en lenguaje natural'],
              ['Reporting', 'Dashboards de ventas + marketing con los KPIs del negocio'],
              ['Formación', 'Equipo de ventas y marketing aprende a usar HubSpot con IA'],
            ].map(([title, desc], i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-surface)',
                border: '1px solid var(--v5-border)',
                borderRadius: 'var(--v5-radius-md)',
                padding: '20px 28px',
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
              }}>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--v5-text-primary)', minWidth: '200px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{title}</span>
                <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '32px' }}>Implementar HubSpot con Aether</h2>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px' }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .v5-hs-grid { grid-template-columns: 1fr !important; } }`}</style>
    </SystemsLabLayout>
  );
}

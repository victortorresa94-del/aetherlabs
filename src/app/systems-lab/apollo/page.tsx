import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'Apollo.io — Systems Lab | Aether Labs',
  description: 'Encuentra a tu cliente ideal antes de que él te encuentre. 275M+ contactos, outreach automatizado, integración con Claude vía MCP.',
};

const DBLUE = '#1D4ED8';

export default function ApolloPage() {
  return (
    <SystemsLabLayout accentColor={DBLUE}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px', color: DBLUE }}>Apollo.io</span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '680px', marginBottom: '20px' }}>
            Encuentra a tu cliente ideal{' '}
            <span style={{ background: `linear-gradient(135deg, ${DBLUE}, #3B82F6)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              antes de que él te encuentre
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            Apollo.io es la herramienta de prospecting con IA más usada del mercado.
            Base de datos de 275M+ contactos + automatización de outreach.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ backgroundColor: DBLUE, fontSize: '16px' }}>
              Implementar Apollo con Aether →
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Qué hace Apollo</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="v5-ap-grid"
          >
            {[
              { title: 'Búsqueda de leads', desc: 'Filtra por cargo, industria, tamaño de empresa, ubicación, tecnologías que usan.' },
              { title: 'Enriquecimiento', desc: 'Completa automáticamente el perfil de cualquier contacto o empresa.' },
              { title: 'Secuencias de outreach', desc: 'Automatiza emails y llamadas de prospección.' },
              { title: 'Integración con CRM', desc: 'Sincroniza con HubSpot, Salesforce, ClickUp.' },
              { title: 'Integración con Claude', desc: 'Vía MCP oficial, Claude puede buscar leads y enriquecer datos directamente.' },
              { title: 'Analytics', desc: 'Mide qué secuencias funcionan y optimiza el outreach continuamente.' },
            ].map((item, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: `1px solid ${DBLUE}20`,
                borderRadius: 'var(--v5-radius-lg)',
                padding: '24px',
              }}>
                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 600, fontSize: '16px', color: DBLUE, marginBottom: '8px' }}>{item.title}</h3>
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
              ['Setup de Apollo', 'Configuración de cuenta + conexión con CRM del cliente'],
              ['ICP definition', 'Definimos juntos el perfil de cliente ideal en Apollo'],
              ['Primeras secuencias', 'Creamos los primeros flujos de outreach personalizados'],
              ['Integración Claude', 'Conectamos Apollo con Claude vía MCP para outreach personalizado con IA'],
              ['Formación', 'El equipo de ventas aprende a prospectar con Apollo'],
            ].map(([title, desc], i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-surface)',
                border: '1px solid var(--v5-border)',
                borderRadius: 'var(--v5-radius-md)',
                padding: '20px 28px',
                display: 'flex',
                gap: '24px',
              }}>
                <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 700, color: DBLUE, minWidth: '180px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{title}</span>
                <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '32px' }}>Implementar Apollo con Aether</h2>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px', backgroundColor: DBLUE }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .v5-ap-grid { grid-template-columns: 1fr !important; } }`}</style>
    </SystemsLabLayout>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'AchieveApex — Systems Lab | Aether Labs',
  description: 'El CRM conversacional omnicanal con IA. WhatsApp, email e Instagram en una bandeja. Partner oficial Aether Labs.',
};

const GREEN = '#059669';

export default function AchieveApexPage() {
  return (
    <SystemsLabLayout accentColor={GREEN}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="v5-label" style={{ color: '#999999' }}>AchieveApex</span>
            <span style={{
              padding: '3px 12px',
              borderRadius: '100px',
              border: `1px solid ${GREEN}40`,
              backgroundColor: `${GREEN}15`,
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: GREEN,
              textTransform: 'uppercase',
            }}>
              Partner Oficial Aether Labs
            </span>
          </div>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '680px', marginBottom: '20px' }}>
            El CRM que habla con tus clientes{' '}
            <span style={{ color: 'rgba(245,245,240,0.38)' }}>
              por ti
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            AchieveApex es el CRM conversacional omnicanal con IA nativa.
            Convierte mensajes en oportunidades de venta automáticamente.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '16px' }}>
              Implementar AchieveApex →
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Qué es AchieveApex</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
            className="v5-aa-grid"
          >
            {[
              { title: 'Omnicanal real', desc: 'WhatsApp, email, web chat, Instagram DM — todo en una sola bandeja.' },
              { title: 'IA que cualifica', desc: 'Detecta la intención del mensaje y lo clasifica automáticamente.' },
              { title: 'Pipeline automático', desc: 'Mueve los contactos en el funnel sin que nadie lo haga manualmente.' },
              { title: 'Respuestas automáticas', desc: 'Responde preguntas frecuentes 24/7 con el tono de la empresa.' },
              { title: 'Analytics de conversación', desc: 'Mide qué mensajes convierten y cuáles no.' },
              { title: 'IA nativa', desc: 'No es un CRM al que le pones IA encima — la IA es parte de su arquitectura.' },
            ].map((item, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: `1px solid ${GREEN}20`,
                borderRadius: 'var(--v5-radius-lg)',
                padding: '24px',
              }}>
                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 600, fontSize: '16px', color: GREEN, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}
            className="v5-aa-bottom"
          >
            <div>
              <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '24px' }}>Para quién es</h2>
              {[
                'Empresas con volumen de mensajes entrantes (+50/día)',
                'Equipos de ventas que pierden leads por falta de seguimiento',
                'Negocios con presencia en WhatsApp como canal principal',
                'Empresas que quieren automatizar la primera respuesta sin perder el toque humano',
              ].map((item, i) => (
                <div key={i} className="v5-reveal" style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: GREEN, marginTop: '8px', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '24px' }}>Cómo lo implementamos</h2>
              {[
                ['Implementación', '1.000€ (setup, configuración e integración con CRM existente)'],
                ['Suscripción', 'Plan anual gestionado por Aether Labs'],
                ['Formación', 'Sesión de 2h para el equipo de ventas'],
                ['Soporte', 'AchieveApex implementa, Aether Labs de intermediario'],
              ].map(([title, desc], i) => (
                <div key={i} className="v5-reveal" style={{ marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, color: GREEN, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{title}</span>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '32px' }}>Implementar AchieveApex con Aether</h2>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px' }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .v5-aa-grid { grid-template-columns: 1fr !important; } .v5-aa-bottom { grid-template-columns: 1fr !important; } }`}</style>
    </SystemsLabLayout>
  );
}

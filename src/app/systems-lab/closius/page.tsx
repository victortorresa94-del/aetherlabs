import type { Metadata } from 'next';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

export const metadata: Metadata = {
  title: 'Closius — Systems Lab | Aether Labs',
  description: 'Coaching de ventas con IA. Analiza llamadas, detecta objeciones y mejora el rendimiento de tu equipo comercial. Partner oficial.',
};

const SKY = '#0EA5E9';

export default function ClosiusPage() {
  return (
    <SystemsLabLayout accentColor={SKY}>
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="v5-label" style={{ color: SKY }}>Closius</span>
            <span style={{
              padding: '3px 12px',
              borderRadius: '100px',
              border: `1px solid ${SKY}40`,
              backgroundColor: `${SKY}15`,
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: SKY,
              textTransform: 'uppercase',
            }}>
              Partner Oficial Aether Labs
            </span>
          </div>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '680px', marginBottom: '20px' }}>
            El coach de ventas con IA que{' '}
            <span style={{ background: `linear-gradient(135deg, ${SKY}, #38BDF8)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              entrena a tu equipo comercial
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            Closius analiza tus llamadas de ventas y le dice a cada comercial
            exactamente qué está haciendo bien y qué tiene que mejorar.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ backgroundColor: SKY, fontSize: '16px' }}>
              Implementar Closius →
            </Link>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Qué hace Closius</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
            className="v5-cl-grid"
          >
            {[
              { title: 'Transcripción automática', desc: 'De todas las llamadas de ventas, en tiempo real.' },
              { title: 'Análisis de objeciones', desc: 'Identifica dónde pierde el comercial y por qué.' },
              { title: 'Score de la llamada', desc: 'Puntuación objetiva de cada conversación.' },
              { title: 'Recomendaciones personalizadas', desc: 'Qué mejorar específicamente, para cada comercial.' },
              { title: 'Dashboard de equipo', desc: 'El director ve el rendimiento de todo el equipo.' },
              { title: 'Mejora continua', desc: 'El equipo mejora mes a mes sin formación tradicional.' },
            ].map((item, i) => (
              <div key={i} className="v5-reveal" style={{
                backgroundColor: 'var(--v5-bg-base)',
                border: `1px solid ${SKY}20`,
                borderRadius: 'var(--v5-radius-lg)',
                padding: '24px',
              }}>
                <h3 style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 600, fontSize: '16px', color: SKY, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <div style={{
            backgroundColor: 'var(--v5-bg-surface)',
            border: `1px solid ${SKY}25`,
            borderRadius: 'var(--v5-radius-lg)',
            padding: '40px',
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
          }}
            className="v5-reveal"
          >
            <p style={{
              fontFamily: 'var(--v5-font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              color: 'var(--v5-text-primary)',
              lineHeight: 1.4,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
              Closius ya tiene clientes activos, incluyendo una empresa con 12.000 usuarios.
              Ha demostrado reducir el tiempo de rampa de nuevos comerciales en un 40% y
              aumentar la tasa de cierre en equipos establecidos.
            </p>
            <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: 'var(--v5-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Resultados validados con clientes reales
            </span>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}
            className="v5-cl-bottom"
          >
            <div>
              <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '24px' }}>Para quién es</h2>
              {[
                'Empresas con equipo comercial de 5+ personas',
                'Startups tech con equipos de SDR o AE',
                'Empresas con alta rotación de comerciales',
                'Directores de ventas que quieren datos objetivos',
              ].map((item, i) => (
                <div key={i} className="v5-reveal" style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: SKY, marginTop: '8px', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '24px' }}>Pricing</h2>
              <div className="v5-reveal" style={{ backgroundColor: 'var(--v5-bg-base)', border: `1px solid ${SKY}25`, borderRadius: 'var(--v5-radius-lg)', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--v5-font-display)', fontWeight: 800, fontSize: '40px', color: SKY, letterSpacing: '-0.03em' }}>$30</span>
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', color: 'var(--v5-text-muted)' }}>/usuario/mes</span>
                </div>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', marginBottom: '16px' }}>
                  Equipo de 10 comerciales = $300/mes
                </p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', color: 'var(--v5-text-muted)', lineHeight: 1.5 }}>
                  Implementación gestionada por Closius + acompañamiento de Aether Labs.
                  Aether Labs trae el lead, Closius cierra e implementa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '32px' }}>Implementar Closius con Aether</h2>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px', backgroundColor: SKY }}>
              Reservar Sesión de Claridad →
            </Link>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .v5-cl-grid { grid-template-columns: 1fr !important; } .v5-cl-bottom { grid-template-columns: 1fr !important; } }`}</style>
    </SystemsLabLayout>
  );
}

'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const features = [
  {
    title: 'Claude Cowork',
    desc: 'Agente de escritorio que lee y edita tus archivos locales, ejecuta tareas de múltiples pasos y coordina sub-agentes para trabajo complejo.',
  },
  {
    title: 'Skills personalizados',
    desc: 'Flujos de trabajo guardados que ejecutas con un clic. Los creamos adaptados a tus procesos: informes, propuestas, onboardings.',
  },
  {
    title: 'Integración MCP',
    desc: 'Conecta Claude con más de 877 herramientas vía Model Context Protocol: Google Drive, HubSpot, ClickUp, Slack y cualquier sistema que uses.',
  },
  {
    title: 'Análisis de documentos',
    desc: 'Sube PDFs, hojas de cálculo o contratos. Claude los lee, extrae información clave y actúa sobre ella sin intervención manual.',
  },
];

const casos = [
  {
    num: '01',
    title: 'Informe semanal sin intervención',
    desc: 'Una empresa B2B tardaba 4 horas cada lunes preparando el informe de ventas. Con Claude + n8n, el informe llega solo a las 8h del lunes.',
  },
  {
    num: '02',
    title: 'Onboarding de cliente en 2 minutos',
    desc: 'Cada nuevo cliente generaba 30 minutos de trabajo manual. Ahora Claude crea el proyecto en ClickUp, la carpeta en Drive y envía el email de bienvenida automáticamente.',
  },
  {
    num: '03',
    title: 'Equipo de marketing x3 en productividad',
    desc: 'Un equipo de 4 personas generó el triple de contenido en el mismo tiempo tras implementar Claude Cowork con Skills personalizados para su flujo de creación.',
  },
];

export default function ClaudePage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* Hero */}
        <section
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
        >
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{
                display: 'block',
                marginBottom: '24px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#999999',
              }}
            >
              🤖 Claude — Anthropic
            </span>
            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '800px',
                marginBottom: '28px',
                transitionDelay: '80ms',
              }}
            >
              El asistente de IA más potente,<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>integrado en tus procesos.</span>
            </h1>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '520px',
                marginBottom: '40px',
                transitionDelay: '160ms',
              }}
            >
              Claude no es un chatbot. Es un agente que lee tus documentos,
              actúa en tus herramientas y completa trabajo real por ti.
            </p>
            <div className="v5-reveal" style={{ transitionDelay: '240ms' }}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Implementar Claude con Aether →
              </Link>
            </div>
          </div>
        </section>

        {/* Qué implementamos */}
        <section
          style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}
        >
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Qué implementamos
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Claude configurado para tu empresa
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: '32px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de uso reales */}
        <section
          style={{
            backgroundColor: '#F8F8F8',
            borderTop: '1px solid #EBEBEB',
            borderBottom: '1px solid #EBEBEB',
            paddingTop: '120px',
            paddingBottom: '120px',
          }}
        >
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Casos de uso reales
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Lo que Claude hace en empresas reales
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {casos.map((c, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '32px 40px',
                    display: 'flex',
                    gap: '32px',
                    alignItems: 'flex-start',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#AAAAAA',
                      minWidth: '28px',
                      flexShrink: 0,
                    }}
                  >
                    {c.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '20px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                        marginBottom: '10px',
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: '#666666',
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}
        >
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Listo para que Claude trabaje en tu empresa?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Empieza con una Sesión de Claridad de 90 minutos.
              </p>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Reservar Sesión de Claridad →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

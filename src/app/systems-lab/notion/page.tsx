'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Database, Sparkles, Bot } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: BookOpen,
    title: 'Wiki interna estructurada',
    desc: 'Construimos la página principal de empresa, el área de Procesos/SOPs, la sección de Clientes, Proyectos y RRHH. Una estructura que cualquiera entiende el primer día sin que nadie se la explique.',
  },
  {
    icon: Database,
    title: 'Bases de datos conectadas',
    desc: 'Clientes vinculados a proyectos, proyectos vinculados a tareas. Pipeline de ventas, repositorio de recursos, directorio de proveedores. Todo conectado para que los datos no vivan aislados en tablas sin relación.',
  },
  {
    icon: Sparkles,
    title: 'Notion AI activado',
    desc: 'Activamos Notion AI y configuramos el flujo: resumen automático de reuniones, búsqueda en lenguaje natural por todo el workspace, generación de contenido desde plantillas y autocompletado en documentos.',
  },
  {
    icon: Bot,
    title: 'Claude + Notion MCP',
    desc: 'Conectamos Claude vía MCP para que pueda crear páginas, actualizar bases de datos y buscar información en Notion usando lenguaje natural. La gestión del conocimiento por voz real, no por promesas de marketing.',
  },
];

const casos = [
  {
    label: 'Onboarding de nuevas incorporaciones',
    antes: 'El onboarding dependía de que alguien del equipo se sentara con el nuevo empleado varios días. Cada vez era distinto. Cosas importantes se olvidaban.',
    despues: 'Una página de Onboarding en Notion con el día 1, semana 1 y mes 1 documentados. El nuevo entra, sigue el proceso y el equipo puede trabajar sin interrupciones.',
  },
  {
    label: 'Base de conocimiento de soporte',
    antes: 'El equipo de soporte respondía las mismas preguntas una y otra vez. No había registro de soluciones. Cada caso se resolvía desde cero.',
    despues: 'Una base de datos de casos resueltos en Notion. Cuando llega un caso nuevo, Claude busca en la base y sugiere la solución en segundos.',
  },
  {
    label: 'Seguimiento de proyectos de cliente',
    antes: 'El estado de los proyectos vivía en la cabeza del account manager. Los clientes preguntaban. El equipo no tenía visibilidad de lo que hacían los demás.',
    despues: 'Una base de datos de proyectos en Notion conectada a tareas y a clientes. Todo el equipo ve el estado real sin preguntar a nadie.',
  },
];

const faqs = [
  {
    q: '¿Cuánto tiempo lleva implementar Notion?',
    a: 'La implementación base toma entre 2 y 4 semanas dependiendo del tamaño de la empresa y la cantidad de procesos a documentar. La primera semana diseñamos la arquitectura, la segunda configuramos las bases de datos y los templates, y las siguientes semanas documentamos los SOPs y formamos al equipo.',
  },
  {
    q: '¿Qué pasa si el equipo ya tiene información en otras herramientas?',
    a: 'Migramos la información existente: documentos de Google Drive o Notion mal estructurado, hojas de cálculo, Confluence o cualquier otra fuente. Parte del trabajo es consolidar y limpiar, no empezar desde cero con el caos que ya existe.',
  },
  {
    q: '¿Necesito el plan de pago de Notion para esto?',
    a: 'Para una empresa de más de 5 personas, el plan Plus o Business de Notion es necesario para aprovechar las bases de datos relacionales, los permisos avanzados y Notion AI. Te ayudamos a elegir el plan correcto y a justificar el coste.',
  },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

function FAQAccordion({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const borderColor = dark ? 'rgba(255,255,255,0.12)' : '#E2E2DF';
  const questionColor = dark ? '#F5F5F0' : '#111111';
  const answerColor = dark ? 'rgba(245,245,240,0.55)' : '#666666';
  const iconColor = dark ? 'rgba(245,245,240,0.4)' : '#AAAAAA';

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: `1px solid ${borderColor}` }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '28px',
              paddingBottom: '28px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '18px',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: questionColor,
                lineHeight: 1.3,
              }}
            >
              {faq.q}
            </span>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '20px',
                fontWeight: 300,
                color: iconColor,
                flexShrink: 0,
                transition: 'transform 200ms ease',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: answerColor,
                paddingBottom: '24px',
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
      <div style={{ borderTop: `1px solid ${borderColor}` }} />
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function NotionPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
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
              Systems Lab · Documentación y Conocimiento
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
                maxWidth: '860px',
                marginBottom: '32px',
                transitionDelay: '80ms',
              }}
            >
              El conocimiento de tu empresa<br />
              no puede estar en la cabeza<br />
              <span style={{ color: 'rgba(245,245,240,0.35)' }}>de una sola persona.</span>
            </h1>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '560px',
                marginBottom: '40px',
                transitionDelay: '160ms',
              }}
            >
              Notion es donde vive todo lo que tu empresa sabe: procesos, clientes, proyectos, onboarding, políticas. Pero sin una estructura bien diseñada, Notion se convierte en otro cajón de desorden digital. Nosotros lo construimos bien desde el principio.
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
                  borderRadius: '2px',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Implementar Notion →
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUÉ IMPLEMENTAMOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px', maxWidth: '640px' }}>
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
                Un Notion que cualquiera del equipo puede usar sin formación previa.
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="v5-reveal"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderTop: '2px solid #111111',
                      borderRadius: '16px',
                      padding: '40px',
                      transitionDelay: `${i * 80}ms`,
                    }}
                  >
                    <div style={{ marginBottom: '20px' }}>
                      <Icon size={22} color="#111111" strokeWidth={1.5} />
                    </div>
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
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CASOS DE USO ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px', maxWidth: '640px' }}>
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
                Notion en el trabajo real de cada empresa.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {casos.map((c, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#999999',
                      marginBottom: '16px',
                    }}
                  >
                    {c.label}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '11px',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#BBBBBB',
                          marginBottom: '10px',
                        }}
                      >
                        Antes
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          lineHeight: 1.8,
                          color: '#888888',
                        }}
                      >
                        {c.antes}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '11px',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#111111',
                          marginBottom: '10px',
                        }}
                      >
                        Despues
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          lineHeight: 1.8,
                          color: '#444444',
                        }}
                      >
                        {c.despues}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (dark) ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              <div className="v5-reveal">
                <h2
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    color: '#F5F5F0',
                  }}
                >
                  Preguntas frecuentes
                </h2>
              </div>
              <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
                <FAQAccordion dark={true} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '80px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                padding: '80px 40px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(24px, 3.5vw, 44px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Tu empresa tiene el conocimiento documentado?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Empieza con una Sesión de Claridad de 90 minutos. Sin compromiso.
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
                  borderRadius: '2px',
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

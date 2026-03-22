'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, TrendingUp, Zap, GitMerge, BarChart2 } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Users,
    title: 'CRM base bien configurado',
    desc: 'Importación limpia de datos existentes, deduplicación y normalización. Propiedades custom adaptadas al proceso de ventas real. Segmentación por sector, tamaño y fase del ciclo. Permisos por rol para que cada persona vea lo que necesita.',
  },
  {
    icon: TrendingUp,
    title: 'Pipeline de ventas que refleja la realidad',
    desc: 'Etapas del pipeline alineadas con el proceso real del equipo, no con el genérico de HubSpot. Probabilidades de cierre calibradas. Tareas automáticas en cada transición de etapa y alertas cuando un deal lleva demasiado tiempo sin movimiento.',
  },
  {
    icon: Zap,
    title: 'Marketing automation',
    desc: 'Formularios conectados al CRM con segmentación automática. Lead scoring configurado según comportamiento e ICP. Secuencias de nurturing para leads que no están listos todavía. Notificación automática al comercial cuando el lead está listo para el cierre.',
  },
  {
    icon: GitMerge,
    title: 'Integraciones con el stack completo',
    desc: 'Apollo para importar leads cualificados directamente. ClickUp para sincronizar proyectos cuando el deal cierra. Claude vía MCP para operar el CRM por lenguaje natural. Web para captura de leads con formularios y chat.',
  },
  {
    icon: BarChart2,
    title: 'Reporting en tiempo real',
    desc: 'Dashboard ejecutivo con pipeline por etapa, velocidad de ventas y forecast mensual. Informe semanal generado automáticamente por Claude con el resumen del estado de cada deal activo. Sin reuniones de pipeline que no sirven para nada.',
  },
];

const casos = [
  {
    label: 'Equipo de ventas B2B sin proceso definido',
    antes: 'El CRM existía pero nadie lo usaba de verdad. Los comerciales gestionaban sus deals en hojas de cálculo personales. El pipeline era ficción.',
    despues: 'Pipeline redefinido con etapas reales, tareas automáticas y alertas de seguimiento. En 30 días el equipo usaba HubSpot como herramienta de trabajo, no como obligación.',
    detalle: null,
  },
  {
    label: 'Claude + HubSpot: el caso más potente',
    antes: 'El director de ventas necesitaba 2 horas cada lunes para preparar el informe de pipeline y distribuirlo al equipo.',
    despues: 'Claude se conecta a HubSpot vía MCP. El director escribe: "Dame el resumen de los deals que no se han movido esta semana y envíalo al equipo." Claude lo hace en 30 segundos.',
    detalle: 'Desde lenguaje natural: crear contactos, actualizar deals, buscar empresas por sector, generar informes. El CRM operado por voz, no por clics.',
  },
];

const faqs = [
  {
    q: '¿Qué versión de HubSpot necesito para esto?',
    a: 'Depende del alcance. Para CRM base y pipeline, el plan Starter de Sales Hub es suficiente. Para marketing automation completo y lead scoring avanzado, necesitas el plan Professional. Para reporting predictivo y objetos custom, Enterprise. En la Sesión de Claridad analizamos qué plan tiene sentido para tu caso sin pagar por funciones que no vas a usar.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Una implementación completa de CRM + pipeline + marketing automation tarda entre 4 y 8 semanas. La primera semana es auditoría y diseño, las siguientes son configuración, integración con otras herramientas y formación del equipo. Después hay un mes de acompañamiento para ajustar según el uso real.',
  },
  {
    q: '¿Podéis migrar desde otro CRM?',
    a: 'Sí. Hemos migrado desde Salesforce, Pipedrive, Zoho y hojas de cálculo. El proceso incluye exportación, limpieza de datos, normalización y mapeo de campos antes de la importación. La migración es la parte más delicada: si los datos llegan sucios, el CRM nuevo empieza sucio.',
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

export default function HubSpotPage() {
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
              Systems Lab · CRM y Marketing
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
              Tu CRM que trabaja.<br />
              No el que llenas manualmente<br />
              <span style={{ color: 'rgba(245,245,240,0.35)' }}>y nadie consulta.</span>
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
              El problema con los CRM no es la herramienta. Es que nadie los configuró pensando en cómo trabaja el equipo de ventas real. Resultado: datos incompletos, pipeline que no refleja la realidad y un sistema que se usa como archivo, no como motor de ventas.
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
                Implementar HubSpot →
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
                HubSpot completo, conectado y usado de verdad.
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

        {/* ── CASOS DE USO (dark) ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px', maxWidth: '640px' }}>
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
                HubSpot en el día a día de un equipo de ventas.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {casos.map((c, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
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
                      marginBottom: '24px',
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
                          color: 'rgba(245,245,240,0.3)',
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
                          color: 'rgba(245,245,240,0.4)',
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
                          color: 'rgba(245,245,240,0.6)',
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
                          color: 'rgba(245,245,240,0.7)',
                        }}
                      >
                        {c.despues}
                      </p>
                      {c.detalle && (
                        <p
                          style={{
                            fontFamily: 'var(--v5-font-body)',
                            fontSize: '14px',
                            fontWeight: 300,
                            lineHeight: 1.7,
                            color: 'rgba(245,245,240,0.45)',
                            marginTop: '12px',
                            fontStyle: 'italic',
                          }}
                        >
                          {c.detalle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
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
                    color: '#111111',
                  }}
                >
                  Preguntas frecuentes
                </h2>
              </div>
              <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
                <FAQAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
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
                ¿Tu pipeline refleja la realidad de tus ventas?
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

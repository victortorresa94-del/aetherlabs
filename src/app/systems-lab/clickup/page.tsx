'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const problemas = [
  {
    num: '01',
    title: 'Instalado pero no adoptado',
    desc: 'El 60% de los equipos abandona ClickUp en 3 meses. No porque la herramienta sea mala, sino porque nadie la configuró pensando en cómo trabaja el equipo de verdad.',
  },
  {
    num: '02',
    title: 'Estructura que no refleja la realidad',
    desc: 'Espacios creados por intuición, listas duplicadas, tareas sin responsable ni fecha. Cuando el sistema no refleja cómo trabaja el equipo, el equipo deja de usarlo.',
  },
  {
    num: '03',
    title: 'Sin procesos documentados',
    desc: 'Todo está en la cabeza de quien sabe. Cuando esa persona no está, el trabajo se para. Los SOPs en ClickUp cambian eso: el proceso vive en el sistema, no en la persona.',
  },
];

const implementaciones = [
  {
    title: 'Arquitectura del workspace',
    desc: 'Diseñamos la estructura de espacios, carpetas y listas que refleja exactamente cómo trabaja tu empresa. Con nomenclatura coherente, jerarquías claras y vistas configuradas para cada rol.',
  },
  {
    title: 'SOPs y procesos',
    desc: 'Documentamos los procesos clave de tu empresa en ClickUp Docs. Cada proceso tiene su checklist, responsables y deadlines. El trabajo deja de depender de que alguien sepa cómo se hace.',
  },
  {
    title: 'Automatizaciones internas',
    desc: 'Cuando una tarea cambia de estado, se asigna la siguiente. Cuando un proyecto llega a una fase, se notifica al responsable. Las automatizaciones de ClickUp hacen el trabajo de coordinación.',
  },
  {
    title: 'Claude + ClickUp MCP',
    desc: 'Claude puede leer y escribir en ClickUp en lenguaje natural. Crear tareas, actualizar estados, generar reportes de progreso. Tu equipo habla con Claude y ClickUp se actualiza solo.',
  },
];

const nosotrosHacemos = [
  'Auditoría del workspace actual (si existe)',
  'Diseño de arquitectura de espacios y listas',
  'Configuración de estados personalizados por tipo de proyecto',
  'Setup de campos personalizados y vistas',
  'Documentación de SOPs en ClickUp Docs',
  'Configuración de automatizaciones internas',
  'Integración con Claude vía MCP',
  'Formación del equipo (sesión de 2-3 horas)',
  '30 días de soporte post-implementación',
];

const tuHaces = [
  'Participar en la Sesión de Claridad inicial (90 min)',
  'Revisar y validar la arquitectura propuesta',
  'Proporcionar acceso al workspace de ClickUp',
  'Asistir a la sesión de formación con el equipo',
  'Usar el sistema (la parte más importante)',
];

const faqs = [
  {
    q: '¿Necesitamos empezar desde cero o podéis arreglar nuestro ClickUp actual?',
    a: 'Podemos hacer ambas cosas. Si tenéis un workspace existente, hacemos primero una auditoría para decidir qué conservar y qué rediseñar. A veces es más rápido empezar de cero; otras veces tiene sentido migrar lo que ya funciona.',
  },
  {
    q: '¿Qué plan de ClickUp necesitamos?',
    a: 'Para implementaciones de empresa recomendamos el plan Business. Permite automatizaciones ilimitadas, campos personalizados avanzados y control de permisos por rol. Lo valoramos en la Sesión de Claridad según vuestro caso.',
  },
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'Una implementación estándar (arquitectura + SOPs + automatizaciones básicas) tarda entre 2 y 3 semanas. La integración con Claude MCP añade normalmente 1 semana adicional.',
  },
  {
    q: '¿El equipo va a adoptar el sistema?',
    a: 'La adopción es el reto real de cualquier implementación de ClickUp. Por eso diseñamos el sistema con el equipo, no para el equipo. Y por eso incluimos formación y 30 días de soporte para resolver dudas durante la fase de adaptación.',
  },
  {
    q: '¿Podéis conectar ClickUp con otras herramientas que ya usamos?',
    a: 'Sí. ClickUp tiene integraciones nativas con Slack, Google Drive, HubSpot, Zoom y muchas otras herramientas. Vía n8n o Zapier podemos conectarlo con cualquier sistema que tenga API. Lo evaluamos en la Sesión de Claridad.',
  },
];

export default function ClickUpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
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
              SYSTEMS LAB · OPERACIONES
            </span>
            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#F5F5F0',
                maxWidth: '820px',
                marginBottom: '28px',
                transitionDelay: '80ms',
                whiteSpace: 'pre-line',
              }}
            >
              {'Tu empresa ordenada.\nTus proyectos bajo control.\nTu equipo trabajando solo.'}
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
              ClickUp es el sistema operativo de tu empresa. Pero instalarlo no es suficiente. El 60% de los equipos abandona ClickUp en 3 meses porque nadie lo configuró bien desde el principio. Nosotros lo hacemos.
            </p>
            <div className="v5-reveal" style={{ transitionDelay: '240ms' }}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
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
                Implementar ClickUp →
              </Link>
            </div>
          </div>
        </section>

        {/* EL PROBLEMA */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                  maxWidth: '680px',
                }}
              >
                El problema no es que te falten herramientas. Es que las que tienes no funcionan juntas.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {problemas.map((p, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#CCCCCC',
                      marginBottom: '16px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {p.title}
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
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUÉ IMPLEMENTAMOS */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
                QUÉ IMPLEMENTAMOS
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
                Una implementación de ClickUp que el equipo usa de verdad.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {implementaciones.map((impl, i) => (
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
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: '14px',
                    }}
                  >
                    {impl.title}
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
                    {impl.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
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
                CASOS DE USO
              </span>
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
                ClickUp en empresas reales.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div
                className="v5-reveal"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '40px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    marginBottom: '16px',
                  }}
                >
                  AGENCIA DE SERVICIOS
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#F5F5F0',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  De Excel a sistema operativo en 3 semanas
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  Una agencia de 12 personas gestionaba todos sus proyectos en hojas de cálculo compartidas. Implementamos ClickUp con arquitectura por cliente, automatizaciones de hitos y SOPs para onboarding. En 3 semanas el equipo funcionaba sin que nadie tuviera que preguntar en qué estado estaba nada.
                </p>
              </div>
              <div
                className="v5-reveal"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '40px',
                  transitionDelay: '80ms',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    marginBottom: '16px',
                  }}
                >
                  EMPRESA B2B
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#F5F5F0',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Reporting automático sin trabajo manual
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  Claude lee ClickUp via MCP cada viernes, extrae el estado de todos los proyectos activos y genera el informe semanal de dirección. Sin que nadie prepare nada manualmente. El equipo directivo llega el lunes con el informe listo.
                </p>
              </div>
            </div>
            {/* Caso destacado EME Agency */}
            <div
              className="v5-reveal"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                gap: '48px',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '0 0 auto' }}>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '56px',
                    fontWeight: 700,
                    color: '#F5F5F0',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  +40
                </div>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  proyectos activos gestionados
                </div>
              </div>
              <div style={{ flex: '1 1 280px' }}>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    marginBottom: '12px',
                  }}
                >
                  EME AGENCY
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#F5F5F0',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  De la confusión operativa a la escalabilidad real
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  EME Agency gestionaba más de 40 proyectos simultáneos con un equipo de 8 personas. La coordinación era manual y el CEO era el cuello de botella de todo. Implementamos ClickUp con estructura por cliente, automatizaciones de estado y SOPs para cada tipo de proyecto. El equipo ahora opera de forma autónoma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
                QUÉ INCLUYE
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
                Lo que hacemos nosotros vs. lo que haces tú.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              <div
                className="v5-reveal"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderTop: '2px solid #111111',
                  borderRadius: '16px',
                  padding: '40px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#111111',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Nosotros hacemos
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {nosotrosHacemos.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} style={{ color: '#111111', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: '#444444' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="v5-reveal"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderTop: '2px solid #CCCCCC',
                  borderRadius: '16px',
                  padding: '40px',
                  transitionDelay: '80ms',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#111111',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Tú haces
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {tuHaces.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} style={{ color: '#AAAAAA', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: '#666666' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
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
                FAQ
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
                Preguntas frecuentes
              </h2>
            </div>
            <div className="v5-reveal" style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#F7F7F5',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '24px 28px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#111111',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '20px',
                        color: '#999999',
                        flexShrink: 0,
                        lineHeight: 1,
                        transition: 'transform 200ms ease',
                        transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px' }}>
                      <p
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          lineHeight: 1.8,
                          color: '#666666',
                          margin: 0,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-section" style={{ backgroundColor: '#080808', textAlign: 'center' }}>
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
                ¿Listo para tener un ClickUp que tu equipo usa de verdad?
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
                Empieza con una Sesión de Claridad. 90 minutos para definir exactamente qué implementamos y cómo.
              </p>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
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

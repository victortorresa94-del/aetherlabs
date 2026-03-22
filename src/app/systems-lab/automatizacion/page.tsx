'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const comparativa = [
  { fila: 'Open source', n8n: 'Si. Self-hosted o cloud.', make: 'No. SaaS propietario.' },
  { fila: 'Interfaz', n8n: 'Visual, orientada a nodos.', make: 'Visual, orientada a escenarios.' },
  { fila: 'Complejidad', n8n: 'Alta. Permite lógica avanzada.', make: 'Media. Ideal para flujos lineales.' },
  { fila: 'Control de datos', n8n: 'Total. Los datos no salen del servidor.', make: 'Datos procesados en servidores de Make.' },
  { fila: 'Ideal para', n8n: 'Flujos complejos, integraciones con IA, privacidad de datos.', make: 'Automatizaciones rápidas entre apps SaaS.' },
];

const automatizaciones = [
  { num: '01', text: 'Informe de ventas generado y enviado automáticamente cada lunes' },
  { num: '02', text: 'Lead entra en CRM y recibe email de bienvenida personalizado en 60 segundos' },
  { num: '03', text: 'Nuevo cliente firmado crea proyecto en ClickUp, carpeta en Drive y email de onboarding' },
  { num: '04', text: 'Factura emitida notifica al equipo financiero y actualiza el CRM' },
  { num: '05', text: 'Formulario web crea tarea asignada al responsable con todos los datos' },
  { num: '06', text: 'Brief en ClickUp genera contenido con Claude y lo pone en revisión' },
  { num: '07', text: 'Reunión terminada genera acta automática con action items y la envía a los asistentes' },
  { num: '08', text: 'Stock bajo el mínimo crea pedido de compra y avisa al responsable' },
  { num: '09', text: 'CV recibido por email entra en ATS y notifica al reclutador' },
  { num: '10', text: 'Propuesta comercial enviada programa seguimiento automático a los 3 días' },
  { num: '11', text: 'Ticket de soporte resuelto solicita valoración al cliente' },
  { num: '12', text: 'Publicación aprobada en ClickUp se programa y publica en redes sociales' },
  { num: '13', text: 'Notificación de pago recibido actualiza el estado del proyecto y al cliente' },
  { num: '14', text: 'KPIs del mes extraídos de las herramientas y enviados al equipo directivo' },
  { num: '15', text: 'Nuevo empleado activa checklist de onboarding en Notion y ClickUp' },
];

const pasos = [
  {
    num: '01',
    title: 'Mapeamos los procesos actuales',
    desc: 'Identificamos qué tareas se hacen manualmente, quién las hace y cuánto tiempo consumen. Priorizamos por impacto.',
  },
  {
    num: '02',
    title: 'Diseñamos los flujos',
    desc: 'Definimos la lógica de cada automatización: triggers, condiciones, acciones y excepciones. Sin código todavía.',
  },
  {
    num: '03',
    title: 'Construimos y probamos',
    desc: 'Implementamos los flujos en n8n o Make, los conectamos con tus herramientas y los probamos con datos reales.',
  },
  {
    num: '04',
    title: 'Entregamos con documentación',
    desc: 'Cada flujo queda documentado: qué hace, cómo funciona y cómo modificarlo. Tu equipo puede gestionarlo.',
  },
];

const faqs = [
  {
    q: '¿Necesito saber programar para usar n8n o Make?',
    a: 'No. Ambas herramientas tienen interfaces visuales sin código. Nosotros construimos y configuramos los flujos. Tu equipo solo necesita entender qué hace cada automatización para poder gestionarla.',
  },
  {
    q: '¿Qué pasa si una automatización falla?',
    a: 'Todas las implementaciones incluyen manejo de errores: notificaciones cuando algo falla, reintentos automáticos y logs para diagnosticar el problema. Además, dejamos documentación para resolver los casos más comunes.',
  },
  {
    q: '¿Cuánto tiempo tarda implementar una automatización?',
    a: 'Una automatización sencilla (conectar dos herramientas con un flujo lineal) puede estar lista en 1-2 días. Los flujos complejos con lógica condicional, integración con IA o múltiples herramientas pueden llevar 1-2 semanas.',
  },
];

// ─── FAQ ACCORDION ─────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: '1px solid #E0E0E0' }}>
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
                color: '#111111',
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
                color: '#AAAAAA',
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
                color: '#666666',
                paddingBottom: '24px',
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
      <div style={{ borderTop: '1px solid #E0E0E0' }} />
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function AutomatizacionPage() {
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
              SYSTEMS LAB · AUTOMATIZACIÓN
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
                maxWidth: '820px',
                marginBottom: '28px',
                transitionDelay: '80ms',
              }}
            >
              Las tareas repetitivas<br />
              no deberían depender<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>de una persona.</span>
            </h1>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '540px',
                marginBottom: '40px',
                transitionDelay: '160ms',
              }}
            >
              n8n y Make conectan cualquier herramienta con cualquier otra y automatizan el flujo de datos entre ellas. Lo que antes hacía una persona manualmente, ahora sucede solo en segundos. Nosotros lo diseñamos, lo construimos y lo dejamos funcionando.
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
                Automatizar mis procesos →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — N8N VS MAKE ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px', maxWidth: '640px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                  marginBottom: '20px',
                }}
              >
                Dos herramientas. Cada una tiene su sitio.
              </h2>
            </div>

            <div
              className="v5-reveal"
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                overflow: 'hidden',
                maxWidth: '800px',
                marginBottom: '40px',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr 1fr',
                  background: '#111111',
                }}
              >
                <div style={{ padding: '16px 24px' }} />
                <div
                  style={{
                    padding: '16px 24px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#F5F5F0',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  n8n
                </div>
                <div
                  style={{
                    padding: '16px 24px',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#F5F5F0',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  Make
                </div>
              </div>
              {/* Filas */}
              {comparativa.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr 1fr',
                    borderTop: '1px solid #E0E0E0',
                    background: i % 2 === 0 ? '#FFFFFF' : '#F7F7F5',
                  }}
                >
                  <div
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#666666',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {row.fila}
                  </div>
                  <div
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#333333',
                      borderLeft: '1px solid #E0E0E0',
                    }}
                  >
                    {row.n8n}
                  </div>
                  <div
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#333333',
                      borderLeft: '1px solid #E0E0E0',
                    }}
                  >
                    {row.make}
                  </div>
                </div>
              ))}
            </div>

            <div className="v5-reveal">
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#666666',
                  maxWidth: '640px',
                  padding: '20px 28px',
                  background: '#F7F7F5',
                  borderRadius: '12px',
                  borderLeft: '3px solid #111111',
                }}
              >
                En Aether Labs usamos los dos según el caso. En la Sesión de Claridad decidimos cuál tiene más sentido para tu situación.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — LAS 15 AUTOMATIZACIONES ── */}
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
                Las automatizaciones que más tiempo ahorran.
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '16px',
              }}
            >
              {automatizaciones.map((a, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                    padding: '24px 28px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    transitionDelay: `${Math.floor(i / 3) * 60}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#CCCCCC',
                      minWidth: '24px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {a.num}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#333333',
                    }}
                  >
                    {a.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — PROCESO ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                  maxWidth: '500px',
                }}
              >
                De la idea al flujo funcionando.
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {pasos.map((paso, i) => (
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
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'rgba(245,245,240,0.25)',
                      marginBottom: '20px',
                    }}
                  >
                    {paso.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#F5F5F0',
                      marginBottom: '12px',
                    }}
                  >
                    {paso.title}
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
                    {paso.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 5 — FAQ ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px' }}>
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
            <div style={{ maxWidth: '720px' }}>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 6 — CTA ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
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
                ¿Cuántas horas a la semana se pierden en tareas repetitivas?
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
                Cuéntanoslo en una Sesión de Claridad de 90 minutos.
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

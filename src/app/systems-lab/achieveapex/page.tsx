'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Instagram, Facebook, Mail, Globe, Smartphone, Check, ChevronDown } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const canales = [
  { icon: <Smartphone size={20} strokeWidth={1.5} />, label: 'WhatsApp Business' },
  { icon: <Instagram size={20} strokeWidth={1.5} />, label: 'Instagram DMs' },
  { icon: <Facebook size={20} strokeWidth={1.5} />, label: 'Facebook Messenger' },
  { icon: <Mail size={20} strokeWidth={1.5} />, label: 'Email' },
  { icon: <Globe size={20} strokeWidth={1.5} />, label: 'Chat web' },
  { icon: <MessageSquare size={20} strokeWidth={1.5} />, label: 'SMS' },
];

const implementaciones = [
  {
    num: '01',
    title: 'Setup y conexión de canales',
    desc: 'WhatsApp Business API, Instagram, Facebook Messenger, chat web y email. Todos conectados en una sola bandeja desde el primer día.',
  },
  {
    num: '02',
    title: 'Flujos de atención automática',
    desc: 'Respuesta 24/7, cualificación de leads, asignación al agente correcto y seguimiento automático. Tu equipo solo interviene cuando la conversación lo requiere.',
  },
  {
    num: '03',
    title: 'Integración con CRM existente',
    desc: 'Si ya usas HubSpot o ClickUp, AchieveApex se integra con ellos. No empezamos de cero: conectamos lo que ya tienes.',
  },
  {
    num: '04',
    title: 'IA conversacional personalizada',
    desc: 'Entrenamos la IA con la información de tu empresa, tu tono de marca y las objeciones frecuentes. Escalado a humano cuando la conversación lo necesita.',
  },
];

const paraQuienEs = [
  'Recibes más de 20 mensajes diarios de clientes potenciales y no tienes sistema para gestionarlos.',
  'Tu equipo atiende por WhatsApp personal y los leads se pierden entre conversaciones.',
  'Hay leads que contactan por varios canales distintos y nadie los une en un solo perfil.',
  'Tardas más de 4 horas en dar una primera respuesta y sabes que eso te cuesta ventas.',
];

const faqs = [
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 4 semanas según los canales a conectar y la complejidad de los flujos. La primera conexión operativa suele estar lista en la primera semana.',
  },
  {
    q: '¿Necesito tener ya WhatsApp Business API?',
    a: 'No. Gestionamos todo el proceso de alta y verificación de la API de Meta. Solo necesitas tener un número de teléfono dedicado para el negocio.',
  },
  {
    q: '¿Qué pasa con las conversaciones que ya tengo en WhatsApp?',
    a: 'Los historiales anteriores no se migran automáticamente, pero desde el día de activación todas las conversaciones nuevas quedan registradas y trazadas en AchieveApex.',
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

export default function AchieveApexPage() {
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
              SYSTEMS LAB · CRM CONVERSACIONAL · PARTNER
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
              Tus clientes escriben por<br />
              WhatsApp, Instagram y email.<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>Ninguno debe perderse.</span>
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
              AchieveApex centraliza todas las conversaciones con clientes en una sola bandeja. Con IA que responde, clasifica y hace seguimiento. Tu equipo solo interviene cuando la conversación lo requiere.
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
                Ver cómo funciona →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — QUÉ ES ACHIEVEAPEX ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ maxWidth: '720px', marginBottom: '64px' }}>
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
                Todos los canales. Una sola bandeja. IA que clasifica y responde.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#555555',
                }}
              >
                AchieveApex es un CRM conversacional de nueva generación. No es HubSpot. No es un chatbot. Es el sistema que une todos los canales por donde entra un cliente potencial y los gestiona con IA.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              {canales.map((c, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <span style={{ color: '#111111' }}>{c.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#111111',
                    }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="v5-reveal" style={{ maxWidth: '680px' }}>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#666666',
                  padding: '24px 32px',
                  background: '#F7F7F5',
                  borderRadius: '12px',
                  borderLeft: '3px solid #111111',
                }}
              >
                Cada conversación entra en la bandeja unificada, se clasifica automáticamente por intención (lead nuevo / cliente / soporte / no interesado) y se asigna al agente correcto.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — QUÉ IMPLEMENTAMOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
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
                  maxWidth: '640px',
                }}
              >
                De tener conversaciones dispersas a tener un sistema que trabaja solo.
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {implementaciones.map((item, i) => (
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
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: '#AAAAAA',
                      marginBottom: '16px',
                    }}
                  >
                    {item.num}
                  </span>
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
                    {item.title}
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
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — PARA QUIÉN ES ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                  maxWidth: '680px',
                }}
              >
                AchieveApex tiene sentido si te identificas con alguno de estos casos.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
              {paraQuienEs.map((item, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <Check size={18} strokeWidth={2} style={{ color: '#F5F5F0', marginTop: '3px', flexShrink: 0 }} />
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: 'rgba(245,245,240,0.7)',
                    }}
                  >
                    {item}
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
                ¿Cuántos leads se pierden ahora mismo por no contestar a tiempo?
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

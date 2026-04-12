'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Target, Users, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

/* ─── FAQ data ─────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: '¿Necesito saber de IA o tecnología para trabajar con vosotros?',
    a: 'No. Nosotros somos los que sabemos de tecnología. Tú solo necesitas saber qué quieres conseguir. Nosotros te decimos qué herramientas tienen sentido y cómo implementarlas.',
  },
  {
    q: '¿Cuánto tiempo tarda una implementación típica?',
    a: 'Depende del alcance. Implementar ClickUp para un equipo de 10: 2-3 semanas. Automatizar un flujo de ventas completo: 3-4 semanas. Conectar Claude con tu stack actual: 1-2 semanas. Todo empieza con la Sesión de Claridad donde definimos el alcance y los plazos.',
  },
  {
    q: '¿Trabajáis solo con empresas de Barcelona?',
    a: 'Trabajamos con empresas de toda España, principalmente en remoto. Si hay formaciones presenciales, las hacemos en Barcelona y área metropolitana.',
  },
  {
    q: '¿Qué pasa si ya tenemos algunas herramientas implementadas?',
    a: 'Perfecto, es el punto de partida más común. Auditamos lo que ya tenéis, identificamos qué se puede optimizar y qué falta, y construimos encima de lo que ya funciona.',
  },
  {
    q: '¿Las herramientas que implementáis son las únicas que conocéis?',
    a: 'Son las que dominamos y con las que garantizamos resultados. Si usas otra herramienta fuera de nuestro stack habitual, cuéntanoslo en la Sesión de Claridad y valoramos si tiene sentido trabajar con ella.',
  },
];

/* ─── Shared styles ─────────────────────────────────────────────────────────── */
const monoLabel = {
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '24px',
};

const btnPrimary: React.CSSProperties = {
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
  borderRadius: '0px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 200ms ease',
};

const btnSecondary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 32px',
  background: 'transparent',
  color: '#F5F5F0',
  fontFamily: 'var(--v5-font-body)',
  fontSize: '15px',
  fontWeight: 400,
  textDecoration: 'none',
  borderRadius: '0px',
  border: '1px solid rgba(255,255,255,0.15)',
  cursor: 'pointer',
  transition: 'border-color 200ms ease',
};

/* ─── Tool card ─────────────────────────────────────────────────────────────── */
interface ToolCardProps {
  logoSrc?: string;
  logoSrc2?: string;
  logoBg?: string;
  logoLabel?: string;
  name: string;
  description: string;
  href?: string;
}

function ToolCard({ logoSrc, logoSrc2, logoBg, logoLabel, name, description, href }: ToolCardProps) {
  const inner = (
    <>
      {/* Logo container — fixed height so all logos align visually */}
      <div style={{ height: '48px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        {logoSrc ? (
          <>
            <img
              src={logoSrc}
              alt={name}
              style={{ height: '36px', width: '36px', objectFit: 'contain', display: 'block' }}
            />
            {logoSrc2 && (
              <>
                <span style={{ color: '#CCCCCC', fontSize: '16px', fontWeight: 300 }}>+</span>
                <img
                  src={logoSrc2}
                  alt={name}
                  style={{ height: '36px', width: '36px', objectFit: 'contain', display: 'block' }}
                />
              </>
            )}
          </>
        ) : (
          <div
            style={{
              minWidth: '60px',
              height: '36px',
              background: logoBg,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              padding: '0 12px',
            }}
          >
            {logoLabel}
          </div>
        )}
      </div>
      <span
        style={{
          fontFamily: 'var(--v5-font-display)',
          fontSize: '16px',
          fontWeight: 500,
          color: '#111111',
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: 'var(--v5-font-body)',
          fontSize: '13px',
          fontWeight: 300,
          color: '#777777',
          lineHeight: 1.6,
        }}
      >
        {description}
      </span>
      {href && (
        <span
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            color: '#999999',
            letterSpacing: '0.05em',
            marginTop: '4px',
          }}
        >
          Ver más →
        </span>
      )}
    </>
  );

  const cardStyle: React.CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: '12px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textDecoration: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
  };

  if (href) {
    return (
      <Link
        href={href}
        style={cardStyle}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = '#111111';
          el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = '#E0E0E0';
          el.style.boxShadow = 'none';
        }}
      >
        {inner}
      </Link>
    );
  }

  return <div style={cardStyle}>{inner}</div>;
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function SystemsLabPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* ── SECCIÓN 1 — HERO ─────────────────────────────────────────────── */}
        <section
          className="v5-section relative min-h-[100svh] flex items-center overflow-hidden" style={{ backgroundColor: '#080808' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/labs/hero-office.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.35,
            }}
          />
          <div className="v5-container relative z-10 pt-20 pb-20 md:pt-0 md:pb-0">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#666666' }}
            >
              SYSTEMS LAB
            </span>

            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(36px, 8vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '820px',
                marginBottom: '28px',
                transitionDelay: '60ms',
              }}
            >
              Las herramientas de IA<br />
              que tu empresa debería<br />
              estar usando. Ya funcionando.
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
                transitionDelay: '120ms',
              }}
            >
              Auditamos cómo trabajas, identificamos dónde se pierde tiempo y lo resolvemos con las herramientas correctas. Sin formación infinita. Sin proyectos de 6 meses. Con resultados desde el primer mes.
            </p>

            <div className="v5-reveal flex flex-col sm:flex-row gap-4" style={{ transitionDelay: '180ms' }}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{ ...btnPrimary, justifyContent: 'center' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Auditoría gratuita →
              </Link>
              <button
                style={{ ...btnSecondary, justifyContent: 'center' }}
                onClick={() => document.getElementById('herramientas')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                Ver herramientas ↓
              </button>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — EL PROBLEMA ──────────────────────────────────────── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#999999' }}
            >
              POR QUÉ AHORA
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#111111',
                maxWidth: '680px',
                marginBottom: '56px',
                transitionDelay: '60ms',
              }}
            >
              Tu empresa ya tiene herramientas. El problema es que no trabajan juntas.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  num: '01',
                  title: 'Todo está desconectado',
                  text: 'CRM por un lado, proyectos por otro, emails por otro. Nadie sabe qué está pasando en tiempo real y siempre falta algo.',
                },
                {
                  num: '02',
                  title: 'Todo depende de una persona',
                  text: 'Si para esa persona, para la empresa. Los procesos están en la cabeza de alguien, no en un sistema. Eso no escala.',
                },
                {
                  num: '03',
                  title: 'La IA no es una app más',
                  text: 'ChatGPT está en el móvil de todos y nadie sabe cómo usarlo de verdad en su trabajo. Se queda en juguete, no en herramienta.',
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className="v5-reveal flex flex-col gap-4"
                  style={{
                    borderLeft: '1px solid #E0E0E0',
                    padding: '32px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      color: '#CCCCCC',
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — CLAUDE DESTACADO ─────────────────────────────────── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#D97706' }}
            >
              &#9733; LA CORONA
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#F5F5F0',
                maxWidth: '700px',
                marginBottom: '24px',
                transitionDelay: '60ms',
              }}
            >
              Claude no es una herramienta más. Es la inteligencia que conecta todas las demás.
            </h2>

            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.55)',
                maxWidth: '640px',
                marginBottom: '48px',
                transitionDelay: '120ms',
              }}
            >
              Copilot gestiona tu Microsoft 365. Gemini gestiona tu Google Workspace. ClickUp organiza tus proyectos. HubSpot gestiona tus leads. Claude los lee todos, razona sobre ellos y actúa. Es el cerebro por encima de todo tu stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  name: 'Claude.ai',
                  desc: 'Chat, análisis y proyectos con memoria permanente',
                },
                {
                  name: 'Claude Cowork',
                  desc: 'Agente de escritorio que trabaja con tus archivos locales',
                },
                {
                  name: 'Claude via MCP',
                  desc: 'Conectado a ClickUp, HubSpot, Gmail, Drive y más de 877 herramientas',
                },
              ].map((card, i) => (
                <div
                  key={card.name}
                  className="v5-reveal flex flex-col gap-3"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '32px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: '#F5F5F0',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {card.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: 'rgba(245,245,240,0.5)',
                      lineHeight: 1.6,
                    }}
                  >
                    {card.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="v5-reveal">
              <Link
                href="/systems-lab/claude"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#F5F5F0',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                Ver cómo implementamos Claude →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — STACK DE HERRAMIENTAS ───────────────────────────── */}
        <section
          id="herramientas"
          className="v5-section"
          style={{ backgroundColor: '#F7F7F5' }}
        >
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#999999' }}
            >
              NUESTRO STACK
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#111111',
                maxWidth: '560px',
                marginBottom: '16px',
                transitionDelay: '60ms',
              }}
            >
              Las herramientas en las que somos expertos.
            </h2>

            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                color: '#777777',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '64px',
                transitionDelay: '80ms',
              }}
            >
              ¿Usas otra herramienta? Trabajamos con cualquier stack. Lo que no cambia es nuestra forma de implementar.
            </p>

            {/* Grupo 1 — Entornos de trabajo */}
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '24px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                Entornos de trabajo
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ToolCard
                  logoSrc="/images/logos/microsoft-365.svg"
                  logoSrc2="/images/logos/copilot.svg"
                  name="Microsoft 365 + Copilot"
                  description="El ecosistema completo de productividad con IA integrada."
                  href="/systems-lab/copilot"
                />
                <ToolCard
                  logoSrc="/images/logos/google-workspace.svg"
                  logoSrc2="/images/logos/gemini.svg"
                  name="Google Workspace + Gemini"
                  description="Gmail, Drive, Calendar y Sheets con IA nativa conectada."
                  href="/systems-lab/google-workspace"
                />
              </div>
            </div>

            {/* Grupo 2 — Operaciones y gestión */}
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '24px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                Operaciones y gestión
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ToolCard
                  logoSrc="/images/logos/clickup.png"
                  name="ClickUp"
                  description="El sistema operativo de tu empresa. Proyectos, SOPs y operaciones ordenadas."
                  href="/systems-lab/clickup"
                />
                <ToolCard
                  logoSrc="/images/logos/notion.png"
                  name="Notion"
                  description="Documentación, bases de conocimiento y wiki interna de la empresa."
                  href="/systems-lab/notion"
                />
                <ToolCard
                  logoSrc="/images/logos/odoo.svg"
                  name="Odoo"
                  description="ERP modular para pymes. Ventas, inventario, contabilidad y más."
                  href="/systems-lab/odoo"
                />
              </div>
            </div>

            {/* Grupo 3 — Marketing y ventas */}
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '24px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                Marketing y ventas
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ToolCard
                  logoSrc="/images/logos/apollo.png"
                  name="Apollo"
                  description="Base de datos de 275M+ contactos. Encuentra a tu cliente ideal."
                  href="/systems-lab/apollo"
                />
                <ToolCard
                  logoSrc="/images/logos/lemlist-logo.webp"
                  name="Lemlist"
                  description="Outreach de email automatizado y personalizado a escala."
                  href="/systems-lab/lemlist"
                />
                <ToolCard
                  logoSrc="/images/logos/hubspot.png"
                  name="HubSpot"
                  description="CRM completo con automatización de marketing y pipeline de ventas."
                  href="/systems-lab/hubspot"
                />
                <ToolCard
                  logoSrc="/images/Achieve Apex Logo.avif"
                  name="AchieveApex"
                  description="CRM omnicanal con IA. WhatsApp, email e Instagram en una bandeja."
                  href="/systems-lab/achieveapex"
                />
                <ToolCard
                  logoSrc="/images/logos/closius.svg"
                  name="Closius"
                  description="IA que analiza tus llamadas de ventas y mejora a tu equipo comercial."
                  href="/systems-lab/closius"
                />
              </div>
            </div>

            {/* Grupo 4 — Automatización */}
            <div className="v5-reveal">
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '24px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                Automatización
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ToolCard
                  logoSrc="/images/logos/n8n.png"
                  name="n8n"
                  description="Flujos de trabajo automatizados. Conecta cualquier herramienta sin código."
                  href="/systems-lab/automatizacion"
                />
                <ToolCard
                  logoSrc="/images/logos/make.svg"
                  name="Make"
                  description="Automatización visual para procesos complejos y multi-herramienta."
                  href="/systems-lab/automatizacion"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── SECCIÓN 5 — POR QUÉ NOSOTROS ────────────────────────────────── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#999999' }}
            >
              POR QUÉ NOSOTROS
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#111111',
                maxWidth: '480px',
                marginBottom: '56px',
                transitionDelay: '60ms',
              }}
            >
              ¿Por qué no hacerlo solo?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  num: '01',
                  icon: <Clock size={20} color="#111111" />,
                  title: 'Ya cometimos los errores',
                  text: 'El 70% de las implementaciones de IA fracasan en los primeros 3 meses por configuración incorrecta. Nosotros ya sabemos qué funciona y qué no. Tú te ahorras ese tiempo y ese dinero.',
                },
                {
                  num: '02',
                  icon: <Target size={20} color="#111111" />,
                  title: 'Solo implementamos lo que tiene ROI',
                  text: 'No te vendemos tecnología por vender. Si algo no tiene sentido para tu negocio concreto, te lo decimos. Empezamos siempre con un diagnóstico, no con una propuesta.',
                },
                {
                  num: '03',
                  icon: <Users size={20} color="#111111" />,
                  title: 'Formamos al equipo de verdad',
                  text: 'Una herramienta que nadie usa no sirve para nada. Cada implementación incluye formación hasta que el equipo la usa de forma autónoma en su trabajo diario.',
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className="v5-reveal flex flex-col gap-5"
                  style={{
                    padding: '40px',
                    borderTop: '2px solid #111111',
                    background: '#F7F7F5',
                    borderRadius: '16px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    {item.icon}
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        color: '#CCCCCC',
                      }}
                    >
                      {item.num}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: '#111111',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 6 — RESULTADOS ───────────────────────────────────────── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#666666' }}
            >
              RESULTADOS REALES
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#F5F5F0',
                maxWidth: '600px',
                marginBottom: '56px',
                transitionDelay: '60ms',
              }}
            >
              Lo que cambia cuando las herramientas trabajan juntas.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  stat: '4h → 15min',
                  label: 'INFORME SEMANAL DE VENTAS · CLAUDE + N8N',
                  text: 'Tiempo en generar el informe semanal de ventas. Claude + n8n. Automático todos los lunes.',
                },
                {
                  stat: '+40',
                  label: 'PROYECTOS SIMULTÁNEOS · CLICKUP + SOPS',
                  text: 'Proyectos gestionados simultáneamente en una agencia tras implementar ClickUp con SOPs documentados.',
                },
                {
                  stat: '×3',
                  label: 'CONTENIDO GENERADO · CLAUDE COWORK',
                  text: 'Más contenido generado por el mismo equipo de marketing después de implementar Claude Cowork con Skills propios.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(44px, 6vw, 72px)',
                      fontWeight: 300,
                      color: '#FFFFFF',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {item.stat}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,245,240,0.4)',
                      marginBottom: '16px',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: 'rgba(245,245,240,0.55)',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 7 — PROCESO ──────────────────────────────────────────── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#666666' }}
            >
              CÓMO TRABAJAMOS
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#F5F5F0',
                maxWidth: '560px',
                marginBottom: '56px',
                transitionDelay: '60ms',
              }}
            >
              De la auditoría a las herramientas funcionando.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  num: '01',
                  title: 'Sesión de Claridad',
                  text: '90 minutos mapeando tu empresa: cómo trabajas, dónde se pierde tiempo, qué procesos son automatizables. Salimos con un plan claro.',
                },
                {
                  num: '02',
                  title: 'Implementación por fases',
                  text: 'Empezamos por lo que más impacto tiene. Cada herramienta se configura, se conecta con las demás y se prueba con datos reales de tu empresa antes de hacer onboarding.',
                },
                {
                  num: '03',
                  title: 'Formación y entrega',
                  text: 'Formamos a tu equipo hasta que usa las herramientas de forma autónoma. Te entregamos la documentación completa. No dependes de nosotros para nada.',
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="v5-reveal flex flex-col gap-6"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Large decorative number */}
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(48px, 8vw, 80px)',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.06)',
                      marginBottom: '8px',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(18px, 2vw, 22px)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#F5F5F0',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: 'rgba(245,245,240,0.45)',
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 8 — FAQ ──────────────────────────────────────────────── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{ ...monoLabel, color: '#999999' }}
            >
              PREGUNTAS FRECUENTES
            </span>

            <h2
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#111111',
                maxWidth: '560px',
                marginBottom: '56px',
                transitionDelay: '60ms',
              }}
            >
              Lo que nos preguntan antes de empezar
            </h2>

            <div className="v5-reveal max-w-3xl" style={{ transitionDelay: '80ms' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid #E0E0E0',
                    padding: '24px 0',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '17px',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        color: '#111111',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp size={18} color="#111111" style={{ flexShrink: 0 }} />
                    ) : (
                      <ChevronDown size={18} color="#111111" style={{ flexShrink: 0 }} />
                    )}
                  </button>

                  {openFaq === i && (
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: '#555555',
                        marginTop: '16px',
                        maxWidth: '680px',
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 9 — CTA FINAL ────────────────────────────────────────── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', textAlign: 'center' }}
        >
          <div className="v5-container">
            <div className="v5-reveal max-w-2xl mx-auto flex flex-col gap-8" style={{ alignItems: 'center' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#F5F5F0',
                }}
              >
                ¿Tu empresa aún trabaja de forma manual?
              </h2>

              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '480px',
                }}
              >
                Empieza con una Sesión de Claridad. 90 minutos para mapear tu empresa y decidir juntos qué tiene sentido automatizar primero.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={btnPrimary}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
                >
                  Auditoría gratuita →
                </Link>
                <Link
                  href="https://wa.me/34627281459"
                  style={btnSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                  Hablar por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

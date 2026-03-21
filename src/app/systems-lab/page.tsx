'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const tools = [
  {
    logoSrc: null,
    logoBg: '#7B68EE',
    logoLabel: 'CU',
    logoSvg: 'clickup',
    name: 'ClickUp',
    description: 'Gestión de proyectos, SOPs y operaciones. Tu empresa ordenada.',
    href: '/systems-lab/clickup',
  },
  {
    logoSrc: null,
    logoBg: '#CF6330',
    logoLabel: 'AI',
    logoSvg: 'claude',
    name: 'Claude',
    description: 'IA conversacional integrada en tus procesos reales.',
    href: '/systems-lab/claude',
  },
  {
    logoSrc: '/images/logos/hubspot.png',
    logoBg: '#FF7A59',
    logoLabel: 'HS',
    logoSvg: null,
    name: 'HubSpot',
    description: 'CRM y automatización de marketing en un solo lugar.',
    href: '/systems-lab/hubspot',
  },
  {
    logoSrc: null,
    logoBg: '#EA4B48',
    logoLabel: 'n8n',
    logoSvg: 'n8n',
    name: 'Automatización',
    description: 'Flujos que trabajan solos. Sin intervención manual.',
    href: '/systems-lab/automatizacion',
  },
  {
    logoSrc: null,
    logoBg: '#3E54F5',
    logoLabel: 'AP',
    logoSvg: null,
    name: 'Apollo',
    description: 'Prospección de ventas e inteligencia comercial.',
    href: '/systems-lab/apollo',
  },
  {
    logoSrc: null,
    logoBg: '#4F46E5',
    logoLabel: 'CL',
    logoSvg: null,
    name: 'Closius',
    description: 'IA que analiza tus llamadas de ventas y mejora tu equipo.',
    href: '/systems-lab/closius',
  },
  {
    logoSrc: '/images/Achieve Apex Logo.avif',
    logoBg: '#111111',
    logoLabel: 'AA',
    logoSvg: null,
    name: 'AchieveApex',
    description: 'CRM omnicanal con IA para captar y nutrir leads.',
    href: '/systems-lab/achieveapex',
  },
  {
    logoSrc: null,
    logoBg: '#0078D4',
    logoLabel: 'Co',
    logoSvg: 'copilot',
    name: 'Microsoft Copilot',
    description: 'IA dentro de Word, Excel, Teams y Outlook.',
    href: '/systems-lab/copilot',
  },
];

const capabilities = [
  'Implementación de herramientas IA en tus flujos de trabajo',
  'Automatización de procesos repetitivos y tareas manuales',
  'CRM, ventas y marketing conectados y funcionando solos',
  'Documentación de procesos y creación de SOPs',
  'Formación del equipo para adoptar las herramientas',
];

const steps = [
  {
    number: '01',
    title: 'Sesión de Claridad',
    description:
      'Mapeamos tu empresa: cómo trabajas, dónde se pierde tiempo, qué procesos son delegables. Salimos con un diagnóstico claro.',
  },
  {
    number: '02',
    title: 'Plan de implementación',
    description:
      'Definimos qué herramientas tienen sentido real para tu negocio y en qué orden implementarlas para ver resultados rápido.',
  },
  {
    number: '03',
    title: 'Implementamos y formamos',
    description:
      'Configuramos las herramientas, creamos los flujos y formamos a tu equipo para que todo funcione sin depender de nosotros.',
  },
];

export default function SystemsLabPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* ── Section 1: Hero ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '100px' }}
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
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              SYSTEMS LAB
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
                transitionDelay: '60ms',
              }}
            >
              Automatiza cómo<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>opera tu empresa.</span>
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
                transitionDelay: '120ms',
              }}
            >
              Implementamos las herramientas de IA y productividad que hacen que tu empresa funcione sin fricciones. Menos tiempo perdido. Más resultados.
            </p>

            <div className="v5-reveal" style={{ transitionDelay: '180ms' }}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  borderRadius: '0px',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                }}
              >
                Hablar con nosotros →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 2: Qué es el Systems Lab ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

              {/* Left column */}
              <div className="v5-reveal flex flex-col gap-6">
                <h2
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(28px, 4vw, 56px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    color: '#111111',
                  }}
                >
                  El lugar donde convertimos<br />
                  <span style={{ color: 'rgba(17,17,17,0.35)' }}>cómo trabajas.</span>
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                  }}
                >
                  La mayoría de empresas trabajan con herramientas que no están conectadas entre sí, procesos que dependen de personas concretas y tareas que se repiten cada día sin que nadie las haya cuestionado.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                  }}
                >
                  En el Systems Lab auditamos cómo funciona tu empresa, identificamos los cuellos de botella y los resolvemos con las herramientas correctas. No implementamos tecnología por implementar: buscamos impacto real en tu operativa.
                </p>
              </div>

              {/* Right column — capabilities list */}
              <div
                className="v5-reveal flex flex-col gap-4"
                style={{ transitionDelay: '80ms' }}
              >
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                    style={{
                      padding: '20px 24px',
                      background: '#F8F8F8',
                      border: '1px solid #EBEBEB',
                      borderRadius: '12px',
                    }}
                  >
                    {/* Checkmark SVG */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <circle cx="9" cy="9" r="9" fill="#111111" />
                      <path
                        d="M5.5 9L7.8 11.5L12.5 6.5"
                        stroke="#FFFFFF"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: '#333333',
                      }}
                    >
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 3: Las herramientas ── */}
        <section className="v5-section" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="v5-container">

            {/* Header */}
            <div className="v5-reveal flex flex-col gap-4 mb-14">
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                Herramientas
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  maxWidth: '560px',
                }}
              >
                Las herramientas<br />
                <span style={{ color: 'rgba(17,17,17,0.35)' }}>que implementamos</span>
              </h2>
            </div>

            {/* Tools grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="v5-reveal flex flex-col gap-4"
                  style={{
                    padding: '32px',
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  {/* Logo */}
                  {tool.logoSrc ? (
                    <img
                      src={tool.logoSrc}
                      alt={tool.name}
                      style={{ height: '36px', width: 'auto', maxWidth: '120px', objectFit: 'contain' }}
                    />
                  ) : tool.logoSvg === 'clickup' ? (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="8" fill="#7B68EE"/>
                      <path d="M9 22.5L13.5 18l4.5 4.5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : tool.logoSvg === 'claude' ? (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="8" fill="#CF6330"/>
                      <text x="18" y="24" textAnchor="middle" fontSize="16" fontWeight="700" fontFamily="serif" fill="white">A</text>
                    </svg>
                  ) : tool.logoSvg === 'n8n' ? (
                    <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="44" height="36" rx="8" fill="#EA4B48"/>
                      <text x="22" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="monospace" fill="white">n8n</text>
                    </svg>
                  ) : tool.logoSvg === 'copilot' ? (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="8" fill="#0078D4"/>
                      <path d="M18 8 C18 8 10 14 10 20 C10 24.4 13.6 28 18 28 C22.4 28 26 24.4 26 20 C26 14 18 8 18 8Z" fill="white" fillOpacity="0.9"/>
                      <circle cx="18" cy="20" r="4" fill="#0078D4"/>
                    </svg>
                  ) : (
                    <div style={{
                      width: '44px',
                      height: '36px',
                      background: tool.logoBg,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                    }}>
                      {tool.logoLabel}
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      lineHeight: 1.2,
                    }}
                  >
                    {tool.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#777777',
                      flexGrow: 1,
                    }}
                  >
                    {tool.description}
                  </p>

                  <Link
                    href={tool.href}
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#111111',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#555555';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#111111';
                    }}
                  >
                    Ver más →
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Section 4: Cómo funciona ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">

            {/* Header */}
            <div className="v5-reveal flex flex-col gap-4 mb-14">
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Proceso
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#F5F5F0',
                  maxWidth: '520px',
                }}
              >
                Cómo lo hacemos<br />
                <span style={{ color: 'rgba(245,245,240,0.28)' }}>paso a paso.</span>
              </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="v5-reveal flex flex-col gap-6 relative"
                  style={{
                    padding: '40px 40px 48px',
                    borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    borderRight: '1px solid rgba(255,255,255,0.08)',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Giant background number */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '24px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '80px',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.04)',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {step.number}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.25)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {step.number}
                  </span>

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
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Section 5: CTA ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', textAlign: 'center' }}
        >
          <div className="v5-container">
            <div
              className="v5-reveal max-w-2xl mx-auto flex flex-col gap-8"
              style={{ alignItems: 'center' }}
            >
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
                ¿Tu empresa aún trabaja<br />
                <span style={{ color: 'rgba(245,245,240,0.28)' }}>de forma manual?</span>
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
                Empieza con una Sesión de Claridad gratuita. Mapeamos tu empresa y decidimos juntos qué tiene sentido automatizar primero.
              </p>

              <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: '#F5F5F0',
                    color: '#080808',
                    borderRadius: '0px',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                  }}
                >
                  Reservar Sesión de Claridad →
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

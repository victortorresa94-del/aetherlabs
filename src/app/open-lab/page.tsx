'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const problemCards = [
  {
    number: '01',
    title: 'El Excel que nadie entiende',
    desc: 'Tu equipo trabaja con hojas de cálculo llenas de fórmulas que solo tú sabes usar. Cuando fallas tú, falla el sistema.',
  },
  {
    number: '02',
    title: 'El software que hace el 70%',
    desc: 'Pagas una licencia cara por un software que tiene cien funciones. Tú usas cinco. Y las cinco que necesitas de verdad, no las tiene.',
  },
  {
    number: '03',
    title: 'El desarrollo que nunca termina',
    desc: 'Contratas una agencia o desarrollador. Seis meses, varias versiones y mucho dinero después, el resultado no es lo que querías.',
  },
];

const serviceCards = [
  {
    label: 'INTERNAL TOOLS',
    title: 'La app que tu equipo necesita para trabajar',
    desc: 'Gestores de tareas a medida, dashboards de control, sistemas de seguimiento, calculadoras de negocio. Construidas exactamente para tu flujo de trabajo, no para el flujo de trabajo de otro.',
    iconPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3',
  },
  {
    label: 'AI CHATBOT',
    title: 'IA dentro de tu software, no encima',
    desc: 'Asistentes inteligentes integrados dentro de tu plataforma o software de gestión. No un widget genérico flotante — un chatbot que conoce tu negocio, tus productos y tus procesos.',
    iconPath: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
  },
  {
    label: 'WEB FUNCIONAL',
    title: 'Una web que hace cosas, no solo informa',
    desc: 'Plataformas con lógica propia: comparadores, configuradores, calculadoras, sistemas de reserva, portales de cliente. Webs que trabajan para tu negocio 24h.',
    iconPath: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  },
  {
    label: 'DASHBOARD',
    title: 'Tus datos, en tiempo real, sin tocar nada',
    desc: 'Paneles de control conectados a tus fuentes de datos. Ver el estado de tu negocio de un vistazo, sin exportar Excels ni preparar informes manuales.',
    iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
  {
    label: 'DOCUMENT AI',
    title: 'IA que lee, extrae y procesa tus documentos',
    desc: 'Sistemas que leen facturas, contratos, DNIs o formularios automáticamente. Extraen los datos que necesitas y los meten donde deben ir. Sin que nadie lo teclee.',
    iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    label: 'AUTOMATION UI',
    title: 'Automatización que cualquier persona puede usar',
    desc: 'Los flujos de n8n y Make son potentes pero técnicos. Construimos la interfaz por encima para que cualquier persona de tu equipo los active con un clic, sin saber nada de código.',
    iconPath: 'M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z',
  },
];

const steps = [
  {
    number: '01',
    title: 'Describimos juntos la herramienta',
    desc: '45 minutos donde defines exactamente qué necesita hacer tu herramienta, quién la va a usar y qué problema resuelve. Salimos con un alcance cerrado y un precio fijo.',
  },
  {
    number: '02',
    title: 'Construimos en sprints cortos',
    desc: 'Primero una versión funcional básica que ya sirve. Luego iteramos hasta que está exactamente como necesitas. Ves el progreso cada día, no al final de meses.',
  },
  {
    number: '03',
    title: 'Te entregamos con formación',
    desc: 'La herramienta es tuya. Te entregamos el código, el acceso completo y una sesión de formación para que tú o tu equipo podáis gestionarla sin depender de nadie.',
  },
];

const stats = [
  {
    number: 'Días',
    label: 'No meses. Una herramienta funcional en 3-10 días.',
  },
  {
    number: '-80%',
    label: 'Menos coste vs desarrollo tradicional.',
  },
  {
    number: '100% tuyo',
    label: 'Código, acceso y control total.',
  },
];

export default function OpenLab() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ─────────────────────────────────────────────
            Section 1 — HERO
        ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '100px' }}>
          <div className="v5-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">

              {/* Left col */}
              <div>
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
                    color: '#F97316',
                  }}
                >
                  OPEN LAB
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
                    maxWidth: '680px',
                    marginBottom: '32px',
                    transitionDelay: '80ms',
                  }}
                >
                  Tu herramienta.<br />
                  Construida en días.
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
                  Antes hacerlo requería un equipo de desarrollo, 6 meses y decenas de miles de euros. Ahora lo construimos en días. Para ti. Exactamente como lo necesitas.
                </p>

                <div
                  className="v5-reveal"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    transitionDelay: '240ms',
                  }}
                >
                  <Link
                    href="#que-construimos"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '14px 28px',
                      background: '#F97316',
                      color: '#FFFFFF',
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      textDecoration: 'none',
                      borderRadius: '0px',
                      transition: 'background 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#ea6c0e';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#F97316';
                    }}
                  >
                    Ver qué podemos construir →
                  </Link>
                  <Link
                    href="/systems-lab/sesion-de-claridad"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '14px 28px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.70)',
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      textDecoration: 'none',
                      borderRadius: '0px',
                      background: 'transparent',
                      transition: 'border-color 200ms ease, color 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.90)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.70)';
                    }}
                  >
                    Hablar del proyecto →
                  </Link>
                </div>
              </div>

              {/* Right col — hero image card (hidden on mobile) */}
              <div
                className="v5-reveal hidden lg:block"
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transitionDelay: '120ms',
                }}
              >
                <Image
                  src="/crystal-sculpture.jpeg"
                  alt="Crystal sculpture representing custom software"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Section 2 — EL PROBLEMA
        ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F8F8F8', paddingTop: '120px', paddingBottom: '120px' }}>
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
                El problema
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  maxWidth: '720px',
                }}
              >
                Las herramientas genéricas no encajan<br />
                <span style={{ color: 'rgba(17,17,17,0.35)' }}>con tu forma de trabajar.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
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
                      marginBottom: '20px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.10em',
                      color: '#CCCCCC',
                    }}
                  >
                    {card.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: '#111111',
                      marginBottom: '16px',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: '#666666',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Section 3 — QUÉ CONSTRUIMOS
        ───────────────────────────────────────────── */}
        <section id="que-construimos" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
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
                Qué construimos
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  maxWidth: '720px',
                }}
              >
                Si lo puedes describir,<br />
                <span style={{ color: '#999999' }}>lo podemos construir.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((card, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={card.iconPath} />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#999999',
                    }}
                  >
                    {card.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                      color: '#111111',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: '#666666',
                      flexGrow: 1,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Section 4 — PROYECTOS REALES
        ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
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
                  color: 'rgba(255,255,255,0.32)',
                }}
              >
                Proyectos reales
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#F5F5F0',
                }}
              >
                Lo que ya hemos construido
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Case 1 */}
              <div
                className="v5-reveal"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      background: '#F97316',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: '#FFFFFF',
                      borderRadius: '4px',
                    }}
                  >
                    Open Lab
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.32)',
                    }}
                  >
                    E-COMMERCE · DISTRIBUCIÓN
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '22px',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    color: '#F5F5F0',
                    maxWidth: '680px',
                  }}
                >
                  Cuatro herramientas a medida para una plataforma de distribución
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(245,245,240,0.55)',
                    maxWidth: '680px',
                  }}
                >
                  Chatbot de soporte integrado en la plataforma, reconocimiento automático de DNI para verificación de edad, páginas de producto generadas con IA, y automatizaciones de gestión administrativa.
                </p>
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.32)',
                  }}
                >
                  4 soluciones · 1 plataforma · integradas
                </div>
              </div>

              {/* Case 2 */}
              <div
                className="v5-reveal"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transitionDelay: '80ms',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      background: '#F97316',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: '#FFFFFF',
                      borderRadius: '4px',
                    }}
                  >
                    Open Lab
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.32)',
                    }}
                  >
                    PRODUCTIVIDAD INTERNA
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '22px',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    color: '#F5F5F0',
                    maxWidth: '680px',
                  }}
                >
                  De Excel a app propia en un día
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(245,245,240,0.55)',
                    maxWidth: '680px',
                  }}
                >
                  Construida con Claude Code en horas. Seguimiento de ingresos, gastos, categorías y métricas. Funcionalidad exactamente adaptada al flujo real de uso.
                </p>
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.32)',
                  }}
                >
                  App funcional · 1 día de desarrollo
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Section 5 — CÓMO FUNCIONA
        ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F8F8F8', paddingTop: '120px', paddingBottom: '120px' }}>
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
                Cómo funciona
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                De la idea a la herramienta funcionando.
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                border: '1px solid rgba(17,17,17,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    padding: '40px 40px 48px',
                    borderRight: i < steps.length - 1 ? '1px solid rgba(17,17,17,0.08)' : 'none',
                    background: '#FFFFFF',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '24px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.10em',
                      color: '#CCCCCC',
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                      color: '#111111',
                      marginBottom: '16px',
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
                      color: '#666666',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Section 6 — POR QUÉ AHORA
        ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '0' }}>
          <div className="v5-container">

            <div
              className="v5-reveal"
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                textAlign: 'center',
                marginBottom: '56px',
              }}
            >
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
                Por qué ahora
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#111111',
                  marginBottom: '32px',
                }}
              >
                Claude Code cambió las reglas.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: '#666666',
                  maxWidth: '640px',
                  margin: '0 auto',
                  whiteSpace: 'pre-line',
                }}
              >
                {`Durante años, tener software a medida era un privilegio de las empresas grandes. Requería equipos de desarrollo, presupuestos de decenas de miles de euros y meses de espera.\n\nClaude Code cambia eso completamente. Podemos construir herramientas funcionales en días que antes tardaban semanas. Podemos iterar en horas lo que antes tardaba semanas. Podemos entregarlas a un precio que antes era imposible.\n\nNo es magia. Es que las herramientas cambiaron. Y nosotros las dominamos.`}
              </p>
            </div>

          </div>

          {/* Stats row — full width border grid */}
          <div
            style={{
              marginTop: '72px',
              borderTop: '1px solid rgba(17,17,17,0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  padding: '40px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(17,17,17,0.08)' : 'none',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: '#111111',
                    marginBottom: '12px',
                  }}
                >
                  {stat.number}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#666666',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Section 7 — CTA FINAL
        ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '720px',
                margin: '0 auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Tienes una idea en la cabeza<br />
                que aún nadie ha construido?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '520px',
                }}
              >
                Cuéntanos qué necesitas. En 24h te decimos si podemos hacerlo, cuánto tardaría y qué costaría.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    background: '#F97316',
                    color: '#FFFFFF',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    textDecoration: 'none',
                    borderRadius: '0px',
                    transition: 'background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#ea6c0e';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F97316';
                  }}
                >
                  Cuéntanos el proyecto →
                </Link>
                <Link
                  href="/casos"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    border: '1px solid rgba(255,255,255,0.20)',
                    color: 'rgba(245,245,240,0.60)',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    textDecoration: 'none',
                    borderRadius: '0px',
                    background: 'transparent',
                    transition: 'border-color 200ms ease, color 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.40)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.90)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.20)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.60)';
                  }}
                >
                  Ver todos los casos →
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

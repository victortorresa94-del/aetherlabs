'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Settings, Play, Users } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const comparativa = [
  { cap: 'Memoria de empresa permanente', claude: 'Proyectos', gpt: '✗' },
  { cap: 'Conexión a herramientas (MCP)', claude: '877+', gpt: 'Limitado' },
  { cap: 'Agente de escritorio', claude: 'Claude Cowork', gpt: 'No' },
  { cap: 'Contexto de documentos', claude: '1M tokens', gpt: '128K tokens' },
  { cap: 'Add-in Excel/PowerPoint', claude: 'Sí', gpt: 'No' },
];

const implementaciones = [
  {
    title: 'Claude.ai con memoria de empresa',
    badge: null,
    desc: 'Configuramos un Proyecto de Claude con toda la información de tu empresa: productos, servicios, tono de comunicación, procesos internos, preguntas frecuentes. Cualquier persona del equipo tiene un asistente que ya lo sabe todo.',
    items: [
      'Setup del Proyecto con instrucción maestra de empresa',
      'Carga de documentos base: dossier, catálogo, propuesta tipo, FAQ',
      'Configuración de permisos para el equipo',
      '5 Skills preconfiguradas para casos de uso frecuentes',
      'Formación del equipo (2 horas)',
    ],
  },
  {
    title: 'Claude Cowork — el agente en tu escritorio',
    badge: 'Mac + Windows',
    desc: 'Claude Cowork vive en el ordenador. Lee carpetas locales, trabaja con archivos, abre aplicaciones y completa tareas de varios pasos sin supervisión. Un asistente que trabaja, no solo que responde.',
    items: [
      'Generación automática de propuestas desde briefing',
      'Reporting semanal sin intervención manual',
      'Preparación de reuniones (lee emails + CRM + archivos)',
      'Onboarding automático de clientes nuevos',
    ],
  },
  {
    title: 'Claude conectado a tu stack completo (MCP)',
    badge: null,
    desc: 'MCP permite a Claude conectarse con las herramientas que ya usas. Claude puede leer y escribir en ClickUp, gestionar HubSpot, procesar emails de Gmail, crear documentos en Drive. Todo desde una sola conversación.',
    items: [
      'ClickUp — crear tareas, actualizar estados, reportes',
      'HubSpot — gestionar contactos, deals, emails',
      'Google Drive — leer, buscar y crear documentos',
      'Gmail — leer hilos, redactar respuestas',
      'Notion — crear y actualizar páginas',
    ],
  },
];

const casos = [
  {
    stat: '4h → 2min',
    title: 'Reporting automático',
    desc: 'Empresa B2B: 4 horas cada lunes preparando el informe. Claude lee HubSpot, genera el informe y lo envía. Sin que nadie lo toque.',
  },
  {
    stat: '3h → 20min',
    title: 'Propuestas comerciales',
    desc: 'Agencia de marketing: briefing. Claude lee propuestas anteriores y genera propuesta en Word con formato correcto.',
  },
  {
    stat: '-80%',
    title: 'Soporte interno',
    desc: 'Empresa de 30 personas: Claude cargado con el manual interno responde preguntas sobre procesos. El management no recibe las mismas preguntas repetidamente.',
  },
  {
    stat: '30min → 3min',
    title: 'Preparación de reuniones',
    desc: '"Tengo una reunión con [cliente] mañana". Claude lee emails, CRM y archivos. Briefing listo en 3 minutos.',
  },
];

const paraQuien = [
  'Tu equipo pierde tiempo respondiendo las mismas preguntas cada semana',
  'Cada informe o propuesta empieza desde cero aunque ya existan anteriores',
  'Las herramientas que usas no están conectadas entre sí',
  'El conocimiento de tu empresa está en la cabeza de personas, no en sistemas',
  'Quieres que la IA haga trabajo real, no solo que responda preguntas genéricas',
];

const queIncluye = [
  {
    icon: Settings,
    title: 'Setup y configuración',
    desc: 'Proyecto + MCP + Skills + Prompts',
  },
  {
    icon: Play,
    title: 'Implementación real',
    desc: 'Flujos + Integraciones + Cowork + Prueba con datos reales',
  },
  {
    icon: Users,
    title: 'Formación y entrega',
    desc: 'Sesión 2-3h + Documentación + Librería prompts + 30 días soporte',
  },
];

const faqs = [
  {
    q: '¿Necesito una cuenta de Claude de pago?',
    a: 'Para implementaciones de empresa recomendamos Claude Pro o Team. El plan Team permite proyectos compartidos entre el equipo. El coste de la suscripción va aparte de nuestros honorarios de implementación.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Una implementación estándar (Proyecto + Skills + MCP básico) tarda entre 1 y 2 semanas desde la Sesión de Claridad. Las implementaciones con Claude Cowork o integraciones más complejas pueden extenderse a 3-4 semanas.',
  },
  {
    q: '¿El equipo necesita formación técnica?',
    a: 'No. Claude está diseñado para usarse en lenguaje natural. La formación que incluimos enseña al equipo a sacar partido real de las configuraciones específicas que hemos creado para vuestro caso.',
  },
  {
    q: '¿Qué pasa si ya usamos ChatGPT?',
    a: 'Muchas empresas vienen de ChatGPT. La diferencia principal está en los Proyectos con memoria de empresa, la integración con herramientas vía MCP y Claude Cowork. En la Sesión de Claridad valoramos si el cambio tiene sentido para vuestro caso concreto.',
  },
  {
    q: '¿Podemos conectar Claude con nuestro software a medida?',
    a: 'Sí. Si vuestro software tiene API, podemos crear un conector MCP personalizado. Lo valoramos caso por caso en la Sesión de Claridad.',
  },
];

export default function ClaudePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToCasos = () => {
    const el = document.getElementById('casos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
                color: '#D97706',
              }}
            >
              ★ LA CORONA
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
              {'Claude no es solo un chat.\nEs el cerebro de tu empresa.'}
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
              Claude lee tus documentos, se conecta a tus herramientas, recuerda el contexto de tu empresa y completa tareas de varios pasos sin que tengas que explicarle nada cada vez. Lo implementamos, lo configuramos y lo ponemos a trabajar en tu stack actual.
            </p>
            <div className="v5-reveal flex gap-4 flex-wrap" style={{ transitionDelay: '240ms' }}>
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
                Implementar Claude en mi empresa →
              </Link>
              <button
                onClick={scrollToCasos}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: 'transparent',
                  color: 'rgba(245,245,240,0.6)',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  border: '1px solid rgba(245,245,240,0.2)',
                  cursor: 'pointer',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.5)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.9)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.2)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.6)';
                }}
              >
                Ver casos de uso ↓
              </button>
            </div>
          </div>
        </section>

        {/* POR QUÉ CLAUDE */}
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
                POR QUÉ CLAUDE
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                  maxWidth: '640px',
                  marginBottom: '24px',
                }}
              >
                ChatGPT es un chat. Claude es un sistema.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#555555',
                  maxWidth: '680px',
                }}
              >
                La diferencia no está en quién responde mejor las preguntas genéricas. Está en quién puede trabajar con el contexto real de tu empresa: tus documentos internos, tus herramientas, tus procesos. Claude tiene memoria en proyectos, puede conectarse a más de 877 herramientas vía MCP, y con Claude Cowork trabaja directamente en tu ordenador. GPT no hace eso.
              </p>
            </div>

            {/* Tabla comparativa */}
            <div className="v5-reveal" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--v5-font-body)' }}>
                <thead>
                  <tr style={{ backgroundColor: '#111111' }}>
                    <th style={{ padding: '16px 24px', textAlign: 'left', color: '#F5F5F0', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Capacidad</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center', color: '#F5F5F0', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Claude</th>
                    <th style={{ padding: '16px 24px', textAlign: 'center', color: 'rgba(245,245,240,0.5)', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map((row, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: '1px solid #E0E0E0', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F7F7F5' }}
                    >
                      <td style={{ padding: '16px 24px', fontSize: '15px', fontWeight: 300, color: '#333333', lineHeight: 1.5 }}>{row.cap}</td>
                      <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#111111', fontFamily: 'var(--v5-font-mono)' }}>{row.claude}</td>
                      <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 300, color: '#999999', fontFamily: 'var(--v5-font-mono)' }}>{row.gpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Tres versiones de Claude para tres necesidades distintas.
              </h2>
            </div>
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', display: 'grid' }}>
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
                  <div className="flex items-center gap-3" style={{ marginBottom: '16px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '20px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                      }}
                    >
                      {impl.title}
                    </h3>
                    {impl.badge && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          background: '#F0F0F0',
                          borderRadius: '4px',
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          color: '#555555',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {impl.badge}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                      marginBottom: '24px',
                    }}
                  >
                    {impl.desc}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {impl.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={16} style={{ color: '#111111', flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: '#444444' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section id="casos" className="v5-section" style={{ backgroundColor: '#080808' }}>
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
                CASOS DE USO REALES
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
                Lo que Claude hace en empresas como la tuya cada semana.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {casos.map((caso, i) => (
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
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#F5F5F0',
                      marginBottom: '12px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {caso.stat}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: '#F5F5F0',
                      marginBottom: '12px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {caso.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: 'rgba(245,245,240,0.5)',
                    }}
                  >
                    {caso.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '48px' }}>
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
                PARA QUIÉN
              </span>
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
                Claude tiene sentido si al menos una de estas frases te describe.
              </h2>
            </div>
            <ul
              className="v5-reveal"
              style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}
            >
              {paraQuien.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check size={18} style={{ color: '#111111', flexShrink: 0, marginTop: '2px' }} />
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '17px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#333333',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
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
                No instalamos Claude. Lo ponemos a trabajar.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {queIncluye.map((item, i) => {
                const Icon = item.icon;
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
                    <Icon size={24} style={{ color: '#111111', marginBottom: '20px' }} />
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '18px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                        marginBottom: '10px',
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
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                    background: '#FFFFFF',
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
                ¿Listo para tener un Claude que conoce tu empresa?
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

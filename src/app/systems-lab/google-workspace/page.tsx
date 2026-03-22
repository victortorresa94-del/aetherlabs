'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const apps = [
  {
    app: 'GMAIL',
    items: [
      'Genera borradores de respuesta leyendo el hilo completo',
      'Resume conversaciones largas en puntos clave',
      'Adapta el tono según el destinatario y el contexto',
      'Clasifica y prioriza la bandeja de entrada automáticamente',
    ],
  },
  {
    app: 'DOCS',
    items: [
      'Genera documentos completos desde un prompt o esquema',
      'Reescribe y mejora textos existentes con instrucciones en lenguaje natural',
      'Resume documentos largos en segundos',
      'Propone siguientes pasos basándose en el contenido del documento',
    ],
  },
  {
    app: 'SHEETS',
    items: [
      'Analiza datos y genera insights sin fórmulas complejas',
      'Crea tablas y gráficos desde una descripción en texto',
      'Detecta anomalías y tendencias en los datos automáticamente',
      'Genera reportes narrativos a partir de datos estructurados',
    ],
  },
  {
    app: 'MEET',
    items: [
      'Transcribe reuniones automáticamente',
      'Genera resumen y action items al finalizar cada call',
      'Toma notas en tiempo real sin intervención manual',
    ],
  },
  {
    app: 'DRIVE + NOTEBOOKLM',
    items: [
      'Busca información a través de todos tus documentos almacenados',
      'NotebookLM convierte colecciones de documentos en bases de conocimiento consultables',
      'Responde preguntas sobre el contenido de tus archivos en lenguaje natural',
      'Conecta información de múltiples fuentes en una sola respuesta',
    ],
  },
];

const bloques = [
  {
    title: 'Activación y configuración',
    desc: 'Activamos Gemini en todo el workspace, configuramos los permisos por usuario y rol, y establecemos las políticas de uso de datos. También configuramos NotebookLM como base de conocimiento de empresa con los documentos clave.',
    items: [
      'Activación de Gemini en Gmail, Docs, Sheets, Meet y Drive',
      'Configuración de permisos por departamento',
      'Setup de NotebookLM con documentos de empresa',
      'Formación inicial del equipo (sesión de 2 horas)',
    ],
  },
  {
    title: 'Automatizaciones con Apps Script + n8n',
    desc: 'Google Workspace tiene Apps Script nativo para automatizar tareas dentro del ecosistema. Lo combinamos con n8n para conectar con herramientas externas. El resultado: flujos que trabajan solos sin intervención manual.',
    items: [
      'Reporting automático desde Sheets a Gmail cada semana',
      'Onboarding de clientes: Drive + Docs + Gmail en un flujo',
      'Sincronización bidireccional con ClickUp o HubSpot',
      'Alertas automáticas basadas en cambios en Sheets',
    ],
  },
  {
    title: 'Conexión con Claude MCP',
    desc: 'Claude puede leer y escribir en Google Drive, buscar en Gmail y crear documentos en Docs vía MCP. Lo que Gemini no puede hacer solo, lo hace Claude. Los dos sistemas trabajando juntos dan más que cualquiera por separado.',
    items: [
      'Claude lee Drive y responde preguntas sobre documentos',
      'Claude busca en Gmail y redacta respuestas en lenguaje natural',
      'Claude crea y actualiza documentos en Docs automáticamente',
      'Flujos combinados Gemini + Claude para casos de uso complejos',
    ],
  },
];

const casos = [
  {
    antes: 'Reunión terminada. Alguien tiene que escribir el resumen y enviarlo al equipo.',
    despues: 'Meet transcribe la reunión. Gemini genera el resumen y los action items. Apps Script lo envía automáticamente a todos los asistentes.',
    stat: '45min → 0min',
    label: 'Post-reunión manual',
  },
  {
    antes: 'Cada viernes, alguien dedica 1 hora a preparar el informe de métricas en Sheets y enviarlo por email.',
    despues: 'n8n lee Sheets cada viernes, Gemini genera el análisis ejecutivo, Apps Script lo envía formateado a dirección. Sin que nadie toque nada.',
    stat: '1h → automático',
    label: 'Reporting semanal',
  },
  {
    antes: 'Nuevo cliente firmado. Hay que crear carpeta en Drive, preparar documentos base y enviar email de bienvenida. 45 minutos de trabajo manual.',
    despues: 'Cliente firma → n8n detecta el evento → crea estructura de carpetas en Drive → genera documentos desde plantilla → Claude envía el email de bienvenida personalizado. Todo en 2 minutos.',
    stat: '45min → 2min',
    label: 'Onboarding de cliente',
  },
];

const faqs = [
  {
    q: '¿Necesitamos un plan de Google Workspace específico para tener Gemini?',
    a: 'Gemini está disponible en los planes Business Standard, Business Plus y Enterprise de Google Workspace. En los planes Starter no está incluido. En la Sesión de Claridad verificamos qué plan tenéis y qué funcionalidades están disponibles.',
  },
  {
    q: '¿Es seguro que Gemini acceda a nuestros emails y documentos?',
    a: 'Sí. Gemini respeta los permisos existentes de Google Workspace y no usa vuestros datos para entrenar sus modelos. Google tiene certificaciones de seguridad empresarial (ISO 27001, SOC 2, etc.) y los datos permanecen dentro de vuestra instancia del workspace.',
  },
  {
    q: '¿Qué diferencia hay entre usar Gemini y usar Claude con MCP en Google Workspace?',
    a: 'Gemini está integrado dentro de las apps (edita directamente en Docs, responde en Gmail). Claude con MCP puede leer y escribir en Drive y Gmail desde una conversación externa, y combinarlo con otras herramientas como ClickUp o HubSpot. Son complementarios: Gemini para tareas dentro de las apps, Claude para flujos cross-herramienta.',
  },
];

export default function GoogleWorkspacePage() {
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
              SYSTEMS LAB · GOOGLE WORKSPACE
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
              {'Usas Gmail y Drive cada día.\nGemini ya está dentro.\n¿Lo estás usando?'}
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
              Gemini está integrado en todo Google Workspace. En Gmail, en Docs, en Sheets, en Meet. La mayoría de empresas que lo tienen no saben qué puede hacer. Nosotros lo ponemos a trabajar.
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
                Activar Gemini en mi Workspace →
              </Link>
            </div>
          </div>
        </section>

        {/* QUÉ PUEDE HACER GEMINI */}
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
                QUÉ PUEDE HACER GEMINI
              </span>
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
                Gemini no es un chatbot extra. Es IA dentro de las apps que ya usas.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {apps.map((app, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#F7F7F5',
                    border: '1px solid #E0E0E0',
                    borderRadius: '16px',
                    padding: '32px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '18px',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        background: '#111111',
                        borderRadius: '50%',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#111111',
                      }}
                    >
                      {app.app}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {app.items.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '14px',
                          fontWeight: 300,
                          lineHeight: 1.6,
                          color: '#555555',
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
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
                De activar Gemini a tener flujos que trabajan solos.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {bloques.map((bloque, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    alignItems: 'start',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '22px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                        marginBottom: '14px',
                      }}
                    >
                      {bloque.title}
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
                      {bloque.desc}
                    </p>
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {bloque.items.map((item, j) => (
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
                Google Workspace con IA en el día a día.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
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
                      marginBottom: '4px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {caso.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#999999',
                      marginBottom: '20px',
                    }}
                  >
                    {caso.label}
                  </div>
                  <div style={{ marginBottom: '14px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        color: 'rgba(245,245,240,0.3)',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      ANTES
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: 'rgba(245,245,240,0.4)',
                        margin: 0,
                      }}
                    >
                      {caso.antes}
                    </p>
                  </div>
                  <div
                    style={{
                      width: '24px',
                      height: '1px',
                      background: 'rgba(245,245,240,0.15)',
                      marginBottom: '14px',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        color: 'rgba(245,245,240,0.6)',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      DESPUÉS
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: 'rgba(245,245,240,0.75)',
                        margin: 0,
                      }}
                    >
                      {caso.despues}
                    </p>
                  </div>
                </div>
              ))}
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
                ¿Listo para sacar partido real a Google Workspace?
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
                Empieza con una Sesión de Claridad. 90 minutos para definir exactamente qué activamos y cómo lo conectamos con el resto de tu stack.
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

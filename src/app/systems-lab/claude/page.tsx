'use client';

import { useState } from 'react';
import Link from 'next/link';
import SystemsLabLayout from '@/components/v5/SystemsLabLayout';

const AMBER = '#D97706';

const modes = [
  {
    key: 'claudeai',
    name: 'Claude.ai',
    badge: 'DESDE 0€/MES',
    description: 'Chat, análisis, redacción, código, artefactos, proyectos con memoria.',
    features: [
      'Chat con documentos PDF y archivos',
      'Proyectos con instrucciones personalizadas',
      'Artefactos (webs, apps, gráficos interactivos)',
      'Análisis de datos y hojas de cálculo',
      'Conexiones a Gmail, Drive, Calendar, ClickUp',
    ],
  },
  {
    key: 'cowork',
    name: 'Claude Cowork',
    badge: 'REQUIERE PRO 20€/MES',
    description: 'Agente de escritorio. Lee y edita archivos locales. Ejecuta tareas de varios pasos. MCP para conectar cualquier herramienta.',
    features: [
      'Acceso a archivos locales (Mac y Windows)',
      'Sub-agentes coordinados para tareas complejas',
      'Skills reutilizables que ejecutas con un clic',
      '+877 herramientas vía MCP',
      'Genera informes, propuestas y contenido automáticamente',
    ],
  },
  {
    key: 'code',
    name: 'Claude Code',
    badge: 'PARA EQUIPOS TÉCNICOS',
    description: 'Asistente de código en terminal. Escribe, revisa, refactoriza. Coordina equipos de agentes para proyectos grandes.',
    features: [
      'En terminal, entiende todo el codebase',
      'MCP para leer docs en Drive y actualizar Jira',
      'Agent Teams para proyectos grandes',
      'Multiplica la velocidad de desarrollo',
      'Sin aumentar el equipo',
    ],
  },
];

const mcpIntegrations = [
  'Google Drive', 'Gmail', 'Calendar', 'ClickUp', 'Notion', 'Slack',
  'HubSpot', 'Salesforce', 'Apollo', 'DocuSign', 'WordPress', 'Figma',
  'Teams', 'Asana', 'Linear', 'Jira', 'Excel', 'PowerPoint',
];

const skills = [
  {
    title: 'Informe de ventas semanal',
    description: 'Lee datos de ventas + genera PDF + lo envía cada lunes a las 9h automáticamente.',
  },
  {
    title: 'Onboarding de cliente',
    description: 'Lead entra → crea proyecto en ClickUp + carpeta en Drive + email de bienvenida.',
  },
  {
    title: 'Propuesta comercial',
    description: 'Rellena tu plantilla con los datos del cliente en 2 minutos.',
  },
];

const steps = [
  { n: '01', title: 'Sesión de Claridad', desc: 'Mapeamos tus procesos. Decidimos qué conectamos y en qué orden.' },
  { n: '02', title: 'Setup de Claude', desc: 'Configuramos el plan correcto. Conectamos las herramientas prioritarias. Creamos los primeros Skills.' },
  { n: '03', title: 'Formación del equipo', desc: 'Media jornada de formación práctica. El equipo sale sabiendo usar Claude en su día a día.' },
  { n: '04', title: 'Mantenimiento y optimización', desc: 'Revisamos mensualmente. Añadimos nuevas integraciones. Creamos nuevos Skills.' },
];

const faqs = [
  {
    q: '¿En qué se diferencia Claude de ChatGPT?',
    a: 'Claude tiene contexto más largo (1 millón de tokens), mejor razonamiento en tareas complejas, y Claude Cowork para automatizar trabajo con archivos locales. Para empresas, la diferencia principal es Cowork: ninguna herramienta de OpenAI hace lo mismo hoy.',
  },
  {
    q: '¿Necesito saber programar para usar Claude Cowork?',
    a: 'No. Claude Cowork está diseñado para personas no técnicas. Si sabes usar un ordenador, sabes usar Cowork.',
  },
  {
    q: '¿Cuánto cuesta Claude?',
    a: 'Claude Free es gratuito. Claude Pro cuesta 20€/mes. Claude Max 100€/mes (acceso completo a Cowork). Para equipos, Claude Team es 25€/usuario/mes.',
  },
  {
    q: '¿Mis datos son privados?',
    a: 'En planes Team y Enterprise, los datos no se usan para entrenar modelos. Claude Enterprise tiene HIPAA, SOC 2 y cumplimiento de GDPR.',
  },
];

export default function ClaudePage() {
  const [activeMode, setActiveMode] = useState('claudeai');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentMode = modes.find(m => m.key === activeMode)!;

  return (
    <SystemsLabLayout accentColor={AMBER}>
      {/* Hero */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <span className="v5-label v5-reveal" style={{ display: 'block', marginBottom: '20px', color: '#999999' }}>
            Claude — Anthropic
          </span>
          <h1 className="v5-h1 v5-reveal" style={{ maxWidth: '640px', marginBottom: '20px' }}>
            El cerebro que conecta<br />
            <span style={{ color: 'rgba(245,245,240,0.38)' }}>
              toda tu empresa
            </span>
          </h1>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '540px', marginBottom: '32px' }}>
            Claude no es un chatbot. Es un agente que lee tus documentos,
            actúa en tus herramientas y completa trabajo real por ti.
          </p>
          <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '16px' }}>
              Ver Claude Cowork →
            </Link>
            <a href="mailto:hola@aetherlabs.es" className="v5-btn-ghost" style={{ fontSize: '16px' }}>
              Hablar con Víctor
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem diagram (CSS/SVG) */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>
            El ecosistema Claude en 2026
          </h2>
          <p className="v5-body-large v5-reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            Claude se conecta con todo lo que ya usas
          </p>

          {/* Diagram */}
          <div className="v5-reveal" style={{
            position: 'relative',
            maxWidth: '700px',
            margin: '0 auto',
            height: '360px',
          }}>
            {/* Center */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${AMBER}30, ${AMBER}10)`,
              border: `2px solid ${AMBER}60`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--v5-font-display)',
              fontWeight: 800,
              fontSize: '22px',
              color: AMBER,
              zIndex: 10,
              boxShadow: `0 0 40px ${AMBER}20`,
            }}>
              Claude
            </div>

            {/* Orbit nodes */}
            {[
              { label: 'Claude.ai', angle: -90, r: 140 },
              { label: 'Cowork', angle: -30, r: 140 },
              { label: 'Claude Code', angle: 30, r: 140 },
              { label: 'Excel / PPT', angle: 90, r: 140 },
              { label: 'Gmail / Drive', angle: 150, r: 140 },
              { label: 'ClickUp / Notion', angle: 210, r: 140 },
              { label: 'HubSpot / CRM', angle: 270, r: 140 },
            ].map(({ label, angle, r }) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + (r / 3.5) * Math.cos(rad);
              const y = 50 + (r / 3.5) * Math.sin(rad);
              return (
                <div
                  key={label}
                  style={{
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                    padding: '6px 14px',
                    borderRadius: '100px',
                    border: `1px solid rgba(215,119,6,0.3)`,
                    backgroundColor: 'rgba(215,119,6,0.08)',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    color: AMBER,
                    whiteSpace: 'nowrap',
                    zIndex: 5,
                  }}
                >
                  {label}
                </div>
              );
            })}

            {/* Orbit circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              border: `1px dashed rgba(215,119,6,0.2)`,
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </section>

      {/* Three modes (tabs) */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Los tres modos de Claude</h2>

          {/* Tabs */}
          <div className="v5-reveal" style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {modes.map((mode) => (
              <button
                key={mode.key}
                onClick={() => setActiveMode(mode.key)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: `1px solid ${activeMode === mode.key ? AMBER : 'var(--v5-border)'}`,
                  backgroundColor: activeMode === mode.key ? `${AMBER}20` : 'transparent',
                  color: activeMode === mode.key ? AMBER : 'var(--v5-text-secondary)',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--v5-transition)',
                }}
              >
                {mode.name}
              </button>
            ))}
          </div>

          {/* Mode content */}
          <div style={{
            backgroundColor: 'var(--v5-bg-surface)',
            border: `1px solid ${AMBER}30`,
            borderRadius: 'var(--v5-radius-lg)',
            padding: '40px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <h3 style={{
                fontFamily: 'var(--v5-font-display)',
                fontWeight: 700,
                fontSize: '26px',
                color: 'var(--v5-text-primary)',
                letterSpacing: '-0.02em',
              }}>
                {currentMode.name}
              </h3>
              <span style={{
                padding: '4px 14px',
                borderRadius: '100px',
                border: `1px solid ${AMBER}40`,
                backgroundColor: `${AMBER}15`,
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: AMBER,
                textTransform: 'uppercase',
              }}>
                {currentMode.badge}
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '16px',
              color: 'var(--v5-text-secondary)',
              lineHeight: 1.65,
              marginBottom: '28px',
            }}>
              {currentMode.description}
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
              {currentMode.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MCP Integrations */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Claude conecta con todo lo que ya usas
          </h2>
          <p className="v5-body-large v5-reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Vía MCP (Model Context Protocol)
          </p>
          <div className="v5-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '24px' }}>
            {mcpIntegrations.map((tool) => (
              <span
                key={tool}
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  border: '1px solid var(--v5-border)',
                  backgroundColor: 'var(--v5-bg-base)',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '13px',
                  color: 'var(--v5-text-secondary)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="v5-reveal" style={{ textAlign: 'center', fontFamily: 'var(--v5-font-mono)', fontSize: '12px', color: 'var(--v5-text-muted)', letterSpacing: '0.05em' }}>
            +877 herramientas disponibles vía conectores de terceros
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '12px' }}>Skills personalizados</h2>
          <p className="v5-body-large v5-reveal" style={{ marginBottom: '40px', maxWidth: '500px' }}>
            Flujos de trabajo guardados que ejecutas con un clic. Los creamos para tu empresa.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
            className="v5-skills-grid"
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  backgroundColor: 'var(--v5-bg-surface)',
                  border: `1px solid ${AMBER}25`,
                  borderRadius: 'var(--v5-radius-lg)',
                  padding: '28px',
                }}
              >
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: 'var(--v5-radius-sm)',
                  backgroundColor: `${AMBER}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: AMBER,
                }}>
                  0{i + 1}
                </div>
                <h3 style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 600,
                  fontSize: '17px',
                  color: 'var(--v5-text-primary)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}>
                  {skill.title}
                </h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we implement */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '48px' }}>Cómo lo implementamos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
            className="v5-impl-grid"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  backgroundColor: 'var(--v5-bg-base)',
                  border: '1px solid var(--v5-border)',
                  borderRadius: 'var(--v5-radius-lg)',
                  padding: '28px',
                }}
              >
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: AMBER,
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}>
                  PASO {step.n}
                </span>
                <h3 style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--v5-text-primary)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', color: 'var(--v5-text-secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
        <div className="v5-container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '40px' }}>Preguntas frecuentes</h2>
          <div style={{ borderTop: '1px solid var(--v5-border)' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="v5-faq-item v5-reveal">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: openFaq === i ? AMBER : 'var(--v5-text-primary)',
                    textAlign: 'left',
                    transition: 'color var(--v5-transition)',
                  }}
                >
                  {faq.q}
                  <svg
                    width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0, marginLeft: '16px' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`v5-faq-answer ${openFaq === i ? 'v5-open' : ''}`}>
                  <p style={{ paddingBottom: '24px', fontFamily: 'var(--v5-font-body)', fontSize: '15px', color: 'var(--v5-text-secondary)', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="v5-section" style={{ backgroundColor: 'var(--v5-bg-surface)', textAlign: 'center' }}>
        <div className="v5-container">
          <h2 className="v5-h2 v5-reveal" style={{ marginBottom: '16px' }}>
            Implementar Claude con Aether
          </h2>
          <p className="v5-body-large v5-reveal" style={{ maxWidth: '440px', margin: '0 auto 32px' }}>
            Empieza con una Sesión de Claridad de 90 minutos.
          </p>
          <div className="v5-reveal">
            <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px' }}>
              Implementar Claude con Aether →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .v5-skills-grid { grid-template-columns: 1fr !important; }
          .v5-impl-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .v5-impl-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SystemsLabLayout>
  );
}

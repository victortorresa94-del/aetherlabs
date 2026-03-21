import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Cuánto cuesta implementar Claude en una empresa | Aether Labs',
  description: 'Desglose completo de costes de implementar Claude en una empresa: licencias, formación, integración y ROI. Sin letra pequeña. Guía para directivos.',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#666666',
  marginBottom: '32px',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--v5-font-display)',
  fontSize: 'clamp(28px, 3.5vw, 44px)',
  fontWeight: 300,
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  color: '#111111',
  marginBottom: '24px',
  marginTop: 0,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--v5-font-body)',
  fontSize: '17px',
  fontWeight: 300,
  lineHeight: 1.8,
  color: '#444444',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '24px',
  marginBottom: '8px',
};

const thStyle: React.CSSProperties = {
  background: '#F7F7F5',
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#666666',
  padding: '12px 16px',
  textAlign: 'left',
  border: '1px solid #E0E0E0',
};

const tdStyle: React.CSSProperties = {
  fontFamily: 'var(--v5-font-body)',
  fontSize: '15px',
  fontWeight: 300,
  color: '#333333',
  padding: '12px 16px',
  border: '1px solid #E0E0E0',
  lineHeight: 1.5,
};

const tdHighlightStyle: React.CSSProperties = {
  ...tdStyle,
  background: '#F7F7F5',
};

const noteStyle: React.CSSProperties = {
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '12px',
  lineHeight: 1.6,
  color: '#999999',
  marginTop: '12px',
  marginBottom: 0,
};

const relatedLinkStyle: React.CSSProperties = {
  display: 'block',
  padding: '20px 24px',
  background: '#FFFFFF',
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
  textDecoration: 'none',
};

export default function CuantoCuestaClaudePage() {
  return (
    <div className="v5-page">
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="v5-container">

            {/* Breadcrumb */}
            <div style={{ marginBottom: '48px' }}>
              <Link
                href="/blog"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  textDecoration: 'none',
                }}
              >
                Learn
              </Link>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333', margin: '0 8px' }}>→</span>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#444444',
                }}
              >
                Pricing
              </span>
            </div>

            <div style={{ maxWidth: '760px' }}>
              <span style={labelStyle}>AETHER LEARN · PRICING</span>
              <h1
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(40px, 5.5vw, 72px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '32px',
                  marginTop: 0,
                }}
              >
                Cuánto cuesta implementar Claude en tu empresa. Sin letra pequeña.
              </h1>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '19px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#888888',
                  maxWidth: '620px',
                }}
              >
                Esta es la pregunta que más nos hacen los directivos. Y es la que menos responden bien los artículos de internet. Aquí va la respuesta real, con números concretos.
              </p>
              <div style={{ display: 'flex', gap: '32px', marginTop: '48px', flexWrap: 'wrap' }}>
                {[
                  ['4 bloques', 'de coste desglosados'],
                  ['ROI calculado', 'con ejemplo real'],
                  ['5 min', 'de lectura'],
                ].map(([value, label]) => (
                  <div key={value}>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '22px', fontWeight: 500, color: '#FFFFFF', display: 'block' }}>{value}</span>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: '#555555', display: 'block', marginTop: '4px' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LICENCIAS ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>El coste de las licencias de Claude</h2>
            <p style={bodyStyle}>
              Las licencias de Claude las cobra directamente Anthropic. Aquí están los tres planes actuales, para qué sirve cada uno y cuándo tiene sentido cada opción para una empresa.
            </p>

            <div style={{ overflowX: 'auto', marginTop: '32px' }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Plan</th>
                    <th style={thStyle}>Precio</th>
                    <th style={thStyle}>Para quién</th>
                    <th style={thStyle}>Lo que incluye</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}><strong style={{ fontWeight: 600 }}>Claude Pro</strong></td>
                    <td style={tdStyle}>20 $/usuario/mes</td>
                    <td style={tdStyle}>1–5 usuarios independientes</td>
                    <td style={tdStyle}>Acceso web, prioridad en horas punta, modelos avanzados, Projects básicos</td>
                  </tr>
                  <tr>
                    <td style={tdHighlightStyle}><strong style={{ fontWeight: 600 }}>Claude Team</strong></td>
                    <td style={tdHighlightStyle}>25 $/usuario/mes <span style={{ fontSize: '13px', color: '#999999' }}>(mín. 5)</span></td>
                    <td style={tdHighlightStyle}>Equipos de 5–50 personas</td>
                    <td style={tdHighlightStyle}>Todo lo de Pro + proyectos compartidos, contexto ampliado (200k tokens), panel de administración, sin uso de datos para entrenar</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}><strong style={{ fontWeight: 600 }}>Claude Enterprise</strong></td>
                    <td style={tdStyle}>Precio a medida</td>
                    <td style={tdStyle}>+50 usuarios o requisitos específicos</td>
                    <td style={tdStyle}>SSO, datos en tu infraestructura, SLA garantizado, integración con sistemas internos, soporte dedicado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={noteStyle}>
              * Precios en dólares de Anthropic. Pueden cambiar. Verifica los precios actualizados en anthropic.com antes de tomar decisiones presupuestarias.
            </p>

            <div style={{ background: '#F7F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #E0E0E0', marginTop: '32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 600, color: '#111111', marginBottom: '12px', marginTop: 0 }}>La pregunta que el 80% de empresas no se hace antes de elegir plan</p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#555555', margin: 0 }}>
                ¿Cuántos usuarios lo van a usar de verdad? La mayoría de empresas que contratan 20 licencias Team usan 5 con regularidad. Empieza con el número real que usará la herramienta, no con el número que te gustaría que la usara. Escala cuando la adopción lo justifique.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORMACIÓN ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>El coste de la formación</h2>
            <p style={bodyStyle}>
              Este es el coste que más empresas subestiman o directamente omiten del cálculo. Y es el que más impacta en el ROI real.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Sin formación, la mayoría de equipos usan el 20% del potencial de Claude. Hacen las mismas cosas que harían con Google, pero con una interfaz distinta. El resultado es decepcionante y refuerza el escepticismo interno.
            </p>

            <div style={{ overflowX: 'auto', marginTop: '32px' }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Modalidad</th>
                    <th style={thStyle}>Duración</th>
                    <th style={thStyle}>Precio orientativo</th>
                    <th style={thStyle}>Ideal para</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}><strong style={{ fontWeight: 600 }}>Taller de Descubrimiento</strong></td>
                    <td style={tdStyle}>2–3h</td>
                    <td style={tdStyle}>Desde 400 €</td>
                    <td style={tdStyle}>Empresas que quieren empezar sin compromiso. Primera toma de contacto con casos reales.</td>
                  </tr>
                  <tr>
                    <td style={tdHighlightStyle}><strong style={{ fontWeight: 600 }}>Programa Intensivo</strong></td>
                    <td style={tdHighlightStyle}>5 sesiones (2–3h c/u)</td>
                    <td style={tdHighlightStyle}>Desde 1.200 €</td>
                    <td style={tdHighlightStyle}>Equipos que quieren adopción real. Incluye materiales, ejercicios con sus procesos y seguimiento.</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}><strong style={{ fontWeight: 600 }}>Formación Continua</strong></td>
                    <td style={tdStyle}>Mensual (sesión + soporte)</td>
                    <td style={tdStyle}>Desde 300 €/mes</td>
                    <td style={tdStyle}>Equipos que ya están usando Claude y quieren mantener el ritmo de adopción de nuevas funcionalidades.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={noteStyle}>
              * Precios de Aether Labs orientativos. La propuesta final depende del número de participantes, el sector y el nivel de personalización requerido.
            </p>

            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '28px 32px', border: '1px solid #E0E0E0', marginTop: '32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999', marginBottom: '12px', marginTop: 0 }}>Qué incluye nuestra formación</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Contenido adaptado a vuestros procesos reales, no a ejemplos genéricos',
                  'Materiales de trabajo que el equipo puede usar desde el día siguiente',
                  'Prompts construidos para vuestros casos de uso específicos',
                  'Seguimiento post-formación para resolver dudas de implementación',
                  'Evaluación del nivel de adopción a las 4 semanas',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', color: '#111111', flexShrink: 0, paddingTop: '2px' }}>→</span>
                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#444444', margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INTEGRACIÓN TÉCNICA ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>El coste de la integración técnica (si la necesitáis)</h2>
            <p style={bodyStyle}>
              No todas las empresas necesitan integración técnica. Muchos equipos obtienen un ROI excelente usando Claude simplemente a través del navegador. Pero si queréis integrar Claude en vuestros flujos de trabajo existentes, esto es lo que cuesta.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                {
                  type: 'Claude vía web (sin integración)',
                  cost: '0 € adicional',
                  desc: 'Accedes a claude.ai desde el navegador. Sin desarrollo. Sin configuración. La forma más rápida de empezar.',
                  highlight: false,
                },
                {
                  type: 'Claude vía API en vuestras herramientas',
                  cost: 'Depende del desarrollo',
                  desc: 'Si queréis que Claude forme parte de vuestro CRM, ERP o herramienta interna, necesitáis desarrollo. El coste depende de la complejidad: desde 1.500€ para integraciones simples hasta proyectos de varios meses.',
                  highlight: false,
                },
                {
                  type: 'n8n + Claude para automatizaciones',
                  cost: '~500–2.000 € setup inicial',
                  desc: 'n8n es la herramienta de automatización que usamos para conectar Claude con otras apps sin código complejo. Ideal para automatizar flujos como criba de CVs, clasificación de emails o generación de informes.',
                  highlight: true,
                },
                {
                  type: 'Chatbot integrado en vuestra web o app',
                  cost: 'Desde 1.500 €',
                  desc: 'Un chatbot personalizado entrenado con vuestro contenido y con una personalidad de marca definida. El precio varía según el número de páginas de conocimiento, el volumen de conversaciones y el nivel de personalización.',
                  highlight: false,
                },
              ].map(item => (
                <div
                  key={item.type}
                  style={{
                    background: item.highlight ? '#111111' : '#F7F7F5',
                    borderRadius: '12px',
                    padding: '24px',
                    border: item.highlight ? 'none' : '1px solid #E0E0E0',
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: item.highlight ? '#FFFFFF' : '#111111', marginBottom: '8px', marginTop: 0 }}>{item.type}</p>
                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: item.highlight ? '#888888' : '#555555', margin: 0 }}>{item.desc}</p>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: item.highlight ? '#FFFFFF' : '#111111', display: 'block' }}>{item.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>El ROI real — cómo calcularlo para tu empresa</h2>
            <p style={bodyStyle}>
              Muchas empresas calculan el ROI de la IA midiendo las horas recuperadas. Es un buen punto de partida, pero el ROI real también incluye la reducción de errores, la mejora en calidad de output y la velocidad de respuesta al mercado.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px', marginBottom: '32px' }}>
              Empecemos por lo más fácil de medir: las horas.
            </p>

            <div style={{ background: '#111111', borderRadius: '16px', padding: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555555', marginBottom: '24px', marginTop: 0 }}>Ejemplo real: equipo de 5 personas</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Personas en el equipo', value: '5 personas' },
                  { label: 'Coste hora medio', value: '25 €/hora' },
                  { label: 'Horas recuperadas por persona/día', value: '1 hora' },
                  { label: 'Días laborables al mes', value: '22 días' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222222', paddingBottom: '12px' }}>
                    <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#888888' }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '15px', fontWeight: 500, color: '#FFFFFF' }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '32px', borderTop: '1px solid #333333', paddingTop: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Ahorro mensual bruto', value: '2.750 €/mes', sub: '5 × 1h × 22 días × 25€', positive: true },
                    { label: 'Coste Claude Team (5 usuarios)', value: '−115 €/mes', sub: '5 × 25$ ≈ 115€/mes', positive: false },
                    { label: 'Coste formación (amortizado 12 meses)', value: '−100 €/mes', sub: '1.200€ / 12 meses', positive: false },
                  ].map(row => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, color: '#888888', display: 'block' }}>{row.label}</span>
                        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', color: '#555555' }}>{row.sub}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '16px', fontWeight: 600, color: row.positive ? '#FFFFFF' : '#666666' }}>{row.value}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid #333333', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#FFFFFF', display: 'block' }}>ROI mensual neto</span>
                      <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', color: '#555555' }}>2.750€ − 215€</span>
                    </div>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '32px', fontWeight: 300, color: '#FFFFFF' }}>2.535 €</span>
                  </div>
                  <div style={{ background: '#1A1A1A', borderRadius: '8px', padding: '20px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#FFFFFF' }}>ROI primer año</span>
                    <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '36px', fontWeight: 300, color: '#FFFFFF' }}>~30.000 €</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '28px', border: '1px solid #E0E0E0' }}>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '16px', marginTop: 0 }}>La fórmula para calcular el tuyo</p>
              <div style={{ background: '#F7F7F5', borderRadius: '8px', padding: '20px', fontFamily: 'var(--v5-font-mono)', fontSize: '14px', lineHeight: 1.8, color: '#333333' }}>
                <span style={{ color: '#111111', fontWeight: 600 }}>ROI mensual</span> = (Personas × Horas/día × Días/mes × Coste hora) − (Claude + Formación amortizada)<br /><br />
                <span style={{ color: '#999999' }}>// Empieza conservador: 30 min/día por persona es fácil de conseguir en el primer mes</span>
              </div>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: '#777777', marginTop: '16px', marginBottom: 0 }}>
                Lo que el cálculo no mide: reducción de errores en documentos, mejora en calidad de propuestas, tiempo de respuesta más rápido con clientes, y el efecto compuesto de que tu equipo siga aprendiendo mientras la competencia no.
              </p>
            </div>
          </div>
        </section>

        {/* ── EL COSTE DE NO IMPLEMENTARLO ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>El coste más alto de todos: no implementarlo</h2>
            <p style={bodyStyle}>
              La mayoría de artículos sobre el coste de Claude no incluyen esta sección. Nosotros sí, porque es la que más importa a los directivos que están calculando si "merece la pena".
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Mientras vosotros seguís evaluando, vuestros competidores están formando a sus equipos. Esa no es una afirmación de marketing: los datos de adopción empresarial de herramientas de IA en Europa muestran un crecimiento del 340% en 2024-2025. Las empresas que adoptan primero construyen ventajas que no son fáciles de replicar.
            </p>

            <div style={{ background: '#F7F7F5', borderRadius: '12px', padding: '32px', border: '1px solid #E0E0E0', marginTop: '32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999', marginBottom: '16px', marginTop: 0 }}>Perspectiva</p>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '22px', fontWeight: 300, lineHeight: 1.4, color: '#111111', marginBottom: '16px', marginTop: 0 }}>
                El WEF estima que el 39% de las habilidades laborales actuales serán obsoletas antes de 2030.
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#555555', margin: 0 }}>
                El coste de la formación en IA es fijo y predecible. El coste de no formarla es compuesto y difícil de recuperar: equipos que trabajan más despacio, propuestas menos competitivas, clientes que se van a empresas más ágiles.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '32px' }}>
              {[
                { title: 'Hoy', desc: 'La brecha entre quien usa IA y quien no es pequeña. Fácil de cerrar.' },
                { title: 'En 6 meses', desc: 'Los equipos formados han construido flujos de trabajo difíciles de replicar.' },
                { title: 'En 2 años', desc: 'La ventaja competitiva es estructural. La formación reactiva ya no alcanza.' },
              ].map(item => (
                <div key={item.title} style={{ background: '#F7F7F5', borderRadius: '8px', padding: '20px', border: '1px solid #E0E0E0' }}>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', fontWeight: 600, color: '#111111', marginBottom: '8px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: '#555555', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR DÓNDE EMPEZAR ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>¿Por dónde empezar si el presupuesto es ajustado?</h2>
            <p style={bodyStyle}>
              No hace falta un despliegue masivo para empezar a ver resultados. Hay tres formas de empezar con bajo riesgo y alta probabilidad de que el piloto se convierta en adopción real.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                {
                  option: 'Opción 1',
                  title: '1 licencia Claude Pro + Taller de Descubrimiento',
                  cost: '~620 € en total',
                  desc: 'Un usuario piloto que aprende a fondo + un taller para mostrar el potencial al resto del equipo. Si el piloto convierte, la adopción es mucho más fácil porque hay alguien interno que sabe usarlo.',
                  steps: [
                    '20$/mes Claude Pro ≈ 18€/mes',
                    '400€ Taller de Descubrimiento (2-3h, todo el equipo)',
                    'Total mes 1: ~418€',
                  ],
                },
                {
                  option: 'Opción 2',
                  title: 'Empieza por el departamento con más trabajo textual',
                  cost: 'Coste mínimo, máximo impacto',
                  desc: 'Identifica qué departamento procesa más texto en tu empresa (habitualmente RRHH, marketing, operaciones o atención al cliente). Implementa ahí primero. El ROI se ve rápido y justifica la expansión al resto de la empresa.',
                  steps: [
                    'Mapa de 30 minutos: ¿qué departamento produce más texto?',
                    'Piloto de 3 semanas con 2-3 personas de ese departamento',
                    'Medir horas ahorradas antes de extender',
                  ],
                },
                {
                  option: 'Opción 3',
                  title: 'Pilot de 3 personas → mide el ROI → escala',
                  cost: 'El enfoque más conservador',
                  desc: 'Elige 3 personas de perfiles distintos (un manager, un técnico, alguien de atención al cliente). Dales Claude Team durante 1 mes con formación básica. Al final del mes, mide las horas ahorradas. Los números harán el resto de la presentación a dirección.',
                  steps: [
                    'Mes 1: 3 usuarios Team = 75$/mes ≈ 70€ + formación básica',
                    'Al final del mes: encuesta de tiempo ahorrado',
                    'Si el resultado es positivo: presenta el ROI y escala',
                  ],
                },
              ].map(item => (
                <div key={item.option} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '32px', border: '1px solid #E0E0E0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999', display: 'block', marginBottom: '6px' }}>{item.option}</span>
                      <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '20px', fontWeight: 500, color: '#111111', margin: 0 }}>{item.title}</p>
                    </div>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 600, color: '#111111', background: '#F7F7F5', padding: '6px 12px', borderRadius: '6px', border: '1px solid #E0E0E0', flexShrink: 0 }}>{item.cost}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '16px', marginTop: 0 }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.steps.map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', color: '#AAAAAA', flexShrink: 0, paddingTop: '2px' }}>{i + 1}.</span>
                        <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#555555', margin: 0, lineHeight: 1.6 }}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARTÍCULOS RELACIONADOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <span style={{ ...labelStyle, color: '#999999' }}>SEGUIR LEYENDO</span>
            <h2 style={{ ...h2Style, fontSize: 'clamp(22px, 2.5vw, 30px)' }}>Artículos relacionados</h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  href: '/blog/prompts-claude-marketing',
                  label: 'Prompts',
                  title: '30 prompts de Claude para equipos de marketing',
                  desc: 'Briefs, copy, análisis de campañas y contenido para redes. Listos para copiar y usar.',
                },
                {
                  href: '/blog/claude-recursos-humanos',
                  label: 'Recursos Humanos',
                  title: 'Claude para Recursos Humanos: la guía que necesitabas',
                  desc: 'Criba de CVs, onboarding, clima laboral y comunicación interna. Con ejemplos reales.',
                },
                {
                  href: '/blog/casos-uso-claude-empresa',
                  label: 'Casos de uso',
                  title: '15 casos de uso reales de Claude en empresas',
                  desc: 'Marketing, RRHH, finanzas, ventas y operaciones. Documentados con antes y después.',
                },
              ].map(art => (
                <Link key={art.href} href={art.href} style={relatedLinkStyle}>
                  <div className="flex items-center gap-3" style={{ marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999' }}>{art.label}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '17px', fontWeight: 500, color: '#111111', marginBottom: '6px', marginTop: 0 }}>{art.title}</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#777777', margin: 0 }}>{art.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container flex flex-col items-center text-center">
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#555555',
                marginBottom: '24px',
              }}
            >
              Siguiente paso
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '20px',
                maxWidth: '600px',
                marginTop: 0,
              }}
            >
              Solicita una propuesta a medida para tu empresa.
            </h2>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#888888',
                marginBottom: '40px',
                maxWidth: '480px',
              }}
            >
              Te enviamos un desglose de coste personalizado basado en el tamaño de tu equipo, los departamentos que quieres cubrir y el nivel de integración que necesitáis. Sin compromisos.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                href="/school-lab/formacion-claude-empresas"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  background: '#FFFFFF',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '8px',
                }}
              >
                Solicitar propuesta a medida →
              </Link>
              <Link
                href="/school-lab/prepara-tu-equipo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  background: 'transparent',
                  color: '#888888',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '1px solid #333333',
                }}
              >
                Ver opciones de formación
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

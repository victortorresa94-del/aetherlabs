import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'AI Act agosto 2026: checklist para empresas españolas antes del 2 de agosto | Aether Labs',
  description: 'El 2 de agosto de 2026 entra en vigor el EU AI Act. Multas de hasta 35M€. Checklist práctico de 5 puntos para empresas españolas que usan IA.',
};

const bodyText: React.CSSProperties = {
  fontFamily: 'var(--v5-font-body)',
  fontSize: '17px',
  fontWeight: 300,
  lineHeight: 1.8,
  color: '#333333',
  marginBottom: '28px',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--v5-font-display)',
  fontSize: 'clamp(22px, 3vw, 30px)',
  fontWeight: 400,
  letterSpacing: '-0.02em',
  lineHeight: 1.2,
  color: '#111111',
  marginBottom: '20px',
  marginTop: '56px',
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--v5-font-display)',
  fontSize: '19px',
  fontWeight: 500,
  color: '#111111',
  marginBottom: '12px',
  marginTop: '32px',
};

const liStyle: React.CSSProperties = {
  fontFamily: 'var(--v5-font-body)',
  fontSize: '16px',
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#333333',
  paddingLeft: '20px',
  paddingBottom: '10px',
  borderLeft: '2px solid #DDDDDD',
  marginLeft: '4px',
  marginBottom: '8px',
};

export default function ArticlePage() {
  return (
    <div className="v5-page">
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#666666' }}>
                Regulación IA
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                9 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              AI Act agosto 2026: lo que tu empresa española tiene que tener listo antes del 2 de agosto
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              Quedan 101 días. El EU AI Act entra en plena aplicación el 2 de agosto de 2026. Multas de hasta 35 millones de euros. Aquí está lo que tienes que hacer — en lenguaje de empresa, no de abogado.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: '1px solid #1A1A1A' }}>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#555555' }}>Abril 2026</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#555555' }}>Víctor Torres, Aether Labs</span>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <section style={{ backgroundColor: '#F7F7F5', padding: '80px 0' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>

            {/* Urgencia */}
            <div style={{ background: '#111111', borderRadius: '8px', padding: '24px 28px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                Fecha límite
              </p>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '22px', fontWeight: 400, color: '#FFFFFF', margin: 0 }}>
                2 de agosto de 2026 — 101 días
              </p>
            </div>

            <p style={bodyText}>
              El EU AI Act es el reglamento europeo de inteligencia artificial. Lo aprobó la UE en 2024 y lleva aplicándose de forma gradual. El 2 de agosto de 2026 es la fecha en que entra en vigor para la mayoría de sistemas de IA que usan las empresas — incluyendo muchos de los que probablemente ya tienes en marcha.
            </p>
            <p style={bodyText}>
              En España, el organismo supervisor es la AESIA (Agencia Española de Supervisión de IA), creada específicamente para fiscalizar el cumplimiento. Ha publicado guías, ha iniciado consultas públicas y empezará a investigar incumplimientos activamente a partir de agosto. No es un plazo teórico.
            </p>

            <h2 style={h2Style}>Lo primero: ¿te afecta a ti?</h2>
            <p style={bodyText}>
              La respuesta corta es: si usas cualquier sistema de IA que interactúa con personas, toma decisiones sobre personas o procesa datos para generar recomendaciones, probablemente sí te afecta en algún grado.
            </p>
            <p style={bodyText}>
              El AI Act clasifica los sistemas de IA en niveles de riesgo. La mayoría de las empresas españolas no opera en el nivel de "riesgo alto" (sistemas de IA en infraestructura crítica, educación o empleo), pero casi todas las que tienen chatbots, sistemas de recomendación, análisis automatizado de candidatos o cualquier IA que "decide" algo sobre una persona caen en alguna categoría con obligaciones.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
              {[
                {
                  nivel: 'Riesgo inaceptable',
                  desc: 'Prohibidos directamente. Sistemas de scoring social, manipulación subliminal, reconocimiento de emociones en espacios públicos. Si los tienes, hay que eliminarlos.',
                  color: '#FEF2F2',
                  border: '#FECACA',
                },
                {
                  nivel: 'Riesgo alto',
                  desc: 'Requieren documentación exhaustiva, supervisión humana obligatoria y registro en base de datos europea. Incluye sistemas en RRHH (criba de candidatos), scoring crediticio, IA en educación.',
                  color: '#FFFBEB',
                  border: '#FDE68A',
                },
                {
                  nivel: 'Riesgo limitado',
                  desc: 'Obligaciones de transparencia. Si tienes un chatbot que puede confundirse con una persona real, tienes que informar explícitamente al usuario de que es IA. Esto afecta a la gran mayoría de empresas.',
                  color: '#F0F9FF',
                  border: '#BAE6FD',
                },
                {
                  nivel: 'Riesgo mínimo',
                  desc: 'Sin obligaciones específicas. Filtros de spam, juegos con IA, recomendadores básicos de contenido. La mayoría de herramientas de productividad caen aquí.',
                  color: '#F0FDF4',
                  border: '#BBF7D0',
                },
              ].map((item) => (
                <div key={item.nivel} style={{ background: item.color, border: `1px solid ${item.border}`, borderRadius: '8px', padding: '18px 22px' }}>
                  <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '15px', fontWeight: 600, color: '#111111', marginBottom: '6px' }}>{item.nivel}</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#555555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={h2Style}>El checklist de 5 puntos: qué tienes que tener listo</h2>
            <p style={bodyText}>
              Este checklist no reemplaza el asesoramiento legal — si tienes sistemas de riesgo alto, necesitas un abogado especialista. Lo que sí hace es darte un mapa de las acciones técnicas y organizativas que la mayoría de empresas tienen que completar antes del 2 de agosto.
            </p>

            {[
              {
                num: '01',
                title: 'Inventaria todos los sistemas de IA que usas',
                body: 'El primer paso es saber qué tienes. No solo los que has construido tú — también los que has comprado o contratado como servicio. Un chatbot de soporte, un sistema de scoring de leads, Claude o ChatGPT integrado en algún proceso, cualquier automatización que tome decisiones sobre datos de personas. Haz una lista. Sin eso no puedes clasificar el riesgo ni demostrar que has hecho el ejercicio.',
              },
              {
                num: '02',
                title: 'Clasifica el nivel de riesgo de cada sistema',
                body: 'Con la lista en mano, clasifica cada sistema según los niveles del AI Act. La pregunta clave es: ¿este sistema toma decisiones que afectan a personas (empleados, clientes, candidatos) de forma significativa? Si la respuesta es sí y el impacto puede ser relevante (empleo, crédito, educación, salud), estás en riesgo alto. Si simplemente informa o automatiza sin decidir sobre personas, probablemente en riesgo limitado o mínimo.',
              },
              {
                num: '03',
                title: 'Documenta cómo funcionan tus sistemas de IA',
                body: 'Para cualquier sistema de riesgo alto o limitado, necesitas documentación técnica: qué datos usa, cómo toma decisiones, qué hace cuando no sabe, cómo se puede corregir. No tiene que ser un documento de 200 páginas — tiene que ser suficiente para que un auditor externo entienda el sistema sin hablar contigo. Si tu sistema de IA lo construyó alguien externo o es un SaaS, pide al proveedor su documentación de compliance con el AI Act. Tienen obligación de proporcionarla.',
              },
              {
                num: '04',
                title: 'Implementa supervisión humana en decisiones de impacto',
                body: 'Para sistemas de riesgo alto, el AI Act exige que haya un humano que pueda revisar, corregir o anular la decisión del sistema de IA. Esto no significa que un humano tenga que aprobar cada decisión — significa que el proceso tiene que tener un mecanismo de revisión y que ese mecanismo esté documentado y sea real. Si tienes un sistema que automáticamente descarta candidatos, o que bloquea cuentas de clientes, o que genera recomendaciones de inversión, necesitas un proceso de escalado humano claro.',
              },
              {
                num: '05',
                title: 'Añade avisos de transparencia donde corresponde',
                body: 'Si tienes chatbots, asistentes de voz o cualquier sistema que pueda confundirse con una persona real, tienes que informar explícitamente al usuario de que está interactuando con IA. No en letra pequeña al final de los términos y condiciones — en el punto de interacción. "Estás hablando con un asistente de IA" es suficiente. Este es el requisito más fácil de cumplir y el que más empresas tienen sin resolver porque nadie se lo ha señalado.',
              },
            ].map((item) => (
              <div key={item.num} style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 600, color: '#111111', flexShrink: 0, paddingTop: '3px' }}>{item.num}</span>
                  <div>
                    <h3 style={{ ...h3Style, marginTop: 0 }}>{item.title}</h3>
                    <p style={{ ...bodyText, marginBottom: 0 }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <h2 style={h2Style}>Qué pasa si no cumples</h2>
            <p style={bodyText}>
              Las multas del AI Act tienen dos niveles principales. Para infracciones de las obligaciones de sistemas de riesgo alto (documentación, supervisión humana, transparencia): hasta 15 millones de euros o el 3% de la facturación global anual, lo que sea mayor. Para usos prohibidos directamente: hasta 35 millones o el 7% de facturación.
            </p>
            <p style={bodyText}>
              Para una pyme española, esas cifras pueden sonar abstractas. Lo que es concreto: si la AESIA recibe una denuncia o inicia una inspección y encuentran que usas sistemas de IA de riesgo limitado sin avisos de transparencia, o que tienes un proceso automatizado de RRHH sin supervisión humana documentada, pueden iniciar un expediente sancionador. El proceso tiene plazos, pero la multa puede ser real.
            </p>
            <p style={bodyText}>
              Más importante que la multa es el riesgo reputacional. Ser señalado como empresa que usa IA "sin control" tiene un coste de imagen en 2026 que va más allá del económico.
            </p>

            <h2 style={h2Style}>La parte que nadie dice: el AI Act también es una oportunidad</h2>
            <p style={bodyText}>
              Cumplir con el AI Act obliga a hacer un ejercicio que muchas empresas tienen pendiente: documentar qué IA tienen, cómo funciona y quién es responsable. Ese ejercicio, hecho bien, revela también qué sistemas están funcionando y cuáles no, dónde la IA está añadiendo valor real y dónde está generando ruido.
            </p>
            <p style={bodyText}>
              Las empresas que hacen este trabajo ahora — no a última hora en agosto — salen con un inventario de IA limpio, documentación que les protege legalmente, y una visión mucho más clara de qué implementar a continuación. No es solo un ejercicio de compliance. Es un diagnóstico de madurez de IA que vale la pena tener.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                ¿No sabes si tus sistemas de IA cumplen con el AI Act?
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                En Aether hacemos el inventario y la clasificación de riesgo de tus sistemas de IA. Saldrás sabiendo exactamente qué tienes, qué riesgo tiene y qué tienes que hacer antes del 2 de agosto.
              </p>
              <Link href="/asesoramos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}>
                Ver servicio de diagnóstico →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#080808', padding: '80px 0' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#555555', marginBottom: '24px' }}>
              Diagnóstico de IA para empresas
            </span>
            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '24px' }}>
              101 días para estar listos.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Hacemos el inventario de tus sistemas de IA, los clasificamos por riesgo y te entregamos el plan de acción. En dos semanas tienes el diagnóstico completo.
            </p>
            <Link href="/asesoramos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#FFFFFF', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
              Pide tu diagnóstico →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Claude Opus 4.7 para empresas: para qué sirve y si merece el cambio | Aether Labs',
  description: 'Claude Opus 4.7 acaba de salir. Analizamos qué cambia para empresas no técnicas: task budgets, visión mejorada, cuándo usarlo y cuándo no. Sin jerga.',
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
                Novedades IA
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                7 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              Claude Opus 4.7 para empresas: para qué sirve, cuánto cuesta y si merece el cambio
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              Anthropic lanzó Opus 4.7 el 16 de abril. En 7 días es el modelo más potente de la familia Claude. Aquí está lo que cambia para una empresa real — sin jerga de desarrollador.
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

            <p style={bodyText}>
              Tu equipo lleva meses usando Claude Sonnet 4.6 — o quizás Claude 3.5 — y funciona. No perfectamente, pero funciona. Y ahora Anthropic lanza Opus 4.7 con un comunicado lleno de términos técnicos y te preguntas si tienes que cambiar algo, gastar más, o simplemente ignorarlo.
            </p>
            <p style={bodyText}>
              Este artículo está escrito para ese momento. No para desarrolladores que quieren benchmarks: para directivos, responsables de operaciones y equipos que usan Claude en su trabajo real y necesitan saber si este lanzamiento les afecta.
            </p>

            <h2 style={h2Style}>Qué es exactamente Claude Opus 4.7</h2>
            <p style={bodyText}>
              Claude Opus 4.7 es el modelo más potente de la familia Claude en abril de 2026. Dentro de la familia hay tres niveles: Haiku 4.5 (rápido y barato, para tareas simples), Sonnet 4.6 (el equilibrio entre capacidad y coste que usa la mayoría) y Opus 4.7 (máxima capacidad, coste más alto).
            </p>
            <p style={bodyText}>
              El salto de Sonnet 4.6 a Opus 4.7 no es incremental. Anthropic ha documentado mejoras medibles en razonamiento complejo, análisis de documentos con imágenes integradas y — esto es lo más relevante para empresas — en lo que llaman "task budgets": la capacidad de completar tareas largas y complejas de principio a fin sin perder el hilo.
            </p>

            <h2 style={h2Style}>Las dos novedades que importan para una empresa</h2>

            <h3 style={h3Style}>1. Task budgets: agentes que completan trabajos largos sin romperse</h3>
            <p style={bodyText}>
              Si alguna vez has intentado que Claude haga algo que implica 20 pasos seguidos — analizar un dataset completo, procesar un lote de documentos, ejecutar un flujo automatizado largo — habrás visto que en algún momento se pierde, se repite o simplemente para. Eso es porque los modelos anteriores no tenían una forma nativa de gestionar cuánto "esfuerzo" dedicar a cada paso de una tarea larga.
            </p>
            <p style={bodyText}>
              Opus 4.7 introduce task budgets: puedes definirle al modelo cuántos recursos (en términos de tokens de pensamiento) puede usar para una tarea completa. El modelo los distribuye de forma inteligente — más esfuerzo en los pasos críticos, menos en los mecánicos — y completa el trabajo sin desviarse. En términos prácticos, los agentes construidos con Opus 4.7 son significativamente más fiables en tareas largas. Menos supervisión humana necesaria.
            </p>

            <h3 style={h3Style}>2. Visión de alta resolución: analiza documentos con imágenes, gráficos y tablas</h3>
            <p style={bodyText}>
              El otro salto relevante está en cómo procesa documentos que mezclan texto e imagen: informes financieros con gráficos, planos, dashboards, presentaciones de PowerPoint exportadas como PDF. Los modelos anteriores de Claude leían el texto de esos documentos pero procesaban las imágenes con limitaciones. Opus 4.7 analiza ambos elementos con el mismo nivel de detalle.
            </p>
            <p style={bodyText}>
              Para una empresa que necesita extraer información de informes con visualizaciones, hacer seguimiento de KPIs desde capturas de pantalla o procesar documentación técnica con diagramas, la diferencia es real y medible.
            </p>

            <h2 style={h2Style}>La arquitectura de coste que deberías usar en 2026</h2>
            <p style={bodyText}>
              Antes de preguntarte "¿me paso a Opus 4.7?", la pregunta más útil es otra: ¿para qué usas Claude hoy? Porque la respuesta inteligente para casi todas las empresas no es elegir un solo modelo — es usar el modelo correcto para cada tarea.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {[
                {
                  model: 'Haiku 4.5',
                  use: '~70% de las consultas',
                  desc: 'Respuestas rápidas, clasificaciones, resúmenes cortos, tareas repetitivas. Coste mínimo. Si una tarea no requiere razonamiento complejo, Haiku es suficiente y mucho más barato.',
                  color: '#F5F5F5',
                },
                {
                  model: 'Sonnet 4.6',
                  use: '~25% de las consultas',
                  desc: 'El modelo que ya usas para la mayoría del trabajo serio: redacción, análisis, respuestas de soporte elaboradas, código, documentos de longitud media. El punto óptimo de calidad-precio.',
                  color: '#EEEEEE',
                },
                {
                  model: 'Opus 4.7',
                  use: '~5% de las consultas',
                  desc: 'Análisis de documentos complejos con imágenes, agentes que ejecutan flujos de trabajo largos, decisiones de alto impacto donde el coste del error supera con creces el coste del modelo.',
                  color: '#111111',
                },
              ].map((item) => (
                <div key={item.model} style={{ background: item.color, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 600, color: item.model === 'Opus 4.7' ? '#FFFFFF' : '#111111' }}>{item.model}</span>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: item.model === 'Opus 4.7' ? 'rgba(255,255,255,0.5)' : '#999999' }}>{item.use}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: item.model === 'Opus 4.7' ? 'rgba(255,255,255,0.7)' : '#555555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={bodyText}>
              Si hoy usas exclusivamente Sonnet 4.6 para todo, no necesitas migrarte a Opus 4.7 para cada consulta. Lo que tiene sentido es identificar qué procesos en tu empresa se benefician del salto: normalmente son flujos de agentes largos o el análisis de documentación compleja con imágenes integradas.
            </p>

            <h2 style={h2Style}>¿Cuánto más cuesta Opus 4.7?</h2>
            <p style={bodyText}>
              En la interfaz de Claude.ai (Teams o Enterprise), el acceso a Opus 4.7 está incluido en el plan — no hay un coste extra por cambiar de modelo manualmente. El diferencial de coste aparece cuando construyes aplicaciones con la API de Anthropic.
            </p>
            <p style={bodyText}>
              Vía API, Opus 4.7 cuesta aproximadamente 5-8 veces más por token que Sonnet 4.6. Para un equipo que usa el chat directamente, eso no cambia nada. Para una empresa que tiene automatizaciones procesando miles de documentos al mes, la arquitectura de modelos que mencionamos antes (Haiku / Sonnet / Opus según la complejidad de cada tarea) es la que mantiene el coste razonable sin sacrificar calidad.
            </p>

            <h2 style={h2Style}>Cuándo no necesitas Opus 4.7</h2>
            <p style={bodyText}>
              La mayoría del trabajo de un equipo de empresa no requiere el modelo más potente del mercado. Opus 4.7 no hará que tus emails sean mejores ni que tu equipo escriba más rápido. Para el uso diario — redactar, resumir, responder, analizar documentos simples — Sonnet 4.6 sigue siendo más que suficiente.
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'No necesitas Opus 4.7 para escribir emails, informes o presentaciones.',
                'No lo necesitas para respuestas de soporte al cliente estándar.',
                'No lo necesitas si tus flujos de agente son cortos (menos de 10-15 pasos).',
                'No lo necesitas si no procesas documentos con imágenes o gráficos complejos.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <h2 style={h2Style}>Los casos donde sí marca diferencia</h2>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Agentes que procesan lotes de documentos de principio a fin sin supervisión humana constante.',
                'Análisis de informes financieros, técnicos o legales que mezclan texto, tablas y gráficos.',
                'Flujos de trabajo complejos donde el error tiene un coste real: contratos, análisis de riesgo, decisiones de compra.',
                'Sistemas de IA que necesitan mantener coherencia a lo largo de cientos de pasos encadenados.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <h2 style={h2Style}>Qué hacer ahora si usas Claude en tu empresa</h2>
            <p style={bodyText}>
              Si usas Claude Teams o Enterprise directamente: prueba Opus 4.7 en las tareas que hoy te generan más fricción. Esas donde el resultado de Sonnet 4.6 no es del todo preciso, donde tienes que relanzar la consulta varias veces o donde el agente se pierde a mitad del proceso. Ahí es donde el salto es visible.
            </p>
            <p style={bodyText}>
              Si usas Claude vía API o tienes automatizaciones construidas: esta es la conversación que hay que tener con tu equipo técnico o con quien gestione esas integraciones. La arquitectura multi-modelo (Haiku + Sonnet + Opus según la complejidad de cada tarea) es lo que tienen las empresas que llevan usando Claude de forma seria desde hace meses — y es lo que reduce el coste sin sacrificar capacidad donde importa.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                ¿Tienes Claude en tu empresa pero no le estás sacando todo el partido?
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                En Aether diseñamos la arquitectura de modelos correcta para tu empresa y formamos a tu equipo para que use cada uno donde tiene sentido. Sin sobrecoste innecesario, con resultados desde el primer mes.
              </p>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}>
                Hablamos →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#080808', padding: '80px 0' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#555555', marginBottom: '24px' }}>
              Implementación Claude para empresas
            </span>
            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '24px' }}>
              La IA no para. Tu empresa tampoco puede.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Cada mes hay un modelo nuevo, una capacidad nueva, una ventana de ventaja competitiva que se abre y se cierra. Nosotros te mantenemos al día y lo implementamos.
            </p>
            <Link href="/aether-team" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#FFFFFF', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
              Ver Aether Team →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

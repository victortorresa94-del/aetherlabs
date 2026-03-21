import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: '15 Casos de Uso Reales de Claude en Empresas Españolas | Aether Labs',
  description: 'Casos documentados de cómo empresas españolas usan Claude. Marketing, RRHH, finanzas, ventas y operaciones con métricas reales de antes y después.',
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

function CasoCard({ num, title, before, after, desc }: { num: string; title: string; before: string; after: string; desc: string }) {
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '24px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, color: '#CCCCCC', minWidth: '24px', paddingTop: '3px' }}>{num}</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '17px', fontWeight: 500, color: '#111111', marginBottom: '8px' }}>{title}</p>
          <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#555555', lineHeight: 1.6, marginBottom: '12px' }}>{desc}</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' as const }}>
            <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#999999' }}>Antes: <strong style={{ color: '#555555' }}>{before}</strong></span>
            <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#111111' }}>Ahora: <strong>{after}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticlePage() {
  return (
    <div className="v5-page">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#666666' }}>
                Casos de uso
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                12 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              15 casos de uso reales de Claude en empresas españolas
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              No teoría. No ejemplos genéricos. Casos documentados de empresas reales con métricas de antes y después. Marketing, RRHH, ventas, finanzas y dirección.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: '1px solid #1A1A1A' }}>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#555555' }}>Marzo 2026</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#555555' }}>Aether Labs</span>
            </div>
          </div>
        </section>

        {/* ── CONTENIDO ── */}
        <section style={{ backgroundColor: '#F7F7F5', padding: '80px 0' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>

            <p style={bodyText}>
              La diferencia entre una empresa que adopta bien la IA y una que la adopta mal no está en la herramienta: está en si los casos de uso son concretos o abstractos. Los equipos que empiezan con "vamos a usar Claude para todo" no llegan a ningún lado. Los equipos que empiezan con "vamos a usar Claude para esta tarea específica que nos cuesta X horas a la semana" consiguen resultados medibles en días.
            </p>
            <p style={bodyText}>
              Estos 15 casos están basados en nuestra experiencia formando equipos de empresa en Claude. Los nombres de las empresas se han anonimizado, pero los datos son reales. El objetivo es que salgas de aquí con al menos un caso de uso concreto que puedas empezar a explorar esta semana.
            </p>

            <h2 style={h2Style}>Marketing y Comunicación (casos 1-4)</h2>

            <CasoCard
              num="01"
              title="Agencia de marketing multiplica producción de contenido por cuatro"
              before="8 piezas de contenido por semana con 3 personas"
              after="32 piezas por semana con las mismas 3 personas"
              desc="Una agencia de marketing digital de Barcelona configuró Claude con el brand voice de cada cliente en un system prompt. El equipo pasó de redactar contenido desde cero a revisar y ajustar el contenido generado por Claude. El tiempo por pieza bajó de 45 minutos a 12 minutos. La calidad se mantuvo según métricas de engagement, que incluso mejoraron un 18% al poder dedicar más tiempo a la estrategia y a la revisión editorial."
            />

            <CasoCard
              num="02"
              title="Empresa de retail automatiza respuestas a reseñas de Google"
              before="2-3 días de retraso en responder reseñas, respuestas genéricas"
              after="Respuesta en menos de 24h, personalizadas por tipo de reseña"
              desc="Una cadena de tiendas de moda con 12 establecimientos recibía entre 50 y 80 reseñas nuevas cada semana. El equipo de comunicación no daba abasto. Configuraron un workflow donde Claude lee el texto de cada reseña, identifica el tono y el tema, y genera una respuesta personalizada que el community manager solo tiene que revisar y publicar. El tiempo dedicado a gestión de reseñas bajó de 8 horas semanales a 90 minutos."
            />

            <CasoCard
              num="03"
              title="Startup tecnológica genera 30 posts semanales con 2 personas"
              before="6 posts por semana con equipo de 2"
              after="30 posts semanales en 5 canales diferentes"
              desc="Una startup de software B2B con equipo de marketing de dos personas quería presencia en LinkedIn, Twitter, Instagram, newsletter y blog. Imposible con redacción manual. Implementaron un sistema donde crean un único brief semanal y Claude genera las adaptaciones para cada canal con el tono y formato correcto para cada plataforma. El resultado no es publicación automática: hay revisión editorial, pero el proceso es cinco veces más rápido."
            />

            <CasoCard
              num="04"
              title="Consultora reduce tiempo de elaboración de informes de sector"
              before="3 horas por informe de tendencias de sector"
              after="20 minutos de generación + 30 minutos de revisión"
              desc="Una consultora estratégica que produce informes mensuales de tendencias para sus clientes entrenó a su equipo para usar Claude como analista de primera pasada. El consultor aporta las fuentes y los puntos clave, Claude estructura el informe y redacta la narrativa, y el consultor lo revisa y añade el criterio propio. El cliente recibe la misma calidad percibida, el consultor ahorra dos horas por informe."
            />

            <h2 style={h2Style}>Recursos Humanos (casos 5-7)</h2>

            <CasoCard
              num="05"
              title="Empresa industrial reduce tiempo de criba de 200 CVs de 2 días a 2 horas"
              before="2 días para cribar 200 CVs con criterios inconsistentes"
              after="2 horas con criterios objetivos y documentados"
              desc="Una empresa de fabricación con 300 empleados recibía entre 150 y 200 candidaturas por proceso de selección. La técnico de RRHH tardaba dos días completos en la criba inicial, con el riesgo de inconsistencia entre candidatos revisados el primer día versus el segundo. Implementaron un scorecard en Claude: el modelo puntúa cada CV según los criterios definidos por la empresa (experiencia, formación, competencias técnicas, indicadores de ajuste cultural) y genera una lista priorizada con comentarios. La técnica revisa y valida en 2 horas."
            />

            <CasoCard
              num="06"
              title="Cadena hotelera estandariza el onboarding con Claude"
              before="Onboarding inconsistente según el hotel y el mánager"
              after="Plan de 30-60-90 días personalizado por rol en 15 minutos"
              desc="Una cadena con 8 hoteles tenía un problema de inconsistencia en el onboarding: cada mánager lo hacía a su manera, con resultados muy diferentes en retención de nuevas incorporaciones. El equipo central de RRHH diseñó en Claude un generador de planes de onboarding que toma el rol, el hotel y el perfil del candidato y produce un plan de 30-60-90 días con tareas concretas, personas de referencia y objetivos de aprendizaje. Tiempo de rotación en los primeros 3 meses bajó un 22% el primer año."
            />

            <CasoCard
              num="07"
              title="Despacho profesional documenta todas sus políticas internas en 3 semanas"
              before="Políticas de empresa en documentos dispersos, desactualizados o inexistentes"
              after="Manual del empleado completo, actualizado y en lenguaje comprensible"
              desc="Un despacho de abogados con 45 personas nunca había tenido un manual del empleado actualizado. Las políticas estaban en emails antiguos, en la cabeza de los socios o directamente no existían. El responsable de RRHH usó Claude para transformar correos, notas internas y conversaciones grabadas en políticas formales redactadas en lenguaje claro. Tres semanas de trabajo a media jornada. El resultado fue un manual de 80 páginas que redujo las consultas al departamento de RRHH en un 40%."
            />

            <h2 style={h2Style}>Ventas y Negocio (casos 8-10)</h2>

            <CasoCard
              num="08"
              title="SaaS B2B reduce tiempo de propuesta comercial de 45 a 8 minutos"
              before="45 minutos por propuesta personalizada"
              after="8 minutos incluyendo revisión"
              desc="Una empresa de software B2B con ciclo de venta largo necesitaba propuestas muy personalizadas para cada prospecto. El comercial tardaba 45 minutos en redactar cada propuesta: revisar el CRM, entender el pain del cliente, adaptar el contenido. Construyeron una plantilla en Claude que toma los datos del CRM y los apuntes de la llamada de descubrimiento y genera una propuesta personalizada. El comercial revisa y ajusta en 8 minutos. El ratio de cierre mejoró un 12% por la mayor consistencia en la propuesta de valor."
            />

            <CasoCard
              num="09"
              title="Inmobiliaria genera fichas de inmuebles cinco veces más rápido"
              before="30 minutos por ficha de inmueble con texto de calidad variable"
              after="6 minutos por ficha con calidad consistente"
              desc="Una agencia inmobiliaria con 60 agentes tenía calidad muy desigual en las fichas de sus inmuebles. Los buenos agentes redactaban textos vendedores; los nuevos escribían descripciones planas. Configuraron Claude con las características del inmueble y las instrucciones de estilo de la agencia. El agente introduce los datos del inmueble (metros, habitaciones, características destacadas, entorno) y Claude genera la ficha. Un editor revisa y publica. Tiempo por ficha: de 30 a 6 minutos. Calidad: más consistente en toda la cartera."
            />

            <CasoCard
              num="10"
              title="Empresa de servicios automatiza el seguimiento de leads"
              before="Follow-up manual inconsistente, muchos leads sin seguimiento"
              after="Secuencia de seguimiento personalizada para cada lead en minutos"
              desc="Una empresa de servicios profesionales B2B perdía oportunidades porque el equipo comercial no tenía tiempo para hacer seguimiento personalizado a todos los leads. Implementaron un sistema donde Claude genera la secuencia de seguimiento para cada lead según el sector, el cargo y el interés manifestado. Los comerciales revisan y envían. El tiempo de respuesta bajó de días a horas. Las reuniones agendadas aumentaron un 28% el primer trimestre."
            />

            <h2 style={h2Style}>Finanzas y Operaciones (casos 11-13)</h2>

            <CasoCard
              num="11"
              title="Equipo de controlling cierra el mes un día antes"
              before="Cierre mensual en 3 días con muchas revisiones manuales"
              after="Cierre en 2 días con informe narrativo automático"
              desc="El equipo de controlling de una empresa de distribución con 180 empleados tardaba tres días en el cierre mensual, principalmente por la elaboración del informe narrativo para dirección. Los datos estaban en el ERP, pero transformarlos en un relato comprensible para el comité de dirección requería horas. Ahora exportan los datos del ERP, los introducen en Claude con el contexto del mes y Claude genera el primer borrador del informe narrativo. El controller revisa y ajusta. Un día menos de cierre."
            />

            <CasoCard
              num="12"
              title="Despacho legal reduce tiempo de redacción de contratos en un 80%"
              before="4-6 horas para redactar un contrato complejo desde cero"
              after="45 minutos para revisar y personalizar el borrador de Claude"
              desc="Un despacho de abogados mercantiles entrenó a sus abogados junior para usar Claude en la redacción de contratos. El abogado especifica el tipo de contrato, las partes, las condiciones económicas y las cláusulas específicas que necesita. Claude genera el borrador completo en el estilo del despacho. El abogado junior revisa, ajusta y valida. El abogado senior hace la revisión final. Tiempo total: 45 minutos para contratos que antes tardaban entre 4 y 6 horas."
            />

            <CasoCard
              num="13"
              title="Empresa logística documenta todos sus procesos en 2 semanas"
              before="Cero documentación de procesos operativos"
              after="Manual de operaciones de 120 procedimientos en 2 semanas"
              desc="Una empresa de logística de tamaño medio nunca había documentado formalmente sus procesos operativos. El conocimiento estaba en la cabeza de los empleados veteranos. El responsable de operaciones pasó dos semanas con Claude: entrevistaba a los empleados clave, tomaba notas, y luego Claude transformaba esas notas en procedimientos formales con estructura estándar. El resultado fue un manual de operaciones con 120 procedimientos documentados que ahora se usa para el onboarding y como referencia operativa."
            />

            <h2 style={h2Style}>Dirección y Estrategia (casos 14-15)</h2>

            <CasoCard
              num="14"
              title="CEO usa Claude para preparar todas sus comunicaciones externas"
              before="2-3 horas preparando discursos, entrevistas y comunicados de prensa"
              after="40 minutos con Claude como sparring y primer redactor"
              desc="El CEO de una empresa de tecnología de 120 empleados tiene una agenda muy densa. Preparar las comunicaciones externas (discursos para eventos, entrevistas con medios, comunicados para clientes) le consumía demasiado tiempo. Ahora usa Claude como sparring: le explica el contexto, el mensaje que quiere transmitir y el tono, y Claude genera un primer borrador. El CEO revisa, ajusta y personaliza. En casos de discursos, trabaja el texto de forma conversacional con Claude hasta que el resultado le representa fielmente."
            />

            <CasoCard
              num="15"
              title="Consultora usa Claude para research de mercado en nuevos sectores"
              before="3-5 días para investigar un sector nuevo antes de una propuesta"
              after="6 horas para un briefing de sector con nivel de detalle suficiente"
              desc="Una consultora de estrategia que trabaja con clientes de sectores muy diversos necesitaba acortar el tiempo de investigación antes de elaborar propuestas para sectores donde no tenía experiencia previa. Desarrollaron un protocolo con Claude: análisis de los principales actores del sector, dinámica competitiva, tendencias recientes, retos habituales y casos de éxito. El consultor complementa con fuentes primarias y criterio propio. El time-to-proposal bajó de 3-5 días a menos de 24 horas."
            />

            <h2 style={h2Style}>Patrones comunes en empresas que adoptan Claude bien</h2>
            <p style={bodyText}>
              Analizando estos 15 casos y decenas más, emergen tres patrones consistentes en las empresas que consiguen resultados reales con Claude frente a las que lo adoptan pero no ven impacto:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Empiezan con 1-2 casos de uso muy concretos: nunca con "vamos a usar Claude para todo". Un caso de uso específico, una persona responsable, un resultado medible. Cuando ese primer caso funciona, la adopción del segundo es diez veces más fácil.',
                'Forman al equipo antes de dar acceso libre: las empresas que simplemente compran licencias y dicen "adelante" tienen una tasa de adopción real muy baja. Las que invierten 4-8 horas en formación específica para su sector y sus casos de uso consiguen que el 80% del equipo lo use realmente.',
                'Crean bibliotecas de prompts compartidas: los mejores prompts no se guardan en el ordenador de quien los creó. Se documentan, se comparten y se mejoran colectivamente. Las empresas con mayor ROI en IA tienen sistemas para capturar y compartir el conocimiento sobre cómo usar la herramienta.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                Consigue casos de uso reales para tu empresa
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                En nuestra formación identificamos los casos de uso específicos de tu empresa y formamos al equipo para ejecutarlos. Sin teoría genérica, con resultados desde la primera semana.
              </p>
              <Link href="/school-lab/formacion-claude-empresas" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}>
                Ver programa de formación →
              </Link>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#080808', padding: '80px 0' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#555555', marginBottom: '24px' }}>
              Formación Claude para empresas
            </span>
            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '24px' }}>
              Tu empresa tiene casos de uso concretos. Nosotros los conocemos.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Formamos equipos con los casos de uso de su sector. Los resultados empiezan en la primera semana de trabajo real con la herramienta.
            </p>
            <Link href="/school-lab/formacion-claude-empresas" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#FFFFFF', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 500, textDecoration: 'none', borderRadius: '8px' }}>
              Ver programa de formación →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

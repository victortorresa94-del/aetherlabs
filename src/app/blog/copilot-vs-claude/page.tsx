import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Microsoft Copilot vs Claude para Empresas: Comparativa 2026 | Aether Labs',
  description: 'Copilot está en Microsoft 365. Claude es mejor IA. Pero cuál conviene a tu empresa? Analizamos precios, capacidades e integración.',
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

        {/* ── HERO ── */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="v5-container" style={{ maxWidth: '740px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#666666' }}>
                Comparativa
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                7 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              Microsoft Copilot vs Claude: qué IA conviene a tu empresa en 2026
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              El 90% de las empresas tiene Microsoft 365. Copilot ya está dentro. Entonces, ¿para qué pagar por Claude? La respuesta no es tan obvia como parece.
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
              La pregunta llega constantemente en nuestras conversaciones con responsables de IT y directores de operaciones: "Ya tenemos Microsoft 365 con Copilot incluido. ¿Tiene sentido pagar adicionalmente por Claude?" Es una pregunta completamente legítima y merece una respuesta honesta, no una que favorezca lo que nosotros vendemos.
            </p>
            <p style={bodyText}>
              La respuesta corta: Copilot y Claude son herramientas que hacen cosas diferentes con mucho solapamiento en el centro. Para muchas empresas, la respuesta óptima no es elegir entre uno u otro sino entender qué hace cada uno mejor y decidir cuál merece la inversión adicional según tus casos de uso prioritarios.
            </p>

            <h2 style={h2Style}>Qué hace Copilot que Claude no puede</h2>
            <p style={bodyText}>
              La ventaja de Copilot no está en la calidad del modelo de IA: está en la integración. Microsoft ha construido algo que Claude no ofrece de forma nativa: acceso directo a tus documentos, correos y reuniones dentro de las herramientas que tu equipo ya usa.
            </p>

            <h3 style={h3Style}>Integración nativa con Microsoft 365</h3>
            <p style={bodyText}>
              Copilot puede abrir un Word que tienes en SharePoint, leer los correos relacionados con un proyecto en Outlook, buscar en las notas de reuniones de Teams y generar un resumen consolidado sin que el usuario tenga que copiar y pegar nada. Ese flujo sin fricción es genuinamente valioso y Claude no lo replica sin desarrollo propio.
            </p>

            <h3 style={h3Style}>Acceso al contexto corporativo sin esfuerzo</h3>
            <p style={bodyText}>
              Copilot tiene acceso a los archivos en SharePoint, los calendarios, los correos, las conversaciones de Teams. Puede responder preguntas como "¿cuál es el estado del proyecto Orión?" buscando en todos esos repositorios sin que el usuario tenga que especificar dónde está la información. Para empresas que gestionan mucha información en Microsoft 365, esto es una ventaja real.
            </p>

            <h3 style={h3Style}>Sin cambio de herramienta para el usuario</h3>
            <p style={bodyText}>
              La adopción de cualquier herramienta nueva tiene fricción. Copilot está dentro de Word, dentro de Outlook, dentro de Teams. El usuario no tiene que ir a otra pestaña, abrir otra aplicación, ni cambiar de contexto. Para perfiles que son menos tecnológicos o que tienen resistencia al cambio, esta ventaja es significativa.
            </p>

            <h2 style={h2Style}>Qué hace Claude mejor que Copilot</h2>
            <p style={bodyText}>
              Si Copilot gana en integración y contexto corporativo, Claude gana en capacidad de razonamiento, flexibilidad y profundidad del análisis. No es una diferencia menor.
            </p>

            <h3 style={h3Style}>Razonamiento más sofisticado</h3>
            <p style={bodyText}>
              Los benchmarks de 2026 son consistentes: Claude supera a los modelos que alimentan Copilot en tareas que requieren razonamiento encadenado, análisis de argumentos complejos y síntesis de información matizada. En la práctica, esto se traduce en respuestas más útiles cuando la tarea es difícil. Para redactar un email de bienvenida, la diferencia es marginal. Para analizar 50 páginas de un contrato y detectar cláusulas problemáticas, la diferencia es medible.
            </p>

            <h3 style={h3Style}>System prompts más potentes y configurables</h3>
            <p style={bodyText}>
              Claude permite configurar instrucciones de sistema detalladas que definen exactamente cómo debe comportarse en cada contexto. Puedes crear una versión de Claude que siempre responde como analista financiero de tu empresa, o como redactor con el tono exacto de tu marca, o como revisor legal con las restricciones específicas de tu sector. Copilot ofrece personalización limitada en comparación.
            </p>

            <h3 style={h3Style}>Mejor para textos largos y análisis complejos</h3>
            <p style={bodyText}>
              La ventana de contexto de Claude (200k tokens) supera a la de los modelos de Copilot y mantiene mejor la coherencia en documentos muy extensos. Para equipos que trabajan con contratos largos, informes de due diligence, expedientes de cliente o cualquier documento de cientos de páginas, Claude rinde mejor.
            </p>

            <h3 style={h3Style}>Flexibilidad para casos de uso no-Microsoft</h3>
            <p style={bodyText}>
              Claude funciona igual de bien independientemente de si tu empresa usa Microsoft, Google Workspace, o no usa suite ofimática en la nube. Para empresas con ecosistema mixto o con casos de uso que van más allá del trabajo documental, Claude ofrece más flexibilidad.
            </p>

            <h2 style={h2Style}>Diferencias de precio para 2026</h2>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '24px 32px', marginBottom: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', marginBottom: '12px' }}>Microsoft Copilot M365</p>
                  <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '28px', fontWeight: 400, color: '#111111', marginBottom: '4px' }}>30 USD</p>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#888888' }}>por usuario / mes (se añade al plan M365 existente)</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', marginBottom: '12px' }}>Claude Team</p>
                  <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '28px', fontWeight: 400, color: '#111111', marginBottom: '4px' }}>25 EUR</p>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#888888' }}>por usuario / mes (mínimo 5 usuarios)</p>
                </div>
              </div>
            </div>

            <p style={bodyText}>
              En términos de coste, Claude Team es ligeramente más barato que Copilot M365. Pero la comparación relevante no es de precio base sino de ROI: ¿qué herramienta genera más valor para los casos de uso específicos de tu empresa? Un equipo que ya usa Word y Outlook intensivamente y que trabaja principalmente con documentos internos puede obtener más valor de Copilot. Un equipo de análisis o de consultoría que trabaja con documentos externos y necesita razonamiento profundo probablemente obtenga más valor de Claude.
            </p>

            <h2 style={h2Style}>La estrategia que recomendamos: no es una elección binaria</h2>
            <p style={bodyText}>
              En Aether Labs hemos formado a equipos que usan Copilot y Claude de forma complementaria, y es la estrategia que más sentido tiene para la mayoría de las empresas medianas y grandes:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Copilot para tareas integradas en el flujo Microsoft: redactar emails en Outlook con contexto de conversaciones anteriores, generar primeros borradores en Word a partir de documentos en SharePoint, resumir reuniones de Teams.',
                'Claude para tareas de análisis y generación avanzadas: análisis de contratos, research de mercado, generación de contenido con brand voice preciso, procesamiento de documentos externos extensos.',
                'La clave está en definir qué hace cada herramienta: no duplicar funciones, no mezclar flujos. Un usuario bien formado aprende a elegir la herramienta correcta para cada tarea.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <h2 style={h2Style}>Cuándo tiene sentido solo Copilot</h2>
            <p style={bodyText}>
              Hay escenarios donde Copilot por sí solo es la respuesta correcta y no tiene sentido la inversión adicional en Claude:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Empresa 100% Microsoft donde todos los flujos de trabajo pasan por Word, Excel, Outlook y Teams, con presupuesto ajustado para IA.',
                'Equipo con baja disposición al cambio tecnológico donde la integración nativa en las herramientas habituales es la clave para la adopción.',
                'Casos de uso principalmente de productividad documental: redacción de emails, resúmenes de reuniones, primeros borradores de documentos internos.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <h2 style={h2Style}>Cuándo tiene sentido empezar con Claude o ir con Claude primero</h2>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'No dependes de Microsoft o usas Google Workspace: no tienes la ventaja de integración de Copilot y el coste se justifica menos.',
                'Tus casos de uso prioritarios requieren razonamiento profundo: análisis de documentos complejos, investigación, generación de contenido estratégico.',
                'Quieres flexibilidad para construir flujos automatizados con la API: Claude ofrece una API más flexible para integraciones personalizadas.',
                'Tu equipo trabaja con información sensible y quieres las máximas garantías de privacidad desde el primer día.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <p style={{ ...bodyText, marginBottom: '48px' }}>
              La decisión entre Copilot y Claude no es una decisión de herramienta: es una decisión sobre qué tipo de trabajo quieres optimizar primero. Define tus dos o tres casos de uso más importantes, evalúa cuál de las dos herramientas los resuelve mejor, y empieza por ahí. La inversión en formación adecuada tiene más impacto en el ROI que la elección de herramienta.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                ¿No sabes cuál elegir para tu empresa?
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                En una sesión de una hora analizamos tus casos de uso y te decimos con datos cuál tiene más sentido para tu empresa. Sin compromiso de compra.
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
              La herramienta correcta, bien usada.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Formamos equipos en Claude con casos de uso reales. No teoria sobre qué puede hacer la IA en abstracto, sino cómo hacerlo con tu trabajo de cada día.
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

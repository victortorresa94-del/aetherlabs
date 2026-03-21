import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Qué es Claude Cowork (Computer Use) y Cómo Usarlo en tu Empresa | Aether Labs',
  description: 'Claude Cowork permite a Claude controlar tu ordenador como un asistente humano. Todo lo que necesitas saber para implementarlo en tu empresa.',
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
                Guía
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                6 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              Qué es Claude Cowork y cómo puede transformar el trabajo de tu equipo
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              Claude Cowork es un agente de escritorio que controla el ordenador como lo haría un humano: navega, hace clic, lee pantallas y completa tareas de múltiples pasos sin necesitar acceso a APIs. Una capacidad que redefine qué tipo de tareas puede automatizar la IA en tu empresa.
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
              La automatización de procesos empresariales siempre ha tenido un techo claro: solo podías automatizar tareas en software que tenía API. Todo lo demás requería intervención humana. Claude Cowork, la implementación empresarial de la capacidad Computer Use de Anthropic, rompe ese límite. Por primera vez, puedes delegar en un agente de IA tareas que hasta ahora solo podían hacer personas con un ratón y un teclado.
            </p>
            <p style={bodyText}>
              No es ciencia ficción. Es una capacidad disponible hoy, en producción, con casos de uso documentados en empresas reales. Pero como toda tecnología emergente, requiere entender bien qué puede hacer, qué no puede hacer todavía, y cómo implementarla de forma que aporte valor real sin crear riesgos innecesarios.
            </p>

            <h2 style={h2Style}>Qué puede hacer Claude Cowork exactamente</h2>
            <p style={bodyText}>
              Claude Cowork opera tomando capturas de pantalla del escritorio, analizando lo que ve y ejecutando acciones de ratón y teclado en consecuencia. No es un script que repite pasos grabados: es un agente que razona sobre lo que ve y decide qué hacer en cada momento, igual que lo haría una persona.
            </p>

            <h3 style={h3Style}>Navegación y operación de cualquier software</h3>
            <p style={bodyText}>
              Claude Cowork puede abrir cualquier aplicación instalada en el ordenador, navegar por sus menús, rellenar formularios, buscar información en pantalla y ejecutar flujos de trabajo completos. Desde ERPs legacy que no tienen API hasta aplicaciones internas de gestión que se construyeron hace quince años. Si un humano puede operarlo con ratón y teclado, Claude Cowork puede operarlo también.
            </p>

            <h3 style={h3Style}>Comprensión visual de la pantalla</h3>
            <p style={bodyText}>
              A diferencia de los bots de automatización tradicionales que buscan elementos por identificadores técnicos (IDs, clases CSS, selectores XPath), Claude Cowork entiende lo que ve en pantalla de forma semántica. Puede leer un PDF en el visor de documentos, extraer los datos relevantes y trasladarlos a otra aplicación sin necesitar que ninguno de los dos sistemas tenga una API. Ve la pantalla como la ve un humano.
            </p>

            <h3 style={h3Style}>Tareas de múltiples pasos con razonamiento</h3>
            <p style={bodyText}>
              La diferencia fundamental respecto a la automatización robótica de procesos (RPA) tradicional es que Claude Cowork no sigue un script fijo. Puede adaptarse a variaciones en la interfaz, manejar situaciones inesperadas, leer mensajes de error y decidir cómo continuar. Si durante una tarea aparece un diálogo de confirmación que no estaba en el flujo habitual, Claude Cowork lo lee, lo entiende y decide si confirmar o detener la tarea para pedir instrucciones.
            </p>

            <h3 style={h3Style}>Trabajo con archivos locales sin subir datos a la nube</h3>
            <p style={bodyText}>
              Para empresas con requisitos estrictos de seguridad de datos, esta característica es especialmente relevante. Claude Cowork puede procesar documentos, hojas de cálculo y bases de datos que residen en el ordenador local o en la red corporativa, sin necesidad de subirlos a ningún servicio externo. La información no sale del perímetro corporativo.
            </p>

            <h2 style={h2Style}>Casos de uso reales para empresas</h2>

            <h3 style={h3Style}>Automatización de tareas repetitivas en software legacy</h3>
            <p style={bodyText}>
              Muchas empresas tienen sistemas de gestión que llevan décadas en producción y que no ofrecen API moderna. Los costes de migración o integración son prohibitivos. Claude Cowork permite automatizar la extracción y entrada de datos en estos sistemas sin tocarlo: opera la interfaz gráfica exactamente como lo haría un operario, pero sin cansarse y sin errores de tecleado.
            </p>

            <h3 style={h3Style}>Extracción de datos de sistemas sin API</h3>
            <p style={bodyText}>
              Portales de proveedores, plataformas de administración pública, sistemas de reservas de terceros, intranets corporativas antiguas. Todos tienen información valiosa que actualmente solo se puede extraer manualmente. Un agente configurado con Claude Cowork puede navegar por estos sistemas, extraer la información relevante y consolidarla en un informe o en una base de datos interna de forma automática y programada.
            </p>

            <h3 style={h3Style}>Procesamiento de formularios y entrada de datos</h3>
            <p style={bodyText}>
              La entrada de datos es una de las tareas que más tiempo consume en empresas de cualquier tamaño. Pasar información de emails o documentos a CRMs, ERPs o sistemas de facturación. Con Claude Cowork, el proceso puede ser completamente automático: lee el documento fuente, extrae la información relevante y la introduce en el sistema de destino, verificando que los datos son coherentes antes de confirmar.
            </p>

            <h3 style={h3Style}>Testing de interfaces de usuario</h3>
            <p style={bodyText}>
              Para equipos de desarrollo, Claude Cowork puede ejecutar pruebas de interfaz de usuario de forma autónoma, navegando por flujos completos, detectando errores visuales y generando informes de los problemas encontrados. A diferencia de los tests automatizados convencionales, puede detectar problemas de usabilidad que no se manifiestan como errores técnicos pero que afectan a la experiencia real del usuario.
            </p>

            <h2 style={h2Style}>Ventajas sobre otros sistemas de automatización</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                {
                  title: 'No necesita API',
                  desc: 'Funciona con cualquier software que tenga interfaz gráfica. Sin desarrollo de integraciones, sin costes de conectores, sin dependencia de que el proveedor del software ofrezca API.',
                },
                {
                  title: 'Se adapta a cambios de interfaz',
                  desc: 'Los scripts de RPA tradicional se rompen cuando la interfaz cambia aunque sea ligeramente. Claude Cowork entiende la interfaz semánticamente y se adapta a cambios de diseño sin necesitar reprogramación.',
                },
                {
                  title: 'Maneja excepciones con criterio',
                  desc: 'Cuando encuentra una situación inesperada, no falla silenciosamente ni continúa en la dirección equivocada. Puede pausar la tarea, registrar lo que encontró y pedir instrucciones al operador humano.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '20px 24px' }}>
                  <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '16px', fontWeight: 500, color: '#111111', marginBottom: '6px' }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#555555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={h2Style}>Limitaciones actuales que debes conocer</h2>
            <p style={bodyText}>
              Ser honesto sobre las limitaciones de Claude Cowork es fundamental para implementarlo bien. Usarlo en los casos equivocados o sin la supervisión adecuada puede generar más problemas que soluciones.
            </p>

            <h3 style={h3Style}>Velocidad: más lento que la automatización nativa</h3>
            <p style={bodyText}>
              Claude Cowork opera capturando pantallas y razonando sobre ellas, lo que lo hace considerablemente más lento que una automatización que interactúa directamente con las APIs del sistema. Para tareas que necesitan procesarse en milisegundos o que implican volúmenes muy altos de transacciones por minuto, no es la herramienta adecuada. Para tareas que actualmente llevan horas a una persona, la velocidad de Claude Cowork es perfectamente aceptable.
            </p>

            <h3 style={h3Style}>Precisión: requiere supervisión en tareas críticas</h3>
            <p style={bodyText}>
              La tasa de error de Claude Cowork es baja pero no cero. Para tareas donde un error tiene consecuencias serias (transacciones financieras, modificación de registros legales, comunicaciones externas con clientes), es imprescindible implementar un paso de revisión humana antes de confirmar la acción. No es una herramienta que puedas dejar ejecutando autónomamente sin monitorización en procesos críticos.
            </p>

            <h3 style={h3Style}>Infraestructura: requiere un entorno dedicado</h3>
            <p style={bodyText}>
              Claude Cowork necesita un ordenador (físico o virtual) donde ejecutarse. No puede operar en segundo plano en el mismo equipo que está usando un empleado simultáneamente. Para implementaciones serias, lo habitual es configurar una máquina virtual dedicada o un servidor de escritorio remoto donde el agente trabaja de forma independiente.
            </p>

            <h2 style={h2Style}>Cómo empezar con Claude Cowork en tu empresa</h2>
            <p style={bodyText}>
              La implementación de Claude Cowork en una empresa no requiere grandes inversiones iniciales, pero sí requiere hacerlo con criterio. Estas son las fases que recomendamos:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Identifica un caso de uso concreto y de bajo riesgo para empezar: extracción de datos de un sistema sin API, consolidación de información de múltiples fuentes, o testing de una aplicación interna.',
                'Configura un entorno de prueba aislado: una máquina virtual o un equipo dedicado donde el agente pueda operar sin interferir con el trabajo del equipo y sin acceso a sistemas críticos.',
                'Define el protocolo de supervisión desde el inicio: quién revisa los resultados, con qué frecuencia, qué indicadores de error hay que monitorizar y qué hacer si el agente se queda bloqueado.',
                'Mide el resultado antes de escalar: documenta el tiempo que tardaba la tarea manualmente versus con el agente, la tasa de error y el tiempo de supervisión necesario. Con esos datos, decide si tiene sentido expandir a otros casos de uso.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <p style={{ ...bodyText, marginBottom: '48px' }}>
              Claude Cowork representa una de las evoluciones más significativas en IA empresarial de los últimos años. No porque sea perfecta hoy, sino porque el paradigma que introduce —un agente que puede operar cualquier software como lo hace un humano— tiene implicaciones profundas para cómo las empresas organizarán su trabajo en los próximos años. Empezar a entenderlo y experimentar con él ahora es una ventaja competitiva real.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                Aprende a implementar Claude en tu empresa
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                En nuestro programa de formación cubrimos desde el uso básico de Claude hasta la implementación de agentes como Claude Cowork en flujos de trabajo reales. Adaptado a tu sector y tus procesos.
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
              De la teoría a los primeros resultados reales en una semana.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Formamos equipos en Claude con casos de uso específicos de su sector. Sin teoría genérica, sin prompts de muestra que no sirven para nada.
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

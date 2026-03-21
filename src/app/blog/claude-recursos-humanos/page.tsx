import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Claude para Recursos Humanos: guía completa 2026 | Aether Labs',
  description: 'Cómo usar Claude en RRHH: criba de CVs, onboarding, evaluaciones, clima laboral y comunicación interna. Guía práctica con ejemplos reales.',
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

const promptBlockStyle: React.CSSProperties = {
  background: '#F7F7F5',
  borderRadius: '8px',
  padding: '20px',
  fontFamily: 'var(--v5-font-mono)',
  fontSize: '14px',
  lineHeight: 1.7,
  color: '#333333',
  whiteSpace: 'pre-wrap',
  overflowX: 'auto',
  border: '1px solid #E8E8E6',
  marginBottom: '12px',
  marginTop: '16px',
};

const warningBoxStyle: React.CSSProperties = {
  background: '#FFFBF0',
  border: '1px solid #F0E0A0',
  borderLeft: '4px solid #C89820',
  borderRadius: '8px',
  padding: '20px 24px',
  marginTop: '24px',
  marginBottom: '8px',
};

const infoBoxStyle: React.CSSProperties = {
  background: '#F7F7F5',
  border: '1px solid #E0E0E0',
  borderRadius: '12px',
  padding: '28px 32px',
  marginTop: '32px',
};

const relatedLinkStyle: React.CSSProperties = {
  display: 'block',
  padding: '20px 24px',
  background: '#FFFFFF',
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
  textDecoration: 'none',
};

export default function ClaudeRRHHPage() {
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
                Recursos Humanos
              </span>
            </div>

            <div style={{ maxWidth: '760px' }}>
              <span style={labelStyle}>AETHER LEARN · RECURSOS HUMANOS</span>
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
                Claude para Recursos Humanos: la guía que necesitabas.
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
                Un equipo de RRHH de 3 personas puede recibir 200 CVs para una única oferta, redactar 15 comunicados distintos en un mes, gestionar 40 evaluaciones de desempeño y coordinar el onboarding de 8 nuevas incorporaciones. Todo eso es texto. Y Claude es, antes que cualquier otra cosa, el mejor procesador de texto que ha existido. Esta guía explica cómo aprovecharlo sin convertirte en experto en IA.
              </p>
              <div style={{ display: 'flex', gap: '32px', marginTop: '48px', flexWrap: 'wrap' }}>
                {[
                  ['7 casos', 'de uso en RRHH'],
                  ['Prompts', 'incluidos y listos'],
                  ['12 min', 'de lectura'],
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

        {/* ── POR QUÉ RRHH ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Por qué RRHH es el departamento que más se beneficia de Claude</h2>
            <p style={bodyStyle}>
              Cuando hablamos con empresas que están evaluando adoptar IA, el departamento de RRHH rara vez es el primero en la lista. Marketing, ventas o finanzas suelen llevarse el foco. Es un error.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Casi todo el trabajo de RRHH es texto: los CVs que hay que leer, los comunicados que hay que redactar, las evaluaciones que hay que estructurar, las políticas que hay que actualizar, los planes de onboarding que hay que personalizar. Es un departamento que genera y procesa más documentos textuales por persona que casi cualquier otro de la empresa.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '40px' }}>
              {[
                {
                  dept: 'Finanzas',
                  type: 'Datos numéricos',
                  fit: 'Medio',
                  desc: 'Trabaja principalmente con números y cálculos. Claude ayuda, pero no es su herramienta natural.',
                  color: '#F0F0F0',
                },
                {
                  dept: 'Marketing',
                  type: 'Creatividad + texto',
                  fit: 'Alto',
                  desc: 'Mucho texto, pero también estrategia creativa y contexto de marca que requiere iteración.',
                  color: '#F7F7F5',
                },
                {
                  dept: 'RRHH',
                  type: 'Texto procesable',
                  fit: 'Máximo',
                  desc: 'Texto estructurado, evaluable con criterios claros y en volúmenes que desbordan al equipo.',
                  color: '#111111',
                  dark: true,
                },
              ].map(item => (
                <div
                  key={item.dept}
                  style={{
                    background: item.color,
                    borderRadius: '12px',
                    padding: '24px',
                    border: item.dark ? 'none' : '1px solid #E0E0E0',
                  }}
                >
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: item.dark ? '#666666' : '#999999', marginBottom: '8px', marginTop: 0 }}>{item.dept}</p>
                  <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '16px', fontWeight: 500, color: item.dark ? '#FFFFFF' : '#111111', marginBottom: '4px', marginTop: 0 }}>{item.type}</p>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: item.dark ? '#AAAAAA' : '#888888', marginBottom: '12px', marginTop: 0 }}>Fit con Claude: {item.fit}</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, lineHeight: 1.6, color: item.dark ? '#888888' : '#555555', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CRIBA DE CVs ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Criba de CVs con Claude — cómo funciona en la práctica</h2>
            <p style={bodyStyle}>
              La criba de CVs es el caso de uso más obvio y también el que más tiempo ahorra. Pero hay una forma correcta y una forma incorrecta de hacerlo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
              {[
                {
                  step: '01',
                  title: 'Prepara el prompt con los criterios del puesto',
                  body: 'Antes de subir ningún CV, define los criterios de evaluación. No "buscamos a alguien dinámico": años de experiencia mínima, tecnologías o herramientas concretas, tipo de empresa anterior, formación requerida, y cualquier descalificador automático. Cuanto más específico sea el criterio, más útil será el análisis.',
                },
                {
                  step: '02',
                  title: 'Cómo estructurar los CVs para análisis masivo',
                  body: 'Copia y pega el texto de cada CV (o usa la función de subida de archivos en Claude). Para volúmenes grandes, trabaja en lotes de 10-15 CVs por sesión. Pídele a Claude que los evalúe y genere un ranking con una justificación breve por candidato.',
                },
                {
                  step: '03',
                  title: 'Qué hacer con el ranking generado',
                  body: 'El output de Claude es un punto de partida para la revisión humana, no la decisión final. Usa el ranking para priorizar qué CVs leer con atención. Los candidatos top merece una lectura completa. Los que Claude descarta, verifica al menos una muestra para calibrar si los criterios son correctos.',
                },
              ].map(item => (
                <div key={item.step} style={{ background: '#FFFFFF', borderRadius: '12px', padding: '28px', border: '1px solid #E0E0E0', display: 'flex', gap: '20px' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 600, color: '#CCCCCC', flexShrink: 0, paddingTop: '2px' }}>{item.step}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px', marginTop: 0 }}>{item.title}</p>
                    <p style={{ ...bodyStyle, fontSize: '15px', marginTop: 0, marginBottom: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ ...bodyStyle, marginTop: '32px', marginBottom: '12px' }}>
              <strong style={{ fontWeight: 600, color: '#111111' }}>Prompt de criba de CVs:</strong>
            </p>
            <pre style={promptBlockStyle}>{`Eres un técnico de selección de personal con experiencia en [sector].

Voy a pasarte [número] CVs para el puesto de [nombre del puesto].

Criterios de evaluación (por orden de importancia):
1. [Criterio obligatorio 1 — ej. "mínimo 3 años de experiencia en el rol"]
2. [Criterio obligatorio 2 — ej. "dominio de [herramienta específica]"]
3. [Criterio preferente 1 — ej. "experiencia en empresa de más de 50 empleados"]
4. [Criterio preferente 2]
5. [Descalificadores automáticos — ej. "sin experiencia en el sector"]

Para cada CV, proporciona:
- Puntuación del 1 al 10 con justificación
- Cumplimiento de cada criterio (sí / no / parcial)
- Fortaleza principal del candidato
- Mayor debilidad o laguna
- Recomendación: entrevista / lista de espera / descartar

Al final, ordena todos los candidatos en un ranking con los 5 más recomendados destacados.

CVs:
[pegar CVs]`}</pre>

            <div style={warningBoxStyle}>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 600, color: '#7A5C00', marginBottom: '8px', marginTop: 0 }}>Advertencia importante sobre sesgos</p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: '#6A5000', margin: 0 }}>
                Claude puede replicar y amplificar los sesgos que están en el prompt. Si tus criterios son vagos ("que encaje con el equipo") o incluyen elementos que correlacionan con sesgos de género, edad o procedencia, el análisis los incorporará. Sé específico con los criterios objetivos y revisa una muestra de los candidatos descartados para detectar patrones inesperados.
              </p>
            </div>
          </div>
        </section>

        {/* ── JOB DESCRIPTIONS ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Descripciones de puesto que atraen al candidato correcto</h2>
            <p style={bodyStyle}>
              Las job descriptions genéricas atraen candidatos genéricos. El problema no es que los reclutadores escriban mal; es que cuando redactas la misma descripción para 10 puestos distintos, el resultado acaba siendo el mismo documento con el título cambiado.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Claude puede ayudarte a escribir descripciones que comuniquen realmente qué hace el equipo, cómo trabaja la empresa y qué tipo de persona encajará. Eso requiere darle contexto real, no solo el título del puesto.
            </p>

            <div style={infoBoxStyle}>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 600, color: '#111111', marginBottom: '16px', marginTop: 0 }}>Qué necesita saber Claude sobre tu cultura antes de escribir</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Cómo es el equipo al que se incorpora (tamaño, dinámica, nivel de autonomía)',
                  'Cómo se toman las decisiones en la empresa (jerárquico vs. flat)',
                  'Cuáles son los primeros 3 meses del rol en la práctica',
                  'Por qué alguien bueno elegiría este puesto sobre otro similar en la competencia',
                  'Qué tipo de persona NO encajaría (igual de útil que el perfil ideal)',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#AAAAAA', flexShrink: 0, paddingTop: '3px' }}>—</span>
                    <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#555555', margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ ...bodyStyle, marginTop: '32px', marginBottom: '12px' }}>
              <strong style={{ fontWeight: 600, color: '#111111' }}>Prompt para descripción de puesto:</strong>
            </p>
            <pre style={promptBlockStyle}>{`Eres un experto en employer branding y atracción de talento.

Necesito escribir la descripción de puesto para [título del puesto] en [nombre de empresa].

Sobre la empresa:
- Sector y modelo de negocio: [descripción]
- Tamaño: [número de empleados] | Fase: [startup / scale-up / corporación]
- Cultura de trabajo: [descripción honesta]
- Propuesta de valor para el empleado: [qué ofreces que los demás no]

Sobre el puesto:
- A quién reporta y con quién trabaja: [descripción]
- Responsabilidades principales (los 5 primeros meses): [lista]
- Qué éxito significa en este rol a los 12 meses: [descripción]
- Skills técnicos imprescindibles: [lista]
- Skills técnicos deseables: [lista]
- Perfil de personalidad que encaja: [descripción]
- Perfil que NO encaja (honestamente): [descripción]

Condiciones:
- Salario o rango: [importe]
- Modalidad: [presencial / híbrido / remoto] | Ubicación: [ciudad]
- Beneficios relevantes: [lista]

Escribe la descripción de puesto completa en un tono [formal / cercano / directo] que atraiga exactamente al perfil que buscamos y disuada a los que no encajan.`}</pre>
          </div>
        </section>

        {/* ── ONBOARDING ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Onboarding personalizado sin trabajo extra</h2>
            <p style={bodyStyle}>
              El onboarding estándar tiene un problema fundamental: trata a todos los nuevos empleados igual. La misma presentación de empresa para el ingeniero senior de 15 años de experiencia que para el becario que empieza. El resultado es que los buenos se aburren y los menos preparados se pierden.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              El problema no es la voluntad del equipo de RRHH. Es que personalizar el onboarding por departamento, nivel y perfil requiere un trabajo que nadie tiene tiempo de hacer desde cero cada vez.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Claude puede generar en minutos un plan de onboarding personalizado si le das el contexto del puesto y el perfil de la persona. No como un documento genérico: como un plan semana a semana con objetivos, reuniones clave, recursos específicos y hitos de aprendizaje.
            </p>

            <div style={{ background: '#111111', borderRadius: '16px', padding: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555555', marginBottom: '16px', marginTop: 0 }}>Caso real</p>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '20px', fontWeight: 300, color: '#FFFFFF', lineHeight: 1.4, marginBottom: '16px', marginTop: 0 }}>
                Una empresa de servicios tecnológicos con 80 empleados tenía el mismo PDF de onboarding desde 2019 para todos los departamentos.
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '16px', marginTop: 0 }}>
                En una sesión de trabajo de 3 horas con Claude, el equipo de RRHH generó 6 planes de onboarding diferenciados por departamento (tech, ventas, operaciones, finanzas, marketing y dirección), con variantes por nivel sénior/júnior. Cada plan incluía objetivos de la primera semana, primera quincena y primer mes, reuniones clave con quién y para qué, lista de recursos internos, y una checklist de hitos para el manager.
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#666666', margin: 0 }}>
                El resultado fue un sistema que antes requería días de trabajo, construido en horas. Y que se puede actualizar en minutos cuando algo cambia.
              </p>
            </div>
          </div>
        </section>

        {/* ── CLIMA LABORAL ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Encuestas de clima laboral — del dato a la acción</h2>
            <p style={bodyStyle}>
              El mayor problema con las encuestas de clima no es la recogida de datos. Es lo que pasa después. Los resultados llegan, se archivan en un deck y nadie toma decisiones concretas porque nadie tiene tiempo de analizar 47 preguntas con respuestas de 200 personas.
            </p>
            <p style={{ ...bodyStyle, marginTop: '16px' }}>
              Claude puede hacer ese análisis en minutos. No como un resumen superficial: como un análisis que identifica patrones, correlaciones entre departamentos y preguntas críticas que merecen atención inmediata.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              <div style={{ background: '#F7F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #E0E0E0' }}>
                <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999', marginBottom: '10px', marginTop: 0 }}>Paso 1</p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px', marginTop: 0 }}>Sube los resultados correctamente</p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: '#555555', margin: 0 }}>
                  Exporta los resultados de la encuesta en formato CSV o cópialos en texto. Si son respuestas abiertas, agrúpalas por pregunta. Si son respuestas numéricas, incluye los promedios por departamento y el histórico si lo tienes.
                </p>
              </div>
              <div style={{ background: '#F7F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #E0E0E0' }}>
                <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999', marginBottom: '10px', marginTop: 0 }}>Paso 2</p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px', marginTop: 0 }}>Qué preguntar a Claude</p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: '#555555', margin: 0 }}>
                  "¿Qué departamento tiene las puntuaciones más bajas en desarrollo profesional y qué preguntas lo indican?" · "¿Hay correlación entre las respuestas de comunicación interna y las de satisfacción general?" · "¿Qué 3 áreas deberían ser prioritarias en el plan de acción y por qué?"
                </p>
              </div>
              <div style={{ background: '#F7F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #E0E0E0' }}>
                <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999999', marginBottom: '10px', marginTop: 0 }}>Paso 3</p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px', marginTop: 0 }}>Del análisis al plan de acción</p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: '#555555', margin: 0 }}>
                  Una vez tienes el análisis, pídele a Claude que genere el plan de acción: "Basándote en este análisis, propón 5 iniciativas concretas, ordenadas por impacto y facilidad de implementación, con el responsable sugerido para cada una y un KPI de éxito."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMUNICACIÓN INTERNA ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Comunicación interna con el tono correcto</h2>
            <p style={bodyStyle}>
              Cada empresa tiene un tono. No es solo formal o informal. Es la suma de cómo habla el CEO en los all-hands, cómo responde RRHH a los emails, cómo escribe el equipo de operaciones sus comunicados. Claude puede aprender ese tono si le das los ejemplos correctos.
            </p>

            <div style={infoBoxStyle}>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '16px', marginTop: 0 }}>Cómo crear un "manual de voz" para Claude</p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '16px', marginTop: 0 }}>
                Al inicio de cada conversación en la que vayas a redactar comunicaciones internas, incluye este bloque de contexto:
              </p>
              <pre style={{ ...promptBlockStyle, marginTop: 0 }}>{`Eres el responsable de comunicación interna de [empresa].

Tono de comunicación de la empresa: [descripción: ej. "directo y cercano, sin corporativismo, usamos el tuteo, evitamos el lenguaje de RRHH genérico como 'capital humano' o 'talento'"]

Ejemplos de comunicados que reflejan nuestro tono:
Ejemplo 1: "[pegar un comunicado real de la empresa]"
Ejemplo 2: "[pegar otro comunicado]"

A partir de ahora, todos los textos que escribas para comunicación interna deben seguir este tono.`}</pre>
            </div>

            <p style={{ ...bodyStyle, marginTop: '32px', marginBottom: '20px' }}>
              <strong style={{ fontWeight: 600, color: '#111111' }}>Templates para los comunicados más comunes:</strong>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  title: 'Cambio organizativo',
                  prompt: 'Redacta un comunicado informando del siguiente cambio en la estructura organizativa: [describir el cambio]. El comunicado debe explicar el motivo del cambio, qué significa para los empleados afectados y cuál es el siguiente paso.',
                },
                {
                  title: 'Resultados de empresa',
                  prompt: 'Redacta un comunicado de resultados del [periodo] para compartir con toda la plantilla. Datos: [pegar datos]. Tono: transparente y motivador, no corporativo.',
                },
                {
                  title: 'Reconocimiento de equipo o persona',
                  prompt: 'Redacta un mensaje de reconocimiento para [nombre/equipo] por [logro concreto]. Que sea genuino, específico y sin frases hechas como "¡enhorabuena a todo el equipo!".',
                },
                {
                  title: 'Comunicación de nueva política',
                  prompt: 'Redacta la comunicación de la nueva política de [tema: teletrabajo / vacaciones / gastos / etc.]. Política: [descripción]. Explica el por qué, el qué cambia y el cuándo entra en vigor, en ese orden.',
                },
              ].map(item => (
                <div key={item.title} style={{ background: '#FFFFFF', borderRadius: '8px', padding: '20px 24px', border: '1px solid #E0E0E0' }}>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 600, color: '#111111', marginBottom: '10px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', lineHeight: 1.6, color: '#555555', margin: 0 }}>{item.prompt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LO QUE CLAUDE NO PUEDE ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container" style={{ maxWidth: '760px' }}>
            <h2 style={h2Style}>Lo que Claude NO puede hacer en RRHH</h2>
            <p style={bodyStyle}>
              Las guías de adopción de IA tienen tendencia a exagerar las capacidades. Esta no. Hay cosas que Claude hace mal en el contexto de RRHH y que conviene tener claras antes de implementarlo.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                {
                  title: 'No puede tomar decisiones sobre personas',
                  body: 'Claude puede analizar, comparar y recomendar. Pero la decisión final — contratar, no contratar, promover, despedir — siempre debe ser humana. Usar Claude como decisor automático no es solo un riesgo legal; es un error de juicio.',
                },
                {
                  title: 'No puede garantizar ausencia de sesgos sin supervisión',
                  body: 'Claude no es neutro. Refleja los patrones de los datos con los que fue entrenado y los sesgos que introduzca quien escribe el prompt. Los criterios vagos o mal definidos se convierten en sesgos sistematizados. Requiere revisión humana activa, especialmente en criba y evaluaciones.',
                },
                {
                  title: 'No sustituye el criterio humano en situaciones críticas',
                  body: 'Conflictos entre empleados, procesos disciplinarios, negociaciones de salida, situaciones de acoso o burnout. Estos casos requieren empatía, contexto relacional y criterio ético que Claude no puede proveer. Es la herramienta equivocada para esas situaciones.',
                },
              ].map(item => (
                <div
                  key={item.title}
                  style={{
                    background: '#F7F7F5',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #E0E0E0',
                    borderLeft: '4px solid #DDDDDD',
                  }}
                >
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '10px', marginTop: 0 }}>✕ {item.title}</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#555555', margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARTÍCULOS RELACIONADOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
                  href: '/blog/cuanto-cuesta-implementar-claude',
                  label: 'Pricing',
                  title: 'Cuánto cuesta implementar Claude en una empresa',
                  desc: 'Licencias, formación, integración y ROI. Desglose completo sin letra pequeña.',
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
                maxWidth: '580px',
                marginTop: 0,
              }}
            >
              Forma a tu equipo de RRHH en Claude.
            </h2>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#888888',
                marginBottom: '40px',
                maxWidth: '460px',
              }}
            >
              Adaptamos la formación a los procesos reales de tu departamento: criba, onboarding, comunicación interna y evaluaciones. Sin teoría genérica.
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
                Ver formación para empresas →
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
                Prepara tu equipo
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

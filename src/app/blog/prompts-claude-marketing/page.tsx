import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: '30 Prompts de Claude para Equipos de Marketing | Aether Labs',
  description: '30 prompts listos para copiar y usar en marketing. Briefs, copy, análisis de campañas, adaptación de contenido y más. Con ejemplos reales.',
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

function PromptCard({ num, title, prompt }: { num: string; title: string; prompt: string }) {
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 600, color: '#CCCCCC', minWidth: '20px' }}>{num}</span>
        <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '15px', fontWeight: 500, color: '#111111' }}>{title}</span>
      </div>
      <div style={{ padding: '16px 20px', background: '#FAFAFA' }}>
        <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 400, lineHeight: 1.7, color: '#444444', margin: 0, whiteSpace: 'pre-wrap' as const }}>{prompt}</p>
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
                Prompts
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                10 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              30 prompts de Claude para equipos de marketing (listos para copiar)
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              Prompts reales, probados en entornos de trabajo. Desde creación de contenido hasta análisis de campañas y system prompts para configurar a Claude como miembro de tu equipo de marketing.
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
              La diferencia entre un prompt que funciona y uno que produce resultados genéricos no está en la longitud ni en la sofisticación: está en el contexto. Claude necesita saber quién eres, para quién escribes, qué objetivo tienes y qué restricciones aplican. Un prompt que incluye esa información produce resultados que puedes usar directamente. Un prompt que no la incluye produce el promedio de internet.
            </p>
            <p style={bodyText}>
              Estos 30 prompts están diseñados para sustituir los placeholders entre corchetes con la información de tu empresa o proyecto. Son plantillas, no magia: funcionan cuando les das el contexto que necesitan.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '20px 24px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', marginBottom: '8px' }}>Nota de uso</p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, lineHeight: 1.6, color: '#555555', margin: 0 }}>
                En los prompts encontrarás texto entre corchetes [como este]. Sustitúyelo siempre por información real antes de usar el prompt. Cuanto más específico y detallado seas en esas partes, mejor será el resultado.
              </p>
            </div>

            <h2 style={h2Style}>Prompts para creación de contenido (1-8)</h2>

            <PromptCard
              num="01"
              title="Post de LinkedIn desde un insight de negocio"
              prompt={`Escribe un post de LinkedIn basado en este insight: [describe el insight o aprendizaje que quieres compartir].

Empresa: [nombre y sector]
Audiencia objetivo: [perfil del lector ideal: cargo, sector, intereses]
Tono: profesional pero cercano, sin jerga corporativa
Estructura: abre con una frase que detenga el scroll, desarrolla el insight en 3-4 párrafos cortos, cierra con una pregunta a la audiencia
Longitud: 200-250 palabras
No uses emojis ni bullets. Escribe en primera persona del singular.`}
            />

            <PromptCard
              num="02"
              title="Newsletter semanal desde puntos clave"
              prompt={`Redacta una newsletter semanal para [nombre de empresa/marca] a partir de estos puntos clave: [lista los 3-5 temas o noticias que quieres cubrir esta semana].

Audiencia: [describe a tus suscriptores: quiénes son, qué les interesa]
Tono de voz: [describe el tono: informal/formal, cercano/experto, etc.]
Estructura: saludo breve personalizado, sección principal (200-250 palabras sobre el tema principal), sección rápida con 2-3 noticias breves, cierre con CTA
Incluye una frase de asunto para el email que genere apertura.`}
            />

            <PromptCard
              num="03"
              title="Hilo de Twitter/X desde un artículo largo"
              prompt={`Convierte este artículo en un hilo de Twitter/X de 8-10 tweets: [pega el artículo o resume los puntos principales].

Audiencia: [describe a tus seguidores]
Tono: [conversacional/educativo/provocador]
Reglas:
- Primer tweet: gancho fuerte que no revela todo
- Tweets 2-8: un punto por tweet, máximo 240 caracteres
- Último tweet: conclusión + CTA o pregunta
- No empieces tweets con "Y además" ni conectores débiles
- Numera los tweets (1/10, 2/10, etc.)`}
            />

            <PromptCard
              num="04"
              title="Descripción de producto para e-commerce"
              prompt={`Escribe una descripción de producto para [nombre del producto] para nuestra tienda online.

Datos del producto:
- Características principales: [lista las características]
- Beneficios clave: [qué problema resuelve o qué mejora]
- Cliente ideal: [describe quién lo compra y por qué]
- Precio: [rango de precio, si es relevante para el tono]
- Diferenciación: [qué lo hace diferente de alternativas]

Estructura: título SEO (máx 60 caracteres), subtítulo de beneficio (máx 20 palabras), descripción de 80-100 palabras enfocada en beneficios, 4-5 bullet points de características técnicas.`}
            />

            <PromptCard
              num="05"
              title="Bio de empresa en 3 versiones"
              prompt={`Escribe 3 versiones de la bio corporativa de [nombre de empresa] para diferentes contextos.

Empresa: [descripción de lo que hace la empresa]
Fundación: [año]
Lo que nos diferencia: [1-2 elementos diferenciadores]
Tono de marca: [formal/cercano/experto/innovador]

Versión 1 (corta - 1 frase, para perfiles sociales): máx 160 caracteres
Versión 2 (media - para About page): 80-100 palabras
Versión 3 (larga - para presentaciones y dossiers): 200-250 palabras con historia, misión y logros clave`}
            />

            <PromptCard
              num="06"
              title="Copy para anuncio de Meta con CTA"
              prompt={`Crea 3 variantes de copy para anuncio de Meta (Facebook/Instagram) para [nombre del producto/servicio].

Audiencia del anuncio: [describe el segmento: edad, intereses, comportamientos]
Objetivo del anuncio: [tráfico / conversiones / generación de leads]
Oferta o propuesta de valor: [qué ofreces y por qué ahora]
CTA deseado: [qué quieres que haga: comprar, registrarse, descargar, etc.]

Para cada variante:
- Headline (máx 40 caracteres)
- Texto principal (máx 125 caracteres para la vista previa)
- Descripción (máx 30 caracteres)
- CTA button text

Varía el enfoque: beneficio emocional / prueba social / urgencia`}
            />

            <PromptCard
              num="07"
              title="Email de bienvenida para nuevo suscriptor"
              prompt={`Escribe el email de bienvenida para nuevos suscriptores de [nombre de empresa/newsletter].

Quiénes somos: [descripción breve de tu empresa o newsletter]
Qué recibirán: [frecuencia y tipo de contenido que envías]
Qué les prometemos: [el valor concreto que obtendrán siendo suscriptores]
Primer paso que queremos que den: [CTA del email: leer artículo, unirse a comunidad, etc.]
Tono: [cálido/profesional/directo/educativo]

Estructura: asunto de email que genere apertura, saludo personalizado con nombre, párrafo de bienvenida (2-3 líneas), qué esperar de nosotros (3-4 líneas), CTA claro, firma.`}
            />

            <PromptCard
              num="08"
              title="Guion de 60 segundos para vídeo de producto"
              prompt={`Escribe un guion de 60 segundos para un vídeo de presentación de [nombre del producto/servicio].

Plataforma: [YouTube / Instagram Reels / LinkedIn / presentación interna]
Audiencia: [describe al espectador objetivo]
Problema que resuelve: [el pain point principal]
Solución que ofreces: [cómo lo resuelves]
Prueba o resultado: [dato, testimonio o demostración que respalda]
CTA final: [qué quieres que haga el espectador]

Formato del guion: separa por segundos (0-5s: hook, 5-20s: problema, 20-45s: solución y prueba, 45-55s: beneficio principal, 55-60s: CTA). Incluye notas de dirección entre paréntesis.`}
            />

            <h2 style={h2Style}>Prompts para análisis y reporting (9-14)</h2>

            <PromptCard
              num="09"
              title="Análisis de métricas de campaña con recomendaciones"
              prompt={`Analiza los resultados de esta campaña y dame recomendaciones accionables:

Campaña: [nombre y objetivo]
Período: [fechas]
Canal: [Meta / Google / Email / etc.]
Métricas principales: [pega los datos: CTR, conversiones, CPL, ROAS, etc.]
Presupuesto invertido: [cantidad]
Benchmark del sector si lo conoces: [o indica "no disponible"]

Necesito:
1. Diagnóstico de qué funcionó y qué no, con datos
2. Las 3 hipótesis principales sobre por qué los resultados son los que son
3. Las 5 acciones concretas para mejorar en la próxima campaña
4. Una métrica de éxito para cada acción recomendada`}
            />

            <PromptCard
              num="10"
              title="Resumen ejecutivo de resultados para dirección"
              prompt={`Transforma estos datos de marketing en un resumen ejecutivo de una página para el comité de dirección:

[Pega aquí los datos o el informe que tienes]

Contexto:
- Período: [mes/trimestre/año]
- Objetivos del período: [cuáles eran los KPIs objetivo]
- Presupuesto: [qué se invirtió]

El resumen debe:
- Empezar con la conclusión principal (una frase)
- Comparar con período anterior y con objetivo
- Destacar 2-3 logros clave con datos
- Señalar 1-2 áreas de mejora con causa identificada
- Proponer los próximos pasos
- Tono: directo, sin jerga de marketing, orientado a negocio
- Extensión: máx 300 palabras`}
            />

            <PromptCard
              num="11"
              title="Análisis de competidor desde su web"
              prompt={`Analiza el posicionamiento de [nombre del competidor] como si fueras un consultor de estrategia.

Web del competidor: [URL]
Nuestro contexto: [describe brevemente tu empresa y mercado]
Lo que más me interesa entender: [propuesta de valor / precios / mensajes clave / audiencia objetivo]

[Si no puedes acceder a la URL, pega aquí fragmentos de su web o descripción de lo que has observado]

Necesito:
- Su propuesta de valor principal en una frase
- A qué audiencia se dirigen según su mensaje
- Sus 3-4 mensajes clave
- Puntos de diferenciación vs nosotros (o vs el mercado)
- Oportunidades de posicionamiento que dejan libres`}
            />

            <PromptCard
              num="12"
              title="Plan de contenidos mensual con calendario"
              prompt={`Crea un plan de contenidos para [nombre de empresa/marca] para el mes de [mes].

Canales activos: [lista los canales: blog, LinkedIn, Instagram, newsletter, etc.]
Frecuencia por canal: [cuántas piezas por canal al mes]
Objetivo del mes: [awareness / generación de leads / retención / lanzamiento de producto]
Tema o campaña principal: [si hay un tema central del mes]
Audiencia objetivo: [a quién nos dirigimos]

Para cada pieza incluye:
- Fecha de publicación
- Canal
- Tipo de contenido (artículo, carrusel, vídeo corto, etc.)
- Tema/título tentativo
- Objetivo específico de esa pieza
- KPI para medirla`}
            />

            <PromptCard
              num="13"
              title="A/B test: análisis de versión ganadora y aprendizajes"
              prompt={`Analiza este A/B test y extrae aprendizajes accionables:

Qué se testeó: [describe las dos versiones]
Versión A: [descripción] → resultado: [métrica]
Versión B: [descripción] → resultado: [métrica]
Tamaño de muestra: [número de usuarios/impresiones por versión]
Duración: [días/semanas]
Confianza estadística: [si la tienes]

Necesito:
1. ¿Hay un ganador estadísticamente significativo?
2. Por qué crees que ganó la versión ganadora (hipótesis)
3. Qué aprendemos sobre nuestra audiencia de este resultado
4. Cómo aplicamos este aprendizaje más allá de este test
5. Siguiente test que recomendarías hacer`}
            />

            <PromptCard
              num="14"
              title="Informe de tendencias de sector"
              prompt={`Elabora un informe de tendencias para [nombre del sector] en 2026.

Contexto de mi empresa: [qué haces y para quién]
Audiencia del informe: [equipo interno / clientes / inversores]
Fuentes que puedo proporcionarte: [si tienes datos propios, pégalos aquí]

Estructura del informe:
1. Resumen ejecutivo (3-4 tendencias clave en una frase cada una)
2. Tendencia 1: contexto, datos de soporte, implicaciones para empresas como la nuestra
3. Tendencia 2: ídem
4. Tendencia 3: ídem
5. Oportunidades que abren estas tendencias
6. Riesgos a monitorizar
7. Recomendaciones para los próximos 6 meses`}
            />

            <h2 style={h2Style}>Prompts para estrategia y planificación (15-20)</h2>

            <PromptCard
              num="15"
              title="Brief de campaña desde un objetivo de negocio"
              prompt={`Crea un brief de campaña de marketing a partir de este objetivo de negocio: [describe el objetivo: incrementar ventas un X%, lanzar un nuevo producto, entrar en un nuevo mercado, etc.].

Empresa: [nombre y sector]
Presupuesto aproximado: [rango]
Plazo: [cuándo necesitas resultados]
Recursos disponibles: [equipo interno, agencia externa, influencers, etc.]

El brief debe incluir:
- Objetivo de marketing (derivado del objetivo de negocio)
- Audiencia objetivo principal y secundaria
- Insight sobre la audiencia que fundamenta la estrategia
- Propuesta creativa (concepto central)
- Mix de canales recomendado con justificación
- KPIs principales y secundarios
- Timing y fases
- Presupuesto tentativo por canal`}
            />

            <PromptCard
              num="16"
              title="Buyer personas desde descripción de producto"
              prompt={`Define 3 buyer personas para [nombre del producto/servicio].

Descripción del producto: [qué es, qué problema resuelve, a qué precio]
Clientes actuales que ya tienes (si los hay): [describe 2-3 tipos de cliente que ya compran]
Mercado objetivo: [geográfico, tamaño de empresa si es B2B, demografía si es B2C]

Para cada persona incluye:
- Nombre y perfil demográfico
- Cargo o situación vital
- Objetivo principal (qué quiere conseguir)
- Frustración principal (qué le bloquea)
- Por qué nuestro producto le ayuda
- Dónde consume información
- Objeción principal antes de comprar
- Cómo llegó a nosotros (canal típico)`}
            />

            <PromptCard
              num="17"
              title="Propuesta de valor en una frase"
              prompt={`Crea 5 versiones de la propuesta de valor de [nombre de empresa/producto] en una frase.

Qué hacemos: [descripción]
Para quién: [audiencia principal]
Qué problema resuelve: [pain point principal]
Por qué somos diferentes: [diferenciación clave vs alternativas]
Prueba o credencial: [dato, número de clientes, logro]

Para cada versión usa una estructura diferente:
1. [Verbo] + [beneficio] + [para quién] + [diferenciador]
2. [Problema] + [nuestra solución] en [tiempo/resultado]
3. La única [categoría] que [beneficio diferencial]
4. [Número/dato] + [resultado] + sin [pain point]
5. Libre: la más memorable que se te ocurra`}
            />

            <PromptCard
              num="18"
              title="Estrategia de contenidos para un trimestre"
              prompt={`Diseña una estrategia de contenidos para [nombre de empresa] para el próximo trimestre.

Contexto:
- Sector: [sector]
- Objetivo de negocio del trimestre: [objetivo]
- Recursos: [equipo de 1/2/3 personas, horas dedicadas a contenido por semana]
- Canales actuales: [lista]
- Fortalezas de contenido: [en qué somos buenos o tenemos autoridad]
- Público objetivo: [descripción]

Estructura la estrategia en:
1. Pilares de contenido (3-4 temas centrales que nos posicionan)
2. Formatos prioritarios por canal con justificación
3. Frecuencia realista dado el equipo disponible
4. Un tema de contenido al mes para cada pilar
5. Cómo medir si la estrategia funciona (KPIs por objetivo)`}
            />

            <PromptCard
              num="19"
              title="Key messages diferenciados por audiencia"
              prompt={`Define los mensajes clave de [empresa/producto/campaña] para 3 audiencias diferentes.

Propuesta de valor general: [descripción de lo que ofreces]
Audiencia 1: [perfil 1, ej: directores de IT]
Audiencia 2: [perfil 2, ej: directores financieros]
Audiencia 3: [perfil 3, ej: usuarios finales]

Para cada audiencia:
- Mensaje principal (una frase que conecta con su prioridad)
- Beneficio principal que les importa a ellos específicamente
- Objeción que anticipamos y cómo la respondemos
- Prueba o evidencia más relevante para este perfil
- Tono y lenguaje que usar con ellos`}
            />

            <PromptCard
              num="20"
              title="Plan de crisis de comunicación"
              prompt={`Elabora un plan de respuesta de comunicación ante esta situación de crisis: [describe la situación: queja viral, problema de producto, cobertura negativa en medios, etc.].

Empresa: [nombre y sector]
Magnitud estimada: [local/nacional, número de personas afectadas, cobertura mediática]
Hechos conocidos: [qué sabemos con certeza]
Incertidumbres: [qué no sabemos todavía]
Audiencias afectadas: [clientes, empleados, medios, inversores]

El plan debe incluir:
- Primer comunicado (primeras 2 horas): qué decir cuando aún no tienes toda la información
- Comunicado oficial (primeras 24 horas): posición oficial y acciones que tomamos
- Mensajes diferenciados por audiencia
- Lo que NO debemos decir y por qué
- Plan de seguimiento en los próximos 7 días`}
            />

            <h2 style={h2Style}>Prompts para SEO y contenido web (21-26)</h2>

            <PromptCard
              num="21"
              title="Artículo SEO desde keyword e intención de búsqueda"
              prompt={`Escribe un artículo SEO sobre [keyword principal] para [nombre de empresa/blog].

Keyword principal: [keyword]
Keywords secundarias: [2-3 keywords relacionadas]
Intención de búsqueda: [informacional / transaccional / navegacional / comparativa]
Audiencia: [describe al lector]
Longitud objetivo: [1.200 / 1.500 / 2.000+ palabras]
Tono: [experto/divulgativo/práctico]

Estructura: título H1 con keyword, introducción de 150 palabras que captura la intención, 4-6 secciones H2 con subtemas relevantes, al menos 2 secciones H3 en las más desarrolladas, conclusión con resumen y CTA. Incluye una propuesta de meta description (máx 155 caracteres).`}
            />

            <PromptCard
              num="22"
              title="Meta descriptions para múltiples páginas"
              prompt={`Escribe meta descriptions SEO optimizadas para estas páginas de [nombre de web]:

[Para cada página indica:]
Página: [nombre o URL]
Keyword objetivo: [keyword]
Propuesta de valor o contenido principal: [descripción breve]

Reglas para cada meta description:
- Máximo 155 caracteres
- Incluir keyword objetivo de forma natural
- Añadir un beneficio claro para el usuario
- Terminar con un call to action implícito o explícito
- No duplicar entre páginas
- Tono consistente con la marca: [describe el tono]`}
            />

            <PromptCard
              num="23"
              title="Cluster de contenidos desde keyword principal"
              prompt={`Diseña un cluster de contenidos SEO para posicionar [nombre de empresa/blog] en la keyword: [keyword principal].

Contexto:
- Sector: [sector]
- Nivel de autoridad actual: [bajo/medio/alto]
- Capacidad de producción: [número de artículos al mes]

Entrega:
1. Pillar page: título, keyword principal, estructura propuesta, intención de búsqueda
2. 8-10 cluster pages: keyword, intención, relación con la pillar, longitud recomendada
3. Internal linking strategy: cómo enlazar entre pillar y clusters
4. Priorización: en qué orden crear el contenido y por qué`}
            />

            <PromptCard
              num="24"
              title="FAQ desde las preguntas más comunes de clientes"
              prompt={`Crea una sección de FAQ para [nombre de empresa/producto] a partir de estas preguntas reales de clientes: [lista las preguntas que recibes más frecuentemente de clientes o prospectos].

Tono: [formal/cercano]
Extensión por respuesta: [2-4 frases / párrafo completo]
Objetivo: [reducir dudas pre-compra / soporte post-venta / SEO]

Para cada pregunta:
- Reformula la pregunta si hace falta para que sea más clara
- Responde de forma directa en la primera frase
- Añade el contexto necesario pero sin exceso
- Si aplica, añade un enlace interno o CTA al final

Organiza las FAQs en categorías lógicas si hay más de 8 preguntas.`}
            />

            <PromptCard
              num="25"
              title="Texto de landing page orientado a conversión"
              prompt={`Escribe el texto completo de una landing page para [nombre del producto/servicio/oferta].

Objetivo de conversión: [registro / compra / demo / descarga]
Audiencia: [describe al visitante que llega a esta página]
Propuesta de valor: [qué ofrecemos y por qué es relevante para ellos]
Precio o condiciones: [si aplica]
Prueba social disponible: [testimonios, números de clientes, logos de empresa, etc.]
Objeciones principales: [qué les frena para convertir]

Estructura de la landing:
- Headline principal (beneficio, no descripción)
- Subheadline (contexto y audiencia)
- 3 bullet points de beneficios clave
- Sección de cómo funciona (3 pasos)
- Prueba social
- Sección de objeciones respondidas
- CTA principal con texto del botón
- CTA secundario si aplica`}
            />

            <PromptCard
              num="26"
              title="Revisión SEO y de conversión de un texto existente"
              prompt={`Revisa este texto de [tipo de página: homepage, landing, about, etc.] y dame recomendaciones concretas de mejora SEO y de conversión:

[Pega aquí el texto actual]

Keyword objetivo: [keyword]
URL: [si aplica]
Objetivo de la página: [conversión, información, posicionamiento]

Necesito:
1. Problemas SEO: keywords no optimizadas, estructura de headings, densidad de keyword
2. Problemas de conversión: claridad del mensaje, CTA, propuesta de valor
3. Problemas de copy: frases débiles, vaguedad, lenguaje corporativo vacío
4. Versión mejorada de los 3 elementos más críticos que hayas identificado`}
            />

            <h2 style={h2Style}>System prompts para configurar Claude como miembro de tu equipo (27-30)</h2>

            <p style={bodyText}>
              Los system prompts son instrucciones que se configuran en Claude una sola vez y definen cómo debe comportarse en todas las conversaciones siguientes. Son la forma más potente de usar Claude porque permiten no tener que repetir contexto en cada conversación.
            </p>

            <PromptCard
              num="27"
              title="System prompt: redactor con brand voice de tu empresa"
              prompt={`Eres el redactor de contenidos de [nombre de empresa]. Cuando redactes cualquier pieza de contenido:

TONO DE VOZ: [describe el tono: directo, sin rodeos, amigable pero experto. No usamos jerarquía corporativa ni lenguaje inflado.]

PALABRAS QUE USAMOS: [lista de términos o expresiones característicos de tu marca]

PALABRAS QUE EVITAMOS: [lista de palabras o expresiones que no encajan con tu marca, ej: sinergia, soluciones integrales, de vanguardia, ecosistema]

AUDIENCIA: escribimos siempre para [describe tu audiencia principal].

ESTRUCTURA: preferimos frases cortas (máx 20 palabras). Párrafos de máx 3-4 líneas. Títulos que dicen lo que el lector va a aprender.

Cuando recibas una petición de redacción, pregunta si necesitas más contexto antes de empezar. Si el brief es suficiente, empieza directamente con el contenido.`}
            />

            <PromptCard
              num="28"
              title="System prompt: analista de marketing de tu empresa"
              prompt={`Eres el analista de marketing de [nombre de empresa]. Cuando analices datos o resultados de campañas:

CONTEXTO DE NEGOCIO:
- Sector: [sector]
- Modelo de negocio: [B2B/B2C, ticket medio, ciclo de venta]
- Canales principales: [lista]
- KPIs que más importan a dirección: [lista]

FORMA DE ANALIZAR:
1. Empieza siempre con la conclusión principal, no con los datos
2. Relaciona los resultados con el objetivo de negocio, no solo con métricas de marketing
3. Diferencia entre lo que sabemos con certeza y lo que son hipótesis
4. Termina siempre con 3 acciones concretas y priorizadas

FORMATO DE RESPUESTA: usa tablas cuando compares datos. Usa bullet points para listas de acciones. Párrafos para análisis narrativo. Nunca más de 400 palabras en un análisis de campaña estándar.`}
            />

            <PromptCard
              num="29"
              title="System prompt: gestor de redes sociales de tu empresa"
              prompt={`Gestionas las redes sociales de [nombre de empresa]. Para cada red tienes instrucciones específicas:

LINKEDIN:
- Tono: experto y cercano. Primera persona del singular.
- Evita: lenguaje corporativo, hashtags en exceso (máx 3), emojis
- Siempre cierra con una pregunta o reflexión que invite al comentario

INSTAGRAM:
- Tono: [describe el tono para Instagram]
- Formato: primeras 2 líneas deben funcionar antes del "ver más"
- Hashtags: [número] hashtags relevantes, no genéricos

NEWSLETTER:
- Tono: conversacional, como si escribieras a un amigo que conoce tu sector
- Estructura siempre: gancho, desarrollo, acción

Cuando te pida un post para una red sin especificar la red, pregunta. Cuando te pida contenido para varias redes a la vez, adapta el formato y tono para cada una.`}
            />

            <PromptCard
              num="30"
              title="System prompt: estratega de contenidos para el equipo"
              prompt={`Eres el estratega de contenidos de [nombre de empresa]. Tu rol es ayudar al equipo a tomar mejores decisiones sobre qué contenido crear y por qué.

CONTEXTO ESTRATÉGICO:
- Objetivos de marketing del año: [lista]
- Posicionamiento que queremos: [cómo queremos que nos vean en el mercado]
- Competidores principales: [lista]
- Gaps de posicionamiento que queremos cubrir: [describe]

CÓMO RESPONDER A PETICIONES DE CONTENIDO:
1. Antes de dar una respuesta táctica, conecta la petición con el objetivo estratégico
2. Si hay una forma mejor de conseguir el objetivo que la pedida, menciónala
3. Cuando valides una idea de contenido, explica también a qué objetivo sirve y cómo lo medirías
4. Si una idea de contenido no sirve al posicionamiento o los objetivos, dilo con claridad y propón una alternativa

Eres un asesor estratégico, no un ejecutor. Tu valor es la perspectiva, no solo la producción.`}
            />

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px', marginTop: '48px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                Aprende a crear tus propios system prompts
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                Los system prompts de los prompts 27-30 son los que más valor generan a largo plazo: los configuras una vez y el equipo los usa para siempre. En nuestra formación enseñamos a diseñarlos para los casos de uso específicos de tu empresa.
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
              Formación Claude para equipos de marketing
            </span>
            <h2 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '24px' }}>
              De usar prompts de lista a dominar la herramienta de verdad.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Los mejores resultados con Claude vienen de entender cómo piensa, no de copiar prompts. Formamos a equipos de marketing para que lleguen a ese nivel.
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

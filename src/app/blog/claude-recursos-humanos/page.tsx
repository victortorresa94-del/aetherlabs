import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Cómo Usar Claude en Recursos Humanos: Guía Práctica 2026 | Aether Labs',
  description: 'Guía práctica para usar Claude en RRHH. Selección, onboarding, formación interna, evaluaciones y comunicación con empleados. Con ejemplos reales.',
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
                9 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              Cómo usar Claude en Recursos Humanos: guía práctica para 2026
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              RRHH es uno de los departamentos con más tareas de texto repetitivo y alto impacto en la empresa. Selección, onboarding, evaluaciones, comunicación interna. Todo esto tiene un potencial enorme con Claude, si sabes cómo usarlo.
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
              Los departamentos de Recursos Humanos suelen operar con equipos reducidos gestionando un volumen enorme de comunicaciones, documentos y procesos que implican a toda la organización. La oferta de empleo que tiene que atraer al perfil correcto, el proceso de criba de cien candidaturas, el plan de onboarding que debe personalizar para cada nuevo empleado, la política de teletrabajo que tiene que estar escrita de forma que la entienda todo el mundo.
            </p>
            <p style={bodyText}>
              Todas estas tareas tienen algo en común: son intensivas en texto y siguen estructuras reconocibles. Exactamente el tipo de trabajo donde Claude puede actuar como multiplicador de capacidad del equipo de RRHH, sin necesidad de integraciones técnicas ni presupuestos de IT.
            </p>

            <h2 style={h2Style}>Selección y reclutamiento</h2>

            <h3 style={h3Style}>Criba de CVs con criterios objetivos</h3>
            <p style={bodyText}>
              La criba de candidaturas es una de las tareas más intensivas en tiempo de cualquier proceso de selección. Para una posición con 100 o más candidaturas, el técnico de selección puede pasar dos días completos revisando CVs, con el riesgo añadido de que los criterios de evaluación derivan a lo largo del proceso: los candidatos revisados el primer día se evalúan con un criterio ligeramente diferente al del tercer día, simplemente por el efecto del cansancio y la comparación relativa.
            </p>
            <p style={bodyText}>
              Con Claude puedes definir un scorecard objetivo antes de empezar. Describes los criterios de selección, los requisitos mínimos y los diferenciadores positivos, y Claude evalúa cada CV contra ese baremo. El resultado no es la decisión de quién pasa a la siguiente fase: esa decisión sigue siendo tuya. El resultado es una evaluación estructurada y consistente que te permite priorizar a quién revisar con más atención.
            </p>
            <p style={bodyText}>
              Una aclaración importante sobre sesgos: Claude no elimina los sesgos en selección, porque los sesgos pueden estar en los criterios que defines. Pero sí puede ayudarte a aplicar los mismos criterios de forma consistente a todos los candidatos, y puede señalarte si los criterios que has definido podrían introducir sesgos indirectos (por ejemplo, exigir cierta formación universitaria para un rol donde la experiencia equivalente tendría el mismo valor).
            </p>

            <h3 style={h3Style}>Redacción de ofertas de trabajo que atraen buenos candidatos</h3>
            <p style={bodyText}>
              La mayoría de las ofertas de trabajo están redactadas pensando en describir el puesto, no en atraer al candidato ideal. Claude puede ayudarte a escribir ofertas que hablen directamente a los motivadores del perfil que buscas, que presenten la empresa desde sus fortalezas reales y que usen el lenguaje del sector donde buscas talento.
            </p>

            <h3 style={h3Style}>Preparación de entrevistas por competencias</h3>
            <p style={bodyText}>
              Con Claude puedes generar el banco de preguntas de entrevista por competencias para cada proceso de selección. Defines las competencias que quieres evaluar y Claude genera preguntas situacionales con la escala STAR, indicadores de respuesta positiva y banderas de alerta. Esto estandariza el proceso y facilita la formación de managers que hacen entrevistas de forma esporádica.
            </p>

            <h2 style={h2Style}>Onboarding de nuevas incorporaciones</h2>

            <h3 style={h3Style}>Planes de onboarding personalizados por rol</h3>
            <p style={bodyText}>
              El onboarding genérico tiene tasas de retención bajas porque no conecta con la realidad del rol específico. Con Claude puedes generar planes de 30-60-90 días personalizados para cada nueva incorporación, con tareas concretas para cada semana, objetivos de aprendizaje medibles y reuniones clave a agendar con personas de referencia.
            </p>
            <p style={bodyText}>
              El proceso es sencillo: describes el rol, el equipo al que se incorpora, la experiencia previa del nuevo empleado y la empresa, y Claude genera un plan estructurado. El técnico de RRHH revisa y ajusta los detalles específicos de la empresa. Tiempo de generación de un plan completo: menos de 15 minutos en lugar de las 2-3 horas que cuesta redactarlo desde cero.
            </p>

            <h3 style={h3Style}>Manual del empleado en lenguaje comprensible</h3>
            <p style={bodyText}>
              Los manuales del empleado suelen estar escritos en lenguaje jurídico-administrativo que nadie lee. Con Claude puedes reescribirlos en un tono que la gente real quiera leer, manteniendo el rigor del contenido pero eliminando la opacidad del lenguaje corporativo. También puedes usarlo para actualizar secciones específicas cuando cambian las políticas, en lugar de tener que reescribir el documento entero.
            </p>

            <h2 style={h2Style}>Gestión del equipo y comunicación interna</h2>

            <h3 style={h3Style}>Comunicados internos que la gente realmente lee</h3>
            <p style={bodyText}>
              La comunicación interna tiene un problema de apertura: los empleados reciben tantos emails internos que la mayoría los archivan sin leer. Claude puede ayudarte a escribir comunicados que empiecen con lo más importante, que sean concisos y que usen el tono de tu empresa. No es solo edición de estilo: es reordenar la información para que el mensaje clave llegue primero y la gente sepa qué acción se espera de ella.
            </p>

            <h3 style={h3Style}>Políticas de empresa en lenguaje humano</h3>
            <p style={bodyText}>
              Cuando la empresa actualiza su política de teletrabajo, su política de gastos o sus normas de uso de herramientas digitales, el borrador inicial suele estar lleno de condicionantes, excepciones y lenguaje legal. Claude puede transformar ese borrador en un documento claro, con ejemplos concretos que ilustren las situaciones habituales, y con una sección de preguntas frecuentes que anticipe las dudas más comunes.
            </p>

            <h3 style={h3Style}>Encuestas de clima laboral y análisis de resultados</h3>
            <p style={bodyText}>
              Claude puede ayudarte a diseñar encuestas de clima laboral con preguntas que realmente captan lo que quieres medir, sin sesgos de formulación. Y cuando tienes los resultados, puede ayudarte a analizar las respuestas abiertas de forma sistemática, identificando los temas recurrentes, el tono general y las áreas que requieren atención prioritaria.
            </p>

            <h2 style={h2Style}>Evaluaciones de desempeño</h2>

            <h3 style={h3Style}>Redactar evaluaciones constructivas</h3>
            <p style={bodyText}>
              Las evaluaciones de desempeño son difíciles de escribir bien: tienen que ser honestas pero constructivas, específicas pero no hirientes, orientadas al futuro pero ancladas en hechos del pasado. Claude puede ayudar a los managers a transformar sus notas y observaciones en evaluaciones escritas que cumplan todos esos requisitos.
            </p>
            <p style={bodyText}>
              El proceso habitual: el manager describe en conversación libre sus observaciones sobre el empleado, sus fortalezas y las áreas de mejora. Claude estructura esa información en una evaluación formal con el tono y la estructura que define el departamento de RRHH. El manager revisa y ajusta hasta que refleja fielmente su criterio. Tiempo ahorrado: entre 30 y 60 minutos por evaluación, que en empresas con decenas de empleados suma semanas de trabajo.
            </p>

            <h3 style={h3Style}>Objetivos SMART con Claude</h3>
            <p style={bodyText}>
              Uno de los problemas más comunes en los procesos de evaluación es que los objetivos del período anterior no están bien definidos, lo que hace imposible una evaluación objetiva del rendimiento. Claude puede ayudarte a revisar los objetivos propuestos y a transformarlos en objetivos SMART (Específicos, Medibles, Alcanzables, Relevantes y con Plazo), señalando cuándo un objetivo es demasiado vago o cuando el indicador de medición no es realista.
            </p>

            <h2 style={h2Style}>Formación interna</h2>

            <h3 style={h3Style}>Materiales de formación desde el conocimiento experto del equipo</h3>
            <p style={bodyText}>
              Documentar el conocimiento experto de la empresa es una de las tareas más valiosas y más postergadas. El experto tiene el conocimiento en la cabeza pero no tiene tiempo para documentarlo. Con Claude puedes grabar una conversación con el experto, transcribirla y transformar esa transcripción en un material de formación estructurado: guía paso a paso, módulo de e-learning, documento de referencia.
            </p>

            <h3 style={h3Style}>Quizzes y tests de conocimiento para comprobar la asimilación</h3>
            <p style={bodyText}>
              Una vez que tienes el material de formación, Claude puede generar en minutos un banco de preguntas de evaluación con distintos formatos: opción múltiple, verdadero/falso, casos prácticos. Define el nivel de dificultad, las áreas que quieres evaluar y Claude genera el test. Puedes usarlo para verificar que la formación ha llegado bien antes de que el empleado empiece a aplicarla.
            </p>

            <h2 style={h2Style}>Lo que Claude NO puede hacer en RRHH</h2>
            <p style={bodyText}>
              Ser claro sobre los límites de Claude en RRHH es tan importante como describir sus capacidades. Hay cosas que Claude no debe hacer en este ámbito, independientemente de que técnicamente pueda hacerlas:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Tomar decisiones sobre personas: Claude puede estructurar información y facilitar decisiones, pero la decisión de contratar, promocionar, sancionar o despedir a alguien siempre debe ser humana. El criterio de un gestor de personas no puede delegarse en un modelo de IA.',
                'Reemplazar el juicio en conversaciones sensibles: las conversaciones difíciles con empleados (rendimiento bajo, conflictos, situaciones personales que afectan al trabajo) requieren presencia humana y empatía. Claude puede ayudarte a preparar esas conversaciones, no a tenerlas.',
                'Gestionar datos sensibles sin protocolo: los datos de empleados son especialmente sensibles bajo el RGPD. Claude no debe recibir datos personales identificables (nombre completo, DNI, datos de salud) sin que exista un protocolo claro de protección de datos.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <h2 style={h2Style}>Protocolo de privacidad para RRHH con IA</h2>
            <p style={bodyText}>
              Antes de usar Claude con información de empleados, el departamento de RRHH debe definir un protocolo básico de uso:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Anonimiza los datos antes de introducirlos: en lugar de "Juan García, 34 años, de baja por ansiedad", usa "candidato perfil A, 30-35 años, situación médica en curso". El análisis es igual de valioso y el riesgo de datos es mucho menor.',
                'No subas documentos de empleados con datos identificativos: si necesitas analizar un expediente o una evaluación, extrae la información relevante en texto anonimizado antes de introducirla en Claude.',
                'RGPD y IA en selección: la normativa europea sobre IA aplicada a decisiones de personal está evolucionando rápido. Si usas IA en selección, documenta el proceso y asegúrate de que la decisión final siempre la toma una persona, no el sistema.',
                'Usa el plan de pago de Claude: con el plan gratuito, Anthropic puede usar las conversaciones para mejorar el modelo. Con los planes de pago, esto no ocurre. Para RRHH, usa siempre el plan de pago.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <p style={{ ...bodyText, marginBottom: '48px' }}>
              Claude bien implementado en un departamento de RRHH puede significar la diferencia entre un equipo desbordado que sobrevive al día a día y un equipo que tiene tiempo para trabajar en los proyectos estratégicos que realmente hacen a la empresa mejor empleadora. La palanca no está en la herramienta: está en saber usarla con criterio.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                Formación Claude específica para equipos de RRHH
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                Nuestro programa incluye un módulo específico para RRHH con casos de uso reales, prompts listos para usar y protocolo de privacidad. Formamos al equipo en lo que necesita, no en lo que existe.
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
              Tu equipo de RRHH puede multiplicar su capacidad sin multiplicar su plantilla.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Formamos equipos de RRHH en Claude con los casos de uso específicos de su empresa. Protocolo de privacidad incluido.
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

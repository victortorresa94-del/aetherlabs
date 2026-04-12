'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

interface ProgramData {
  titulo: string;
  audiencia: string;
  subtitulo: string;
  problema: string;
  descripcion: string;
  color: string;
  aprenderas: string[];
  paraQuien: {
    intro: string;
    cards: { titulo: string; desc: string }[];
  };
  formato: {
    duracion: string;
    modalidad: string;
    nivel: string;
    extra?: string;
  };
}

const programas: Record<string, ProgramData> = {
  'empoderate-con-ia': {
    titulo: 'Empodérate con IA',
    audiencia: 'Mujeres 40-60',
    subtitulo: 'Usa la IA para lo que más te importa',
    problema: 'La tecnología avanza rápido y a veces parece que el mundo digital no está diseñado para ti ni para tus necesidades reales.',
    descripcion: 'Salud, creatividad, recuerdos, comunicación. Sin necesitar saber nada de tecnología.',
    color: '#059669',
    aprenderas: [
      'Crear imágenes y vídeos personales con IA generativa',
      'Organizar información de salud y crear GPTs personalizados',
      'Comunicarse mejor: redactar emails, mensajes y resúmenes',
      'Recuperar y organizar recuerdos y fotos antiguas',
      'Aprender a preguntar bien a la IA para obtener lo que necesitas',
    ],
    paraQuien: {
      intro: 'Diseñado para mujeres de 40 a 60 años que quieren aprovechar la IA en su vida cotidiana sin necesitar conocimientos técnicos previos.',
      cards: [
        { titulo: 'Sin experiencia técnica', desc: 'No hace falta saber nada de tecnología. Empezamos desde cero, con tu móvil.' },
        { titulo: 'Aplicación inmediata', desc: 'Cada sesión resuelve algo concreto de tu vida: salud, familia, creatividad.' },
        { titulo: 'Ritmo propio', desc: 'Grupos reducidos con acompañamiento personalizado en cada paso.' },
      ],
    },
    formato: {
      duracion: '10 horas',
      modalidad: 'Presencial o en línea',
      nivel: 'Sin conocimientos previos',
      extra: 'También disponible: Taller de Descubrimiento de 90 minutos para empezar sin compromiso.',
    },
  },
  'conectate-con-el-mundo': {
    titulo: 'Conéctate con el mundo',
    audiencia: 'Personas 65+',
    subtitulo: 'La IA puede ayudarte a estar más cerca de tu familia',
    problema: 'La tecnología avanza y parece que te deja atrás. Las pantallas son confusas y depender siempre de los demás para entenderlas frustra.',
    descripcion: 'A sentirte acompañada y a vivir mejor el día a día.',
    color: '#2563EB',
    aprenderas: [
      'Usar el móvil con asistentes de IA vocalmente: preguntar, buscar, recordar',
      'Videollamar con facilidad y estar en contacto constante con la familia',
      'Pedir recetas, consejos de salud y actividades adaptadas a tu edad',
      'Entender noticias complejas y contenidos largos con resúmenes fáciles',
      'Crear fotos y revivir recuerdos con herramientas visuales simples',
    ],
    paraQuien: {
      intro: 'Para personas mayores de 65 años que quieren ganar independencia digital y conectar mejor con sus seres queridos usando la IA como aliada.',
      cards: [
        { titulo: 'Solo con la voz', desc: 'Aprendemos a usar la IA hablando, sin teclear ni complicarse con pantallas.' },
        { titulo: 'Con la familia en mente', desc: 'Videollamadas, fotos compartidas, mensajes. Todo más fácil y más cercano.' },
        { titulo: 'A tu ritmo', desc: 'Sesiones cortas y repetición. Sin prisa. Con paciencia y respeto total.' },
      ],
    },
    formato: {
      duracion: '10 horas',
      modalidad: 'Presencial (recomendado)',
      nivel: 'Principiante absoluto',
      extra: 'También disponible: Taller de Descubrimiento de 90 minutos para tomar contacto sin barreras.',
    },
  },
  'aprende-a-crear': {
    titulo: 'Aprende a crear',
    audiencia: 'Niños 6-12',
    subtitulo: 'Los niños tienen ideas increíbles. La IA les da las herramientas.',
    problema: 'Pasan horas en pantallas consumiendo contenido pasivamente en lugar de usar su tremenda imaginación para crear.',
    descripcion: 'Cuentos, personajes, música, mundos inventados. Potencia su creatividad, no su pasividad.',
    color: '#F97316',
    aprenderas: [
      'Crear cuentos ilustrados completos desde cero con herramientas visuales',
      'Inventar personajes únicos y darles voz propia',
      'Componer música simple e intuitiva con IA',
      'Construir mundos completos e historias visuales coherentes',
      'Usar la IA como herramienta de creación, no de atajo o sustitución',
    ],
    paraQuien: {
      intro: 'Para niños de 6 a 12 años con ganas de crear. La IA amplifica su imaginación y les enseña a ser autores, no solo consumidores.',
      cards: [
        { titulo: 'Creatividad ante todo', desc: 'La IA es el pincel. La historia, los personajes y el mundo los pone el niño.' },
        { titulo: 'Aprendizaje jugando', desc: 'Todo el programa está diseñado como un juego de creación continua.' },
        { titulo: 'Resultado tangible', desc: 'Al final del programa cada niño tiene su propio cuento ilustrado y proyecto terminado.' },
      ],
    },
    formato: {
      duracion: '8 horas',
      modalidad: 'Presencial en grupos',
      nivel: 'Desde 6 años, sin requisitos',
      extra: 'Formato taller intensivo de fin de semana disponible para colegios y familias.',
    },
  },
  'descubre-tu-futuro': {
    titulo: 'Descubre tu futuro',
    audiencia: 'Jóvenes 13-18',
    subtitulo: 'El sistema educativo no te enseña las profesiones del futuro. Nosotros sí.',
    problema: 'Siguen existiendo carreras y currículums que ya no garantizan un empleo real en el mercado actual dominado por la IA.',
    descripcion: 'Descubre qué se te da bien, qué salidas tiene, y cómo la IA puede llevarte más lejos.',
    color: '#9333EA',
    aprenderas: [
      'Entender qué profesiones y habilidades tienen futuro real e inminente',
      'Usar herramientas de IA para potenciar lo que ya se te da bien de forma natural',
      'Diseñar y crear proyectos propios reales: apps, webs, negocios pequeños',
      'Descubrir cómo emprender proyectos desde tu habitación con bajo coste',
      'Aprender a separar el "hype" de las redes del valor real de la tecnología',
    ],
    paraQuien: {
      intro: 'Para jóvenes de 13 a 18 años que no quieren esperar a que el sistema les diga qué hacer. El futuro se diseña ahora.',
      cards: [
        { titulo: 'Orientación real', desc: 'No hablamos de carreras del pasado. Hablamos de lo que viene y de cómo posicionarte.' },
        { titulo: 'Proyectos propios', desc: 'Cada participante sale con un proyecto real iniciado: app, web o negocio digital.' },
        { titulo: 'Mentalidad creadora', desc: 'De consumidor pasivo a creador activo. Esa es la transformación del programa.' },
      ],
    },
    formato: {
      duracion: '10 horas',
      modalidad: 'Presencial o en línea',
      nivel: 'Sin requisitos previos',
      extra: 'Disponible en formato intensivo de fin de semana o en sesiones semanales.',
    },
  },
  'monta-tu-negocio': {
    titulo: 'Monta tu negocio',
    audiencia: 'Emprendedores',
    subtitulo: 'Crea tu logo, tu web, tus vídeos y tus textos con IA.',
    problema: 'Arrancar una idea cuesta miles de euros en agencias, diseñadores y programadores, creando barreras para validar tu negocio.',
    descripcion: 'Sin contratar a nadie. Sin saber diseño avanzado ni programación. El proyecto en tus manos.',
    color: '#F59E0B',
    aprenderas: [
      'Crear tu propia identidad visual iterativa: logo, paleta, tipografías',
      'Construir una landing page funcional de alta conversión sin tocar código',
      'Generar vídeos promocionales y contenido para redes sociales sin cámara',
      'Escribir textos persuasivos y de ventas usando modelos entrenados',
      'Automatizar procesos básicos: emails, captación del negocio digital',
    ],
    paraQuien: {
      intro: 'Para emprendedores con una idea clara que no quieren depender de agencias ni gastar miles antes de validar si el negocio funciona.',
      cards: [
        { titulo: 'Todo en uno', desc: 'Branding, web, contenido y ventas. El stack completo para lanzar sin fricción.' },
        { titulo: 'Coste cero de producción', desc: 'Con IA puedes tener una identidad visual y web profesional por una fracción del coste.' },
        { titulo: 'Lanzar en semanas', desc: 'Al terminar el programa tienes todo listo para publicar tu negocio al mundo.' },
      ],
    },
    formato: {
      duracion: '10 horas',
      modalidad: 'En línea o presencial',
      nivel: 'Sin conocimientos técnicos',
      extra: 'Sesión de seguimiento post-programa incluida para revisar lo lanzado.',
    },
  },
  'mejora-tu-material': {
    titulo: 'Mejora tu material',
    audiencia: 'Profesores',
    subtitulo: 'Menos tiempo preparando y corrigiendo. Más tiempo enseñando.',
    problema: 'Los docentes dedican incontables horas a preparar clases, corregir y adaptar, robándole tiempo a la enseñanza humana real.',
    descripcion: 'La IA te ayuda a crear mejores materiales, personalizar el contenido y reducir drásticamente la carga burocrática.',
    color: '#06B6D4',
    aprenderas: [
      'Generar materiales didácticos completos adaptados a diferentes niveles',
      'Crear ejercicios interactivos, exámenes diversos y rúbricas al instante',
      'Reducir hasta el 80% el tiempo de corrección estructural usando asistentes',
      'Personalizar contenido concreto para alumnos con necesidades especiales',
      'Usar LLMs en el aula con estudiantes de forma ética, pautada y segura',
    ],
    paraQuien: {
      intro: 'Para docentes de cualquier nivel educativo que quieren recuperar tiempo y dedicarlo a lo que realmente importa: enseñar y conectar con sus alumnos.',
      cards: [
        { titulo: 'Menos burocracia', desc: 'Informes, programaciones, correcciones. La IA hace el trabajo pesado.' },
        { titulo: 'Más personalización', desc: 'Materiales adaptados a cada alumno sin triplicar el tiempo de preparación.' },
        { titulo: 'Uso ético en el aula', desc: 'Aprenderás a integrar la IA en clase de forma responsable y pedagógicamente sólida.' },
      ],
    },
    formato: {
      duracion: '10 horas',
      modalidad: 'En línea o presencial en centro',
      nivel: 'Sin requisitos técnicos',
      extra: 'Formación disponible para claustros completos con descuento por grupo.',
    },
  },
  'mas-tiempo-para-cocina': {
    titulo: 'Más tiempo en cocina',
    audiencia: 'Hostelería',
    subtitulo: 'Gestiona reseñas, crea contenido y atrae más clientes en piloto automático.',
    problema: 'Gestionar el local exige el 100% de tu tiempo, dejando el marketing digital, las redes y las respuestas al cliente abandonadas.',
    descripcion: 'Sin agencias. Sin presupuestos fijos grandes. Con la IA haciendo el trabajo pesado por detrás.',
    color: '#EF4444',
    aprenderas: [
      'Formular respuestas perfectas, cálidas o defensivas a reseñas de Google',
      'Generar copys atractivos y planificar posts de Instagram para tu menú',
      'Gestionar y estructurar la carta digital y actualizarla fácilmente con fotos',
      'Idear promociones virales y ofertas cruzadas con inteligencia de mercado',
      'Establecer auto-respuestas para dudas como horarios, alérgenos o reservas',
    ],
    paraQuien: {
      intro: 'Para propietarios de bares, restaurantes y locales de hostelería que quieren crecer en visibilidad digital sin contratar a nadie más.',
      cards: [
        { titulo: 'Sin agencias', desc: 'Tú controlas tu presencia digital con herramientas simples y potentes.' },
        { titulo: 'Más reseñas positivas', desc: 'Responder bien y rápido a cada reseña multiplica tu reputación online.' },
        { titulo: 'Contenido sin esfuerzo', desc: 'Fotos, textos, stories. La IA te da el material; tú decides cuándo publicar.' },
      ],
    },
    formato: {
      duracion: '6 horas',
      modalidad: 'Presencial en el local o en línea',
      nivel: 'Sin conocimientos previos',
      extra: 'Formato comprimido de un día disponible para negocios con poco tiempo libre.',
    },
  },
  'dedicate-a-la-medicina': {
    titulo: 'Dedícate a la medicina',
    audiencia: 'Médicos y Sanidad',
    subtitulo: 'La burocracia clínica te roba tiempo de medicina real.',
    problema: 'Los profesionales sanitarios pasan la mitad de la consulta tecleando en historiales ineficientes y no mirando al paciente a los ojos.',
    descripcion: 'La IA transcribe, organiza y filtra para que tú vuelvas a centrarte en diagnosticar al paciente.',
    color: '#1D4ED8',
    aprenderas: [
      'Sistemas de transcripción de historial clínico semi-automáticos',
      'Organización inteligente y resumen masivo de historiales extensos urgentes',
      'Asistencia estructural para buscar evidencia médica en papers rápidamente',
      'Redacción plantillada de informes de descarga y documentación repetitiva',
      'Aclaración fundamental de conceptos de privacidad y normativa médica con IA',
    ],
    paraQuien: {
      intro: 'Para médicos, enfermeros y profesionales sanitarios que quieren recuperar tiempo de consulta delegando la burocracia en la IA.',
      cards: [
        { titulo: 'Menos tecleo, más paciente', desc: 'La transcripción automática libera tu atención para quien tienes delante.' },
        { titulo: 'Informes en minutos', desc: 'Plantillas inteligentes que se completan solas con los datos clave.' },
        { titulo: 'Con cumplimiento normativo', desc: 'Aprenderás a usar IA respetando el RGPD y la normativa sanitaria vigente.' },
      ],
    },
    formato: {
      duracion: '8 horas',
      modalidad: 'En línea o en centro sanitario',
      nivel: 'Sin conocimientos de IA',
      extra: 'Formación acreditable para colegios profesionales. Consulta disponibilidad.',
    },
  },
};

export default function ProgramaPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const programa = programas[slug];

  if (!programa) {
    return (
      <div className="v5-page">
        <Navbar />
        <main style={{ paddingTop: '160px', paddingBottom: '120px', backgroundColor: '#080808', minHeight: '60vh' }}>
          <div className="v5-container">
            <Link
              href="/school-lab"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,240,0.4)',
                textDecoration: 'none',
                marginBottom: '48px',
              }}
            >
              ← Volver al School Lab
            </Link>
            <h1
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#F5F5F0',
                marginBottom: '24px',
              }}
            >
              Programa no encontrado
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, color: 'rgba(245,245,240,0.45)' }}>
              El programa que buscas no existe o ha cambiado de dirección.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section
          className="v5-section"
          style={{
            backgroundColor: '#080808',
            paddingTop: '160px',
            paddingBottom: '100px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient glow using program color */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '600px',
              height: '600px',
              background: `radial-gradient(circle at 70% 30%, ${programa.color}18 0%, transparent 60%)`,
              pointerEvents: 'none',
            }}
          />

          <div className="v5-container relative" style={{ zIndex: 1 }}>
            {/* Back link */}
            <Link
              href="/school-lab"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,240,0.35)',
                textDecoration: 'none',
                marginBottom: '56px',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.7)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.35)'; }}
            >
              ← Todos los programas
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
              <div>
                {/* Audience badge */}
                <span
                  className="v5-reveal"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: programa.color,
                    border: `1px solid ${programa.color}40`,
                    background: `${programa.color}12`,
                    padding: '6px 14px',
                    borderRadius: '100px',
                    marginBottom: '28px',
                  }}
                >
                  {programa.audiencia}
                </span>

                {/* Title */}
                <h1
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(38px, 5.5vw, 76px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    lineHeight: 0.97,
                    color: '#F5F5F0',
                    maxWidth: '800px',
                    marginBottom: '28px',
                    transitionDelay: '80ms',
                  }}
                >
                  {programa.subtitulo}
                </h1>

                {/* Description */}
                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '18px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(245,245,240,0.48)',
                    maxWidth: '560px',
                    transitionDelay: '160ms',
                  }}
                >
                  {programa.descripcion}
                </p>
              </div>

              {/* Format quick info card */}
              <div
                className="v5-reveal"
                style={{
                  background: 'rgba(245,245,240,0.04)',
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: '16px',
                  padding: '32px',
                  minWidth: '240px',
                  transitionDelay: '200ms',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.3)', display: 'block', marginBottom: '6px' }}>Duración</span>
                  <span style={{ fontFamily: 'var(--v5-font-display)', fontSize: '22px', fontWeight: 300, color: '#F5F5F0' }}>{programa.formato.duracion}</span>
                </div>
                <div style={{ marginBottom: '20px', paddingTop: '20px', borderTop: '1px solid rgba(245,245,240,0.07)' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.3)', display: 'block', marginBottom: '6px' }}>Modalidad</span>
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,245,240,0.7)' }}>{programa.formato.modalidad}</span>
                </div>
                <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(245,245,240,0.07)' }}>
                  <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.3)', display: 'block', marginBottom: '6px' }}>Nivel</span>
                  <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,245,240,0.7)' }}>{programa.formato.nivel}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EL PROBLEMA ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #EBEBEB' }}
        >
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '64px',
                alignItems: 'start',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  El problema
                </span>
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    background: programa.color,
                    borderRadius: '2px',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.4,
                    color: '#111111',
                  }}
                >
                  {programa.problema}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ APRENDERÁS ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#F8F8F8', borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB' }}
        >
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                Contenido del programa
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                Qué aprenderás
              </h2>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {programa.aprenderas.map((item, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderLeft: `3px solid ${programa.color}`,
                    borderRadius: '12px',
                    padding: '24px 28px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: programa.color,
                      flexShrink: 0,
                      marginTop: '4px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '17px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#111111',
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px', maxWidth: '680px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                Para quién es
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#111111',
                  marginBottom: '20px',
                }}
              >
                {programa.titulo}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#666666',
                }}
              >
                {programa.paraQuien.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
              {programa.paraQuien.cards.map((card, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB',
                    borderTop: `2px solid ${programa.color}`,
                    borderRadius: '16px',
                    padding: '36px',
                    transitionDelay: `${i * 80}ms`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '20px',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '80px',
                      fontWeight: 700,
                      color: 'rgba(0,0,0,0.04)',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {card.titulo}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMATO ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#F8F8F8', borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB' }}
        >
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                Formato y metodología
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#111111',
                }}
              >
                Cómo funciona
              </h2>
            </div>

            <div
              className="v5-reveal grid grid-cols-1 md:grid-cols-3"
              style={{ gap: '20px', marginBottom: '32px' }}
            >
              {[
                { label: 'Duración', value: programa.formato.duracion },
                { label: 'Modalidad', value: programa.formato.modalidad },
                { label: 'Nivel', value: programa.formato.nivel },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBEBEB',
                    borderRadius: '16px',
                    padding: '32px',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#AAAAAA',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      display: 'block',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Two modalities */}
            <div
              className="v5-reveal grid grid-cols-1 md:grid-cols-2"
              style={{ gap: '20px' }}
            >
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #EBEBEB',
                  borderRadius: '16px',
                  padding: '32px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: programa.color,
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  Modalidad A
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '20px',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    color: '#111111',
                    marginBottom: '10px',
                  }}
                >
                  Taller de Descubrimiento
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                    margin: 0,
                  }}
                >
                  90 minutos presenciales para tomar contacto sin riesgo ni barreras técnicas. Ideal para empezar.
                </p>
              </div>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #EBEBEB',
                  borderRadius: '16px',
                  padding: '32px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: programa.color,
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  Modalidad B
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: '20px',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    color: '#111111',
                    marginBottom: '10px',
                  }}
                >
                  Intensivo Práctico
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                    margin: 0,
                  }}
                >
                  {programa.formato.duracion} hiper-enfocadas con tutores para automatizar tareas reales desde el primer día.
                </p>
              </div>
            </div>

            {programa.formato.extra && (
              <div
                className="v5-reveal"
                style={{
                  marginTop: '20px',
                  background: `${programa.color}08`,
                  border: `1px solid ${programa.color}20`,
                  borderRadius: '12px',
                  padding: '20px 28px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: '#444444',
                    margin: 0,
                  }}
                >
                  {programa.formato.extra}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="v5-section"
          style={{ backgroundColor: '#080808', textAlign: 'center' }}
        >
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '28px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: programa.color,
                }}
              >
                {programa.audiencia}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(30px, 4vw, 52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                Reserva tu plaza en<br />
                <span style={{ color: 'rgba(245,245,240,0.38)' }}>{programa.titulo}</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '480px',
                }}
              >
                Cuéntanos tu situación y te orientamos sobre el formato que mejor se adapta a ti.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '18px 40px',
                    background: '#F5F5F0',
                    color: '#080808',
                    borderRadius: '0px',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  Reservar plaza →
                </Link>
                <Link
                  href="/school-lab"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '18px 40px',
                    background: 'transparent',
                    color: 'rgba(245,245,240,0.5)',
                    border: '1px solid rgba(245,245,240,0.12)',
                    borderRadius: '0px',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 300,
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.9)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.5)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.12)';
                  }}
                >
                  Ver otros programas
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

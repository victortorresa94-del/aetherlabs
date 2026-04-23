import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Formamos — Tu equipo usando IA de verdad | Aether Labs',
  description: 'Formación práctica en IA para equipos reales. Sin cursos genéricos. Trabajamos con tus procesos y tus herramientas.',
};

export default function FormamosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '140px', paddingBottom: '120px' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '40px' }}>
              Servicio · 04
            </div>
            <h1 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(56px, 9vw, 112px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '40px' }}>
              El lunes siguiente,
              <br />
              <span style={{ color: 'rgba(245,240,232,0.4)' }}>ya lo usan.</span>
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 300, color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '48px' }}>
              Formación práctica en IA para equipos que tienen trabajo real. Sin diapositivas de teoría. Con casos de tu sector, tus herramientas y tus procesos.
            </p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', backgroundColor: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
              Formamos a tu equipo →
            </Link>
          </div>
        </section>

        {/* EL PROBLEMA */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ maxWidth: '700px' }}>
              <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>
                Por qué no funciona la formación habitual
              </div>
              <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '28px' }}>
                Tu equipo fue al curso. Volvió emocionado. Tres semanas después, todo igual.
              </h2>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, color: '#555', lineHeight: 1.7 }}>
                La formación genérica de IA enseña lo que es posible. Lo que necesitas es que tu equipo sepa cómo hacerlo con tus emails, tus clientes, tus documentos y tus deadlines reales. Eso es lo que hacemos nosotros.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', marginTop: '56px' }}>
              {[
                { problema: 'Curso genérico de "IA para empresas"', realidad: 'Tu equipo aprende lo que es posible pero no sabe cómo aplicarlo a su trabajo concreto.' },
                { problema: 'Tutorial de YouTube de 3 horas', realidad: 'Funciona para entender la herramienta. No para cambiar hábitos de trabajo.' },
                { problema: 'Formación de un día y adiós', realidad: 'Sin seguimiento, en dos semanas el 80% ha vuelto a su forma de trabajar anterior.' },
                { problema: 'El experto explica, el equipo escucha', realidad: 'La formación eficaz es práctica, con feedback inmediato en casos reales.' },
              ].map((item) => (
                <div key={item.problema} style={{ background: '#fff', border: '1px solid #e8e8e5', padding: '28px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ color: '#ccc', fontFamily: 'var(--v5-font-mono)', fontSize: '11px' }}>✕</span>
                    <div style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 400, color: '#555' }}>{item.problema}</div>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, color: '#999', lineHeight: 1.6, margin: 0, paddingLeft: '20px' }}>{item.realidad}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUESTRA FORMACIÓN */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="forma-grid">
              <div>
                <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '24px' }}>
                  Cómo lo hacemos
                </div>
                <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '28px' }}>
                  Formación diseñada para tu empresa. No para una empresa genérica.
                </h2>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,240,232,0.45)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Antes de diseñar la formación, estudiamos cómo trabaja tu equipo, qué herramientas usa y dónde pierde más tiempo. La formación está construida alrededor de eso.
                </p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,240,232,0.45)', lineHeight: 1.7 }}>
                  El resultado no es que "sepan de IA". Es que el lunes siguiente ya están usándola en su trabajo real.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                {[
                  { check: 'Análisis previo de procesos y herramientas', desc: 'Sabemos cómo trabaja tu equipo antes de diseñar ni una diapositiva.' },
                  { check: 'Casos de uso de tu sector y empresa', desc: 'Practicamos con ejemplos que tu equipo reconoce como suyos.' },
                  { check: 'Formato de taller, no de charla', desc: '70% práctica, 30% teoría. Feedback en tiempo real.' },
                  { check: 'Seguimiento post-formación (4 semanas)', desc: 'Consultas por Slack durante un mes para que no se pierda el impulso.' },
                  { check: 'Materiales a medida', desc: 'Guías y prompts específicos para su trabajo, no plantillas genéricas.' },
                ].map((item) => (
                  <div key={item.check} style={{ padding: '20px 0', borderBottom: '1px solid rgba(245,240,232,0.07)', display: 'flex', gap: '16px' }}>
                    <span style={{ color: 'rgba(245,240,232,0.6)', flexShrink: 0, fontSize: '13px' }}>→</span>
                    <div>
                      <div style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 400, color: '#F5F0E8', marginBottom: '4px' }}>{item.check}</div>
                      <div style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, color: 'rgba(245,240,232,0.35)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FORMATOS */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>
              Formatos disponibles
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { name: 'Taller intensivo', duration: '1 día (6-8h)', desc: 'Para equipos que quieren arrancar rápido. Diagnóstico, formación y plan de acción en una sola jornada.', for: 'Equipos de hasta 12 personas' },
                { name: 'Programa continuo', duration: '4-8 semanas', desc: 'Formación gradual con sesiones semanales. Implementación progresiva con seguimiento real de adopción.', for: 'Empresas que quieren cambio sostenido' },
                { name: 'Formación a medida', duration: 'A definir', desc: 'Diseñamos el programa desde cero según tu equipo, tus objetivos y el nivel de partida.', for: 'Empresas con necesidades específicas' },
              ].map((item) => (
                <div key={item.name} style={{ background: '#fff', border: '1px solid #e8e8e5', borderRadius: '12px', padding: '36px 32px' }}>
                  <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#bbb', marginBottom: '12px' }}>{item.duration}</div>
                  <h3 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: '22px', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', marginBottom: '12px' }}>{item.name}</h3>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#666', lineHeight: 1.65, marginBottom: '20px' }}>{item.desc}</p>
                  <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#aaa', letterSpacing: '0.08em' }}>Para: {item.for}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '16px' }}>
                ¿Cuándo quieres
                <br /><span style={{ color: 'rgba(245,240,232,0.35)' }}>que empiecen a usarla?</span>
              </h2>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,240,232,0.4)', lineHeight: 1.7 }}>
                Cuéntanos el equipo, el nivel y los objetivos. Diseñamos el programa en 48h.
              </p>
            </div>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Hablamos →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) { .forma-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </div>
  );
}

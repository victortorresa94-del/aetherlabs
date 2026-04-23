import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Asesoramos — Diagnóstico de IA para tu empresa | Aether Labs',
  description: 'Antes de invertir en IA, necesitas saber qué tiene sentido y qué no. Analizamos tu empresa y te decimos exactamente qué implementar primero.',
};

export default function AsesoramosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO — dark */}
        <section style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '140px', paddingBottom: '120px' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '40px' }}>
              Servicio · 01
            </div>
            <h1 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(56px, 9vw, 112px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '40px' }}>
              Antes de gastar
              <br />
              <span style={{ color: 'rgba(245,240,232,0.4)' }}>en IA, entiéndela.</span>
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 300, color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '48px' }}>
              La mayoría de empresas implementan IA donde no hace falta y no la implementan donde sí. Nosotros te decimos cuál es cuál.
            </p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', backgroundColor: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
              Pide tu diagnóstico →
            </Link>
          </div>
        </section>

        {/* PAIN — light */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ maxWidth: '680px' }}>
              <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>
                Lo que seguramente te está pasando
              </div>
              <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '48px' }}>
                Sabes que la IA es importante. No sabes por dónde empezar.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
              {[
                { q: '¿Debería usar ChatGPT, Claude, Gemini?', a: 'Depende de qué quieras hacer. Y la respuesta no es "todos".' },
                { q: '¿Por qué el piloto que hicimos no funcionó?', a: 'Porque los pilotos sin contexto real no funcionan. Nunca.' },
                { q: '¿Cuánto voy a tardar en ver resultados?', a: 'En 30 días deberías notar diferencia. Si no, algo está mal.' },
                { q: '¿Mi sector ya usa esto o soy el primero?', a: 'Tu competencia ya lleva 12-18 meses de ventaja. Y sigue.' },
              ].map((item) => (
                <div key={item.q} style={{ background: '#fff', border: '1px solid #e8e8e5', padding: '32px 28px' }}>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, color: '#111', lineHeight: 1.5, marginBottom: '12px' }}>"{item.q}"</p>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, color: '#888', lineHeight: 1.6, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET — dark */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="asesora-grid">
              <div>
                <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '24px' }}>
                  Qué incluye
                </div>
                <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>
                  Diagnóstico completo. Plan concreto. Sin rodeos.
                </h2>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,240,232,0.45)', lineHeight: 1.7 }}>
                  No te damos un informe de 80 páginas que nadie leerá. Te damos una lista de 3-5 cosas que puedes hacer ya, ordenadas por impacto y esfuerzo.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                {[
                  { num: '01', title: 'Auditoría de procesos', desc: 'Mapeamos cómo trabaja tu equipo hoy. Identificamos cuáles procesos consumen más tiempo y cuáles son automatizables.' },
                  { num: '02', title: 'Mapa de oportunidades IA', desc: 'Cruzamos tus procesos con las herramientas que existen. Te decimos qué tiene sentido y qué es solo ruido.' },
                  { num: '03', title: 'Sesión de claridad (90 min)', desc: 'Una conversación directa donde saldrás con un plan, no con más preguntas.' },
                  { num: '04', title: 'Hoja de ruta priorizada', desc: 'Qué hacer primero, qué segundo, y qué NO hacer ahora. Con estimaciones de tiempo y esfuerzo reales.' },
                ].map((item) => (
                  <div key={item.num} style={{ padding: '28px 0', borderBottom: '1px solid rgba(245,240,232,0.07)', display: 'flex', gap: '24px' }}>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: 'rgba(245,240,232,0.2)', flexShrink: 0, paddingTop: '3px' }}>{item.num}</span>
                    <div>
                      <div style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: '17px', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.01em', marginBottom: '6px' }}>{item.title}</div>
                      <div style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, color: 'rgba(245,240,232,0.4)', lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOR WHO — light */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="asesora-grid">
              <div>
                <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>Esto es para ti si...</div>
                {['Llevas más de 6 meses pensando en implementar IA y no has empezado.', 'Probaste herramientas de IA pero no le sacas partido real.', 'Tu equipo tiene iniciativas de IA dispersas sin coordinar.', 'Tienes presupuesto pero no sabes dónde invertirlo.'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: '12px', padding: '14px 0', borderBottom: '1px solid #e8e8e5' }}>
                    <span style={{ color: '#111', flexShrink: 0 }}>→</span>
                    <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#444', lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>No es para ti si...</div>
                {['Solo buscas que alguien valide lo que ya has decidido.', 'Quieres un informe para enseñar a inversores, no para ejecutar.', 'No tienes ninguna intención de cambiar procesos internos.'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: '12px', padding: '14px 0', borderBottom: '1px solid #e8e8e5' }}>
                    <span style={{ color: '#bbb', flexShrink: 0 }}>✕</span>
                    <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#888', lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA — dark */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '16px' }}>
                30 minutos.
                <br /><span style={{ color: 'rgba(245,240,232,0.35)' }}>Primera conversación, gratis.</span>
              </h2>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,240,232,0.4)', lineHeight: 1.7 }}>
                Si vemos que no encajamos, te lo decimos. Sin perder tu tiempo.
              </p>
            </div>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Empezamos →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) { .asesora-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </div>
  );
}

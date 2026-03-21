import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export const metadata: Metadata = {
  title: 'Cuánto Cuesta Implementar Claude en una Empresa (2026) | Aether Labs',
  description: 'Desglose completo de costes para implementar Claude en tu empresa: licencias, formación e implementación. Sin letra pequeña.',
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
                Pricing
              </span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#333333' }}>·</span>
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 400, color: '#444444' }}>
                5 min lectura
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '24px' }}>
              Cuánto cuesta implementar Claude en una empresa: desglose completo
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px' }}>
              Licencias, formación, implementación técnica y ROI real. Sin letra pequeña y con cálculos concretos para empresas de 10 a 100 personas.
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
              Uno de los principales frenos en la adopción de IA en empresas no es la resistencia al cambio ni la falta de casos de uso: es no saber cuánto va a costar realmente. La incertidumbre sobre el precio lleva a aplazar decisiones que podrían estar generando ROI desde el primer mes.
            </p>
            <p style={bodyText}>
              Este artículo desglosa todos los costes reales de implementar Claude en una empresa, sin ocultar nada y sin exagerar el ROI. Los números son los que manejamos en Aether Labs trabajando con empresas reales, y se actualizan con los precios vigentes en 2026.
            </p>

            <h2 style={h2Style}>Coste 1: las licencias de Claude</h2>
            <p style={bodyText}>
              Hay cuatro planes disponibles y la diferencia entre ellos es más importante de lo que parece a primera vista:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                {
                  plan: 'Claude Free',
                  precio: '0 EUR',
                  desc: 'Acceso limitado a Claude 3.5 Sonnet, sin historial de conversaciones, sin projects, sin subida de archivos. Útil para exploración individual pero no recomendado para uso profesional por la inconsistencia del acceso y las limitaciones de uso.',
                  recomendado: false,
                },
                {
                  plan: 'Claude Pro',
                  precio: '18 EUR / mes / usuario',
                  desc: 'Acceso prioritario, projects para guardar instrucciones, historial completo, subida de documentos. Para profesionales que usan Claude de forma individual e intensiva. Si solo 1-2 personas van a usar Claude, empieza aquí.',
                  recomendado: false,
                },
                {
                  plan: 'Claude Team',
                  precio: '25 EUR / mes / usuario (mínimo 5 usuarios)',
                  desc: 'Todo lo de Pro más gestión centralizada, facturación única, control de administrador y las mejores garantías de privacidad de datos. El plan estándar para empresas. Por debajo de 5 usuarios, usa Pro individual.',
                  recomendado: true,
                },
                {
                  plan: 'Claude Enterprise',
                  precio: 'Precio negociado (desde ~50 EUR/usuario/mes estimado)',
                  desc: 'SSO corporativo, integración con tu infraestructura, SLA garantizado, auditoría de uso, datos en tu región. Para empresas con más de 100 usuarios o con requisitos muy específicos de seguridad y compliance.',
                  recomendado: false,
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: item.recomendado ? '1px solid #111111' : '1px solid #E0E0E0', borderRadius: '8px', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '16px', fontWeight: 500, color: '#111111', margin: 0 }}>{item.plan}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.recomendado && <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#111111', border: '1px solid #111111', padding: '3px 8px', borderRadius: '4px' }}>Recomendado</span>}
                      <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', fontWeight: 600, color: '#111111', whiteSpace: 'nowrap' as const }}>{item.precio}</span>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#555555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={bodyText}>
              Para referencia, los planes equivalentes de los competidores: ChatGPT Team cuesta 25 USD por usuario al mes (similar a Claude Team en euros, con pequeñas variaciones de cambio). Microsoft Copilot M365 cuesta 30 USD por usuario al mes y se añade al coste ya existente de Microsoft 365.
            </p>

            <h2 style={h2Style}>Coste 2: la formación (el más infravaluado)</h2>
            <p style={bodyText}>
              Este es el coste que más empresas ignoran y que más impacto tiene en el resultado. Sin formación adecuada, la adopción real de Claude en un equipo es cercana al 20-30% de los usuarios con licencia. El 70-80% restante lo abre un par de veces, obtiene resultados mediocres porque no sabe usarlo bien, y deja de usarlo.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '20px 24px', marginBottom: '28px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', marginBottom: '8px' }}>Dato clave</p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.6, color: '#333333', margin: 0 }}>
                En las empresas donde hemos medido la adopción, la diferencia entre equipos con formación específica y sin ella es de 4x en uso activo semanal. La formación no es un coste adicional: es lo que determina si las licencias tienen ROI o no.
              </p>
            </div>

            <h3 style={h3Style}>Opciones de formación y sus costes reales</h3>
            <ul style={{ paddingLeft: '0', marginBottom: '28px', listStyle: 'none' }}>
              {[
                'Autoformación con recursos gratuitos (YouTube, documentación de Anthropic): 0 EUR en coste directo, pero alto coste de oportunidad. Lleva semanas y pocas personas lo hacen con la profundidad necesaria para resultados reales.',
                'Nuestro Taller de un día (400 EUR por empresa, hasta 12 personas): cubre los fundamentos de Claude, los casos de uso del sector específico y los primeros prompts listos para usar. Ideal para dar el primer arranque real a un equipo.',
                'Nuestro Programa de 4 semanas (1.200 EUR por empresa): incluye sesiones semanales, casos de uso específicos, acompañamiento en la implementación y creación de la biblioteca de prompts del equipo. Para empresas que quieren adopción real y sostenida.',
                'Formación continua mensual (300 EUR / mes): para empresas que quieren mantenerse actualizadas con las nuevas capacidades de Claude y seguir mejorando sus flujos de trabajo.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <h3 style={h3Style}>Cómo calcular el ROI de la formación</h3>
            <p style={bodyText}>
              Con un equipo de 5 personas que ahorra una media de 45 minutos al día (realista después de formación), y un coste medio de 25 EUR/hora:
            </p>
            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '20px 24px', marginBottom: '32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 400, color: '#444444', lineHeight: 1.8, margin: 0 }}>
                5 personas × 0,75h/día × 25 EUR/h × 20 días laborables = 1.875 EUR/mes en productividad recuperada<br />
                Coste Claude Team: 5 usuarios × 25 EUR = 125 EUR/mes<br />
                Coste formación amortizado en 12 meses: 1.200 EUR ÷ 12 = 100 EUR/mes<br />
                <strong>Coste total: 225 EUR/mes. ROI mensual: 1.875 EUR → x8,3 de retorno.</strong>
              </p>
            </div>

            <h2 style={h2Style}>Coste 3: la implementación técnica</h2>
            <p style={bodyText}>
              Aquí hay un espectro muy amplio según el nivel de integración que quieras. La buena noticia es que el mínimo viable no requiere ninguna inversión técnica adicional.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                {
                  nivel: 'Sin integración (solo licencias + formación)',
                  coste: '0 EUR adicionales',
                  desc: 'El equipo usa Claude.ai en el navegador. Sin conectores, sin desarrollo, sin infraestructura. El 80% de las empresas empieza así y muchas se quedan aquí permanentemente. Suficiente para la mayoría de los casos de uso.',
                },
                {
                  nivel: 'Integración básica con herramientas (n8n, Make, Zapier)',
                  coste: '500-2.000 EUR (puntual)',
                  desc: 'Conectar Claude con otras herramientas: que responda emails automáticamente, que procese formularios entrantes, que genere informes periódicos. Requiere conocimientos de automatización de procesos pero no desarrollo de software.',
                },
                {
                  nivel: 'Integración avanzada con API propia',
                  coste: 'Desde 5.000 EUR según complejidad',
                  desc: 'Construir aplicaciones propias sobre la API de Claude: un asistente de atención al cliente interno, un sistema de análisis de documentos, un chatbot configurado para tu empresa. Requiere desarrollo de software.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '15px', fontWeight: 500, color: '#111111', margin: 0 }}>{item.nivel}</p>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '12px', fontWeight: 600, color: '#111111', whiteSpace: 'nowrap' as const }}>{item.coste}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#555555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={h2Style}>Coste total según tamaño de empresa</h2>
            <p style={bodyText}>
              Tomando el escenario más común (Claude Team + Taller de formación de 1 día, sin integración técnica adicional), estos son los costes reales:
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', overflow: 'hidden', marginBottom: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: '1px solid #E0E0E0' }}>
                <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999' }}>Empresa</div>
                <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', textAlign: 'right' as const }}>Licencias/mes</div>
                <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', textAlign: 'right' as const }}>Formación/mes</div>
                <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#999999', textAlign: 'right' as const }}>Total/mes</div>
              </div>
              {[
                { empresa: '10 personas (10 usuarios Claude Team)', licencias: '250 EUR', formacion: '33 EUR', total: '283 EUR' },
                { empresa: '25 personas (25 usuarios Claude Team)', licencias: '625 EUR', formacion: '33 EUR', total: '658 EUR' },
                { empresa: '50 personas (50 usuarios Claude Team)', licencias: '1.250 EUR', formacion: '100 EUR', total: '1.350 EUR' },
                { empresa: '100 personas (100 usuarios Claude Team)', licencias: '2.500 EUR', formacion: '100 EUR', total: '2.600 EUR' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i < 3 ? '1px solid #F0F0F0' : 'none' }}>
                  <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#333333' }}>{row.empresa}</div>
                  <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '13px', color: '#555555', textAlign: 'right' as const }}>{row.licencias}</div>
                  <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '13px', color: '#555555', textAlign: 'right' as const }}>{row.formacion}</div>
                  <div style={{ padding: '12px 16px', fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 600, color: '#111111', textAlign: 'right' as const }}>{row.total}</div>
                </div>
              ))}
            </div>

            <p style={bodyText}>
              La formación en la tabla se calcula amortizando el Taller de 1 día en 12 meses para equipos pequeños, y el Programa de 4 semanas para equipos de 50 o más personas. En la práctica, la formación no es un coste mensual recurrente salvo que elijas el programa continuo.
            </p>

            <h2 style={h2Style}>Cómo calcular el ROI para tu empresa</h2>

            <p style={bodyText}>
              La fórmula es simple. Lo complicado es ser honesto con los inputs:
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '20px 24px', marginBottom: '32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '13px', fontWeight: 400, color: '#444444', lineHeight: 2, margin: 0 }}>
                ROI mensual = (Nº usuarios × horas ahorradas/día × coste hora empleado × 20 días)<br />
                − (Coste licencias + Coste formación amortizado)<br /><br />
                <strong>Ejemplo real con equipo de 10 personas:</strong><br />
                (10 × 0,5h × 30 EUR/h × 20) − (250 + 33) = 3.000 − 283 = 2.717 EUR/mes de beneficio neto<br />
                Tiempo de amortización de la inversión inicial: menos de 15 días
              </p>
            </div>

            <p style={bodyText}>
              El supuesto conservador de 0,5 horas ahorradas al día por persona es alcanzable con formación adecuada en el 70% de los roles de empresa (no aplica a roles puramente operativos sin trabajo de texto). En perfiles de marketing, RRHH, ventas, consultoría o dirección, el ahorro real tiende a ser de 1 a 2 horas al día una vez que el equipo está entrenado.
            </p>

            <h2 style={h2Style}>Por dónde empezar si tienes presupuesto limitado</h2>
            <p style={bodyText}>
              La estrategia de entrada de menor riesgo y mayor ROI rápido:
            </p>
            <ul style={{ paddingLeft: '0', marginBottom: '32px', listStyle: 'none' }}>
              {[
                'Empieza con Claude Pro para 1-2 usuarios clave (no Claude Team). Dos usuarios a 18 EUR/mes es 36 EUR al mes. Deja que los usuarios más entusiastas experimenten y desarrollen casos de uso durante 30 días.',
                'Invierte en una sesión de formación específica antes de dar acceso a todo el equipo. El Taller de un día cuesta 400 EUR y transforma la adopción del 20% al 80% de los usuarios.',
                'Mide el ROI en los primeros 30 días: pide a los usuarios clave que registren las tareas donde usan Claude y el tiempo que les ahorra. Con esos datos, la decisión de escalar al equipo completo se toma sola.',
                'Escala a Claude Team solo cuando tengas los casos de uso validados y el equipo formado. No al revés.',
              ].map((item, i) => (
                <li key={i} style={liStyle}>{item}</li>
              ))}
            </ul>

            <p style={{ ...bodyText, marginBottom: '48px' }}>
              El mayor error en la implementación de IA empresarial no es invertir demasiado: es invertir en licencias sin invertir en formación. Las licencias son el coste más visible pero generan el menor impacto sin el acompañamiento adecuado. La formación es el coste que más resisten las empresas y el que más determina si la inversión tiene retorno.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', borderLeft: '4px solid #111111', borderRadius: '8px', padding: '24px 32px' }}>
              <p style={{ fontFamily: 'var(--v5-font-display)', fontSize: '18px', fontWeight: 500, color: '#111111', marginBottom: '12px' }}>
                Consigue una propuesta personalizada para tu empresa
              </p>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#555555', marginBottom: '20px' }}>
                Calculamos el ROI esperado para tu equipo y diseñamos el programa de formación más eficiente para tu presupuesto y tus casos de uso. Sin compromiso.
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
              La inversión con mayor ROI en productividad que puedes hacer en 2026.
            </h2>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '17px', fontWeight: 300, lineHeight: 1.7, color: '#888888', marginBottom: '40px', maxWidth: '520px' }}>
              Formamos equipos en Claude con resultados desde la primera semana. El ROI medio de nuestros clientes es de 6 a 10 veces la inversión en los primeros 3 meses.
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

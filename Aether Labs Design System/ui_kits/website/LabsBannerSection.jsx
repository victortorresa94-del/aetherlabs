// Aether Labs — LabsBannerSection
// Mirrors Web-Aether-3.0/src/components/v5/LabsBannerSection.tsx

const labs = [
  { index:'01', service:'Claude', pain:'¿Tu equipo tiene acceso a Claude pero nadie sabe realmente cómo usarlo en su trabajo del día a día?', desc:'Implementamos Claude en tus procesos y formamos a tu equipo.', icon:'MessageSquare' },
  { index:'02', service:'Software', pain:'¿Necesitas una herramienta a medida pero cotizar software cuesta una fortuna?', desc:'Construimos software a medida con IA, sin meses de espera.', icon:'Code2' },
  { index:'03', service:'Agents', pain:'¿Tienes procesos que dependen de una persona y se rompen en cuanto esa persona no está?', desc:'Creamos agentes que ejecutan tareas completas de forma autónoma.', icon:'Bot', badge:'Más demandado' },
  { index:'04', service:'Gen AI', pain:'¿Produces menos contenido visual del que necesitas porque es caro y lento?', desc:'Producimos imágenes, vídeos y creatividades con IA generativa.', icon:'Sparkles' },
  { index:'05', service:'Marketing', pain:'¿Inviertes en marketing sin saber qué funciona, qué falla, ni por qué tu competencia crece más rápido?', desc:'Construimos sistemas de captación y campañas con IA como motor.', icon:'Megaphone' },
  { index:'06', service:'Learn', pain:'¿Tu equipo sabe que la IA existe pero no sabe cómo aplicarla en su trabajo real?', desc:'Formación práctica en IA para que tu equipo la use de verdad.', icon:'GraduationCap' },
  { index:'07', service:'Open', pain:'¿Necesitas un chatbot, una web con lógica, un dashboard — sin meses de desarrollo ni presupuestos de agencia?', desc:'Chatbots, webs con lógica y dashboards. Sin agencias ni esperas.', icon:'Wrench', wide: true },
];

function ALLabsBannerSection({ onLabClick }) {
  const [hovered, setHovered] = React.useState(null);

  return (
    <section style={{ background: '#F8F8F5', padding: '120px 0' }} id="labs">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>Laboratorios</span>
            <span style={{ width: 32, height: 1, background: '#ccc', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa' }}>8 capacidades</span>
          </div>
          <h2 style={{
            fontFamily: "var(--al-font-advercase, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 400, lineHeight: 1.05,
            letterSpacing: '-0.02em', color: '#111', maxWidth: 640,
          }}>
            ¿Qué es<br />lo que necesitas?
          </h2>
        </div>

        {/* Featured card (AI Team Lab) */}
        <div style={{ marginBottom: 12 }}>
          <button onClick={onLabClick} style={{
            display: 'block', width: '100%', background: 'none', border: 'none',
            padding: 0, cursor: 'pointer', textAlign: 'left',
          }}>
            <div style={{
              background: '#111', borderRadius: 16, padding: '44px 48px',
              display: 'grid', gridTemplateColumns: '1fr auto', gap: 40,
              alignItems: 'center', transition: 'transform 250ms cubic-bezier(0.16,1,0.3,1)',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="Users" size={16} color="#F5F5F0" />
                  </div>
                  <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>08 · Flagship</span>
                </div>
                <div style={{ fontFamily: "var(--al-font-advercase, 'Playfair Display',serif)", fontSize: 'clamp(24px,3vw,40px)', fontWeight: 400, color: '#F5F5F0', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 2 }}>AI Team</div>
                <div style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6366F1', marginBottom: 12 }}>Lab</div>
                <p style={{ fontFamily: 'var(--al-font-body)', fontSize: 15, fontWeight: 300, color: 'rgba(245,245,240,0.45)', lineHeight: 1.6, maxWidth: 520, fontStyle: 'italic', margin: 0 }}>
                  ¿No sabes por dónde empezar mientras tu competencia ya lleva ventaja?
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#F5F5F0', fontFamily: 'var(--al-font-body)', fontSize: 13, marginBottom: 8 }}>
                  Auditoría gratuita <Icon name="ArrowUpRight" size={14} color="#F5F5F0" />
                </div>
                <div style={{ fontFamily: 'var(--al-font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>Desde 1.200€/mes · Sin permanencia</div>
              </div>
            </div>
          </button>
        </div>

        {/* Labs grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {labs.map((lab, i) => {
            const isWide = lab.wide;
            const isHov = hovered === i;
            return (
              <button key={lab.index} onClick={onLabClick} style={{
                gridColumn: isWide ? '1 / -1' : undefined,
                display: 'block', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left',
              }}>
                <div style={{
                  background: '#fff', border: `1px solid ${isHov ? '#ccc' : '#E8E8E5'}`,
                  borderRadius: 12, padding: isWide ? '24px 32px' : '24px 24px 20px',
                  height: isWide ? 'auto' : '100%', display: 'flex',
                  flexDirection: isWide ? 'row' : 'column',
                  alignItems: isWide ? 'center' : undefined, gap: isWide ? 40 : undefined,
                  transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
                  transform: isHov ? 'translateY(-3px)' : 'none',
                  boxShadow: isHov ? '0 12px 32px rgba(0,0,0,0.07)' : 'none',
                }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Icon + index */}
                  <div style={{ display: 'flex', justifyContent: isWide ? undefined : 'space-between', alignItems: isWide ? 'center' : 'flex-start', gap: isWide ? 16 : undefined, marginBottom: isWide ? 0 : 20, flexShrink: isWide ? 0 : undefined }}>
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: '#F0F0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={lab.icon} size={17} color="#555" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {lab.badge && <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', border: '1px solid #ddd', padding: '3px 7px', borderRadius: 4 }}>{lab.badge}</span>}
                      <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, color: '#bbb' }}>{lab.index}</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div style={{ marginBottom: isWide ? 0 : 10, flexShrink: isWide ? 0 : undefined, minWidth: isWide ? 140 : undefined }}>
                    <div style={{ fontFamily: "var(--al-font-advercase,'Playfair Display',serif)", fontSize: isWide ? 22 : 'clamp(22px,2.5vw,28px)', fontWeight: 300, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 3 }}>{lab.service}</div>
                    <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6366F1' }}>Lab</span>
                  </div>

                  {/* Pain */}
                  <p style={{ fontFamily: 'var(--al-font-body)', fontSize: 12, fontWeight: 300, color: '#999', lineHeight: 1.6, flex: isWide ? undefined : 1, margin: 0 }}>{lab.pain}</p>

                  {/* Desc */}
                  {!isWide && <p style={{ fontFamily: 'var(--al-font-body)', fontSize: 13, fontWeight: 600, color: '#111', lineHeight: 1.45, marginTop: 16, paddingTop: 14, borderTop: '1px solid #E8E8E5', marginBottom: 0 }}>{lab.desc}</p>}

                  <div style={{ marginTop: isWide ? 0 : 16, display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
                    <Icon name="ArrowUpRight" size={14} color={isHov ? '#333' : '#bbb'} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ALLabsBannerSection });

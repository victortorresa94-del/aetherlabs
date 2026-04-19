// Aether Labs — Navbar component
// Mirrors Web-Aether-3.0/src/components/v5/Navbar.tsx

const { useState, useEffect, useRef } = React;

const labsMenu = [
  { icon: 'MessageSquare', label: 'Claude', tag: 'Implementación y formación', href: '#claude-lab' },
  { icon: 'Code2', label: 'Software', tag: 'Software a medida', href: '#software-lab' },
  { icon: 'Bot', label: 'Agents', tag: 'Automatización autónoma', href: '#agents-lab', hot: true },
  { icon: 'Sparkles', label: 'Gen AI', tag: 'Imágenes, vídeo y creatividades', href: '#gen-ai-lab' },
  { icon: 'Megaphone', label: 'Marketing', tag: 'Captación y campañas', href: '#marketing-lab' },
  { icon: 'GraduationCap', label: 'Learn', tag: 'Formación práctica para equipos', href: '#learn-lab' },
  { icon: 'Wrench', label: 'Open', tag: 'Chatbots, webs y dashboards', href: '#open-lab' },
];

// Simple SVG icon stubs for Lucide icons
function Icon({ name, size = 14, color = 'currentColor' }) {
  const icons = {
    MessageSquare: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    Code2: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    Bot: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
    Sparkles: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>,
    Megaphone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="m3 11 19-9-9 19-2-8-8-2z"/></svg>,
    GraduationCap: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    Wrench: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    Users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    ArrowUpRight: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>,
  };
  return icons[name] || null;
}

function ALNavbar({ onContactClick, currentPage, onPageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setLabsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const txt = (dark) => dark ? (scrolled ? '#555' : 'rgba(255,255,255,0.6)') : (scrolled ? '#111' : '#FFF');

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: '60px', display: 'flex', alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'background 400ms ease',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button onClick={() => onPageChange('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img src="../../assets/aether-logo-white.png" alt="Aether Labs" height={23} style={{ filter: scrolled ? 'invert(1)' : 'none', transition: 'filter 400ms ease', display: 'block' }} />
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {/* Labs dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}
              onMouseEnter={() => setLabsOpen(true)} onMouseLeave={() => setLabsOpen(false)}>
              <button onClick={() => setLabsOpen(!labsOpen)} style={{
                fontFamily: 'var(--al-font-body)', fontSize: 15, fontWeight: 300,
                color: scrolled ? '#555' : 'rgba(255,255,255,0.6)',
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 4, transition: 'color 200ms',
              }}
                onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#111' : '#FFF'}
                onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#555' : 'rgba(255,255,255,0.6)'}
              >
                Labs
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: labsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown */}
              <div style={{
                position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                transform: labsOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                width: 260, background: '#FFF', border: '1px solid #E8E8E5',
                borderRadius: 10, opacity: labsOpen ? 1 : 0, visibility: labsOpen ? 'visible' : 'hidden',
                transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)', overflow: 'hidden', padding: 6,
              }}>
                {labsMenu.map(lab => (
                  <button key={lab.href} onClick={() => { setLabsOpen(false); onPageChange('lab'); }} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
                    borderRadius: 7, cursor: 'pointer', width: '100%', background: 'transparent',
                    border: 'none', textAlign: 'left', transition: 'background 150ms',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={lab.icon} size={14} color="rgba(0,0,0,0.35)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontFamily: 'var(--al-font-advercase)', fontWeight: 400, color: '#111', letterSpacing: '-0.01em' }}>{lab.label}</span>
                        <span style={{ fontFamily: 'var(--al-font-body)', fontWeight: 300, color: 'rgba(0,0,0,0.35)' }}> Lab</span>
                        {lab.hot && <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 7, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.08)', color: 'rgba(0,0,0,0.5)', padding: '2px 4px', borderRadius: 3 }}>Hot</span>}
                      </div>
                      <div style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, color: '#999', marginTop: 1 }}>{lab.tag}</div>
                    </div>
                  </button>
                ))}
                <div style={{ height: 1, background: '#E8E8E5', margin: '4px 10px 6px' }} />
                <button onClick={() => { setLabsOpen(false); onPageChange('lab'); }} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 10px', borderRadius: 7, cursor: 'pointer', width: '100%',
                  background: 'transparent', border: 'none', transition: 'background 150ms',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ fontSize: 13 }}>
                    <span style={{ fontFamily: 'var(--al-font-advercase)', color: '#111', letterSpacing: '-0.01em' }}>AI Team</span>
                    <span style={{ fontFamily: 'var(--al-font-body)', fontWeight: 300, color: 'rgba(0,0,0,0.35)' }}> Lab</span>
                  </span>
                  <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, color: '#999' }}>Auditoría gratuita →</span>
                </button>
              </div>
            </div>

            {['Nosotros', 'Experimentos', 'Archivo'].map(l => (
              <button key={l} style={{ fontFamily: 'var(--al-font-body)', fontSize: 15, fontWeight: 300, color: scrolled ? '#555' : 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 200ms' }}
                onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#111' : '#FFF'}
                onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#555' : 'rgba(255,255,255,0.6)'}
              >{l}</button>
            ))}
          </div>

          {/* CTA */}
          <button onClick={onContactClick} style={{
            padding: '10px 24px', background: scrolled ? '#111' : '#FFF',
            color: scrolled ? '#FFF' : '#111', fontFamily: 'var(--al-font-body)',
            fontSize: 13, fontWeight: 400, border: 'none', borderRadius: 0, cursor: 'pointer',
            transition: 'background 200ms',
          }}
            onMouseEnter={e => e.currentTarget.style.background = scrolled ? '#333' : '#F0F0F0'}
            onMouseLeave={e => e.currentTarget.style.background = scrolled ? '#111' : '#FFF'}
          >
            Auditoría gratuita →
          </button>
        </div>
      </nav>
      <style>{`.al-nav-dropdown-item:hover { background: rgba(0,0,0,0.04) !important; }`}</style>
    </>
  );
}

Object.assign(window, { ALNavbar, Icon });

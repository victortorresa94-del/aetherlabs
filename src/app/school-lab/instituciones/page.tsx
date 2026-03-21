'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const colectivos = [
  {
    label: 'Fundaciones',
    title: 'Fundaciones y asociaciones sociales',
    desc: 'Programas de capacitación digital para colectivos en situación de vulnerabilidad.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    label: 'Mujeres',
    title: 'Asociaciones de mujeres',
    desc: 'Talleres de empoderamiento digital para mujeres de todos los rangos de edad y perfil.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    label: 'Educación',
    title: 'Colegios e institutos',
    desc: 'Formación en IA para alumnos y profesorado. Adaptada a cada franja de edad.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    label: 'Administración',
    title: 'Ayuntamientos',
    desc: 'Capacitación de funcionarios y ciudadanos para el uso responsable de la IA.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    label: 'Ocupación',
    title: 'Servicios públicos de empleo',
    desc: 'Herramientas de IA para la búsqueda de empleo y la reinserción laboral.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    label: 'Tercera edad',
    title: 'Centros de día y residencias',
    desc: 'IA accesible para personas mayores. Comunicación, salud y autonomía digital.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const razones = [
  {
    num: '01',
    title: 'Presencial, siempre',
    desc: 'No somos una academia online. Venimos a vuestra sede para garantizar adopción real, no solo acceso a un vídeo.',
  },
  {
    num: '02',
    title: 'A medida de vuestro colectivo',
    desc: 'Adaptamos el programa a vuestro perfil. No encajamos a la institución en un curso genérico grabado.',
  },
  {
    num: '03',
    title: 'Inclusividad digital',
    desc: 'Explicamos conceptos de IA que los entienda alguien de 70 años o de 12. Sin tecnicismos. Sin fricciones.',
  },
  {
    num: '04',
    title: 'Resultados desde el día 1',
    desc: 'Materiales didácticos y resúmenes en papel hiper-simplificados incluidos en cada sesión.',
  },
];

export default function InstitucionesPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section
          style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}
        >
          <div className="v5-container">
            <div className="flex flex-col items-start" style={{ maxWidth: '760px' }}>
              <span
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  marginBottom: '32px',
                }}
              >
                School Lab · Instituciones
              </span>
              <h1
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(44px, 6vw, 88px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  color: '#FFFFFF',
                  marginBottom: '32px',
                }}
              >
                IA para tu comunidad.
                <br />
                <span style={{ color: '#555555' }}>Nosotros la llevamos.</span>
              </h1>
              <p
                className="v5-reveal"
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '20px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#888888',
                  marginBottom: '48px',
                  maxWidth: '560px',
                }}
              >
                Diseñamos talleres y programas a medida para fundaciones, colegios, ayuntamientos y centros de día. Tú pones el espacio y las personas. Nosotros lo hacemos funcionar.
              </p>
              <div className="v5-reveal flex flex-wrap gap-4">
                <Link
                  href="#contacto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: '#FFFFFF',
                    color: '#080808',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'opacity 200ms ease',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                >
                  Solicitar taller
                </Link>
                <Link
                  href="/school-lab"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#888888',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    border: '1px solid #2A2A2A',
                    borderRadius: '8px',
                    transition: 'border-color 200ms ease, color 200ms ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#555555'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2A2A2A'; (e.currentTarget as HTMLElement).style.color = '#888888'; }}
                >
                  Ver School Lab
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLECTIVOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal flex flex-col items-center text-center" style={{ marginBottom: '80px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                  marginBottom: '16px',
                }}
              >
                Para quién
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Colectivos con los que trabajamos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colectivos.map((c, i) => (
                <div
                  key={c.label}
                  className="v5-reveal"
                  style={{
                    transitionDelay: `${i * 60}ms`,
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '36px',
                  }}
                >
                  <div style={{ color: '#111111', marginBottom: '20px' }}>
                    {c.icon}
                  </div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#999999',
                      marginBottom: '10px',
                    }}
                  >
                    {c.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ AETHER ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <span
                  className="v5-reveal"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    marginBottom: '24px',
                  }}
                >
                  Por qué nosotros
                </span>
                <h2
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                    marginBottom: '24px',
                  }}
                >
                  No somos una plataforma online.
                  <br />
                  <span style={{ color: '#999999' }}>Somos personas reales.</span>
                </h2>
                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '18px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#555555',
                  }}
                >
                  Llevamos la formación presencialmente a vuestra sede. Adaptamos el contenido al colectivo. Y nos aseguramos de que cada persona salga sabiendo usar la IA en su día a día.
                </p>
              </div>

              {/* Right — razones */}
              <div className="flex flex-col gap-0">
                {razones.map((r, i) => (
                  <div
                    key={r.num}
                    className="v5-reveal"
                    style={{
                      transitionDelay: `${i * 80}ms`,
                      padding: '28px 0',
                      borderBottom: i < razones.length - 1 ? '1px solid #EBEBEB' : 'none',
                      display: 'flex',
                      gap: '24px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#CCCCCC',
                        flexShrink: 0,
                        paddingTop: '3px',
                      }}
                    >
                      {r.num}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--v5-font-display)',
                          fontSize: '18px',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                          color: '#111111',
                          marginBottom: '8px',
                        }}
                      >
                        {r.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          lineHeight: 1.7,
                          color: '#666666',
                        }}
                      >
                        {r.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMULARIO ── */}
        <section id="contacto" className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left — copy */}
              <div>
                <span
                  className="v5-reveal"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    marginBottom: '24px',
                  }}
                >
                  Solicitar taller
                </span>
                <h2
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#111111',
                    marginBottom: '24px',
                  }}
                >
                  ¿Interesado en llevar IA a tu organización?
                </h2>
                <p
                  className="v5-reveal"
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '17px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#666666',
                    marginBottom: '40px',
                  }}
                >
                  Cuéntanos tu colectivo, el número de personas y lo que buscas conseguir. Nos ponemos en contacto en menos de 24h.
                </p>
                <div
                  className="v5-reveal"
                  style={{
                    padding: '24px',
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#555555',
                      lineHeight: 1.7,
                    }}
                  >
                    También puedes escribirnos directamente a{' '}
                    <a
                      href="mailto:hola@aetherlabs.es"
                      style={{ color: '#111111', fontWeight: 500, textDecoration: 'none' }}
                    >
                      hola@aetherlabs.es
                    </a>
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <div
                className="v5-reveal"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderRadius: '16px',
                  padding: '40px',
                }}
              >
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#999999',
                        }}
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          color: '#111111',
                          background: '#F7F7F5',
                          border: '1px solid #E0E0E0',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          outline: 'none',
                        }}
                        onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#111111'}
                        onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#999999',
                        }}
                      >
                        Organización
                      </label>
                      <input
                        type="text"
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          color: '#111111',
                          background: '#F7F7F5',
                          border: '1px solid #E0E0E0',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          outline: 'none',
                        }}
                        onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#111111'}
                        onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#999999',
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          color: '#111111',
                          background: '#F7F7F5',
                          border: '1px solid #E0E0E0',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          outline: 'none',
                        }}
                        onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#111111'}
                        onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        style={{
                          fontFamily: 'var(--v5-font-mono)',
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#999999',
                        }}
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        style={{
                          fontFamily: 'var(--v5-font-body)',
                          fontSize: '15px',
                          fontWeight: 300,
                          color: '#111111',
                          background: '#F7F7F5',
                          border: '1px solid #E0E0E0',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          outline: 'none',
                        }}
                        onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#111111'}
                        onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      Colectivo y nº de personas
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Mujeres mayores de 50, ~30 personas"
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#111111',
                        background: '#F7F7F5',
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        outline: 'none',
                      }}
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#111111'}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos el objetivo del taller..."
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#111111',
                        background: '#F7F7F5',
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        outline: 'none',
                        resize: 'none',
                      }}
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#111111'}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0'}
                    />
                  </div>

                  <button
                    type="button"
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      background: '#111111',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '16px 32px',
                      cursor: 'pointer',
                      transition: 'opacity 200ms ease',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.8'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                  >
                    Enviar solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

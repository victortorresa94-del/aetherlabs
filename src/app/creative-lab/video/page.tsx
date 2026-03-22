'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Film, Clock, DollarSign, Clapperboard, Check, Subtitles, Music, Smartphone, FileVideo, MessageSquare, Scissors } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const problemas = [
  {
    icon: DollarSign,
    title: 'Video demasiado caro',
    desc: 'Una productora te pide 3.000-8.000 EUR por un video corporativo de 60 segundos. Para una startup o pyme, no es viable producir contenido en video de forma recurrente.',
  },
  {
    icon: Clock,
    title: 'Demasiado lento',
    desc: 'Preproduccion, rodaje, edicion, revisiones. Un video tarda 4-8 semanas. Para cuando esta listo, la campana ya deberia haber empezado.',
  },
  {
    icon: Film,
    title: 'Una toma, sin iteracion',
    desc: 'Grabas una vez. Si no funciona, toca repetir todo el proceso. No hay margen para iterar sobre lo que ya tienes.',
  },
];

const tiposVideo = [
  {
    title: 'Reels / Short form',
    desc: 'Contenido corto para redes sociales que genera engagement y alcance organico.',
    items: ['3-5 piezas de 15-60 segundos', 'Formato vertical nativo', 'Subtitulos integrados', 'Optimizado para Instagram, TikTok y YouTube Shorts'],
    price: 'Desde 500',
    unit: 'EUR',
    highlighted: false,
  },
  {
    title: 'Video corporativo',
    desc: 'Presentacion profesional de tu empresa para web, inversores o eventos. El video que te representa.',
    items: ['1 pieza de 60-90 segundos', 'Guion profesional', 'Voz en off con IA o profesional', 'Motion graphics y transiciones', 'Formato horizontal + adaptacion vertical'],
    price: 'Desde 1.200',
    unit: 'EUR',
    highlighted: true,
  },
  {
    title: 'Creatividades publicitarias',
    desc: 'Videos cortos disenados especificamente para convertir en campanas de paid media.',
    items: ['Pack de 5 ads en video (15-30s)', 'Hooks de atencion optimizados', 'Variantes A/B por creatividad', 'Formatos para Meta, Google y TikTok Ads'],
    price: 'Desde 800',
    unit: 'EUR',
    highlighted: false,
  },
];

const queIncluye = [
  { icon: FileVideo, title: 'Guion', desc: 'Guion profesional escrito con IA y revisado por nuestro equipo. Estructura, hooks y CTAs incluidos.' },
  { icon: Clapperboard, title: 'Produccion', desc: 'Generacion de video con Runway, Sora y Kling. Calidad cinematografica sin equipo de rodaje.' },
  { icon: Scissors, title: 'Edicion', desc: 'Montaje profesional, color grading, transiciones y motion graphics.' },
  { icon: Music, title: 'Musica', desc: 'Musica libre de derechos seleccionada para cada pieza. Libreria premium incluida.' },
  { icon: Subtitles, title: 'Subtitulos', desc: 'Subtitulos animados integrados. El 85% del video en redes se ve sin sonido.' },
  { icon: Smartphone, title: 'Todos los formatos', desc: 'Horizontal (16:9), vertical (9:16) y cuadrado (1:1). Cada plataforma recibe su formato nativo.' },
];

const proceso = [
  { step: '01', title: 'Brief', desc: 'Definimos el objetivo, la audiencia, el tono y las plataformas. Si no tienes brief, lo creamos contigo.' },
  { step: '02', title: 'Guion + storyboard', desc: 'Escribimos el guion y creamos un storyboard visual para que apruebes la direccion antes de producir.' },
  { step: '03', title: 'Produccion IA', desc: 'Generamos el video con Runway, Sora y Kling. Iteramos rapidamente hasta dar con el resultado.' },
  { step: '04', title: 'Edicion y entrega', desc: 'Montaje final, musica, subtitulos y export en todos los formatos necesarios. Listo para publicar.' },
];

const faqs = [
  {
    q: 'En que plataformas puedo usar los videos?',
    a: 'En todas. Entregamos cada video en los formatos nativos de cada plataforma: Instagram (reels, stories, feed), TikTok, YouTube (Shorts y formato largo), LinkedIn, y formatos para ads en Meta y Google.',
  },
  {
    q: 'Cuanto duran los videos?',
    a: 'Depende del tipo. Los reels y short form son de 15-60 segundos. El video corporativo de 60-90 segundos. Las creatividades publicitarias de 15-30 segundos. Si necesitas duraciones especificas, las adaptamos.',
  },
  {
    q: 'La musica tiene derechos?',
    a: 'Toda la musica que usamos es libre de derechos o con licencia comercial incluida. No tendras problemas en ninguna plataforma.',
  },
  {
    q: 'Puedo recibir los archivos en bruto para editar yo?',
    a: 'Si. Si necesitas los archivos de proyecto o las piezas sin editar para que tu equipo trabaje con ellos, lo incluimos como extra.',
  },
  {
    q: 'Que diferencia hay con un video grabado con camara?',
    a: 'Los videos generados con IA tienen un estilo visual propio, mas cercano al motion graphics y la animacion cinematografica. Son ideales para marcas que no necesitan mostrar personas reales o instalaciones fisicas. Si tu caso requiere grabacion real, lo valoramos.',
  },
];

export default function VideoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToTipos = () => {
    const el = document.getElementById('tipos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{
                display: 'block',
                marginBottom: '24px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0891B2',
              }}
            >
              CREATIVE LAB / VIDEO
            </span>
            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#F5F5F0',
                maxWidth: '820px',
                marginBottom: '28px',
                transitionDelay: '80ms',
                whiteSpace: 'pre-line',
              }}
            >
              {'Video que para el scroll.\nNo que lo decora.'}
            </h1>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '560px',
                marginBottom: '40px',
                transitionDelay: '160ms',
              }}
            >
              Reels, videos corporativos y creatividades publicitarias producidos con IA. Calidad cinematografica, velocidad de startup y coste que tiene sentido.
            </p>
            <div className="v5-reveal flex gap-4 flex-wrap" style={{ transitionDelay: '240ms' }}>
              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Quiero video con IA
              </Link>
              <button
                onClick={scrollToTipos}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: 'transparent',
                  color: 'rgba(245,245,240,0.6)',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  border: '1px solid rgba(245,245,240,0.2)',
                  cursor: 'pointer',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.5)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.9)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.2)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.6)';
                }}
              >
                Ver tipos de video
              </button>
            </div>
          </div>
        </section>

        {/* EL PROBLEMA */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                EL PROBLEMA
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                  maxWidth: '640px',
                }}
              >
                Sabes que necesitas video. Pero el modelo actual no funciona.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {problemas.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="v5-reveal"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderRadius: '12px',
                      padding: '40px',
                      transitionDelay: `${i * 80}ms`,
                    }}
                  >
                    <Icon size={24} style={{ color: '#111111', marginBottom: '20px' }} />
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
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: '#666666',
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIPOS DE VIDEO */}
        <section id="tipos" className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                TIPOS DE VIDEO
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Elige el formato que necesitas.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {tiposVideo.map((tipo, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: tipo.highlighted ? '2px solid #111111' : '1px solid #E0E0E0',
                    borderRadius: '12px',
                    padding: '40px',
                    position: 'relative',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {tipo.highlighted && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '24px',
                        background: '#111111',
                        color: '#F5F5F0',
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 12px',
                        borderRadius: '4px',
                      }}
                    >
                      Mas solicitado
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '22px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {tipo.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#666666',
                      marginBottom: '24px',
                    }}
                  >
                    {tipo.desc}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {tipo.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={16} style={{ color: '#111111', flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: '#444444' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '24px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '28px',
                        fontWeight: 300,
                        color: '#111111',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {tipo.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#999999',
                        marginLeft: '8px',
                      }}
                    >
                      {tipo.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE CON IA */}
        <section className="v5-section" style={{ backgroundColor: '#080808' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#0891B2',
                }}
              >
                POR QUE CON IA
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                  maxWidth: '680px',
                  marginBottom: '24px',
                }}
              >
                Runway, Sora, Kling. La produccion de video ha cambiado.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                  maxWidth: '600px',
                }}
              >
                Las herramientas de generacion de video con IA producen resultados que hace 2 anos habrian costado decenas de miles de euros. Nosotros las dominamos y las ponemos al servicio de tu marca.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
              {[
                { stat: '-80%', label: 'Coste', desc: 'Video profesional a una fraccion del precio de una productora tradicional.' },
                { stat: '5x', label: 'Mas rapido', desc: 'De brief a video final en dias. Sin rodajes, sin equipos, sin logistica.' },
                { stat: '0', label: 'Rodajes', desc: 'Sin camaras, sin estudio, sin desplazamientos. Produccion 100% digital.' },
                { stat: '24h', label: 'Iteracion', desc: 'No te gusta un plano? Lo regeneramos en horas. Iteracion infinita sin regrabar.' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#F5F5F0',
                      marginBottom: '4px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {s.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#0891B2',
                      marginBottom: '12px',
                    }}
                  >
                    {s.label}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: 'rgba(245,245,240,0.5)',
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUE INCLUYE */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                QUE INCLUYE
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Produccion completa. Tu solo apruebas.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {queIncluye.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="v5-reveal"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderRadius: '12px',
                      padding: '32px',
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <Icon size={22} style={{ color: '#111111', marginBottom: '16px' }} />
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '17px',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                        marginBottom: '8px',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: '#666666',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EL PROCESO */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                EL PROCESO
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                De brief a video final en dias.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
              {proceso.map((step, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '12px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: '#0891B2',
                      marginBottom: '16px',
                    }}
                  >
                    {step.step}
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
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '20px',
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#999999',
                }}
              >
                FAQ
              </span>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Preguntas frecuentes
              </h2>
            </div>
            <div className="v5-reveal" style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '24px 28px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#111111',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: '20px',
                        color: '#999999',
                        flexShrink: 0,
                        lineHeight: 1,
                        transition: 'transform 200ms ease',
                        transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px' }}>
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
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-section" style={{ backgroundColor: '#080808', textAlign: 'center' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                Listo para producir video sin complicaciones?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Cuentanos que tipo de video necesitas y te proponemos el formato y presupuesto. Sin compromiso.
              </p>
              <div className="flex gap-4 flex-wrap" style={{ justifyContent: 'center' }}>
                <Link
                  href="/contacto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    background: '#F5F5F0',
                    color: '#080808',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    transition: 'background 200ms ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
                >
                  Contactar
                </Link>
                <a
                  href="https://wa.me/34622052401"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: 'rgba(245,245,240,0.6)',
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: '15px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    border: '1px solid rgba(245,245,240,0.2)',
                    transition: 'border-color 200ms ease, color 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.5)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.9)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.2)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.6)';
                  }}
                >
                  <MessageSquare size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

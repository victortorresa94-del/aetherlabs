'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, Zap, Clock, DollarSign, Image, Check, Repeat, Layers, MessageSquare, Send } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const problemas = [
  {
    icon: AlertTriangle,
    title: 'Ad fatigue constante',
    desc: 'Tus anuncios dejan de funcionar en 7-14 dias. Necesitas creatividades nuevas constantemente, pero tu equipo no da abasto.',
  },
  {
    icon: Clock,
    title: 'Sin velocidad de iteracion',
    desc: 'Para cuando una agencia te entrega las creatividades, la ventana de oportunidad ya paso. El mercado se mueve mas rapido que tu produccion.',
  },
  {
    icon: DollarSign,
    title: 'Agencias caras, resultados lentos',
    desc: 'Pagas 3.000-5.000 EUR al mes por un punado de creatividades. Cada ronda de cambios tarda dias. El ROI no cuadra.',
  },
];

const packs = [
  {
    title: 'Lanzamiento',
    desc: 'Para validar un producto, oferta o campana nueva con creatividades de alto impacto.',
    items: ['5 imagenes estaticas', '2 videos cortos (15-30s)', 'Copies para cada plataforma', 'Formatos adaptados (feed, stories, reels)'],
    price: '600',
    unit: 'EUR',
    highlighted: false,
  },
  {
    title: 'Campana Completa',
    desc: 'Todo lo que necesitas para una campana multicanal con variantes para testing A/B.',
    items: ['10 imagenes estaticas', '4 videos (15-60s)', 'Variantes A/B por creatividad', 'Copies optimizados por plataforma', 'Formatos para Meta, Google, LinkedIn, TikTok'],
    price: '1.200',
    unit: 'EUR',
    highlighted: true,
  },
  {
    title: 'Retainer Mensual',
    desc: 'Produccion continua de creatividades nuevas cada mes. Ideal para equipos con campanas activas permanentes.',
    items: ['20 creatividades/mes (imagen + video)', 'Iteracion segun performance', 'Prioridad en entregas', 'Reunion mensual de resultados'],
    price: '800',
    unit: 'EUR/mes',
    highlighted: false,
  },
];

const queIncluye = [
  { icon: Layers, title: 'Formatos nativos', desc: 'Cada creatividad adaptada al formato nativo de la plataforma: feed, stories, reels, carrusel, display.' },
  { icon: MessageSquare, title: 'Copies incluidos', desc: 'Textos publicitarios escritos con IA, optimizados para cada plataforma y objetivo de campana.' },
  { icon: Repeat, title: 'Iteracion segun performance', desc: 'Analizamos metricas reales y generamos nuevas variantes basadas en lo que funciona.' },
  { icon: Zap, title: 'Produccion con IA', desc: 'Midjourney, DALL-E, Runway y herramientas de edicion avanzada para calidad profesional en tiempo record.' },
  { icon: Image, title: 'Imagen y video', desc: 'No solo estaticos. Videos nativos para reels, stories y anuncios en video que convierten.' },
  { icon: Send, title: 'Entrega lista para subir', desc: 'Archivos organizados por plataforma, formato y variante. Los subes directamente a tu ad manager.' },
];

const proceso = [
  { step: '01', title: 'Brief', desc: 'Recibimos tu briefing: producto, objetivo, audiencia, plataformas. Si no tienes brief, te ayudamos a crearlo.' },
  { step: '02', title: 'Propuesta creativa', desc: 'Presentamos conceptos visuales y direccion creativa antes de producir. Tu apruebas la linea.' },
  { step: '03', title: 'Produccion', desc: 'Generamos todas las creatividades con IA: imagenes, videos, copies y variantes A/B.' },
  { step: '04', title: 'Entrega + iteracion', desc: 'Recibes los archivos organizados por plataforma. Iteramos segun resultados de campana.' },
];

const faqs = [
  {
    q: 'Para que plataformas creais anuncios?',
    a: 'Meta (Facebook e Instagram), Google (Display y YouTube), LinkedIn y TikTok. Cada creatividad se adapta al formato nativo de la plataforma: dimensiones, duracion, estilo visual y copies.',
  },
  {
    q: 'Cuanto tardais en entregar?',
    a: 'El pack de Lanzamiento se entrega en 5-7 dias laborables desde la aprobacion del concepto. La Campana Completa en 7-10 dias. El Retainer Mensual tiene entregas semanales.',
  },
  {
    q: 'Cuantas revisiones incluye?',
    a: 'Todos los packs incluyen 2 rondas de revisiones. Las revisiones adicionales se facturan aparte. En el Retainer Mensual, la iteracion es continua basada en performance.',
  },
  {
    q: 'Los videos incluyen locucion o voz en off?',
    a: 'Los videos cortos estan optimizados para verse sin sonido (subtitulos + graficos). Si necesitas locucion o voz en off con IA, lo anadimos como extra.',
  },
  {
    q: 'Puedo usar las creatividades en campanas que yo mismo gestiono?',
    a: 'Si. Te entregamos los archivos finales en los formatos correctos para cada plataforma. Tu los subes a tu ad manager o se los pasas a tu media buyer.',
  },
];

export default function AnunciosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToPacks = () => {
    const el = document.getElementById('packs');
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
              CREATIVE LAB / ANUNCIOS
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
              }}
            >
              Anuncios que paran el scroll.
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
              Creatividades para Meta, Google, LinkedIn y TikTok Ads producidas con IA. Mas rapido, mas barato y con capacidad de iteracion que una agencia tradicional no puede igualar.
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
                Quiero creatividades
              </Link>
              <button
                onClick={scrollToPacks}
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
                Ver packs
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
                Tus anuncios no funcionan. Y no es por el presupuesto.
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
                La IA no reemplaza la creatividad. La multiplica.
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
                Con herramientas como Midjourney, DALL-E, Runway y Claude, generamos mas variantes, mas rapido y con menos coste. El resultado: creatividades que compiten con producciones de 10.000 EUR.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
              {[
                { stat: '10x', label: 'Mas rapido', desc: 'Lo que una agencia tarda 3 semanas, nosotros lo entregamos en dias.' },
                { stat: '-70%', label: 'Coste', desc: 'Produccion profesional a una fraccion del precio de una agencia tradicional.' },
                { stat: '50+', label: 'Variantes', desc: 'Generamos decenas de variantes para testing. Gana la que mejor convierte.' },
                { stat: '24h', label: 'Iteracion', desc: 'Nuevas versiones en horas, no semanas. Tu campana no espera.' },
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

        {/* PACKS */}
        <section id="packs" className="v5-section" style={{ backgroundColor: '#F7F7F5' }}>
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
                PACKS
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
                Elige el pack que encaja con tu campana.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {packs.map((pack, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: pack.highlighted ? '2px solid #111111' : '1px solid #E0E0E0',
                    borderRadius: '12px',
                    padding: '40px',
                    position: 'relative',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {pack.highlighted && (
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
                      Mas popular
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
                    {pack.title}
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
                    {pack.desc}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {pack.items.map((item, j) => (
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
                        fontSize: '32px',
                        fontWeight: 300,
                        color: '#111111',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {pack.price}
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
                      {pack.unit}
                    </span>
                  </div>
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
                No solo creatividades. Un sistema de produccion.
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
                De brief a creatividades en dias, no semanas.
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
                Necesitas creatividades?
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
                Cuentanos que campana tienes en mente. Te proponemos el pack que mejor encaja y empezamos en dias.
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

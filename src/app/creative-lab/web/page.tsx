'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  EyeOff,
  TrendingDown,
  Clock,
  Building2,
  Zap,
  Calendar,
  Search,
  Smartphone,
  Key,
  BarChart2,
  MessageSquare,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Cpu,
  Palette,
  FileText,
  Layers,
  Send,
} from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function WebServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: '\u00bfCu\u00e1nto cuesta una web?',
      a: 'Depende del tipo. Una landing page de conversi\u00f3n parte de 800\u20ac, una web corporativa completa desde 1.500\u20ac y una web de campa\u00f1a o evento desde 500\u20ac. El precio final depende del n\u00famero de p\u00e1ginas, la complejidad del dise\u00f1o y si necesitas integraciones espec\u00edficas. Siempre damos presupuesto cerrado antes de empezar.',
    },
    {
      q: '\u00bfCu\u00e1nto tard\u00e1is en entregar?',
      a: 'Una landing page se entrega en 1 semana. Una web corporativa en 2-3 semanas. Una web de campa\u00f1a en 3-5 d\u00edas. Gracias a nuestro stack con IA, iteramos mucho m\u00e1s r\u00e1pido que una agencia tradicional sin sacrificar calidad.',
    },
    {
      q: '\u00bfPuedo editar la web yo despu\u00e9s?',
      a: 'S\u00ed. Todas las webs se entregan con acceso completo. Si usamos Antigravity, tienes un editor visual. Si es c\u00f3digo puro (Next.js, HTML/Tailwind), te damos acceso al repositorio. Adem\u00e1s, te hacemos una sesi\u00f3n de formaci\u00f3n para que puedas hacer cambios b\u00e1sicos sin depender de nadie.',
    },
    {
      q: '\u00bfInclu\u00eds hosting y dominio?',
      a: 'El hosting lo configuramos nosotros (normalmente Vercel o Netlify, que tienen planes gratuitos generosos). El dominio lo compras t\u00fa para que sea 100% tuyo desde el d\u00eda 1. Te guiamos en todo el proceso.',
    },
    {
      q: '\u00bfQui\u00e9n escribe los textos de la web?',
      a: 'Nosotros. El copy est\u00e1 incluido en todos los packs. Usamos Claude para generar borradores persuasivos que luego revisamos y ajustamos manualmente. T\u00fa solo tienes que validar el tono y el mensaje. Nada de "env\u00edanos los textos y los metemos".',
    },
    {
      q: '\u00bfQu\u00e9 pasa si no me gusta el resultado?',
      a: 'Antes de desarrollar, presentamos una propuesta visual (paleta, tipograf\u00eda, mood) para que valides la direcci\u00f3n. Durante el desarrollo, tienes acceso en tiempo real a los avances. Y al final hay una ronda de revisi\u00f3n de 3 d\u00edas para ajustes. Si aun as\u00ed no est\u00e1s satisfecho, hablamos y lo solucionamos.',
    },
  ];

  return (
    <main style={{ minHeight: '100vh' }}>
      <ScrollAnimations />
      <Navbar />

      {/* ===================== SECTION 1 — HERO ===================== */}
      <section
        className="v5-section"
        style={{ paddingTop: 160, paddingBottom: 100, backgroundColor: '#080808', color: '#F5F5F0' }}
      >
        <div className="v5-container" style={{ textAlign: 'center' }}>
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: '#0891B2',
              display: 'block',
              marginBottom: 24,
            }}
          >
            CREATIVE LAB &middot; WEB
          </span>
          <h1
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#F5F5F0',
              maxWidth: 800,
              margin: '0 auto 32px',
            }}
          >
            Tu web no deber&iacute;a{'\n'}informar. Deber&iacute;a{'\n'}vender.
          </h1>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(245,245,240,0.6)',
              maxWidth: 640,
              margin: '0 auto 40px',
            }}
          >
            El 70% de las webs corporativas son cat&aacute;logos bonitos que nadie lee.
            Las nuestras est&aacute;n dise&ntilde;adas desde la primera secci&oacute;n para convertir
            un visitante en un lead. Con IA: m&aacute;s r&aacute;pido, m&aacute;s barato, sin sacrificar calidad.
          </p>
          <div className="flex justify-center gap-4 flex-wrap v5-reveal">
            <Link
              href="/contacto"
              style={{
                padding: '16px 32px',
                borderRadius: 0,
                backgroundColor: '#F5F5F0',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'opacity 200ms',
                display: 'inline-block',
              }}
            >
              Hablar de mi web <ArrowRight style={{ display: 'inline', width: 16, height: 16, marginLeft: 4, verticalAlign: 'middle' }} />
            </Link>
            <a
              href="#packs"
              style={{
                padding: '16px 32px',
                borderRadius: 0,
                backgroundColor: 'transparent',
                color: '#F5F5F0',
                border: '1px solid rgba(245,245,240,0.2)',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'border-color 200ms',
                display: 'inline-block',
              }}
            >
              Ver precios y plazos
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 — EL PROBLEMA ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#FFFFFF', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              EL PROBLEMA
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#111111',
              }}
            >
              Tienes web. Pero no trabaja para ti.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <EyeOff size={28} style={{ color: '#0891B2' }} />,
                title: 'No aparece en Google',
                text: 'Una web sin SEO es invisible. El 90% del tr\u00e1fico org\u00e1nico va a los tres primeros resultados. Si no est\u00e1s ah\u00ed, no existes para tu cliente potencial.',
              },
              {
                icon: <TrendingDown size={28} style={{ color: '#0891B2' }} />,
                title: 'Llegan y se van',
                text: 'La tasa de rebote media de una web corporativa es del 70%. El visitante entra, no entiende qu\u00e9 ofreces en 5 segundos y se va. Nunca sabr\u00e1s que estuvo.',
              },
              {
                icon: <Clock size={28} style={{ color: '#0891B2' }} />,
                title: 'Tardaste meses en tenerla',
                text: 'La agencia tard\u00f3 4 meses. Cost\u00f3 el doble del presupuesto inicial. Y ahora no puedes cambiar ni el texto de la home sin llamarles.',
              },
            ].map((item, i) => (
              <div key={i} className="v5-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ marginBottom: 16 }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#666666',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 3 — POR QUÉ CON IA ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#080808', color: '#F5F5F0' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 40 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              POR QU&Eacute; CON IA
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#F5F5F0',
                maxWidth: 700,
              }}
            >
              Lo que antes tardaba 6 semanas, ahora tarda 10 d&iacute;as.
            </h2>
          </div>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(245,245,240,0.6)',
              maxWidth: 700,
              marginBottom: 56,
            }}
          >
            Con las herramientas de IA que dominamos — Claude para el copy, Antigravity y Claude Code
            para el desarrollo, Midjourney para los assets visuales — podemos iterar en horas lo que
            antes tardaba semanas. Eso se traduce en menos coste para ti y m&aacute;s velocidad de lanzamiento.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '10 d\u00edas', label: 'Entrega media de landing page' },
              { value: '\u201360%', label: 'Menos coste vs. agencia tradicional' },
              { value: '100%', label: 'Tuya. C\u00f3digo, acceso y control total' },
            ].map((stat, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  textAlign: 'center',
                  padding: '40px 24px',
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: 12,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 40,
                    fontWeight: 700,
                    color: '#0891B2',
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4 — QUÉ CONSTRUIMOS ===================== */}
      <section
        id="packs"
        className="v5-section"
        style={{ backgroundColor: '#080808', color: '#F5F5F0' }}
      >
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              QU&Eacute; CONSTRUIMOS
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#F5F5F0',
              }}
            >
              Elige el tipo de web que necesitas.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Web corporativa */}
            <div
              className="v5-reveal flex flex-col justify-between"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: 12,
                padding: 32,
              }}
            >
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
                  <Building2 size={24} style={{ color: '#080808' }} />
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase' as const,
                      color: '#FFFFFF',
                      backgroundColor: '#080808',
                      padding: '4px 10px',
                      borderRadius: 4,
                    }}
                  >
                    M&Aacute;S COMPLETA
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: 8,
                  }}
                >
                  Web corporativa
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'rgba(8,8,8,0.6)',
                    marginBottom: 24,
                  }}
                >
                  Para presentar tu empresa, generar confianza y recibir leads de forma recurrente.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 24 }}>
                  {[
                    'Entrega 2-3 semanas',
                    'Stack Antigravity + Claude Code',
                    'Dise\u00f1o completo, copy, SEO, responsive, formulario',
                    '4+ p\u00e1ginas',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 13,
                        color: 'rgba(8,8,8,0.7)',
                        padding: '6px 0',
                        borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: 16,
                  }}
                >
                  Desde 1.500&euro;
                </div>
                <Link
                  href="/contacto"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px 32px',
                    borderRadius: 0,
                    backgroundColor: '#080808',
                    color: '#F5F5F0',
                    fontFamily: 'var(--v5-font-body)',
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: 'none',
                    transition: 'opacity 200ms',
                  }}
                >
                  Pedir presupuesto <ArrowRight style={{ display: 'inline', width: 14, height: 14, marginLeft: 4, verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>

            {/* Card 2 — Landing page */}
            <div
              className="v5-reveal flex flex-col justify-between"
              style={{
                background: '#FFFFFF',
                border: '2px solid #0891B2',
                borderRadius: 12,
                padding: 32,
                transitionDelay: '80ms',
              }}
            >
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
                  <Zap size={24} style={{ color: '#0891B2' }} />
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase' as const,
                      color: '#FFFFFF',
                      backgroundColor: '#0891B2',
                      padding: '4px 10px',
                      borderRadius: 4,
                    }}
                  >
                    M&Aacute;S POPULAR
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: 8,
                  }}
                >
                  Landing page de conversi&oacute;n
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'rgba(8,8,8,0.6)',
                    marginBottom: 24,
                  }}
                >
                  Para vender un producto o servicio espec&iacute;fico. Una p&aacute;gina. Un objetivo. M&aacute;xima conversi&oacute;n.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 24 }}>
                  {[
                    'Entrega 1 semana',
                    'Stack HTML/Tailwind o Antigravity',
                    'Copy persuasivo, A/B test, seguimiento leads',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 13,
                        color: 'rgba(8,8,8,0.7)',
                        padding: '6px 0',
                        borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: 16,
                  }}
                >
                  Desde 800&euro;
                </div>
                <Link
                  href="/contacto"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px 32px',
                    borderRadius: 0,
                    backgroundColor: '#0891B2',
                    color: '#FFFFFF',
                    fontFamily: 'var(--v5-font-body)',
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: 'none',
                    transition: 'opacity 200ms',
                  }}
                >
                  Pedir presupuesto <ArrowRight style={{ display: 'inline', width: 14, height: 14, marginLeft: 4, verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>

            {/* Card 3 — Web de campaña */}
            <div
              className="v5-reveal flex flex-col justify-between"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: 12,
                padding: 32,
                transitionDelay: '160ms',
              }}
            >
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
                  <Calendar size={24} style={{ color: '#080808' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: 8,
                  }}
                >
                  Web de campa&ntilde;a o evento
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'rgba(8,8,8,0.6)',
                    marginBottom: 24,
                  }}
                >
                  Para lanzamientos, webinars o eventos con vida corta. R&aacute;pida, focalizada, efectiva.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 24 }}>
                  {[
                    'Entrega 3-5 d\u00edas',
                    'Registro r\u00e1pido, integraci\u00f3n email, pixel',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 13,
                        color: 'rgba(8,8,8,0.7)',
                        padding: '6px 0',
                        borderBottom: i < 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: 16,
                  }}
                >
                  Desde 500&euro;
                </div>
                <Link
                  href="/contacto"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px 32px',
                    borderRadius: 0,
                    backgroundColor: '#080808',
                    color: '#F5F5F0',
                    fontFamily: 'var(--v5-font-body)',
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: 'none',
                    transition: 'opacity 200ms',
                  }}
                >
                  Pedir presupuesto <ArrowRight style={{ display: 'inline', width: 14, height: 14, marginLeft: 4, verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5 — LO QUE INCLUYE SIEMPRE ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#F7F7F5', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              INCLUIDO EN TODAS LAS WEBS
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#111111',
              }}
            >
              Cosas que otras agencias cobran aparte.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                icon: <Search size={22} style={{ color: '#0891B2' }} />,
                title: 'SEO t\u00e9cnico desde el d\u00eda 1',
                desc: 'Metadatos, estructura sem\u00e1ntica, velocidad de carga, sitemap, robots.txt. Todo configurado antes de lanzar, no 3 meses despu\u00e9s.',
              },
              {
                num: '02',
                icon: <Smartphone size={22} style={{ color: '#0891B2' }} />,
                title: 'Responsive perfecto',
                desc: 'Cada p\u00e1gina se dise\u00f1a y prueba en m\u00f3vil, tablet y escritorio. No es un "ya se adapta", es un dise\u00f1o pensado para cada pantalla.',
              },
              {
                num: '03',
                icon: <Zap size={22} style={{ color: '#0891B2' }} />,
                title: 'Velocidad de carga',
                desc: 'Im\u00e1genes optimizadas, c\u00f3digo limpio, lazy loading. Tu web carga en menos de 2 segundos. Google lo premia y el usuario lo agradece.',
              },
              {
                num: '04',
                icon: <Key size={22} style={{ color: '#0891B2' }} />,
                title: 'Control total',
                desc: 'El c\u00f3digo es tuyo. El dominio es tuyo. El hosting est\u00e1 a tu nombre. Si ma\u00f1ana quieres cambiar de proveedor, puedes hacerlo sin pedir permiso.',
              },
              {
                num: '05',
                icon: <BarChart2 size={22} style={{ color: '#0891B2' }} />,
                title: 'Analytics configurado',
                desc: 'Google Analytics 4, Search Console y eventos clave configurados. Desde el d\u00eda 1 sabes qu\u00e9 p\u00e1ginas funcionan y cu\u00e1les no.',
              },
              {
                num: '06',
                icon: <MessageSquare size={22} style={{ color: '#0891B2' }} />,
                title: 'Copy incluido',
                desc: 'No tienes que mandarnos los textos. Los escribimos nosotros con IA y revisi\u00f3n humana. Persuasivos, claros y optimizados para SEO.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  padding: 28,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderRadius: 12,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: 11,
                      fontWeight: 500,
                      color: '#CCCCCC',
                    }}
                  >
                    {item.num}
                  </span>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#666666',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6 — TRABAJO REAL ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#080808', color: '#F5F5F0' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              TRABAJO REAL
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#F5F5F0',
              }}
            >
              Webs que hemos construido.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Aetherlabs.es',
                desc: 'La web que est\u00e1s viendo ahora.',
                sector: 'AGENCIA DE IA',
                stat: '4 Labs \u00b7 15+ p\u00e1ginas \u00b7 Next.js + Vercel',
              },
              {
                name: 'Totemica',
                desc: 'Go-to-market completo para EE.UU.',
                sector: 'LANZAMIENTO INTERNACIONAL',
                stat: null,
              },
            ].map((project, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  padding: 32,
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: 12,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: '#0891B2',
                    display: 'block',
                    marginBottom: 12,
                  }}
                >
                  {project.sector}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#F5F5F0',
                    marginBottom: 8,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'rgba(245,245,240,0.6)',
                    marginBottom: project.stat ? 16 : 0,
                  }}
                >
                  {project.desc}
                </p>
                {project.stat && (
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: 12,
                      color: 'rgba(245,245,240,0.35)',
                    }}
                  >
                    {project.stat}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 7 — EL PROCESO ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#FFFFFF', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              EL PROCESO
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#111111',
              }}
            >
              De la idea al lanzamiento en 4 pasos.
            </h2>
          </div>
          <div style={{ maxWidth: 700 }}>
            {[
              {
                num: '01',
                title: 'Brief y claridad',
                time: '1 sesi\u00f3n',
                desc: 'Rellen\u00e1is nuestro brief de 20 preguntas en 30 minutos. Si hay dudas, hacemos una sesi\u00f3n de claridad para alinear objetivos, tono y estructura.',
              },
              {
                num: '02',
                title: 'Propuesta visual',
                time: '3 d\u00edas',
                desc: 'Os presentamos 2-3 direcciones est\u00e9ticas (paleta, tipograf\u00eda, mood). Eleg\u00eds una y empezamos a construir.',
              },
              {
                num: '03',
                title: 'Dise\u00f1o y desarrollo',
                time: '7-14 d\u00edas',
                desc: 'Construimos la web en el stack elegido con acceso en tiempo real a los avances. Pod\u00e9is dar feedback en cualquier momento.',
              },
              {
                num: '04',
                title: 'Revisi\u00f3n, entrega y lanzamiento',
                time: '3 d\u00edas',
                desc: 'Ronda final de feedback, ajustes t\u00e9cnicos, configuraci\u00f3n de analytics y SEO. Lanzamos y os damos las llaves.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="v5-reveal flex gap-6"
                style={{
                  padding: '24px 0',
                  borderBottom: i < 3 ? '1px solid #E0E0E0' : 'none',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#CCCCCC',
                    minWidth: 28,
                    paddingTop: 2,
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <div className="flex items-center gap-3" style={{ marginBottom: 6 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: 18,
                        fontWeight: 700,
                        color: '#111111',
                      }}
                    >
                      {step.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-mono)',
                        fontSize: 11,
                        color: '#999999',
                      }}
                    >
                      {step.time}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: '#666666',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 8 — STACK TECNOLÓGICO ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#080808', color: '#F5F5F0' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              C&Oacute;MO LO CONSTRUIMOS
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#F5F5F0',
              }}
            >
              Tecnolog&iacute;a que hace la diferencia.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu size={28} style={{ color: '#0891B2' }} />,
                title: 'Antigravity + Claude Code',
                desc: 'Para desarrollo r\u00e1pido de webs complejas. Antigravity como builder visual, Claude Code para l\u00f3gica personalizada y componentes avanzados.',
              },
              {
                icon: <FileText size={28} style={{ color: '#0891B2' }} />,
                title: 'Claude para el copy',
                desc: 'Generamos borradores persuasivos con Claude, los revisamos manualmente y los optimizamos para SEO. Copy profesional sin tiempos muertos.',
              },
              {
                icon: <Palette size={28} style={{ color: '#0891B2' }} />,
                title: 'Freepik + IA para los assets',
                desc: 'Im\u00e1genes, iconos y gr\u00e1ficos generados o seleccionados con IA. Sin bancos de im\u00e1genes gen\u00e9ricas. Cada visual tiene intenci\u00f3n.',
              },
            ].map((tool, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  padding: 28,
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: 12,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div style={{ marginBottom: 16 }}>{tool.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#F5F5F0',
                    marginBottom: 10,
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 9 — PARA QUIÉN ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#F7F7F5', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              PARA QUI&Eacute;N
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#111111',
              }}
            >
              Tiene sentido trabajar juntos si...
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="v5-reveal">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Necesitas una web que genere leads, no solo que "est\u00e9 bonita".',
                  'Quieres lanzar r\u00e1pido sin perder calidad.',
                  'No quieres depender de tu agencia para cambiar un texto.',
                  'Tu web actual tiene m\u00e1s de 2 a\u00f1os y no te representa.',
                  'Est\u00e1s lanzando un producto o servicio nuevo y necesitas presencia digital.',
                  'Valoras la velocidad, la claridad y los resultados por encima del "dise\u00f1o art\u00edstico".',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #E0E0E0',
                    }}
                  >
                    <Check size={18} style={{ color: '#0891B2', flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: '#444444',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
              <h3
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: 20,
                }}
              >
                Y NO tiene sentido si:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Buscas una web de 200\u20ac en Fiverr. No es nuestro juego.',
                  'Quieres un e-commerce con 500 productos y gesti\u00f3n de inventario (eso es Shopify).',
                  'No tienes claro qu\u00e9 vendes ni a qui\u00e9n. Primero necesitas estrategia, no web.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #E0E0E0',
                    }}
                  >
                    <X size={18} style={{ color: '#CCCCCC', flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: '#999999',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 10 — FAQ ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#FFFFFF', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#0891B2',
                display: 'block',
                marginBottom: 16,
              }}
            >
              PREGUNTAS FRECUENTES
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#111111',
              }}
            >
              Lo que nos preguntan siempre.
            </h2>
          </div>
          <div style={{ maxWidth: 700 }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  borderBottom: '1px solid #E0E0E0',
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full"
                  style={{
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#111111',
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: '#999999',
                      flexShrink: 0,
                      transition: 'transform 200ms',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 300ms ease',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: '#666666',
                      paddingBottom: 20,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 11 — CTA FINAL ===================== */}
      <section
        className="v5-section"
        style={{
          backgroundColor: '#080808',
          color: '#F5F5F0',
          textAlign: 'center',
        }}
      >
        <div className="v5-container">
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#F5F5F0',
              maxWidth: 700,
              margin: '0 auto 20px',
            }}
          >
            &iquest;Tienes ya en la cabeza c&oacute;mo deber&iacute;a ser tu web? Hablemos.
          </h2>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(245,245,240,0.5)',
              maxWidth: 540,
              margin: '0 auto 40px',
            }}
          >
            Cu&eacute;ntanos qu&eacute; necesitas. Te respondemos en menos de 24 horas con una propuesta clara,
            un precio cerrado y un plazo real.
          </p>
          <div className="flex justify-center gap-4 flex-wrap v5-reveal">
            <Link
              href="/contacto"
              style={{
                padding: '16px 32px',
                borderRadius: 0,
                backgroundColor: '#F5F5F0',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'opacity 200ms',
                display: 'inline-block',
              }}
            >
              Hablar de mi web <ArrowRight style={{ display: 'inline', width: 16, height: 16, marginLeft: 4, verticalAlign: 'middle' }} />
            </Link>
            <a
              href="https://wa.me/34627281459"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 32px',
                borderRadius: 0,
                backgroundColor: 'transparent',
                color: '#F5F5F0',
                border: '1px solid rgba(245,245,240,0.2)',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'border-color 200ms',
                display: 'inline-block',
              }}
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

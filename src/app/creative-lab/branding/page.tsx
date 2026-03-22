'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Palette, Type, FileText, Layout, Image, Brush, Check, Eye, Layers, Sparkles, BookOpen, MessageSquare, PenTool } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const problemas = [
  {
    icon: PenTool,
    title: 'Logo amateur',
    desc: 'Tu logo parece hecho en Canva en 20 minutos. No transmite confianza ni profesionalidad. Y cada vez que lo ves, lo sabes.',
  },
  {
    icon: Eye,
    title: 'Inconsistencia visual',
    desc: 'Cada presentacion, cada post, cada propuesta usa colores y tipografias diferentes. Tu marca no tiene una voz visual coherente.',
  },
  {
    icon: FileText,
    title: 'Sin brand guidelines',
    desc: 'No tienes un documento que defina como se usa tu marca. Cada persona del equipo interpreta los colores y el logo a su manera.',
  },
];

const packsBranding = [
  {
    title: 'Identidad Basica',
    desc: 'Para startups y empresas nuevas que necesitan una base visual solida desde el primer dia.',
    items: ['Logo principal + variantes', 'Paleta de colores (primarios y secundarios)', 'Seleccion tipografica', 'Guia de uso basica (1 pagina)', 'Archivos en todos los formatos (SVG, PNG, PDF)'],
    price: 'Desde 800',
    unit: 'EUR',
    highlighted: false,
  },
  {
    title: 'Identidad Completa',
    desc: 'La identidad visual completa de tu marca. Todo lo que necesitas para que cualquier persona pueda representar tu marca correctamente.',
    items: ['Logo principal + variantes + icono', 'Brand book completo (20-30 paginas)', 'Paleta de colores + sistema de color', 'Tipografias + jerarquia tipografica', 'Plantillas para redes sociales', 'Papeleria digital (tarjeta, firma email, factura)'],
    price: 'Desde 1.800',
    unit: 'EUR',
    highlighted: true,
  },
  {
    title: 'Rebranding',
    desc: 'Para marcas existentes que necesitan evolucionar sin perder su esencia ni empezar de cero.',
    items: ['Auditoria de marca actual', 'Evolucion del logo', 'Actualizacion del sistema visual', 'Brand book actualizado', 'Guia de transicion'],
    price: 'Desde 1.200',
    unit: 'EUR',
    highlighted: false,
  },
];

const entregables = [
  { icon: Brush, title: 'Logo en todos los formatos', desc: 'SVG, PNG, PDF, EPS. Fondo claro, oscuro, monocromo. Listo para cualquier uso.' },
  { icon: BookOpen, title: 'Brand book', desc: 'Documento completo con reglas de uso, espaciado, aplicaciones correctas e incorrectas.' },
  { icon: Palette, title: 'Paleta de colores', desc: 'Colores primarios, secundarios y neutros. Codigos HEX, RGB y CMYK.' },
  { icon: Type, title: 'Tipografias', desc: 'Tipografias seleccionadas con jerarquia clara: titulos, cuerpo, destacados, mono.' },
  { icon: Layout, title: 'Plantillas social media', desc: 'Templates para Instagram, LinkedIn y stories. Editables en Figma o Canva.' },
  { icon: FileText, title: 'Papeleria digital', desc: 'Tarjeta de visita, firma de email, plantilla de factura y plantilla de propuesta.' },
];

const proceso = [
  { step: '01', title: 'Discovery', desc: 'Entendemos tu empresa, tu audiencia, tu competencia y tu vision. Definimos la personalidad de marca.' },
  { step: '02', title: 'Moodboard', desc: 'Creamos moodboards visuales con Midjourney para definir la direccion estetica antes de disenar.' },
  { step: '03', title: 'Diseno', desc: 'Disenamos el logo, la paleta, la tipografia y todos los elementos del sistema visual.' },
  { step: '04', title: 'Entrega brand book', desc: 'Compilamos todo en un brand book profesional y entregamos los archivos finales.' },
];

const faqs = [
  {
    q: 'Cuanto tarda un proyecto de branding?',
    a: 'La Identidad Basica tarda 2-3 semanas. La Identidad Completa entre 4-6 semanas. El Rebranding depende del alcance, pero normalmente 3-5 semanas.',
  },
  {
    q: 'Cuantas propuestas de logo presentais?',
    a: 'Presentamos 3 direcciones creativas diferentes. Una vez elegida la direccion, iteramos hasta llegar a la version final. Incluimos 2 rondas de revision.',
  },
  {
    q: 'Como usais la IA en branding?',
    a: 'Usamos Midjourney para generar moodboards y explorar direcciones visuales 10x mas rapido. Claude nos ayuda en el proceso de naming y copywriting de marca. El diseno final es siempre profesional y hecho a medida.',
  },
  {
    q: 'Puedo editar las plantillas yo mismo?',
    a: 'Si. Las plantillas de redes sociales se entregan en Figma y/o Canva Pro. Las puedes editar tu equipo sin necesidad de disenador.',
  },
  {
    q: 'Haceis naming tambien?',
    a: 'Si, como servicio adicional. Usamos Claude para generar y validar opciones de naming, y verificamos disponibilidad de dominio y redes sociales.',
  },
];

export default function BrandingPage() {
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
              CREATIVE LAB / BRANDING
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
              Tu marca deberia hablar antes que tu.
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
              Identidad visual completa: logo, paleta, tipografia, brand book y plantillas. Disenamos con IA para iterar mas rapido sin sacrificar calidad. Tu marca transmite profesionalidad desde el primer contacto.
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
                Quiero mi identidad visual
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
                Si tu marca no transmite confianza, nada mas importa.
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
                Elige el nivel de identidad que necesitas.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {packsBranding.map((pack, i) => (
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
                      Recomendado
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
                        fontSize: '28px',
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

        {/* ENTREGABLES */}
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
                ENTREGABLES
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
                Todo lo que recibes. Sin sorpresas.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {entregables.map((item, i) => {
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
                IA para explorar. Criterio profesional para decidir.
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
                No usamos IA para generar un logo en 5 minutos. La usamos para explorar 10x mas direcciones creativas, crear moodboards visuales en horas y validar naming con Claude. El resultado final es siempre profesional y hecho a medida.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { icon: Image, title: 'Moodboards con Midjourney', desc: 'Exploramos decenas de direcciones visuales antes de disenar. En horas, no semanas.' },
                { icon: Sparkles, title: 'Naming con Claude', desc: 'Claude genera y valida opciones de nombre, verifica disponibilidad de dominio y coherencia de marca.' },
                { icon: Layers, title: '10x mas iteraciones', desc: 'Donde un proceso tradicional presenta 2-3 opciones, nosotros exploramos 20-30 antes de seleccionar.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
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
                    <Icon size={24} style={{ color: '#F5F5F0', marginBottom: '20px' }} />
                    <h3
                      style={{
                        fontFamily: 'var(--v5-font-display)',
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#F5F5F0',
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: 'rgba(245,245,240,0.5)',
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
                De la idea a la identidad completa.
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
                Tu marca merece verse como lo que es.
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
                Cuentanos sobre tu empresa y te proponemos el nivel de identidad que necesitas. Sin compromiso.
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

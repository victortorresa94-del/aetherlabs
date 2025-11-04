// File: src/app/landing/page.tsx
"use client";
// Next.js App Router + TailwindCSS (Client Component para usar Framer Motion)
// Landing orientada a conversión para el servicio "Campañas visuales con IA en 72h"
// — Aether Labs —

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// (Opcional) Mueve metadata a app/layout.tsx o a un Head component server-side.
// Este page.tsx es Client Component para poder usar Framer Motion sin errores.

function GradientBG() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[#0B0F15]"
    >
      {/* Retrofuture soft glow */}
      <div className="absolute -top-24 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/15 via-fuchsia-500/10 to-transparent blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 h-[36rem] w-[36rem] rounded-full bg-gradient-to-t from-blue-500/10 via-emerald-400/10 to-transparent blur-3xl" />
      <div className="absolute -left-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl" />
    </div>
  );
}

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function CTAButtons() {
  return (
    <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <Link
        href="#packs"
        className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
      >
        Ver precios y packs
      </Link>
      <Link
        href="https://tally.so/r/XXXXXXXX" // TODO: Reemplazar por Typeform/Tally real
        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Solicitar demo gratuita
      </Link>
    </div>
  );
}

export default function Landing() {
  return (
    <main className="relative min-h-screen scroll-smooth text-white">
      <GradientBG />

      {/* NAV SIMPLIFICADA (usa estilos de la web actual: ajusta logo/rutas según tu proyecto) */}
      

      {/* HERO */}
      <section className="relative border-b border-white/10 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Listo en 72 horas
            </Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Campañas visuales con IA en <span className="text-emerald-300">72h</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/80">
              Tus fotos → anuncios listos para vender. Entregamos <strong>imágenes</strong>, <strong>reels</strong> y <strong>copies</strong> optimizados para Instagram y TikTok. Sin sesiones, sin esperas.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-white/75 sm:grid-cols-2">
              <li className="flex items-center gap-2"><span className="text-emerald-300">▸</span> 15–50 imágenes finales</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300">▸</span> Copy + hooks listos</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300">▸</span> 1 ronda de cambios</li>
              <li className="flex items-center gap-2"><span className="text-emerald-300">▸</span> Entrega en 72h</li>
            </ul>
            <CTAButtons />
            <p className="mt-3 text-xs text-white/50">Garantía suave: si el look no encaja, añadimos 5 creatividades sin coste.</p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:ml-auto">
              <img
                src="/images/stock/hero-collage.jpg"
                alt="Ejemplo de campaña con IA"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* BENEFICIOS RÁPIDOS */}
      <section className="border-b border-white/10 py-12" id="beneficios">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[ 
            { title: "Velocidad real", text: "Producción en 72h desde tu brief + fotos.", icon: (
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-white"><path fill="currentColor" d="M2 12h4l3 7 4-14 3 7h6"/></svg>
            )},
            { title: "Sin sesiones", text: "Ahorra en logística, modelos y alquileres.", icon: (
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-white"><path fill="currentColor" d="M4 6h16v12H4z M8 10h8 M7 4l2 2 M15 4l2 2"/></svg>
            )},
            { title: "Listo para Ads", text: "Formatos 1080×1350 y 1080×1920 + hooks.", icon: (
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-white"><path fill="currentColor" d="M3 4h18v12H3z M7 20h10 M8 8h8"/></svg>
            )},
            { title: "Entrega cerrada", text: "1 ronda de cambios. 50/50. Sin sorpresas.", icon: (
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-white"><path fill="currentColor" d="M5 12l4 4L19 6"/></svg>
            )},
          ].map((b, i) => (
            <motion.div 
              key={b.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="mb-4 opacity-90">{b.icon}</div>
              <h3 className="text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.text}</p>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* EJEMPLOS / GALERÍA */}
      <section className="border-b border-white/10 py-16" id="ejemplos">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Ejemplos (DEMO)</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70">Estas son campañas DEMO creadas con inteligencia artificial para mostrar estilos posibles a partir de fotos sencillas de producto. No hay sesiones ni modelos: solo IA + edición y criterio de marca.</p>
            </div>
            <Link href="#packs" className="hidden text-sm text-emerald-300 hover:underline sm:inline">Ver packs →</Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { key: "twojeys", title: "TwoJeys style", img: "/images/spec/twojeys.jpg", video: "/videos/spec/twojeys.mp4" },
              { key: "nike", title: "Nike concept", img: "/images/spec/nike.jpg", video: "/videos/spec/nike.mp4" },
              { key: "cosmetica", title: "Skincare / cosmética", img: "/images/spec/cosmetica.jpg", video: "/videos/spec/cosmetica.mp4" },
            ].map((c, i) => (
              <motion.article
                key={c.key}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60">DEMO CASE</p>
                    <h3 className="mt-1 text-base font-semibold">{c.title}</h3>
                  </div>
                  <a href={c.video} className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/10">Ver reel</a>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* PACKS / PRECIOS */}
      <section className="border-b border-white/10 py-16" id="packs">
        <Container>
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Packs y precios</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-white/70">
            Elige el nivel que necesitas. Siempre con entrega en 72h y 1 ronda de cambios incluida.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "497 €",
                features: ["15 imágenes finales", "3 copys base", "Plan de campaña 1 página"],
                highlighted: false,
              },
              {
                name: "Pro",
                price: "997 €",
                features: [
                  "30 imágenes finales",
                  "3 variaciones de copy",
                  "Guía de publicación 7 días",
                ],
                highlighted: true,
              },
              {
                name: "Launch",
                price: "1.900 €",
                features: [
                  "50 imágenes finales",
                  "Guía + plan de 2 páginas",
                  "DWY 45' para montar la campaña",
                ],
                highlighted: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border ${
                  p.highlighted ? "border-emerald-400/40 bg-emerald-400/5 shadow-[0_0_0_1px_rgba(16,185,129,0.2)]" : "border-white/10 bg-white/5"
                } p-6`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-emerald-400 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-900">
                    Recomendado
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 text-3xl font-semibold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex-1" />
                <Link
                  href="https://buy.stripe.com/test_XXXXXXXX" // TODO: link de pago real por pack
                  className={`mt-4 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    p.highlighted
                      ? "bg-white text-gray-950 hover:bg-slate-100"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Reservar {p.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-4 max-w-xl text-center text-xs text-white/50">
            Política: 50% al reservar, 50% al entregar. 1 ronda de cambios (24h). Kill fee 25% si se cancela tras 24h.
          </p>
        </Container>
      </section>

      {/* PROCESO */}
      <section className="border-b border-white/10 py-16" id="proceso">
        <Container>
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Cómo funciona</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: "1", title: "Envío de fotos", text: "Nos compartes 3–5 fotos y tu @ de Instagram." },
              { step: "2", title: "Brief express", text: "Objetivo, tono y referencias en 3 preguntas." },
              { step: "3", title: "Producción", text: "Generación + edición + montaje de reels." },
              { step: "4", title: "Entrega", text: "Pack final + guía + una ronda de ajustes." },
              { step: "5", title: "Publica", text: "Ya estás listo para IG/TikTok o Ads." },
            ].map((s, idx) => (
              <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="absolute -top-3 left-4 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-gray-900">Paso {s.step}</span>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
                {idx < 4 && <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-white/20 lg:block" />}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="https://tally.so/r/XXXXXXXX" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 hover:bg-slate-100">
              Solicitar demo gratuita
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 py-16" id="faq">
        <Container>
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {[
              {
                q: "¿Necesito una sesión de fotos profesional?",
                a: "No. Partimos de tus fotos actuales (incluso hechas con móvil) y generamos creatividades de alto impacto listas para publicar.",
              },
              {
                q: "¿Incluye gestión de anuncios?",
                a: "Los packs incluyen piezas + copies + guía. En el pack Launch hacemos una sesión DWY de 45' para montar la campaña en tu cuenta sin pedir accesos.",
              },
              {
                q: "¿Qué formatos entregáis?",
                a: "Imágenes 1080×1350 y 1080×1920. Reels verticales 9:16. Archivos en una carpeta Drive organizada por categorías.",
              },
              {
                q: "¿Cómo son los pagos?",
                a: "50% al reservar el slot y 50% al entregar. 1 ronda de cambios en 24h. Kill fee 25% si se cancela tras 24h.",
              },
            ].map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-sm font-semibold">
                  {item.q}
                  <span className="ml-6 text-white/50 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold">¿Listo para vender con mejor creatividad desde esta semana?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
            Pide tu demo y te mostramos cómo quedaría tu mini-campaña en menos de 48h.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="#packs" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Ver packs
            </Link>
            <Link href="https://tally.so/r/XXXXXXXX" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 hover:bg-slate-100">
              Solicitar demo
            </Link>
          </div>
        </Container>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="border-t border-white/10 py-10 text-white/60">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src="/images/brand/aether-mark.svg" alt="Aether" className="h-6 w-6" />
            <p className="text-xs">© {new Date().getFullYear()} Aether Labs. IA práctica para negocios reales.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/legal" className="hover:text-white">Legal</Link>
            <Link href="/privacy" className="hover:text-white">Privacidad</Link>
            <a href="mailto:hola@aetherlabs.es" className="hover:text-white">hola@aetherlabs.es</a>
          </div>
        </Container>
      </footer>

      {/* JSON-LD básico */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Campañas con IA en 72h",
            brand: {
              "@type": "Brand",
              name: "Aether Labs",
            },
            description:
              "Tus fotos → anuncios listos para vender en 72 horas. Imágenes, reels y copies.",
            offers: [
              { "@type": "Offer", name: "Starter", price: "497", priceCurrency: "EUR" },
              { "@type": "Offer", name: "Pro", price: "997", priceCurrency: "EUR" },
              { "@type": "Offer", name: "Launch", price: "1900", priceCurrency: "EUR" },
            ],
            url: "https://aetherlabs.es/landing",
          }),
        }}
      />
    </main>
  );
}

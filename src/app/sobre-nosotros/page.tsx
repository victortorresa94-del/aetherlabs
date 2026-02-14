'use client';

import React from 'react';
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Link from 'next/link';

export default function SobreNosotros() {
  return (
    <main className="bg-zinc-50 dark:bg-black text-slate-900 dark:text-slate-100 font-sans selection:bg-[#82ff1f] selection:text-black">
      <HeaderNavigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black pt-20 px-6 relative overflow-hidden">
        {/* Background Grid - Subtle */}
        <div className="absolute inset-0 opacity-[0.1] z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col space-y-8">
            <span className="text-[#82ff1f] font-mono font-bold tracking-[0.2em] uppercase text-sm">
              Arquitectura Humana
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-none font-extrabold text-white max-w-5xl tracking-tight">
              Infraestructura humana para <span className="text-white/40">sistemas inteligentes.</span>
            </h1>
            <p className="max-w-2xl text-xl text-slate-400 font-light leading-relaxed">
              No solo construimos software; diseñamos los pilares que sostienen el crecimiento de las empresas más ambiciosas mediante la simbiosis de talento experto y arquitectura de sistemas inteligentes.
            </p>
            <div className="flex items-center space-x-4 pt-6">
              <div className="w-12 h-[1px] bg-[#82ff1f]"></div>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Estándar Aether Labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section (Architectural Reality Path) */}
      <section className="bg-white dark:bg-black pt-48 pb-24 overflow-hidden">
        <div className="w-full px-6 md:px-12">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 max-w-[1800px] mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white tracking-tighter mb-6 leading-[1.1]">
                De Idea a <span className="font-instrument italic font-normal text-[1.05em]">Realidad</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Hacemos fácil lo difícil. Construimos el puente entre lo etéreo y lo tangible, transformando conceptos abstractos en resultados de negocio medibles.
              </p>
            </div>
            <div className="pb-4">
              <Link href="/contacto" className="group flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-slate-900 dark:text-white uppercase transition-all bg-[#82ff1f] px-6 py-4 rounded-full text-black hover:scale-105 duration-300">
                Charlar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </header>

          <div className="relative bg-black rounded-[40px] p-12 lg:p-24 overflow-hidden shadow-2xl border border-white/5 w-full">
            {/* Architectural Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#82ff1f]/40 to-transparent"></div>
              <div className="absolute top-[40%] left-[25%] h-48 w-px bg-[#82ff1f]/30"></div>
              <div className="absolute bottom-[40%] left-[75%] h-48 w-px bg-[#82ff1f]/30"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 max-w-[1600px] mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-all group-hover:bg-white/10 shadow-[0_0_15px_rgba(130,255,31,0.05)]">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl uppercase tracking-[0.2em] mb-4">Idea</h3>
                  <p className="text-slate-400 leading-loose text-base font-light">
                    Todo empieza en lo abstracto. Entendemos tu visión antes de escribir una sola línea de código.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-8 group">
                <div className="w-16 h-16 bg-[#82ff1f]/10 border border-[#82ff1f]/20 rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#82ff1f]/20 shadow-[0_0_20px_rgba(130,255,31,0.15)]">
                  <span className="text-[#82ff1f] font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl uppercase tracking-[0.2em] mb-4">Concepto</h3>
                  <p className="text-slate-400 leading-loose text-base font-light">
                    Traducimos ideas complejas en arquitecturas lógicas y estrategias accionables.
                  </p>
                </div>
              </div>

              {/* Step 3 - Active/Highlighted */}
              <div className="flex flex-col gap-8 group relative">
                <div className="absolute -inset-8 bg-[#82ff1f]/10 rounded-[40px] blur-3xl opacity-30"></div>
                <div className="relative w-16 h-16 bg-[#82ff1f] rounded-2xl flex items-center justify-center shadow-[0_0_35px_rgba(130,255,31,0.6)] animate-pulse">
                  <span className="text-black font-black text-xl">03</span>
                </div>
                <div className="relative">
                  <h3 className="text-[#82ff1f] font-bold text-xl uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                    Sistema
                    <span className="w-3 h-3 rounded-full bg-[#82ff1f] animate-ping"></span>
                  </h3>
                  <p className="text-white leading-loose text-base font-semibold">
                    Construimos la infraestructura tecnológica robusta que soporta tu crecimiento exponencial.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col gap-8 group">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center transition-all group-hover:border-[#82ff1f]/50 shadow-[0_0_20px_rgba(130,255,31,0.1)]">
                  <span className="text-white font-bold text-xl">04</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl uppercase tracking-[0.2em] mb-4">Realidad</h3>
                  <p className="text-slate-400 leading-loose text-base font-light">
                    Resultados tangibles. Ventas, automatización y eficiencia operativa medible a través de datos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-24 flex items-center justify-center opacity-40">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="px-10 text-xs uppercase tracking-[0.5em] text-white font-bold">Architectural Reality Path</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid (Hybrid) */}
      <section className="bg-zinc-50 dark:bg-black py-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 (Black) - Victor */}
          <div className="aspect-square bg-black p-12 flex flex-col justify-between group overflow-hidden relative border-r border-[#82ff1f]/10">
            <div className="z-10 relative">
              <span className="text-[#82ff1f] font-mono font-bold text-xs tracking-widest uppercase mb-4 block">Founder</span>
              <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">Víctor Torres</h4>
              <p className="text-white/40 text-sm mt-2 font-mono">CEO</p>
            </div>
            <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80">
              <Image
                src="/images/Victor-CEO.png"
                alt="Víctor Torres"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 2 (White) - David */}
          <div className="aspect-square bg-white p-12 flex flex-col justify-between group overflow-hidden relative border-r border-zinc-100">
            <div className="z-10 relative">
              <span className="text-[#82ff1f] font-mono font-bold text-xs tracking-widest uppercase mb-4 block">Operation</span>
              <h4 className="text-3xl font-bold text-black uppercase tracking-tighter">David Montesinos</h4>
              <p className="text-black/40 text-sm mt-2 font-mono">Head of Institutional Relations</p>
            </div>
            <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100">
              <Image
                src="/images/david-montesinos.jpg"
                alt="David Montesinos"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 3 (Black) - Xavi */}
          <div className="aspect-square bg-black p-12 flex flex-col justify-between group overflow-hidden relative border-r border-[#82ff1f]/10">
            <div className="z-10 relative">
              <span className="text-[#82ff1f] font-mono font-bold text-xs tracking-widest uppercase mb-4 block">Commercial</span>
              <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">Xavi Rodriguez</h4>
              <p className="text-white/40 text-sm mt-2 font-mono">Business Development</p>
            </div>
            <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="Xavi Rodriguez"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 4 (White) - Juan Sebastian */}
          <div className="aspect-square bg-white p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="z-10 relative">
              <span className="text-[#82ff1f] font-mono font-bold text-xs tracking-widest uppercase mb-4 block">Technology</span>
              <h4 className="text-3xl font-bold text-black uppercase tracking-tighter">Juan Sebastian</h4>
              <p className="text-black/40 text-sm mt-2 font-mono">AI Builder</p>
            </div>
            <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                alt="Juan Sebastian"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section (Black) */}
      <section className="bg-black py-40 px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12 flex justify-center">
            <div className="w-16 h-1 bg-[#82ff1f]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
            Creemos que el orden no es un estado, sino una <span className="font-instrument italic text-[#82ff1f] text-[1.1em]">disciplina</span>. Nuestra misión es dotar a las compañías de la estructura necesaria para que la genialidad humana sea <span className="text-white/40">escalable por diseño.</span>
          </h2>
          <p className="mt-16 text-slate-500 uppercase tracking-[0.4em] text-sm font-bold font-mono">
            Aether Labs Manifesto 2026
          </p>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-extrabold text-black mb-6">Nodos de Operación</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Nuestra red de consultoría opera de forma distribuida, con centros estratégicos de diseño en los principales hubs tecnológicos.</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4 border-b border-slate-100 pb-4">
                  <span className="w-2 h-2 rounded-full bg-[#82ff1f]"></span>
                  <span className="text-black font-bold">Barcelona, ES</span>
                  <span className="text-slate-400 text-sm ml-auto font-mono">HQ Regional</span>
                </li>
                <li className="flex items-center space-x-4 border-b border-slate-100 pb-4">
                  <span className="w-2 h-2 rounded-full bg-[#82ff1f]"></span>
                  <span className="text-black font-bold">Colombia</span>
                  <span className="text-slate-400 text-sm ml-auto font-mono">Ops Center</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="w-2 h-2 rounded-full bg-[#82ff1f]"></span>
                  <span className="text-black font-bold">Global, Remote</span>
                  <span className="text-slate-400 text-sm ml-auto font-mono">Digital Lab</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-zinc-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                {/* Using a placeholder or conceptual map image if available, else a stylish gradient/map */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-300 mix-blend-multiply"></div>

                {/* Points */}
                <div className="absolute top-[32%] left-[48%] flex flex-col items-center group">
                  <div className="w-3 h-3 bg-black rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  <span className="text-[10px] font-bold mt-1 text-black bg-white px-1.5 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">BCN</span>
                </div>
                <div className="absolute top-[40%] left-[20%] flex flex-col items-center group">
                  <div className="w-3 h-3 bg-black rounded-full border-2 border-white shadow-lg"></div>
                  <span className="text-[10px] font-bold mt-1 text-black bg-white px-1.5 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">CDMX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
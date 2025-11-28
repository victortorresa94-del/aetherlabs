import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Clock, Zap, BarChart3 } from 'lucide-react';

interface ProjectDetailProps {
  title: string;
  subtitle: string;
  category: string;
  client: string;
  timeline: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  heroImage: string;
  gallery: string[];
  projectLink?: string;
}

export default function ProjectDetail({
  title,
  subtitle,
  category,
  client,
  timeline,
  services,
  challenge,
  solution,
  results,
  heroImage,
  gallery,
  projectLink,
}: ProjectDetailProps) {
  return (
    <main className="bg-black text-white min-h-screen pt-32">
      {/* Header del Proyecto - Alineado con el estilo Hero de Orchids */}
      <section className="container px-6 md:px-12 lg:px-24 pb-16">
        <Link
          href="/proyectos"
          className="inline-flex items-center text-sm text-[#a0a0a0] hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Volver a proyectos
        </Link>

        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#808080] mb-6">
            {category}
          </p>
          {/* Tipografía ajustada: font-light y tamaños grandes como en la home */}
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-light text-white mb-8 leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[#c8c8c8] font-light leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Detalles y Narrativa */}
      <section className="container px-6 md:px-12 lg:px-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Sidebar con datos - Estilo tarjeta oscura */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a] sticky top-32">
              {/* Imagen movida al sidebar */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#2a2a2a] mb-8">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h3 className="text-lg font-medium text-white mb-8">Ficha Técnica</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-[#808080] uppercase tracking-wider mb-2">Cliente</p>
                  <p className="text-base text-[#e0e0e0] font-light">{client}</p>
                </div>
                <div className="w-full h-px bg-[#2a2a2a]" />
                <div>
                  <p className="text-xs text-[#808080] uppercase tracking-wider mb-2">Timeline</p>
                  <p className="text-base text-[#e0e0e0] font-light">{timeline}</p>
                </div>
                <div className="w-full h-px bg-[#2a2a2a]" />
                <div>
                  <p className="text-xs text-[#808080] uppercase tracking-wider mb-3">Servicios</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s, i) => (
                      <span key={i} className="text-xs border border-[#2a2a2a] px-3 py-1.5 rounded-full text-[#a0a0a0]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                {projectLink && (
                  <>
                    <div className="w-full h-px bg-[#2a2a2a]" />
                    <div className="pt-2">
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-white text-black font-semibold text-sm py-3 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      >
                        Ver solución
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Contenido Principal - Limpio, sin iconos de colores */}
          <div className="lg:col-span-8 space-y-20">

            {/* El Reto */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-6 h-6 text-white stroke-[1.5]" />
                <h2 className="text-3xl font-light text-white">El Reto</h2>
              </div>
              <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">
                {challenge}
              </p>
            </div>

            {/* La Solución */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-6 h-6 text-white stroke-[1.5]" />
                <h2 className="text-3xl font-light text-white">La Solución</h2>
              </div>
              <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">
                {solution}
              </p>
            </div>

            {/* Resultados - Tarjeta destacada alineada con estética */}
            <div className="bg-[#0a0a0a] p-10 rounded-2xl border border-[#2a2a2a]">
              <div className="flex items-center gap-4 mb-8">
                <BarChart3 className="w-6 h-6 text-white stroke-[1.5]" />
                <h2 className="text-2xl font-light text-white">Resultados Reales</h2>
              </div>
              <ul className="grid gap-6">
                {results.map((result, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-[#c8c8c8] text-lg font-light">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      {gallery && gallery.length > 0 && (
        <section className="container px-6 md:px-12 lg:px-24 mb-32">
          <h2 className="text-3xl font-light text-white mb-12">Galería del Proyecto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((img, index) => (
              <div key={index} className={`relative rounded-xl overflow-hidden border border-[#2a2a2a] ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Final - Minimalista */}
      <section className="py-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8">
            ¿Buscas resultados similares?
          </h2>
          <p className="text-lg text-[#a0a0a0] mb-12 max-w-2xl mx-auto font-light">
            Hablemos de cómo podemos aplicar esta misma tecnología a tu negocio hoy mismo.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-black font-semibold text-sm tracking-wide py-4 px-10 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Empezar Proyecto
          </Link>
        </div>
      </section>
    </main>
  );
}
"use client";

import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';

import Image from 'next/image';
import IdeaFormSection from '@/components/sections/idea-form-section';

export default function IAGenerativaPage() {
  const services = [
    {
      image: '/images/skyflex/gallery-1.jpg',
      title: 'Fotos de producto',
      description: 'Imágenes profesionales para moda, cosmética, electrónica y gastronomía sin necesidad de estudio fotográfico.',
      examples: ['Moda', 'Cosmética', 'Electrónica', 'Gastronomía'],
      href: '/servicios/ia-generativa/fotos-producto'
    },
    {
      image: '/images/avatars/man-hoodie.jpg',
      title: 'Avatares y portavoces IA',
      description: 'Pack completo: Creamos tu avatar digital hiperrealista (como Daniel) y te formamos para que generes tu propio contenido sin límites.',
      examples: ['Avatar Personal', 'Formación', 'Autonomía'],
      href: '/servicios/ia-generativa/avatares'
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/high-end-video-production-setup-professi-19315278-20251119011117.jpg',
      title: 'Anuncios y vídeos',
      description: 'Spots de producto, fashion clips y contenido para redes sociales tipo TwoJeys.',
      examples: ['Spots', 'Fashion clips', 'Reels', 'TikTok'],
      href: '/servicios/ia-generativa/anuncios-videos'
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/luxury-modern-interior-design-empty-livi-d490b2f5-20251119011116.jpg',
      title: 'Virtual staging y tours',
      description: 'Transforma espacios vacíos en hogares amueblados y crea tours virtuales inmobiliarios.',
      examples: ['Real estate', 'Interiorismo', 'Tours 360'],
      href: '/servicios/ia-generativa/virtual-staging'
    },
    {
      image: '/images/avatars/woman-mic.jpg',
      title: 'Contenido UGC con IA',
      description: 'Servicio "Done-for-you": Creamos tus vídeos de principio a fin. Elige entre usar tu avatar, influencers IA (como Melissa) o perfiles anónimos.',
      examples: ['Gestión Total', 'Guionización', 'Edición Viral'],
      href: '/servicios/ia-generativa/ugc'
    },
    {
      image: '/images/skyflex/friends-laughing.jpg',
      title: 'Campañas 360',
      description: 'Servicio integral que incluye fotos de producto, vídeos, reels y gestión de Ads. Lo hacemos absolutamente todo.',
      examples: ['Branding', 'Storytelling', 'Identidad visual', 'Ads'],
      href: '/servicios/ia-generativa/campanas-360'
    },
    {
      image: '/images/services/ia-generativa/web-ia.png',
      title: 'Webs',
      description: 'Diseño y desarrollo web potenciado por IA para crear experiencias únicas y optimizadas.',
      examples: ['Landing Pages', 'E-commerce', 'Portfolios'],
      href: '/servicios/ia-generativa/web'
    },
    {
      image: '/images/services/ia-generativa/reels-ia.png',
      title: 'Reels',
      description: 'Creación de contenido vertical dinámico y viral utilizando las últimas herramientas de vídeo IA.',
      examples: ['Viral Content', 'Trends', 'Shorts'],
      href: '/servicios/ia-generativa/reels'
    },
    {
      image: '/images/munchs/poster-frame.jpg',
      title: 'Branding',
      description: 'Identidad visual completa: Mockups, Brandboard, Logotipo, Paleta de colores, Tipografías e Ideas de contenido.',
      examples: ['Brandboard', 'Mockups', 'Social Media'],
      href: '/servicios/ia-generativa/branding'
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />

      <section className="pt-32 pb-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              Servicios / IA Generativa
            </p>
            <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
              Creatividad sin límites
            </h1>
            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
              Crea fotos, vídeos y campañas que parecen de estudio real.
              Contenido profesional sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-black rounded-2xl overflow-hidden border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a] hover:translate-y-[-4px] block flex flex-col h-full"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#a0a0a0] mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#808080] rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-[#1a1a1a] flex items-center text-white font-medium group-hover:text-[#a0a0a0] transition-colors">
                    Ver servicio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-[#1a1a1a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Aprende cómo lo hacemos
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Tutoriales rápidos sobre nuestro proceso creativo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/labs/creative/tutorials/skyflex" className="group">
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a] transition-all duration-300 group-hover:border-[#4a4a4a] h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#222] transition-colors">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cómo creamos Skyflex Shoes
                </h3>
                <p className="text-[#a0a0a0] text-sm mb-4 flex-grow">
                  El proceso completo desde el concepto hasta la campaña final.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#808080]">
                    5 min lectura
                  </span>
                  <span className="text-white text-sm font-medium group-hover:text-[#82ff1f] transition-colors">
                    Leer →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/labs/creative/tutorials/virtual-staging" className="group">
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a] transition-all duration-300 group-hover:border-[#4a4a4a] h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#222] transition-colors">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Virtual Staging en 10 minutos
                </h3>
                <p className="text-[#a0a0a0] text-sm mb-4 flex-grow">
                  Transforma espacios vacíos en hogares amueblados.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#808080]">
                    10 min lectura
                  </span>
                  <span className="text-white text-sm font-medium group-hover:text-[#82ff1f] transition-colors">
                    Leer →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/labs/creative/tutorials/avatares" className="group">
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a] transition-all duration-300 group-hover:border-[#4a4a4a] h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#222] transition-colors">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Avatares realistas paso a paso
                </h3>
                <p className="text-[#a0a0a0] text-sm mb-4 flex-grow">
                  Crea portavoces digitales que parecen reales.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#808080]">
                    8 min lectura
                  </span>
                  <span className="text-white text-sm font-medium group-hover:text-[#82ff1f] transition-colors">
                    Leer →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <IdeaFormSection />

      <Footer />
    </main>
  );
}

import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function IAGenerativaPage() {
  const services = [
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/professional-product-photography-of-luxu-5b45edfe-20251119011116.jpg',
      title: 'Fotos de producto',
      description: 'Imágenes profesionales para moda, cosmética, electrónica y gastronomía sin necesidad de estudio fotográfico.',
      examples: ['Moda', 'Cosmética', 'Electrónica', 'Gastronomía'],
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/professional-portrait-of-digital-avatar--c1693b5c-20251119011116.jpg',
      title: 'Avatares y portavoces IA',
      description: 'Crea portavoces digitales realistas que hablan por tu marca en cualquier idioma.',
      examples: ['Presentadores', 'Embajadores', 'Tutoriales'],
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/high-end-video-production-setup-professi-19315278-20251119011117.jpg',
      title: 'Anuncios y vídeos',
      description: 'Spots de producto, fashion clips y contenido para redes sociales tipo TwoJeys.',
      examples: ['Spots', 'Fashion clips', 'Reels', 'TikTok'],
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/luxury-modern-interior-design-empty-livi-d490b2f5-20251119011116.jpg',
      title: 'Virtual staging y tours',
      description: 'Transforma espacios vacíos en hogares amueblados y crea tours virtuales inmobiliarios.',
      examples: ['Real estate', 'Interiorismo', 'Tours 360'],
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/content-creator-filming-with-smartphone--143bb571-20251119011116.jpg',
      title: 'Contenido UGC con IA',
      description: 'Genera contenido estilo usuario sin necesidad de creadores reales.',
      examples: ['Reviews', 'Unboxing', 'Testimonios'],
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/creative-brand-campaign-concept-modern-p-060d774e-20251119011155.jpg',
      title: 'Campañas conceptuales',
      description: 'Desarrollamos campañas completas para marcas ficticias o reales como Skyflex Shoes.',
      examples: ['Branding', 'Storytelling', 'Identidad visual'],
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
              <div
                key={index}
                className="group bg-black rounded-2xl overflow-hidden border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a] hover:translate-y-[-4px]"
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
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#808080] rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              ¿Listo para crear contenido profesional?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-10">
              Cuéntanos qué necesitas y te mostramos cómo la IA puede ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
              >
                Quiero este servicio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/labs/creative"
                className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-base py-4 px-8 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Ver ejemplos en el Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
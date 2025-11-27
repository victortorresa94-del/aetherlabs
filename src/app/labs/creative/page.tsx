'use client';

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Image as ImageIcon, Video, Sparkles, Download, Eye, Wand2, Users } from 'lucide-react';

interface Demo {
  type: 'image' | 'video';
  title: string;
  category: string;
  description: string;
  prompt: string;
  image: string;
}

interface Tutorial {
  title: string;
  description: string;
  duration: string;
}

const demos: Demo[] = [
  {
    type: 'image',
    title: 'Skyflex Shoes - Campaña',
    category: 'Producto',
    description: 'Zapatillas deportivas en entorno urbano nocturno con efectos de neón.',
    prompt: 'Athletic sneakers floating in neon-lit urban night scene, dramatic lighting, product photography',
    image: '/images/creative/skyflex.jpg',
  },
  {
    type: 'image',
    title: 'Cosmética Premium',
    category: 'Producto',
    description: 'Producto de skincare con elementos naturales y iluminación suave.',
    prompt: 'Luxury skincare product with natural elements, soft studio lighting, elegant composition',
    image: '/images/creative/cosmetica.jpg',
  },
  {
    type: 'video',
    title: 'TwoJeys Fashion Spot',
    category: 'Moda',
    description: 'Spot de joyería con modelos digitales en estética minimalista.',
    prompt: 'Fashion jewelry commercial, minimalist aesthetic, elegant models, slow motion',
    image: '/images/creative/twojeys.jpg',
  },
  {
    type: 'video',
    title: 'Real Estate Tour',
    category: 'Inmobiliario',
    description: 'Tour virtual de propiedad con staging digital.',
    prompt: 'Virtual property tour, modern interior, natural lighting, smooth camera movement',
    image: '/images/creative/real-estate.jpg',
  },
  {
    type: 'image',
    title: 'Gastronomía Gourmet',
    category: 'Food',
    description: 'Plato gourmet con presentación editorial.',
    prompt: 'Gourmet dish food photography, editorial style, dramatic lighting, shallow depth of field',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Gastronomia',
  },
  {
    type: 'image',
    title: 'Tech Product',
    category: 'Electrónica',
    description: 'Dispositivo electrónico en ambiente futurista.',
    prompt: 'Tech device in futuristic environment, sleek design, blue accent lighting',
    image: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Tech+Product',
  },
];

const tutorials: Tutorial[] = [
  {
    title: 'Cómo creamos Skyflex Shoes',
    description: 'El proceso completo desde el concepto hasta la campaña final.',
    duration: '5 min',
  },
  {
    title: 'Virtual Staging en 10 minutos',
    description: 'Transforma espacios vacíos en hogares amueblados.',
    duration: '10 min',
  },
  {
    title: 'Avatares realistas paso a paso',
    description: 'Crea portavoces digitales que parecen reales.',
    duration: '8 min',
  },
];

export default function CreativeLabPage() {
  console.log('Rendering CreativeLabPage');
  return (
    <div className="min-h-screen bg-black">
      <HeaderNavigation />

      <main>
        <section className="pt-32 pb-20 bg-black">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
                Labs / Creative Lab
              </p>
              <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
                Explora la creatividad IA
              </h1>
              <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
                Prueba la IA generativa antes de contratarla.
                Ejemplos reales de lo que podemos crear juntos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a0a]">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border-2 border-[#2a2a2a] p-8 md:p-12 mb-20">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Wand2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                      Generador de Fotos de Producto
                    </h2>
                    <p className="text-[#a0a0a0] text-lg mb-6">
                      Prueba nuestra tecnología de IA generativa. Sube una imagen de tu producto
                      y mira cómo la transformamos en contenido profesional.
                    </p>
                    <Link
                      href="https://generador-de-fotos-de-productos-159705655877.us-west1.run.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white font-semibold text-lg hover:text-[#82ff1f] transition-colors"
                    >
                      Probar <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border-2 border-[#2a2a2a] p-8 md:p-12 mb-20">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                      Creador de Influencers IA
                    </h2>
                    <p className="text-[#a0a0a0] text-lg mb-6">
                      Genera modelos totalmente realistas según estilo, sector o estética de tu marca.
                    </p>
                    <Link
                      href="/labs/creative/influencer"
                      className="inline-flex items-center text-white font-semibold text-lg hover:text-[#82ff1f] transition-colors"
                    >
                      Probar <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                  Galería de demos
                </h2>
                <p className="text-[#a0a0a0]">
                  Ejemplos reales generados con IA
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a] hover:translate-y-[-4px]"
                >
                  <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {demo.type === 'video' ? (
                        <Video className="h-12 w-12 text-[#4a4a4a]" />
                      ) : (
                        <ImageIcon className="h-12 w-12 text-[#4a4a4a]" />
                      )}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-xs px-3 py-1 bg-black/80 text-white rounded-full backdrop-blur-sm">
                        {demo.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {demo.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm mb-4">
                      {demo.description}
                    </p>
                    <div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#2a2a2a]">
                      <p className="text-xs text-[#808080] mb-1 uppercase tracking-wider">
                        Prompt usado
                      </p>
                      <p className="text-sm text-[#a0a0a0] italic">
                        &quot;{demo.prompt}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
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
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-black rounded-2xl p-6 border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm mb-4">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#808080]">
                      {tutorial.duration} lectura
                    </span>
                    <button className="text-white text-sm font-medium hover:text-[#c8c8c8] transition-colors">
                      Leer →
                    </button>
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
                ¿Listo para crear tu proyecto?
              </h2>
              <p className="text-lg text-[#a0a0a0] mb-10">
                Si algo de lo que has visto te inspira, hablemos de tu idea.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-block bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Empezar mi proyecto
                </Link>
                <Link
                  href="/servicios/ia-generativa"
                  className="inline-block bg-transparent text-white font-semibold text-base py-4 px-8 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
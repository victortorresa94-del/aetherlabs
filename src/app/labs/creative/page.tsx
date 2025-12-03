"use client";

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Image as ImageIcon, Users, Fingerprint, BookOpen, ArrowRight, ExternalLink, Wand2 } from 'lucide-react';

export default function CreativeLabPage() {
  const tools = [
    {
      title: 'Generador de Fotos de Producto',
      description: 'Sube una imagen de tu producto y mira cómo la transformamos en contenido profesional.',
      image: '/images/creative/skyflex-fence.jpg',
      icon: ImageIcon,
      link: 'https://generador-de-fotos-de-productos-159705655877.us-west1.run.app',
      tag: 'Imagen Generativa'
    },
    {
      title: 'Editor de fotos con IA',
      description: 'Editor de fotos con IA. Retoca, mejora y transforma tus imágenes con herramientas de última generación.',
      image: '/images/learn/nano-banana-user.jpg',
      icon: Wand2,
      link: 'https://nano-banana-studio-159705655877.us-west1.run.app',
      tag: 'Editor IA'
    },
    {
      title: 'Generador de Influencers IA',
      description: 'Crea modelos totalmente realistas según estilo, sector o estética de tu marca.',
      image: '/images/avatars/woman-mic.jpg',
      icon: Users,
      link: 'https://ugc-avatar-studio-159705655877.us-west1.run.app',
      tag: 'Avatar & Video'
    },
    {
      title: 'Analizador de skin care en directo',
      description: 'Analizador facial en tiempo real que recomienda rutinas de skincare y maquillaje personalizadas.',
      image: '/images/creative/cosmetica.png',
      icon: Fingerprint,
      link: '#',
      tag: 'Computer Vision'
    },
    {
      title: 'Generador de cuentos e historias',
      description: 'Web app educativa que narra historias históricas con vídeos generados por IA y voz en off.',
      image: '/images/creative/chleopatra-egypt.png',
      icon: BookOpen,
      link: 'https://chleopatra-history-reimagined-159705655877.us-west1.run.app',
      tag: 'Storytelling'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <HeaderNavigation />

      <main>
        <section className="pt-32 pb-20 bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
                Labs / Creative Playground
              </p>
              <h1 className="text-5xl md:text-[5rem] font-light text-white mb-6 leading-tight">
                Creative Lab
              </h1>
              <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
                Un espacio experimental donde probamos los límites de la IA generativa.
                Juega, explora y descubre nuestras herramientas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a0a]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.link}
                  target={tool.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative bg-[#111] rounded-3xl overflow-hidden border border-[#2a2a2a] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 hover:border-[#82ff1f]/50 flex flex-col h-full"
                >
                  {/* Image Container with 3D-like effect */}
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-white font-medium">
                        {tool.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-20 flex flex-col flex-grow">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 border border-[#333] group-hover:bg-[#82ff1f] group-hover:text-black transition-all duration-300 shadow-lg">
                      <tool.icon className="h-6 w-6 text-white group-hover:text-black transition-colors" />
                    </div>

                    <h3 className="text-2xl font-light text-white mb-3 group-hover:text-[#82ff1f] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-[#a0a0a0] leading-relaxed mb-6 flex-grow">
                      {tool.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                      Probar herramienta
                      {tool.link.startsWith('http') ? (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-black">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                ¿Tienes una idea loca?
              </h2>
              <p className="text-lg text-[#a0a0a0] mb-10">
                Podemos crear herramientas personalizadas como estas para tu marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Hablemos
                  <ArrowRight className="ml-2 h-5 w-5" />
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
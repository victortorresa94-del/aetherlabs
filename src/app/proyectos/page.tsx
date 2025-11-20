import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProyectosPage() {
  const projects = [
    {
      title: 'Skyflex Shoes',
      category: 'IA Generativa',
      description: 'Campaña completa de producto para marca de calzado deportivo. Fotos de producto, vídeo promocional y anuncios para redes sociales.',
      technologies: ['IA Generativa', 'Fotografía Producto', 'Vídeo Marketing'],
      deliverables: [
        '20 fotos de producto',
        'Vídeo de 30 segundos',
        '10 anuncios verticales',
        'Guía visual',
      ],
      // Imagen de zapatillas futuristas
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      link: '/proyectos/skyflex', // Carpeta 'skyflex'
      stats: {
        timeframe: '2 semanas',
        deliverables: '30+',
        platforms: '4',
      },
    },
    {
      title: 'TwoJeys Style Spot',
      category: 'IA Generativa',
      description: 'Spot cinematográfico de 60 segundos para marca de joyería premium con estética minimalista y modelos generados por IA.',
      technologies: ['IA Generativa', 'Vídeo', 'Motion Graphics'],
      deliverables: [
        'Spot 60s en 4K',
        'Versiones RRSS',
        'Stills campaña',
        'Assets digitales',
      ],
      // Imagen de estilo moda/joyería
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
      link: '/proyectos/anillos', // Carpeta 'anillos'
      stats: {
        timeframe: '3 semanas',
        deliverables: '15',
        platforms: '6',
      },
    },
    {
      title: 'Suma Salut',
      category: 'Automatización',
      description: 'Sistema de automatización para clínica de salud. Agente de atención telefónica, bot de WhatsApp y organización interna con ClickUp.',
      technologies: ['Agentes IA', 'Automatización', 'Integraciones'],
      deliverables: [
        'Agente de voz',
        'Bot WhatsApp 24/7',
        'Automatización citas',
        'Dashboard métricas',
      ],
      // Imagen de tecnología médica/salud
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      link: '/proyectos/suma-salut', // Carpeta 'suma-salut'
      stats: {
        timeframe: '4 semanas',
        ahorro: '40h/semana',
        satisfaction: '95%',
      },
    },
    {
      title: 'Nova Burger',
      category: 'IA Generativa',
      description: 'Anuncio televisivo para cadena de hamburguesas. Producto hero shots, ambientación y secuencias animadas generadas con IA.',
      technologies: ['IA Generativa', 'Food Photography', 'Motion'],
      deliverables: [
        'Spot TV 30s',
        'Fotos menú premium',
        'Animaciones pantallas',
        'Contenido delivery',
      ],
      // Imagen de hamburguesa gourmet
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
      link: '/contacto', // Placeholder hasta crear carpeta
      stats: {
        timeframe: '2 semanas',
        deliverables: '25',
        formats: '8',
      },
    },
    {
      title: 'LuxHome Real Estate',
      category: 'IA Generativa',
      description: 'Tours virtuales y virtual staging para agencia inmobiliaria de lujo. Transformación de espacios vacíos en hogares amueblados.',
      technologies: ['Virtual Staging', 'Tours 360', 'Fotografía'],
      deliverables: [
        '5 tours 360°',
        '30 imágenes staging',
        'Vídeo fly-through',
        'Renders exteriores',
      ],
      // Imagen de interior de lujo
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
      link: '/contacto', // Placeholder hasta crear carpeta
      stats: {
        timeframe: '3 semanas',
        properties: '5',
        views: '10k+',
      },
    },
    {
      title: 'FitPro Academy',
      category: 'Automatización',
      description: 'Sistema de gestión automatizada para academia de fitness. Agente de ventas, onboarding automático y seguimiento personalizado.',
      technologies: ['Agentes IA', 'CRM Automation', 'Email Marketing'],
      deliverables: [
        'Agente ventas',
        'Onboarding auto',
        'Seguimiento IA',
        'Dashboard alumnos',
      ],
      // Imagen de fitness/tecnología
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
      link: '/contacto', // Placeholder hasta crear carpeta
      stats: {
        timeframe: '5 semanas',
        conversion: '+45%',
        retention: '+30%',
      },
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />
      
      <section className="pt-32 pb-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              Proyectos
            </p>
            <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
              IA que funciona para negocios reales
            </h1>
            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
              Casos de uso reales donde la inteligencia artificial resolvió problemas y generó resultados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl overflow-hidden border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a]"
              >
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Columna de Imagen */}
                  <div className="md:col-span-2 relative min-h-[300px] md:min-h-full bg-[#1a1a1a]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Columna de Contenido */}
                  <div className="md:col-span-3 p-8">
                    <h2 className="text-3xl font-semibold text-white mb-3">
                      {project.title}
                    </h2>
                    <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-[#808080] mb-3">
                        Tecnologías
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm px-3 py-1 bg-[#1a1a1a] text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-[#808080] mb-3">
                        Entregables
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                            <span className="text-sm text-[#c8c8c8]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6 pb-6 border-b border-[#2a2a2a]">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={i}>
                          <p className="text-xs uppercase tracking-wider text-[#808080] mb-1">
                            {key === 'timeframe' && 'Tiempo'}
                            {key === 'deliverables' && 'Entregables'}
                            {key === 'platforms' && 'Plataformas'}
                            {key === 'ahorro' && 'Ahorro'}
                            {key === 'satisfaction' && 'Satisfacción'}
                            {key === 'conversion' && 'Conversión'}
                            {key === 'retention' && 'Retención'}
                            {key === 'properties' && 'Propiedades'}
                            {key === 'views' && 'Visitas'}
                            {key === 'formats' && 'Formatos'}
                          </p>
                          <p className="text-xl font-semibold text-white">{value}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={project.link}
                      className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all group"
                    >
                      Ver proyecto
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
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
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-10">
              Cuéntanos tu idea y te mostramos cómo la IA puede hacerla realidad.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
            >
              Empezar mi proyecto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
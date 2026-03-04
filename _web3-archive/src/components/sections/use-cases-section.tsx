import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const UseCasesSection = () => {
  const cases = [
    {
      title: 'Skyflex Shoes',
      description: 'Campaña completa de producto con fotos, vídeo y anuncios generados con IA.',
      image: '/images/skyflex/car-scene.jpg',
      tags: ['IA Generativa', 'Producto', 'Campaña'],
      link: '/proyectos/skyflex',
    },
    {
      title: 'El hombre de los anillos',
      description: 'Spot de moda y joyería creado íntegramente con inteligencia artificial.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/elegant-jewelry-and-fashion-editorial-ph-90a8aaf6-20251119003036.jpg',
      tags: ['IA Generativa', 'Moda', 'Vídeo'],
      link: '/proyectos/anillos',
    },
    {
      title: 'Suma Salut',
      description: 'Agente de automatización para pedidos y organización interna del equipo.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/modern-healthcare-technology-concept-ai--6a304780-20251119003036.jpg',
      tags: ['Automatización', 'Agentes', 'CRM'],
      link: '/proyectos/suma-salut',
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container">
        <div className="text-center mb-20">
          <p className="text-uppercase-label text-[#9ca3af] mb-4 tracking-wider">
            Casos reales
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
            IA que funciona desde el primer día
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <Link
              key={index}
              href="/proyectos"
              className="group block bg-[#0a0a0a] rounded-2xl overflow-hidden transition-all duration-200 ease-out hover:translate-y-[-6px] hover:shadow-2xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-[#1a1a1a] text-[#9ca3af] rounded-full transition-colors duration-200 group-hover:bg-[#2a2a2a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] text-base mb-5 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-white text-sm font-medium transition-all duration-200">
                  Ver proyecto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/proyectos"
            className="inline-block bg-white text-black font-semibold text-sm tracking-wide py-3.5 px-9 rounded-full transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
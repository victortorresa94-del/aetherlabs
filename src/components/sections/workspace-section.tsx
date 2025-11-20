import Link from 'next/link';
import { Layers, Workflow, Bot, Sparkles } from 'lucide-react';
import Image from 'next/image';

const WorkspaceSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Todo centralizado',
      description: 'Gestiona tus proyectos de IA desde un solo lugar.',
    },
    {
      icon: Workflow,
      title: 'Flujos automatizados',
      description: 'Conecta herramientas y crea procesos sin código.',
    },
    {
      icon: Bot,
      title: 'Agentes trabajando',
      description: 'Tus asistentes de IA operando 24/7 por ti.',
    },
    {
      icon: Sparkles,
      title: 'Contenido generado',
      description: 'Crea imágenes, vídeos y textos en minutos.',
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-uppercase-label text-[#9ca3af] mb-4 tracking-wider">
              Aether Workspace
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Tu entorno de trabajo IA
            </h2>
            <p className="text-lg text-[#9ca3af] mb-12 leading-relaxed">
              Un espacio donde centralizamos flujos, agentes y contenido.
              Todo lo que necesitas para que la IA trabaje por ti.
            </p>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-5 transition-all duration-200 ease-out hover:translate-x-1">
                    <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 transition-colors duration-200 hover:bg-[#2a2a2a]">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#9ca3af] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contacto"
              className="inline-block bg-white text-black font-semibold text-sm tracking-wide py-3.5 px-9 rounded-full transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg"
            >
              Conocer Workspace
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.02]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/modern-dark-themed-ai-workspace-dashboar-9e96d5be-20251119011044.jpg"
                alt="Aether Workspace - Dashboard de IA"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
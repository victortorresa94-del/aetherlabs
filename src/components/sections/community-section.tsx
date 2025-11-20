import Link from 'next/link';
import { Users, BookOpen, Zap, Gift } from 'lucide-react';

const CommunitySection = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Cursos rápidos',
      description: 'Aprende IA de verdad, sin tecnicismos ni teoría innecesaria.',
    },
    {
      icon: Zap,
      title: 'Plantillas listas',
      description: 'Agentes y flujos que puedes usar hoy mismo en tu negocio.',
    },
    {
      icon: Users,
      title: 'Comunidad privada',
      description: 'Acceso a un grupo donde compartir dudas y aprender juntos.',
    },
    {
      icon: Gift,
      title: 'Actualizaciones semanales',
      description: 'Contenido nuevo cada semana sobre IA práctica.',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-uppercase-label text-[#9ca3af] mb-3">
            Aether Academy
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-5">
            Únete a la comunidad Aithers
          </h2>
          <p className="text-base text-[#9ca3af] max-w-2xl mx-auto">
            Acceso de por vida a cursos, plantillas y agentes listos para usar.
            Aprende IA sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-black rounded-2xl p-6 border border-[#2a2a2a] transition-all duration-200 ease-out hover:border-[#3a3a3a] hover:translate-y-[-2px]"
              >
                <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/comunidad"
            className="inline-block bg-white text-black font-semibold text-sm tracking-wide py-3 px-8 rounded-full transition-all duration-200 ease-out hover:scale-105"
          >
            Acceder a la comunidad
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
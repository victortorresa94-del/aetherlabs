import React from 'react';
import { Bot, Palette, MessageSquareCode, GraduationCap, ArrowRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: Palette,
    title: "IA Generativa",
    description: "Transformamos tu identidad visual con contenido generado por IA. Desde fotografía de producto hasta campañas publicitarias completas.",
    link: "/servicios/ia-generativa"
  },
  {
    icon: LayoutGrid,
    title: "AI Hub",
    description: "Implementación y formación en las mejores herramientas de IA del mercado (Copilot, Gemini, Dapta).",
    link: "/servicios/ai-hub"
  },
  {
    icon: Bot,
    title: "Agentes IA",
    description: "Automatiza tareas repetitivas y optimiza flujos de trabajo. Nuestros agentes trabajan 24/7 para que tú te enfoques en lo importante.",
    link: "/servicios/automatizacion"
  },
  {
    icon: GraduationCap,
    title: "Consultoría & Formación",
    description: "Te acompañamos en la adopción de la IA. Formación para equipos y estrategia personalizada para integrar estas tecnologías.",
    link: "/servicios/consultoria"
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-black text-white py-32 border-b border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Soluciones integrales de Inteligencia Artificial diseñadas para escalar tu negocio.
              Desde la creatividad visual hasta la automatización operativa.
            </p>
          </div>
          <Link
            href="/servicios"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-[#82ff1f] transition-colors pb-2"
          >
            Explorar todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300 ease-out"
            >
              <div className="w-12 h-12 mb-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <service.icon className="w-6 h-6 text-white group-hover:text-[#82ff1f] transition-colors" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-medium mb-4 text-white group-hover:text-[#82ff1f] transition-colors">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-white transition-colors">
                <span>Saber más</span>
                <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#82ff1f] transition-colors"
          >
            Explorar todos los servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
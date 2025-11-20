import React from 'react';
import { Zap, Sparkles, Rocket } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Zap,
    title: "Automatizadores con IA",
    description: "Creamos asistentes inteligentes que hacen el trabajo por ti. Desde responder mensajes hasta procesar documentos, sin complicaciones técnicas.",
  },
  {
    icon: Sparkles,
    title: "Contenido Visual Impactante",
    description: "Generamos imágenes, videos y diseños que captan la atención. Tu marca destacará con contenido único creado con inteligencia artificial.",
  },
  {
    icon: Rocket,
    title: "Soluciones a Medida",
    description: "Cada negocio es diferente. Desarrollamos herramientas personalizadas que se adaptan a tus necesidades específicas.",
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-black text-foreground py-32">
      <div className="container">
        <div className="flex flex-col items-center mb-20">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-6 max-w-3xl">
                Nuestros Servicios
            </h2>
            <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Tecnología avanzada explicada de forma simple
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6 transition-all duration-200 ease-out hover:translate-y-[-4px]">
              <service.icon className="w-12 h-12 mb-8 text-muted-foreground transition-transform duration-200 ease-out hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-xl font-medium mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
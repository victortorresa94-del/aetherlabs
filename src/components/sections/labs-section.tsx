import Link from 'next/link';
import { Beaker, Brain, Cpu, TestTube } from 'lucide-react';

const labs = [
  {
    icon: Brain,
    title: "Estudio de IA Creativa",
    description: "Experimenta con generación de imágenes, videos y contenido. Prueba diferentes modelos y descubre lo que la IA puede crear.",
    link: "/labs/creative",
  },
  {
    icon: Cpu,
    title: "Taller de Automatización",
    description: "Crea tus propios automatizadores. Aprende cómo la IA puede hacer tareas repetitivas por ti, sin programar.",
    link: "/labs/agents",
  },
  {
    icon: TestTube,
    title: "Zona de Pruebas",
    description: "Experimenta con nuestras herramientas en desarrollo. Sé el primero en probar nuevas funcionalidades.",
    link: "/labs",
  },
  {
    icon: Beaker,
    title: "Playground de Prompts",
    description: "Aprende a comunicarte con la IA. Descubre cómo escribir instrucciones que generen mejores resultados.",
    link: "/labs",
  },
];

const LabsSection = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Laboratorios Aether Labs
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Un espacio donde puedes experimentar, crear y jugar con inteligencia artificial. 
            Sin conocimientos técnicos necesarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab, index) => (
            <Link
              key={index}
              href={lab.link}
              className="group bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 transition-all duration-200 ease-out hover:bg-[#1a1a1a] hover:translate-y-[-3px] hover:shadow-lg"
            >
              <lab.icon className="w-9 h-9 mb-4 text-white/80" strokeWidth={1.5} />
              <h3 className="text-lg font-medium mb-2">{lab.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {lab.description}
              </p>
              <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-200">
                Explorar →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/labs"
            className="inline-block bg-white text-black font-semibold text-sm tracking-wide py-3 px-8 rounded-full transition-all duration-200 ease-out hover:scale-105"
          >
            Ver Todos los Laboratorios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
import Link from 'next/link';
import { Beaker, Brain, Cpu, ArrowRight } from 'lucide-react';

const labs = [
  {
    icon: Brain,
    title: "Creative Lab",
    description: "Experimenta con generación de imágenes, videos y contenido. Prueba diferentes modelos y descubre lo que la IA puede crear.",
    link: "/labs/creative",
  },
  {
    icon: Cpu,
    title: "AI Agents Lab",
    description: "Crea tus propios automatizadores. Aprende cómo la IA puede hacer tareas repetitivas por ti, sin programar.",
    link: "/labs/agents",
  },
  {
    icon: Beaker,
    title: "LLM Lab",
    description: "Experimenta con Grandes Modelos de Lenguaje. Crea chats personalizados y asistentes inteligentes.",
    link: "/labs/llm-lab",
  },
];

const LabsSection = () => {
  return (
    <section className="bg-black text-white py-32 border-b border-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Aether Labs
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Un espacio donde puedes experimentar, crear y jugar con inteligencia artificial.
            Sin conocimientos técnicos necesarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {labs.map((lab, index) => (
            <Link
              key={index}
              href={lab.link}
              className="group relative flex flex-col p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 mb-8 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#82ff1f]/30 group-hover:bg-[#82ff1f]/10 transition-all duration-300">
                <lab.icon className="w-7 h-7 text-white group-hover:text-[#82ff1f] transition-colors" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-light mb-4 text-white group-hover:text-[#82ff1f] transition-colors">
                {lab.title}
              </h3>

              <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
                {lab.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors mt-auto">
                <span>Explorar Laboratorio</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm tracking-wide py-4 px-8 rounded-full transition-all duration-200 ease-out hover:bg-[#82ff1f] hover:scale-105"
          >
            Ver Todos los Laboratorios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
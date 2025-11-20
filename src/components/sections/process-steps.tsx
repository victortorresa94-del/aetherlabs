import React from 'react';
import { MessageCircle, FileText, Lightbulb, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "1. Conversación",
    description: "Charlamos contigo para entender qué necesitas. Sin tecnicismos, solo una conversación real sobre tu proyecto.",
  },
  {
    icon: FileText,
    title: "2. Briefing y presupuesto",
    description: "Definimos los detalles y te presentamos un presupuesto claro. Sin sorpresas, todo transparente desde el inicio.",
  },
  {
    icon: Lightbulb,
    title: "3. Creamos la solución",
    description: "Nuestro equipo desarrolla tu solución de IA. Te mantenemos informado en cada paso del proceso creativo.",
  },
  {
    icon: Settings,
    title: "4. Implementamos",
    description: "Integramos la solución en tu negocio, asegurándonos de que funciona perfectamente con tus sistemas.",
  },
  {
    icon: Rocket,
    title: "5. Lanzamos",
    description: "Tu proyecto sale al mundo. Te enseñamos cómo usarlo y te damos soporte continuo para que saques el máximo provecho.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-black text-white py-32">
      <div className="container">
        <div className="text-center mb-20">
          <h4 className="text-uppercase-label mb-4 text-[#9ca3af] tracking-wider">CÓMO TRABAJAMOS</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Cinco pasos simples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-200 ease-out hover:bg-white/10 hover:translate-y-[-4px] hover:shadow-xl"
            >
              <step.icon className="w-10 h-10 mb-6 text-white/90 transition-transform duration-200 ease-out hover:scale-110" strokeWidth={1.5} />
              <h3 className="text-lg font-medium mb-3 leading-snug">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
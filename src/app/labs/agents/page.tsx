import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Phone, MessageSquare, ListTodo, Play, ExternalLink } from 'lucide-react';

export default function AgentsLabPage() {
  const agents = [
    {
      icon: Phone,
      title: 'Agente de Pedidos - Rostissería',
      description: 'Atiende pedidos de pollo por teléfono y los registra automáticamente en tu sistema.',
      features: [
        'Toma pedidos completos',
        'Confirma direcciones',
        'Calcula tiempos de entrega',
        'Integra con tu sistema',
      ],
      demoAvailable: true,
      integration: 'Twilio + Google Sheets',
    },
    {
      icon: ListTodo,
      title: 'Agente Jason - Gestor de Tareas',
      description: 'Crea tareas automáticamente en ClickUp desde emails, mensajes o conversaciones.',
      features: [
        'Lee y analiza mensajes',
        'Crea tareas con prioridad',
        'Asigna responsables',
        'Sincroniza con tu equipo',
      ],
      demoAvailable: true,
      integration: 'ClickUp API + n8n',
    },
    {
      icon: MessageSquare,
      title: 'Bot de Atención al Cliente',
      description: 'Responde consultas comunes 24/7 en WhatsApp, web o redes sociales.',
      features: [
        'Respuestas inmediatas',
        'Base de conocimiento',
        'Escalado a humanos',
        'Multi-canal',
      ],
      demoAvailable: true,
      integration: 'WhatsApp Business API',
    },
  ];

  const howToUse = [
    {
      step: '01',
      title: 'Prueba el demo',
      description: 'Interactúa con el agente para ver cómo funciona en tiempo real.',
    },
    {
      step: '02',
      title: 'Personaliza',
      description: 'Adaptamos el agente a tu negocio, procesos y herramientas.',
    },
    {
      step: '03',
      title: 'Integra',
      description: 'Conectamos el agente con tus sistemas actuales.',
    },
    {
      step: '04',
      title: 'Despliega',
      description: 'Tu agente empieza a trabajar por ti 24/7.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />

      <section className="pt-32 pb-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              Labs / AI Agents Lab
            </p>
            <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
              Agentes que trabajan por ti
            </h1>
            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
              Prueba agentes reales funcionando.
              Ve cómo pueden ayudar a tu negocio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Agentes en funcionamiento
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Ejemplos reales que puedes probar ahora mismo
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div
                  key={index}
                  className="bg-black rounded-2xl border border-[#2a2a2a] overflow-hidden transition-all duration-300 hover:border-[#4a4a4a]"
                >
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">
                            {agent.title}
                          </h3>
                          <p className="text-[#a0a0a0]">
                            {agent.description}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-wider text-[#808080] mb-3">
                          Características
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {agent.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              <span className="text-sm text-[#c8c8c8]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-[#808080]">Integración:</span>
                        <span className="text-white font-medium">{agent.integration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="aspect-video bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-4 border border-[#2a2a2a]">
                        <Play className="h-12 w-12 text-[#4a4a4a]" />
                      </div>
                      {agent.demoAvailable && (
                        <div className="space-y-3">
                          <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                            <Play className="h-4 w-4" />
                            Probar demo
                          </button>
                          <button className="w-full bg-transparent text-white font-semibold py-3 px-6 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black flex items-center justify-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Ver código
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Cómo funciona
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Del demo a tu negocio en cuatro pasos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howToUse.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a] h-full">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                    <span className="text-white font-semibold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm">
                    {item.description}
                  </p>
                </div>
                {index < howToUse.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#2a2a2a]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              ¿Quieres un agente así?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-10">
              Cuéntanos qué tareas te quitan tiempo y creamos un agente personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-block bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
              >
                Crear mi agente
              </Link>
              <Link
                href="/servicios/automatizacion"
                className="inline-block bg-transparent text-white font-semibold text-base py-4 px-8 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
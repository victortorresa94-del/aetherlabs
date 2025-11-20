import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Phone, MessageSquare, FileText, ListTodo, Workflow, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AutomatizacionPage() {
  const services = [
    {
      icon: Phone,
      title: 'Agente telefónico',
      description: 'Atiende pedidos y reservas automáticamente con integración a Excel, Sheets o tu CRM.',
      examples: ['Pedidos', 'Reservas', 'Consultas'],
    },
    {
      icon: MessageSquare,
      title: 'Bots de WhatsApp y chat',
      description: 'Atención al cliente 24/7 en WhatsApp, web o redes sociales.',
      examples: ['Soporte', 'Ventas', 'FAQ'],
    },
    {
      icon: FileText,
      title: 'Automatización de presupuestos',
      description: 'Genera presupuestos automáticos desde formularios o conversaciones.',
      examples: ['Cotizaciones', 'Propuestas', 'Facturas'],
    },
    {
      icon: ListTodo,
      title: 'Agentes internos tipo Jason',
      description: 'Crean tareas y organizan proyectos automáticamente en ClickUp, Notion o Asana.',
      examples: ['Gestión', 'Proyectos', 'Tareas'],
    },
    {
      icon: Workflow,
      title: 'Flujos con n8n/Make/Zapier',
      description: 'Conecta todas tus herramientas y automatiza procesos sin código.',
      examples: ['Integraciones', 'Workflows', 'Conectores'],
    },
    {
      icon: BarChart,
      title: 'Reporting automático',
      description: 'Informes y análisis generados automáticamente y enviados cuando los necesites.',
      examples: ['Dashboards', 'Métricas', 'KPIs'],
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Briefing y detección',
      description: 'Conversamos para entender tu negocio y detectar qué se puede automatizar.',
    },
    {
      number: '02',
      title: 'Selección de herramientas',
      description: 'Elegimos las APIs y plataformas adecuadas para tu caso.',
    },
    {
      number: '03',
      title: 'Diseño e integración',
      description: 'Creamos los flujos y los conectamos con tus sistemas actuales.',
    },
    {
      number: '04',
      title: 'Pruebas y despliegue',
      description: 'Testeamos todo hasta que funcione perfectamente y lo ponemos en marcha.',
    },
    {
      number: '05',
      title: 'Mantenimiento y soporte',
      description: 'Te acompañamos después del lanzamiento para ajustes y mejoras.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />
      
      <section className="pt-32 pb-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              Servicios / Automatización
            </p>
            <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
              Automatiza tu negocio
            </h1>
            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
              Agentes y flujos que trabajan por ti 24/7.
              Ahorra tiempo y dinero sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Servicios de automatización
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Soluciones prácticas para que tu negocio funcione solo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-black rounded-2xl p-8 border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a] hover:translate-y-[-4px]"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#808080] rounded-full"
                      >
                        {example}
                      </span>
                    ))}
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
              Cómo trabajamos
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Un proceso claro para automatizar sin dolor de cabeza
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a]"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#a0a0a0]">
                    {step.description}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-[#4a4a4a]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              ¿Listo para automatizar?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-10">
              Cuéntanos qué procesos te quitan tiempo y te mostramos cómo solucionarlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
              >
                Automatiza tu negocio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/labs/agents"
                className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-base py-4 px-8 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Probar agentes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
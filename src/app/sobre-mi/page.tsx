import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Award, Briefcase, Lightbulb, Target, ArrowRight } from 'lucide-react';

export default function SobreMiPage() {
  const experience = [
    {
      year: '2014',
      title: 'Inicio en Marketing Digital',
      description: 'Primeros pasos en automatización de marketing y estrategia digital.',
    },
    {
      year: '2018',
      title: 'Especialización en Automatización',
      description: 'Implementación de flujos automatizados para empresas en crecimiento.',
    },
    {
      year: '2022',
      title: 'Entrada en IA Generativa',
      description: 'Primeros proyectos con inteligencia artificial aplicada a negocio real.',
    },
    {
      year: '2024',
      title: 'Fundación de Aether Labs',
      description: 'Crear un laboratorio donde la IA se vuelve accesible para todos.',
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Hacer fácil lo difícil',
      description: 'La IA es compleja, pero nuestro trabajo es que tú no tengas que lidiar con eso.',
    },
    {
      icon: Target,
      title: 'IA práctica para pymes',
      description: 'No vendemos futurismos. Vendemos soluciones que funcionan hoy mismo.',
    },
    {
      icon: Briefcase,
      title: 'Sin tecnicismos',
      description: 'Hablamos en tu idioma. Nada de jerga innecesaria ni complicaciones.',
    },
    {
      icon: Award,
      title: 'Resultados reales',
      description: 'Lo que importa no es la tecnología, sino lo que consigues con ella.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />
      
      <section className="pt-32 pb-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              Sobre mí
            </p>
            <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
              Víctor Torres
            </h1>
            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
              11 años creando soluciones simples para negocios reales
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="aspect-[3/4] bg-[#1a1a1a] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#2a2a2a] border-2 border-[#4a4a4a]" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Mi historia
              </h2>
              <div className="space-y-4 text-[#c8c8c8] leading-relaxed">
                <p>
                  Llevo más de una década trabajando en marketing digital y automatización. 
                  He visto cómo las herramientas evolucionaban, pero también cómo muchas 
                  empresas se quedaban atrás por culpa de la complejidad técnica.
                </p>
                <p>
                  En 2022 empecé a experimentar con IA generativa y me di cuenta de algo: 
                  la tecnología era increíble, pero nadie la explicaba de forma que un 
                  negocio normal pudiera usarla.
                </p>
                <p>
                  Así nació <span className="text-white font-semibold">Aether Labs</span>: 
                  un lugar donde bajamos lo etéreo (la IA) a lo real (tu negocio). Sin humo. 
                  Sin complicaciones. Solo resultados.
                </p>
                <p>
                  Mi trabajo es hacer que tú no tengas que convertirte en un experto en IA 
                  para aprovecharla. Yo me encargo de lo difícil. Tú te encargas de tu negocio.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/contacto"
                  className="inline-block bg-white text-black font-semibold text-base py-3 px-8 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Hablemos de tu proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Línea de tiempo
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Más de 11 años construyendo experiencia
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-[#2a2a2a]" />
              
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <div key={index} className="relative flex gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-4 border-black flex items-center justify-center">
                        <span className="text-white font-semibold">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              La visión de Aether Labs
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Los principios que guían cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-black rounded-2xl p-8 border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a]"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-12 border border-[#2a2a2a]">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                  Ubicación
                </h2>
                <p className="text-xl text-[#c8c8c8] mb-8">
                  Torrelavega, Cantabria
                </p>
                <div className="space-y-3 text-[#a0a0a0]">
                  <p>
                    Trabajo con clientes de toda España y Latinoamérica.
                  </p>
                  <p>
                    <a 
                      href="mailto:hola@aetherlabs.es"
                      className="text-white hover:text-[#c8c8c8] transition-colors font-semibold"
                    >
                      hola@aetherlabs.es
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-10">
              Si buscas alguien que entienda tu negocio y te ayude con IA de verdad, 
              sin rollos técnicos, estás en el lugar correcto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105"
              >
                Reservar llamada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-base py-4 px-8 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
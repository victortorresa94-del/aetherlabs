import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { Sparkles, Target, Lightbulb, Heart, Calendar, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SobreNosotros() {
  const valores = [
    {
      icon: Sparkles,
      title: "Simplicidad",
      description: "Hacemos fácil lo difícil. La IA no tiene que ser complicada.",
    },
    {
      icon: Target,
      title: "Resultados reales",
      description: "Nos enfocamos en soluciones que funcionan hoy, no en futurismos.",
    },
    {
      icon: Lightbulb,
      title: "Innovación práctica",
      description: "Usamos tecnología de vanguardia aplicada a problemas reales.",
    },
    {
      icon: Heart,
      title: "Transparencia",
      description: "Sin tecnicismos, sin humo. Hablamos claro y trabajamos honesto.",
    },
  ];

  const hitos = [
    {
      year: "2013",
      title: "Inicios en marketing digital",
      description: "Víctor Torres comienza su carrera en marketing digital y automatización.",
    },
    {
      year: "2018",
      title: "Especialización en automatización",
      description: "Enfoque en procesos automatizados y optimización de workflows para pymes.",
    },
    {
      year: "2022",
      title: "Primeros proyectos con IA",
      description: "Experimentación con herramientas de IA generativa y agentes inteligentes.",
    },
    {
      year: "2024",
      title: "Nace Aether Labs",
      description: "Fundación oficial de Aether Labs en Barcelona, dedicado a IA práctica para negocios.",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-6">
              Sobre nosotros
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              Somos Aether Labs
            </h1>
            <p className="text-xl md:text-2xl text-[#c8c8c8] leading-relaxed mb-6">
              Un laboratorio de inteligencia artificial nacido en Barcelona en 2024.
            </p>
            <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">
              Nuestra misión es hacer que la IA sea accesible para todos. Transformamos 
              lo complejo en simple, lo abstracto en práctico, y lo complicado en útil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                De lo etéreo a lo real
              </h2>
              <div className="space-y-4 text-[#a0a0a0] text-lg leading-relaxed">
                <p>
                  Aether Labs nace de una visión clara: <span className="text-white">la inteligencia 
                  artificial no debería ser solo para expertos técnicos</span>. Debería estar al alcance 
                  de cualquier negocio, cualquier emprendedor, cualquier persona con una idea.
                </p>
                <p>
                  Fundada en Barcelona en 2024, empezamos con una premisa simple: hacer fácil lo difícil. 
                  Tomamos tecnología de vanguardia y la convertimos en soluciones prácticas que funcionan 
                  desde el primer día.
                </p>
                <p>
                  El nombre &quot;Aether&quot; representa lo etéreo, lo abstracto, lo que parece inalcanzable. 
                  Nuestro trabajo es traerlo a tierra, hacerlo tangible, convertirlo en resultados reales 
                  para negocios reales.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-[#2a2a2a] p-12 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-32 w-32 text-white mx-auto mb-6 opacity-50" />
                  <p className="text-white text-xl font-light">Barcelona, 2024</p>
                  <p className="text-[#a0a0a0] text-sm mt-2">Donde la IA se hace real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Nuestros valores
            </h2>
            <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
              Los principios que guían cada proyecto que creamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0a0a0a] rounded-2xl p-8 border border-[#2a2a2a] transition-all duration-300 hover:border-[#4a4a4a] hover:translate-y-[-4px]"
                >
                  <Icon className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {valor.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">
              Qué hacemos
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-2 border-white pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Contenido visual con IA
                </h3>
                <p className="text-[#a0a0a0] text-lg leading-relaxed">
                  Creamos imágenes, vídeos y diseños impactantes usando inteligencia artificial. 
                  Desde campañas de producto hasta contenido para redes sociales, todo adaptado 
                  a tu marca y objetivos.
                </p>
              </div>

              <div className="border-l-2 border-white pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Automatizadores inteligentes
                </h3>
                <p className="text-[#a0a0a0] text-lg leading-relaxed">
                  Desarrollamos agentes de IA que trabajan por ti: desde atender clientes 24/7 
                  hasta procesar documentos y gestionar tareas repetitivas. Sin complicaciones 
                  técnicas, solo resultados.
                </p>
              </div>

              <div className="border-l-2 border-white pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Soluciones personalizadas
                </h3>
                <p className="text-[#a0a0a0] text-lg leading-relaxed">
                  Cada negocio es único. Diseñamos herramientas a medida que se integran 
                  perfectamente con tu forma de trabajar, resolviendo tus problemas específicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Mi historia
            </h2>
            <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
              Víctor Torres - Fundador de Aether Labs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#2a2a2a]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0031-1763512728087.JPG"
                  alt="Víctor Torres - Fundador de Aether Labs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-[#c8c8c8] leading-relaxed">
                  Con más de <span className="text-white font-semibold">11 años de experiencia</span> en 
                  marketing digital, automatización y creatividad, he ayudado a decenas de negocios a 
                  crecer usando tecnología.
                </p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Lo que comenzó como curiosidad por optimizar procesos se convirtió en una pasión por 
                  hacer la tecnología accesible. He visto cómo las herramientas complejas alejan a 
                  las pymes en lugar de ayudarlas, y por eso nació Aether Labs.
                </p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Mi enfoque es simple: <span className="text-white">si no lo entiendes, no funciona</span>. 
                  Por eso trabajo para traducir la IA a soluciones claras, útiles y rentables desde el 
                  primer día.
                </p>
              </div>

              <div className="border-t border-[#2a2a2a] pt-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Cronología
                </h3>
                <div className="space-y-6">
                  {hitos.map((hito, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-[#2a2a2a] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{hito.year}</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {hito.title}
                        </h4>
                        <p className="text-[#a0a0a0] text-sm">
                          {hito.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-12 max-w-2xl mx-auto">
              Ya sea que tengas una idea clara o simplemente quieras explorar cómo la IA 
              puede ayudar a tu negocio, estamos aquí para escucharte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-block bg-white text-black font-semibold text-base py-4 px-10 rounded-full transition-all duration-200 hover:scale-105"
              >
                Contactar
              </Link>
              <Link
                href="/servicios"
                className="inline-block bg-transparent text-white font-semibold text-base py-4 px-10 rounded-full border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
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
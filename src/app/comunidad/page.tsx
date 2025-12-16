import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeaderNavigation />
      
      <section className="pt-32 pb-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-[#a0a0a0] mb-4">
              Contacto
            </p>
            <h1 className="text-5xl md:text-[4rem] font-light text-white mb-6 leading-tight">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-[#c8c8c8] max-w-2xl mx-auto">
              Cuéntanos qué necesitas y te mostramos cómo la IA puede ayudarte.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#808080] mb-1">
                      Email
                    </p>
                    <a 
                      href="mailto:hola@aetherlabs.es"
                      className="text-white text-lg hover:text-[#c8c8c8] transition-colors"
                    >
                      hola@aetherlabs.es
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#808080] mb-1">
                      Ubicación
                    </p>
                    <p className="text-white text-lg">
                      Torrelavega, Cantabria
                    </p>
                    <p className="text-[#a0a0a0] text-sm mt-1">
                      España
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-2xl p-8 border border-[#2a2a2a]">
                <h3 className="text-xl font-semibold text-white mb-4">
                  ¿Prefieres una llamada?
                </h3>
                <p className="text-[#a0a0a0] mb-6">
                  Reserva una llamada gratuita de 30 minutos para hablar de tu proyecto.
                </p>
                <a
                  href="https://calendly.com/aetherlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-white text-black font-semibold text-base py-3 px-6 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Reservar llamada en Calendly
                </a>
              </div>
            </div>

            <div className="bg-black rounded-2xl p-8 border border-[#2a2a2a]">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Envíanos un mensaje
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#c8c8c8] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#4a4a4a] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#c8c8c8] mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#4a4a4a] transition-colors"
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#c8c8c8] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#4a4a4a] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-[#c8c8c8] mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#4a4a4a] transition-colors"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="<1000">Menos de 1.000€</option>
                    <option value="1000-3000">1.000€ - 3.000€</option>
                    <option value="3000-5000">3.000€ - 5.000€</option>
                    <option value="5000-10000">5.000€ - 10.000€</option>
                    <option value=">10000">Más de 10.000€</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-[#c8c8c8] mb-2">
                    Cuéntanos tu idea
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#4a4a4a] transition-colors resize-none"
                    placeholder="Describe qué necesitas... ¿Es IA generativa? ¿Automatización? ¿Ambas?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enviar mensaje
                  <Send className="h-5 w-5" />
                </button>

                <p className="text-xs text-[#808080] text-center">
                  Te responderemos en menos de 24 horas
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              ¿No estás seguro de qué necesitas?
            </h2>
            <p className="text-lg text-[#a0a0a0] mb-8">
              No pasa nada. Cuéntanos tu problema y te ayudamos a encontrar la solución.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  IA Generativa
                </h3>
                <p className="text-sm text-[#a0a0a0] mb-4">
                  Fotos, vídeos y campañas
                </p>
                <a href="/servicios/ia-generativa" className="text-white text-sm font-medium hover:text-[#c8c8c8] transition-colors">
                  Ver servicios →
                </a>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Automatización
                </h3>
                <p className="text-sm text-[#a0a0a0] mb-4">
                  Agentes y flujos automáticos
                </p>
                <a href="/servicios/agentes-ia" className="text-white text-sm font-medium hover:text-[#c8c8c8] transition-colors">
                  Ver servicios →
                </a>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Explorar Labs
                </h3>
                <p className="text-sm text-[#a0a0a0] mb-4">
                  Prueba ejemplos reales
                </p>
                <a href="/labs/creative" className="text-white text-sm font-medium hover:text-[#c8c8c8] transition-colors">
                  Ver demos →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
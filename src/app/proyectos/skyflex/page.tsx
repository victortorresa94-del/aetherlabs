import ProjectDetail from '@/components/sections/project-detail';

export default function SkyflexPage() {
  return (
    <ProjectDetail
      title="Skyflex Shoes"
      subtitle="Lanzamiento de marca inexistente con 0€ en producción física."
      category="IA Generativa / Campaña"
      client="Skyflex (Concept Brand)"
      timeline="3 Días"
      services={['Dirección de Arte', 'Generación de Imagen', 'Video AI', 'Copywriting']}
      challenge="El reto era lanzar una campaña visual de alto impacto para una línea de zapatillas deportivas futuristas sin tener el producto físico, sin contratar modelos y sin alquilar estudios de fotografía."
      solution="Utilizamos una combinación de Midjourney v6 para la base fotográfica y Runway Gen-2 para dar movimiento a las escenas. Entrenamos un modelo LoRA específico para mantener la consistencia del diseño de la zapatilla en todas las tomas."
      results={[
        'Ahorro del 100% en costes de producción física.',
        'Generación de 50 assets visuales en 72 horas.',
        'Validación de diseño de producto antes de fabricación.'
      ]}
      heroImage="/images/skyflex/car-scene.jpg"
      gallery={[
        '/images/skyflex/car-scene.jpg',
        '/images/skyflex/vending-machine.jpg',
        '/images/skyflex/friends-laughing.jpg',
        '/images/skyflex/picnic.jpg',
        '/images/skyflex/stairs.jpg',
        '/images/skyflex/gallery-1.jpg',
        '/images/skyflex/gallery-2.jpg',
        '/images/skyflex/gallery-3.jpg',
        '/images/skyflex/gallery-4.jpg',
        '/images/skyflex/gallery-5.jpg'
      ]}
    >
      <section className="container px-6 md:px-12 lg:px-24 mb-32">
        <h2 className="text-3xl font-light text-white mb-8">Video Reel AI</h2>
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden p-2">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
            <iframe
              src="https://play.gumlet.io/embed/6940040d616d7c8c6a525626"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Skyflex AI Reel"
            />
          </div>
        </div>
      </section>
    </ProjectDetail>
  );
}
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
    />
  );
}
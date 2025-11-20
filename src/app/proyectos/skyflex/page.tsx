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
      // Sustituye estas URLs por tus imágenes reales en cuanto las tengas
      heroImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
      gallery={[
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605296867304-6f0380055052?q=80&w=1000&auto=format&fit=crop'
      ]}
    />
  );
}
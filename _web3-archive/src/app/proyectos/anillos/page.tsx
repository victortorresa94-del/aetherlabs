import ProjectDetail from '@/components/sections/project-detail';

export default function AnillosPage() {
  return (
    <ProjectDetail
      title="TwoJeys Style Spot"
      subtitle="Anuncio de joyería lifestyle generado 100% con Inteligencia Artificial."
      category="Video AI / Moda"
      client="Concepto Moda"
      timeline="1 Semana"
      services={['Guión IA', 'Video Generativo', 'Edición', 'Voz en Off IA']}
      challenge='Crear un spot con la estética "vogue/indie" característica de marcas como TwoJeys, con localizaciones en desiertos y modelos con estilo específico, sin desplazar un equipo de rodaje.'
      solution='Usamos Gemini para desglosar el estilo visual frame a frame. Luego, generamos clips con Kling AI enfocándonos en la iluminación "Golden Hour". La consistencia de los personajes se logró mediante Face-Swap avanzado en post-producción.'
      results={[
        'Estética idéntica a producciones de 20k€.',
        'Producción realizada por una sola persona.',
        'Variaciones infinitas para A/B testing en Ads.'
      ]}
      heroImage="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop"
      gallery={[
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop'
      ]}
    />
  );
}
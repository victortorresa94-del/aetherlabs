import ProjectDetail from '@/components/sections/project-detail';

export default function SumaSalutPage() {
  return (
    <ProjectDetail
      title="Suma Salut – Asistente Web de Atención Inteligente"
      subtitle="Agente IA que resuelve consultas frecuentes, gestiona reservas y reduce carga administrativa."
      category="Automatización / Agentes"
      client="Clínica Suma Salut"
      timeline="2 Semanas"
      services={['Desarrollo de Agente', 'Integración WhatsApp', 'Conexión CRM', 'Dashboard']}
      challenge="La clínica recibía un volumen constante de consultas repetitivas desde Google (horarios, precios, mutuas, servicios, etc.). El equipo de recepción dedicaba varias horas al día a responder manualmente y gestionar cambios de citas, generando saturación y tiempos de espera elevados."
      solution="Desarrollamos Numa, un asistente inteligente integrado en la web que responde automáticamente a todas las consultas frecuentes, gestiona reservas nuevas y cancelaciones conectándose con su sistema de gestión, reduce al mínimo la carga del personal y ofrece disponibilidad en tiempo real sin necesidad de intervención del equipo. Numa está conectado con el CRM y el sistema de reservas de la clínica, garantizando actualizaciones instantáneas."
      results={[
        '70% menos consultas repetitivas atendidas manualmente.',
        'Reducción drástica de tiempos de respuesta.',
        'Recepción liberada para tareas más importantes.',
        'Automatización completa de reservas y cancelaciones.'
      ]}
      heroImage="/images/agents/numa-physio.png"
      gallery={[
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop'
      ]}
      projectLink="https://sumasalut.cat"
    />
  );
}
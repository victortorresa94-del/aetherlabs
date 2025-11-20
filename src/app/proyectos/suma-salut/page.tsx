import ProjectDetail from '@/components/sections/project-detail';

export default function SumaSalutPage() {
  return (
    <ProjectDetail
      title="Suma Salut Automatización"
      subtitle="Agente de IA que gestiona pedidos y organiza al equipo interno."
      category="Automatización / Agentes"
      client="Clínica Suma Salut"
      timeline="2 Semanas"
      services={['Desarrollo de Agente', 'Integración WhatsApp', 'Conexión CRM', 'Dashboard']}
      challenge="La clínica perdía el 30% de las llamadas de pedidos y citas por saturación de la línea. El equipo administrativo dedicaba 4 horas diarias a organizar la agenda manualmente."
      solution="Implementamos un Agente de Voz con ElevenLabs y Twilio para contestar llamadas, y un bot de WhatsApp conectado a Make.com que agenda automáticamente en su CRM y notifica al equipo solo cuando es necesario."
      results={[
        '0 llamadas perdidas desde la implementación.',
        'Recuperación de 4 horas diarias de administración.',
        'Aumento del 15% en conversión de citas.'
      ]}
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
      gallery={[
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop'
      ]}
    />
  );
}
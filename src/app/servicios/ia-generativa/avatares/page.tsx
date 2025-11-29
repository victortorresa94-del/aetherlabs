import ServiceDetail from '@/components/sections/service-detail';

export default function AvataresPage() {
    return (
        <ServiceDetail
            title="Avatares y Portavoces IA"
            subtitle="Rostros digitales que comunican tu mensaje 24/7."
            description="Creamos presentadores y embajadores de marca virtuales indistinguibles de humanos reales. Pueden hablar cualquier idioma y estar disponibles instantáneamente para crear contenido educativo, corporativo o promocional. Elimina la necesidad de contratar actores, estudios de grabación y equipos de rodaje para tus comunicaciones corporativas."
            benefits={[
                "Disponibilidad 24/7 para generar contenido",
                "Capacidad multilingüe nativa instantánea",
                "Sin costes recurrentes de talento o rodaje",
                "Consistencia de marca perfecta",
                "Actualización rápida de guiones y mensajes"
            ]}
            process={[
                {
                    title: "Creación del Avatar",
                    description: "Diseñamos un avatar único o clonamos digitalmente a un portavoz existente."
                },
                {
                    title: "Clonación de Voz",
                    description: "Sintetizamos una voz natural o clonamos tu propia voz para que suene auténtica."
                },
                {
                    title: "Generación de Vídeo",
                    description: "Introducimos el texto y generamos el vídeo con sincronización labial perfecta."
                }
            ]}
            heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/professional-portrait-of-digital-avatar--c1693b5c-20251119011116.jpg"
        />
    );
}

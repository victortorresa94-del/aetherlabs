import ServiceDetail from '@/components/sections/service-detail';

export default function AnunciosVideosPage() {
    return (
        <ServiceDetail
            title="Anuncios y Vídeos IA"
            subtitle="Producción de vídeo de alta gama sin cámaras."
            description="Creamos spots publicitarios, fashion films y contenido cinemático utilizando las herramientas de generación de vídeo más avanzadas del mercado (como Runway Gen-2, Pika y Luma). Logramos estéticas imposibles, movimientos de cámara complejos y narrativas visuales impactantes sin necesidad de alquilar equipos de rodaje, contratar personal o gestionar localizaciones."
            benefits={[
                "Estética cinematográfica premium",
                "Costes de producción drásticamente reducidos",
                "Posibilidades creativas ilimitadas",
                "Rapidez de entrega inigualable",
                "Adaptación fácil a diferentes formatos"
            ]}
            process={[
                {
                    title: "Guion y Storyboard",
                    description: "Desarrollamos la narrativa y visualizamos cada plano antes de generar nada."
                },
                {
                    title: "Generación de Vídeo",
                    description: "Utilizamos prompts avanzados para generar clips de vídeo de alta calidad."
                },
                {
                    title: "Post-producción",
                    description: "Editamos, corregimos color y añadimos sonido para un acabado profesional."
                }
            ]}
            heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/high-end-video-production-setup-professi-19315278-20251119011117.jpg"
        />
    );
}

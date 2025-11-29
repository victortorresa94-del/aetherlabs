import ServiceDetail from '@/components/sections/service-detail';

export default function ReelsIAPage() {
    return (
        <ServiceDetail
            title="Reels con IA"
            subtitle="Contenido vertical viral generado y editado con inteligencia artificial."
            description="Creamos contenido dinámico para TikTok, Instagram Reels y YouTube Shorts utilizando las últimas herramientas de generación de vídeo y edición automática. Maximizamos la retención y el alcance con guiones y visuales diseñados algorítmicamente para captar la atención."
            benefits={[
                "Edición dinámica automatizada",
                "Subtítulos animados y efectos visuales",
                "Guiones optimizados para retención",
                "Producción masiva de contenido",
                "Adaptación rápida a tendencias"
            ]}
            process={[
                {
                    title: "Ideación de Contenido",
                    description: "Identificamos tendencias y generamos guiones virales con IA."
                },
                {
                    title: "Producción / Generación",
                    description: "Grabamos o generamos el material visual necesario con herramientas de vídeo IA."
                },
                {
                    title: "Edición Inteligente",
                    description: "Editamos con ritmo rápido, efectos y subtítulos para maximizar el 'watch time'."
                }
            ]}
            heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/creative-instagram-reels-tiktok-video-editing-mo-7d31c9e0-20251119011116.jpg"
        />
    );
}

import ServiceDetail from '@/components/sections/service-detail';

export default function UGCPage() {
    return (
        <ServiceDetail
            title="Contenido UGC con IA"
            subtitle="Testimonios y reviews auténticos generados artificialmente."
            description="Generamos contenido estilo 'User Generated Content' (UGC) que parece grabado por usuarios reales con sus móviles. Ideal para anuncios de TikTok, Reels y Facebook Ads donde la autenticidad (o la apariencia de ella) es clave para la conversión. Obtén cientos de variaciones de testimonios sin lidiar con creadores."
            benefits={[
                "Escalabilidad masiva de creatividades",
                "Control total del mensaje y guion",
                "Sin gestión de influencers ni envíos de producto",
                "Apariencia 100% nativa de redes sociales",
                "Test A/B rápido de diferentes ganchos"
            ]}
            process={[
                {
                    title: "Definición de Avatares",
                    description: "Seleccionamos los perfiles demográficos que encajan con tu audiencia."
                },
                {
                    title: "Guionización Persuasiva",
                    description: "Creamos guiones enfocados en puntos de dolor y beneficios."
                },
                {
                    title: "Generación y Montaje",
                    description: "Generamos los vídeos y los editamos con estilo nativo de TikTok/Reels."
                }
            ]}
            heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/content-creator-filming-with-smartphone--143bb571-20251119011116.jpg"
        />
    );
}

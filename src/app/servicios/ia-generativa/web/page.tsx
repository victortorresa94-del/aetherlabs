import ServiceDetail from '@/components/sections/service-detail';

export default function WebIAPage() {
    return (
        <ServiceDetail
            title="Web con IA"
            subtitle="Sitios web inteligentes, rápidos y diseñados para convertir."
            description="Utilizamos inteligencia artificial para optimizar cada etapa del desarrollo web, desde la generación de copy persuasivo y assets visuales únicos hasta la optimización de código y SEO. Creamos experiencias digitales que no solo se ven bien, sino que funcionan."
            benefits={[
                "Diseño único generado por IA",
                "Copywriting optimizado para SEO",
                "Imágenes y gráficos originales sin stock",
                "Desarrollo más rápido y eficiente",
                "Personalización dinámica de contenido"
            ]}
            process={[
                {
                    title: "Análisis y Estrategia",
                    description: "Analizamos tu nicho y competencia con IA para definir la estructura y contenido ideal."
                },
                {
                    title: "Generación de Assets",
                    description: "Creamos imágenes, iconos y textos únicos utilizando modelos generativos avanzados."
                },
                {
                    title: "Desarrollo y Optimización",
                    description: "Construimos el sitio con las mejores prácticas y lo optimizamos para velocidad y conversión."
                }
            ]}
            heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/modern-web-design-interface-layout-clean-minimal-3f21a8b9-20251119011116.jpg"
        />
    );
}

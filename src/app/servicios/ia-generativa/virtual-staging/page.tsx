import ServiceDetail from '@/components/sections/service-detail';

export default function VirtualStagingPage() {
    return (
        <ServiceDetail
            title="Virtual Staging y Tours"
            subtitle="Inmobiliaria del futuro: vende espacios antes de construirlos."
            description="Transformamos fotos de espacios vacíos o en construcción en hogares cálidos y amueblados con el estilo que desees. Ayudamos a inmobiliarias y promotoras a vender más rápido permitiendo que los clientes visualicen el potencial real de cada propiedad sin el coste del Home Staging físico."
            benefits={[
                "Aumento significativo del valor percibido",
                "Venta más rápida de propiedades",
                "Personalización de estilos (nórdico, industrial, etc.)",
                "Coste muy inferior al amueblado real",
                "Imágenes listas en 24-48 horas"
            ]}
            process={[
                {
                    title: "Recepción de Material",
                    description: "Nos envías las fotos de las estancias vacías o planos."
                },
                {
                    title: "Estilismo Virtual",
                    description: "Seleccionamos el mobiliario y decoración que mejor encaja con el target."
                },
                {
                    title: "Renderizado IA",
                    description: "Integramos los elementos con iluminación y sombras fotorrealistas."
                }
            ]}
            heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57/generated_images/luxury-modern-interior-design-empty-livi-d490b2f5-20251119011116.jpg"
        />
    );
}

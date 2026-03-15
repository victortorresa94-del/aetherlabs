import ServiceDetail from '@/components/sections/service-detail';

export default function BrandingIAPage() {
    return (
        <ServiceDetail
            title="Branding con IA"
            subtitle="Identidades visuales completas creadas a la velocidad de la luz."
            description="Desarrollamos la identidad de tu marca utilizando algoritmos generativos para explorar miles de posibilidades y encontrar la estética perfecta que resuene con tu audiencia. Entregamos un paquete completo que incluye todo lo necesario para lanzar tu marca al mercado."
            benefits={[
                "Logotipo y variaciones",
                "Paleta de colores y tipografías",
                "Brandboard completo",
                "Mockups de productos y papelería",
                "Ideas de contenido para redes sociales"
            ]}
            process={[
                {
                    title: "Discovery Workshop",
                    description: "Definimos los valores y la personalidad de tu marca."
                },
                {
                    title: "Exploración Generativa",
                    description: "Generamos cientos de opciones de logotipos y estilos visuales para elegir la dirección."
                },
                {
                    title: "Refinamiento y Entrega",
                    description: "Perfeccionamos la opción elegida y creamos todos los assets: brandboard, mockups y guías."
                }
            ]}
            heroImage="/images/munchs/poster-frame.jpg"
            galleryTitle="¿Qué es lo que hacemos?"
            galleryAspectRatio="aspect-[3/4]"
            gallery={[
                { src: '/images/munchs/logo.jpg', label: 'Logotipo' },
                { src: '/images/munchs/merch-shirt.jpg', label: 'Merchandising' },
                { src: '/images/munchs/gallery-5.jpg', label: 'Social Media' },
                { src: '/images/munchs/poster-frame.jpg', label: 'Cartelería' },
                { src: '/images/munchs/papeleria-burger.jpg', label: 'Papelería' },
                { src: '/images/munchs/packaging-box.jpg', label: 'Packaging' }
            ]}
        />
    );
}


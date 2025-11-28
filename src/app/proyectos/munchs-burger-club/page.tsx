import ProjectDetail from '@/components/sections/project-detail';

export default function MunchsBurgerPage() {
    return (
        <ProjectDetail
            title="Munch's Burger Club – Branding Integral con IA"
            subtitle="Creación de una marca de hamburguesas desde cero: Naming, Identidad Visual y Dirección de Arte."
            category="Branding & IA"
            client="Munch's Burger Club"
            timeline="3 Semanas"
            services={['IA Generativa', 'Branding', 'Dirección de Arte', 'Packaging']}
            challenge="El cliente necesitaba lanzar una nueva cadena de hamburguesas smash con una estética retro-moderna y desenfadada, pero contaba con un presupuesto limitado para contratar una agencia de branding tradicional y fotógrafos."
            solution="Utilizamos IA Generativa para desarrollar todo el universo visual de la marca. Desde la creación del logotipo con estilo retro, hasta la generación de assets para redes sociales, diseño de packaging y fotografía de producto hiperrealista sin necesidad de sesiones de fotos físicas."
            results={[
                'Identidad visual completa creada en tiempo récord.',
                'Ahorro del 80% en costes de producción de branding.',
                'Lanzamiento con +50 assets visuales listos para usar.',
                'Estética única y coherente en todos los puntos de contacto.'
            ]}
            heroImage="/images/munchs/burger-closeup.jpg"
            gallery={[
                '/images/munchs/gallery-1.jpg',
                '/images/munchs/gallery-2.jpg',
                '/images/munchs/gallery-3.jpg',
                '/images/munchs/gallery-4.jpg',
                '/images/munchs/gallery-5.jpg'
            ]}
        />
    );
}

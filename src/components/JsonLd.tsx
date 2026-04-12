export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aether Labs',
  url: 'https://aetherlabs.es',
  logo: 'https://aetherlabs.es/aether-logo-new.png',
  description: 'Implementamos IA en empresas. Claude, automatizaciones, agentes, software a medida y formación. Barcelona.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'Cataluña',
    addressCountry: 'ES',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hola@aetherlabs.es',
    url: 'https://aetherlabs.es/contacto',
  },
  sameAs: [
    'https://www.linkedin.com/company/aether-labs-tech',
  ],
};

export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es Aether Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aether Labs es una agencia de implementación de IA para empresas con sede en Barcelona. Implementamos Claude, construimos agentes autónomos, desarrollamos software a medida y formamos equipos en inteligencia artificial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo puedo empezar a implementar IA en mi empresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El primer paso es una auditoría gratuita donde analizamos tus procesos y detectamos dónde la IA puede generar más impacto. Puedes reservarla en aetherlabs.es/contacto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta implementar IA en una empresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del alcance. Tenemos proyectos desde servicios puntuales hasta el AI Team Lab (equipo dedicado desde 1.200€/mes). La primera auditoría es gratuita y sin compromiso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué sectores trabajáis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabajamos con empresas de todos los sectores: agencias, e-commerce, servicios profesionales, formación, salud y más. Lo que importa no es el sector sino tener procesos optimizables con IA.',
      },
    },
  ],
};

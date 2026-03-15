const fs = require('fs');
const path = require('path');

const labs = ['creative', 'systems', 'school'];

labs.forEach(lab => {
    const filePath = path.join('src', 'app', 'labs', lab, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove use client carefully
        content = content.replace(/"use client";\r?\n?/g, '');
        content = content.replace(/'use client';\r?\n?/g, '');

        // Ensure some nice comment at the top
        if (!content.startsWith('// Server')) {
            content = '// Server Component\\n' + content;
        }

        // Add JSON LD
        const divMatch = content.match(/<div className="min-h-screen bg-\[#050508\][^>]*>/);
        if (divMatch && !content.includes('application/ld+json')) {
            const schema = {
                "@context": "https://schema.org",
                "@type": "Service",
                "provider": {
                    "@type": "Organization",
                    "name": "Aether Labs",
                    "url": "https://aetherlabs.es"
                },
                "areaServed": "ES",
                "description": lab === 'creative'
                    ? "Producción de marketing con IA para empresas B2B."
                    : lab === 'systems'
                        ? "Consultoría en IA y Automatización para empresas B2B."
                        : "Formación en IA para equipos B2B."
            };

            const scriptTag = `\\n            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema)}) }}
            />`;

            content = content.replace(divMatch[0], divMatch[0] + scriptTag);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${lab}/page.tsx`);
    }
});

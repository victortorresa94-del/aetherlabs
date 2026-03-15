interface ServiceProps {
    id: string;
    number: string;
    category: string;
    title: React.ReactNode;
    description: string;
    tags: string[];
    align: 'left' | 'right';
    spriteImage: string;
    spriteAlt: string;
}

export default function ServiceSection({
    id,
    number,
    category,
    title,
    description,
    tags,
    align,
    spriteImage,
    spriteAlt,
}: ServiceProps) {
    return (
        <section
            className={`w4-service-section ${align === 'right' ? 'w4-align-right' : 'w4-align-left'}`}
            id={`s${number}`}
        >
            {/* Pixel art sprite — plain img, no Next.js Image wrapper */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={spriteImage}
                alt={spriteAlt}
                className="w4-pixel-sprite"
                loading="lazy"
                draggable={false}
            />

            <div className="w4-service-card" id={id}>
                <div className="w4-service-num">
                    {number} — {category}
                </div>
                <h2 className="w4-service-title">{title}</h2>
                <p className="w4-service-desc">{description}</p>
                <div className="w4-service-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="w4-tag">{tag}</span>
                    ))}
                </div>
                <a href="#cta" className="w4-service-link">Explorar servicio →</a>
            </div>
        </section>
    );
}

import Image from "next/image";

const projects = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/fedd60_930ca75776b04a568c070e3b944710e6_mv2-18.jpg",
    alt: "NFL social media mockup with Taylor Swift themed graphics",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/sleep_20Large-22.jpeg",
    alt: "Retail marketing imagery on a digital billboard",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/b2_20Large-23.jpeg",
    alt: "Interior design art prints in a bedroom setting",
  },
];

const WorkShowcaseGrid = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container">
        <h4 className="text-uppercase-label text-center mb-12">
          WHY ABSOLUTELY AI
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <div key={index} className="relative aspect-[16/10] overflow-hidden group">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseGrid;
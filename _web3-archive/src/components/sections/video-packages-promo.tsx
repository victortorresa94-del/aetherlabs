import React from 'react';
import Image from 'next/image';

const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/fedd60_2b91c641d9804727a1ad2caf199304f5_mv2-7.jpg";

const VideoPackagesPromo = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[640px]">
          <Image
            src={imageUrl}
            alt="Dramatic portrait of a person with red hair submerged in water, with artistic light effects."
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black z-10 hidden lg:block" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 lg:hidden" aria-hidden="true"></div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-white py-16 px-8 sm:px-16 lg:px-24">
          <h2 className="text-[40px] font-light leading-snug">
            Explore AI video packages
          </h2>
          <p className="mt-6 text-xl text-muted-foreground font-light max-w-md leading-relaxed">
            Engaging video services to tell your stories or promote your products.
          </p>
          <a
            href="#"
            className="mt-8 inline-block border border-white rounded-full px-8 py-2.5 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoPackagesPromo;
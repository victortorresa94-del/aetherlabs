import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CurvedArrowIcon = () => (
  <svg
    width="47"
    height="98"
    viewBox="0 0 47 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -top-4 -left-16 hidden lg:block"
    aria-hidden="true"
  >
    <path
      d="M38.83 5.18C30.92 11.98 24.76 20.71 20.05 30.5C15.35 40.29 12.09 51.15 10.19 62.5C8.29 73.85 7.79 84.43 8.56 94.34"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

const RestaurantCaseStudy = () => {
  const services = [
    "In-store design",
    "Marketing Assets",
    "Product Imagery",
    "Social Content",
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container">
        <div className="relative max-w-lg mb-16">
          <CurvedArrowIcon />
          <h3 className="text-3xl font-light leading-snug">
            Numbers achieved for Australia's most forward-thinking restaurant.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 flex flex-col gap-8 items-center md:items-start">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/Your_20paragraph_20text-8-25.png"
              alt="Gourmet Burger on a dark background"
              width={258}
              height={258}
              className="rounded-xl w-full max-w-[258px] aspect-square object-cover"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/Chicken_20AI-22.png"
              alt="Fried Chicken with an explosion effect in the background"
              width={258}
              height={258}
              className="rounded-xl w-full max-w-[258px] aspect-square object-cover"
            />
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <Image
              src="https://static.wixstatic.com/media/fedd60_f859f81f440a43039d93510e9f697424~mv2.jpg/v1/fill/w_343,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fedd60_f859f81f440a43039d93510e9f697424~mv2.jpg"
              alt="Yellow storefront poster with 'We're Open' text"
              width={343}
              height={548}
              className="rounded-xl object-contain h-auto w-full max-w-[343px]"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col h-full mt-8 md:mt-0">
            <ul className="space-y-4 text-base leading-relaxed">
              {services.map((service, index) => (
                <li key={index} className="flex">
                  <span className="text-accent-yellow mr-3">-</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-16">
              <Link
                href="/projects"
                className="inline-block text-center border-2 border-white rounded-full px-6 py-3 text-base font-normal hover:bg-white hover:text-black transition-colors min-w-[125px]"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCaseStudy;
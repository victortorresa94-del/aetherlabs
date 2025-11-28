import React from 'react';
import Image from 'next/image';

const TrustedBrandsSection = () => {
  return (
    <section className="bg-black text-foreground border-t border-border-subtle py-12">
      <div className="container">
        <h2 className="text-center text-uppercase-label text-[#6b7280] mb-10">
          Empresas que confían en nosotros
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {/* 94 Music */}
          <div className="relative w-44 h-24 md:w-56 md:h-28 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/customers/94 Blanco sin fondo.PNG"
              alt="94 Music"
              fill
              className="object-contain"
            />
          </div>

          {/* Sky Flex */}
          <div className="relative w-44 h-24 md:w-56 md:h-28 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/customers/SF.png"
              alt="Sky Flex"
              fill
              className="object-contain"
            />
          </div>

          {/* Suma Salut - Inverted to white */}
          <div className="relative w-44 h-24 md:w-56 md:h-28 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/customers/suma-salut.png"
              alt="Suma Salut"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>

          {/* Munch's Burger Club */}
          <div className="relative w-44 h-24 md:w-56 md:h-28 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/customers/munchs-burger-club.png"
              alt="Munch's Burger Club"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
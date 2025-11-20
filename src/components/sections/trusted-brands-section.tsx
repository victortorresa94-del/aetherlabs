import React from 'react';

const TrustedBrandsSection = () => {
  return (
    <section className="bg-black text-foreground border-t border-border-subtle py-12">
      <div className="container">
        <h2 className="text-center text-uppercase-label text-[#6b7280] mb-10">
          Empresas que confían en nosotros
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 lg:gap-24 opacity-50 hover:opacity-70 transition-opacity duration-300">
          <div className="text-white text-xl font-medium tracking-wide hover:opacity-100 transition-opacity duration-200">SONY</div>
          <div className="text-white text-xl font-medium tracking-wide hover:opacity-100 transition-opacity duration-200">NFL</div>
          <div className="text-white text-xl font-medium tracking-wide hover:opacity-100 transition-opacity duration-200">MODUS</div>
          <div className="text-white text-xl font-medium tracking-wide hover:opacity-100 transition-opacity duration-200">Kayo</div>
          <div className="text-white text-xl font-medium tracking-wide hover:opacity-100 transition-opacity duration-200">OPTUS</div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
import Image from 'next/image';

const AiVideoAcademyPromo = () => {
  return (
    <section className="bg-[#f5f5f5] text-black">
      <div className="mx-auto max-w-[1600px] px-8 py-16 md:px-12 lg:px-[120px] lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col items-center text-center lg:w-5/12 lg:items-start lg:text-left">
            <h2 className="text-[40px] font-bold leading-tight">
              Join The AI Video Academy
            </h2>
            <p className="mt-6 max-w-lg text-lg text-gray-700">
              The AI Video Academy is a growing hub of expert-led courses and
              cutting-edge tools, designed to help you master AI video creation -
              all in one single monthly membership.
            </p>
            <a
              href="https://www.theaivideoacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-3.5 text-base font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              Launch Platform
            </a>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/fedd60_7944b00650af4ee48928f8cdcfe908ca_mv2-5.png"
                alt="AI Video Academy on various devices mockup including laptop, desktop, tablet, and phone"
                width={1440}
                height={1000}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiVideoAcademyPromo;
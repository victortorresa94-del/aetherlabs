import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EntrepreneurAward = () => {
  return (
    <section className="bg-white text-black py-20 lg:py-32">
      <div className="container mx-auto px-8 sm:px-16 lg:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 w-full max-w-lg relative">
            <div className="aspect-[696/779] w-full bg-gray-200 rounded-2xl">
              {/* 
                Placeholder for the founder's image. 
                In a real project, this would be a Next.js Image component, e.g.:
                <Image
                  src="https://static.wixstatic.com/media/fedd60_0411132454b648589689b93563462b80~mv2.png/v1/fill/w_696,h_779,al_t,q_90,usm_0.66_1.00_0.01,enc_auto/Founder%20with%20award.png"
                  alt="Founder Jamie van Leeuwen with award"
                  width={696}
                  height={779}
                  className="rounded-2xl w-full h-auto"
                />
              */}
            </div>
            
            <div className="absolute top-8 right-8 w-[45%] max-w-[300px]">
              <div className="aspect-[318/138] w-full bg-yellow-400 border-[3px] border-yellow-500 rounded-lg shadow-xl flex items-center justify-center">
                 {/* 
                  Placeholder for the award badge.
                  In a real project, this would be a Next.js Image component, e.g.:
                  <Image
                    src="https://static.wixstatic.com/media/fedd60_36c74d6d45b44321943bfdd4f2b1d31a~mv2.png/v1/fill/w_318,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Gold%20Award%203.png"
                    alt="APAC Entrepreneur of the Year 2024 award badge"
                    width={318}
                    height={138}
                    className="w-full h-auto"
                  />
                 */}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg text-center lg:text-left">
            <h3 className="font-bold text-[40px] leading-[1.2] mb-5">
              AI Entrepreneur of the Year winner 2024
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Founder Jamie van Leeuwen named AI Entrepreneur of the Year APAC for groundbreaking achievements in AI content creation and innovation in 2024.
            </p>
            <Link
              href="#"
              className="inline-block rounded-full border-black border-2 text-black bg-white h-auto px-8 py-3.5 text-base font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Learn About Our Journey
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EntrepreneurAward;
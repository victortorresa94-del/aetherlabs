"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TedxSpeakerFeature = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // A subtle parallax effect for the image, moving it as the user scrolls.
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground py-16 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Side: Text Content - Placed second on mobile */}
          <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Public Speaking &amp; AI&nbsp;Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Founder Jamie van Leeuwen is a sought-after speaker on AI's impact on creative industries. We offer tailored talks and workshops to demystify artificial intelligence for your team or event.
            </p>
            <a
              href="mailto:contact@absolutelyai.com.au"
              className="inline-block text-lg text-primary hover:text-opacity-80 transition-opacity duration-300 group font-medium"
            >
              Inquire about speaking
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
            </a>
          </div>

          {/* Right Side: Image with Parallax - Placed first on mobile */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <div className="w-full max-w-lg mx-auto">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 rounded-2xl shadow-xl shadow-black/40 overflow-hidden">
                  <motion.div 
                    className="relative w-full h-[120%] -top-[10%]"
                    style={{ y: parallaxY }}
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/59f0faf1-8d44-4d77-bb9f-9909b2e2fd57-absolutelyai-com-au/assets/images/TEDX-15.jpg"
                      alt="Absolutely Ai founder Jamie van Leeuwen speaking at a TEDx event"
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TedxSpeakerFeature;
"use client";

import React, { useEffect, useRef, useState } from 'react';

const ProjectPackagesIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`bg-black text-white transition-all ease-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container py-16">
        <div className="flex flex-col items-center text-center gap-y-8 md:gap-y-12">
          <div className="w-full h-px bg-white/20" />
          <h2 className="font-light text-[2rem] leading-tight md:text-[3.5rem] md:leading-[1.2]">
            One-off projects or
            <br />
            complete content packages
          </h2>
          <div className="w-full h-px bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default ProjectPackagesIntro;
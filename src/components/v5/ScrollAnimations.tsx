'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Batch all .v5-reveal elements
      ScrollTrigger.batch('.v5-reveal', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.1,
          });
        },
        start: 'top 85%',
        once: true,
      });

      // Hero H1 char-by-char animation on load
      const h1 = document.querySelector('.v5-page h1');
      if (h1) {
        const text = h1.innerHTML;
        // Animate the whole h1 block on load
        gsap.from(h1, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Hero label + subtitle
      gsap.from('.v5-page .v5-label', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.1,
      });

      // Refresh triggers
      ScrollTrigger.refresh();
    };

    initGSAP();

    return () => {
      // Cleanup on unmount
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      });
    };
  }, []);

  return null;
}

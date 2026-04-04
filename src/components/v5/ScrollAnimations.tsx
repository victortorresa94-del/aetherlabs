'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const selectors = '.v5-reveal, .v5-reveal-left, .v5-reveal-right';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    // Staggered entrance for elements already visible on page load
    let staggerIndex = 0;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const delay = staggerIndex * 80; // 80ms stagger between each
        setTimeout(() => {
          el.classList.add('v5-revealed');
          // Stagger children if container has v5-stagger-children
          if (el.classList.contains('v5-stagger-children')) {
            staggerChildren(el);
          }
        }, delay);
        staggerIndex++;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('v5-revealed');
            // Stagger children
            if (el.classList.contains('v5-stagger-children')) {
              staggerChildren(el);
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Only observe elements not already revealed
      if (rect.top >= window.innerHeight) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

function staggerChildren(container: HTMLElement) {
  const children = Array.from(container.children) as HTMLElement[];
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 60}ms`;
    child.classList.add('v5-child-revealed');
  });
}

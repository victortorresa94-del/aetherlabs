'use client';

import { useEffect } from 'react';

export default function GlobalInteractivity() {
    useEffect(() => {
        // Detect touch device
        const isTouch = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
        if (isTouch) {
            document.body.classList.add('touch-device');
        }

        // ─── SCROLL PROGRESS BAR (top) ───
        const progressTop = document.getElementById('scroll-progress-top');
        const progressLeftFill = document.querySelector('#scroll-progress-left::after') as HTMLElement | null;

        const updateScrollProgress = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;

            if (progressTop) progressTop.style.width = `${pct}%`;

            // Left progress via CSS variable
            document.documentElement.style.setProperty('--scroll-pct', `${pct}%`);
        };

        window.addEventListener('scroll', updateScrollProgress, { passive: true });

        // ─── LEFT PROGRESS LINE (CSS approach) ───
        const style = document.createElement('style');
        style.textContent = `
      #scroll-progress-left::after {
        height: var(--scroll-pct, 0%) !important;
      }
    `;
        document.head.appendChild(style);

        // ─── CUSTOM CURSOR ───
        const cursor = document.getElementById('custom-cursor');
        let cursorVisible = false;

        if (cursor && !isTouch) {
            const moveCursor = (e: MouseEvent) => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
                if (!cursorVisible) {
                    cursor.style.opacity = '1';
                    cursorVisible = true;
                }
            };

            const onMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const clickable = target.closest('a, button, [role="button"]');
                if (clickable) {
                    cursor.classList.add('hovering');
                } else {
                    cursor.classList.remove('hovering');
                }
            };

            document.addEventListener('mousemove', moveCursor);
            document.addEventListener('mouseover', onMouseOver);

            return () => {
                window.removeEventListener('scroll', updateScrollProgress);
                document.removeEventListener('mousemove', moveCursor);
                document.removeEventListener('mouseover', onMouseOver);
                document.head.removeChild(style);
            };
        }

        // ─── SCROLL REVEAL ───
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all .reveal elements that aren't already in section components
        document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            try { document.head.removeChild(style); } catch { }
            revealObserver.disconnect();
        };
    }, []);

    return (
        <>
            {/* Top scroll progress bar */}
            <div id="scroll-progress-top" aria-hidden="true" />

            {/* Left progress indicator (desktop only) */}
            <div id="scroll-progress-left" aria-hidden="true" />

            {/* Custom cursor (desktop only) */}
            <div
                id="custom-cursor"
                aria-hidden="true"
                style={{ opacity: 0, zIndex: 10000, pointerEvents: 'none' }}
            />

            {/* Page entry flash */}
            <div id="entry-flash" aria-hidden="true" />
        </>
    );
}

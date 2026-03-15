'use client';

import { useEffect, useRef } from 'react';

export default function Overlays() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mx = 0, my = 0, rx = 0, ry = 0;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
        };
        window.addEventListener('mousemove', onMove);

        let raf: number;
        function tick() {
            raf = requestAnimationFrame(tick);
            rx += (mx - rx) * 0.15;
            ry += (my - ry) * 0.15;
            if (dotRef.current) {
                dotRef.current.style.left = mx + 'px';
                dotRef.current.style.top = my + 'px';
            }
            if (ringRef.current) {
                ringRef.current.style.left = rx + 'px';
                ringRef.current.style.top = ry + 'px';
            }
        }
        tick();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <>
            {/* Custom pixel cursor */}
            <div className="w4-cursor-dot" ref={dotRef} />
            <div className="w4-cursor-ring" ref={ringRef} />

            {/* CRT effects */}
            <div className="w4-scanlines" />
            <div className="w4-crt-flicker" />
            <div className="w4-grain" />

            {/* Progress / HP bar */}
            <div className="w4-hp-bar" id="w4-progress" />
        </>
    );
}

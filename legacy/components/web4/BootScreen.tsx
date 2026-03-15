'use client';

import { useState, useEffect, useCallback } from 'react';

export default function BootScreen() {
    const [phase, setPhase] = useState<'boot' | 'flash' | 'done'>('boot');

    const triggerTransition = useCallback(() => {
        if (phase !== 'boot') return;
        setPhase('flash');
        setTimeout(() => setPhase('done'), 500);
    }, [phase]);

    useEffect(() => {
        const timer = setTimeout(triggerTransition, 4000);

        const onClick = () => triggerTransition();
        const onKey = () => triggerTransition();
        document.addEventListener('click', onClick);
        document.addEventListener('keydown', onKey);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [triggerTransition]);

    if (phase === 'done') return null;

    return (
        <>
            <div className={`w4-boot-screen ${phase === 'flash' ? 'w4-boot-exit' : ''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/logo-pixel.png"
                    alt="Aether Labs"
                    className="w4-boot-logo"
                    draggable={false}
                />
                <div className="w4-boot-text">Press Start</div>
            </div>
            <div className={`w4-flash ${phase === 'flash' ? 'w4-flash-active' : ''}`} />
        </>
    );
}

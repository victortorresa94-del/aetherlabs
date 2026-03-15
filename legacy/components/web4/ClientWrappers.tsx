'use client';

import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('@/components/web4/ThreeScene'), { ssr: false });
const Overlays = dynamic(() => import('@/components/web4/Overlays'), { ssr: false });
const BootScreen = dynamic(() => import('@/components/web4/BootScreen'), { ssr: false });

export function ClientScene() {
    return <ThreeScene />;
}

export function ClientOverlays() {
    return <Overlays />;
}

export function ClientBootScreen() {
    return <BootScreen />;
}

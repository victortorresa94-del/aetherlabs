'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import type { GeometryType, AnimationType } from '@/data/experiments-page';

// ─── Skeleton ────────────────────────────────────────────────────────────────

function SceneSkeleton() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0a0a0a',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
          animation: 'sceneShimmer 1.8s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes sceneShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

// ─── Inner 3D scene (loaded lazily) ─────────────────────────────────────────

// Loaded only when in view — keeps Three.js out of initial bundle
const LazyScene3DInner = React.lazy(() =>
  import('./ExperimentScene3DInner').then((mod) => ({ default: mod.default }))
);

// ─── Public component ────────────────────────────────────────────────────────

interface ExperimentScene3DProps {
  geometry: GeometryType;
  animationType: AnimationType;
  accentColor: string;
  particleCount: number;
}

export default function ExperimentScene3D({
  geometry,
  animationType,
  accentColor,
  particleCount,
}: ExperimentScene3DProps) {
  if (typeof window === 'undefined') return <SceneSkeleton />;

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{ width: '100%', height: '100%' }}
      className="exp-scene-wrapper"
    >
      {inView ? (
        <Suspense fallback={<SceneSkeleton />}>
          <LazyScene3DInner
            geometry={geometry}
            animationType={animationType}
            accentColor={accentColor}
            particleCount={particleCount}
          />
        </Suspense>
      ) : (
        <SceneSkeleton />
      )}
    </div>
  );
}

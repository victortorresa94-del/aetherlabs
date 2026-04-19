'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

// ─── Static 3D render images per experiment ───────────────────────────────────

const SCENE_IMAGES: Record<string, string> = {
  'bamba-stock':          '/3D/3.jpeg',
  'artiverse':            '/3D/a-photorealistic-3d-render-of-a-vintage-_OF3bLKVCQ4KD5nu2IdUsqQ_6Kqc9bqmTWS93hXl6p3bxg.jpeg',
  'suma-salut':           '/3D/a-photorealistic-3d-render-of-a-vintage-_OqeWYbShQkuDurIimNbztA_S5kSc6lsRoGYa4xdsWEOSA_sd.jpeg',
  'bramer':               '/3D/a-photorealistic-3d-render-of-a-vintage-_oCBFrMh1TKeItv7e9K1nqA_rKf0luboQuinoLFYZv4y8g.jpeg',
  'musikeo':              '/3D/a-photorealistic-3d-render-of-a-vintage-_2xc5DGkVRIms8aIWGa_lCA_6Kqc9bqmTWS93hXl6p3bxg.jpeg',
  'restaurante-ia':       '/3D/1.jpeg',
  'asesoria-inteligente': '/3D/a-photorealistic-3d-render-of-a-vintage-_n7Asepv6SCOo7Nt22-oVRg_rKf0luboQuinoLFYZv4y8g.jpeg',
  'cannabis-club':        '/3D/a-photorealistic-3d-render-of-a-vintage-_Prs2BL9TS9GBta7Mva7n8w_6Kqc9bqmTWS93hXl6p3bxg.jpeg',
  'aura':                 '/3D/2.jpeg',
};

// ─── Floating image scene ─────────────────────────────────────────────────────

function SceneImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'sceneFloat 5s ease-in-out infinite',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={440}
        height={440}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '12px',
          filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.55))',
        }}
        priority={false}
      />
      <style>{`
        @keyframes sceneFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-14px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

// ─── Bonito Sound — GLB model ─────────────────────────────────────────────────

function WeeboModel() {
  const { scene } = useGLTF('/weebo-3d.glb');
  const ref = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.004;
    ref.current.position.y = Math.sin(s.clock.elapsedTime * 0.7) * 0.12;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.4}
      position={[0, -0.5, 0]}
    />
  );
}
useGLTF.preload('/weebo-3d.glb');

function BonitoScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 4]}  intensity={2.2} color="#FFF0E0" />
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#FFE0D0" />
      <pointLight position={[0, 2, 2]} intensity={1.2} color="#FF6B35" />
      <Suspense fallback={null}>
        <Float speed={1.0} floatIntensity={0.2} rotationIntensity={0}>
          <WeeboModel />
        </Float>
      </Suspense>
      <Environment preset="studio" />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

interface Props {
  id: string;
  geometry: string;
  animationType: string;
  accentColor: string;
  particleCount?: number;
}

export default function Experiment3DScene({ id }: Props) {
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  // Bonito Sound — glass torus knot R3F
  if (id === 'bonito-sound') {
    return (
      <div ref={containerRef} style={{ width: '100%', aspectRatio: '1/1', maxHeight: 440 }}>
        {mounted && inView && (
          <Canvas
            camera={{ position: [0, 0, 6.5], fov: 40 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent', width: '100%', height: '100%' }}
          >
            <Suspense fallback={null}>
              <BonitoScene />
            </Suspense>
          </Canvas>
        )}
      </div>
    );
  }

  // Resto — imagen 3D estática flotante
  const imageSrc = SCENE_IMAGES[id];
  if (imageSrc) {
    return (
      <div
        ref={containerRef}
        style={{ width: '100%', aspectRatio: '1/1', maxHeight: 440 }}
      >
        {mounted && <SceneImage src={imageSrc} alt={id} />}
      </div>
    );
  }

  // Fallback — no debería llegar aquí
  return <div ref={containerRef} style={{ width: '100%', aspectRatio: '1/1', maxHeight: 440 }} />;
}

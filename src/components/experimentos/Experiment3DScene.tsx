'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
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

// ─── Bonito Sound — glass torus knot (única escena R3F mantenida) ─────────────

function BonitoScene() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.32;
    ref.current.rotation.x += d * 0.12;
    ref.current.rotation.z += d * 0.06;
  });

  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 4]}  intensity={2.4} color="#FFF0E0" />
      <directionalLight position={[-4, 1, -3]} intensity={0.7} color="#D0DFFF" />
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0}>
        <mesh ref={ref}>
          <torusKnotGeometry args={[0.9, 0.32, 120, 24]} />
          <MeshTransmissionMaterial
            samples={3}
            transmission={1}
            roughness={0}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.05}
            color="#FF6B35"
          />
        </mesh>
      </Float>
      <Environment preset="apartment" />
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

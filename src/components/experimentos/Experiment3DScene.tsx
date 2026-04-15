'use client';

import { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float, Environment,
  MeshDistortMaterial, MeshTransmissionMaterial,
} from '@react-three/drei';
import * as THREE from 'three';
import createGlobe from 'cobe';

const ORANGE = '#FF6B35';

// ─── Shared lights ────────────────────────────────────────────────────────────

function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 6, 4]}  intensity={2.2} color="#FFF0E0" />
      <directionalLight position={[-4, 1, -3]} intensity={0.6} color="#D0DFFF" />
    </>
  );
}

// ─── 01 Bamba Stock ───────────────────────────────────────────────────────────
// Cristal de vidrio con rotación visible. Precisión, óptica, escaneo.

function BambaScene() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.3;
    ref.current.rotation.x += d * 0.1;
  });

  return (
    <>
      <Lights />
      <Float speed={1.4} floatIntensity={0.4} rotationIntensity={0}>
        <mesh ref={ref}>
          <sphereGeometry args={[1.3, 128, 128]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            transmission={0.92}
            roughness={0.02}
            thickness={0.7}
            ior={1.55}
            chromaticAberration={0.06}
            distortion={0.15}
            distortionScale={0.4}
            color={ORANGE}
          />
        </mesh>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 02 Artiverse — Globe (cobe) ─────────────────────────────────────────────
// Globo de conexiones. Outreach global, red de contactos.

function GlobeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phiRef = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab';
    }
  };

  const onRender = useCallback((state: Record<string, unknown>) => {
    if (pointerInteracting.current === null) phiRef.current += 0.003;
    (state as { phi: number }).phi = phiRef.current;
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const c = new THREE.Color(ORANGE);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1.5,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.6,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.18, 0.18, 0.22],
      markerColor: [c.r, c.g, c.b],
      glowColor: [c.r * 0.45 + 0.05, c.g * 0.2 + 0.02, c.b * 0.05 + 0.01],
      markers: [
        { location: [40.4168, -3.7038], size: 0.07 },
        { location: [41.3851,  2.1734], size: 0.10 },
        { location: [48.8566,  2.3522], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [40.7128,-74.0060], size: 0.06 },
        { location: [35.6762,139.6503], size: 0.04 },
      ],
      onRender,
    });

    return () => globe.destroy();
  }, [onRender]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => { pointerInteracting.current = e.clientX; }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => { if (pointerInteracting.current !== null) phiRef.current += (e.clientX - pointerInteracting.current) / 400; }}
        style={{ width: '100%', height: '100%', maxWidth: 440, maxHeight: 440, aspectRatio: '1/1', cursor: 'grab' }}
      />
    </div>
  );
}

// ─── 04 Bramer ────────────────────────────────────────────────────────────────
// Bronce pulido. Metal de precisión. ERP robusto.

function BramerScene() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.38;
    ref.current.rotation.x += d * 0.14;
  });

  return (
    <>
      <Lights />
      <mesh ref={ref}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshPhysicalMaterial
          color={ORANGE}
          metalness={0.92}
          roughness={0.06}
          clearcoat={1}
          clearcoatRoughness={0.02}
          reflectivity={1}
        />
      </mesh>
      <Environment preset="studio" />
    </>
  );
}

// ─── 05 Bonito Sound ──────────────────────────────────────────────────────────
// Nudo de vidrio. Flujo, música, escultura sonora.

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
      <Lights />
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.9, 0.32, 200, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          transmission={1}
          roughness={0}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          color={ORANGE}
        />
      </mesh>
      <Environment preset="apartment" />
    </>
  );
}

// ─── 06 Musikeo ───────────────────────────────────────────────────────────────
// Blob orgánico naranja. Ritmo, comunidad, movimiento.

function MusiceoScene() {
  return (
    <>
      <Lights />
      <Float speed={1.6} floatIntensity={0.5} rotationIntensity={0.4}>
        <mesh>
          <torusGeometry args={[1.05, 0.45, 64, 200]} />
          <MeshDistortMaterial
            color={ORANGE}
            distort={0.28}
            speed={2.5}
            metalness={0.05}
            roughness={0.05}
          />
        </mesh>
      </Float>
      <Environment preset="city" />
    </>
  );
}

// ─── 08 Asesoría Inteligente ──────────────────────────────────────────────────
// Esfera de vidrio + anillo fino. Disponibilidad orbital, precisión.

function AsesoriaScene() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (ringRef.current) ringRef.current.rotation.z += d * 0.55;
  });

  return (
    <>
      <Lights />
      <Float speed={1.0} floatIntensity={0.3} rotationIntensity={0.1}>
        <mesh>
          <sphereGeometry args={[1.1, 128, 128]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            transmission={1}
            roughness={0}
            thickness={0.55}
            ior={1.5}
            chromaticAberration={0.04}
            color={ORANGE}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[1.78, 0.022, 12, 200]} />
        <meshBasicMaterial color={ORANGE} transparent opacity={0.5} />
      </mesh>
      <Environment preset="studio" />
    </>
  );
}

// ─── 09 Cannabis Club ─────────────────────────────────────────────────────────
// Icosaedro de vidrio. Geometría limpia, sin adornos digitales.

function CannabisScene() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.34;
    ref.current.rotation.x += d * 0.13;
  });

  return (
    <>
      <Lights />
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.3, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          transmission={1}
          roughness={0}
          thickness={0.4}
          ior={1.5}
          chromaticAberration={0.05}
          color={ORANGE}
        />
      </mesh>
      <Environment preset="city" />
    </>
  );
}

// ─── 10 Aura ──────────────────────────────────────────────────────────────────
// Blob líquido. Presencia digital, aura personal. Lo más orgánico.

function AuraScene() {
  return (
    <>
      <Lights />
      <Float speed={0.9} floatIntensity={0.6} rotationIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[1.4, 128, 128]} />
          <MeshDistortMaterial
            color={ORANGE}
            distort={0.55}
            speed={1.6}
            metalness={0.0}
            roughness={0.0}
          />
        </mesh>
      </Float>
      <Environment preset="sunset" />
    </>
  );
}

// ─── Generic fallback ─────────────────────────────────────────────────────────

function GenericScene({ animationType }: { animationType: string }) {
  return (
    <>
      <Lights />
      <Float speed={1.4} floatIntensity={0.4} rotationIntensity={animationType === 'rotate' ? 0.6 : 0.2}>
        <mesh>
          <sphereGeometry args={[1.25, 128, 128]} />
          <MeshDistortMaterial color={ORANGE} distort={0.35} speed={2} metalness={0.05} roughness={0.05} />
        </mesh>
      </Float>
      <Environment preset="city" />
    </>
  );
}

// ─── Scene selector ───────────────────────────────────────────────────────────

function SceneContent({ id, animationType }: { id: string; animationType: string }) {
  switch (id) {
    case 'bamba-stock':          return <BambaScene />;
    case 'bramer':               return <BramerScene />;
    case 'bonito-sound':         return <BonitoScene />;
    case 'musikeo':              return <MusiceoScene />;
    case 'asesoria-inteligente': return <AsesoriaScene />;
    case 'cannabis-club':        return <CannabisScene />;
    case 'aura':                 return <AuraScene />;
    default:                     return <GenericScene animationType={animationType} />;
  }
}

// ─── Export ───────────────────────────────────────────────────────────────────

interface Props {
  id: string;
  geometry: string;
  animationType: string;
  accentColor: string;
  particleCount?: number;
}

export default function Experiment3DScene({ id, animationType }: Props) {
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

  // Artiverse — cobe globe, no R3F canvas needed
  if (id === 'artiverse') {
    return (
      <div ref={containerRef} style={{ width: '100%', aspectRatio: '1/1', maxHeight: 440 }}>
        {mounted && inView && <GlobeScene />}
      </div>
    );
  }

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
            <SceneContent id={id} animationType={animationType} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

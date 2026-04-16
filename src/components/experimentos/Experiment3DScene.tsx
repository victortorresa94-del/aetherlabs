'use client';

import { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float, Environment, RoundedBox,
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
// Phone mockup — polished metal. App web / móvil a medida.

function BambaScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.45) * 0.55;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.28) * 0.09;
  });

  return (
    <>
      <Lights />
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Phone body */}
          <RoundedBox args={[1.35, 2.7, 0.18]} radius={0.14} smoothness={8}>
            <meshPhysicalMaterial
              color={ORANGE}
              metalness={0.92}
              roughness={0.04}
              clearcoat={1}
              clearcoatRoughness={0.01}
            />
          </RoundedBox>
          {/* Screen (dark glass) */}
          <RoundedBox args={[1.02, 2.22, 0.02]} radius={0.09} smoothness={6} position={[0, 0.06, 0.1]}>
            <meshPhysicalMaterial color="#080808" roughness={0.08} metalness={0.15} />
          </RoundedBox>
          {/* Front camera dot */}
          <mesh position={[0, 1.2, 0.11]}>
            <circleGeometry args={[0.055, 20]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Home indicator */}
          <RoundedBox args={[0.38, 0.045, 0.01]} radius={0.02} smoothness={4} position={[0, -1.15, 0.11]}>
            <meshStandardMaterial color="#2a2a2a" />
          </RoundedBox>
        </group>
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
// Expedientes apilados — documentos de vidrio. Gestión, CRM, expedientes.

function AsesoriaScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.38) * 0.3;
  });

  const lineOffsets = [0.72, 0.44, 0.16, -0.12, -0.40, -0.68];

  return (
    <>
      <Lights />
      <Float speed={1.1} floatIntensity={0.38} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Back doc — solid, translucent */}
          <RoundedBox args={[1.65, 2.15, 0.06]} radius={0.06} smoothness={4} position={[0.22, -0.14, -0.28]} rotation={[0, -0.28, 0.07]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.05} roughness={0.45} transparent opacity={0.45} />
          </RoundedBox>
          {/* Mid doc */}
          <RoundedBox args={[1.65, 2.15, 0.06]} radius={0.06} smoothness={4} position={[0.1, -0.06, -0.13]} rotation={[0, -0.13, 0.035]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.08} roughness={0.3} transparent opacity={0.68} />
          </RoundedBox>
          {/* Front doc — glass */}
          <RoundedBox args={[1.65, 2.15, 0.06]} radius={0.06} smoothness={6}>
            <MeshTransmissionMaterial
              backside
              samples={4}
              transmission={0.88}
              roughness={0.02}
              thickness={0.1}
              ior={1.45}
              chromaticAberration={0.025}
              color={ORANGE}
            />
          </RoundedBox>
          {/* Text lines on front doc */}
          {lineOffsets.map((y, i) => (
            <mesh key={i} position={[i % 3 === 0 ? -0.1 : 0, y, 0.07]}>
              <boxGeometry args={[i % 2 === 0 ? 1.1 : 0.65, 0.042, 0.005]} />
              <meshBasicMaterial color={ORANGE} transparent opacity={0.22} />
            </mesh>
          ))}
        </group>
      </Float>
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

'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import type { GeometryType, AnimationType } from '@/data/experiments-page';

// ─── Geometry mesh with simplified animation ────────────────────────────────

function GeometryMesh({
  geometry,
  accentColor,
}: {
  geometry: GeometryType;
  accentColor: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.LineSegments>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;

    // C3: Solid, continuous rotation on a single axis (Y)
    meshRef.current.rotation.y = t * 0.25;
    if (wireRef.current) {
      wireRef.current.rotation.y = meshRef.current.rotation.y;
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'sphere': return new THREE.SphereGeometry(1.4, 64, 64);
      case 'torus': return new THREE.TorusGeometry(1.2, 0.4, 32, 100);
      case 'box': return new THREE.BoxGeometry(2.0, 2.0, 2.0);
      case 'cone': return new THREE.ConeGeometry(1.3, 2.4, 32);
      case 'icosahedron': return new THREE.IcosahedronGeometry(1.6, 0);
      case 'octahedron': return new THREE.OctahedronGeometry(1.7, 0);
      case 'cylinder': return new THREE.CylinderGeometry(1.0, 1.0, 2.4, 32);
      default: return new THREE.SphereGeometry(1.4, 64, 64);
    }
  }, [geometry]);

  // Create wireframe edges for clean look
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  return (
    <group>
      {/* C3: Solid object with accent color */}
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial
          color={accentColor}
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
      {/* C3: Fine wireframe segment overlay */}
      <lineSegments ref={wireRef} geometry={edges}>
        <lineBasicMaterial color="#ffffff" opacity={0.35} transparent />
      </lineSegments>
    </group>
  );
}

// ─── Exported default ────────────────────────────────────────────────────────

interface Props {
  geometry: GeometryType;
  animationType: AnimationType; // Kept for interface compatibility but unified in mesh
  accentColor: string;
  particleCount: number; // Removed internal particles as per C3
}

export default function ExperimentScene3DInner({
  geometry,
  accentColor,
}: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true, stencil: false, depth: true }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      {/* C3: PointLight frontal suave + highlight lateral */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, 2, 5]} intensity={0.8} color={accentColor} />

      <GeometryMesh
        geometry={geometry}
        accentColor={accentColor}
      />
    </Canvas>
  );
}

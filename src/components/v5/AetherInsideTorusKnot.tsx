'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.002 * 60;
      meshRef.current.rotation.y += delta * 0.002 * 60;
    }
  });

  return (
    <mesh ref={meshRef} position={[1.5, 0, 0]}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
      <meshBasicMaterial
        color="#00E5FF"
        wireframe
        opacity={0.08}
        transparent
      />
    </mesh>
  );
}

export default function AetherInsideTorusKnot() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: false }}
      dpr={[1, 1.2]}
    >
      <ambientLight intensity={0.1} />
      <TorusKnot />
    </Canvas>
  );
}

'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import TorsoModel from './TorsoModel';

export default function TorsoScene() {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 3]} intensity={2} castShadow />
        <pointLight position={[0, 1, -2]} intensity={200} color="#ffffff" />

        <Suspense fallback={null}>
          <TorsoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

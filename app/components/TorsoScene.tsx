'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import TorsoModel from './TorsoModel';

export default function TorsoScene() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Push statue up when entering footer zone
      const pushStart = scrollHeight - viewportHeight * 1.7;
      const pushEnd = scrollHeight - viewportHeight;

      if (scrollY < pushStart) {
        setOffsetY(0);
      } else if (scrollY > pushEnd) {
        setOffsetY(-100);
      } else {
        const progress = (scrollY - pushStart) / (pushEnd - pushStart);
        setOffsetY(-progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 z-20 pointer-events-none"
      style={{ transform: `translateY(${offsetY}vh)` }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 3]} intensity={2} castShadow />
        <pointLight position={[0, 1, -2]} intensity={200} color="#ffffff" />

        <Suspense fallback={null}>
          <TorsoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

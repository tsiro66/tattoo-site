'use client';

import { useEffect, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function TorsoModel() {
  const { scene } = useGLTF('/3d-torso.glb');
  const outerRef = useRef<THREE.Group>(null);
  const rotationTarget = useRef(0);

  // Clone scene and apply transforms synchronously before render
  const preparedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.matrixAutoUpdate = true;
    clone.rotation.set(1.5, -1.5, 0);
    clone.scale.set(1, 1, 1);
    clone.position.set(0, 0, 0);
    clone.updateMatrixWorld(true);

    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          roughness: 0.3,
          metalness: 0.1,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return clone;
  }, [scene]);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        rotationTarget.current = (window.scrollY / maxScroll) * Math.PI * 2;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (outerRef.current) {
      outerRef.current.rotation.y +=
        (rotationTarget.current - outerRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <group ref={outerRef}>
      <Center>
        <group scale={0.06} rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={preparedScene} dispose={null} />
        </group>
      </Center>
    </group>
  );
}

useGLTF.preload('/3d-torso.glb');

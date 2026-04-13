'use client';

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function TorsoModel() {
  const { scene } = useGLTF('/3d-torso.glb');
  const outerRef = useRef<THREE.Group>(null);
  const rotationTarget = useRef(0);

  useEffect(() => {
    scene.matrixAutoUpdate = true;
    scene.rotation.set(1.5, -1.5, 0);
    scene.scale.set(1, 1, 1);
    scene.position.set(0, 0, 0);
    scene.updateMatrix();

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          roughness: 0.3,
          metalness: 0.1,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
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
      <Center  position={[0, -0.3, 0]}>
        <group scale={0.06} rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={scene} dispose={null} />
        </group>
      </Center>
    </group>
  );
}

useGLTF.preload('/3d-torso.glb');

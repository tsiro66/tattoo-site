'use client';

import { useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';

export default function TorsoModel() {
  const { scene } = useGLTF('/3d-torso.glb');
  const outerRef = useRef<THREE.Group>(null);
  const rotationTarget = useRef(0);

  // Clone scene, apply transforms, collect ALL meshes
  const { preparedScene, allMeshes } = useMemo(() => {
    const clone = scene.clone(true);
    clone.matrixAutoUpdate = true;
    clone.rotation.set(1.5, -1.5, 0);
    clone.scale.set(1, 1, 1);
    clone.position.set(0, 0, 0);
    clone.updateMatrixWorld(true);

    const meshes: THREE.Mesh[] = [];

    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        meshes.push(child);

        child.material = new THREE.MeshStandardMaterial({
          roughness: 0.3,
          metalness: 0.1,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return { preparedScene: clone, allMeshes: meshes };
  }, [scene]);

  // Load tattoo texture
  const tattooTexture = useTexture('/back-tattoo.png');

  useLayoutEffect(() => {
    if (tattooTexture instanceof THREE.Texture) {
      tattooTexture.colorSpace = THREE.SRGBColorSpace;
      tattooTexture.needsUpdate = true;
    }
  }, [tattooTexture]);

  // Create decal on ALL meshes
  useEffect(() => {
    if (allMeshes.length === 0 || !(tattooTexture instanceof THREE.Texture)) return;

    const decalObjects: { mesh: THREE.Mesh; decalMesh: THREE.Mesh; geom: THREE.BufferGeometry; mat: THREE.Material }[] = [];

    for (const mesh of allMeshes) {
      mesh.updateWorldMatrix(true, false);

      if (!mesh.geometry.attributes.normal) {
        mesh.geometry.computeVertexNormals();
      }

      mesh.geometry.computeBoundingBox();
      const bbox = mesh.geometry.boundingBox!;
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      bbox.getCenter(center);
      bbox.getSize(size);

      const decalPosition = new THREE.Vector3(21.5, -37, 20);
      const decalSize = new THREE.Vector3(35, 30, 11);

      // Early exit: skip meshes whose bbox doesn't overlap the projector box
      const halfSize = decalSize.clone().multiplyScalar(0.5);
      const projMin = decalPosition.clone().sub(halfSize);
      const projMax = decalPosition.clone().add(halfSize);
      if (
        bbox.max.x < projMin.x || bbox.min.x > projMax.x ||
        bbox.max.y < projMin.y || bbox.min.y > projMax.y ||
        bbox.max.z < projMin.z || bbox.min.z > projMax.z
      ) {
        continue; // no overlap — skip expensive DecalGeometry
      }

      const savedMatrixWorld = mesh.matrixWorld.clone();
      mesh.matrixWorld.identity();

      const decalOrientation = new THREE.Euler(0, 0, Math.PI - Math.PI / 6);
      const decalGeometry = new DecalGeometry(mesh, decalPosition, decalOrientation, decalSize);

      mesh.matrixWorld.copy(savedMatrixWorld);

      const vertCount = decalGeometry.attributes.position?.count ?? 0;
      if (vertCount === 0) {
        decalGeometry.dispose();
        continue;
      }

      // "Inked into stone" material
      const decalMaterial = new THREE.MeshStandardMaterial({
        map: tattooTexture,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -10,
        roughness: 0.35,
        metalness: 0.05,
        toneMapped: true,
      });

      const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
      decalMesh.renderOrder = 1;
      mesh.add(decalMesh);

      decalObjects.push({ mesh, decalMesh, geom: decalGeometry, mat: decalMaterial });
    }

    return () => {
      for (const { mesh, decalMesh, geom, mat } of decalObjects) {
        mesh.remove(decalMesh);
        geom.dispose();
        mat.dispose();
      }
    };
  }, [allMeshes, tattooTexture]);

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
      <Center top position={[0, -1.8, 0]}>
        <group scale={0.06} rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={preparedScene} dispose={null} />
        </group>
      </Center>
    </group>
  );
}

useGLTF.preload('/3d-torso.glb');
useTexture.preload('/back-tattoo.png');

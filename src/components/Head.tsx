import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

export function Head() {
  const group = useRef<Group>(null);

  const { nodes, materials }: any = useGLTF("/models/head.glb");
  const bakedTexture = useTexture("/models/baked.jpg");
  bakedTexture.flipY = false;

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y -= 0.3 * delta;
  });

  return (
    <group
      ref={group}
      dispose={null}
      position={[0, 0.2, 0]}
      rotation={[3, 0, 0]}
      scale={0.025}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
      />
    </group>
  );
}

useGLTF.preload("/models/head.glb");

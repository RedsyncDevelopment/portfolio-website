/* eslint-disable */
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

import { Box } from "@react-three/drei";

const Cube: React.FC = ({}) => {
  const myMesh = useRef<Mesh>(null!);

  // const home = useLoader(TextureLoader, "textures/home.jpg");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    myMesh.current.rotation.x = t / 2;
    myMesh.current.rotation.y = t / 5;
    myMesh.current.rotation.z = t / 5;
  });

  return (
    <>
      <ambientLight />
      <group>
        <Box position={[0, 0, 0]} ref={myMesh} args={[2.5, 2.5, 2.5]}>
          <ambientLight />
          <meshBasicMaterial attach={"material"} />
          {/* <meshBasicMaterial attach={"material"} map={home} />
          <meshBasicMaterial attach={"material"} map={home} />
          <meshBasicMaterial attach={"material"} map={home} />
          <meshBasicMaterial attach={"material"} map={home} />
          <meshBasicMaterial attach={"material"} map={home} /> */}
        </Box>
      </group>
    </>
  );
};

export default Cube;

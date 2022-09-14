/* eslint-disable */
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh, TextureLoader } from "three";

import { Box } from "@react-three/drei";

const Cube: React.FC = ({}) => {
  const myMesh = useRef<Mesh>(null!);

  const home = useLoader(TextureLoader, "textures/home.jpg");
  const about = useLoader(TextureLoader, "textures/about.jpg");
  const skills = useLoader(TextureLoader, "textures/skills.jpg");
  const education = useLoader(TextureLoader, "textures/education.jpg");
  const contact = useLoader(TextureLoader, "textures/contact.jpg");
  const expirience = useLoader(TextureLoader, "textures/expirience.jpg");

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
          <meshBasicMaterial attach="material-0" map={home} />
          <meshBasicMaterial attach="material-1" map={about} />
          <meshBasicMaterial attach="material-2" map={skills} />
          <meshBasicMaterial attach="material-3" map={education} />
          <meshBasicMaterial attach="material-4" map={contact} />
          <meshBasicMaterial attach="material-5" map={expirience} />
        </Box>
      </group>
    </>
  );
};

export default Cube;

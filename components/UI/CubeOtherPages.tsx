import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const CubeOtherPages = () => {
  return (
    <div className="sm:w-60 sm:h-60 sm:right-20 2xl:w-80 2xl:h-80 w-40 h-40 absolute top-10 right-0">
      <Canvas camera={{ position: [0, 0, 5] }} flat>
        <ambientLight />
        <group>
          <Cube />
        </group>
      </Canvas>
    </div>
  );
};

export default CubeOtherPages;

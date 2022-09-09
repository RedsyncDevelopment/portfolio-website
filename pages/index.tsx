import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Introduction from "../components/Home/Introduction";
import Cube from "../components/UI/Cube";
import useDeviceWidth from "../hooks/useDeviceWidth";

const Home: NextPage = () => {
  const isMobile = useDeviceWidth();

  return (
    <div className="lg:h-screen lg:flex">
      <div className="lg:w-1/2 w-full">
        <Introduction />
      </div>
      {!isMobile && (
        <div className="w-1/2 relative h-full">
          <Canvas camera={{ position: [0, 0, 5] }} flat>
            <Cube />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default Home;

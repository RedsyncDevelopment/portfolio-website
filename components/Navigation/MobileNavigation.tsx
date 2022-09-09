import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import useMenuStore from "../../store/useMenuStore";
import Cube from "../UI/Cube";
import NavigationItems from "./NavigationItems";

const MobileNavigation = () => {
  const { isOpen, setIsOpen } = useMenuStore();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [router.asPath]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-14 w-full flex items-center px-8 md:px-24 justify-between relative">
        <p className="flex items-center gap-2 font-semibold">
          <span>Click on</span>
          <span>
            <BiCube className="w-6 h-6" />
          </span>
          <span>to open</span>
          <span className="text-black">MENU</span>
        </p>
        <button
          className="absolute right-1 top-1 w-16 h-16 sm:w-20 sm:h-20 sm:right-10 md:top-4"
          onClick={handleOpen}
        >
          <Canvas camera={{ position: [0, 0, 4] }} flat>
            <Cube />
          </Canvas>
        </button>
        {isOpen && (
          <div className="w-screen h-screen fixed top-0 left-0 bg-secondary-gray-200 z-[100000]">
            <button onClick={handleClose} className="absolute top-0 right-0">
              <AiFillCloseSquare className="w-8 h-8 fill-primary-blue-200" />
            </button>
            <div className="pt-14">
              <NavigationItems />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNavigation;

import Image from "next/image";
import myPicture from "../../public/images/cv.png";
import NavigationItems from "./NavigationItems";

const DesktopNavigation = () => {
  return (
    <>
      <div className="w-[30rem] h-screen fixed top-0 left-0 bg-secondary-gray-200 py-14 overflow-auto">
        <div className="flex flex-col items-center gap-14">
          <div className="w-40 h-40 flex items-center justify-center relative border-2 border-primary-blue-400 rounded-full">
            <Image
              src={myPicture}
              alt="Picture of Ivan horvat"
              layout="fill"
              priority={true}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            <span className="text-3xl pb-4 text-black">Ivan Horvat</span>
            <span className="text-xl text-primary-blue-400">
              Full-stack Developer
            </span>
            <span className="text-secondary-gray-400">Croatia (Europe)</span>
          </div>
          <NavigationItems />
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;

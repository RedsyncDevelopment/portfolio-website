import Image from "next/image";
import myPicture from "../../public/images/cv.png";
import NavigationItems from "./NavigationItems";

const DesktopNavigation = () => {
  return (
    <>
      <div className="hidden lg:block h-screen fixed w-1/4 top-0 left-0 bg-secondary-gray-200 dark:bg-secondary-gray-700 py-14 overflow-auto">
        <div className="flex flex-col items-center xl:gap-10 gap-10">
          <div className="xl:w-40 xl:h-40 w-32 h-32 flex items-center justify-center relative border-2 border-primary-blue-400 rounded-full">
            <Image
              src={myPicture}
              alt="Picture of Ivan horvat"
              layout="fill"
              priority={true}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            <span className="text-xl xl:text-3xl pb-4 text-black dark:text-white">
              Ivan Horvat
            </span>
            <span className="text-md xl:text-xl text-primary-blue-400">
              Front-end Developer
            </span>
            <span className="text-secondary-gray-400 xl:text-md text-sm">
              Croatia (Europe)
            </span>
          </div>
          <NavigationItems />
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;

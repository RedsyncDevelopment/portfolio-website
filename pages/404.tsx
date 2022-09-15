import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1>Error 404</h1>
          <p>Something went wrong!</p>
          <div className="flex gap-2">
            <p>Back to</p>
            <Link href="/">
              <a className="text-primary-blue-400 underline">HOME</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

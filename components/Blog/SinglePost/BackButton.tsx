import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  return (
    <Link href={"/blog"}>
      <a className="absolute flex gap-2 items-center top-4 left-4 border-2 p-4">
        <span>
          <AiOutlineArrowLeft />
        </span>
        <span>Back to ALL posts</span>
      </a>
    </Link>
  );
};

export default BackButton;

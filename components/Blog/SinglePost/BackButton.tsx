import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  const router = useRouter();

  let route;

  if (router.pathname.startsWith("/blog")) {
    route = "/blog";
  } else if (router.pathname.startsWith("/work")) {
    route = "/work";
  }

  return (
    <Link href={{ pathname: route }}>
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

import { NextPage } from "next";
import { ReactNode } from "react";

interface NotFoundProps {
  children?: ReactNode;
}

const NotFound: NextPage<NotFoundProps> = ({ children }) => {
  return (
    <>
      <div>404</div>
    </>
  );
};

export default NotFound;

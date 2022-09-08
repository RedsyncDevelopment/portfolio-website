import { NextPage } from "next";
import { ReactNode } from "react";

interface ExpirienceProps {
  children?: ReactNode;
}

const Expirience: NextPage<ExpirienceProps> = ({ children }) => {
  return (
    <>
      <div>Expirience</div>
    </>
  );
};

export default Expirience;

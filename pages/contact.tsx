import { NextPage } from "next";
import { ReactNode } from "react";

interface ContactProps {
  children?: ReactNode;
}

const Contact: NextPage<ContactProps> = ({ children }) => {
  return (
    <>
      <div>Contact</div>
    </>
  );
};

export default Contact;

import React, { ReactNode } from "react";
import { BsLinkedin } from "react-icons/bs";

interface ContactInformationProps {
  children?: ReactNode;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  children,
}) => {
  return (
    <div className="md:text-xl flex flex-col gap-6">
      <div>
        <h3>Email Address: </h3>
        <a href="mailto:ivan@redsync.studio">ivan@redsync.studio</a>
      </div>
      <div>
        <h3>Phone: </h3>
        <a href="tel:+385916126544">(+385) 91 / 6126 - 544</a>
      </div>
      <div>
        <p>Connect with me on:</p>
        <div className="flex gap-6 pt-2">
          <a
            href={"https://www.linkedin.com/in/ivan-horvat-24a4b417b/"}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;

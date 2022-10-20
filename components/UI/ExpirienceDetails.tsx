import React, { ReactNode } from "react";
import { FaBuilding, FaCheckSquare, FaEnvelope, FaGlobe } from "react-icons/fa";

interface ExpirienceDetailsProps {
  yearsSpan?: string;
  heading: string;
  companyName: string;
  companyType: string;
  address?: string;
  linkHref?: string;
  linkDescription?: string;
  certificate?: boolean;
}

interface WrapperDivInterface {
  children: ReactNode;
}

const WrapperDiv: React.FC<WrapperDivInterface> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 py-2">{children}</div>
  );
};

const ExpirienceDetails: React.FC<ExpirienceDetailsProps> = ({
  yearsSpan,
  heading,
  companyName,
  address,
  linkHref,
  linkDescription,
  companyType,
  certificate,
}) => {
  return (
    <div className="py-6">
      <div className="flex gap-2">
        <time>{yearsSpan}</time>
        <h3 className="text-primary-blue-400">{heading}</h3>
      </div>
      <div className="flex flex-col text-md">
        <WrapperDiv>
          <div className="flex gap-2 items-center">
            <span>
              <FaBuilding />
            </span>
            <span>{companyType}: </span>
          </div>
          <span>{companyName}</span>
        </WrapperDiv>
        {address && (
          <WrapperDiv>
            <div className="flex gap-2 items-center">
              <span>
                <FaEnvelope />
              </span>
              <span>Address: </span>
            </div>
            <address>{address}</address>
          </WrapperDiv>
        )}
        {!!linkHref &&
          (certificate ? (
            <WrapperDiv>
              <div className="flex gap-2 items-center">
                <span>
                  <FaCheckSquare />
                </span>
                <span>Certificate: </span>
              </div>
              <a
                target="_blank"
                href={linkHref}
                rel="noopener noreferrer"
                className="underline"
              >
                {linkDescription}
              </a>
            </WrapperDiv>
          ) : (
            <WrapperDiv>
              <div className="flex gap-2 items-center">
                <span>
                  <FaGlobe />
                </span>
                <span>Website: </span>
              </div>
              <a
                target="_blank"
                href={linkHref}
                rel="noopener noreferrer"
                className="underline"
              >
                {linkDescription}
              </a>
            </WrapperDiv>
          ))}
      </div>
    </div>
  );
};

export default ExpirienceDetails;

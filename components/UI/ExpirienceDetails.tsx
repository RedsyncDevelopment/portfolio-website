import React from "react";

interface ExpirienceDetailsProps {
  yearsSpan: string;
  heading: string;
  companyName: string;
  companyType: string;
  address: string;
  linkHref?: string;
  linkDescription?: string;
}

const ExpirienceDetails: React.FC<ExpirienceDetailsProps> = ({
  yearsSpan,
  heading,
  companyName,
  address,
  linkHref,
  linkDescription,
  companyType,
}) => {
  return (
    <div>
      <div className="flex gap-2">
        <time>{yearsSpan}</time>
        <h3 className="text-primary-blue-400">{heading}</h3>
      </div>
      <div>
        <h4 className="flex gap-2">
          <span>{companyType}: </span>
          <span>{companyName}</span>
        </h4>
        <div className="flex gap-2">
          <span>Address: </span>
          <address>{address}</address>
        </div>
        {!!linkHref && (
          <div>
            <span>Website: </span>
            <a
              target="_blank"
              href={linkHref}
              rel="noopener noreferrer"
              className="underline"
            >
              {linkDescription}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpirienceDetails;

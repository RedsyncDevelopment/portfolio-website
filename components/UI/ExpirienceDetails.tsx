import React from "react";

interface ExpirienceDetailsProps {
  yearsSpan: string;
  heading: string;
  companyName: string;
  address: string;
}

const ExpirienceDetails: React.FC<ExpirienceDetailsProps> = ({
  yearsSpan,
  heading,
  companyName,
  address,
}) => {
  return (
    <div>
      <div className="flex gap-2">
        <time>{yearsSpan}</time>
        <h3 className="text-primary-blue-400">{heading}</h3>
      </div>
      <div>
        <h4>{companyName}</h4>
        <div className="flex gap-2">
          <span>Address: </span>
          <address>{address}</address>
        </div>
      </div>
    </div>
  );
};

export default ExpirienceDetails;

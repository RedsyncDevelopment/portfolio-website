import React from "react";

interface SinglePostHeadingProps {
  heading: string;
}

const SinglePostHeading: React.FC<SinglePostHeadingProps> = ({ heading }) => {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
      {heading}
    </h1>
  );
};

export default SinglePostHeading;

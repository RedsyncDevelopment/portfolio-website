import React, { useRef } from "react";

interface DotsLevelProps {
  type: string;
  numberOfDots: number;
}

const DotsLevel: React.FC<DotsLevelProps> = ({ numberOfDots, type }) => {
  const divRef = useRef<HTMLDivElement>(null);

  divRef.current?.childNodes.forEach((node, i) => {
    if (i < numberOfDots) {
      node.classList.add("bg-secondary-gray-400");
    }
  });

  return (
    <>
      <li className="border-2 p-4 flex flex-col gap-4">
        <span>{type}</span>
        <div>
          <div className="flex gap-2" ref={divRef}>
            <div className="border-2 border-secondary-gray-400 w-4 h-4 rounded-full"></div>
            <div className="border-2 border-secondary-gray-400 w-4 h-4 rounded-full"></div>
            <div className="border-2 border-secondary-gray-400 w-4 h-4 rounded-full"></div>
            <div className="border-2 border-secondary-gray-400 w-4 h-4 rounded-full"></div>
            <div className="border-2 border-secondary-gray-400 w-4 h-4 rounded-full"></div>
            <div className="border-2 border-secondary-gray-400 w-4 h-4 rounded-full"></div>
          </div>
        </div>
        <span>B2 - Independet user</span>
      </li>
    </>
  );
};

export default DotsLevel;

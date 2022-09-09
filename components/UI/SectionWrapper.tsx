import React, { ReactNode } from "react";

interface SectionWrapperProps {
  paragraphName: string;
  paragraphNumber: string;
  paragraphContent?: string | ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  paragraphContent,
  paragraphName,
  paragraphNumber,
}) => {
  return (
    <div className="flex flex-col gap-4 lg:pl-20 pt-10">
      <div className="lg:flex items-center gap-2 lg:relative">
        <span className="font-bold text-primary-blue-200 text-[10px] lg:absolute bottom-1 -left-8">
          {paragraphNumber}
        </span>
        <h4 className="font-bold text-xl">{paragraphName}</h4>
      </div>
      <article className="text-secondary-gray-400 font-semibold text-md md:text-lg 2xl:text-xl xl:leading-relaxed 2xl:leading-relaxed">
        {paragraphContent}
      </article>
    </div>
  );
};

export default SectionWrapper;

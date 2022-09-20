import Image from "next/image";
import React from "react";

interface SinglePostImageProps {
  url: string;
  alt: string;
}

const SinglePostImage: React.FC<SinglePostImageProps> = ({ url, alt }) => {
  return (
    <div className="relative w-80 h-44 md:w-[500px] md:h-[340px] xl:w-[800px] xl:h-[480px]">
      <Image src={url} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default SinglePostImage;

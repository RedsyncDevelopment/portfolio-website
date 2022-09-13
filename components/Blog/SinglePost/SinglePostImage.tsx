import Image from "next/image";
import React from "react";

interface SinglePostImageProps {
  url: string;
  alt: string;
}

const SinglePostImage: React.FC<SinglePostImageProps> = ({ url, alt }) => {
  return (
    <div className="relative w-96 h-60 md:w-[500px] xl:w-[800px] xl:h-96">
      <Image src={url} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default SinglePostImage;

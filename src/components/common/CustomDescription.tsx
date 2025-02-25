import React from "react";
interface DescriptionProps {
  className?: string;
  Text: string;
}

const Description = ({ className, Text }: DescriptionProps) => {
  return (
    <p
      className={`leading-[150%] max-md:text-base text-white opacity-80 ${className}`}
    >
      {Text}
    </p>
  );
};

export default Description;

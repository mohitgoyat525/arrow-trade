import React from "react";
import Description from "../common/CustomDescription";
import Image from "next/image";

interface AiDrivenProps {
  map: { title: string; description: string }[];
  heading: string;
  colorHeading: string;
  description?: string;
  image: string;
}

const CustomMarket = ({
  map,
  heading,
  colorHeading,
  description,
  image,
}: AiDrivenProps) => {
  return (
    <div className="container mx-auto max-w-[1140px]">
      <div className="max-w-[655px] max-lg:mx-auto max-lg:max-w-full">
        <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-white leading-[121%]">
          {heading} <span className="text-lightGreen">{colorHeading}</span>
        </h2>

        {/* Render description only once */}
        {description && (
          <Description className="mt-4 mb-[30px]" Text={description} />
        )}

        {/* Only render a text description if available */}
        {description && <Description className="mt-4" Text={description} />}

        {/* Mapping through the items if map is defined */}
        <div className="flex flex-col gap-y-5">
          {map &&
            map.length > 0 &&
            map.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <p className="text-white leading-[150%] font-semibold max-md:text-sm max-lg:pt-4">
                  {item.title}
                </p>
                <Description Text={item.description} />
              </div>
            ))}
        </div>

        {/* Image */}
        <div className="mt-10 max-lg:mt-8 max-md:mt-5 max-sm:mt-3 rounded-[10px] bg-aiDriven !p-[1px]">
          <div className="!bg-darkBlack p-2.5 max-w-[653px] rounded-[10px] w-full h-full max-lg:mx-auto">
            <Image
              src={image}
              width={635}
              height={550}
              alt="images"
              className="pointer-events-none lg:max-w-[635px] max-lg:max-w-full max-lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMarket;

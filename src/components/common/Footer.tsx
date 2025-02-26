import { TradeIcon } from "@/utils/Icons";
import { FOOTER_LINKS_LIST, FOOTER_LIST, FOOTER_SOCIAL_LINKS } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerBg bg-center bg-cover bg-no-repeat py-[60px] max-sm:pt-12 relative">
      <p className="absolute top-[34px] right-[60px] max-md:right-6">
        <TradeIcon />
      </p>
      <div className="container max-w-[1140px] mx-auto flex flex-col relative z-10">
        <Link href="/">
          <Image
            src="/assets/images/svg/header-logo.svg"
            width={152}
            height={44.06}
            alt="logo"
          />
        </Link>
        <div className="flex gap-6 items-center flex-wrap gap-y-2 p-2.5 max-md:my-4 max-sm:my-3 my-[30px]">
          {FOOTER_LINKS_LIST.map((obj, index) => (
            <Link
              key={index}
              className="leading-[150%] whitespace-nowrap max-md:text-sm font-semibold text-white hover:text-cyan transition-all duration-300 hover:scale-105"
              href={obj.link}
            >
              {obj.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-y-[30px] max-md:gap-y-4 max-sm:gap-y-3 flex-col">
          {FOOTER_LIST.map((obj, index) => (
            <div key={index} className="flex flex-col gap-y-2.5">
              <p className="text-white leading-[150%] font-semibold text-base">
                {obj.title}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6 max-md:text-sm">
                {obj.description}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6 max-md:text-sm">
                {obj.descriptionTwo}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 pt-[50px] pb-[80px] max-xl:py-10 max-md:py-6">
          {FOOTER_SOCIAL_LINKS.map((obj, i) => (
            <Link key={i} target="_blank" href={obj.url}>
              <Image src={obj.image} alt="icons" width={40} height={40} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full bg-white h-[0.5px]"></div>
      <p className="text-center text-base leading-6 font-normal text-white opacity-80 pt-4">
        Copyright © 2024 ArrowTrade. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

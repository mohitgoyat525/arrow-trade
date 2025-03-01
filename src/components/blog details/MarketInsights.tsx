import React from 'react'
import CustomMarket from "../common/CustomMarket"
import Image from 'next/image';
import {
  CHANGING_GAME_HEADING_LIST,
  CHANGING_GAME_LIST,
  MARKET_HEADING_LIST,
  MARKET_INSIGHTS_LIST,
} from "@/utils/helper";
const MarketInsights = () => {
  return (
    <div className="flex justify-center items-center pb-[180px] max-xl:pb-28 max-lg:pb-24 max-md:pb-16 max-sm:pb-10 relative">
      <Image src='/assets/images/png/blog-cards-right-shadow.png' alt='shadow' width={237} height={237} className='w-full max-w-[237px] absolute top-0 right-0'/>
      <Image src='/assets/images/png/blog-cards-right-shadow.png' alt='shadow' width={237} height={237} className='w-full max-w-[237px] absolute bottom-[-10%] right-0 '/>
      <div className="flex max-lg:flex-col container relative max-w-[1140px] ">
        <div className="flex flex-col gap-y-[180px] max-xl:gap-16 max-lg:gap-14 max-md:gap-11 max-sm:gap-6">
          <CustomMarket
            map={MARKET_INSIGHTS_LIST}
            heading="What are AI-Driven "
            colorHeading="Market Insights?"
            description="AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions."
            image="/assets/images/webp/market-insights.webp"
          />

          <CustomMarket
            map={CHANGING_GAME_LIST}
            heading="How AI-Driven Market insights are "
            colorHeading="Changing The Game"
            image="/assets/images/webp/changing-game.webp"
          />
        </div>
        <div className="max-w-[485px] w-full flex justify-end max-lg:mx-auto max-lg:justify-center">
          <div className="bg-black border-lightGreen sticky top-1 max-w-[364px] max-lg:max-w-full max-xl:max-h-[563px] w-full border border-solid border-cyan rounded-3xl py-[30px] max-h-[525px]">
            <div className="flex gap-4 px-5 items-center">
              <Image
                src={"/assets/images/png/darellel-img.png"}
                width={80}
                height={80}
                alt="profile image"
              />
              <p className="font-semibold text-white leading-[150%] max-md:text-sm">
                Darrell Steward
              </p>
            </div>
            <div className="flex flex-col px-5  gap-y-4">
              <p className="font-semibold leading-[121%] mt-6 text-white max-md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {MARKET_HEADING_LIST.map((item, index) => (
                <p className="text-white/70 leading-[150%] max-md:text-sm">
                  {item}
                </p>
              ))}
            </div>
            <div className="my-5 h-0.5 bg-white/25 w-full"></div>
            <div className="flex flex-col px-5  gap-y-4">
              <p className="font-semibold leading-[121%] text-white max-md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {CHANGING_GAME_HEADING_LIST.map((item, index) => (
                <p
                  key={index}
                  className="text-white/70 leading-[150%] max-md:text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketInsights
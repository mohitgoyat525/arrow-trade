"use client";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import CustomBtn from "../common/CustomBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination,A11y } from "swiper/modules";

const LatestArticles = () => {
    return (
      <div className="relative pb-10">
        <div className="container">
          <h2 className="font-normal text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl pb-[70px] max-lg:pb-10 max-md:pb-8 text-white text-center">
            Latest{" "}
            <span className="font-semibold text-lightGreen"> Articles</span>
          </h2>

          {/* Swiper Container */}
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".right-btn",
              prevEl: ".left-btn",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 1,
              },
            }}
            className="flex items-center"
          >
            {ARTICLES_CARD_LIST.map((obj, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full max-w-[364px] mx-auto border h-[498px] border-lightGreen rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden">
                  <div className="max-w-[364px] overflow-hidden h-[237px]">
                    <Image
                      width={364}
                      height={237}
                      className="max-w-[364px] pointer-events-none object-cover hover:scale-110 duration-300 ease-linear"
                      src={obj.image}
                      alt="article image"
                    />
                  </div>
                  <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6">
                    {obj.date}
                  </p>
                  <div className="px-5">
                    <div className="w-full max-xl:flex-wrap gap-6 flex items-center justify-center -mt-6 relative z-30">
                      <CustomBtn
                        Text="Productivity"
                        myClass="py-[7px] px-[34.875px] bg-[#0F0D10] text-white shadow-none hover:text-custom-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px]"
                      />
                      <CustomBtn
                        Text={obj.timeReamining}
                        myClass="py-[7px] px-[34.875px] bg-[#232224] text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] hover:bg-white hover:text-custom-light-gray"
                      />
                    </div>
                    <h2 className="text-white pt-6 pb-2.5 text-xl font-semibold leading-[24.4px]">
                      {obj.title}
                    </h2>
                    <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">
                      {obj.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <Image
                          width={50}
                          height={50}
                          className="max-w-[50px] object-cover pointer-events-none"
                          src={obj.authorImg}
                          alt="author image"
                        />
                        <p className="text-white text-base font-semibold">
                          {obj.authorName}
                        </p>
                      </div>
                      <Image
                        src="/assets/images/svg/cards-arrow.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                        className="pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination block lg:hidden"></div>

          <div className="right-btn absolute top-1/2 max-lg:hidden left-[45px] flex items-center justify-center size-[60px] min-w-[60px] rounded-full bg-lightGreen">
            <Image
              src="/assets/images/svg/right-arrow.svg"
              alt="right-arrow"
              width={30}
              height={27}
            />
          </div>
          <div className="left-btn absolute top-1/2 max-lg:hidden right-[45px] flex items-center justify-center size-[60px] min-w-[60px] rounded-full bg-lightGreen">
            <Image
              src="/assets/images/svg/left-arrow.svg"
              alt="left-arrow"
              width={30}
              height={27}
            />
          </div>
        </div>
      </div>
    );
};

export default LatestArticles;

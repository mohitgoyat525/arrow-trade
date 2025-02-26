"use client";
import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import Link from "next/link";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

const DetailsHero = () => {
  const { tittle } = useParams();
      NProgress.start();
      setTimeout(() => {
        NProgress.done();
      }, 400);
const blogArray = ARTICLES_CARD_LIST.filter(
  (obj) =>
    obj && obj.title && obj.title.toLowerCase().replace(/\s+/g, "-") === tittle
);

const newBlogs: any = blogArray.length ? blogArray[0] : null; 

  return (
    <div className="pb-[271px] max-xl:pb-36 max-lg:pb-20 max-md:pb-16 max-sm:pb-10">
      {newBlogs ? (
        <div className="max-w-[1440px] mx-auto relative">
          <Header />
          <div className="container mt-[91px] max-lg:mt-10 max-md:mt-5 max-sm:mt-0 max-xl:pt-14 max-lg:pt-10 max-w-[1140px] mx-auto">
            <div className="max-w-[481px] max-lg:max-w-full">
              <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%]">
                {newBlogs.title}
              </h2>
              <p className="text-base leading-6 pt-4 pb-[30px] text-white opacity-80 font-normal max-xl:max-w-none">
                {newBlogs.description}
              </p>
              <div className="gap-4 items-center flex flex-wrap">
                <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-lightGreen bg-[#0F0D10] rounded-[50px] text-sm leading-[150%] transition-all ease-linear duration-300 hover:bg-lightGreen hover:text-white">
                  Productivity
                </button>
                <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-[#232224] border-white rounded-[50px] text-sm leading-[150%] transition-all ease-linear duration-300 hover:bg-lightGreen hover:text-white">
                  {newBlogs.timeReamining}
                </button>
                <p className="leading-[150%] font-semibold max-md:text-sm text-white">
                  {newBlogs.date}
                </p>
              </div>
            </div>
            <Image
              width={720}
              height={570}
              alt="blogs images"
              src={newBlogs.image}
              className="absolute h-[570px] object-cover top-0 right-0 max-xl:hidden"
            />
            <Image
              width={720}
              height={570}
              alt="blogs images"
              src={newBlogs.image}
              className="object-cover xl:hidden mx-auto mt-[50px]"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-red-700">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <h2 className="text-4xl font-semibold text-white mt-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white mt-2">There Is No Existence Of This Blog</p>
          <Link
            href="/"
            className="mt-6 px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default DetailsHero;

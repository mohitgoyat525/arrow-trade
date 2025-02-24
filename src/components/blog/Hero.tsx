import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import BlogCards from "./BlogCards";
import LatestArticles from "./LatestArticles";
import UsdJp from "../UsdJp";
import Footer from "../common/Footer";
const Hero = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/png/hero-section-layer.png"
        alt=""
        width={237}
        height={237}
        className="absolute top-0 left-0 max-w-80 w-full"
      />
      <UsdJp/>
      <Header/>
      <div className="">
        <h1 className="font-normal text-[64px] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[77.56px] max-w-[718px] mx-auto text-center text-white mt-[70px] max-lg:mt-10 max-md:mt-6">
          Unlock Knowledge with Our{" "}
          <span className="text-lightGreen"> Featured Articles </span>
        </h1>
        <p className="text-white opacity-70 text-base text-center max-w-[638px] mx-auto font-normal leading-6 ">
          Explore our latest articles, insights, and expert advice on industry
          trends. Stay informed, gain new perspectives, and discover valuable
          tips to help you stay ahead.
        </p>
        <BlogCards />
        <LatestArticles />
        <Footer/>
      </div>
    </div>
  );
};

export default Hero;

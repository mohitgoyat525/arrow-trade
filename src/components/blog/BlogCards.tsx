"use client";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomBtn from "../common/CustomBtn";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
const BlogCards = () => {
  const [open, setOpen] = useState(3);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const param = searchParams.get("page");
    if (param) {
      setOpen(parseInt(param) * 3);
    }
  }, [searchParams]);

  const allCard = ARTICLES_CARD_LIST.slice(0, open).filter(
    (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowMore = () => {
    const nextPage = open < ARTICLES_CARD_LIST.length ? open / 3 + 1 : 1;
    setOpen(nextPage * 3);
    window.history.pushState(null, "", `?blog/page=${nextPage}`);
  };

  return (
    <div className="pt-[30px] container mx-auto pb-[180px]">
      <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white border-opacity-25 max-w-[558px] mx-auto rounded-full">
        <label htmlFor="search" className="cursor-pointer">
          <Image
            src="/assets/images/svg/search-icon.svg"
            alt="search-icon"
            width={18}
            height={18}
            className="pointer-events-none"
          />
        </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="bg-transparent outline-none placeholder:text-white placeholder:opacity-80 text-white opacity-80 placeholder:leading-6 leading-6"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto w-full pt-[70px]">
        {allCard.map((obj, i) => (
          <Link
            key={i}
            href={`/blogs/${obj.title.toLowerCase().replace(/ /g, "-")}`}
          >
            <div className="relative w-full max-w-[364px] mx-auto border border-lightGreen rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden">
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
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center pt-10">
        <CustomBtn
          myOnClick={handleShowMore}
          myClass="py-[15px] px-6 border rounded-full !text-black bg-lightGreen text-center"
          Text={
            open < ARTICLES_CARD_LIST.length
              ? "Show all blogs"
              : "Hide all blogs"
          }
        />
      </div>
    </div>
  );
};

export default BlogCards;

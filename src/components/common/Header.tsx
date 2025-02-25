"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomBtn from "../common/CustomBtn";
import { HEADER_LIST } from "@/utils/helper";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Number | null>(4);
  const activeHandler = (index: number) => {
    setActive(active === index ? null : index);
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className="px-4 pt-4 max-sm:py-3 shadow-header-shadow">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center w-full py-4 bg-white bg-opacity-10 rounded-full pr-10 pl-[88px] border border-white border-opacity-15 max-lg:pl-12 relative z-40">
        <Link href="#">
          <Image
            width={150.2}
            height={44.06}
            src="/assets/images/svg/header-logo.svg"
            className="max-lg:w-28 max-sm:w-20 object-cover"
            alt="logo image"
          />
        </Link>
        <div
          className={`flex gap-6 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full z-40 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
            open ? "max-lg:right-0 max-lg:bg-black" : "max-lg:-right-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <div key={i} className=" cursor-pointer">
              <Link
                href={obj.path}
                onClick={() => {
                  {
                    setOpen(!open);
                  }
                  activeHandler(i);
                }}
                className={`cursor-pointer text-base leading-[19.36px] duration-300 ease-linear opacity-70 ${
                  active === i
                    ? "text-lightGreen font-bold opacity-100"
                    : "text-white font-normal"
                }`}
              >
                {obj.name}
              </Link>
            </div>
          ))}
          <div className="flex flex-col gap-6 items-center">
            <CustomBtn
              Text="Sign Up"
              myClass="lg:hidden shadow-none text-lightGreen py-4 px-7 rounded-full hover:bg-lightGreen hover:text-black"
            />
            <CustomBtn
              Text="Login"
              myClass="lg:hidden bg-lightGreen py-4 px-9 rounded-full !text-black hover:text-lightGreen hover:bg-transparent"
            />
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <CustomBtn
            Text="Sign Up"
            myClass="max-lg:hidden shadow-none text-lightGreen py-4 px-4 rounded-full hover:bg-lightGreen hover:text-black"
          />
          <CustomBtn
            Text="Login"
            myClass="max-lg:hidden bg-lightGreen py-4 px-[24.145px] !text-black rounded-full hover:!text-lightGreen hover:bg-transparent"
          />
        </div>

        {/* Toggle button */}
        <div
          onClick={() => setOpen(!open)}
          className="z-50 flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "rotate-45 translate-y-3"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-translate-x-10 opacity-0 duration-700"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-rotate-45 -translate-y-1"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;

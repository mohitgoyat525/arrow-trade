"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LIST } from "@/utils/helper";
import CustomBtn from "./CustomBtn";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1024) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <div>
      <div className="bg-lightGreen py-[18px]"></div>
      <div className="max-w-[1280px] px-4 mx-auto border mt-6 border-solid border-[#FFFFFF29] rounded-[60px] backdrop-blur-[40px] py-4 bg-[#1F1E20]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/images/svg/header-logo.svg"
              alt="logo"
              width={150}
              height={44}
              className="max-w-[150px]"
            />
          </Link>

          {/* Navigation links and Buttons */}
          <div
            className={`flex gap-[55px] max-xl:gap-10 transition-all duration-300 max-lg:flex-col max-lg:bg-white max-lg:w-full max-lg:h-full max-lg:justify-center max-lg:items-center ${
              open
                ? "max-lg:left-0 fixed top-0 left-0 z-40"
                : "max-lg:left-full"
            }`}
          >
            {/* Navigation Links */}
            <ul className="flex items-center gap-6 max-lg:flex-col">
              {HEADER_LIST.map((obj, i) => (
                <li key={i}>
                  <Link
                    href={obj.path}
                    className="text-white hover:text-lightGreen transition-all duration-300 opacity-70 hover:opacity-100 text-base font-normal leading-[19.36px]"
                  >
                    {obj.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Sign Up and Login Buttons */}
            <div className="flex gap-4 max-lg:flex-col">
              <CustomBtn
                Text="Sign Up"
                myclass="h-[53px] max-lg:min-w-[93px] flex items-center justify-center !p-0 lg:hidden"
              />
              <CustomBtn
                Text="Login"
                myclass="h-[53px] max-lg:min-w-[93px] flex items-center justify-center !p-0 lg:hidden"
              />
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-6 max-lg:hidden">
            <CustomBtn
              Text="Sign Up"
              myclass="h-[53px] min-w-[93px] flex items-center justify-center !p-0 max-lg:hidden"
            />
            <CustomBtn
              Text="Login"
              myclass="h-[53px] min-w-[93px] flex items-center justify-center !p-0 max-lg:hidden"
            />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={handleClick}
            className="flex flex-col items-center justify-between relative z-50 overflow-hidden h-5 w-6 lg:hidden"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
                open ? "transform translate-x-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg relative ${
                open ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
                open ? "transform -translate-x-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

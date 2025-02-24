"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Number | null>(4);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

    return (
        <nav className="overflow-hidden">
            <div className="bg-lightGreen py-[18px]"></div>
    <div className="pb-[19px] pt-[18px] max-lg:py-4 shadow-[0px_4px_8px_0px#00000040] max-w-[1280px] mx-auto">
      <div className="max-w-full mx-auto">
        <div className="px-4 sm:px-[40px] flex items-center justify-between bg-white/10 rounded-[60px] py-4 border border-white/15 backdrop-blur-[24px]">
          <Link href="/">
            <Image
              src="/assets/images/svg/header-logo.svg"
              alt="page-logo"
              width={150}
              height={44}
              className="pointer-events-none w-[150px] h-[44px] max-lg:w-[120px] max-sm:w-[90px]"
            />
          </Link>
          <div
            className={`flex max-lg:gap-10 max-lg:fixed max-lg:top-0 max-lg:min-h-screen max-lg:-right-full max-lg:h-min-screen max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-white max-lg:!z-20 ${
              open ? "max-lg:!right-0" : ""
            }`}
          >
            <div className="flex max-lg:flex-col items-center gap-[38px]">
              {HEADER_LIST.map((item, i) => (
                <Link
                  onClick={() => {
                    setOpen(false);
                    setActive(active === i ? null : i);
                  }}
                  key={i}
                  href={item.path}
                  className={`text-base transition-all duration-300 tracking-[0.28px] max-sm:text-lg hover:text-lightGreen font-bold leading-[20.11px] ${
                    active === i ? "text-lightGreen" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <CustomBtn myClass="" Text="Sign Up" />
            <CustomBtn
              myClass="px-[25px] !bg-lightGreen !text-black"
              Text="Login"
            />
          </div>
          <div className="flex items-center gap-10 lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="overflow-hidden relative z-50 lg:hidden size-8 gap-[4px] flex flex-col justify-center items-center"
            >
              <span
                className={`w-8 h-[5px] transition-all duration-300 bg-lightGreen rounded-lg ${
                  open ? "translate-x-10" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-[5px] transition-all duration-300 bg-lightGreen rounded-lg relative ${
                  open ? "rotate-45" : ""
                } ${
                  open ? "after:rotate-90" : ""
                } after:absolute after:top-0 after:left-0 after:w-8  after:h-[5px] after:bg-lightGreen after:rounded-lg`}
              ></span>
              <span
                className={`w-8 h-[5px] transition-all duration-300 bg-lightGreen rounded-lg ${
                  open ? "-translate-x-10" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
            </div>
            </nav>
  );
};

export default Header;

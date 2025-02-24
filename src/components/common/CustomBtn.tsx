import React from "react";

interface CustomBtn {
    Text: string;
    myclass: string
}

const CustomBtn: React.FC<CustomBtn> = ({ Text, myclass }) => {
  return (
    <button
      className={` rounded-[72px] border border-solid border-lightGreen font-semibold text-base leading-[19.36px] transition-all ease-linear text-lightGreen py-[17px] px-4 duration-300 hover:bg-lightGreen hover:text-black hover:shadow-[0px_4px_24.6px_0px_#71CED061] ${myclass}`}
    >
      {Text}
    </button>
  );
};

export default CustomBtn;

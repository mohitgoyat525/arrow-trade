import { USDJPY_LIST } from '@/utils/helper';
import React from 'react'

const UsdJp = () => {
  return (
    <div className="w-full bg-lightGreen flex items-center py-[18px] overflow-hidden">
      <div className="w-full items-center gap-[60px] flex bar-animation whitespace-nowrap">
        {USDJPY_LIST.map((obj, i) => (
          <div key={i} className="flex items-center gap-2">
            <p className="text-base font-normal leading-[19.36px]">
              {obj.title}
            </p>
            <p className="bg-[#4C4C4C] text-white text-base font-normal leading-[19.36px] rounded-full p-[5px_8px_4px_11px] flex items-center gap-1.5">
              {obj.price}{" "}
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 1 ? "bg-[#00C11F]" : "bg-[#D01314]"
                }`}
              ></span>
            </p>
          </div>
        ))}
        {USDJPY_LIST.map((obj, i) => (
          <div key={i} className="flex items-center gap-2">
            <p className="text-base font-normal leading-[19.36px]">
              {obj.title}
            </p>
            <p className="bg-[#4C4C4C] text-white text-base font-normal leading-[19.36px] rounded-full p-[5px_8px_4px_11px] flex items-center gap-1.5">
              {obj.price}{" "}
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 1 ? "bg-[#00C11F]" : "bg-[#D01314]"
                }`}
              ></span>
            </p>
          </div>
        ))}
        {USDJPY_LIST.map((obj, i) => (
          <div key={i} className="flex items-center gap-2">
            <p className="text-base font-normal leading-[19.36px]">
              {obj.title}
            </p>
            <p className="bg-[#4C4C4C] text-white text-base font-normal leading-[19.36px] rounded-full p-[5px_8px_4px_11px] flex items-center gap-1.5">
              {obj.price}{" "}
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 1 ? "bg-[#00C11F]" : "bg-[#D01314]"
                }`}
              ></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsdJp
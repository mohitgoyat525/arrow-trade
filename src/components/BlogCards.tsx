import React from 'react'
import Image from 'next/image'
const BlogCards = () => {
  return (
    <div className="container mt-[30px]">
      <div className="flex items-center border border-solid border-[#FFFFFF3D] px-[30px] gap-[10px] mx-auto rounded-full w-full max-w-[558px] h-[60px]">
        <Image
          src="/assets/images/svg/search-icon.svg"
          alt="search-icon"
          width={18}
          height={18}
          className=""
        />
        <input
          type="search"
          placeholder="Search"
          className="outline-none w-full font-normal text-base leading-6 bg-transparent text-white  placeholder:text-white placeholder:opacity-80"
        />
          </div>
          
    </div>
  );
}

export default BlogCards
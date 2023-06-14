"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";

const Search = () => {
  return (
    <div
      className="
    flex
    flex-row
    h-[50px]
    "
    >
      <div
        className="
      border-[1px] 
      w-full 
      h-full
      md:w-[1224px] 
      py-4 
      shadow-sm 
      transition 
      cursor-pointer
      bg-[#eff0f5]
    "
      >
        <input
          placeholder="ค้นหาในลาซาด้า"
          className="
        
        flex 
        flex-row 
        items-center 
        justify-between
        text-xl
        outline-none
        w-full
        h-full
        ml-5
        bg-[#eff0f5]
    
      "
        ></input>
      </div>
      <AiOutlineSearch className=" bg-orange-500 h-full" size={40} />
    </div>
  );
};

export default Search;

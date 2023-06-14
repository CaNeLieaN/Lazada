"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";

const Search = () => {
  return (
    <div
      className="
      border-[1px] 
      w-full 
      md:w-[1224px] 
      py-4 
      shadow-sm 
      transition 
      cursor-pointer
    "
    >
      <div
        className="
        flex 
        flex-row 
        items-center 
        justify-between
        text-xl
          font-semibold
          text-neutral-500
      "
      >
        ค้นหาในลาซาด้า
        <AiOutlineSearch
          className="
              bg-orange-500
        "
          size={18}
        />
      </div>
    </div>
  );
};

export default Search;

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex flex-row h-12">
      <div className="flex-grow">
        <div className="border border-gray-300 w-full h-full py-2 px-4 shadow-sm transition cursor-pointer bg-gray-100">
          <input
            placeholder="ค้นหาในลาซาด้า"
            className="w-full h-full text-xl outline-none bg-transparent"
          />
        </div>
      </div>
      <AiOutlineSearch
        className="h-full p-2 bg-orange-500 cursor-pointer"
        size={24}
      />
    </div>
  );
};

export default Search;

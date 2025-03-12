"use client";
import { useState } from "react";
import * as ICONS from "./icons";

const SearchBar = ({ setRecipe }: { setRecipe: (recipe: string) => void }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = () => {
    setRecipe(searchItem);
  };

  return (
    <div className=" bg-black p-4">
      <div className="w-[100%] lg:w-[80%] mx-auto bg-white flex justify-between items-center py-2 px-4 h-[40px]">
        <div className="hidden lg:flex items-center gap-4 w-[200px]">
          <p className="font-bold">I WANT TO MAKE</p>
          <div onClick={handleSubmit}>
            <ICONS.SearchIcon />
          </div>
        </div>
        <input
          className={`w-[100%] lg:w-[80%] focus:outline-none`}
          placeholder="RECIPE"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <div className="flex " onClick={() => setSearchItem("")}>
          <p className="hidden lg:block text-gray-500 cursor-pointer">clear</p>
          <div>
            <ICONS.CrossIcon color="text-gray-500" />
          </div>
        </div>
        <hr className="h-2 bg-purple-900" />
      </div>
    </div>
  );
};

export default SearchBar;

import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center pb-10">
      <input
        type="text"
        placeholder="search for character..."
        className=" w-[60%] mr-4 rounded-md py-2 px-6 border-solid border-blue-600  border-2 text-slate-700 text-sm outline-none drop-shadow-lg max-w-xl"
      />
      <button className="bg-blue-500 text-white rounded-md px-6 transition-all duration-300 ">
        Search
      </button>
    </div>
  );
};

export default Search;

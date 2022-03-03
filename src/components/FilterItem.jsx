import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const FilterItem = ({ name, arr, fun }) => {
  const [num, setNum] = useState("scale-100");
  return (
    <div className="mx-5 my-4">
      <p className="text-center mb-4">{name}</p>
      <div className="flex gap-3 flex-wrap justify-center">
        {arr.map((item) => {
          return (
            <button
              className="rounded-lg bg-gray-800 text-slate-200  hover:text-slate-800 hover:bg-amber-300"
              onClick={() => {
                fun(item);
              }}
            >
              <FaBookmark
                className={`text-amber-300 absolute mt-0 ml-0 ${num}`}
              />
              <p className=" py-1 px-4">{item}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterItem;

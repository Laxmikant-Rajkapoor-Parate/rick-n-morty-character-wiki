import React, { useState } from "react";

const MyButton = ({ item, fun }) => {
  return (
    <button
      className="rounded-lg bg-gray-800 text-slate-200 hover:text-slate-800 hover:bg-amber-300"
      onClick={() => {
        fun(item);
      }}
    >
      <p className=" py-1 px-4">{item}</p>
    </button>
  );
};

export default MyButton;

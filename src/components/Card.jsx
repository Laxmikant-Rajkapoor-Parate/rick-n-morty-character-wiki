import React from "react";

const Card = ({ data }) => {
  let status;
  if (data.status === "Alive") {
    status = "bg-green-600";
  } else if (data.status === "Dead") {
    status = "bg-rose-500";
  } else {
    status = "bg-gray-500";
  }
  return (
    <div className="border-blue-500 bg-white rounded-xl w-72 mx-[1%] my-2 border-solid border-2 flex flex-col overflow-hidden">
      <img src={data.image} className="w-full h-64 object-cover" />
      <p className="text-gray-800 font-semibold text-lg pl-4 py-4">
        {data.name}
      </p>
      <p className="pl-4 text-sm text-slate-700">Last location</p>
      <p className="pl-4 text-md text-slate-800 pb-3">{data.location.name}</p>
      <span
        className={`py-1 px-2 text-sm rounded-md ${status} w-fit text-sm text-white absolute ml-4 mt-4`}
      >
        {data.status}
      </span>
    </div>
  );
};

export default Card;

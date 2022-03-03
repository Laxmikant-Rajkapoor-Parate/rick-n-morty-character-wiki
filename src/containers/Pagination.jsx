import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  const prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };

  const next = () => {
    setPageNumber((x) => x + 1);
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={prev}
        className="px-4 py-2 bg-blue-600 text-slate-100 rounded-md my-4 mx-4"
      >
        Prev
      </button>
      <button
        onClick={next}
        className="px-4 py-2 bg-blue-600 text-slate-100 rounded-md my-4 mx-4"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

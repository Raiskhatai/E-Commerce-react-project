import React from "react";

const Pagination = ({ page, handlePage, dynamic, setpage }) => {
  const pages = [];
  const getPages = (current, total) => {
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, "...", total);
      } else if (current > total - 2) {
        pages.push(1, "...", total - 2, total - 1, total);
      } else {
        pages.push(1, "...", current - 1, current, current + 1, "...", total);
      }
    }
    return pages;
  };
  return (
    <div className="mx-auto w-fit ">
      <button
        onClick={() => {
          setpage((prev) => prev - 1);
        }}
        disabled={page === 1}
        className={`${page === 1 ? "bg-red-400 text-white" : "bg-red-600 text-white"} text-black font-semibold capitalize rounded-l p-2 cursor-pointer hover:scale-105 mx-2`}
      >
        prev
      </button>
      {getPages(page, dynamic).map((item, idx) => {
        return (
          <span
            className={`mx-1 ${item === page ? "text-red-500 text-2xl" : "text-black"} cursor-pointer`}
            onClick={() => (typeof item == "number" ? handlePage(item) : null)}
          >
            {item}
          </span>
        );
      })}
      <button
      
        onClick={() => {
          setpage((prev) => prev + 1);
        }}
        disabled={page === dynamic}
        className={`${page === dynamic ? "bg-red-300 text-white" : "bg-red-600 text-white"} text-black font-semibold capitalize  rounded-l p-2 cursor-pointer hover:scale-105 mx-2`}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;

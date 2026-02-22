import React from "react";
import { useDataContext } from "../ContextApi/ContextApi";

const Options = () => {
  const { pureCategory } = useDataContext();
  return (
    <div className=" bg-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 p-4">
      {pureCategory.slice(0, 7).map((item, idx) => {
        return (
          <h1
            key={idx}
            className=" mx-auto bg-black w-45 md:w-30 text-white line-clamp-1 cursor-pointer hover:scale-105 font-medium text-center rounded-2xl capitalize p-2  "
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
};

export default Options;

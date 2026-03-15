import React from "react";
import { useDataContext } from "../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const Options = () => {
  // const { pureCategory } = useDataContext();
  const { Data } = useDataContext();
  let chooseCateogery = (data, val) => {
    const category = data.map((item) => item[`${val}`]);
    return [ ...new Set(category)];
  };

  const pureCategory = chooseCateogery(Data, "category");

  const nevigate = useNavigate();
  return (
    <div className=" bg-white w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-8 gap-4 p-4">
      {pureCategory.map((item, idx) => {
        return (
          <button
            onClick={() => nevigate(`/category/${item}`)}
            key={idx}
            className=" mx-auto bg-black w-45 md:w-40 text-white line-clamp-2 cursor-pointer hover:scale-105 font-medium text-center rounded-2xl capitalize p-2  "
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Options;

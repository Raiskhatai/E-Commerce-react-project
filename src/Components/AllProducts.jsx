import React, { useEffect } from "react";
import { useDataContext } from "../ContextApi/ContextApi";

const AllProducts = () => {
  const { Data, fetchData } = useDataContext();
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="  col-span-1 sm:col-span-2 lg:col-span-3  p-10 border  border-gray-300 pt-15">
      {Data.length > 0 ? (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-x-70 lg:gap-20">
          {Data.map((item, idx) => {
            return (
              <div
                className="shadow-lg flex flex-col gap-2 items-center hover:scale-105 transition-all cursor-pointer  hover:shadow-gray-500 w-60 rounded-3xl"
                key={idx}
              >
                <img src={item.images} alt="" className="w-45 h-45" />
                <button className="bg-red-500 text-white rounded-lg w-25 h-10 hover:scale-105 mx-auto mb-2 cursor-pointer font-semibold capitalize ">
                  add
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AllProducts;

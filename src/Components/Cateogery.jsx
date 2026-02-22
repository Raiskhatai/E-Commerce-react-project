import React from "react";
import { useDataContext } from "../ContextApi/ContextApi";

const Cateogery = () => {
  const { pureCategory } = useDataContext();
  return (
    <div className=" col-span-2 sm:col-end-2 ">
      <form action="" className=" p-5 md:p-10 " onSubmit={(e)=> e.preventDefault()} >
        <input type="text" placeholder="Search" className=" outline-none border-2 border-black rounded-2xl w-26 px-5 py-1 mb-6 lg:w-65 " />
        {pureCategory.map((item) => {
          return (
            <div className="font-semibold text-lg capitalize ">
              <input type="checkbox" /> {item}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Cateogery;

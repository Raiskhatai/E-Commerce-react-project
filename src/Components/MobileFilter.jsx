import React from "react";
import { FaFilter } from "react-icons/fa";
import { useDataContext } from "../ContextApi/ContextApi";

const MobileFilter = ({
  openFilter,
  setopenFilter,
  search,
  setsearch,
  cateogery_check,
  setcateogery_check,
  brand,
  setbrand,
  price_range,
  setprice_range,
  handleBrand,
  handleCategory,
}) => {
  console.log(openFilter);
  const { pureCategory, brandCategory } = useDataContext();

  return (
    <>
      <div className="">
        <div className="bg-gray-100 flex  justify-between items-center md:hidden px-4 p-6  ">
          <h1 className="font-extrabold text-xl ">Filter</h1>
          <FaFilter
            onClick={() => setopenFilter(!openFilter)}
            className="cursor-pointer text-gray-800 "
          />
        </div>

        {openFilter ? (
          <div className="bg-gray-100 p-2  ">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              className=" outline-none border-2 border-black rounded-lg bg-white w-1/2 xl:w-full px-5 py-1 mb-6  "
            />

            <h1 className="font-bold text-2xl mb-5">Cateogery</h1>
            {pureCategory.map((item, idx) => {
              return (
                <div className="text-lg capitalize " key={idx}>
                  <input
                    type="checkbox"
                    className="cursor-pointer capitalize "
                    value={item}
                    onChange={handleCategory}
                    checked={item == cateogery_check}
                  />{" "}
                  <button className="ml-5 capitalize ">{item}</button>
                </div>
              );
            })}
            <div className="mt-5">
              <h1 className="mb-5 text-2xl capitalize font-bold">brands</h1>
              <select
                name=""
                id=""
                className="bg-white outline-0 "
                menuPlacement="bottom"
                value={brand}
                onChange={handleBrand}
              >
                {brandCategory?.map((item, idx) => {
                  return (
                    <option
                      value={item}
                      key={idx}
                      className="text-center uppercase"
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="">
              <h1 className="capitalize font-bold text-2xl my-5">
                price range
              </h1>
              <h1>
                price range : ${price_range[0]} - ${price_range[1]}
              </h1>
              <input
                min={0}
                max={5000}
                type="range"
                name=""
                id=""
                value={price_range[1]}
                className="mt-2 w-50"
                onChange={(e) => {
                  setprice_range([price_range[0], Number(e.target.value)]);
                }}
              />
            </div>
            <button
              className="m-4 bg-red-500 text-white py-2 px-4 mx-auto rounded-lg capitalize cursor-pointer hover:scale-105 text-l font-semibold "
              onClick={() => {
                (setbrand("all"),
                  setcateogery_check("all"),
                  setsearch(""),
                  setprice_range([0, 5000]));
                  setopenFilter(false)
                  window.scrollTo(0,0);
              }}
            >
              reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MobileFilter;

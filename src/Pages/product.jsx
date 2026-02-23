import Cateogery from "../Components/Cateogery";
import { useEffect, useState } from "react";
import { useDataContext } from "../ContextApi/ContextApi";
import { FiShoppingCart } from "react-icons/fi";

const Product = () => {
  const { Data, fetchData } = useDataContext();
  const [search, setsearch] = useState("");
  const [cateogery_check, setcateogery_check] = useState("all");
  const [brand, setbrand] = useState("all");
  const [price_range, setprice_range] = useState([0, 5000]);

  const handleCategory = (e) => {
    setcateogery_check(e.target.value);
  };

  const handleBrand = (e) => {
    setbrand(e.target.value);
  };

  const filterData = Data.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (item.brand == brand || "all" == brand) &&
      (item.category == cateogery_check || cateogery_check == "all") &&
      item.price >= price_range[0] &&
      item.price <= price_range[1]
    );
  });

  console.log(brand);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="grid grid-cols-9 w-300  mx-auto overflow-x-hidden ">
      <Cateogery
        search={search}
        setsearch={setsearch}
        cateogery_check={cateogery_check}
        setcateogery_check={setcateogery_check}
        brand={brand}
        setbrand={setbrand}
        price_range={price_range}
        setprice_range={setprice_range}
        handleCategory={handleCategory}
        handleBrand={handleBrand}
      />
      <div className="  col-span-1 sm:col-span-2 lg:col-span-5  p-10 border-l border-l-gray-300  pt-15">
        {Data.length > 0 ? (
          <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5  lg:gap-20">
            {filterData.map((item, idx) => {
              return (
                <div
                  className=" shadow-lg flex justify-between flex-col gap-2 items-center hover:scale-105 transition-all cursor-pointer  hover:shadow-gray-500 w-50 rounded-3xl"
                  key={idx}
                >
                  <img src={item.images} alt="" className="bg-cover w-30 " />
                  <p className="text-center font-bold">{item.title}</p>
                  <p className="text-center font-bold">{item.brand}</p>
                  <p className="text-center font-bold">${item.price}</p>
                  <button className="flex items-center bg-red-500 text-white rounded-md  hover:scale-105 mb-2 cursor-pointer font-semibold py-2 px-3 capitalize ">
                    <FiShoppingCart className=" mr-3 text-xl " />
                    <h1 className="text-sm">add to cart</h1>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <video
              src={"src/assets/video/loading-4.mp4"}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "300px" }}
            ></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;

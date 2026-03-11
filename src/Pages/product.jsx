import Cateogery from "../Components/Cateogery";
import { useEffect, useState } from "react";
import { useDataContext } from "../ContextApi/ContextApi";
import Pagination from "../Components/Pagination";
import ProductCard from "../Components/ProductCard";

const Product = () => {
  const { Data, fetchData } = useDataContext();
  const [search, setsearch] = useState("");
  const [cateogery_check, setcateogery_check] = useState("all");
  const [brand, setbrand] = useState("all");
  const [price_range, setprice_range] = useState([0, 5000]);
  const [page, setpage] = useState(1);

  const handlePage = (currentpage) => {
    setpage(currentpage);
  };

  const handleCategory = (e) => {
    setcateogery_check(e.target.value);
    setpage(1);
  };

  const handleBrand = (e) => {
    setbrand(e.target.value);
    setpage(1);
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

  const dynamic = Math.ceil(filterData.length / 9);

  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
    return () => {};
  }, []);

  return (
    <>
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
              {filterData.slice(page * 9 - 9, page * 9).map((item, idx) => {
                return <ProductCard item={item} idx={idx} />;
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
      <div className="w-full p-5">
        <Pagination
          page={page}
          handlePage={handlePage}
          dynamic={dynamic}
          setpage={setpage}
        />
      </div>
    </>
  );
};

export default Product;

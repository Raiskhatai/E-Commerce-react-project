import Cateogery from "../Components/Cateogery";
import { useEffect, useState } from "react";
import { useDataContext } from "../ContextApi/ContextApi";
import Pagination from "../Components/Pagination";
import ProductCard from "../Components/ProductCard";
import MobileFilter from "../Components/MobileFilter";
import loadingvid from "../assets/video/loading-2.mp4";

const Product = () => {
  const { Data, fetchData } = useDataContext();
  const [search, setsearch] = useState("");
  const [cateogery_check, setcateogery_check] = useState("all");
  const [brand, setbrand] = useState("all");
  const [price_range, setprice_range] = useState([0, 5000]);
  const [page, setpage] = useState(1);
  const [openFilter, setopenFilter] = useState(false);

  const handlePage = (currentpage) => {
    setpage(currentpage);
    window.scrollTo(0, 0);
  };

  const handleCategory = (e) => {
    setcateogery_check(e.target.value);
    setpage(1);
    setopenFilter(false);
    window.scrollTo(0, 0);
  };

  const handleBrand = (e) => {
    setbrand(e.target.value);
    setpage(1);
    setopenFilter(false);
    window.scrollTo(0, 0);
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
      <div className="grid md:grid-cols-3 grid-cols-1  md:px-15 lg:px-35  mx-auto overflow-x-hidden ">
        <MobileFilter
          openFilter={openFilter}
          setopenFilter={setopenFilter}
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
        <div className=" p-3 mx-auto md:border-l border-none  md:col-span-2 col-span-1 border-l-gray-300 gap-10  pt-15">
          {filterData.length > 0 ? (
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3    ">
              {filterData.slice(page * 9 - 9, page * 9).map((item, idx) => {
                return <ProductCard item={item} idx={idx} key={idx} />;
              })}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <video
                src={loadingvid}
                autoPlay
                muted
                loop
                // playsInline
                style={{ width: "600px" }}
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

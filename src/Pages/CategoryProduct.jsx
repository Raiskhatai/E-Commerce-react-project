import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetOption from "../Components/ProductListView";
import loading2 from "../assets/video/loading-2.mp4";
import { IoIosArrowBack } from "react-icons/io";
import ProductListView from "../Components/ProductListView";

const CategoryProduct = () => {
  let param = useParams();
  const [SearchData, setSearchData] = useState([]);

  const getFIlterData = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products/category/${param.category}`,
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFIlterData();
    return () => {};
  }, []);

  const nevigate=useNavigate()

  return (
    <div className="">
      {SearchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button onClick={()=> nevigate("/")} className="flex items-center bg-gray-900 text-l capitalize w-fit px-5 py-2 rounded-xl gap-1 cursor-pointer text-white  ">
            <IoIosArrowBack /> <span>back</span>
          </button>
          {SearchData.map((item, idx) => {
            return <ProductListView product={item} key={idx} />;
          })}
        </div>
      ) : (
        <div className="">
          <video
            src={loading2}
            className="w-130 mx-auto "
            autoPlay
            muted
            loop
          ></video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;

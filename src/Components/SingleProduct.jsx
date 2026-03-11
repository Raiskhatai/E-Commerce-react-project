import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "./Breadcrums";
import Cateogery from "./Cateogery";
import { FaCartShopping } from "react-icons/fa6";

const SingleProduct = () => {
  const param = useParams();
  const [singleitem, setsingleitem] = useState();

  const getsingleproduct = async () => {
    try {
      let val = await axios.get(`https://dummyjson.com/products/${param.id}`);
      let finalval = val.data;
      setsingleitem(finalval);
    } catch (err) {
      console.log("this is the error :", err);
    }
  };

  useEffect(() => {
    getsingleproduct();
    return () => {};
  }, []);
  console.log(singleitem);

  const originalPrice = singleitem
    ? Math.floor(
        singleitem.price +
          (singleitem.discountPercentage * singleitem.price) / 100,
      )
    : 0;
  return (
    <>
      {singleitem ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleitem.title} />
          <div className="max-w-6xl mx-auto md:6 grid grid-cols-2 gap-10">
            <div className="w-full">
              <img
                src={singleitem.images}
                alt={singleitem.title}
                className="rounded-2xl object-cover  w-100 h-100 "
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-700">
                {singleitem.title}
              </h1>
              <div className="text-gray-700">
                {" "}
                {singleitem.brand?.toUpperCase()}
                {singleitem.category?.toUpperCase()}
                <p className="text-red-500 text-xl font-bold my-5">
                  ${singleitem.price}{" "}
                  <span className=" line-through text-black ">
                    ${originalPrice}
                  </span>
                  <span className="bg-red-500 text-white ml-3 px-5 rounded-xl cursor-pointer">
                    {Math.floor(singleitem.discountPercentage)}% Discount
                  </span>
                </p>
                <p>{singleitem.description}</p>
                <div className="flex items-center gap-4 ">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-gray-700 capitalize "
                  >
                    {" "}
                    quantity :{" "}
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-20 pl-2 rounded-lg px-3 py-1"
                    value="1"
                  />
                </div>
                <div className=" flex gap-4 mt-4 ">
                  <button className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md">
                    <FaCartShopping className="w-6 h-6" />
                    Add to Cart
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <video
            src={
              "https://cdnl.iconscout.com/lottie/premium/preview-watermark/loading-animation-gif-download-10481160.mp4"
            }
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "300px" }}
            className="
            w-100 h-100 mx-auto
            "
          ></video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

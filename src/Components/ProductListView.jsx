import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartValue } from "../ContextApi/CartApi";

const ProductListView = ({ product }) => {
  console.log(product);
  const nevigate = useNavigate();

  const { cartIncrease } = useCartValue();

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <div>
      <div className="bg-gray-200 flex gap-5 p-5 mt-5 items-center ">
        <img
          onClick={() => nevigate(`/product/${product.id}`)}
          src={product.images}
          // width={180}
          className="bg-white cursor-pointer w-30 h-30 md:w-60 md:h-60 "
          alt=""
        />
        <div className="flex flex-col justify-between  gap-2">
          <h1 className="font-bold text-l md:text-xl text-lg line-clamp-3 sm:w-full w-55 ">{product.description}</h1>
          <p className="font-bold md:text-2xl text-sm ">$
            <span className="text-3xl md:text-4xl">{product.price}</span>{" "}
            <span className="text-[14px] ">
              ({product.discountPercentage}% off)
            </span>
          </p>
          <div className="">
            <p className="text-sm md:text-[14px]">{product.shippingInformation}</p>
            <p className="text-sm md:text-[14px]">{product.returnPolicy}</p>
          </div>
          <button
            onClick={() => cartIncrease(product)}
            className="w-fit bg-red-500 text-white px-5 py-1 font-semibold rounded-lg cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;

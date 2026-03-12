import React, { use } from "react";
import { useCartValue } from "../ContextApi/CartApi";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { CartCounter } = useCartValue();
  console.log(CartCounter);
  return (
    <>
      {CartCounter.length > 0 ? (
        <div className="p-10 w-full">
          <div className=" w-full">
            <h1 className="px-15 text-xl font-semibold capitalize ">
              my cart ({CartCounter.length})
            </h1>
            <div className="">
              {CartCounter.map((item, idx) => {
                return (
                  <div className="bg-gray-200 rounded-xl w-full h-25 flex justify-between p-3 items-center mt-5 ">
                    <div className="h-25 w-25 flex  justify-between p-4 gap-3 ">
                      <img
                        src={item.images}
                        className="w-full object-cover bg-cover bg-no-repeat h-full bg-center bg-white   "
                        alt=""
                      />
                      <div>
                        <h1 className="w-55 text-l font-semibold line-clamp-1">
                          {item.title}
                        </h1>
                        <h1 className="w-55 text-l font-semibold line-clamp-1">
                          {item.brand}
                        </h1>
                        <h1 className="font-bold text-l text-red-500">
                          ${item.price}
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center items-center font-semibold text-l bg-red-500 text-white px-3 py-1 gap-2 cursor-pointer  ">
                      <span>+</span> <span>1</span> <span>-</span>{" "}
                    </div>
                    <div className="text-red-500 font-bolder text-2xl mr-15 cursor-pointer ">
                      <FaRegTrashAlt />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <div className="bg-gray-200 p-5  ">
              <h1 className="font-bold text-xl mb-5">Delivery Info</h1>
              <div className="flex flex-col capitalize ">
                <label htmlFor="" className="font-semibold mt-3 mb-2">
                  full name
                </label>
                <input
                  type="text"
                  className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                  placeholder="enter value"
                />
              </div>

              <div className="flex flex-col capitalize ">
                <label htmlFor="" className="font-semibold mt-3 mb-2">
                  address
                </label>
                <input
                  type="text"
                  className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                  placeholder="enter your address"
                />
              </div>

              <div className="flex flex-row mt-3 mb-2  justify-between items-center  capitalize ">
                <div className=" ">
                  <label htmlFor="" className="font-semibold mt-3 mb-2">
                    address
                  </label>
                  <input
                    type="text"
                    className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                    placeholder="enter your address"
                  />
                </div>
                <div className=" ">
                  <label htmlFor="" className="font-semibold mt-3 mb-2">
                    address
                  </label>
                  <input
                    type="text"
                    className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                    placeholder="enter your address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">cart is empty</div>
      )}
    </>
  );
};

export default Cart;

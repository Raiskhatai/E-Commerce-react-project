import React, { use } from "react";
import { useCartValue } from "../ContextApi/CartApi";
import { FaBookMedical, FaRegTrashAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, useNavigation } from "react-router-dom";

const Cart = ({ location, getLocation }) => {
  const { CartCounter, updateQuantity, deleteItem } = useCartValue();
  console.log(CartCounter);

  const total = CartCounter.reduce((a, v) => {
    return a + Math.floor(v.price);
  }, 0);

  const { user } = useUser();

  const navigate = useNavigate();

  return (
    <>
      {CartCounter.length > 0 ? (
        <div className="px-25 py-7 w-full">
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
                          ${Math.floor(item.price)}
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center items-center font-semibold text-l bg-red-500 text-white px-3 py-1 gap-2 cursor-pointer  ">
                      <span
                        onClick={() =>
                          updateQuantity(CartCounter, item.id, "decrease")
                        }
                      >
                        -
                      </span>{" "}
                      <span>{item?.quantity}</span>{" "}
                      <span
                        onClick={() => {
                          updateQuantity(CartCounter, item.id, "increase");
                        }}
                      >
                        +
                      </span>{" "}
                    </div>
                    <div
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                      className="text-red-500 hover:bg-white p-3 rounded-full font-bolder text-2xl mr-15 cursor-pointer "
                    >
                      <FaRegTrashAlt />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex gap-10 ">
            <div className="bg-gray-200 p-5  rounded-2xl ">
              <h1 className="font-bold text-xl mb-5">Delivery Info</h1>
              <div className="flex flex-col capitalize ">
                <label htmlFor="" className="font-semibold mt-3 mb-2">
                  full name
                </label>
                <input
                  type="text"
                  className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                  placeholder="enter value"
                  value={user?.firstName}
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
                  value={location?.county}
                />
              </div>

              <div className="flex flex-row mt-3 mb-2 gap-5 justify-between items-center  capitalize ">
                <div className=" flex flex-col ">
                  <label htmlFor="" className="font-semibold mt-3 mb-2">
                    state
                  </label>
                  <input
                    type="text"
                    className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                    placeholder="enter your state"
                    value={location?.state}
                  />
                </div>
                <div className=" flex flex-col ">
                  <label htmlFor="" className="font-semibold mt-3 mb-2">
                    postCode
                  </label>
                  <input
                    type="text"
                    className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                    placeholder="enter your postCode"
                    value={location?.postcode}
                  />
                </div>
              </div>

              <div className="flex flex-row mt-3 mb-2  justify-between items-center  capitalize ">
                <div className=" flex flex-col ">
                  <label htmlFor="" className="font-semibold mt-3 mb-2">
                    country
                  </label>
                  <input
                    type="text"
                    className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                    placeholder="enter your country"
                    value={location?.country}
                  />
                </div>
                <div className=" flex flex-col ">
                  <label htmlFor="" className="font-semibold mt-3 mb-2">
                    phone no
                  </label>
                  <input
                    type="text"
                    className="bg-white border placeholder:capitalize p-1 border-gray-400 px-2 "
                    placeholder="enter your number"
                  />
                </div>
              </div>
              <button className="bg-red-500 text-white p-1.5 rounded-xl font-medium cursor-pointer capitalize my-5 px-3  ">
                submit
              </button>
              <div className="mx-auto w-fit">
                <h1>-------------OR-----------</h1>
                <button
                  onClick={() => getLocation}
                  className="bg-red-500 text-white p-1.5 rounded-xl font-medium cursor-pointer capitalize my-2 w-fit px-3  text-center mx-15  "
                >
                  detect location
                </button>
              </div>
            </div>
            <div className=" shadow-2xl shadow-gray-500 rounded-2xl w-full h-fit p-5 ">
              <h1
                className="
            font-bold capitalize text-xl"
              >
                bill details
              </h1>
              <div className="flex my-5 flex-col gap-2 ">
                <div className="flex justify-between w-full ">
                  <h1 className="flex gap-2 items-center capitalize">
                    <FaBookMedical /> <span>items total</span>
                  </h1>
                  <h1>${Math.floor(total)}</h1>
                </div>

                <div className="flex justify-between w-full ">
                  <h1 className="flex gap-2 items-center capitalize">
                    <TbTruckDelivery />
                    <span>delivery charge</span>
                  </h1>
                  <h1>
                    <span className=" line-through ">$25</span>{" "}
                    <span className="uppercase text-red-500  ">free</span>
                  </h1>
                </div>

                <div className="flex justify-between w-full ">
                  <h1 className="flex gap-2 items-center capitalize">
                    <GiShoppingBag />
                    <span>hanling charge</span>
                  </h1>
                  <h1 className="text-red-500">$5</h1>
                </div>
                <hr className="text-gray-300" />

                <div className="">
                  <h1 className="font-bold flex justify-between capitalize text-xl">
                    grand total <span>${total + 5}</span>{" "}
                  </h1>
                </div>
                <div className="my-8">
                  <h1 className="capitalize">apply promo code</h1>
                  <div className="mt-3 gap-3 flex justify-between">
                    <input
                      type="text"
                      placeholder="enter code"
                      className="border p-2 capitalize w-full border-gray-300"
                    />
                    <button className="border-2 border-gray-300 px-2 cursor-pointer rounded-l">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="bg-red-500  text-white p-2 font-semibold cursor-pointer rounded-xl ">
                  Proceed to Check
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 flex flex-col items-center justify-center">
          <h1 className="text-2xl capitalize font-bold ">
            your cart is <span className="text-red-500">empty</span>
          </h1>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/11329/11329060.png"}
            alt=""
            width={420}
          />
          <button
            className="bg-red-500 px-5 py-2 text-white text-xl capitalize font-semibold rounded-xl cursor-pointer"
            onClick={() => navigate("/product")}
          >
            continue shopping
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;

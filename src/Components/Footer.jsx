import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaRegCopyright,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  let date = new Date();
  date = date.getFullYear();
  return (
    <div className="bg-gray-900 py-10 px-15 h-fit text-white text-center md:text-left ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 ">
        <div className="flex flex-col justify-between gap-3 text-sm items-center md:items-start">
          <h1 className="text-red-600 text-2xl font-semibold capitalize ">
            rais
          </h1>
          <p className="capitalize">
            make your world beautiful with best products.
          </p>
          <div className=" ">
            <p>123 beauty products,style city,NY 1001</p>
            <p>Email:raiskhatai@gmail.com</p>
            <p>phone:{"{7230807512}"}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 text-sm items-center md:items-start">
          <h1 className="text-white text-2xl font-semibold capitalize mb-5 ">
            cutomer service
          </h1>
          <div className=" text-sm flex flex-col gap-2">
            <p className="capitalize">Contact us</p>
            <p>Shipping & returns</p>
            <p>FAQs</p>
            <p>Order tracking</p>
            <p>Size guide</p>
          </div>
        </div>

        <div className="md:block flex flex-col justify-between gap-3 text-sm items-center md:items-start">
          <h1 className="text-white text-2xl font-semibold capitalize mb-5 ">
            Follow us
          </h1>
          <div className=" text-xl flex  gap-5">
            <FaInstagram />
            <FaFacebook />
            <FaSquareXTwitter />
            <FaPinterest />
          </div>
        </div>

        <div className=" overflow-hidden flex flex-col justify-between gap-3 text-sm items-center md:items-start">
          <h1 className="text-white text-2xl font-semibold  mb-5 ">
            Stay in the Loop
          </h1>
          <div className=" text-sm flex flex-col gap-5 ">
            <p className="capitalize">
              Follow to get special offers,give aways,and more
            </p>
          </div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex "
          >
            <input
              type="text"
              placeholder="your email address"
              className="px-5 py-2 rounded-l-sm outline-0 bg-white text-black placeholder:to-black w-42"
            />
            <button className="bg-red-500 px-5 py-2 w-fit rounded-r-sm cursor-pointer">
              Follow
            </button>
          </form>
        </div>
      </div>
      <div className="flex border-t-2 border-white mt-5 pt-5 justify-center gap-2 items-center capitalize">
        <FaRegCopyright /> {date}
        <span className="text-red-500 font-bold text-xl">rais</span> all rights
        reserved
      </div>
    </div>
  );
};

export default Footer;

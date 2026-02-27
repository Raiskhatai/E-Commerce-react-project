import { PinIcon } from "lucide-react";
import React from "react";
import { FaAddressBook, FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { MdAddReaction, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" px-15 bg-linear-to-r from-[#0a0c41] via-[#3b3164] to-[#0d023a] -z-50 w-full h-136 flex items-center justify-center p-15">
      <div className="w-202  h-full bg-black/30 rounded-2xl p-15 relative text-white  ">
        <h1 className="text-center font-bold text-2xl">
          Get in touch with <span className="text-red-500">Pratham</span>
        </h1>
        <div className="flex gap-10">
          <div className="w-1/2 p-2">
            <h1 className="font-bold text-xl capitalize my-2">contact info</h1>
            <p className="text-[13px] text-white/40 ">
              have a question or need support ? were here to help you with any
              item{" "}
            </p>
            <div className="mt-5 flex flex-col gap-2 ">
              <p className="text-red-500 flex gap-2">
                {" "}
                <FaMapPin />
                <span className="text-white text-sm capitalize">
                  address : rajsthan,jodhpur
                </span>
              </p>
              <p className="flex gap-2">
                {" "}
                <MdEmail />{" "}
                <span className="text-white text-sm capitalize">
                  {" "}
                  email : raiskhatai@gmail.com
                </span>{" "}
              </p>
              <p className="text-red-500 flex gap-2">
                {" "}
                <FaPhoneAlt />
                <span className="text-white text-sm capitalize">
                  {" "}
                  phone : 723080
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-3 text-[13px] w-1/2 ">
            <div className="">
              <h1>your name</h1>
              <input
                type="text"
                className="bg-white mt-1 rounded-l w-full px-2 text-black"
                placeholder=""
              />
            </div>

            <div className="">
              <h1>E-mail address</h1>
              <input
                type="text"
                className="bg-white mt-1 rounded-l w-full px-2 text-black"
                placeholder=""
              />
            </div>

            <div className="">
              <h1>your message</h1>
              <textarea name="" id="" className="bg-white/10 mt-1 rounded-l w-full px-2 text-white placeholder:texgt-white pt-2 h-25 resize-none"
                placeholder="Enter your name" ></textarea>
            </div>
            <button className="bg-red-500 px-3 font-bold hover:bg-black cursor-pointer flex items-center justify-center py-2 capitalize rounded-2xl">send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

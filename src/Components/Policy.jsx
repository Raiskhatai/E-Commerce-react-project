import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdLoop, MdOutlineLocalShipping } from "react-icons/md";

const Policy = () => {
  const policyBar = [
    {
      icon: <MdOutlineLocalShipping />,
      policyHeading: "free shipping",
      policyPara: "On order over 100$",
    },
    {
      icon: <IoLockClosedOutline />,
      policyHeading: "secure payment",
      policyPara: "100% protected payment",
    },
    {
      icon: <MdLoop />,
      policyHeading: "easy return",
      policyPara: "30-day return policy",
    },
    {
      icon: <FaRegClock />,
      policyHeading: "24/7 support",
      policyPara: "Dedicated customer service",
    },
  ];
  return (
    <div className="w-full gap-y-8 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 pt-5 md:gap-x-8">
      {policyBar.map((item,idx) => {
        return (
          <div className="flex justify-center items-center gap-4" key={idx}>
            <div className="text-4xl">{item.icon}</div>
            <div className="">
              <h1 className="font-semibold capitalize ">
                {item.policyHeading}
              </h1>
              <h1 className="text-gray-700 text-sm">{item.policyPara}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Policy;

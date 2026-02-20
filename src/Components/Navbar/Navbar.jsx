import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ location, getLocation }) => {
  const [DropDown, setDropDown] = useState(false);
  const toggle = () => {
    setDropDown(!DropDown);
  };
  return (
    <div className="bg-white p-3 shadow-2xl capitalize">
      <div className="max-w-6xl mx-auto font-semibold items-center flex justify-between ">
        <div className="navleft flex gap-7 items-center">
          {/* logo section  */}
          <Link to={"/"}>
            <h1 className="text-3xl">
              <span className="text-red-600">R</span>ais
            </h1>
          </Link>
          <div className="flex gap-2 items-center">
            <MapPin className="text-red-600" />
            {location ? (
              <div className="-space-y-2">
                <p>{location.state},</p>
                <p>{location.city}</p>
              </div>
            ) : (
              "Add Address"
            )}
            <FaCaretDown className="cursor-pointer" onClick={toggle} />
          </div>
          {DropDown && (
            <div className="w-60 h-max shadow-2xl bg-white fixed z-50 p-5 top-16 left-60 border-gray-100 rounded-2xl">
              <h1 className="flex text-red-500  font-semibold mb-4 text-xl  justify-between">
                change location{" "}
                <span className="cursor-pointer text-black">
                  <CgClose onClick={toggle} />
                </span>{" "}
              </h1>
              <h1
                className="bg-red-500 text-white p-2 rounded-2xl cursor-pointer 
               w-max  font-semibold text-xl hover:p-3 "
                onClick={() => getLocation()}
              >
                detect my location
              </h1>
            </div>
          )}
        </div>
        {/* menu section  */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center font-semibold text-xl">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all tranistion-all " : "text-black"}cursor-pointer`
              }
            >
              home
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all tranistion-all " : "text-black"}cursor-pointer`
              }
            >
              product
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all tranistion-all " : "text-black"}cursor-pointer`
              }
            >
              about
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all tranistion-all " : "text-black"}cursor-pointer`
              }
            >
              <li>contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className=" relative  ">
            <IoCartOutline className="h-7 w-7" />{" "}
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          <header>
            {/* Show the sign-in and sign-up buttons when the user is signed out */}
            <SignedOut>
              <SignInButton className="bg-red-500 font-semibold capitalize text-white cursor-pointer px-2 py-1 " />
              {/* <SignUpButton /> */}
            </SignedOut>
            {/* Show the user button when the user is signed in */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

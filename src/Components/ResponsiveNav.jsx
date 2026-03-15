import { FaUserCircle } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const ResponsiveNav = ({ openNav, setopenNav }) => {
  const { user } = useUser();
  return (
    <div>
      <div
        className={`${openNav ? "left-0" : "left-full"} h-screen fixed bottom-0 top-0 z-20 flex flex-col justify-between bg-white w-[75%] px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all `}
      >
        <div className="">
          <div
            className="flex justify-between items-center gap-3
            "
          >
            {user ? (
              <UserButton size={50} />
            ) : (
              <>
                <header className="flex gap-10">
                  {/* Show the sign-in and sign-up buttons when the user is signed out */}
                  <SignedOut>
                    <SignInButton size={50}>
                      <FaUserCircle />
                    </SignInButton>
                    {/* <SignUpButton /> */}
                  </SignedOut>
                  {/* Show the user button when the user is signed in */}
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <div className="">
                    <h1 className="text-xl font-semibold">
                      hello,{user ? user.firstName : "guess"}
                    </h1>
                    <h1 className="font-extralight">premium user</h1>
                  </div>
                </header>
              </>
            )}

            <RxCross2
              className="cursor-pointer text-2xl"
              onClick={() => setopenNav(!openNav)}
            />
          </div>
          <nav className="mt-12">
            <ul className="flex-col flex gap-7 font-semibold text-2xl ">
              <Link
                onClick={() => setopenNav(false)}
                to={"/"}
                className={`  cursor-pointer`}
              >
                home
              </Link>
              <Link
                onClick={() => setopenNav(false)}
                to={"/product"}
                className={`  cursor-pointer`}
              >
                product
              </Link>
              <Link
                onClick={() => setopenNav(false)}
                to={"/about"}
                className={`  cursor-pointer`}
              >
                about
              </Link>
              <Link
                onClick={() => setopenNav(false)}
                to={"/contact"}
                className={`  cursor-pointer`}
              >
                <li>contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;

import React from "react";

const bgImg =
  "https://images.unsplash.com/photo-1676570092589-a6c09ecbb373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHwwfDB8fHww";

const MidBgImg = () => {
  return (
    <div className=" bg-gray-100 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center bg-no-repeat h-137.5 md:h-150 bg-fixed  "
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className=" bg-black/50 w-full absolute h-full top-0 left-0 rounded-2xl flex flex-col  gap-5 p-15 items-center  justify-center inset-0 bg-opacity-50">
          <h1 className="text-white text-6xl capitalize text-center font-bold ">
            next-gen beauty productes at your fingertips
          </h1>
          <p className="text-white text-xl font-semibold text-center">
            Discover the latest beauty product with unbeatable price and free
            shipping on all orders
          </p>
          <button className="bg-red-500 text-white px-3.5 py-2 font-semibold cursor-pointer hover:scale-105 hover:bg-white hover:text-black transition-all rounded-2xl">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidBgImg;

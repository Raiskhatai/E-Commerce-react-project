import React, { useContext, useEffect } from "react";
import { Context } from "../ContextApi/ContextApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const { fetchData, Data } = useContext(Context);
  useEffect(() => {
    fetchData();
  }, []);

  const SampleNextArrow = (prop) => {
    const { onClick, style, className } = prop;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 200 }}
      >
        <AiOutlineArrowRight
          className="arrows"
          style={{
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
        />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick, style, className } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 100 }}
      >
        <AiOutlineArrowLeft
          className="arrows "
          style={{
            display: "block",
            borderRadius: "150px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to={"next"} />,
    prevArrow: <SamplePrevArrow to={"prev"} />,
  };

  return (
    <div className=" overflow-hidden ">
      <Slider {...settings}>
        {Data.slice(0, 7)?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="px-15 bg-linear-to-r from-[#c3ba06] via-[#efff8a] to-yellow-600 -z-50"
            >
              <div className="grid grid-cols-1 gap-14 sm:1 mb-18 md:mb-6 md:grid-cols-2 md:gap-15 md:justify-center h-130 md:items-center md:px-8">
                <div className="md:space-y-6 space-y-4 grid md:grid-cols-1 text-center mt-5">
                  <h3 className="text-red-900 font-semibold font-sans text-sm md:text-lg capitalize">
                    make your world beautifull with the best makeups in the
                    world
                  </h3>
                  <h1 className="md:text-6xl text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-125 text-sm md:text-xl line-clamp-3 text-gray-900 md:pr-7">
                    {item.description}
                  </p>
                  <button className="bg-red-500 max-w-fit mx-auto text-white px-3 py-2 rounded-md cursor-pointer md:mt-2 font-semibold hover:scale-105 hover:black hover:bg-black ">
                    show now
                  </button>
                </div>
                <div className="mx-auto ">
                  <img
                    src={item.images}
                    alt=""
                    className=" rounded-full w-70 md:w-110 hover:scale-105 transition-all shadow-xl shadow-red-700  "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

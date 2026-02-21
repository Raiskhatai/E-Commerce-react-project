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
      <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:200}}>
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
          className="arrows"
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
    autoplay: false,
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
              className=" w-96 bg-linear-to-r from-[#c3ba06] via-[#efff8a] to-yellow-600 -z-50"
            >
              <div className="flex gap-10 justify-center h-130 items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-900 font-semibold font-sans text-sm capitalize">
                    make your world beautifull with the best makeups in the
                    world
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-125 line-clamp-3 text-gray-900 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-linear-to-r from-green-300 to-blue-300 text-black px-3 py-2 rounded-md cursor-pointer mt-2 font-semibold">
                    show now
                  </button>
                </div>
                <div className="">
                  <img
                    src={item.images}
                    alt=""
                    className=" rounded-full w-120 hover:scale-105 transition-all shadow-2xl shadow-red-500  "
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

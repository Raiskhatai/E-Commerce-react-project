import React from "react";
import Carousel from "../Components/Carousel";
import Options from "../Components/Options";
import MidBgImg from "../Components/MidBgImg";
import Policy from "../Components/Policy";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <Options />
      <MidBgImg />
      <Policy />
    </div>
  );
};

export default Home;

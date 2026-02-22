import React from "react";
import AllProducts from "../Components/AllProducts";
import Cateogery from "../Components/Cateogery";

const Product = () => {
  return (
    <div className="grid grid-cols-4">
      <Cateogery />
      <AllProducts />
    </div>
  );
};

export default Product;

import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextApi = ({ children }) => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const val = await axios.get("https://dummyjson.com/products?limit=150");
      const productsData = val.data.products;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Context.Provider value={{ fetchData, Data, setData }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextApi;

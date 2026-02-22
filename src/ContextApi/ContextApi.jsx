import axios from "axios";
import React, { createContext, useContext, useState } from "react";

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

  // end-- data context

  let chooseCateogery = (data, val) => {
    return data.map((item) => item[`${val}`]);
  };

  const category = chooseCateogery(Data, "category");
  const pureCategory = [...new Set(category)];

  // end-- options

  return (
    <div>
      <Context.Provider value={{ fetchData, Data, setData, pureCategory }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export const useDataContext = () => useContext(Context);

export default ContextApi;

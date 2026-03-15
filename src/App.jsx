import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import AboutUs from "./Pages/aboutUs";
import Contact from "./Pages/contact";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/product";
import Cart from "./Pages/cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import SingleProduct from "./Components/SingleProduct";
import CategoryProduct from "./Pages/CategoryProduct";
import { useCartValue } from "./ContextApi/CartApi";

const App = () => {
  const [location, setlocation] = useState();
  const { CartCounter, setCartCounter } = useCartValue();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(async function (pos) {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const exectLocation = await axios.get(url);
        setlocation(exectLocation.data.address);
      } catch (error) {
        console.log(`lo bhai aa gyi error : ${error}`);
      }

      console.log(url);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  // load cart from local storage on initial rendor
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartCounter(JSON.parse(storedCart));
    }
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(CartCounter));

    return () => {};
  }, [CartCounter]);

  return (
    <div>
      <Navbar location={location} getLocation={getLocation} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart location={location} getLocation={getLocation} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/home";
import AboutUs from "./Components/Pages/aboutUs";
import Contact from "./Components/Pages/contact";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Pages/product";
import Cart from "./Components/Pages/cart";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [location, setlocation] = useState();
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
    // getLocation();
  }, []);

  return (
    <div>
      <Navbar location={location} getLocation={getLocation} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;

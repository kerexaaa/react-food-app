import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [promo, setPromo] = useState(0.1);
  return (
    <>
      {showPopup ? (
        <LoginPopup setShowPopup={setShowPopup}></LoginPopup>
      ) : (
        <></>
      )}
      <div className={`w-4/5 m-auto`}>
        <Navbar setShowPopup={setShowPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart promo={promo} setPromo={setPromo} />} />
          <Route path="/order" element={<PlaceOrder promo={promo}/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

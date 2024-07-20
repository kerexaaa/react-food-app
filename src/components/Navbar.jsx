import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowPopup }) => {
  const [activeMenu, setActiveMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  const navList = [
    {
      content: "home",
      link: "/",
    },
    {
      content: "menu",
      leads: "#menu",
    },
    {
      content: "mobile app",
      leads: "#mobile-app",
    },
    {
      content: "contact us",
      leads: "#contact-us",
    },
  ];
  return (
    <div className=" py-5 px-0 flex justify-between items-center ">
      <Link to="/">
        <img className="w-32  lg:w-40" src={assets.logo} alt="Logo" />
      </Link>
      <ul className=" hidden md:flex list-none md:gap-4 lg:gap-5 text-darkblue md:text-lg ">
        {navList.map((item, index) =>
          item?.link ? (
            <Link
              to="/"
              className={` capitalize cursor-pointer ${
                activeMenu === item.content
                  ? "pb-0.5 border-b-2 border-solid border-darkblue"
                  : ""
              } `}
              key={index}
              onClick={() => setActiveMenu(item.content)}
            >
              {item.content}
            </Link>
          ) : (
            <a
              href={item?.leads}
              className={` capitalize cursor-pointer ${
                activeMenu === item.content
                  ? "pb-0.5 border-b-2 border-solid border-darkblue"
                  : ""
              } `}
              key={index}
              onClick={() => setActiveMenu(item.content)}
            >
              {item.content}
            </a>
          )
        )}
      </ul>
      <div className=" flex items-center gap-5 md:gap-5 lg:gap-10 ">
        <img src={assets.search_icon} className="w-5 lg:w-7" alt="Search" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} className="w-5 lg:w-7" alt="Basket" />
            <div
              className={
                getTotalCartAmount()
                  ? "absolute min-w-2.5 min-h-2.5 bg-tomato rounded-lg -top-2 -right-2 block"
                  : "hidden"
              }
            ></div>
          </Link>
        </div>
        <button
          onClick={() => setShowPopup((prev) => (prev = !prev))}
          className=" capitalize hover:bg-white-100 transition bg-transparent text-darkblue border border-solid border-tomato py-2 px-4 text-sm md:text-[1rem] md:py-2 md:px-4 lg:py-3 lg:px-7 rounded-full"
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

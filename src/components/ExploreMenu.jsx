import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl text-gray-200">Explore our Menu</h1>
      <p className="max-w-[100%] text-sm lg:text-[1rem] lg:max-w-[80%] text-gray-50">
        Choose from diverse menu featuring a delectable array of dishes crafted
        with the finest ingridients and culinary expertise. Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div
        className="flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-auto"
        id="menu"
      >
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="flex-shrink-0"
          >
            <img
              src={item.menu_image}
              alt={`${item.menu_name}`}
              className={`w-[7.5dvw] min-w-20 cursor-pointer rounded-full transition-all ${
                category === item.menu_name
                  ? "border-tomato border-4 border-solid p-0.5"
                  : ""
              } `}
            />
            <p className="mt-2.5 text-gray-100 text-[max(1.4dvw,16px)] cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-2.5 mx-0 h-0.5 bg-white-50 border-none" />
    </div>
  );
};

export default ExploreMenu;

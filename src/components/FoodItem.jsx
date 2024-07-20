import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-2xl shadow-md transition-all animate-fade-in">
      <div className="relative">
        <img
          draggable={false}
          className="w-full rounded-t-2xl"
          src={image}
          alt={name}
        />
        {!cartItems[id] ? (
          <img
            className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-full bg-[#fff]">
            <img
              className="w-7 cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-7 cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl">{name}</p>
          <img
            className="w-16"
            draggable={false}
            src={assets.rating_starts}
            alt=""
          />
        </div>
        <p className="text-gray-300 text-xs">{description}</p>
        <p className="text-tomato text-xl my-2 mx-0">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

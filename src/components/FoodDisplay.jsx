import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-7" id="menu">
      <h2 className="text-2xl text-[max(2dvw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-7 gap-7 ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                ></FoodItem>
              );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

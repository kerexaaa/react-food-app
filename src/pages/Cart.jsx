import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = ({promo, setPromo}) => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    addToCart,
    deleteFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const promoRef = useRef();

  const handlePromoActivate = () => {
    if (promoRef.current.value == getTotalCartAmount()) {
      setPromo(0.01);
    }
    promoRef.current.value = null;
    return;
  };

  const navigate = useNavigate();

  const handleChangeQantity = (e, id, prevValue) => {
    const currentValue = parseInt(e.target.value, 10);

    if (currentValue > prevValue) {
      addToCart(id);
    } else if (currentValue < prevValue) {
      removeFromCart(id);
    } else if (currentValue === 0) {
      deleteFromCart(id);
    }
  };

  return (
    <div className="mt-24">
      <div>
        <div className="grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-[grey] text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          {
            if (cartItems[item._id] > 0) {
              const prevValue = cartItems[item._id];
              return (
                <div key={index}>
                  {" "}
                  <div className="grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-[max(1vw,12px)] my-3 mx-0 text-[#000]">
                    <img src={item.image} draggable={false} className="w-16" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <input
                      onChange={(e) =>
                        handleChangeQantity(e, item._id, prevValue)
                      }
                      value={cartItems[item._id]}
                      type="number"
                      className="w-12 border-b outline-none pl-1"
                    />
                    <p>${cartItems[item._id] * item.price}</p>
                    <img
                      onClick={() => deleteFromCart(item._id)}
                      src={assets.cross_icon}
                      className="size-3 cursor-pointer"
                      draggable={false}
                    />
                  </div>
                  <hr className="h-0.5 bg-white-50 border-none" />
                </div>
              );
            }
          }
        })}
      </div>
      <div className="flex-col-reverse md:flex-row mt-20 flex justify-between gap-[max(12dvw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Total:</h2>
          <div className="[&>div]:flex [&>div]:justify-between [&>div]:text-[#555] [&>hr]:my-3 [&>hr]:mx-0">
            <div>
              <p>Subtotal:</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div>
              <p>Delivery Fee:</p>
              <p>{getTotalCartAmount() ? promo * 100 : "0"}%</p>
            </div>
            <hr />
            <div>
              <b>Total:</b>
              <b>${getTotalCartAmount() + getTotalCartAmount() * promo}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="border-none text-[#fff] bg-tomato w-[max(15dvw,200px)] py-3 px-0 rounded-md cursor-pointer"
          >
            Proceed To Checkout
          </button>
        </div>
        <div className="flex-1 justify-start md:justify-normal">
          <div>
            <p className="text-[#555]">
              If you have a promocode, enter it here
            </p>
            <div className="mt-3 flex justify-between items-center bg-white-300 rounded-md">
              <input
                ref={promoRef}
                className="bg-transparent border-none outline-none pl-3"
                type="text"
                placeholder="Promo code"
              />
              <button
                onClick={() => handlePromoActivate()}
                className="w-[max(10dvw,150px)] py-3 px-1.5 bg-[#000] border-none text-[#fff] rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = ({ promo }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-12   mt-24">
      <div className="w-full max-w-[max(30%,500px)] [&>input]:outline-tomato [&>input]:rounded-md [&>input]:mb-4 [&>input]:w-full [&>input]:p-3 [&>input]:border [&>input]:border-solid [&>input]:border-gray-600">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="[&>input]:outline-tomato flex gap-3 [&>input]:rounded-md [&>input]:mb-4 [&>input]:w-full [&>input]:p-3 [&>input]:border [&>input]:border-solid [&>input]:border-gray-600">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Street" />
        <div className="[&>input]:outline-tomato flex gap-3 [&>input]:rounded-md [&>input]:mb-4 [&>input]:w-full [&>input]:p-3 [&>input]:border [&>input]:border-solid [&>input]:border-gray-600">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="[&>input]:outline-tomato flex gap-3 [&>input]:rounded-md [&>input]:mb-4 [&>input]:w-full [&>input]:p-3 [&>input]:border [&>input]:border-solid [&>input]:border-gray-600">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="phone" placeholder="Phone" />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
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
          <button className="border-none text-[#fff] bg-tomato w-[max(15dvw,200px)] py-3 px-0 rounded-md cursor-pointer mt-3">
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowPopup }) => {
  const [currentSign, setCurrentSign] = useState("Sign Up");

  return (
    <div className="fixed z-10 w-full h-full bg-black-rgba-100 grid">
      <form className="w-[max(23dvw,330px)] text-gray-50 bg-[#fff] flex place-self-center flex-col gap-6 p-6 rounded-lg text-sm animate-fade-in-short">
        <div className="flex justify-between items-center text-[#000] text-2xl font-semibold">
          <h2>{currentSign}</h2>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowPopup((prev) => (prev = !prev))}
            src={assets.cross_icon}
            alt="Close Icon"
          />
        </div>
        <div className="flex flex-col gap-5 [&>input]:border-b-2 [&>input]:border-gray-500 [&>input]:outline-none [&>input]:p-3">
          {currentSign === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="p-3 border-none rounded-md text-[#fff] bg-tomato text-sm cursor-pointer">
          {currentSign === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currentSign === "Sign Up" ? (
          <div className="flex gap-2 items-start">
            <input className="mt-[5px]" id="agree" name="agree" type="checkbox" required />
            <label htmlFor="agree">By continuing, I agree to the Terms of Use & Privacy Policy.</label>
          </div>
        ) : (
          <></>
        )}
        {currentSign === "Sign Up" ? (
          <p
            onClick={() => setCurrentSign("Login")}
            className="cursor-pointer text-tomato w-fit"
          >
            I have an account
          </p>
        ) : (
          <p
            onClick={() => setCurrentSign("Sign Up")}
            className="cursor-pointer text-tomato w-fit"
          >
            I don't have an account
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

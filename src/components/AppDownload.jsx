import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="m-auto mt-24 text-[max(3dvw,20px)] leading-16 text-center" id="mobile-app">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[max(2dvw,10px)] mt-10 [&>img]:w-[max(30dvw,120px)] [&>img]:max-w-[180px] [&>img]:transition-all [&>img]:cursor-pointer">
        <img className="hover:scale-110 md:hover:scale-125" src={assets.play_store} alt="Play Store Logo" />
        <img className="hover:scale-110 md:hover:scale-125" src={assets.app_store} alt="App Store Logo" />
      </div>
    </div>
  );
};

export default AppDownload;

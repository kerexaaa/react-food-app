import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-white-200 bg-gray-400 flex flex-col items-center gap-5 py-5 px-[8dvw] pt-20 mt-20">
      <div className="w-full flex flex-col md:grid md:grid-cols-[2fr,1fr,1fr] gap-9 md:gap-20">
        <div className="flex flex-col items-start gap-5">
          <img className="w-32  lg:w-40" src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ab
            maiores sit voluptatum praesentium culpa obcaecati magnam in
            quibusdam itaque.
          </p>
          <div className="flex [&>img]:w-10 [&>img]:mr-4 [&>img]:cursor-pointer">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="uppercase font-semibold text-2xl text-[#fff]">company</h2>
          <ul className="[&>li]:mb-2.5 [&>li]:cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5" id="contact-us">
          <h2 className="uppercase font-semibold  text-2xl text-[#fff]">get in touch</h2>
          <ul className="[&>li]:mb-2.5 [&>li]:cursor-pointer">
            <li>+888-212-342-7892</li>
            <li>contact@kerexaaa.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 my-5 mx-0 bg-gray-100 border-none"/>
      <p className="text-center md:text-start">Copyright 2024 &copy; Tomato.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

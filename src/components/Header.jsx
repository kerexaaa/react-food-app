import React from "react";

const Header = () => {
  return (
    <div className="h-[34dvw] my-7 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
      <div className="absolute flex flex-col items-start gap-[1.5dvw] max-w-[65%] md:max-w-[50%] xl:max-w-[50%] bottom-[10%] left-[6dvw] animate-fade-in">
        <h2 className="text-[#fff] text-[max(4.5dvw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-[#fff] text-[1dvw] hidden md:block">
          Choose from diverse menu featuring a delectable array of dishes
          crafted with the finest ingridients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <a href="#menu">
          <button className="capitalize text-gray-100 font-normal py-[2dvw] px-[4dvw] md:py-[1dvw] md:px-[2.3dvw] bg-[#fff] text-[max(1vw,13px)] rounded-full">
            view menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;

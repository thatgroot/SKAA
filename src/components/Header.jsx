import React from "react";
import Btn from "./Btn";
import "./Styles.css";

const Header = () => {
  return (
    <div
      className="herosection  py-[6rem] text-[#fff] flex items-center justify-around md:flex-row flex-col"
      id="Home"
    >
      <div>
        <img
          src="/home/heroImage.svg"
          alt=""
          className=" md:w-[600px] w-auto"
        />
      </div>
      <div className="md:w-[670px] w-[96%] md:mx-0 mx-auto">
      <p className="md:text-[25px] text-[18px] font-semibold"> <span className=" text-[#33BC24]"> $KAA </span> - "KAA the Python" Meme Token on solana</p>
        <h2 className=" md:text-[80px] text-[30px] font-bold leading-[93px] text-[#FFFFFF]">
          <span className=" text-[#33BC24]"> KAA's </span> Crypto Comedy
        </h2>
        <p className=" md:text-[18px] text-[14px] leading-[30px]">
          In the heart of the jungle, Python Kaa had a grand dream: to launch
          "KAA Coin," the next big meme token. With the help of Mowgli, a
          mischievous bay, and Baloo, a wise old bear, they embarked on their
          venture. But Kaa's coding skills were as tangled as jungle vines,
          leading to hilarious glitches. Amidst chaos, they held a wild launch
          event. Despite mishaps, KAA Coin gained traction, making Kao the
          richest snake in the jungle. In the end, it wasn't about flawless
          tech, but about the comedy of errors that led to success. And so,
          KAA's Crypto Comedy became a legendary tale of friendship and
          financial folly in the jungle.
        </p>
        <Btn text={"BUY $KAA"} style={"my-[2rem]"} />
      </div>
    </div>
  );
};

export default Header;

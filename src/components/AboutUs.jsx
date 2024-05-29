import React from "react";
import "./Styles.css";

const AboutUs = () => {
  return (
    <div className="py-[4rem] ABOUTUSBG" id="aboutus">
      <div className=" my-[4rem]">
        <div className=" flex justify-center items-center gap-[0.5rem]">
        <img src="/home/token.svg" alt="" />
          <h2 className=" md:text-[56px] text-[30px] font-bold text-center ">
            ABOUT US
          </h2>
        </div>
        <img src="/home/bottom_border.svg" alt="" className="mx-auto " />
      </div>

      <div className="lg:w-[65%] md:w-[85%] w-[95%] md:h-[500px] h-auto  rounded-[14px] shadow-xl mx-auto md:p-[3rem] p-[1rem]  mainDiv md:my-0 my-[2rem] maindev flex justify-center flex-col items-center ">
        <p className="text-white font-Clash md:text-[26px] text-[14px]  md:leading-[46px] leading-[24px] py-[1rem] text-justify font-semibold ">
          "KAA's Crypto Comedy" In the heart of the jungle, PythonKaa had a
          grand dream: to launch "KAA Coin," the next bigmeme token. With the
          help of Mowgli, a mischievous boy, and Baloo, a wise old bear, they
          embarked on their venture. But Kaa's coding skills were as tangled as
          jungle veading to hilarious glitches. Amidst chaos, they held a wild
          launch event. Despite mishaps, KAA Coin gained traction, makingKaa the
          richest snake in the jungle. In the end, it wasn't about flawless
          tech, but about the comedy of errors that ledto success. And so, KAA's
          Crypto Comedy became alegendary tale of friendship and financial folly
          in the jungle.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

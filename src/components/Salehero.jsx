import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";

const Salehero = () => {
  return (
    <div className="py-[10rem] flex flex-wrap justify-around gap-[4rem]">
      {/* card 1 is here */}
      <div className=" md:w-[800px] w-[95%] mx-auto border bg-[#141414] border-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-400 rounded-[24px] h-[120px] flex justify-between p-4">
        <div className="">
          <p>Presale Ended</p>
        </div>
        <div className=" flex flex-col justify-between items-end">
          <button className=" rounded-[50px] border border-l-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-300 w-[85px] h-[35px] flex justify-center items-center shadow-xl bg-[#141414]">
            Success
          </button>
          <p className=" text-[#ADADAD] text-[14px]">
            Ended on 27 Jan 2024 22:00:00 UTC
          </p>
        </div>
      </div>
      {/* card 2 is here */}
      <div className=" md:w-[800px] w-[95%] mx-auto border bg-[#141414] border-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-400 rounded-[24px] h-[120px] flex justify-between p-4 flex-col">
        <div className=" flex justify-between text-[14px] md:w-[90%] w-[98%] mx-auto ">
          <div className=" flex md:gap-[1rem] gap-[0.3rem]">
            <p className="text-[#ADADAD]">55%</p>
            <p>Softcap</p>
          </div>
          <div>
            <p>Hardcap</p>
          </div>
        </div>
        <div className=" relative bg-[#6F9073] h-[24px] rounded-[50px] shadow-2xl my-auto md:w-[90%] w-[98%] mx-auto">
          <div className="relative bg-[#33BC24] h-[20px] rounded-[50px] shadow my-auto md:w-[55%] w-[60%] mt-[1px] "></div>
        </div>
        <div className=" flex justify-between text-[14px] md:w-[90%] w-[98%] mx-auto ">
          <div className=" flex md:gap-[1rem] gap-[0.3rem]">
            <p className="text-[#ADADAD]">150 SOL</p>
           
          </div>
          <div>
            <p>1500 SOL</p>
          </div>
        </div>
      </div>
      {/* card 3 is here */}
      <div className=" md:w-[800px] w-[95%] mx-auto border bg-[#141414] border-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-400 rounded-[24px] h-[120px] flex justify-between items-center p-4">
        <div className=" flex gap-[0.5rem] items-center">
          <HiOutlineLockClosed className=" text-[25px]" />
          <p>Liquidity Lock</p>
        </div>
        <div className=" flex flex-col justify-between items-end">
          <p className=" text-[#ADADAD] text-[14px]">🔥 FOREVER</p>
        </div>
      </div>
      {/* card 4 is here */}
      <div className=" md:w-[800px] w-[95%] mx-auto border bg-[#141414] border-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-400 rounded-[24px] h-[120px] flex justify-between items-center p-4">
        <div className=" flex gap-[0.5rem]">
          <div className=" border flex justify-center items-center h-[30px] w-[30px] rounded-full">
            <IoPersonOutline />
          </div>
          <p>Participants</p>
        </div>
        <div className=" flex flex-col justify-between items-end">
          <p className=" text-[#ADADAD] text-[14px]">94</p>
        </div>
      </div>
      {/* card 5 is here */}
      <div className=" md:w-[800px] w-[95%] mx-auto border bg-[#141414] border-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-400 rounded-[24px] h-[120px] flex justify-between items-center p-4">
        <div className=" flex gap-[0.5rem] items-center">
          <img src="/home/tokenomic.svg" alt="" />
          <p>Tokenomics</p>
        </div>
        <div className=" flex flex-col justify-between items-end">
          <p className=" text-[#fff] text-[14px]">10/10</p>
        </div>
      </div>
      {/* card 6 is here */}
      <div className=" md:w-[800px] w-[95%] mx-auto border bg-[#141414] border-lime-400 border-b-lime-400 border-t-yellow-400 border-r-yellow-400 rounded-[24px] h-[120px] flex  flex-col p-4">
        <div className="">
          <p className=" md:mx-[2rem] mx-0 md:text-[16px] text-[12px] ">
            Discuss this Launchpad in our dedicated Telegram community
          </p>
        </div>
        <div className=" flex  gap-[0.5rem] items-center my-[0.5rem] ">
          <FaTelegramPlane className=" text-[24px]" />
          <p className=" text-[#ADADAD] text-[14px]">$KAA's Community </p>
        </div>
      </div>
    </div>
  );
};

export default Salehero;

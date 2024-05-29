import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import Btn from "./Btn";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Tabs = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className=" md:w-[90%] w-[98%] mx-auto bg-[#121212] shadow-lg rounded-[24px] p-4">
      {/* nav is here */}

      <div className=" flex md:gap-[3rem] gap-[1rem] text-[14px] border-b-[0.5px]  border-[#FFFFFF]/30">
        <p
          onClick={() => {
            setTabs(0);
          }}
          className={`${
            tabs === 0
              ? " border-b border-[#33BC24] py-4 text-[#33BC24]"
              : " py-4   "
          } cursor-pointer`}
        >
          PRESALE
        </p>
        <p
          onClick={() => {
            setTabs(1);
          }}
          className={`${
            tabs === 1
              ? " border-b border-[#33BC24] py-4 text-[#33BC24]"
              : " py-4   "
          } cursor-pointer`}
        >
          INFO
        </p>
        <p
          onClick={() => {
            setTabs(2);
          }}
          className={`${
            tabs === 2
              ? " border-b border-[#33BC24] py-4 text-[#33BC24]"
              : " py-4   "
          } cursor-pointer`}
        >
          AUDIT
        </p>
      </div>
      {/* tab1 is here */}
      <div className={`${tabs === 0 ? "block" : "hidden"}`}>
        <div className="py-[2rem] flex gap-[1rem]">
          <div className=" text-[40px] ">
            <CiCircleInfo />
          </div>
          <div>
            <p className=" text-[#ADADAD]">MIN BUY/ MAX BUY</p>
            <p>1/20 SOL</p>
          </div>
        </div>
        <div className=" bg-[#363636] md:w-[800px] w-[98%] h-[190px] rounded-[30px] shadow-lg p-4">
          <p>Spend how much SOL?</p>
          <div className=" flex justify-end">
            <p className=" text-[14px]">Balance: 0 SOL</p>
          </div>
          <div className=" flex gap-[1rem] items-center relative">
            <p className=" md:text-[24px] text-[16px]">0</p>
            <input
              type="text"
              className=" w-[95%] bg-transparent border h-[60px] rounded-[20px]"
            />
            <button className=" bg-[#000] px-4 py-2 rounded-[50px] absolute right-4">
              MAX
            </button>
          </div>
          <div className=" my-[1rem] flex md:gap-[1rem] gap-[0.5rem]">
            <button className=" bg-[#000] px-4 py-2 rounded-[50px] hover:border border-b-[#3FF74E] border-l-[#3FF74E] border-r-[#F7B801] border-t-[#F7B801] transition-all ease-linear delay-150 ">
              25%
            </button>
            <button className=" bg-[#000] px-4 py-2 rounded-[50px] hover:border border-b-[#3FF74E] border-l-[#3FF74E] border-r-[#F7B801] border-t-[#F7B801] transition-all ease-linear delay-150  ">
              50%
            </button>
            <button className=" bg-[#000] px-4 py-2 rounded-[50px] hover:border border-b-[#3FF74E] border-l-[#3FF74E] border-r-[#F7B801] border-t-[#F7B801] transition-all ease-linear delay-150  ">
              75%
            </button>
            <button className=" bg-[#000] px-4 py-2 rounded-[50px]  hover:border border-b-[#3FF74E] border-l-[#3FF74E] border-r-[#F7B801] border-t-[#F7B801] transition-all ease-linear delay-150 ">
              100%
            </button>
          </div>
        </div>
        <Btn text={"Purchase"} style={"w-[98%] my-[2rem] "} />
      </div>

      {/* tab2 is here */}
      <div className={`${tabs === 1 ? "block" : "hidden"}  h-[450px] p-6`}>
        <div className=" md:w-[90%] w-[95%] mx-auto flex flex-col gap-[1rem] md:text-[22px] text-[14px] font-bold">
          <p>$KKA’s 🦥 THE SOL MEME</p>
          <p>
            $KKA’S is a lazy MFR like you. Leading you through the meme jungle.
          </p>
          <p>Token Name: KAA</p>
          <p>Supply: 1 billion</p>
          <p>Softcap: 150</p>
          <p>Hardcap: 1,500</p>
          <p>Tokens will be sent to your wallet after the Presale ends.</p>
          <div className=" flex gap-[1rem] items-center">
            <p>Community Links:</p>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a
                href="#"
                className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a
                href="#"
                className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a
                href="#"
                className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* tab2 is here */}
      <div className={`${tabs === 2 ? "block" : "hidden"}  h-[450px] p-6`}>
        <div className=" md:w-[90%] w-[95%] mx-auto flex flex-col gap-[1rem] md:text-[22px] text-[14px] font-bold">
          <p>The team is fully known to the $KKA’S owners, is KYC'd and the code was audited. The launch is a SAFU launch.</p>
            <p>KYC Certificate</p>
            <p>AUDIT Certificate</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

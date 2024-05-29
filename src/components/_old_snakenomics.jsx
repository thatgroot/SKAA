import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Snakenomics = () => {
  return (
    <div id="SNAKENOMICS">
      <div className=" my-[4rem]">
        <div className=" flex justify-center items-center gap-[0.5rem]">
          <img src="/home/token.svg" alt="" />
          <h2 className=" md:text-[56px] text-[30px] font-bold text-center ">
            SNAKENOMICS
          </h2>
        </div>
        <img src="/home/bottom_border.svg" alt="" className="mx-auto " />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center relative   xl:px-24">
        <div
          className="flex m-auto lg:m-0  flex-col justify-start items-center self-stretch gap-3 p-6 rounded border border-[#33bc24]"
          style={{ boxShadow: "0px 0px 10px 0 rgba(171,171,171,0.25)" }}
        >
          <div className="flex justify-start items-end  relative gap-[7px]">
            <p className=" w-[149.53px] h-[30.8px] text-[28px] font-bold text-left text-white">
              Token Info
            </p>
            <div className=" w-6 h-[29px] relative overflow-hidden bg-[url('mint-01.png.png')]" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start self-stretch ">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative gap-2.5">
              <p className="self-stretch    text-lg text-left text-[#b7b4bb]">
                Token Type: solana
              </p>
              <p className="self-stretch    text-lg text-left text-[#b7b4bb]">
                Marketing: 5%
              </p>
              <p className="self-stretch  w-[224.5px] h-[45px] text-lg text-left text-[#b7b4bb]">
                Total Supply: 1 billion
              </p>
              <p className="self-stretch  w-[224.5px] h-[41px] text-lg text-left text-[#b7b4bb]">
                10% - Marketing/Airdrops
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative gap-[7px]">
              <p className="self-stretch    text-lg text-left text-[#b7b4bb]">
                Token Name: KAA
              </p>
              <p className="self-stretch    text-lg text-left text-[#b7b4bb]">
                LP : 30%
              </p>
              <p className="self-stretch  w-[224.5px] h-[45px] text-lg text-left text-[#b7b4bb]">
                Presale $1 SOL = 50,000 $KAA
              </p>
              <p className="self-stretch    text-lg text-left text-[#b7b4bb]">
                60% - Presale
              </p>
            </div>
          </div>
        </div>
        <svg
          width={369}
          height={110}
          viewBox="0 0 369 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-1"
          preserveAspectRatio="none"
        >
          <path
            d="M238.118 55.4C238.118 85.2559 213.915 109.459 184.059 109.459C154.203 109.459 130 85.2559 130 55.4C130 25.5441 154.203 1.34119 184.059 1.34119C213.915 1.34119 238.118 25.5441 238.118 55.4Z"
            fill="#33BC24"
          />
          <path
            d="M238.118 54.9L368.118 54.9M0 54.9L130 54.9M238.118 55.4C238.118 85.2559 213.915 109.459 184.059 109.459C154.203 109.459 130 85.2559 130 55.4C130 25.5441 154.203 1.34119 184.059 1.34119C213.915 1.34119 238.118 25.5441 238.118 55.4Z"
            stroke="#33BC24"
          />
        </svg>
        <div
          className="flex flex-col m-auto lg:m-0 justify-center items-center self-stretch  gap-[7px] p-6 rounded border border-[#33bc24]"
          style={{ boxShadow: "0px 0px 10px 0 rgba(171,171,171,0.25)" }}
        >
          <div className="flex flex-col justify-start items-start  relative gap-3">
            <p className="self-stretch  text-[28px] font-bold text-left text-white">
              Contract Address
            </p>
            <div className="flex flex-col justify-start items-start self-stretch  relative gap-1">
              <p
                style={{
                  wordWrap: "break-word",
                  maxWidth:"240px"
                }}
                className="text-[17px] text-left text-[#b7b4bb]"
              >
                CiUQu8TwkwWXfr3CnUQuU28WY8gn9uo6EXXBs5kjhUgH
              </p>
              <div className="flex justify-start items-center self-stretch  relative gap-1.5">
                <p className=" text-[17.578125px] text-left text-[#33bc24]">
                  Check solana{" "}
                </p>
                <svg
                  width={14}
                  height={12}
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  preserveAspectRatio="none"
                >
                  <path
                    d="M7.99219 0.174988L7.18359 0.966003L11.4551 5.23749H0.117188V6.36249H11.4551L7.18359 10.6164L7.99219 11.425L13.6172 5.79999L7.99219 0.174988Z"
                    fill="#33BC24"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snakenomics;

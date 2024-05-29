import React from "react";

// images are here

const Partners = () => {
  const Near = "/home/Near.svg";
  const cardsData = [
    {
      id: 1,
      image: "/solana.svg",
    },

    {
      id: 2,
      image: "/raydium.svg",
    },

    {
      id: 3,
      image: "/pinksale.svg",
    },
    {
      id: 4,
      image: "/home/jupiter.svg",
    },
    {
      id: 5,
      image: "/home/dextools.svg",
    },
    {
      id: 6,
      image: "/home/dexview.png",
    },
    {
      id: 7,
      image: "/home/birdeye.ico",
    },
    {
      id: 8,
      image: "/home/coingecko.png",
    },
  ];
  return (
    <div className="py-[4rem]" id="PARTNERS">
      <div className=" my-[4rem] ">
        <div className=" flex justify-center items-center gap-[0.5rem]">
          <img src="/home/token.svg" alt="" />
          <h2 className=" md:text-[56px] text-[30px] font-bold text-center ">
            PARTNERS
          </h2>
        </div>
        <img src="/home/bottom_border.svg" alt="" className="mx-auto " />
      </div>

      {/*  */}
      {/* <div>
      <p className="md:text-[30px] text-[16px] md:text-base text-center w-[95%] mx-auto font-normal leading-[40px] md:tracking-[5.7px] tracking-[3px] md:my-[1rem] my-0 ">
      Buy NFT & Stake “KAA's Crypto Comed” Now
        </p>
        <p className="md:text-[20px] text-[14px] w-[95%] mx-auto font-normal tracking-[1.4px] leading-[20px] md:my-[1rem] my-[0.5rem] text-center ">
          <span className="text-[#33BC24]">KAA’s</span> tokens can ONLY be
          staked to <span className="text-[#33BC24]">KAA’s </span> NFT inside
        </p>
      </div> */}
      {/* cards is here */}
     <div className={"px-12 lg:px-auto"}>
     <div className="cards flex flex-wrap gap-6 lg:mx-auto py-4 px-8 max-w-[1440px] w-full items-center justify-center  rounded-[19px] mainDiv ">
        {cardsData.map(({ id, image }) => {
          return (
            <div
              key={id}
              className=" bg-[#141B22] p-4 rounded-[14px] shadow-xl flex  justify-center items-center w-fit"
              style={{
                background: "var(--Surface-main, #141B22)",
              }}
            >
              <img
                src={image}
                alt=""
                className="h-[60px]"
                style={{
                  backgroundColor: id === 6 ? "white" : "transparent",
                  borderRadius: id === 6 ? "30px" : "unset",
                }}
              />
            </div>
          );
        })}
      </div>
     </div>
    </div>
  );
};

export default Partners;

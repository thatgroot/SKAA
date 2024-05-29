// import logo from "../../assets/landingpage/logo.svg";
// import mdi_theme from "../../assets/landingpage/mdi_theme.svg";
import Btn from "./Btn";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { ConnectWallet } from "./ConnectWallet";
import { useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navHeight, setNavHeight] = useState(96);

  const togglerNav = () => {
    setToggle(!toggle);
  };


  useEffect(() => {
    const navElement = document.getElementById('top_bar');
    setNavHeight(navElement.offsetHeight);
  }, []);

  const scrollToElement = (element) => {
    const elementTop = element.offsetTop - navHeight;
    window.scrollTo(0, elementTop);
  };

  const navlinks = [
    {
      link: "#Home",
      text: "HOME",
    },
    {
      link: "#presale",
      text: "Presale",
    },

    {
      link: "#SNAKENOMICS",
      text: "SNAKENOMICS",
    },
    {
      link: "#roadmap",
      text: "ROAD MAP",
    },
    {
      link: "#PARTNERS",
      text: "PARTNERS",
    },
  ];
  return (
    <>
      <div id={"top_bar"} className=" fixed w-[100%] bg-[#040B11] z-[999]">
        {/* for large screens */}
        <div className="md:block hidden">
          <nav className="flex md:justify-around  items-center item-start py-[2rem] md:flex-row flex-col">
            <div>
              <Link to={"/"} className="flex">
                <img src="/logo.svg" alt="" className=" w-[200px]" />
              </Link>
            </div>
            <div className="flex gap-[3rem] items-center  md:flex-row flex-col md:my-0 my-2">
              {navlinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-[#fff] cursor-pointer hover:text-[#0BDF0E] duration-all transition-all font-clash-display text-16 font-bold leading-24 tracking-wider uppercase list-none"
                    onClick={(event) => {
                      event.preventDefault();
                      const target = document.querySelector(item.link);
                      scrollToElement(target);
                    }}
                  >
                    <span >{item.text}</span>
                  </li>
                );
              })}
            </div>
            <div className="flex items-center gap-[1rem]">
              <ConnectWallet  text={"Connect"}/>
              <div className="flex gap-[1rem] text-[24px]  ">
                <a
                   href="https://t.me/KAAthePythonSOL"  target="_blank"
                  className=" bg-[#fff]/30 p-[1rem] rounded-full hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-150  "
                >
                  <BiLogoTelegram className="  " />
                </a>
                <a
               href="https://twitter.com/KAAcoinSOL" target="_blank"
                  className="  bg-[#fff]/30 p-[1rem] rounded-full hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-150"
                >
                  <IoLogoTwitter />
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* for mobile view */}
        <div className="md:hidden block">
          <nav className="flex md:justify-around  flex-col py-[1.5rem]">
            <div>
              <Link to={"/"} className="flex">
                <img src="/logo.svg" alt="" />
              </Link>
            </div>
            <div className="text-[#fff] absolute right-10 top-10 text-[26px]">
              {toggle ? (
                <RxCross1 onClick={togglerNav} />
              ) : (
                <AiOutlineMenu onClick={togglerNav} />
              )}
            </div>

            <div
              className={`${
                toggle
                  ? "absolute h-screen bg-black w-[70%] top-[12%] transition-all ease-out delay-150"
                  : "hidden"
              }`}
            >
              <div className="flex gap-[2rem] absolute left-[5%]   flex-col md:my-0 my-1">
                {navlinks.map((items, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[#fff] font-clash-display text-16 font-bold leading-26 tracking-wider uppercase list-none"
                    >
                      <a href={items.link}> {items.text}</a>
                    </li>
                  );
                })}
              </div>
              <div className="absolute bottom-[55%] left-[5%]">
                <Link to="/presale">
                  <Btn text={"Connect Wallet"} style={"z-[999] w-[100%]"} />
                </Link>
                <div className="flex gap-[1rem] text-[24px] my-[2rem] ">
                <a
                  href="https://t.me/KAAthePythonSOL"  target="_blank"
                  className=" bg-[#fff]/30 p-[1rem] rounded-full hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-150  "
                >
                  <BiLogoTelegram className="  " />
                </a>
                <a
                  href="https://twitter.com/KAAcoinSOL" target="_blank"
                  className="  bg-[#fff]/30 p-[1rem] rounded-full hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-150"
                >
                  <IoLogoTwitter />
                </a>
              </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

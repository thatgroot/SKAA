import { useRef } from "react";
import "./Styles.css";
import { useLayoutEffect } from "react";
import gsap, { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { roadmap } from "data";
const Roadmap = () => {
  const path = useRef(null);
  const ballRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const ctx = gsap.context(() => {
      let myAnim = gsap.timeline({
        scrollTrigger: {
          trigger: path.current,
          scrub: 2,
          start: "top 18%",
          end: "bottom bottom",
        },
      });
      myAnim.to(ballRef.current, {
        ease: "none",
        motionPath: {
          path: path.current,
          align: path.current,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 1,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="roadmapbg pl-3 md:pl-0 relative flex items-center justify-center flex-col gap-24"
      id="roadmap"
    >
      <div className=" my-[4rem]">
        <div className=" flex justify-center items-center gap-[0.5rem]">
          <img src="/home/token.svg" alt="" />
          <h2 className=" md:text-[56px] text-[30px] font-bold text-center ">
            ROAD MAP
          </h2>
        </div>
        <img src="/home/bottom_border.svg" alt="" className="mx-auto " />
      </div>
      {/* road map is here */}
      <div className="flex flex-col  lg:gap-0 md:flex-row gap-24  w-[100%] px-6 md:px-24">
        <div
          className={
            "w-full justify-start flex flex-col items-center md:items-start 2lx:justify-start gap-24 md:gap-[180px]"
          }
        >
          {roadmap.one.map(({ phase, subtitle, options }, index) => (
            <div key={index} className={"relative max-w-[465px] w-full"}>
              <div
                className={
                  "absolute w-[35%] border-l-[6px] border-t-[6px] border-b-[6px] border-green-500 border-solid  -left-[24px] -top-[24px] -bottom-[24px] rounded-tl-[16px] rounded-bl-[16px] "
                }
              ></div>
              <div className="flex flex-col rounded-lg bg-white/5 border border-[#33bc24] items-center justify-center px-4  md:px-8 lg:px-10  xl:px-12 py-6">
                <div className="flex flex-col justify-center items-start gap-3">
                  <div className="flex flex-col justify-start items-center self-stretch relative">
                    <p className="text-xl font-medium text-left text-white">
                      {phase}
                    </p>
                    <p className="self-stretch text-[32px] font-bold text-left text-white">
                      {subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    {options.map(({ title, text }, _index) => (
                      <div
                        key={_index}
                        className="flex flex-col justify-start items-start relative"
                      >
                        <div className="flex justify-start items-center relative gap-[9px]">
                          <svg
                            width={11}
                            height={11}
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                          >
                            <circle
                              cx="5.36719"
                              cy="5.80658"
                              r={5}
                              fill="#D9D9D9"
                            />
                          </svg>
                          <p className="text-base font-medium text-left text-white">
                            {title}
                          </p>
                        </div>
                        <p className="text-xs font-medium text-left text-white/70">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* img is here */}
        <div className="-translate-y-1/2 hidden lg:block z-[999] sm:top-0 sm:translate-y-0 my-auto">
          <svg
            width="63"
            height="1276"
            viewBox="0 0 63 1276"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={path}
              d="M24.9226 0.0743408L4.31421 208.031C2.76632 223.651 2.92495 239.447 4.78609 255.017L60.8205 723.801C62.7337 739.806 62.6214 756.069 60.4875 772.035L2.88799 1202.98C-0.32818 1227.04 1.06175 1251.67 6.95209 1274.98"
              stroke="#33BC24"
              stroke-width="1.6"
              stroke-dasharray="3 3"
            />
          </svg>

          <img
            ref={ballRef}
            src={"/ball.svg"}
            className="absolute left-0 top-0 w-[73px] object-contain -z-10 sm:z-10"
            alt=""
          />
        </div>
        <div
          className={
            "w-full justify-start flex flex-col  items-center md:items-end 2lx:justify-start gap-24 md:gap-[180px]"
          }
        >
          {roadmap.two.map(({ phase, subtitle, options }, index) => (
            <div key={index} className={"relative max-w-[465px] w-full"}>
              <div
                className={
                  "absolute w-[35%] border-l-[6px] border-t-[6px] border-b-[6px] border-green-500 border-solid  -left-[24px] -top-[24px] -bottom-[24px] rounded-tl-[16px] rounded-bl-[16px] "
                }
              ></div>
              <div className="flex flex-col rounded-lg bg-white/5 border border-[#33bc24] items-center justify-center px-4  md:px-8 lg:px-10  xl:px-12 py-6">
                <div className="flex flex-col justify-center items-start gap-3">
                  <div className="flex flex-col justify-start items-center self-stretch relative">
                    <p className="text-xl font-medium text-left text-white">
                      {phase}
                    </p>
                    <p className="self-stretch text-[32px] font-bold text-left text-white">
                      {subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    {options.map(({ title, text }, _index) => (
                      <div
                        key={_index}
                        className="flex flex-col justify-start items-start relative"
                      >
                        <div className="flex justify-start items-center relative gap-[9px]">
                          <svg
                            width={11}
                            height={11}
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                          >
                            <circle
                              cx="5.36719"
                              cy="5.80658"
                              r={5}
                              fill="#D9D9D9"
                            />
                          </svg>
                          <p className="text-base font-medium text-left text-white">
                            {title}
                          </p>
                        </div>
                        <p className="text-xs font-medium text-left text-white/70">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {roadmap.three.map(({ phase, subtitle, options }, index) => (
        <div key={index} className={"relative max-w-[465px] w-full"}>
          <div
            className={
              "absolute w-[35%] border-l-[6px] border-t-[6px] border-b-[6px] border-green-500 border-solid  -left-[24px] -top-[24px] -bottom-[24px] rounded-tl-[16px] rounded-bl-[16px] "
            }
          ></div>
          <div className="flex flex-col rounded-lg bg-white/5 border border-[#33bc24] items-center justify-center px-4  md:px-8 lg:px-10  xl:px-12 py-6">
            <div className="flex flex-col justify-center items-start gap-3">
              <div className="flex flex-col justify-start items-center self-stretch relative">
                <p className="text-xl font-medium text-left text-white">
                  {phase}
                </p>
                <p className="self-stretch text-[32px] font-bold text-left text-white">
                  {subtitle}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                {options.map(({ title, text }, _index) => (
                  <div
                    key={_index}
                    className="flex flex-col justify-start items-start relative"
                  >
                    <div className="flex justify-start items-center relative gap-[9px]">
                      <svg
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <circle
                          cx="5.36719"
                          cy="5.80658"
                          r={5}
                          fill="#D9D9D9"
                        />
                      </svg>
                      <p className="text-base font-medium text-left text-white">
                        {title}
                      </p>
                    </div>
                    <p className="text-xs font-medium text-left text-white/70">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;

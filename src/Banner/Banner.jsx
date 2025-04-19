"use client";
import Image from "next/image";
import React from "react";
import BannerStyle from "./BannerStyle/BannerStyle.module.css";

const Banner = () => {
  return (
    <div className="bg-[#14111a]">
      <div>
        <div className=" text-white relative lg:h-[91vh]">
          <div className="absolute lg:top-[-300px] lg:left-[400px]">
            <div
              className={`lg:w-[600px] 2xl:w-[1100px] z-20 mx-auto lg:h-[500px] bg-[#712e64]  blur-[200px] ${BannerStyle.curve}`}
            ></div>
          </div>
          <div className="lg:w-[1150px] 2xl:w-[1320px] w-full mx-auto">
            <div>
              <div className="lg:translate-y-[240px] translate-y-[10px]">
                <h4 className="lg:text-sm text-[12px]">Start Registration:</h4>
                <h2 className="text-lg lg:text-3xl">25 March 2025</h2>
              </div>
              <div className="2xl:absolute lg:absolute lg:top-[-85px] 2xl:top-[-85px] 2xl:right-[650px] lg:right-[480px] 2xl:ml-0 ml-[70px]">
                <Image
                  src={"/man.svg"}
                  alt="man"
                  width={660}
                  height={660}
                  className="2xl:w-[660px] 2xl:h-[865px] lg:w-[550px] lg:h-[720px] w-[400px] h-[500px]"
                />
              </div>
            </div>
          </div>
          <div className="z-10 absolute w-full lg:bottom-[130px] bottom-[50px]">
            <div className="relative">
              <div
                className={`z-0 bg-gradient-to-b from-gray-950 to-gray-950 absolute top-[-120px] lg:h-[330px] w-full opacity-[7%]`}
              ></div>
              <div className="lg:flex-row flex-col flex lg:items-center justify-between lg:w-[1150px] 2xl:w-[1320px] mx-auto relative z-10">
                <div className="leading-[60px] text-white">
                  <h2 className="text-lg lg:text-[45px] tracking-[-1px] uppercase">
                    Join Ultimate
                  </h2>
                  <h2 className="text-lg lg:text-[45px] tracking-[-1px] uppercase">
                    Online Conference Experience
                  </h2>
                </div>
                <div>
                  <button className="text-white bg-[#7546FF] lg:px-6 px-3 py-2 lg:py-3 text-[12px]">
                    GET TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute 2xl:bottom-0 lg:bottom-[16px] w-full">
            <div className="bg-[#7546FF] py-1 2xl:py-3 lg:py-2 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2 lg:gap-6">
                  <div className="flex items-center gap-2 lg:gap-6">
                    <div className="bg-[#FFD6B3] w-[15px] h-[15px] rounded-full"></div>
                    <h2 className="text-sm lg:text-3xl">Online Conference</h2>
                    <div className="bg-[#FFD6B3] w-[15px] h-[15px] rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-6">
                    <h1
                      className={`text-sm 2xl:text-3xl lg:text-2xl ${BannerStyle.textStroke}`}
                    >
                      Nextgen Conference Experience
                    </h1>
                    <div className="bg-[#FFD6B3] w-[15px] h-[15px] rounded-full"></div>
                  </div>
                  <div className="hidden 2xl:flex lg:hidden items-center gap-2 lg:gap-6">
                    <h2 className="text-base 2xl:text-3xl lg:text-2xl">
                      Online Conference
                    </h2>
                    <div className="bg-[#FFD6B3] w-[15px] h-[15px] rounded-full"></div>
                  </div>
                  <div className="hidden 2xl:flex lg:flex items-center gap-2 lg:gap-6">
                    <h1
                      className={`text-base 2xl:text-3xl lg:text-2xl ${BannerStyle.textStroke}`}
                    >
                      Nextgen Conference Experience
                    </h1>

                    <div className="bg-[#FFD6B3] w-[15px] h-[15px] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 lg:h-[715px] 2xl:h-[855px] lg:w-[70px] 2xl:w-[70px] z-50">
          <div className="relative h-full w-full bg-gradient-to-b from-[#291728] via-[#29212d] to-[#201f22]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-white flex flex-row items-center 2xl:gap-8 lg:gap-10">
              <h2 className="text-white lg:text-[8px] 2xl:text-[12px]">
                Social: FB . IN . TW . DR
              </h2>
              <h2
                className={`text-white lg:text-[8px] 2xl:text-[12px] ${BannerStyle.line} relative`}
              >
                +1-416-8241228
              </h2>
              <h2 className="text-white lg:text-[8px] 2xl:text-[12px] 2xl:mt-0 lg:mt-6">
                Info@daevnt.org.world
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

"use client";
import { ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import FooterStyle from "./FooterStyle/FooterStyle.module.css";

const Footer = () => {
  return (
    <div className="bg-[#000006] h-[610px] lg:h-[500px] relative ">
      <div className={`${FooterStyle.ellipse} lg:py-0 py-4`}>
        <div className={`${FooterStyle.circle} hidden lg:block`}></div>
        <div className="w-full h-[1px] bg-[#171c59] absolute bottom-[70px] lg:bottom-[80px]"></div>
        <div className="lg:translate-y-[150px]">
          <div className="2xl:w-[1320px] lg:w-[1150px] mx-auto">
            <div>
              <div className="flex lg:flex-row flex-col justify-between">
                <div>
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src={"/logo.svg"}
                      alt="logo"
                      width={45}
                      height={45}
                    />
                    <h2 className="text-white text-3xl">Daevnt</h2>
                  </div>
                  <p className="text-[12px] text-gray-300 lg:w-[280px] mt-4">
                    Pellentesque nec tempor sapien. Pellentesque vel placerat
                    nibh. Suspendisse venenatis.
                  </p>
                  <div className="mt-4 lg:mt-14 border-b-[1px] border-[#171c59] gap-4 flex lg:flex-row flex-col justify-between lg:items-center pb-4">
                    <h2 className="text-[12px] text-gray-300">
                      Enter Your Email Address
                    </h2>
                    <button className="flex items-center gap-1 text-[12px] text-gray-300">
                      Subscribe <ArrowRight size={16} />{" "}
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-white flex lg:flex-row flex-col gap-4 lg:gap-[150px]">
                    <div>
                      <h6 className="text-base">Useful Link</h6>
                      <ul className="space-y-2 mt-2">
                        <li className="text-[12px] text-gray-300">
                          About Events
                        </li>
                        <li className="text-[12px] text-gray-300">
                          Future Events
                        </li>
                        <li className="text-[12px] text-gray-300">
                          Top Speakers
                        </li>
                        <li className="text-[12px] text-gray-300">Faq Pages</li>
                        <li className="text-[12px] text-gray-300">
                          Get Ticket
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-base">Address:</h6>
                      <p className="text-[12px] text-gray-300 lg:w-[160px] mt-2">
                        {" "}
                        012-7 Roanoke Rd, Toronto ON M4A 1E3, Canada
                      </p>
                      <div className="mt-4">
                        <h6 className="text-sm text-gray-300">Address:</h6>
                        <h4 className="text-[15px] text-gray-200">
                          +1-416-8241228
                        </h4>
                      </div>
                      <div className="mt-4">
                        <h6 className="text-sm text-gray-300">Email:</h6>
                        <h4 className="text-[15px] text-gray-200">
                          info@email.com
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:translate-y-[230px]">
          <div className="2xl:w-[1320px] lg:w-[1150px] mx-auto">
            <div className="flex lg:flex-row flex-col justify-between items-center py-6">
              <div>
                <h2 className="text-[12px] text-gray-300">
                  © 2025 Thememarch. All Rights Reserved.
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-[35px] rounded-full h-[35px] bg-white flex justify-center items-center">
                    <Image
                      src={"/facebook.svg"}
                      alt="logo"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="w-[35px] rounded-full h-[35px] border-[1px] border-gray-200 flex justify-center items-center">
                    <Linkedin size={15} strokeWidth={2} color="#ffffff" />
                  </div>
                  <div className="w-[35px] rounded-full h-[35px] border-[1px] border-gray-200 flex justify-center items-center">
                    <Image
                      src={"/twitter.svg"}
                      alt="logo"
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className="w-[35px] rounded-full h-[35px] border-[1px] border-gray-200 flex justify-center items-center">
                    <Image
                      src={"/instragram.svg"}
                      alt="logo"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-[37%] lg:block hidden">
          <Image src={"/handMic.svg"} alt="logo" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

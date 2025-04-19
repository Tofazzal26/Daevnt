"use client";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

const RecentBlog = () => {
  return (
    <div className="container mx-auto">
      <div className="text-white py-8 lg:py-[100px]">
        <div>
          <h2 className="text-xl lg:text-4xl lg:mb-0 mb-4 lg:ml-[165px]">
            RECENT BLOG
          </h2>
          <div className="flex lg:flex-row lg:gap-0 gap-4 flex-col justify-center items-center">
            <div>
              <Image
                src={"/blog1.svg"}
                width={400}
                height={400}
                alt="conferrence"
                className="lg:w-[370px] lg:h-[370px] w-full"
              />
              <h2 className="w-[400px]">
                Beyond the Stage: How Conferences Inspire Innovation &
                Collaboration
              </h2>
              <div className="flex items-center gap-4 lg:gap-[60px] text-sm mt-2">
                <h2 className="flex items-center gap-2">
                  {" "}
                  <span className="w-[8px] h-[8px] bg-[#7546FF] rounded-full"></span>{" "}
                  EventTrends
                </h2>
                <h2>12 Feb 2025</h2>
              </div>
            </div>
            <div>
              <Image
                src={"/blog2.svg"}
                width={400}
                height={400}
                alt="conferrence"
                className="lg:w-[370px] lg:h-[370px] w-full"
              />
              <h2 className="w-[400px]">
                Beyond the Stage: How Conferences Inspire Innovation &
                Collaboration
              </h2>
              <div className="flex items-center gap-4 lg:gap-[60px] text-sm mt-2">
                <h2 className="flex items-center gap-2">
                  {" "}
                  <span className="w-[8px] h-[8px] bg-[#7546FF] rounded-full"></span>{" "}
                  EventTrends
                </h2>
                <h2>12 Feb 2025</h2>
              </div>
            </div>
            <div>
              <Image
                src={"/blog3.svg"}
                width={400}
                height={400}
                alt="conferrence"
                className="lg:w-[370px] lg:h-[370px] w-full"
              />
              <h2 className="w-[400px]">
                The Ultimate Guide to Engaging & Immersive Event Experiences
              </h2>
              <div className="flex items-center gap-4 lg:gap-[60px] text-sm mt-2">
                <h2 className="flex items-center gap-2">
                  {" "}
                  <span className="w-[8px] h-[8px] bg-[#7546FF] rounded-full"></span>{" "}
                  EventTrends
                </h2>
                <h2>12 Feb 2025</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;

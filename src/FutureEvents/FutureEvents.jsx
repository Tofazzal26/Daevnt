import React from "react";
import FutureStyle from "./FutureStyle/FutureStyle.module.css";
const FutureEvents = () => {
  return (
    <div>
      <div className="lg:w-[1320px] w-full mx-auto">
        <div>
          <div className="text-white">
            <h2 className="text-4xl text-white uppercase pt-8 pb-3 lg:pt-20 lg:pb-4">
              FutureEvents
            </h2>
            <div className="py-10">
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[200px]">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className={`border-b-[1px] border-gray-50 w-[195px]`}>
                        The Future of AI Trends &
                      </h2>
                      <h2 className={`border-b-[1px] border-gray-50 w-[90px]`}>
                        Innovations
                      </h2>
                      <h4 className="text-[#D5D4D4] text-[12px] mt-2">
                        <span className="text-sm">Location:</span> Main
                        Auditorium, TechHub
                      </h4>
                      <h4 className="text-[#D5D4D4] text-[12px]">
                        Conference Center
                      </h4>
                    </div>
                    <div>
                      <h2 className="text-5xl lg:text-7xl ">25</h2>
                      <h4 className="text-sm text-[#D5D4D4]">March 2025</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm text-[#afafaf]">
                        10:00 AM – 12:00 PM
                      </h2>
                    </div>
                    <div>
                      <button className="bg-[#7546FF] text-white text-[12px] px-4 py-2 lg:px-8 lg:py-4">
                        BUY TICKET
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[200px] border-y-[1px] border-gray-700 py-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2>Cybersecurity Protecting</h2>
                      <h2>Data & Privacy</h2>
                      <h4 className="text-[#D5D4D4] text-[12px] mt-2">
                        <span className="text-sm">Location:</span> Room A2,
                        TechHub
                      </h4>
                      <h4 className="text-[#D5D4D4] text-[12px]">
                        Conference Center
                      </h4>
                    </div>
                    <div>
                      <h2 className="text-5xl lg:text-7xl ">27</h2>
                      <h4 className="text-sm text-[#D5D4D4]">March 2025</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm text-[#afafaf]">
                        10:00 AM – 12:00 PM
                      </h2>
                    </div>
                    <div>
                      <button className=" text-white text-[12px]">Free</button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[200px] border-b-[1px] border-gray-700 pb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2>Blockchain & Web3 Beyond</h2>
                      <h2>Cryptocurrency</h2>
                      <h4 className="text-[#D5D4D4] text-[12px] mt-2">
                        <span className="text-sm">Location:</span> Innovation
                        Stage, TechHub
                      </h4>
                      <h4 className="text-[#D5D4D4] text-[12px]">
                        Conference Center
                      </h4>
                    </div>
                    <div>
                      <h2 className="text-5xl lg:text-7xl ">15</h2>
                      <h4 className="text-sm text-[#D5D4D4]">March 2025</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm text-[#afafaf]">
                        10:00 AM – 12:00 PM
                      </h2>
                    </div>
                    <div>
                      <button className=" text-white text-[12px]">
                        Sold Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureEvents;

import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:py-[100px] py-4">
        <div className="flex lg:flex-row flex-col justify-evenly items-center">
          <div>
            <Image
              src={"/priceImg.svg"}
              width={560}
              height={560}
              alt="conferrence"
              className="lg:w-[560px] lg:h-[560px] w-full"
            />
          </div>
          <div className="lg:w-[600px] w-full">
            <div>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="faq-accordion" defaultChecked />
                  <div className="collapse-title text-sm font-medium text-gray-800">
                    1. How can I register for an event?
                  </div>
                  <div className="collapse-content text-[13px] text-gray-600">
                    <p>
                      You can register online by visiting our event page,
                      selecting your preferred event, and completing the
                      registration form. You’ll receive a confirmation email
                      with event details after successful registration.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-y-[1px] border-base-300">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-sm font-medium text-gray-800">
                    2. Are tickets refundable if I can’t attend?
                  </div>
                  <div className="collapse-content text-[13px] text-gray-600">
                    <p>
                      Tickets are generally non-refundable, but you may contact
                      us for exceptional cases or ticket transfer options.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-sm font-medium text-gray-800">
                    3. Will there be networking opportunities?
                  </div>
                  <div className="collapse-content text-[13px] text-gray-600">
                    <p>
                      Yes! Most of our events include networking sessions before
                      and after the main talks.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-y-[1px] border-base-300">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-sm font-medium text-gray-800">
                    4. Will there be networking opportunities?
                  </div>
                  <div className="collapse-content text-[13px] text-gray-600">
                    <p>
                      Yes! Most of our events include networking sessions before
                      and after the main talks.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-sm font-medium text-gray-800">
                    5. Will there be networking opportunities?
                  </div>
                  <div className="collapse-content text-[13px] text-gray-600">
                    <p>
                      Yes! Most of our events include networking sessions before
                      and after the main talks.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-y-[1px] border-base-300">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-sm font-medium text-gray-800">
                    6. Will there be networking opportunities?
                  </div>
                  <div className="collapse-content text-[13px] text-gray-600">
                    <p>
                      Yes! Most of our events include networking sessions before
                      and after the main talks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly lg:flex-row flex-col lg:ml-[100px] mt-4 lg:mt-[100px]">
          <div>
            <h2 className="text-xl lg:text-4xl uppercase">Pricing</h2>
            <p className="text-[12px] lg:w-[250px] text-[#303030] mt-3 lg:mb-0 mb-3">
              Join leading educators, researchers, and policymakers in a global
              dialogue on the future of learning.
            </p>
          </div>
          <div className="flex gap-4 lg:gap-10">
            <div className="bg-[#F8F6FF] p-2 lg:p-10">
              <div className="text-center">
                <h2 className="">Premium Pass</h2>
                <h2 className="text-xl lg:text-4xl my-3">$99</h2>
                <h4 className="flex items-center justify-center gap-2 text-sm">
                  1 Visitor <ChevronDown size={18} />{" "}
                </h4>
              </div>
              <div className="space-y-2 mt-4 lg:mt-8">
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px] text-[#303030]">
                  {" "}
                  <Check size={18} /> Access to all keynote sessions
                </h2>
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px] text-[#303030]">
                  {" "}
                  <Check size={18} /> Entry to exhibition area
                </h2>
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px] text-[#303030]">
                  {" "}
                  <Check size={18} /> No access to workshops
                </h2>
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px] text-[#303030]">
                  {" "}
                  <Check size={18} /> No networking lounge access
                </h2>
              </div>
              <div className="mt-8 text-center">
                <button className="bg-[#7546FF] lg:px-8 px-4 py-2 lg:py-4 text-white text-[10px] lg:text-[12px]">
                  GET TICKET NOW
                </button>
              </div>
            </div>
            <div className="bg-[#7546FF] text-white p-2 lg:p-10">
              <div className="text-center">
                <h2 className="">Ordinary Pass</h2>
                <h2 className="text-xl lg:text-4xl my-3">$149</h2>
                <h4 className="flex items-center justify-center gap-2 text-sm">
                  1 Visitor <ChevronDown size={18} />{" "}
                </h4>
              </div>
              <div className="space-y-2 mt-4 lg:mt-8 text-gray-200">
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px]">
                  {" "}
                  <Check size={18} /> Access to all keynote sessions
                </h2>
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px]">
                  {" "}
                  <Check size={18} /> Entry to exhibition area
                </h2>
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px]">
                  {" "}
                  <Check size={18} /> No access to workshops
                </h2>
                <h2 className="flex items-center gap-1 text-[10px] lg:text-[12px]">
                  {" "}
                  <Check size={18} /> No networking lounge access
                </h2>
              </div>
              <div className="mt-8 text-center">
                <button className="bg-white lg:px-8 px-4 py-2 lg:py-4 text-black text-[10px] lg:text-[12px]">
                  GET TICKET NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

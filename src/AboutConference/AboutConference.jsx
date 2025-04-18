import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutConference = () => {
  return (
    <div className="lg:w-[1320px] w-full mx-auto">
      <div className="text-white lg:pt-10 lg:pb-24">
        <div>
          <div className="flex lg:flex-row flex-col items-center gap-16">
            <div>
              <div className="flex flex-col">
                <Image
                  src={"/conderence1.svg"}
                  width={600}
                  height={400}
                  alt="conferrence"
                  className="lg:w-[540px] lg:h-[560px]"
                />
                <div className="flex lg:flex-row flex-col items-center">
                  <Image
                    src={"/conderence2.svg"}
                    width={340}
                    height={350}
                    alt="conferrence"
                    className="lg:w-[320px] w-full lg:h-[330px]"
                  />
                  <Image
                    src={"/conderence3.svg"}
                    width={240}
                    height={340}
                    alt="conferrence"
                    className="lg:w-[240px] w-full lg:h-[330px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-sm text-white">About the Conference</h2>
                <div className="lg:mb-8 mb-4 mt-2 lg:mt-3">
                  <h2 className="text-xl lg:text-4xl">
                    Where Innovation Meets
                  </h2>
                  <h2 className="text-xl lg:text-4xl">Virtual Experiences</h2>
                </div>
              </div>
              <div>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div>
                      <Check size={20} color="#7546FF" />
                    </div>
                    <div>
                      <h2 className="text-sm text-white">
                        Expert keynote speakers
                      </h2>
                      <p className="text-sm text-[#D5D4D4] lg:w-[400px] mt-2.5">
                        Hear from thought leaders and industry pioneers as they
                        share their expertise, trends, and strategies to keep
                        you ahead of the curve.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <Check size={20} color="#7546FF" />
                    </div>
                    <div>
                      <h2 className="text-sm text-white">Education Programs</h2>
                      <p className="text-sm text-[#D5D4D4] lg:w-[400px] mt-2.5">
                        Engage in interactive sessions, workshops, and
                        masterclasses designed to expand your skills and
                        knowledge in your field.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <Check size={20} color="#7546FF" />
                    </div>
                    <div>
                      <h2 className="text-sm text-white">Notes & Highlights</h2>
                      <p className="text-sm text-[#D5D4D4] lg:w-[400px] mt-2.5">
                        Stay informed with key takeaways, session summaries, and
                        exclusive insights to ensure you never miss a moment of
                        valuable content.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-base lg:text-xl lg:w-[380px] lg:mt-10">
                    Join us as we redefine conference for the 21st century!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;

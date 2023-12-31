import Icon1 from "@/public/whatWeGet/1.png";
import Icon2 from "@/public/whatWeGet/2.png";
import Icon3 from "@/public/whatWeGet/3.png";
import Icon4 from "@/public/whatWeGet/4.png";
import WhatYouGetImg from "@/public/whatWeGet/kid.jpeg";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";
import Button from "../common/Button";

const Index = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-28">
      <div className="mycontainer">
        <div>
          <TextAnimation
            letters={[
              {
                letter: `What`,
                delay: "0",
              },
              {
                letter: `you`,
                delay: "0.10",
              },
              {
                letter: `get`,
                delay: "0.20",
              },
            ]}
            className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
          />
          <TextAnimation
            letters={[
              {
                letter: `with`,
                delay: "0.30",
              },
              {
                letter: `our`,
                delay: "0.40",
              },
              {
                letter: `report`,
                delay: "0.50",
              },
            ]}
            className={
              "text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue mt-0 md:mt-4"
            }
          />
        </div>
        <div className="mt-20 flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap justify-between gap-20 items-center">
          <div className="w-full lg:w-9/12 overflow-y-hidden">
            <Zoom>
              <Image
                src={WhatYouGetImg}
                alt=""
                className="rounded-3xl object-cover h-[615px]"
              />
              <div className="bg-my-bg-pastel rounded-3xl mt-5 p-8">
                <p className="text-xl md:text-3xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Ready to connect
                  <br />
                  to your future?
                </p>
                <div className="mt-10">
                  <Button
                    value={"Start your journey"}
                    className={"!bg-[#262A56]"}
                  />
                </div>
              </div>
            </Zoom>
          </div>
          <div className="space-y-7 w-full lg:w-auto">
            <Fade bottom>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={Icon1} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Unlock your potential: Insights for life, love, and career
                  success
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={Icon2} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Personalized reports guiding you to your destiny
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={Icon3} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Navigate life with confidence: Expert analysis for every step
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={Icon4} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Your blueprint for personal and professional fulfillment
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import BoxIcon from "@/public/whatWeGet/box.svg";
import MsgIcon from "@/public/whatWeGet/msg.svg";
import NetIcon from "@/public/whatWeGet/net.svg";
import ShareIcon from "@/public/whatWeGet/share.svg";
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
                letter: `do`,
                delay: "0.10",
              },
              {
                letter: `you`,
                delay: "0.20",
              },
            ]}
            className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
          />
          <TextAnimation
            letters={[
              {
                letter: `get`,
                delay: "0.30",
              },
              {
                letter: `with`,
                delay: "0.40",
              },
              {
                letter: `our`,
                delay: "0.50",
              },
              {
                letter: `report`,
                delay: "0.60",
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
                  Ready to take
                  <br />
                  orders easily?
                </p>
                <div className="mt-10">
                  <Button value={"Start using links"} />
                </div>
              </div>
            </Zoom>
          </div>
          <div className="space-y-7 w-full lg:w-auto">
            <Fade bottom>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={ShareIcon} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Unlock Your Potential: Insights for Life, Love, and Career
                  Success.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={BoxIcon} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Personalized Reports Guiding You to Your Destiny.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={MsgIcon} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Navigate Life with Confidence: Expert Analysis for Every Step.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={NetIcon} alt="" />
                </div>
                <p className="mt-5 text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                  Your Blueprint for Personal and Professional Fulfillment.
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

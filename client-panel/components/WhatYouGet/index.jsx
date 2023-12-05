import ArrowRight from "@/public/storeLinks/arrowRight.svg";
import BoxIcon from "@/public/whatWeGet/box.svg";
import MsgIcon from "@/public/whatWeGet/msg.svg";
import NetIcon from "@/public/whatWeGet/net.svg";
import ShareIcon from "@/public/whatWeGet/share.svg";
import WhatYouGetImg from "@/public/whatWeGet/kid.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";

const Index = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-28 mt-32">
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
                <p className="text-4xl font-semibold">
                  Ready to take
                  <br />
                  orders easily?
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-my-blue rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2 mt-10"
                >
                  <p className="text-white">Start using links</p>
                  <Image src={ArrowRight} alt="" />
                </motion.button>
              </div>
            </Zoom>
          </div>
          <div className="space-y-7 w-full lg:w-auto">
            <Fade bottom>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={ShareIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  Unlock Your Potential: Insights for Life, Love, and Career
                  Success.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={BoxIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  Personalized Reports Guiding You to Your Destiny.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={MsgIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  Navigate Life with Confidence: Expert Analysis for Every Step.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={NetIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
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

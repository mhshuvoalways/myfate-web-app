import Image from "next/image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import WhatYouGetImg from "@/public/whatWeGet/woman.webp";
import ShareIcon from "@/public/whatWeGet/share.svg";
import BoxIcon from "@/public/whatWeGet/box.svg";
import MsgIcon from "@/public/whatWeGet/msg.svg";
import NetIcon from "@/public/whatWeGet/net.svg";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";

const Index = () => {
  return (
    <div className="bg-gray-50 py-10 mt-32">
      <div className="w-10/12 mx-auto container">
        <div>
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            What do you get
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-yellow mt-0 md:mt-4">
            with store links
          </p>
        </div>
        <Fade bottom>
          <div className="mt-10 flex justify-between gap-20">
            <div className="w-9/12 -mb-72 overflow-y-hidden">
              <Image
                src={WhatYouGetImg}
                alt=""
                className="rounded-3xl object-cover h-3/6"
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
            </div>
            <div className="space-y-7">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={ShareIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  One link you can share everywhere and anywhere
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={BoxIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  A beautiful storefront to showcase your products
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={MsgIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  Get order & delivery details as a message on whatsapp
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex justify-center items-center p-4">
                  <Image src={NetIcon} alt="" />
                </div>
                <p className="text-2xl mt-5">
                  A dashboard to track how well your store is performing
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Index;

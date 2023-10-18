import Image from "next/image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import TextAnimation from "../TextAnimation";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";
import Storefront from "@/public/gswsl/storefront.webp";

const index = ({ pricing }) => {
  return (
    <div
      className={`mt-32 py-10 bg-cover bg-no-repeat ${
        pricing ? "pricing-gswsl" : "gswsl"
      }`}
    >
      <div className="w-10/12 mx-auto flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap gap-10 container">
        <div className="w-full md:w-7/12 space-y-10">
          {pricing ? (
            <div>
                <TextAnimation
                  letters="Get started in"
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold"
                />
                <TextAnimation
                  letters="5 minutes"
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue"
                />
            </div>
          ) : (
            <div>
              <Fade top>
                <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                  Get started with
                </p>
                <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-yellow">
                  store links
                </p>
              </Fade>
            </div>
          )}
          <Fade bottom>
            <p className="text-2xl">
              Your customers buy from you on Whatsapp, don’t take them away,
              make it easier with Catlog.
            </p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-my-blue rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2 mt-10"
            >
              <p className="text-white">
                {pricing ? "Get stated for free" : "Start using links"}
              </p>
              <Image src={ArrowRight} alt="" />
            </motion.button>
          </Fade>
        </div>
        <div>
          <Image src={Storefront} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default index;

import Link from "next/link";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";

const index = ({ pricing }) => {
  return (
    <div
      className={`py-28 bg-center bg-no-repeat gswsl flex items-center ${
        pricing && "mt-20"
      }`}
    >
      <div className="mycontainer">
        <div className="w-full md:w-7/12 space-y-10">
          <div>
            <TextAnimation
              letters={[
                {
                  letter: "Connect",
                  delay: "0",
                },
                {
                  letter: "to",
                  delay: "0.20",
                },
                {
                  letter: "your",
                  delay: "0.30",
                },
                {
                  letter: "future",
                  delay: "0.40",
                },
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <TextAnimation
              letters={[
                {
                  letter: "Find",
                  delay: "0.50",
                },
                {
                  letter: "out",
                  delay: "0.60",
                },
                {
                  letter: "now",
                  delay: "0.70",
                },
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue"
            />
          </div>
          <Fade bottom>
            <div>
              <p className="text-2xl">Connect to your future</p>
              <p className="text-xl text-my-blue">Find out now</p>
            </div>
            <Link href={"/payment"}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-my-blue rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2"
              >
                <p className="text-white">Start Now</p>
                <Image src={ArrowRight} alt="" />
              </motion.button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;

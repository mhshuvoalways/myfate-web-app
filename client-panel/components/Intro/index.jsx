import Homebg from "@/public/intro/homebg.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimationText from "../Utils/TextAnimation";

const index = () => {
  return (
    <div className="bg-[#FFFAF3] pt-20">
      <div className="flex justify-center items-center mycontainer">
        <div className="space-y-8">
          <AnimationText
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            textCenter
            letters={[
              {
                letter: "Connect",
                delay: "0.15",
              },
              {
                letter: "to",
                delay: "0.25",
              },
              {
                letter: "Your",
                delay: "0.35",
              },
              {
                letter: "Future",
                delay: "0.45",
              },
            ]}
          />
          <AnimationText
            className="text-4xl sm:text-5xl md:text-6xl text-my-blue font-semibold"
            textCenter
            letters={[
              {
                letter: "Find",
                delay: "0.55",
              },
              {
                letter: "out",
                delay: "0.65",
              },
              {
                letter: "now",
                delay: "0.75",
              },
            ]}
          />
          <p className="text-xl text-center">
            Ancient Wisdom from Korea and Japan
          </p>
          <Link href={"/pricing"}>
            <motion.p
              whileTap={{ scale: 0.9 }}
              className="bg-gray-900 w-full text-white py-2 text-lg font-semibold rounded text-center sm:w-40 mx-auto mt-10"
            >
              Start now
            </motion.p>
          </Link>
          <Image src={Homebg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default index;

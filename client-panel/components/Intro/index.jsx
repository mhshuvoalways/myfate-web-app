import Mobile from "@/public/intro/mobile.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zoom } from "react-reveal";
import AnimationText from "../Utils/TextAnimation";

const index = () => {
  return (
    <div className="relative w-full intro pb-10 sm:pb-0">
      <div className="h-auto sm:h-screen flex justify-between items-center gap-5 flex-wrap sm:flex-nowrap mycontainer">
        <div className="w-full sm:w-6/12 space-y-10">
          <AnimationText
            letters={[
              {
                letter: "Explore",
                delay: "0.15",
              },
              {
                letter: "Your",
                delay: "0.25",
              },
              {
                letter: "Future",
                delay: "0.45",
              },
            ]}
            className={
              "font-semibold pt-10 font-gabarito text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            }
          />
          <Zoom>
            <p className="text-xl w-8/12 sm:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, leo sit amet hendrerit facilisis, tortor
              sapien elementum ligula, id lobortis dolor tortor eu massa.
              Phasellus vitae auctor justo.
            </p>
          </Zoom>
          <Zoom right>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 text-white rounded px-5 py-2 font-gabarito"
            >
              Explore More
            </motion.button>
          </Zoom>
        </div>
        <Zoom>
          <div className="z-10 w-10/12 mx-auto sm:w-5/12 static sm:absolute right-0 top-10 hidden sm:block">
            <Image src={Mobile} alt="" className="rounded-md w-full" />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default index;

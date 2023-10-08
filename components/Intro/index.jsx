import Image from "next/image";
import { motion } from "framer-motion";
import { Zoom } from "react-reveal";
import Mobile from "@/public/intro/mobile.jpg";

const index = () => {
  return (
    <div className="relative w-full intro mt-1">
      <div className="flex justify-between items-center h-auto lg:h-screen gap-5 flex-wrap lg:flex-nowrap w-11/12 mx-auto">
        <div className="w-full md:w-6/12 space-y-2 lg:space-y-5">
          <Zoom>
            <p className="text-8xl font-semibold pt-10 font-gabarito">
              Explore Your Future
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, leo sit amet hendrerit facilisis, tortor
              sapien elementum ligula, id lobortis dolor tortor eu massa.
              Phasellus vitae auctor justo.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, leo sit amet hendrerit facilisis, tortor
              sapien elementum ligula, id lobortis dolor tortor eu massa.
              Phasellus vitae auctor justo.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <div className="z-10 w-10/12 mx-auto lg:w-6/12 static lg:absolute right-0 top-0">
            <Image src={Mobile} alt="" className="rounded-md w-full" />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default index;

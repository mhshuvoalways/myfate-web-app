import Image from "next/image";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-reveal";
import Review1 from "@/public/reviews/1.webp";
import Review2 from "@/public/reviews/2.webp";
import Review3 from "@/public/reviews/3.webp";
import Review4 from "@/public/reviews/4.webp";

const index = () => {
  return (
    <div className="w-11/12 mx-auto mt-32">
      <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">{`I won't say much. Proven by clear results.
Every month, we are flooded with reviews like the ones below.`}</p>
      <Fade bottom>
        <div className="flex justify-between md:flex-nowrap flex-wrap">
          <div className="w-full md:w-[32%]">
            <div className="flex items-center gap-5 mt-10">
              <p className="bg-my-blue w-7 h-7 rounded-full flex justify-center items-center text-white text-2xl p-2 pt-4">
                ❝
              </p>
              <p className="text-xl md:text-2xl">
                There was an increase of about 100 cases compared to last month!
              </p>
            </div>
            <Image
              src={Review1}
              alt=""
              className="bg-white p-1 shadow-xl rounded-xl border mt-5 w-full"
            />
          </div>
          <div className="w-full md:w-[32%]">
            <div>
              <div className="flex items-center gap-5 mt-10">
                <p className="bg-my-blue w-7 h-7 rounded-full flex justify-center items-center text-white text-2xl p-2 pt-4">
                  ❝
                </p>
                <p className="text-xl md:text-2xl">
                  The number of first-time visitors is approximately doubled.
                </p>
              </div>
              <Image
                src={Review2}
                alt=""
                className="bg-white p-1 shadow-xl rounded-xl border mt-5 w-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-5 mt-10">
                <p className="bg-my-blue w-7 h-7 rounded-full flex justify-center items-center text-white text-2xl p-2 pt-4">
                  ❝
                </p>
                <p className="text-xl md:text-2xl">
                  Thanks to your hard work, my confidence has increased~ ^^
                </p>
              </div>
              <Image
                src={Review4}
                alt=""
                className="bg-white p-1 shadow-xl rounded-xl border mt-5 w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[32%]">
            <div className="flex items-center gap-5 mt-10">
              <p className="bg-my-blue w-7 h-7 rounded-full flex justify-center items-center text-white text-2xl p-2 pt-4">
                ❝
              </p>
              <p className="text-xl md:text-2xl">
                As of yesterday in June, 17 cases had been accepted.
              </p>
            </div>
            <Image
              src={Review3}
              alt=""
              className="bg-white p-1 shadow-xl rounded-xl border mt-5 w-full"
            />
          </div>
        </div>
      </Fade>
      <Zoom right>
        <motion.p
          whileTap={{ scale: 0.9 }}
          className="bg-my-blue text-white text-2xl text-center w-6/12 mx-auto rounded-full py-4 mt-16 cursor-pointer font-semibold"
        >
          Find Out
        </motion.p>
      </Zoom>
    </div>
  );
};

export default index;

import Image from "next/image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import FormPhoto from "@/public/form/form.webp";

const index = () => {
  return (
    <div className="bg-my-cream py-10 mt-32">
      <div className="w-11/12 mx-auto">
        <p className="text-5xl font-semibold text-center">Find Out Now</p>
        <p className="text-my-blue text-center text-xl mt-5">
          Create your free, personalized, and highly customizable birth chart
          (natal chart) by filling in the form below. Using our tools you can
          hide/show planets and asteroids, choose a house system, customize
          orbs, show declinations, sidereal charts and more...
        </p>
        <div className="mt-10 flex gap-5 flex-wrap md:flex-nowrap justify-between">
          <div className="bg-white md:w-6/12 p-10 w-full">
            <p className="text-my-gold font-semibold">FILL IN YOUR DETAILS</p>
            <div className="space-y-12 mt-10">
              <div className="flex gap-5 flex-wrap md:flex-nowrap">
                <p className="text-xl">My name is: </p>
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 px-2 w-full md:w-9/12 ml-auto"
                />
              </div>
              <div className="flex gap-5 flex-wrap md:flex-nowrap">
                <p className="text-xl">I was born in: </p>
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 px-2 w-full md:w-8/12 ml-auto"
                  placeholder="City, State, Country"
                />
              </div>
              <div className="flex gap-5 flex-wrap md:flex-nowrap">
                <p className="text-xl">My date of birth is:</p>
                <div className="flex gap-5 items-center">
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 outline-0 px-2 w-4/12 md:w-2/12 ml-auto text-center"
                    placeholder="MM"
                    maxLength={2}
                  />
                  <p className="font-semibold">/</p>
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 outline-0 px-2 w-4/12 md:w-2/12 ml-auto text-center"
                    placeholder="DD"
                    maxLength={2}
                  />
                  <p className="font-semibold">/</p>
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 outline-0 px-2 w-4/12 md:w-2/12 ml-auto text-center"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
            <motion.p
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 text-white py-2 text-center mt-10 font-semibold cursor-pointer"
            >
              CREATE
            </motion.p>
          </div>
          <Fade bottom>
            <Image
              src={FormPhoto}
              alt=""
              className="w-10/12 mx-auto"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;

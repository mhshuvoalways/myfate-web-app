import Image from "next/image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import RadioBtn from "./RadioBtn";
import FormPhoto from "@/public/form/form.webp";
import { useState } from "react";

const Index = () => {
  const [selectBtn, setSelectBtn] = useState("am");

  const radioHandler = (value) => {
    setSelectBtn(value);
  };

  return (
    <div className="bg-my-cream py-10 mt-32">
      <div className="w-11/12 mx-auto">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Find Out Now
        </p>
        <p className="text-my-blue text-center text-xl mt-5">
          Create your free, personalized, and highly customizable birth chart
          (natal chart) by filling in the form below. Using our tools you can
          hide/show planets and asteroids, choose a house system, customize
          orbs, show declinations, sidereal charts and more...
        </p>
        <div className="mt-10 flex gap-5 flex-wrap items-center md:flex-nowrap justify-center">
          <div className="bg-white md:w-6/12 p-10 w-full">
            <p className="text-my-gold font-semibold">FILL IN YOUR DETAILS</p>
            <div className="space-y-12 mt-10">
              <div className="flex gap-2 flex-wrap md:flex-nowrap">
                <p className="text-xl w-[30%]">My name is: </p>
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 px-2 w-full"
                />
              </div>
              <div className="flex gap-5 flex-wrap md:flex-nowrap">
                <p className="text-xl w-[30%]">I was born in: </p>
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 px-2 w-full"
                  placeholder="City, State, Country"
                />
              </div>
              <div className="flex gap-5 flex-wrap md:flex-nowrap">
                <p className="text-xl w-[65%]">My date of birth is:</p>
                <div className="space-y-10">
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      className="border-b-2 border-gray-400 outline-0 px-2 w-full text-center"
                      placeholder="MM"
                      maxLength={2}
                    />
                    <p className="font-semibold">/</p>
                    <input
                      type="text"
                      className="border-b-2 border-gray-400 outline-0 px-2 w-full text-center"
                      placeholder="DD"
                      maxLength={2}
                    />
                    <p className="font-semibold">/</p>
                    <input
                      type="text"
                      className="border-b-2 border-gray-400 outline-0 px-2 w-full text-center"
                      placeholder="YYYY"
                      maxLength={4}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      className="border-b-2 border-gray-400 outline-0 px-2 w-full text-center"
                      placeholder="hh"
                      maxLength={2}
                    />
                    <p className="font-semibold">:</p>
                    <input
                      type="text"
                      className="border-b-2 border-gray-400 outline-0 px-2 w-full text-center"
                      placeholder="mm"
                      maxLength={2}
                    />
                    <RadioBtn
                      myName="am"
                      selectBtn={selectBtn}
                      radioHandler={radioHandler}
                    />
                    <RadioBtn
                      myName="pm"
                      selectBtn={selectBtn}
                      radioHandler={radioHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
            <motion.p
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 text-white py-2 text-center mt-10 font-semibold cursor-pointer rounded-full"
            >
              CREATE
            </motion.p>
          </div>
          <Fade bottom>
            <Image
              src={FormPhoto}
              alt=""
              className="md:w-full w-10/12 mx-auto"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Index;
